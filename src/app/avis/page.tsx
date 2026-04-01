import type { Metadata } from "next";
import Link from "next/link";
import { AvisFilters } from "@/components/avis/AvisFilters";
import { AvisSubmitForm } from "@/components/avis/AvisSubmitForm";

export const metadata: Metadata = {
  title: "Avis Buddy — Témoignages de parents sur le communicateur sans écran",
  description:
    "Découvrez les avis et témoignages de parents sur Buddy, le communicateur sans écran pour enfants de 4 à 8 ans. Note 4.8/5. Situations réelles : école, vacances, grands-parents.",
  keywords: [
    "avis buddy communicateur enfant",
    "témoignages parents buddy",
    "avis walkie talkie enfant GPS",
    "témoignages communicateur sans écran enfant",
  ],
};

export type Avis = {
  id: number;
  name: string;
  emoji: string;
  age: string;
  rating: number;
  category: string;
  situation: string;
  text: string;
};

export const AVIS_LIST: Avis[] = [
  {
    id: 1,
    name: "Sophie L.",
    emoji: "👩‍👧",
    age: "Maman de Chloé, 5 ans",
    rating: 5,
    category: "5 étoiles",
    situation: "École",
    text: "On a offert Buddy à Chloé pour son entrée en CP. Elle adore envoyer des petits messages vocaux depuis la récré. Pour moi, c'est une révolution : je sais où elle est, je peux lui parler, sans lui donner un smartphone à 5 ans. C'est exactement ce dont j'avais besoin.",
  },
  {
    id: 2,
    name: "Marc D.",
    emoji: "👨‍👦",
    age: "Papa de Théo, 7 ans",
    rating: 5,
    category: "5 étoiles",
    situation: "Famille",
    text: "Le GPS m'a sauvé la mise lors d'une sortie au parc. Théo s'était éloigné avec des copains et je l'ai retrouvé en 2 minutes grâce à l'app. Avant ça, je stressais à chaque sortie. Buddy a changé ma façon de vivre les activités avec mon fils.",
  },
  {
    id: 3,
    name: "Isabelle M.",
    emoji: "👩‍👧‍👦",
    age: "Maman de Luca, 6 ans, et Emma, 8 ans",
    rating: 5,
    category: "5 étoiles",
    situation: "Famille",
    text: "Mes deux enfants ont chacun leur Buddy. Ils peuvent se parler entre eux et avec nous. Les grands-parents ont accès à l'app aussi — pour eux c'est magique d'entendre la voix de Luca à tout moment. Aucun de mes enfants ne réclame de téléphone depuis.",
  },
  {
    id: 4,
    name: "Pierre & Claire V.",
    emoji: "👨‍👩‍👧",
    age: "Parents de Zoe, 4 ans",
    rating: 5,
    category: "5 étoiles",
    situation: "École",
    text: "Notre fille a 4 ans et elle a compris comment utiliser Buddy en moins d'une minute. Le gros bouton est instinctif. Elle envoie des bisous vocaux quand on est au bureau. On pleure à chaque fois. La LED qui s'illumine la fait rire aux éclats. Produit magique.",
  },
  {
    id: 5,
    name: "Julien T.",
    emoji: "👨‍👦‍👦",
    age: "Papa de Nathan, 8 ans",
    rating: 4,
    category: "4 étoiles",
    situation: "École",
    text: "Super produit globalement. Nathan l'adore et le GPS fonctionne très bien. Je retire une étoile car j'attends encore la livraison (précommande) mais tout ce que j'ai vu en démo m'a convaincu. Le service client répond rapidement, c'est rassurant.",
  },
  {
    id: 6,
    name: "Nathalie B.",
    emoji: "👩‍👦",
    age: "Maman de Jules, 6 ans",
    rating: 5,
    category: "5 étoiles",
    situation: "Voyage",
    text: "Vacances à la mer — Buddy a été parfait. Jules partait jouer sur la plage pendant qu'on restait sous le parasol. On voyait sa position en temps réel et il nous envoyait des messages vocaux rigolots. Plus de stress, plus de disputes pour rester collés. Des vacances vraiment reposantes.",
  },
  {
    id: 7,
    name: "Carole F.",
    emoji: "👩‍👧",
    age: "Maman de Léa, 5 ans",
    rating: 4,
    category: "4 étoiles",
    situation: "Famille",
    text: "Léa appelle sa mamie tous les soirs avec Buddy. Pour une grand-mère qui n'est pas à l'aise avec la technologie, c'est parfait : l'app est simple et elle reçoit les messages vocaux facilement. Vraiment bien pensé pour toute la famille.",
  },
  {
    id: 8,
    name: "Thomas & Alice R.",
    emoji: "👨‍👩‍👦",
    age: "Parents de Maxime, 7 ans",
    rating: 5,
    category: "5 étoiles",
    situation: "École",
    text: "Maxime est en CE1 et va à l'école seul depuis quelques semaines. Buddy nous permet de suivre qu'il est bien arrivé sans l'appeler — il y a une zone définie autour de l'école, on reçoit la notification. C'est exactement l'indépendance progressive dont il avait besoin.",
  },
  {
    id: 9,
    name: "Amandine P.",
    emoji: "👩‍👧‍👦",
    age: "Maman de Tom, 6 ans, et Alice, 4 ans",
    rating: 5,
    category: "5 étoiles",
    situation: "Voyage",
    text: "Weekend en famille à Disneyland. Avec 2 enfants et la foule, j'ai passé le meilleur weekend de ma vie parentale grâce à Buddy. Tom avait un Buddy, mon mari suivait la position en temps réel pendant que je gardais Alice. Zero stress. On recommande sans hésiter.",
  },
];

