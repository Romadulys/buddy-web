import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Account",
};

export default async function AccountPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  return (
    <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          My Account
        </h1>
        <form action="/auth/signout" method="POST">
          <button
            type="submit"
            className="text-sm text-zinc-500 underline hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            Sign out
          </button>
        </form>
      </div>

      <div className="space-y-6">
        {/* Profile */}
        <section className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
          <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Profile
          </h2>
          <div className="flex items-center gap-4">
            {user.user_metadata?.avatar_url && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={user.user_metadata.avatar_url}
                alt="Profile"
                className="h-12 w-12 rounded-full"
              />
            )}
            <div>
              <p className="font-medium text-zinc-900 dark:text-zinc-50">
                {user.user_metadata?.full_name ?? "—"}
              </p>
              <p className="text-sm text-zinc-500">{user.email}</p>
            </div>
          </div>
        </section>

        {/* Referral */}
        <section className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
          <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Refer a Friend
          </h2>
          <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
            Earn rewards when your friends buy a Buddy tracker.
          </p>
          <Link
            href="/account/referral"
            className="inline-flex items-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            View my referral link →
          </Link>
        </section>

        {/* Subscription */}
        <section className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
          <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Subscription
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Manage your plan and billing information.
          </p>
          <Link
            href="/billing-portal"
            className="mt-4 inline-flex items-center text-sm font-medium text-zinc-900 underline dark:text-zinc-100"
          >
            Manage billing →
          </Link>
        </section>
      </div>
    </div>
  );
}
