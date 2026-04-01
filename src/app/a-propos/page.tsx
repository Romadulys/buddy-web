import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos de Buddy — Startup française communicateur enfant sans écran",
  description:
    "Découvrez l'histoire et la mission de Buddy : supprimer la distraction tout en gardant la magie de la communication pour les enfants de 4 à 8 ans. Startup française.",
  keywords: [
    "buddy startup française",
    "communicateur enfant sans écran",
    "à propos buddy",
    "équipe buddy",
    "mission buddy",
  ],
};

const team = [
  { emoji: "👨‍💻", name: "Antoine R.", role: "Co-fondateur & CEO", desc: "Papa de deux enfants, ancien product manager. Convaincu qu'on peut faire mieux qu'un smartphone pour les 4-8 ans." },
  { emoji: "👩‍💻", name: "Sophie M.", role: "Co-fondatrice & CTO", desc: "Ingénieure en systèmes embarqués. A conçu l'architecture matérielle et logicielle de Buddy de A à Z." },
  { emoji: "🎨", name: "Lucas B.", role: "Head of Design", desc: "Spécialiste UX pour enfants. Chaque détail de Buddy — couleurs, sons, formes — est pensé pour les 4-8 ans." },
];

const values = [
  { icon: "🛡️", title: "Sécurité d'abord", color: "from-blue-500 to-blue-600", desc: "Chaque décision de conception part d'une question : est-ce que c'est sûr pour un enfant de 4 ans ? GPS, liste blanche, SOS, RGPD — la sécurité n'est pas une option, c'est le fondement." },
  { icon: "✨", title: "La magie de la communication", color: "from-purple-500 to-pink-500", desc: "Un enfant qui entend la voix de sa grand-mère dans l'appareil qu'il tient à la main — c'est de la magie. Buddy préserve cette magie, sans l'écran qui la pollue." },
  { icon: "🎯", title: "Simplicité radicale", color: "from-orange-400 to-orange-500", desc: "Un seul bouton. Pas de menu, pas d'application sur l'appareil, pas de mot de passe. Si un enfant de 4 ans ne peut pas l'utiliser en 30 secondes, on a échoué." },
];

const stats = [
  { number: "500+", label: "Familles en précommande" },
  { number: "4-8", label: "Ans, l'âge cible" },
  { number: "6", label: "Personnalités Buddy" },
  { number: "IP67", label: "Résistance eau & chocs" },
];

const press = [
  { name: "Le Monde", quote: "Une alternative crédible au smartphone pour les jeunes enfants" },
  { name: "Les Echos Start", quote: "La startup qui veut réinventer la communication enfant" },
  { name: "Parents.fr", quote: "On a testé Buddy : nos enfants ont adoré" },
];

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-24 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block bg-purple-100 text-[#9333EA] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Notre histoire
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-zinc-900 mb-8 leading-tight">
            Supprimer la distraction. <br />
            <span className="gradient-text">Garder la magie.</span>
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Buddy est né d&apos;un constat simple : les enfants de 4 à 8 ans n&apos;ont
            pas besoin d&apos;un smartphone. Ils ont besoin de parler à leurs parents,
            d&apos;être retrouvés s&apos;ils sont perdus, et de ressentir la magie de la
            communication — sans les dangers de l&apos;écran.
          </p>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black text-zinc-900 mb-6">
                Comment tout a commencé
              </h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p>
                  En 2023, Antoine et Sophie sont deux parents qui observent le même
                  phénomène dans leur entourage : des enfants de 5, 6, 7 ans équipés
                  de smartphones pour <em>« rester en contact »</em>. Résultat ? Des heures
                  sur YouTube, des publicités inadaptées, et une anxiété numérique qui
                  monte chez les parents comme chez les enfants.
                </p>
                <p>
                  L&apos;idée de Buddy germait depuis longtemps. Et si on pouvait créer un
                  appareil qui offre tout ce dont un parent a besoin — voix, GPS, urgence —
                  sans rien de ce dont un enfant n&apos;a pas besoin — écran, internet, apps ?
                </p>
                <p>
                  Après 18 mois de R&D, de tests avec des dizaines de familles et de
                  prototypes cassés par des enfants enthousiastes, Buddy est né.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ number, label }) => (
                <div key={label} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6 text-center border border-purple-100">
                  <div className="text-3xl font-black gradient-text mb-1">{number}</div>
                  <div className="text-sm text-zinc-600">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-zinc-900">Notre mission en 3 valeurs</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map(({ icon, title, color, desc }) => (
              <div key={title} className="bg-white rounded-3xl p-8 shadow-sm border border-purple-100 card-hover">
                <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-md`}>
                  {icon}
                </div>
                <h3 className="text-xl font-black text-zinc-900 mb-3">{title}</h3>
                <p className="text-zinc-600 leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* L'équipe */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-zinc-900">L&apos;équipe Buddy</h2>
            <p className="text-zinc-600 mt-3 max-w-xl mx-auto">
              Une équipe de parents et de passionnés de technologie, basée à Paris.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map(({ emoji, name, role, desc }) => (
              <div key={name} className="text-center p-6 rounded-3xl border border-purple-100 card-hover bg-white">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                  {emoji}
                </div>
                <h3 className="font-black text-zinc-900">{name}</h3>
                <p className="text-[#9333EA] text-sm font-semibold mb-3">{role}</p>
                <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presse */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-black text-zinc-900">Ils parlent de nous</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {press.map(({ name, quote }) => (
              <div key={name} className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm">
                <p className="text-zinc-600 italic text-sm mb-4">&quot;{quote}&quot;</p>
                <p className="font-bold text-zinc-900 text-sm">{name}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-zinc-400 mt-6">* Citations illustratives — couverture presse à venir</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#9333EA] to-[#EC4899] text-white text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-black mb-4">Rejoignez l&apos;aventure Buddy</h2>
          <p className="text-white/80 mb-8">Précommandez dès aujourd&apos;hui et faites partie des premières familles.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#pricing"
              className="inline-block bg-white text-[#9333EA] font-black px-8 py-3.5 rounded-full shadow-xl hover:scale-105 transition-transform"
            >
              Précommander — 119€
            </Link>
            <a
              href="mailto:hello@getbuddy.fr"
              className="inline-block border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors"
            >
              Nous écrire
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
