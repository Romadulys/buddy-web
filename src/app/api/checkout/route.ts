import { NextRequest } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getPlansWithPrices } from "@/lib/stripe-billing";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { planKey } = body as { planKey?: string };

  if (!planKey) {
    return Response.json({ error: "planKey is required" }, { status: 400 });
  }

  const plans = getPlansWithPrices();
  const plan = plans.find((p) => p.key === planKey);

  if (!plan?.priceId) {
    return Response.json(
      { error: `Plan "${planKey}" not found or not configured` },
      { status: 400 }
    );
  }

  const origin = request.nextUrl.origin;

  const session = await getStripe().checkout.sessions.create({
    mode: "subscription",
    line_items: [{ price: plan.priceId, quantity: 1 }],
    success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/pricing`,
    metadata: { buddy_plan_key: plan.key },
  });

  return Response.json({ url: session.url });
}
