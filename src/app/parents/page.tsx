import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pour les parents — App contrôle parental GPS Buddy",
  description:
    "Buddy vous offre la tranquillité d'esprit : GPS temps réel, messages vocaux, SOS, zones sécurisées. Zéro écran pour votre enfant. L'app parents la plus simple pour les enfants de 4 à 8 ans.",
  keywords: [
    "communicateur enfant parents",
    "app contrôle parental GPS enfant",
    "téléphone enfant sécurisé parents",
    "GPS tracker enfant sans écran",
    "alternative smartphone enfant",
    "application parents enfant GPS",
  ],
};

const fears = [
  {
    fear: "« Il est tout seul, je ne sais pas où il est »",
    icon: "😟",
    answer: "GPS temps réel + zones géographiques",
    answerIcon: "📍",
    detail: "Suivez sa position en direct sur votre téléphone. Créez des zones sécurisées et recevez une alerte s'il s'en éloigne.",
  },
  {
    fear: "« Je veux pouvoir lui parler à tout moment »",
    icon: "😰",
    answer: "Messages vocaux bidirectionnels",
    answerIcon: "🎙️",
    detail: "Envoyez un message vocal depuis l'app, il le reçoit instantanément sur son Buddy. Et vice versa.",
  },
  {
    fear: "« Et s'il a un accident ou se perd ? »",
    icon: "😨",
    answer: "Alerte SOS avec micro ambiant",
    answerIcon: "🆘",
    detail: "Un geste intentionnel active l'alerte. Vous recevez sa position exacte et pouvez écouter son environnement.",
  },
  {
    fear: "« Un smartphone c'est trop tôt, mais comment rester en contact ? »",
    icon: "🤔",
    answer: "Zéro écran, 100% communication",
    answerIcon: "✨",
    detail: "Buddy n'a aucun écran, aucune app, aucun accès internet. Uniquement voix + GPS + SOS.",
  },
  {
    fear: "« Je ne veux pas qu'il parle à des inconnus »",
    icon: "😬",
    answer: "Liste blanche de contacts",
    answerIcon: "🔒",
    detail: "Seuls les contacts que vous approuvez peuvent contacter Buddy. Personne d'autre ne peut l'atteindre.",
  },
  {
    fear: "« Il va casser l'appareil en 5 minutes »",
    icon: "😅",
    answer: "Certifié IP67, conçu pour l'aventure",
    answerIcon: "🛡️",
    detail: "Résistant à l'eau (1 m / 30 min), aux chutes et aux mains d'un enfant de 4 ans. Garanti 2 ans.",
  },
];

const appFeatures = [
  { icon: "🗺️", title: "Carte GPS en direct", desc: "Position mise à jour en continu. Historique de trajet disponible." },
  { icon: "🎙️", title: "Messages vocaux", desc: "Écoutez et envoyez des messages vocaux depuis l'app." },
  { icon: "🏠", title: "Zones sécurisées", desc: "Maison, école, chez mamie — soyez alerté dès une sortie de zone." },
  { icon: "👥", title: "Contacts autorisés", desc: "Gérez la liste blanche. Pas d'inconnu possible." },
  { icon: "🌙", title: "Mode nuit", desc: "Désactivation automatique pendant le sommeil." },
  { icon: "📊", title: "Plafond de messages", desc: "Limitez le nombre de messages par jour si vous le souhaitez." },
  { icon: "🔋", title: "Alerte batterie", desc: "Notification quand la batterie de Buddy est faible." },
  { icon: "📖", title: "Historique", desc: "Consultez les trajets et messages des 7 derniers jours." },
];

const comparatif = [
  { critere: "Zéro écran", buddy: true, smartphone: false, montre: false, rien: true },
  { critere: "GPS temps réel", buddy: true, smartphone: true, montre: true, rien: false },
  { critere: "Messages vocaux", buddy: true, smartphone: true, montre: false, rien: false },
  { critere: "Alerte SOS", buddy: true, smartphone: true, montre: true, rien: false },
  { critere: "App store / internet", buddy: false, smartphone: true, montre: false, rien: false },
  { critere: "Utilisable par 4 ans", buddy: true, smartphone: false, montre: false, rien: true },
  { critere: "Résistant IP67", buddy: true, smartphone: false, montre: true, rien: true },
  { critere: "Prix < 150€", buddy: true, smartphone: false, montre: true, rien: true },
];

