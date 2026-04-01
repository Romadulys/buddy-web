import Link from "next/link";

function BuddyDevice({ emoji = "🦁", color = "#FB923C" }: { emoji?: string; color?: string }) {
  return (
    <div
      className="relative mx-auto w-36 h-56 rounded-3xl shadow-2xl flex flex-col items-center justify-between py-4 border-4"
      style={{ background: `linear-gradient(160deg, ${color}22 0%, ${color}44 100%)`, borderColor: color }}
    >
      <div className="w-24 h-5 rounded-full bg-black/10 relative overflow-hidden">
        <div
          className="absolute inset-0 rounded-full animate-led-fill"
          style={{ background: `linear-gradient(90deg, ${color}, #fff, ${color})` }}
        />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-4xl">{emoji}</span>
        <span className="text-xs font-black tracking-widest" style={{ color }}> BUDDY</span>
      </div>
      <div
        className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center border-4 border-white"
        style={{ background: color }}
      >
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3zM7 10a5 5 0 0010 0h2a7 7 0 01-6 6.93V20h3v2H8v-2h3v-3.07A7 7 0 015 10h2z" />
        </svg>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #9333EA, transparent)" }} />
          <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #F97316, transparent)" }} />
        </div>

        <div className="mx-auto max-w-7xl px-4 pt-20 pb-24 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-[#9333EA] border border-purple-200 mb-6 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-[#9333EA] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9333EA]" />
                </span>
                Précommande ouverte — Livraison été 2026
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-zinc-900 mb-6">
                Tes mots<br />
                <span className="gradient-text">prennent<br />leur envol.</span>
              </h1>

              <p className="text-xl text-zinc-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                Buddy est le premier communicateur <strong>sans écran</strong> pour les enfants de 4 à 8 ans.
                Messages vocaux, GPS, alerte SOS — toute la magie de la communication, sans distraction.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="#pricing" className="btn-gradient rounded-2xl px-8 py-4 text-base font-bold text-white shadow-xl">
                  Précommander — 119€ 🤝
                </Link>
                <Link href="#comment-ca-marche"
                  className="rounded-2xl px-8 py-4 text-base font-semibold text-zinc-700 bg-white border border-zinc-200 hover:border-[#9333EA] hover:text-[#9333EA] transition-colors shadow-sm">
                  Comment ça marche →
                </Link>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  {["🧑‍👦", "👩‍👧", "🧑‍👧‍👦", "👨‍👩‍👦"].map((e, i) => (
                    <div key={i} className="w-9 h-9 rounded-full bg-white border-2 border-white shadow flex items-center justify-center text-base">
                      {e}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-[#F97316]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-zinc-500 mt-0.5"><strong className="text-zinc-800">+500 familles</strong> en précommande</p>
                </div>
              </div>
            </div>

            <div className="flex-1 flex items-end justify-center gap-6">
              <div className="animate-float" style={{ animationDelay: "0s" }}>
                <BuddyDevice emoji="🦁" color="#FB923C" />
              </div>
              <div className="animate-float mb-8" style={{ animationDelay: "0.5s" }}>
                <BuddyDevice emoji="🦄" color="#C084FC" />
              </div>
              <div className="animate-float" style={{ animationDelay: "1s" }}>
                <BuddyDevice emoji="🐰" color="#F472B6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LED BAR SIGNATURE ── */}
      <section className="bg-zinc-950 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-zinc-500 text-sm uppercase tracking-widest mb-4 font-medium">La signature Buddy</p>
          <h2 className="text-3xl font-black text-white mb-6">
            Flying Message <span className="gradient-text">Light Bar</span>
          </h2>
          <p className="text-zinc-400 mb-10 text-lg">
            Pas d&apos;écran. À la place, une barre LED colorée qui prend vie à chaque message.
          </p>

          <div className="relative mx-auto max-w-xs mb-10">
            <div className="flex items-center justify-center gap-1.5 py-4">
              {[...Array(14)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 rounded-full wave-bar"
                  style={{
                    background: `linear-gradient(135deg, #9333EA, #EC4899, #F97316)`,
                    opacity: 0.15 + (i / 14) * 0.85,
                    animationDelay: `${i * 0.08}s`,
                  }}
                />
              ))}
            </div>
            <p className="text-center text-sm text-zinc-500">✨ Message envoyé — barre LED signature</p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[
              { icon: "🎙️", label: "Appui long", desc: "La barre se remplit progressivement" },
              { icon: "✨", label: "Message parti", desc: "Un point lumineux traverse la barre" },
              { icon: "💚", label: "Confirmé", desc: "La barre clignote 2× en vert" },
            ].map((s) => (
              <div key={s.label} className="bg-zinc-900 rounded-2xl p-5">
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="text-white font-bold text-sm mb-1">{s.label}</div>
                <div className="text-zinc-500 text-xs">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMENT ÇA MARCHE ── */}
      <section id="comment-ca-marche" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#9333EA] font-semibold text-sm uppercase tracking-widest mb-3">Simple comme bonjour</p>
            <h2 className="text-4xl font-black text-zinc-900">Comment ça <span className="gradient-text">marche ?</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", emoji: "📦", title: "Choisir sa personnalité", desc: "Léo le Lion, Bella le Lapin, Luna la Licorne… chaque enfant choisit son Buddy. Un compagnon unique, rien qu'à lui.", color: "#FB923C" },
              { step: "02", emoji: "📱", title: "Configurer avec l'app", desc: "En quelques minutes, tu ajoutes les contacts (max 5), configures les zones géographiques et actives la localisation GPS.", color: "#9333EA" },
              { step: "03", emoji: "🎙️", title: "Appuyer, parler, envoyer", desc: "L'enfant maintient le bouton, parle, relâche. Le message vocal part instantanément. La barre LED s'illumine. Magie.", color: "#EC4899" },
            ].map((item) => (
              <div key={item.step} className="card-hover relative bg-white rounded-3xl p-8 border border-zinc-100 shadow-sm">
                <div className="text-6xl font-black mb-4 opacity-10 absolute top-6 right-8" style={{ color: item.color }}>{item.step}</div>
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{item.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="bg-zinc-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#9333EA] font-semibold text-sm uppercase tracking-widest mb-3">Conçu pour les enfants</p>
            <h2 className="text-4xl font-black text-zinc-900">Tout ce qu&apos;il faut,<br /><span className="gradient-text">rien de plus.</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: "🎙️", title: "Messages vocaux", desc: "Push-To-Talk intuitif. L'enfant appuie, parle, relâche. Aucune lecture, aucune écriture nécessaire.", color: "#9333EA" },
              { emoji: "📍", title: "GPS en temps réel", desc: "Localisation précise, géofencing, historique des positions et mode école. Les parents voient tout.", color: "#EC4899" },
              { emoji: "🆘", title: "Alerte SOS discrète", desc: "Double pression + maintien → alerte silencieuse envoyée aux parents avec GPS + micro ambiant 30s.", color: "#F97316" },
              { emoji: "🚫", title: "Zéro écran, zéro distraction", desc: "Pas de YouTube, pas de jeux, pas de réseaux. Seulement la communication. L'essentiel.", color: "#3B82F6" },
              { emoji: "🛡️", title: "IP67 — Anti-choc", desc: "Résistant à l'eau, à la poussière, aux chutes jusqu'à 1,5m. Conçu pour les aventures d'enfants.", color: "#4ADE80" },
              { emoji: "📶", title: "4G LTE + Wi-Fi", desc: "eSIM intégrée, Wi-Fi, roaming optionnel. Fonctionne partout en France et en Europe.", color: "#F472B6" },
            ].map((f) => (
              <div key={f.title} className="card-hover bg-white rounded-3xl p-7 border border-zinc-100 shadow-sm">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5" style={{ background: `${f.color}18` }}>
                  {f.emoji}
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">{f.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERSONNALITÉS ── */}
      <section id="personnalites" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#9333EA] font-semibold text-sm uppercase tracking-widest mb-3">Chacun son Buddy</p>
            <h2 className="text-4xl font-black text-zinc-900">6 personnalités,<br /><span className="gradient-text">6 aventures uniques.</span></h2>
            <p className="text-zinc-500 mt-4 text-lg max-w-xl mx-auto">
              Chaque Buddy a sa couleur, son caractère, son histoire. L&apos;enfant choisit son compagnon — pour la vie.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {[
              { emoji: "🦁", name: "Léo", desc: "Le courageux", color: "#FB923C" },
              { emoji: "🐰", name: "Bella", desc: "La douce", color: "#F472B6" },
              { emoji: "🦄", name: "Luna", desc: "La magique", color: "#C084FC" },
              { emoji: "🦖", name: "Rex", desc: "L'aventurier", color: "#4ADE80" },
              { emoji: "🦈", name: "Finn", desc: "L'explorateur", color: "#60A5FA" },
              { emoji: "🐼", name: "Pao", desc: "Le zen", color: "#94A3B8" },
            ].map((p) => (
              <div key={p.name} className="card-hover flex flex-col items-center text-center rounded-3xl p-6 border-2 transition-colors"
                style={{ borderColor: `${p.color}40`, background: `${p.color}08` }}>
                <div className="text-5xl mb-3">{p.emoji}</div>
                <div className="font-bold text-zinc-900 text-lg">{p.name}</div>
                <div className="text-sm font-medium mt-1" style={{ color: p.color }}>{p.desc}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-zinc-400 text-sm mt-8">Disponible en 6 coloris. Coques interchangeables à venir.</p>
        </div>
      </section>

      {/* ── APP PARENTS ── */}
      <section id="app" className="py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #fdf4ff 0%, #fce7f3 100%)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-64 h-[520px] bg-zinc-900 rounded-[3rem] border-4 border-zinc-800 shadow-2xl p-3 relative">
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-zinc-800 rounded-full" />
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden pt-8">
                    <div className="px-4">
                      <div className="flex items-center justify-between mb-5">
                        <div>
                          <div className="text-xs text-zinc-400">Bonjour 👋</div>
                          <div className="font-bold text-zinc-900 text-sm">Marie</div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#9333EA] to-[#EC4899] flex items-center justify-center text-white text-xs font-bold">M</div>
                      </div>
                      <div className="rounded-2xl p-4 mb-4 text-white" style={{ background: "linear-gradient(135deg, #FB923C, #F97316)" }}>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-3xl">🦁</span>
                          <div>
                            <div className="font-bold">Léo — Thomas</div>
                            <div className="text-xs opacity-80">● En ligne — École Jules Ferry</div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <div className="flex-1 bg-white/20 rounded-xl py-2 text-center text-xs font-medium">Localiser</div>
                          <div className="flex-1 bg-white/20 rounded-xl py-2 text-center text-xs font-medium">Message</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {[
                          { label: "Batterie", value: "78%", icon: "🔋" },
                          { label: "Messages", value: "4", icon: "🎙️" },
                          { label: "Zone", value: "OK", icon: "✅" },
                        ].map((s) => (
                          <div key={s.label} className="bg-zinc-50 rounded-xl p-2 text-center">
                            <div className="text-lg">{s.icon}</div>
                            <div className="font-bold text-zinc-900 text-sm">{s.value}</div>
                            <div className="text-zinc-400 text-[10px]">{s.label}</div>
                          </div>
                        ))}
                      </div>
                      <div className="bg-zinc-50 rounded-2xl p-3">
                        <div className="text-xs text-zinc-400 mb-2">Dernier message vocal</div>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-[#9333EA]/10 flex items-center justify-center">🦁</div>
                          <div className="flex gap-0.5 items-end h-6">
                            {[...Array(7)].map((_, i) => (
                              <div key={i} className="w-1.5 rounded-full wave-bar" style={{ background: "#9333EA" }} />
                            ))}
                          </div>
                          <div className="text-xs text-zinc-400 ml-1">0:08</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-6 bg-white rounded-2xl shadow-xl p-3 border border-red-100 w-44 animate-float" style={{ animationDelay: "1s" }}>
                  <div className="text-xs font-bold text-red-500 mb-1">🆘 Alerte SOS</div>
                  <div className="text-xs text-zinc-500">Thomas a déclenché une alerte</div>
                  <div className="text-[10px] text-zinc-400 mt-1">Il y a 2 min · Voir sur carte →</div>
                </div>
                <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-xl p-3 border border-orange-100 w-40 animate-float" style={{ animationDelay: "0.3s" }}>
                  <div className="text-xs font-bold text-orange-500 mb-1">🔋 Batterie faible</div>
                  <div className="text-xs text-zinc-500">Buddy Léo — 12%</div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <p className="text-[#9333EA] font-semibold text-sm uppercase tracking-widest mb-3">Application parents</p>
              <h2 className="text-4xl font-black text-zinc-900 mb-6">Tout le contrôle.<br /><span className="gradient-text">Zéro anxiété.</span></h2>
              <p className="text-zinc-600 text-lg leading-relaxed mb-8">
                Depuis ton téléphone, tu suis tout en temps réel. La localisation, les messages, la batterie, les zones — et tu reçois une alerte immédiate en cas de SOS.
              </p>
              <div className="space-y-5">
                {[
                  { emoji: "📍", title: "Carte en temps réel", desc: "Position GPS mise à jour toutes les 30s. Historique des trajets." },
                  { emoji: "🎙️", title: "Messages vocaux", desc: "Écoute les messages de ton enfant. Réponds d'une simple pression." },
                  { emoji: "🔔", title: "Notifications intelligentes", desc: "Arrivée à l'école, zone géofencée, batterie faible, SOS — tu es toujours au courant." },
                  { emoji: "👨‍👩‍👦", title: "Multi-enfants, multi-parents", desc: "Gérez jusqu'à 5 Buddy par famille. Partagez l'accès avec l'autre parent." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center text-xl shrink-0">{item.emoji}</div>
                    <div>
                      <div className="font-bold text-zinc-900">{item.title}</div>
                      <div className="text-zinc-500 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex gap-4">
                <a href="#" className="flex items-center gap-2 bg-zinc-900 text-white rounded-xl px-5 py-3 text-sm font-semibold hover:bg-zinc-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                  App Store
                </a>
                <a href="#" className="flex items-center gap-2 bg-zinc-900 text-white rounded-xl px-5 py-3 text-sm font-semibold hover:bg-zinc-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3.18 23.76c.28.15.6.2.93.14l12.82-7.4-2.79-2.79-10.96 10.05zM.54 1.25C.21 1.62 0 2.16 0 2.87v18.26c0 .71.21 1.25.54 1.62l.09.08 10.24-10.24v-.24L.63 1.17l-.09.08zM20.6 10.37l-2.81-1.63-3.12 3.12 3.12 3.12 2.84-1.65c.81-.47.81-1.23-.03-1.96zM3.18.24L16 7.64l-2.79 2.79L.37.38C.7.32 1.01.37 1.3.52l1.88 1.1V.24z" /></svg>
                  Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPECS ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-zinc-900">Conçu pour <span className="gradient-text">durer.</span></h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "80×60×20mm", label: "Format walkie-talkie", emoji: "📐" },
              { value: "IP67", label: "Étanche & anti-choc", emoji: "🛡️" },
              { value: "1 semaine", label: "Autonomie cible", emoji: "🔋" },
              { value: "150g", label: "Poids plume", emoji: "⚡" },
            ].map((s) => (
              <div key={s.label} className="bg-zinc-50 rounded-3xl p-6">
                <div className="text-3xl mb-2">{s.emoji}</div>
                <div className="text-xl font-black text-zinc-900">{s.value}</div>
                <div className="text-sm text-zinc-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="bg-zinc-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#9333EA] font-semibold text-sm uppercase tracking-widest mb-3">Simple et transparent</p>
            <h2 className="text-4xl font-black text-zinc-900">Un prix honnête,<br /><span className="gradient-text">pour chaque famille.</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="card-hover bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm">
              <div className="text-3xl mb-4">📦</div>
              <h3 className="text-xl font-black text-zinc-900 mb-2">Buddy Device</h3>
              <p className="text-zinc-500 text-sm mb-6">Le communicateur avec ta personnalité préférée. USB-C inclus.</p>
              <div className="mb-6">
                <span className="text-5xl font-black text-zinc-900">119€</span>
                <span className="text-zinc-400 ml-2">une fois</span>
              </div>
              <ul className="space-y-3 mb-8">
                {["6 personnalités au choix", "4G LTE + Wi-Fi intégré", "GPS + SOS inclus", "IP67 — résistant eau & chutes", "Câble USB-C inclus", "Garantie 2 ans"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-zinc-600">
                    <span className="text-[#9333EA]">✓</span> {item}
                  </li>
                ))}
              </ul>
              <Link href="#" className="btn-gradient block w-full text-center rounded-2xl py-4 font-bold text-white">
                Précommander 🤝
              </Link>
            </div>

            <div className="card-hover bg-zinc-950 rounded-3xl p-8 border border-zinc-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[#9333EA] to-[#EC4899] text-white text-xs font-bold px-3 py-1 rounded-full">
                Recommandé
              </div>
              <div className="text-3xl mb-4">📡</div>
              <h3 className="text-xl font-black text-white mb-2">Abonnement</h3>
              <p className="text-zinc-400 text-sm mb-6">Connectivité 4G, stockage messages, GPS illimité, mises à jour.</p>
              <div className="mb-6">
                <span className="text-5xl font-black text-white">4,99€</span>
                <span className="text-zinc-400 ml-2">/mois</span>
              </div>
              <ul className="space-y-3 mb-8">
                {["eSIM 4G LTE incluse", "Messages vocaux illimités", "GPS temps réel", "Rétention messages 30 jours", "Mises à jour automatiques", "6,99€/mois roaming Europe"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-zinc-300">
                    <span className="text-[#EC4899]">✓</span> {item}
                  </li>
                ))}
              </ul>
              <Link href="#" className="btn-gradient block w-full text-center rounded-2xl py-4 font-bold text-white">
                Démarrer l&apos;abonnement
              </Link>
            </div>
          </div>
          <p className="text-center text-zinc-400 text-sm mt-8">Sans engagement · Résiliation en 1 clic · Satisfait ou remboursé 30 jours</p>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-zinc-900">Les familles <span className="gradient-text">adorent Buddy.</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "Mon fils de 6 ans a compris tout seul en 2 minutes. La barre LED c'est magique — il est trop fier quand son message s'envole.", author: "Marie L.", role: "Maman de Thomas, 6 ans", emoji: "👩‍👦" },
              { quote: "On cherchait une solution entre le téléphone (trop tôt) et rien du tout. Buddy c'est exactement ça. Le GPS nous rassure énormément.", author: "Julien M.", role: "Papa de Camille, 5 ans", emoji: "👨‍👧" },
              { quote: "Le bouton SOS m'a vraiment convaincue. Simple pour elle, rassurant pour moi. Et elle adore sa Bella le lapin !", author: "Sophie R.", role: "Maman de Léa, 7 ans", emoji: "👩‍👧" },
            ].map((t) => (
              <div key={t.author} className="card-hover bg-zinc-50 rounded-3xl p-7 border border-zinc-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#F97316]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed mb-5 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{t.emoji}</div>
                  <div>
                    <div className="font-bold text-zinc-900 text-sm">{t.author}</div>
                    <div className="text-zinc-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #9333EA 0%, #EC4899 50%, #F97316 100%)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 80%, white 0%, transparent 50%), radial-gradient(circle at 80% 20%, white 0%, transparent 50%)" }} />
        <div className="mx-auto max-w-3xl px-4 text-center relative">
          <div className="text-6xl mb-6 animate-float">🤝</div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Prêt à offrir<br />la magie à ton enfant ?
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-xl mx-auto">
            Rejoins +500 familles en précommande. Livraison été 2026. Satisfait ou remboursé 30 jours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#pricing" className="bg-white text-[#9333EA] rounded-2xl px-10 py-5 text-lg font-black shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
              Précommander — 119€
            </Link>
            <Link href="#comment-ca-marche" className="bg-white/20 backdrop-blur-sm text-white rounded-2xl px-10 py-5 text-lg font-semibold border border-white/30 hover:bg-white/30 transition-colors">
              En savoir plus →
            </Link>
          </div>
          <p className="text-white/60 text-sm mt-6">Sans engagement · Port offert en France · Garantie 2 ans</p>
        </div>
      </section>
    </>
  );
}
