import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50">
              Never Lose What Matters
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Buddy is the GPS tracker that keeps your pets, family, and
              belongings safe — with real-time location, 4G connectivity, and
              all-day battery life.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/products"
                className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Shop Now
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-100"
              >
                View Plans <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-zinc-50 py-24 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Why Buddy?
            </h2>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-800">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Choose the plan that fits your needs and start tracking today.
          </p>
          <Link
            href="/pricing"
            className="mt-8 inline-block rounded-full bg-zinc-900 px-8 py-3 text-sm font-semibold text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            See Pricing
          </Link>
        </div>
      </section>
    </>
  );
}

const features = [
  {
    title: "Real-Time GPS",
    description:
      "Track your pet or belongings in real-time with precise GPS positioning updated every few seconds.",
  },
  {
    title: "4G Connectivity",
    description:
      "Works anywhere with cellular coverage — no Wi-Fi or Bluetooth range limits.",
  },
  {
    title: "All-Day Battery",
    description:
      "Designed for long battery life so you can track without worrying about constant recharging.",
  },
  {
    title: "Geofence Alerts",
    description:
      "Set safe zones and get instant notifications when your tracker leaves the area.",
  },
  {
    title: "Activity Tracking",
    description:
      "Monitor daily activity levels and trends to keep your pet healthy and active.",
  },
  {
    title: "Waterproof Design",
    description:
      "Built to handle rain, puddles, and adventure. IP67 rated for peace of mind.",
  },
];
