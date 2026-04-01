import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ Buddy — Toutes vos questions sur le communicateur sans écran pour enfants",
  description:
    "Toutes les réponses sur Buddy : prix, abonnement, GPS, SOS, app parents, livraison, batterie, compatibilité. Le communicateur sans écran pour enfants de 4 à 8 ans.",
  keywords: [
    "faq buddy",
    "communicateur enfant sans écran",
    "téléphone enfant 4 ans",
    "alternative smartphone enfant",
    "GPS tracker enfant",
    "communicateur enfant questions",
    "walkie talkie enfant 4G",
  ],
};

export type FaqItem = {
  id?: string;
  category: string;
  question: string;
  answer: string;
  display_order?: number;
};

const FAQ_ITEMS: FaqItem[] = [
  // Produit
  {
    category: "Produit",
    question: "Qu'est-ce que Buddy exactement ?",
    answer:
      "Buddy est un communicateur vocal sans écran conçu pour les enfants de 4 à 8 ans. Il ressemble à un walkie-talkie moderne et permet d'envoyer des messages vocaux à la famille, de partager sa position GPS en temps réel et de déclencher une alerte SOS discrète. Pas d'écran, pas de distraction, juste la magie de la communication.",
  },
  {
    category: "Produit",
    question: "Quel est le prix de Buddy ?",
    answer:
      "Buddy est disponible en précommande à 119 € (port offert en France). Un abonnement mensuel de 4,99 €/mois est requis pour activer le GPS temps réel, les messages vocaux et la connexion 4G. Un abonnement annuel est disponible avec le code BUDDY10 pour -10%.",
  },
  {
    category: "Produit",
    question: "À partir de quel âge peut-on utiliser Buddy ?",
    answer:
      "Buddy est conçu pour les enfants de 4 à 8 ans. L'interface est volontairement ultra-simple : un seul gros bouton PTT (Push-To-Talk) pour envoyer un message vocal. Pas de texte à lire, pas d'application à naviguer. Même un enfant de 4 ans peut l'utiliser instinctivement en quelques minutes.",
  },
  {
    category: "Produit",
    question: "Quelle est la différence entre Buddy et un smartphone pour enfant ?",
    answer:
      "La différence est fondamentale : Buddy n'a aucun écran. Pas de YouTube, pas de jeux, pas de réseaux sociaux — impossible. Un smartphone, même « enfant », reste un écran addictif avec un accès potentiel à internet. Buddy offre uniquement la communication vocale et la sécurité GPS, ce qui correspond exactement aux besoins d'un enfant de 4-8 ans sans les risques liés au temps d'écran.",
  },
  {
    category: "Produit",
    question: "Buddy est-il résistant à l'eau et aux chocs ?",
    answer:
      "Oui ! Buddy est certifié IP67 : résistant à une immersion dans l'eau jusqu'à 1 mètre pendant 30 minutes, et conçu pour résister aux chutes du quotidien. Parfait pour une utilisation par un enfant à l'école, au parc, sur la plage ou pendant les vacances.",
  },
  {
    category: "Produit",
    question: "Quelle est la durée de vie de la batterie ?",
    answer:
      "Buddy offre une autonomie d'une journée complète en utilisation normale (envoi de messages, GPS actif). La charge se fait via USB-C en environ 1h30. Une LED sur l'appareil indique le niveau de batterie restant, et l'app parents vous alerte quand la batterie est faible.",
  },
  {
    category: "Produit",
    question: "Que sont les personnalités Buddy ?",
    answer:
      "Chaque Buddy a une personnalité unique représentée par un animal adorable : Léo le lion 🦁, Bella la lapine 🐰, Luna la licorne 🦄, Rex le dinosaure 🦖, Finn le requin 🦈, ou Pao le panda 🐼. Votre enfant choisit sa personnalité préférée — elle détermine la couleur des LEDs et le son d'accueil. C'est sa façon d'identifier son Buddy comme le sien.",
  },
  // Fonctionnement
  {
    category: "Fonctionnement",
    question: "Comment fonctionnent les messages vocaux ?",
    answer:
      "C'est aussi simple qu'un talkie-walkie : l'enfant appuie sur le gros bouton PTT, parle, puis relâche. Le message vocal est envoyé instantanément aux contacts autorisés (parents, grands-parents, etc.). Une LED colorée s'illumine pour confirmer l'envoi. Pas de manipulation complexe, pas d'écran à regarder.",
  },
  {
    category: "Fonctionnement",
    question: "Comment fonctionne le GPS en temps réel ?",
    answer:
      "Buddy utilise le GPS combiné à la 4G LTE pour transmettre la position de votre enfant en temps réel sur l'app parents. Vous pouvez consulter sa position à tout moment, voir son historique de trajet, et définir des zones géographiques (maison, école, chez les grands-parents). Si Buddy quitte une zone définie, vous recevez une notification immédiate.",
  },
  {
    category: "Fonctionnement",
    question: "Comment fonctionne l'alerte SOS ?",
    answer:
      "L'alerte SOS s'active par une double pression + maintien sur le bouton dédié — un geste difficile à faire par accident. Dès l'activation, les parents reçoivent une notification d'urgence avec la position GPS exacte. Le micro ambiant de Buddy s'active également, permettant aux parents d'entendre ce qui se passe autour de l'enfant. Un signal LED rouge clignote discrètement sur l'appareil.",
  },
  {
    category: "Fonctionnement",
    question: "Buddy fonctionne-t-il sans Wi-Fi ?",
    answer:
      "Oui ! Buddy utilise la 4G LTE via une eSIM intégrée. Il fonctionne partout où il y a du réseau mobile (la majorité du territoire français). Le Wi-Fi peut être utilisé en complément pour économiser la bande passante mobile, mais il n'est pas nécessaire.",
  },
  {
    category: "Fonctionnement",
    question: "Quelle est la portée de Buddy ?",
    answer:
      "Grâce à la 4G LTE, la portée de Buddy est illimitée — aussi loin qu'il y ait du réseau. Contrairement à un walkie-talkie classique limité à quelques centaines de mètres, Buddy communique depuis n'importe où en France (et même à l'étranger selon la couverture eSIM).",
  },
  // Application
  {
    category: "Application",
    question: "Sur quels appareils fonctionne l'app parents Buddy ?",
    answer:
      "L'application Buddy Parents est disponible sur iOS (iPhone) et Android. Elle est gratuite au téléchargement et s'associe à votre abonnement Buddy. Jusqu'à 2 parents peuvent être connectés simultanément sur le même compte.",
  },
  {
    category: "Application",
    question: "Que peut-on faire dans l'app parents ?",
    answer:
      "L'app parents vous offre : la carte GPS en temps réel, l'écoute et l'envoi de messages vocaux, la gestion des contacts autorisés (liste blanche), la création et gestion des zones géographiques, le suivi de l'historique de position, la surveillance du niveau de batterie, les paramètres du mode nuit et du plafond de messages.",
  },
  {
    category: "Application",
    question: "Peut-on limiter le nombre de messages que l'enfant envoie ?",
    answer:
      "Oui, l'app parents permet de définir un plafond de messages vocaux par jour. Vous pouvez aussi activer le mode nuit pour désactiver Buddy automatiquement à certaines heures (ex : pendant la nuit ou pendant l'école).",
  },
  {
    category: "Application",
    question: "Buddy a-t-il un store d'applications ou un accès internet ?",
    answer:
      "Non, Buddy n'a aucun store, aucun navigateur, aucun accès internet. Il ne peut ni télécharger des applications, ni accéder à des sites web, ni afficher de publicités. C'est un appareil à usage unique, pensé pour être sûr par conception (safety by design).",
  },
  // Abonnement
  {
    category: "Abonnement",
    question: "L'abonnement est-il obligatoire ?",
    answer:
      "Oui, l'abonnement à 4,99 €/mois est nécessaire pour activer la connexion 4G/eSIM, le GPS temps réel et les messages vocaux via l'app. Sans abonnement, l'appareil ne peut pas communiquer via le réseau mobile. L'abonnement peut être annulé à tout moment.",
  },
  {
    category: "Abonnement",
    question: "Y a-t-il un engagement minimal ?",
    answer:
      "Non, l'abonnement Buddy est sans engagement. Vous pouvez l'annuler à tout moment depuis votre espace compte ou l'app parents. La résiliation prend effet à la fin de la période en cours.",
  },
  {
    category: "Abonnement",
    question: "Que comprend l'eSIM incluse ?",
    answer:
      "L'eSIM Buddy inclut la connectivité 4G LTE nécessaire au fonctionnement de l'appareil (GPS, messages vocaux). Elle est entièrement gérée par Buddy — vous n'avez pas besoin de contacter un opérateur, tout est intégré dans l'abonnement mensuel.",
  },
  // Sécurité
  {
    category: "Sécurité",
    question: "Qui peut envoyer des messages à mon enfant ?",
    answer:
      "Uniquement les contacts que vous avez approuvés dans l'app parents. C'est un système de liste blanche : personne d'inconnu ne peut contacter Buddy. Vous contrôlez totalement qui peut communiquer avec votre enfant.",
  },
  {
    category: "Sécurité",
    question: "Les données de localisation sont-elles sécurisées ?",
    answer:
      "Oui. Les données GPS de votre enfant sont chiffrées de bout en bout et ne sont jamais vendues à des tiers. Elles sont stockées sur des serveurs sécurisés en Europe, conformément au RGPD. Seuls les comptes parents autorisés peuvent accéder à la position.",
  },
  {
    category: "Sécurité",
    question: "Buddy émet-il des ondes ? Est-ce dangereux pour un enfant ?",
    answer:
      "Buddy respecte toutes les normes européennes SAR (débit d'absorption spécifique) pour les appareils radio. Comme tout appareil 4G, il émet des ondes électromagnétiques, mais dans les limites réglementaires autorisées. Il n'est pas conçu pour être porté en permanence contre le corps — l'enfant le tient à la main ou le range dans sa poche.",
  },
  // Livraison
  {
    category: "Livraison",
    question: "Quand sera livré Buddy ?",
    answer:
      "Buddy est actuellement en précommande. Les premières livraisons sont prévues pour l'été 2026. Vous serez notifié par email dès que votre commande est expédiée. Les précommandes sont honorées dans l'ordre d'arrivée.",
  },
  {
    category: "Livraison",
    question: "La livraison est-elle gratuite ?",
    answer:
      "Oui, la livraison est offerte partout en France métropolitaine pour toutes les précommandes. Pour les DOM-TOM et les pays européens, des frais de port peuvent s'appliquer (précisés lors du paiement).",
  },
  {
    category: "Livraison",
    question: "Quelle est la garantie et la politique de remboursement ?",
    answer:
      "Buddy est garanti 2 ans contre les défauts de fabrication. Vous bénéficiez également d'un droit de rétractation de 30 jours après réception : si Buddy ne convient pas, retournez-le dans son emballage d'origine pour un remboursement intégral. Les frais de retour sont à la charge du client dans ce cas.",
  },
  {
    category: "Livraison",
    question: "Comment configurer Buddy à la réception ?",
    answer:
      "La configuration prend environ 3 minutes : téléchargez l'app parents Buddy, scannez le QR code dans la boîte, nommez votre enfant et choisissez sa personnalité, ajoutez les contacts autorisés. C'est tout ! Buddy est prêt à être utilisé. Pas besoin d'insérer une SIM, tout est déjà intégré.",
  },
];

