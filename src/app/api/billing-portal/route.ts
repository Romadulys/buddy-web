import { NextRequest } from "next/server";
import { getStripe } from "@/lib/stripe";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { customerId } = body as { customerId?: string };

  if (!customerId) {
    return Response.json({ error: "customerId is required" }, { status: 400 });
  }

  const origin = request.nextUrl.origin;

  const session = await getStripe().billingPortal.sessions.create({
    customer: customerId,
    return_url: `${origin}/account`,
  });

  return Response.json({ url: session.url });
}
