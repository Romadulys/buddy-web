import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

// GET /api/referral — get the current user's referral code + stats
export async function GET() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data: referralCode, error } = await supabase
    .from("referral_codes")
    .select("code, created_at")
    .eq("user_id", user.id)
    .single();

  if (error || !referralCode) {
    // Auto-create if missing
    const code = generateCode(user.id);
    const { data: newCode, error: insertError } = await supabase
      .from("referral_codes")
      .insert({ user_id: user.id, code })
      .select("code, created_at")
      .single();

    if (insertError) {
      return NextResponse.json({ error: insertError.message }, { status: 500 });
    }

    return NextResponse.json({ code: newCode, uses: [] });
  }

  const { data: uses } = await supabase
    .from("referral_uses")
    .select("id, rewarded, created_at")
    .eq("referral_code", referralCode.code)
    .order("created_at", { ascending: false });

  return NextResponse.json({ code: referralCode, uses: uses ?? [] });
}

function generateCode(userId: string): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const seed = userId.replace(/-/g, "");
  let code = "";
  for (let i = 0; i < 8; i++) {
    const idx = parseInt(seed[i] ?? "0", 16) % chars.length;
    code += chars[idx];
  }
  return code;
}