async function getFaqItems(): Promise<FaqItem[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("faq_items")
      .select("id, question, answer, category, display_order")
      .eq("published", true)
      .order("display_order", { ascending: true });

    if (error || !data || data.length === 0) {
      return FAQ_ITEMS;
    }
    return data as FaqItem[];
  } catch {
    return FAQ_ITEMS;
  }
}

export default async function FaqPage() {
  const faqItems = await getFaqItems();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="hero-gradient py-20 px-4 text-center">
        <div className="mx-auto max-w-3xl">
          <span className="inline-block bg-purple-100 text-[#9333EA] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Centre d&apos;aide
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 leading-tight">
            Toutes vos questions sur{" "}
            <span className="gradient-text">Buddy</span>
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Le communicateur sans écran pour les enfants de 4 à 8 ans. Retrouvez
            les réponses à toutes vos questions sur le produit, le fonctionnement,
            l&apos;application et l&apos;abonnement.
          </p>
        </div>
      </section>

      {/* FAQ Accordion (Client Component) */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-3xl">
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black text-zinc-900 mb-4">
            Une question sans réponse ?
          </h2>
          <p className="text-zinc-600 mb-8">
            Notre équipe est disponible pour vous répondre par email sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@getbuddy.fr"
              className="inline-block border-2 border-[#9333EA] text-[#9333EA] font-semibold px-8 py-3 rounded-full hover:bg-purple-50 transition-colors"
            >
              Nous contacter
            </a>
            <Link
              href="/#pricing"
              className="btn-gradient inline-block px-8 py-3 rounded-full text-white font-semibold shadow-lg"
            >
              Précommander Buddy — 119€
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
