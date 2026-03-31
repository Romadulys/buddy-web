import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Buddy and our mission to keep what matters safe.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        About Buddy
      </h1>
      <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
        Buddy was born from a simple idea: you should never have to worry about
        losing the things — and beings — you love most.
      </p>
    </div>
  );
}
