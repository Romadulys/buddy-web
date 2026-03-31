import type { Metadata } from "next";
import { BILLING_PLANS } from "@/lib/stripe-billing";
import { CheckoutButton } from "@/components/shop/checkout-button";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Choose the Buddy subscription plan that fits your needs.",
};

function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Simple, Transparent Pricing
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          All plans include the Buddy GPS tracker device. Choose the
          subscription that fits your tracking needs.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        {BILLING_PLANS.map((plan) => (
          <div
            key={plan.key}
            className={`relative flex flex-col rounded-2xl border p-8 ${
              plan.highlight
                ? "border-zinc-900 ring-2 ring-zinc-900 dark:border-white dark:ring-white"
                : "border-zinc-200 dark:border-zinc-700"
            }`}
          >
            {plan.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-zinc-900 px-4 py-1 text-xs font-semibold text-white dark:bg-white dark:text-zinc-900">
                Most Popular
              </span>
            )}
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              {plan.name}
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {plan.description}
            </p>
            <p className="mt-6">
              <span className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
                {formatPrice(plan.monthlyPriceCents)}
              </span>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                /month
              </span>
            </p>
            <ul className="mt-8 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300"
                >
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-zinc-900 dark:text-zinc-50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CheckoutButton
                planKey={plan.key}
                label={plan.highlight ? "Get Started" : "Choose Plan"}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
