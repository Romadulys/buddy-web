import { NextRequest } from "next/server";
import { getStripe } from "@/lib/stripe";
import type Stripe from "stripe";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature || !process.env.STRIPE_WEBHOOK_SECRET) {
    return new Response("Missing signature or webhook secret", { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error(`Webhook signature verification failed: ${message}`);
    return new Response(`Webhook Error: ${message}`, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed":
        await handleCheckoutCompleted(
          event.data.object as Stripe.Checkout.Session
        );
        break;

      case "customer.subscription.created":
        await handleSubscriptionCreated(
          event.data.object as Stripe.Subscription
        );
        break;

      case "customer.subscription.updated":
        await handleSubscriptionUpdated(
          event.data.object as Stripe.Subscription
        );
        break;

      case "customer.subscription.deleted":
        await handleSubscriptionDeleted(
          event.data.object as Stripe.Subscription
        );
        break;

      case "invoice.payment_succeeded":
        await handleInvoicePaymentSucceeded(
          event.data.object as Stripe.Invoice
        );
        break;

      case "invoice.payment_failed":
        await handleInvoicePaymentFailed(event.data.object as Stripe.Invoice);
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error(`Webhook handler error for ${event.type}: ${message}`);
    return new Response(`Handler Error: ${message}`, { status: 500 });
  }

  return new Response("OK", { status: 200 });
}

// --- Handlers ---

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const planKey = session.metadata?.buddy_plan_key;
  console.log(
    `[stripe] checkout.session.completed — session=${session.id} plan=${planKey} customer=${session.customer} subscription=${session.subscription}`
  );

  // When a database is added, persist the subscription record here:
  // - Link Stripe customer ID to the internal user
  // - Record subscription ID, plan key, status
  // - Send welcome / confirmation email
}

async function handleSubscriptionCreated(subscription: Stripe.Subscription) {
  const planKey = subscription.metadata?.buddy_plan_key;
  console.log(
    `[stripe] subscription.created — id=${subscription.id} status=${subscription.status} plan=${planKey} customer=${subscription.customer}`
  );

  // Persist: create subscription record, activate features for the plan
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  console.log(
    `[stripe] subscription.updated — id=${subscription.id} status=${subscription.status} cancel_at=${subscription.cancel_at}`
  );

  // Persist: update subscription status, handle plan changes, cancellation scheduling
  // Key statuses: active, past_due, canceled, unpaid, paused
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  console.log(
    `[stripe] subscription.deleted — id=${subscription.id} customer=${subscription.customer}`
  );

  // Persist: mark subscription as canceled, revoke plan features
}

async function handleInvoicePaymentSucceeded(invoice: Stripe.Invoice) {
  const subscriptionId =
    invoice.parent?.subscription_details?.subscription ?? null;
  console.log(
    `[stripe] invoice.payment_succeeded — id=${invoice.id} subscription=${subscriptionId} amount=${invoice.amount_paid}`
  );

  // Persist: record payment, extend access, update billing history
}

async function handleInvoicePaymentFailed(invoice: Stripe.Invoice) {
  const subscriptionId =
    invoice.parent?.subscription_details?.subscription ?? null;
  console.log(
    `[stripe] invoice.payment_failed — id=${invoice.id} subscription=${subscriptionId} attempt=${invoice.attempt_count}`
  );

  // Persist: flag subscription as past_due, notify customer, trigger dunning flow
}
