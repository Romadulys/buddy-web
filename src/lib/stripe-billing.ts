import type Stripe from "stripe";

/**
 * Buddy subscription plans — these map to Stripe Product + Price objects.
 *
 * In test mode, products and prices are created on-demand via the
 * `ensureStripeBillingSetup()` helper. In production, set the env vars
 * to point at pre-created objects in the Stripe Dashboard.
 */
export interface BillingPlan {
  key: string;
  name: string;
  description: string;
  /** Monthly price in cents */
  monthlyPriceCents: number;
  features: string[];
  /** Stripe Product ID (populated after setup) */
  productId?: string;
  /** Stripe Price ID (populated after setup) */
  priceId?: string;
  highlight?: boolean;
}

export const BILLING_PLANS: BillingPlan[] = [
  {
    key: "basic",
    name: "Basic",
    description: "Essential tracking for everyday pet owners.",
    monthlyPriceCents: 499,
    features: [
      "Real-time GPS location",
      "Activity monitoring",
      "Safe-zone alerts",
      "7-day location history",
    ],
  },
  {
    key: "pro",
    name: "Pro",
    description: "Advanced features for active pet parents.",
    monthlyPriceCents: 999,
    features: [
      "Everything in Basic",
      "30-day location history",
      "Health & fitness insights",
      "Multi-pet dashboard",
      "Priority support",
    ],
    highlight: true,
  },
  {
    key: "family",
    name: "Family",
    description: "Full coverage for multi-pet households.",
    monthlyPriceCents: 1999,
    features: [
      "Everything in Pro",
      "Unlimited location history",
      "Up to 5 trackers",
      "Family sharing",
      "Vet report exports",
      "Dedicated account manager",
    ],
  },
];

/**
 * Returns the plan list with Stripe IDs resolved from env vars.
 * Env vars follow the pattern: STRIPE_PRICE_ID_BASIC, STRIPE_PRICE_ID_PRO, etc.
 */
export function getPlansWithPrices(): BillingPlan[] {
  return BILLING_PLANS.map((plan) => {
    const envKey = `STRIPE_PRICE_ID_${plan.key.toUpperCase()}`;
    const priceId = process.env[envKey];
    const productEnvKey = `STRIPE_PRODUCT_ID_${plan.key.toUpperCase()}`;
    const productId = process.env[productEnvKey];
    return { ...plan, priceId: priceId ?? plan.priceId, productId: productId ?? plan.productId };
  });
}

/**
 * Idempotent setup: creates Stripe Products and Prices in test mode if
 * they don't already exist. Returns the plans with populated IDs.
 *
 * Safe to call on every server start — searches for existing products by
 * metadata key before creating.
 */
export async function ensureStripeBillingSetup(
  stripe: Stripe
): Promise<BillingPlan[]> {
  const results: BillingPlan[] = [];

  for (const plan of BILLING_PLANS) {
    // Check env vars first
    const envPriceKey = `STRIPE_PRICE_ID_${plan.key.toUpperCase()}`;
    const envProductKey = `STRIPE_PRODUCT_ID_${plan.key.toUpperCase()}`;
    if (process.env[envPriceKey] && process.env[envProductKey]) {
      results.push({
        ...plan,
        priceId: process.env[envPriceKey],
        productId: process.env[envProductKey],
      });
      continue;
    }

    // Search for existing product by metadata
    const existing = await stripe.products.search({
      query: `metadata["buddy_plan_key"]:"${plan.key}"`,
    });

    let product: Stripe.Product;
    if (existing.data.length > 0) {
      product = existing.data[0];
    } else {
      product = await stripe.products.create({
        name: `Buddy ${plan.name}`,
        description: plan.description,
        metadata: { buddy_plan_key: plan.key },
      });
    }

    // Find or create the recurring price
    const prices = await stripe.prices.list({
      product: product.id,
      active: true,
      type: "recurring",
      limit: 10,
    });

    let price = prices.data.find(
      (p) =>
        p.unit_amount === plan.monthlyPriceCents &&
        p.recurring?.interval === "month"
    );

    if (!price) {
      price = await stripe.prices.create({
        product: product.id,
        unit_amount: plan.monthlyPriceCents,
        currency: "usd",
        recurring: { interval: "month" },
        metadata: { buddy_plan_key: plan.key },
      });
    }

    results.push({ ...plan, productId: product.id, priceId: price.id });
  }

  return results;
}
