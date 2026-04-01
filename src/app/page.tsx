import Link from "next/link";
import Image from "next/image";

/* ─── Character catalogue ─────────────────────────────────── */
const coques = [
  { img: "/images/device/p02.jpg",  name: "Luna",      label: "Licorne Rose",        emoji: "🦄" },
  { img: "/images/device/p12.jpg",  name: "Ariel",     label: "Sirène Princesse",    emoji: "🧜" },
  { img: "/images/device/p13.jpg",  name: "Drago",     label: "Dragon Vert",         emoji: "🐉" },
  { img: "/images/device/p17.jpg",  name: "Fantôme",   label: "Fantôme Kawaii",      emoji: "👻" },
  { img: "/images/device/p05.jpg",  name: "Bambou",    label: "Panda",               emoji: "🐼" },
  { img: "/images/device/p03.jpg",  name: "Pablo",     label: "Pingouin",            emoji: "🐧" },
  { img: "/images/device/p21.jpg",  name: "Aviateur",  label: "Avion Bleu",          emoji: "✈️" },
  { img: "/images/device/p09.jpg",  name: "Lola",      label: "Lapin Blanc",         emoji: "🐰" },
  { img: "/images/device/p07.jpg",  name: "Mimi",      label: "Chat Gris",           emoji: "🐱" },
  { img: "/images/device/p15.jpg",  name: "Ellie",     label: "Éléphant",            emoji: "🐘" },
  { img: "/images/device/p16.jpg",  name: "Pompier",   label: "Camion de Pompier",   emoji: "🚒" },
  { img: "/images/device/p14.jpg",  name: "Flash",     label: "Voiture de Course",   emoji: "🏎️" },
  { img: "/images/device/p22.jpg",  name: "Hérisson",  label: "Hérisson",            emoji: "🦔" },
  { img: "/images/device/p25.jpg",  name: "Rex",       label: "Dinosaure",           emoji: "🦕" },
  { img: "/images/device/p20.jpg",  name: "Roux",      label: "Renard",              emoji: "🦊" },
  { img: "/images/device/p06.jpg",  name: "Pip",       label: "Caneton Jaune",       emoji: "🐣" },
  { img: "/images/device/p01.jpg",  name: "Léo",       label: "Lionceau",            emoji: "🦁" },
  { img: "/images/device/p08.jpg",  name: "Nino",      label: "Petit Ours",          emoji: "🐻" },
  { img: "/images/device/p04.jpg",  name: "Orso",      label: "Ours Noir",           emoji: "🐻" },
  { img: "/images/device/p10.jpg",  name: "Caramel",   label: "Ours Pêche",          emoji: "🍑" },
  { img: "/images/device/p11.jpg",  name: "Coton",     label: "Grand Lapin",         emoji: "🐰" },
  { img: "/images/device/p19.jpg",  name: "Fantasia",  label: "À découvrir",         emoji: "✨" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 py-16 lg:py-24">

            {/* Text column */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-purple-50 rounded-full px-4 py-1.5 text-sm font-semibold text-[#9333EA] border border-purple-200 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-[#9333EA] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9333EA]" />
                </span>
                Précommande ouverte — Livraison été 2026
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-[64px] font-black leading-[1.05] tracking-tight text-zinc-900 mb-6">
                Le premier<br />
                communicateur<br />
                <span className="gradient-text">sans écran</span><br />
                pour ton enfant.
              </h1>

              <p className="text-lg text-zinc-500 leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
                Messages vocaux, GPS en direct, alerte SOS — toute la magie de la communication.
                <strong className="text-zinc-700"> Sans distraction, sans réseau social.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
                <Link href="#shop"
                  className="btn-gradient rounded-2xl px-8 py-4 text-base font-bold text-white shadow-xl shadow-purple-200">
                  Choisir le Buddy de mon enfant — 119€ →
                </Link>
                <Link href="/comment-ca-marche"
                  className="rounded-2xl px-8 py-4 text-base font-semibold text-zinc-600 bg-zinc-50 border border-zinc-200 hover:border-[#9333EA] hover:text-[#9333EA] transition-colors">
                  Comment ça marche
                </Link>
              </div>

              {/* Trust micro-badges */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start text-sm text-zinc-500">
                {[
                  { icon: "🛡️", text: "IP67 — résistant à l'eau" },
                  { icon: "📦", text: "Port offert en France" },
                  { icon: "🔄", text: "Satisfait ou remboursé 30j" },
                  { icon: "🇫🇷", text: "Conçu en France" },
                ].map((b) => (
                  <span key={b.text} className="flex items-center gap-1.5 bg-zinc-50 border border-zinc-100 rounded-full px-3 py-1.5 font-medium">
                    <span>{b.icon}</span>{b.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Image column */}
            <div className="flex-1 order-1 lg:order-2 relative flex justify-center">
              {/* Main hero image */}
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl scale-110"
                  style={{ background: "radial-gradient(ellipse, rgba(147,51,234,0.12) 0%, transparent 70%)" }} />
                <Image
                  src="/images/device/buddy-bears-3.jpg"
                  alt="Buddy — les 3 ours"
                  width={560}
                  height={420}
                  priority
                  className="relative rounded-3xl drop-shadow-2xl"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute top-4 right-4 bg-white rounded-2xl shadow-xl px-4 py-3 border border-purple-100">
                <p className="text-xs text-zinc-400 font-medium">À partir de</p>
                <p className="text-2xl font-black gradient-text">119€</p>
                <p className="text-xs text-zinc-400">port offert</p>
              </div>
              <div className="absolute bottom-6 left-4 bg-white rounded-2xl shadow-xl px-4 py-3 border border-zinc-100 flex items-center gap-3">
                <span className="text-2xl">🎨</span>
                <div>
                  <p className="text-xs font-bold text-zinc-800">+20 personnages</p>
                  <p className="text-xs text-zinc-400">à collectionner</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────── */}
      <div className="border-y border-zinc-100 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 py-6">
            {[
              { icon: "🎙️", title: "Messages vocaux",    sub: "Appui = envoie" },
              { icon: "📍", title: "GPS temps réel",      sub: "Suivi en direct" },
              { icon: "🚨", title: "Alerte SOS",          sub: "Sécurité immédiate" },
              { icon: "🔋", title: "7 jours d'autonomie", sub: "Une charge/semaine" },
              { icon: "💧", title: "IP67",                 sub: "Chutes & eau" },
              { icon: "👨‍👩‍👦", title: "App parents",         sub: "iOS & Android" },
            ].map((f) => (
              <div key={f.title} className="flex items-center gap-3 text-sm">
                <span className="text-2xl">{f.icon}</span>
                <div>
                  <p className="font-bold text-zinc-800 leading-tight">{f.title}</p>
                  <p className="text-zinc-500 leading-tight">{f.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SHOP — CHOISISSEZ VOTRE BUDDY ────────────────────── */}
      <section id="shop" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#9333EA] uppercase tracking-widest mb-3">La boutique</p>
            <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 mb-4">
              Choisissez le <span className="gradient-text">Buddy</span> de votre enfant
            </h2>
            <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
              Chaque Buddy est livré avec l&apos;appareil <strong className="text-zinc-700">+ 1 coque au choix</strong>.
              Laissez votre enfant choisir son personnage — et collectionnez les suivants à partir de <strong className="text-zinc-700">14,99€</strong>.
            </p>
          </div>

          {/* Character grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 lg:gap-5">
            {coques.map((c) => (
              <div key={c.name}
                className="group bg-white border border-zinc-100 rounded-2xl overflow-hidden hover:border-[#9333EA] hover:shadow-xl hover:shadow-purple-100 transition-all duration-200 cursor-pointer">
                {/* Product image */}
                <div className="bg-zinc-50 aspect-square relative overflow-hidden">
                  <Image
                    src={c.img}
                    alt={`Buddy ${c.name} — ${c.label}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Info */}
                <div className="p-3">
                  <p className="font-bold text-zinc-900 text-sm leading-tight">{c.name}</p>
                  <p className="text-xs text-zinc-400 leading-tight mb-2">{c.label}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-[#9333EA]">14,99€</span>
                    <span className="text-xs bg-purple-50 text-[#9333EA] border border-purple-100 rounded-full px-2 py-0.5 font-semibold">Coque</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-zinc-400 mt-8">
            + 20 nouveaux personnages à venir · Les coques sont compatibles entre elles
          </p>
        </div>
      </section>

      {/* ── PACK BUDDY — PRICING ─────────────────────────────── */}
      <section id="pricing" className="bg-gradient-to-br from-zinc-950 via-[#1a0533] to-zinc-950 py-20 lg:py-28 overflow-hidden relative">
        {/* Decorative glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #9333EA, transparent)" }} />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #EC4899, transparent)" }} />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#EC4899] uppercase tracking-widest mb-3">Tarifs</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Simple &amp; transparent
            </h2>
            <p className="text-lg text-zinc-400 max-w-xl mx-auto">
              Pas de mauvaise surprise. Un prix clair, tout compris.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

            {/* Pack Buddy */}
            <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[#9333EA] to-[#EC4899] text-white text-xs font-bold px-3 py-1 rounded-full">
                Le plus populaire
              </div>
              <div className="flex flex-col sm:flex-row items-start gap-8">
                <Image
                  src="/images/device/buddy-6colors.jpg"
                  alt="Buddy — 6 colorways"
                  width={180}
                  height={140}
                  className="rounded-2xl flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-white mb-1">Pack Buddy</h3>
                  <p className="text-zinc-400 text-sm mb-4">L&apos;appareil + 1 coque de votre choix</p>
                  <div className="flex items-end gap-3 mb-4">
                    <span className="text-5xl font-black text-white">119€</span>
                    <span className="text-zinc-400 text-sm mb-2">paiement unique<br />port offert</span>
                  </div>
                  <ul className="space-y-2 mb-6 text-sm">
                    {[
                      "Buddy Mini — l'appareil sans écran",
                      "1 coque au choix parmi +20 personnages",
                      "Application parents iOS & Android",
                      "SIM intégrée — pas de carte SIM à acheter",
                      "Garantie 1 an — IP67",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-zinc-300">
                        <span className="text-[#9333EA] font-bold">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="#shop"
                    className="btn-gradient inline-flex rounded-xl px-8 py-3.5 text-sm font-bold text-white shadow-lg w-full sm:w-auto text-center justify-center">
                    Précommander maintenant →
                  </Link>
                </div>
              </div>
            </div>

            {/* Abonnement */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 flex flex-col">
              <h3 className="text-xl font-black text-white mb-1">Abonnement</h3>
              <p className="text-zinc-400 text-sm mb-4">Requis pour utiliser Buddy</p>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-4xl font-black text-white">4,99€</span>
                <span className="text-zinc-400 text-sm mb-1">/mois</span>
              </div>
              <p className="text-zinc-500 text-xs mb-6">ou 49€/an — économisez 2 mois <span className="text-[#EC4899] font-semibold">🎁 BUDDY10 = -10%</span></p>
              <ul className="space-y-2 mb-8 text-sm flex-1">
                {[
                  "Réseau 4G inclus",
                  "GPS illimité",
                  "Messages vocaux illimités",
                  "Mises à jour automatiques",
                  "Support 7j/7",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-zinc-300">
                    <span className="text-[#EC4899] font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                <p className="text-xs text-zinc-400">Coques supplémentaires</p>
                <p className="text-xl font-black text-white">14,99€</p>
                <p className="text-xs text-zinc-500">l&apos;unité · compatibles entre elles</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── COMMENT ÇA MARCHE (3 steps) ──────────────────────── */}
      <section id="comment-ca-marche" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#9333EA] uppercase tracking-widest mb-3">Simple comme bonjour</p>
            <h2 className="text-4xl sm:text-5xl font-black text-zinc-900">
              Comment ça <span className="gradient-text">marche ?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                icon: "🎨",
                title: "Votre enfant choisit son personnage",
                desc: "Plus de 20 coques disponibles : licorne, dragon, sirène, pingouin, panda… Chaque Buddy est unique. Votre enfant l'adopte comme son jouet préféré.",
                color: "from-purple-500 to-pink-500",
              },
              {
                step: "02",
                icon: "🎙️",
                title: "Un bouton, c'est tout",
                desc: "Pas d'écran, pas de mot de passe. Votre enfant maintient le bouton pour envoyer un message vocal. Aussi simple qu'un talkie-walkie.",
                color: "from-pink-500 to-orange-500",
              },
              {
                step: "03",
                icon: "📱",
                title: "Vous suivez tout depuis l'app",
                desc: "Écoutez ses messages, suivez sa position GPS en temps réel, recevez l'alerte SOS instantanément. Tout sur votre téléphone.",
                color: "from-orange-500 to-yellow-500",
              },
            ].map((s) => (
              <div key={s.step} className="relative">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-2xl mb-6 shadow-lg`}>
                  {s.icon}
                </div>
                <span className="absolute top-0 left-14 ml-2 text-7xl font-black text-zinc-100 leading-none select-none">
                  {s.step}
                </span>
                <h3 className="text-xl font-black text-zinc-900 mb-3 relative">{s.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/comment-ca-marche"
              className="text-sm font-semibold text-[#9333EA] hover:underline">
              Découvrir toutes les fonctionnalités →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ────────────────────────────────────── */}
      <section className="bg-zinc-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-zinc-900">
              Tout ce dont votre enfant a besoin,<br className="hidden sm:block" />
              <span className="gradient-text">rien de plus.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🎙️", title: "Messages vocaux", desc: "Appui long = message envoyé. Aucun clavier, aucune distraction. Aussi simple qu'un talkie-walkie.", color: "bg-purple-50 border-purple-100" },
              { icon: "📍", title: "GPS temps réel", desc: "Localisez votre enfant en direct depuis l'application. Voir sa position sur la carte, à tout moment.", color: "bg-pink-50 border-pink-100" },
              { icon: "🚨", title: "Alerte SOS", desc: "Un appui long = alerte immédiate aux parents. Notification push, sonnerie et position GPS transmises.", color: "bg-orange-50 border-orange-100" },
              { icon: "🔇", title: "Zéro réseau social", desc: "Pas d'Internet, pas d'appli enfant, pas de contenu. Buddy sert uniquement à communiquer en famille.", color: "bg-blue-50 border-blue-100" },
              { icon: "🔋", title: "7 jours d'autonomie", desc: "Une charge par semaine seulement. Moins de contraintes, plus de liberté.", color: "bg-green-50 border-green-100" },
              { icon: "💧", title: "IP67 & résistant", desc: "Testez-le sous la pluie, à la piscine, sur le terrain de foot. Buddy résiste à tout ce que les enfants lui font subir.", color: "bg-cyan-50 border-cyan-100" },
            ].map((f) => (
              <div key={f.title} className={`${f.color} border rounded-2xl p-6`}>
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">{f.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APP PARENTS ──────────────────────────────────────── */}
      <section id="app-parents" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
              <p className="text-sm font-semibold text-[#9333EA] uppercase tracking-widest mb-3">Application parents</p>
              <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 mb-6">
                Vous gardez le<br />
                <span className="gradient-text">contrôle total.</span>
              </h2>
              <p className="text-lg text-zinc-500 mb-8 leading-relaxed">
                L&apos;application Buddy vous permet de rester connecté à votre enfant sans jamais lui donner un smartphone.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  { icon: "📍", text: "GPS temps réel — position live sur la carte" },
                  { icon: "🎙️", text: "Écoute les messages vocaux de votre enfant" },
                  { icon: "👨‍👩‍👦", text: "Gérez les contacts autorisés (famille, amis)" },
                  { icon: "🕐", text: "Mode silencieux — bloquez l'appareil à distance" },
                  { icon: "📊", text: "Historique des positions et des messages" },
                  { icon: "🚨", text: "Alertes SOS instantanées" },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3 text-zinc-700">
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
              <Link href="/parents"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#9333EA] hover:underline">
                En savoir plus sur l&apos;app parents →
              </Link>
            </div>

            {/* App mockup placeholder */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-[580px] bg-zinc-900 rounded-[48px] border-4 border-zinc-700 shadow-2xl overflow-hidden flex flex-col">
                  <div className="h-8 bg-zinc-800 flex items-center justify-center">
                    <div className="w-20 h-1.5 bg-zinc-600 rounded-full" />
                  </div>
                  <div className="flex-1 bg-gradient-to-b from-zinc-900 to-[#1a0533] flex flex-col items-center justify-center p-6 gap-6">
                    <p className="text-white font-black text-xl">Buddy App</p>
                    <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-4">
                      <p className="text-xs text-zinc-400 mb-1">Position de Lucas</p>
                      <div className="w-full h-24 bg-zinc-800 rounded-xl flex items-center justify-center text-2xl">🗺️</div>
                      <p className="text-xs text-green-400 mt-2 font-semibold">● En direct — École Jules Ferry</p>
                    </div>
                    <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-4">
                      <p className="text-xs text-zinc-400 mb-2">Dernier message</p>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-sm">🤝</div>
                        <div>
                          <p className="text-white text-xs font-semibold">Lucas</p>
                          <p className="text-zinc-400 text-xs">Message vocal · il y a 2 min</p>
                        </div>
                        <div className="ml-auto w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-sm">▶</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 w-full">
                      {["📍 GPS", "🔕 Silence", "📞 Appel"].map((btn) => (
                        <div key={btn} className="bg-white/5 border border-white/10 rounded-xl p-2 text-center text-xs text-zinc-300">{btn}</div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Floating notification */}
                <div className="absolute -top-4 -right-8 bg-white rounded-2xl shadow-xl px-4 py-3 border border-zinc-100 flex items-center gap-2 text-sm">
                  <span className="text-red-500 text-lg">🚨</span>
                  <div>
                    <p className="font-bold text-zinc-900 leading-tight">Alerte SOS</p>
                    <p className="text-zinc-500 leading-tight text-xs">Lucas · Maintenant</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="bg-zinc-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#9333EA] uppercase tracking-widest mb-3">Ils l&apos;ont testé</p>
            <h2 className="text-4xl font-black text-zinc-900">
              Les familles <span className="gradient-text">adorent Buddy</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} className="text-yellow-400 text-xl">{s}</span>
                ))}
              </div>
              <span className="font-bold text-zinc-900">4,9/5</span>
              <span className="text-zinc-400 text-sm">· 127 familles</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: "Mon fils de 6 ans adore son Buddy Pingouin. Il l'utilise tous les jours pour me dire qu'il est arrivé à l'école. Plus de stress pour moi !",
                name: "Sophie M.",
                role: "Maman de Lucas, 6 ans",
                emoji: "👩",
                coque: "Pablo le Pingouin",
              },
              {
                text: "J'hésitais entre un smartphone et une montre GPS. Buddy est la solution parfaite : ma fille communique avec nous sans les dangers d'Internet.",
                name: "Thomas D.",
                role: "Papa de Léa, 7 ans",
                emoji: "👨",
                coque: "Luna la Licorne",
              },
              {
                text: "La coque Sirène a été choisie par ma fille en 2 secondes. Elle la chérit comme un jouet. Et moi j'ai la paix d'esprit quand elle est chez ses grands-parents.",
                name: "Camille R.",
                role: "Maman de Chloé, 5 ans",
                emoji: "👩‍🦱",
                coque: "Ariel la Sirène",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white border border-zinc-100 rounded-3xl p-6 shadow-sm">
                <div className="flex mb-3">
                  {"★★★★★".split("").map((s, j) => (
                    <span key={j} className="text-yellow-400">{s}</span>
                  ))}
                </div>
                <p className="text-zinc-700 leading-relaxed mb-5 text-sm">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{t.emoji}</span>
                  <div>
                    <p className="font-bold text-zinc-900 text-sm">{t.name}</p>
                    <p className="text-zinc-400 text-xs">{t.role}</p>
                  </div>
                  <span className="ml-auto text-xs bg-purple-50 text-[#9333EA] border border-purple-100 rounded-full px-2 py-1 font-medium">
                    {t.coque}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/avis" className="text-sm font-semibold text-[#9333EA] hover:underline">
              Voir tous les avis →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <div className="text-5xl mb-6">🤝</div>
          <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 mb-6">
            Prêt à offrir la<br />
            <span className="gradient-text">liberté sans écran ?</span>
          </h2>
          <p className="text-lg text-zinc-500 mb-10 max-w-xl mx-auto">
            Rejoignez les premières familles Buddy. Précommande ouverte,
            livraison été 2026. Satisfait ou remboursé 30 jours.
          </p>
          <Link href="#shop"
            className="btn-gradient inline-flex rounded-2xl px-10 py-5 text-lg font-bold text-white shadow-2xl shadow-purple-200">
            Choisir le Buddy de mon enfant — 119€ →
          </Link>
          <p className="text-sm text-zinc-400 mt-5">
            Port offert · Paiement sécurisé · Livraison été 2026
          </p>
        </div>
      </section>
    </>
  );
}