const parentFaq = [
  {
    q: "Puis-je écouter l'entourage de mon enfant à tout moment ?",
    a: "Non — le micro ambiant n'est activé que lors d'une alerte SOS déclenchée par l'enfant. Buddy n'est pas un outil de surveillance permanente, c'est un outil de sécurité.",
  },
  {
    q: "Peut-on ajouter les grands-parents comme contacts ?",
    a: "Oui ! Vous pouvez ajouter jusqu'à 5 contacts autorisés (parents, grands-parents, oncles, tantes…). Chacun peut s'installer l'app et recevoir les messages de votre enfant.",
  },
  {
    q: "L'app parents est-elle sécurisée ?",
    a: "Oui. L'app utilise une authentification sécurisée, les données GPS sont chiffrées de bout en bout et stockées en Europe. Nous sommes conformes au RGPD.",
  },
  {
    q: "Que se passe-t-il si mon enfant perd Buddy ?",
    a: "L'app GPS vous permet de localiser l'appareil même s'il est perdu. Vous pouvez aussi le désactiver à distance depuis l'app pour empêcher toute utilisation non autorisée.",
  },
  {
    q: "Buddy est-il compatible avec mon iPhone/Android ?",
    a: "L'app parents Buddy est disponible sur iOS 15+ et Android 10+. Elle est gratuite au téléchargement et incluse dans l'abonnement.",
  },
];

function CheckIcon({ ok }: { ok: boolean }) {
  return ok ? (
    <span className="text-green-500 text-lg font-bold">✓</span>
  ) : (
    <span className="text-zinc-300 text-lg">✗</span>
  );
}

