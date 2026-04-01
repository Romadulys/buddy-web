import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Comment fonctionne Buddy — Mode d'emploi du communicateur sans écran",
  description:
    "Découvrez comment Buddy fonctionne : messages vocaux PTT, GPS temps réel, alerte SOS, app parents et configuration en 3 minutes. Le communicateur enfant sans écran le plus simple du marché.",
  keywords: [
    "comment fonctionne buddy",
    "communicateur enfant mode d'emploi",
    "walkie talkie enfant GPS",
    "PTT enfant 4G",
    "GPS enfant temps réel",
  ],
};

const steps = [
  { emoji: "📦", label: "Déballez Buddy" },
  { emoji: "📱", label: "Installez l'app parents" },
  { emoji: "🔗", label: "Scannez le QR code" },
  { emoji: "🎉", label: "C'est parti !" },
];

const appFeatures = [
  { icon: "🗺️", title: "Carte GPS temps réel", desc: "Position de votre enfant mise à jour en continu sur une carte interactive." },
  { icon: "🎙️", title: "Messages vocaux", desc: "Écoutez et envoyez des messages vocaux directement depuis l'app." },
  { icon: "🔋", title: "Niveau de batterie", desc: "Suivez l'autonomie de Buddy et soyez alerté quand la batterie est faible." },
  { icon: "🏠", title: "Zones géographiques", desc: "Créez des zones (maison, école) et recevez une alerte si Buddy en sort." },
  { icon: "👥", title: "Contacts autorisés", desc: "Gérez la liste blanche des personnes qui peuvent contacter Buddy." },
  { icon: "🌙", title: "Mode nuit", desc: "Désactivez automatiquement Buddy pendant les heures de sommeil." },
];

const shortFaq = [
  {
    q: "Faut-il une connexion Wi-Fi pour utiliser Buddy ?",
    a: "Non. Buddy utilise la 4G LTE via une eSIM intégrée. Il fonctionne partout où il y a du réseau mobile, sans Wi-Fi.",
  },
  {
    q: "L'enfant peut-il recevoir des appels d'inconnus ?",
    a: "Impossible. Seuls les contacts approuvés par les parents peuvent contacter Buddy. Tout le reste est bloqué par défaut.",
  },
  {
    q: "Que se passe-t-il si Buddy est à court de batterie ?",
    a: "L'app parents reçoit une notification d'alerte batterie faible avant l'extinction. Le GPS cesse de se mettre à jour si Buddy s'éteint.",
  },
  {
    q: "Buddy peut-il être utilisé à l'étranger ?",
    a: "L'eSIM couvre la France et les pays européens principaux. Pour les voyages hors d'Europe, contactez notre support.",
  },
  {
    q: "Combien de parents peuvent être connectés à un Buddy ?",
    a: "Jusqu'à 2 comptes parents peuvent être associés à un seul Buddy et accéder simultanément à l'app.",
  },
];

