import type { Metadata } from "next";
import Link from "next/link";
import { getStripe } from "@/lib/stripe";

export const metadata: Metadata = {
  title: "Subscription Confirmed",
};

interface Props {
  searchParams: Promise<{ session_id?: string }>;
}

export default async function CheckoutSuccessPage({ searchParams }: Props) {
  const { session_id } = await searchParams;

  let planName: string | undefined;
  let customerEmail: string | undefined;

  if (session_id && process.env.STRIPE_SECRET_KEY) {
    try {
      const session = await getStripe().checkout.sessions.retrieve(session_id);
      customerEmail = session.customer_details?.email ?? undefined;
      planName = session.metadata?.buddy_plan_key;
    } catch {
      // Session retrieval failed — show generic success
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Welcome to Buddy{planName ? ` ${planName.charAt(0).toUpperCase() + planName.slice(1)}` : ""}!
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Your subscription is now active.
        {customerEmail
          ? ` A confirmation has been sent to ${customerEmail}.`
          : " Check your email for confirmation details."}
      </p>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        Your Buddy tracker is on its way. You can manage your subscription any
        time from your account page.
      </p>
      <div className="mt-8 flex items-center justify-center gap-4">
        <Link
          href="/account"
          className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Go to Account
        </Link>
        <Link
          href="/"
          className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
