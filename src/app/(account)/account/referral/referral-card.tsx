"use client";

import { useState } from "react";

interface Use {
  id: string;
  rewarded: boolean;
  created_at: string;
}

export function ReferralCard({
  code,
  siteUrl,
  uses,
}: {
  code: string;
  siteUrl: string;
  uses: Use[];
}) {
  const referralUrl = `${siteUrl}?ref=${code}`;
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    await navigator.clipboard.writeText(referralUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const totalReferrals = uses.length;
  const rewardedCount = uses.filter((u) => u.rewarded).length;

  return (
    <div className="space-y-6">
      {/* Referral link */}
      <section className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
        <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Your referral link
        </h2>
        <div className="flex items-center gap-2">
          <input
            readOnly
            value={referralUrl}
            className="flex-1 truncate rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
          />
          <button
            onClick={copyLink}
            className="shrink-0 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <p className="mt-2 text-xs text-zinc-500">
          Code: <span className="font-mono font-semibold">{code}</span>
        </p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
          <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            {totalReferrals}
          </p>
          <p className="mt-1 text-sm text-zinc-500">Friends referred</p>
        </div>
        <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
          <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            {rewardedCount}
          </p>
          <p className="mt-1 text-sm text-zinc-500">Rewards earned</p>
        </div>
      </section>

      {/* History */}
      {uses.length > 0 && (
        <section className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
          <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Referral history
          </h2>
          <ul className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {uses.map((use) => (
              <li
                key={use.id}
                className="flex items-center justify-between py-3"
              >
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  {new Date(use.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <span
                  className={`text-xs font-medium ${
                    use.rewarded
                      ? "text-green-600 dark:text-green-400"
                      : "text-zinc-400"
                  }`}
                >
                  {use.rewarded ? "Rewarded" : "Pending"}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
