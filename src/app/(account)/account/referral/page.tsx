import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { ReferralCard } from "./referral-card";

export const metadata: Metadata = {
  title: "Referral Program",
};

export default async function ReferralPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  // Get or create referral code
  let { data: referralCode } = await supabase
    .from("referral_codes")
    .select("code")
    .eq("user_id", user.id)
    .single();

  if (!referralCode) {
    // Trigger auto-create via API
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/referral`,
      { cache: "no-store" }
    );
    const json = await res.json();
    referralCode = json.code;
  }

  const { data: uses } = await supabase
    .from("referral_uses")
    .select("id, rewarded, created_at")
    .eq("referral_code", referralCode?.code ?? "")
    .order("created_at", { ascending: false });

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://buddy.example.com";

  return (
    <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-10">
        <a
          href="/account"
          className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          ← Back to Account
        </a>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Refer a Friend
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Share your unique link. When a friend buys a Buddy tracker using your
          link, you both get a reward.
        </p>
      </div>

      <ReferralCard
        code={referralCode?.code ?? ""}
        siteUrl={siteUrl}
        uses={uses ?? []}
      />
    </div>
  );
}