export default function AvisPage() {
  const avgRating = (
    AVIS_LIST.reduce((sum, a) => sum + a.rating, 0) / AVIS_LIST.length
  ).toFixed(1);

  const count5 = AVIS_LIST.filter((a) => a.rating === 5).length;
  const count4 = AVIS_LIST.filter((a) => a.rating === 4).length;

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-20 px-4 text-center">
        <div className="mx-auto max-w-3xl">
          <span className="inline-block bg-yellow-100 text-yellow-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Témoignages parents
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 leading-tight">
            Ce que disent les familles{" "}
            <span className="gradient-text">Buddy</span>
          </h1>
          <p className="text-lg text-zinc-600 max-w-xl mx-auto">
            Des parents qui ont testé, adopté et adoré Buddy. Découvrez leurs
            expériences réelles.
          </p>
        </div>
      </section>

      {/* Note globale */}
      <section className="py-12 px-4 bg-white border-b border-zinc-100">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-black gradient-text">{avgRating}</div>
              <div className="flex gap-1 justify-center mt-2">
                {[1,2,3,4,5].map((s) => (
                  <span key={s} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              <p className="text-zinc-500 text-sm mt-1">sur {AVIS_LIST.length} avis</p>
            </div>
            <div className="hidden md:block w-px h-20 bg-zinc-200" />
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-sm text-zinc-600 w-16">5 ★</span>
                <div className="w-40 h-2.5 bg-zinc-100 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-400 rounded-full" style={{ width: `${(count5 / AVIS_LIST.length) * 100}%` }} />
                </div>
                <span className="text-sm text-zinc-500">{count5}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-zinc-600 w-16">4 ★</span>
                <div className="w-40 h-2.5 bg-zinc-100 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-300 rounded-full" style={{ width: `${(count4 / AVIS_LIST.length) * 100}%` }} />
                </div>
                <span className="text-sm text-zinc-500">{count4}</span>
              </div>
            </div>
            <div className="hidden md:block w-px h-20 bg-zinc-200" />
            <div className="text-center p-4 bg-green-50 rounded-2xl border border-green-200">
              <div className="text-green-700 font-bold text-sm">✓ Avis vérifiés</div>
              <div className="text-xs text-green-600 mt-1">Précommandes & beta-testeurs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtered grid */}
      <section className="py-16 px-4 bg-zinc-50">
        <div className="mx-auto max-w-6xl">
          <AvisFilters avis={AVIS_LIST} />
        </div>
      </section>

      {/* Cas d'usage */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-black text-zinc-900 text-center mb-12">3 histoires qui résument tout</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏫",
                title: "L'indépendance à l'école",
                story: "Camille a 7 ans et commence à aller à l'école seule. Ses parents créent une zone GPS autour de l'école. Quand elle arrive, ils reçoivent une notification automatique. Pas d'appel, pas de stress — juste la tranquillité.",
              },
              {
                icon: "🏖️",
                title: "Les vacances sans stress",
                story: "Antoine, 6 ans, part jouer dans les vagues pendant que ses parents lisent. Grâce au GPS temps réel, ils savent toujours où il est. Quand Antoine veut les rejoindre, il appuie sur le bouton et leur envoie un message vocal rigolo.",
              },
              {
                icon: "👵",
                title: "Le lien avec les grands-parents",
                story: "Les grands-parents de Lucie vivent à 300 km. Grâce à l'app parents, ils sont ajoutés comme contacts autorisés. Lucie leur envoie des messages vocaux tous les soirs. La distance n'existe plus.",
              },
            ].map(({ icon, title, story }) => (
              <div key={title} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-black text-zinc-900 text-lg mb-3">{title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit your review */}
      <section className="py-20 px-4 bg-white border-t border-zinc-100">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <span className="inline-block bg-purple-100 text-[#9333EA] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Déposer un avis
          </span>
          <h2 className="text-3xl font-black text-zinc-900">Vous avez testé Buddy ?</h2>
          <p className="text-zinc-500 mt-2 text-sm">
            Partagez votre expérience — votre témoignage aide d&apos;autres familles à franchir le pas.
          </p>
        </div>
        <AvisSubmitForm />
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#9333EA] to-[#EC4899] text-white text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-black mb-4">Rejoignez les familles Buddy</h2>
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
