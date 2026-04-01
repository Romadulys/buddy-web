import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Précommande confirmée — Buddy",
};

interface Props {
  searchParams: Promise<{ orderId?: string }>;
}

export default async function CheckoutSuccessPage({ searchParams }: Props) {
  const { orderId } = await searchParams;

  return (
    <div className="min-h-screen hero-gradient flex items-center justify-center px-4">
      <div className="text-center py-16 max-w-lg mx-auto">
        {/* Animated checkmark */}
        <div className="w-24 h-24 rounded-full btn-gradient mx-auto flex items-center justify-center text-4xl text-white shadow-xl shadow-purple-200 mb-8 animate-float">
          ✓
        </div>

        <h1 className="text-4xl font-black text-zinc-900 mb-4">
          Précommande confirmée ! 🎉
        </h1>
        <p className="text-lg text-zinc-600 mb-2">
          Merci pour votre précommande Buddy.
        </p>
        <p className="text-zinc-500 mb-8 text-sm leading-relaxed">
          Vous recevrez un email de confirmation sous quelques minutes.
          Les livraisons démarrent à l&apos;été 2026 — vous serez prévenus en priorité.
        </p>

        {orderId && (
          <div className="bg-white rounded-2xl border border-zinc-100 shadow-sm px-6 py-4 mb-8 text-left">
            <p className="text-xs text-zinc-400 uppercase tracking-wide font-semibold mb-1">
              Référence commande
            </p>
            <p className="font-mono text-sm text-zinc-700 font-bold">
              {orderId.split("-")[0].toUpperCase()}
            </p>
          </div>
        )}

        {/* Next steps */}
        <div className="bg-white rounded-2xl border border-zinc-100 shadow-sm p-6 text-left mb-8 space-y-4">
          <h3 className="font-black text-zinc-900">Prochaines étapes</h3>
          {[
            { icon: "📧", title: "Email de confirmation", desc: "Dans votre boîte dans les prochaines minutes." },
            { icon: "💳", title: "Paiement", desc: "Vous serez contactés avant expédition pour finaliser le paiement." },
            { icon: "📦", title: "Livraison", desc: "Été 2026 — par ordre de précommande." },
          ].map((step) => (
            <div key={step.title} className="flex gap-3">
              <span className="text-xl">{step.icon}</span>
              <div>
                <p className="font-semibold text-zinc-900 text-sm">{step.title}</p>
                <p className="text-xs text-zinc-500">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="btn-gradient px-8 py-3.5 rounded-full text-white font-bold shadow-lg shadow-purple-200"
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/faq"
            className="border-2 border-[#9333EA] text-[#9333EA] px-8 py-3.5 rounded-full font-bold hover:bg-purple-50 transition-colors"
          >
            Voir la FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}
