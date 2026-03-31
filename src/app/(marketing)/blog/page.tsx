import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Tips, stories, and updates from the Buddy team.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Blog
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Tips, stories, and updates from the Buddy team.
      </p>
      {/* Blog posts will be loaded from Sanity CMS */}
    </div>
  );
}