export default function CommentCaMarchePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-24 px-4 text-center">
        <div className="mx-auto max-w-4xl">
          <span className="inline-block bg-orange-100 text-[#F97316] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Mode d&apos;emploi
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-zinc-900 mb-6 leading-tight">
            Comment ça marche,{" "}
            <span className="gradient-text">Buddy ?</span>
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            En 60 secondes chrono, comprenez comment Buddy connecte votre enfant
            à sa famille — sans écran, sans complication, avec toute la magie.
          </p>
        </div>
      </section>

      {/* Section 1 — Le device */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#9333EA] font-bold text-sm uppercase tracking-widest">Le device</span>
              <h2 className="text-3xl md:text-4xl font-black text-zinc-900 mt-3 mb-6">
                Un walkie-talkie pensé pour les enfants
              </h2>
              <div className="space-y-4 text-zinc-600">
                <div className="flex gap-4">
                  <span className="text-2xl">🎛️</span>
                  <div>
                    <strong className="text-zinc-800">Form factor walkie-talkie</strong>
                    <p className="text-sm mt-1">Prise en main instinctive, bouton PTT bien visible, taille adaptée aux petites mains.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl">💡</span>
                  <div>
                    <strong className="text-zinc-800">Barre LED magique</strong>
                    <p className="text-sm mt-1">La barre de LEDs colorées communique l'état de Buddy d'un coup d'œil : message reçu, batterie, SOS.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl">🛡️</span>
                  <div>
                    <strong className="text-zinc-800">Certifié IP67</strong>
                    <p className="text-sm mt-1">Résistant à l'eau (1 m / 30 min) et aux chutes du quotidien. Conçu pour survivre à l'aventure.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl">📡</span>
                  <div>
                    <strong className="text-zinc-800">4G LTE + Wi-Fi + eSIM</strong>
                    <p className="text-sm mt-1">Connecté partout, sans carte SIM à insérer. L'eSIM est déjà intégrée et activée.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-56 h-80 bg-gradient-to-b from-purple-100 to-pink-100 rounded-3xl flex flex-col items-center justify-center gap-6 shadow-xl border border-purple-200">
                <span className="text-7xl">🦁</span>
                <div className="flex gap-1">
                  {["bg-[#FB923C]", "bg-[#FB923C]", "bg-[#FB923C]", "bg-zinc-200", "bg-zinc-200"].map((c, i) => (
                    <div key={i} className={`w-6 h-2.5 rounded-full ${c}`} />
                  ))}
                </div>
                <div className="w-16 h-16 bg-[#9333EA] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl">🎙️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Messages vocaux */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-[#EC4899] font-bold text-sm uppercase tracking-widest">Messages vocaux</span>
            <h2 className="text-3xl md:text-4xl font-black text-zinc-900 mt-3">
              Appuie, parle, relâche. C&apos;est tout.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: "1", emoji: "👇", title: "Appuie", desc: "L'enfant appuie sur le bouton PTT" },
              { step: "2", emoji: "🎙️", title: "Parle", desc: "Il dit son message, la LED pulse" },
              { step: "3", emoji: "🔼", title: "Relâche", desc: "Il relâche le bouton" },
              { step: "4", emoji: "💜", title: "Envoyé !", desc: "La LED s'illumine, message reçu par les parents" },
            ].map(({ step, emoji, title, desc }) => (
              <div key={step} className="bg-white rounded-3xl p-6 text-center shadow-sm border border-purple-100 card-hover">
                <div className="w-10 h-10 bg-gradient-to-br from-[#9333EA] to-[#EC4899] rounded-full text-white font-black flex items-center justify-center text-sm mx-auto mb-4">
                  {step}
                </div>
                <div className="text-4xl mb-3">{emoji}</div>
                <h3 className="font-bold text-zinc-900 mb-1">{title}</h3>
                <p className="text-sm text-zinc-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — GPS */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
                <div className="aspect-square max-w-xs mx-auto relative">
                  <div className="w-full h-full bg-blue-100 rounded-2xl flex items-center justify-center">
                    <span className="text-8xl">🗺️</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white rounded-2xl px-3 py-2 shadow-md text-xs font-bold text-[#9333EA] flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full inline-block animate-pulse" />
                    En direct
                  </div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#9333EA] text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                    📍 École Jules Ferry
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <span className="text-[#3B82F6] font-bold text-sm uppercase tracking-widest">GPS temps réel</span>
              <h2 className="text-3xl md:text-4xl font-black text-zinc-900 mt-3 mb-6">
                Sachez toujours où est votre enfant
              </h2>
              <div className="space-y-4">
                {[
                  { icon: "📍", title: "Position en temps réel", desc: "Mise à jour continue sur la carte de l'app parents." },
                  { icon: "🏫", title: "Zones sécurisées", desc: "Définissez maison, école, chez les grands-parents. Alerte si Buddy en sort." },
                  { icon: "📖", title: "Historique de trajet", desc: "Consultez où votre enfant est passé dans la journée." },
                  { icon: "🔔", title: "Notifications intelligentes", desc: "Alertes personnalisables selon l'heure et la zone." },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex gap-3">
                    <span className="text-2xl">{icon}</span>
                    <div>
                      <strong className="text-zinc-800 text-sm">{title}</strong>
                      <p className="text-sm text-zinc-500">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — SOS */}
      <section className="py-20 px-4 bg-red-50">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-red-500 font-bold text-sm uppercase tracking-widest">Alerte SOS</span>
          <h2 className="text-3xl md:text-4xl font-black text-zinc-900 mt-3 mb-6">
            Un bouton qui peut tout changer
          </h2>
          <p className="text-zinc-600 mb-12 max-w-2xl mx-auto">
            L&apos;alerte SOS de Buddy est conçue pour être activée facilement par l&apos;enfant en cas de danger, et difficile à déclencher par erreur.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "👆👆", step: "Double pression + maintien", desc: "Geste intentionnel, pas accidentel. L'enfant doit vouloir l'activer." },
              { icon: "📳", step: "Notification d'urgence", desc: "Les parents reçoivent une alerte prioritaire avec la position GPS exacte." },
              { icon: "🎤", step: "Micro ambiant activé", desc: "Les parents peuvent écouter l'environnement de l'enfant pour évaluer la situation." },
            ].map(({ icon, step, desc }) => (
              <div key={step} className="bg-white rounded-3xl p-6 border border-red-100 shadow-sm">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-bold text-zinc-900 mb-2">{step}</h3>
                <p className="text-sm text-zinc-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — App parents */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-[#9333EA] font-bold text-sm uppercase tracking-widest">L&apos;app parents</span>
            <h2 className="text-3xl md:text-4xl font-black text-zinc-900 mt-3">
              Tout le contrôle, sans effort
            </h2>
            <p className="text-zinc-600 mt-4 max-w-xl mx-auto">
              Disponible sur iOS et Android, l&apos;app Buddy Parents est le tableau de bord de votre tranquillité d&apos;esprit.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {appFeatures.map(({ icon, title, desc }) => (
              <div key={title} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 border border-purple-100 card-hover">
                <span className="text-3xl">{icon}</span>
                <h3 className="font-bold text-zinc-900 mt-3 mb-1 text-sm">{title}</h3>
                <p className="text-xs text-zinc-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Setup */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-orange-50">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-[#F97316] font-bold text-sm uppercase tracking-widest">Configuration</span>
            <h2 className="text-3xl md:text-4xl font-black text-zinc-900 mt-3">
              Prêt en 3 minutes chrono
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map(({ emoji, label }, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl mx-auto mb-4 border border-purple-100">
                  {emoji}
                </div>
                <div className="text-xs font-bold text-[#9333EA] mb-1">Étape {i + 1}</div>
                <p className="text-sm font-semibold text-zinc-800">{label}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute mt-8 text-zinc-300 text-xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Short FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-black text-zinc-900 mb-8 text-center">Questions fréquentes</h2>
          <div className="space-y-4">
            {shortFaq.map(({ q, a }) => (
              <div key={q} className="border border-purple-100 rounded-2xl p-5 bg-purple-50/30">
                <p className="font-semibold text-zinc-900 mb-2">❓ {q}</p>
                <p className="text-zinc-600 text-sm">{a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="text-[#9333EA] font-semibold hover:underline">
              Voir toutes les FAQ →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#9333EA] to-[#EC4899] text-white text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-black mb-4">Prêt à offrir Buddy à votre enfant ?</h2>
          <p className="text-white/80 mb-8">Précommandez dès aujourd&apos;hui. Livraison été 2026.</p>
          <Link
            href="/#pricing"
            className="inline-block bg-white text-[#9333EA] font-black px-10 py-4 rounded-full shadow-xl hover:scale-105 transition-transform text-lg"
          >
            Précommander — 119€
          </Link>
        </div>
      </section>
    </>
  );
}
