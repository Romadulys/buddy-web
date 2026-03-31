import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore the Buddy GPS tracker lineup.",
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Buddy GPS Tracker
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Compact, waterproof, and built for real life.
      </p>
      {/* Product cards will be rendered here from CMS data */}
    </div>
  );
}