export default function ParentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-24 px-4 text-center">
        <div className="mx-auto max-w-4xl">
          <span className="inline-block bg-blue-100 text-[#3B82F6] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Pour les parents
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-zinc-900 mb-6 leading-tight">
            Vous méritez la{" "}
            <span className="gradient-text">tranquillité d&apos;esprit</span>
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Buddy a été conçu autant pour les parents que pour les enfants. GPS temps réel,
            messages vocaux, SOS — tout ce dont vous avez besoin, sans smartphone ni écran.
          </p>
        </div>
      </section>

      {/* Peurs vs Réponses */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-zinc-900">
              Vos inquiétudes. <span className="gradient-text">Nos réponses.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {fears.map(({ fear, icon, answer, answerIcon, detail }) => (
              <div key={fear} className="bg-white border border-zinc-100 rounded-3xl p-6 shadow-sm card-hover">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                    {icon}
                  </div>
                  <p className="text-zinc-600 italic text-sm leading-relaxed pt-1">{fear}</p>
                </div>
                <div className="border-t border-zinc-100 pt-4 flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-50 rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                    {answerIcon}
                  </div>
                  <div>
                    <p className="font-bold text-zinc-900 text-sm">{answer}</p>
                    <p className="text-xs text-zinc-500 mt-1">{detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App parents features */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#3B82F6] font-bold text-sm uppercase tracking-widest">L&apos;app parents</span>
              <h2 className="text-3xl md:text-4xl font-black text-zinc-900 mt-3 mb-6">
                Tout sur votre téléphone. Simple et puissant.
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {appFeatures.map(({ icon, title, desc }) => (
                  <div key={title} className="bg-white rounded-2xl p-4 border border-blue-100">
                    <span className="text-2xl">{icon}</span>
                    <p className="font-semibold text-zinc-900 text-sm mt-2">{title}</p>
                    <p className="text-xs text-zinc-500 mt-0.5">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 bg-zinc-900 rounded-[2.5rem] p-4 shadow-2xl border-4 border-zinc-800">
                <div className="bg-gradient-to-b from-blue-600 to-purple-600 rounded-[2rem] aspect-[9/16] flex flex-col items-center justify-center gap-4 p-6">
                  <span className="text-white text-xs font-bold opacity-70">App parents Buddy</span>
                  <div className="w-full bg-white/20 rounded-2xl p-4 text-center">
                    <span className="text-4xl">🗺️</span>
                    <div className="mt-2 text-white text-xs font-semibold">Chloé — École Jules Ferry</div>
                    <div className="flex items-center justify-center gap-1 mt-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-green-300 text-xs">En direct</span>
                    </div>
                  </div>
                  <div className="w-full bg-white/20 rounded-xl p-3">
                    <div className="text-white text-xs opacity-70 mb-2">Dernier message</div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🦁</span>
                      <div className="flex gap-0.5">
                        {[1,2,3,4,5,6].map((b) => (
                          <div key={b} className="w-1 bg-white/60 rounded-full" style={{ height: `${8 + Math.sin(b) * 6}px` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex gap-2">
                    <div className="flex-1 bg-white/20 rounded-xl p-2.5 text-center">
                      <div className="text-white text-xs">🔋 82%</div>
                    </div>
                    <div className="flex-1 bg-white/20 rounded-xl p-2.5 text-center">
                      <div className="text-white text-xs">🏫 Zone OK</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparatif */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-zinc-900">Buddy vs les alternatives</h2>
            <p className="text-zinc-600 mt-3">Pourquoi Buddy est la meilleure solution pour votre enfant de 4-8 ans</p>
          </div>
          <div className="overflow-x-auto rounded-3xl border border-purple-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-purple-600 to-pink-500 text-white">
                  <th className="text-left px-6 py-4 font-bold">Critère</th>
                  <th className="px-6 py-4 font-bold">Buddy 🤝</th>
                  <th className="px-6 py-4 font-bold text-white/70">Smartphone 📱</th>
                  <th className="px-6 py-4 font-bold text-white/70">Montre GPS ⌚</th>
                  <th className="px-6 py-4 font-bold text-white/70">Rien ❌</th>
                </tr>
              </thead>
              <tbody>
                {comparatif.map(({ critere, buddy, smartphone, montre, rien }, i) => (
                  <tr key={critere} className={i % 2 === 0 ? "bg-white" : "bg-purple-50/40"}>
                    <td className="px-6 py-3.5 font-medium text-zinc-700">{critere}</td>
                    <td className="px-6 py-3.5 text-center"><CheckIcon ok={buddy} /></td>
                    <td className="px-6 py-3.5 text-center"><CheckIcon ok={smartphone} /></td>
                    <td className="px-6 py-3.5 text-center"><CheckIcon ok={montre} /></td>
                    <td className="px-6 py-3.5 text-center"><CheckIcon ok={rien} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Témoignages parents */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-black text-zinc-900 text-center mb-12">La tranquillité d&apos;esprit, ils la vivent</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                emoji: "👩‍👦",
                name: "Marie P.",
                child: "Maman de Théo, 6 ans",
                quote: "Pour la première fois depuis qu'il va à l'école, je ne passe pas ma journée à angoisser. Je sais où il est. S'il a un problème, il a le bouton SOS. Buddy m'a rendu ma sérénité.",
              },
              {
                emoji: "👨‍👧",
                name: "David L.",
                child: "Papa de Camille, 5 ans",
                quote: "J'avais peur de lui donner un smartphone — internet, YouTube, tout ça. Buddy est la solution parfaite : elle communique avec nous, je la localise, et il n'y a aucun écran addictif. Je recommande à tous les papas.",
              },
              {
                emoji: "👩‍👧‍👦",
                name: "Aurélie R.",
                child: "Maman de 3 enfants",
                quote: "Avec trois enfants à gérer, Buddy m'a simplifié la vie de façon incroyable. Les zones GPS me notifient automatiquement quand ils arrivent à l'école. Je ne vérifie plus obsessionnellement mon téléphone.",
              },
            ].map(({ emoji, name, child, quote }) => (
              <div key={name} className="bg-white rounded-3xl p-6 shadow-sm border border-purple-100">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((s) => <span key={s} className="text-yellow-400">★</span>)}
                </div>
                <p className="text-zinc-600 text-sm italic leading-relaxed mb-4">&quot;{quote}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center text-xl">
                    {emoji}
                  </div>
                  <div>
                    <p className="font-bold text-zinc-900 text-sm">{name}</p>
                    <p className="text-xs text-zinc-500">{child}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ parents */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-black text-zinc-900 mb-8 text-center">Questions fréquentes des parents</h2>
          <div className="space-y-4">
            {parentFaq.map(({ q, a }) => (
              <div key={q} className="border border-purple-100 rounded-2xl p-5 bg-purple-50/30">
                <p className="font-semibold text-zinc-900 mb-2">❓ {q}</p>
                <p className="text-zinc-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="text-[#9333EA] font-semibold hover:underline">
              Toutes les FAQ Buddy →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#9333EA] to-[#EC4899] text-white text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-black mb-4">Offrez la tranquillité à toute la famille</h2>
          <p className="text-white/80 mb-8">119€ + 4,99€/mois. Livraison été 2026. Port offert.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#pricing"
              className="inline-block bg-white text-[#9333EA] font-black px-8 py-3.5 rounded-full shadow-xl hover:scale-105 transition-transform"
            >
              Précommander — 119€
            </Link>
            <Link
              href="/comment-ca-marche"
              className="inline-block border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors"
            >
              Comment ça marche ?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
