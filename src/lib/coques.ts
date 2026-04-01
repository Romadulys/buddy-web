export type Coque = {
  slug: string;
  name: string;
  label: string;
  emoji: string;
  img: string;
  accentColor: string;      // Tailwind bg class for accent
  hexColor: string;         // hex for gradients
  description: string;
  tags: string[];
  popular?: boolean;
  isNew?: boolean;
};

export const COQUES: Coque[] = [
  {
    slug: "luna",
    name: "Luna",
    label: "Licorne Rose",
    emoji: "🦄",
    img: "/images/device/p02.jpg",
    accentColor: "bg-pink-50",
    hexColor: "#EC4899",
    description:
      "Luna est la coque licorne arc-en-ciel, parfaite pour les petites fées en herbe. Sa corne multicolore et ses ailes de fée font fondre les cœurs. La coque préférée des enfants qui croient à la magie.",
    tags: ["fille", "licorne", "rose", "arc-en-ciel"],
    popular: true,
  },
  {
    slug: "ariel",
    name: "Ariel",
    label: "Sirène Princesse",
    emoji: "🧜",
    img: "/images/device/p12.jpg",
    accentColor: "bg-teal-50",
    hexColor: "#14B8A6",
    description:
      "Ariel plonge votre enfant dans les fonds marins avec sa couronne de nacre et sa queue scintillante. Une coque princesse détaillée, pour les petites sirènes qui rêvent d'aventures océaniques.",
    tags: ["fille", "sirène", "mer", "princesse"],
    popular: true,
  },
  {
    slug: "drago",
    name: "Drago",
    label: "Dragon Vert",
    emoji: "🐉",
    img: "/images/device/p13.jpg",
    accentColor: "bg-green-50",
    hexColor: "#22C55E",
    description:
      "Drago est un petit dragon kawaii avec ses ailes et sa queue touffue. Malgré ses crocs et ses cornes, il est complètement adorable ! La coque parfaite pour les enfants qui aiment les créatures fantastiques.",
    tags: ["garçon", "fille", "dragon", "vert", "fantastique"],
    popular: true,
  },
  {
    slug: "fantome",
    name: "Fantôme",
    label: "Fantôme Kawaii",
    emoji: "👻",
    img: "/images/device/p17.jpg",
    accentColor: "bg-purple-50",
    hexColor: "#9333EA",
    description:
      "Ce petit fantôme translucide avec son bouton violet est la coque la plus originale de la collection. Son corps lumineux et ses petits fantômes imprimés le rendent unique. Pour les enfants qui n'ont peur de rien.",
    tags: ["garçon", "fille", "fantôme", "halloween", "violet"],
    isNew: true,
  },
  {
    slug: "bambou",
    name: "Bambou",
    label: "Panda",
    emoji: "🐼",
    img: "/images/device/p05.jpg",
    accentColor: "bg-zinc-50",
    hexColor: "#18181B",
    description:
      "Bambou est un panda tout en rondeurs, avec ses grands yeux et ses oreilles rondes en silicone. Simple, doux et irrésistible. La coque idéale pour les enfants qui adorent les animaux de la jungle.",
    tags: ["garçon", "fille", "panda", "noir", "blanc"],
    popular: true,
  },
  {
    slug: "pablo",
    name: "Pablo",
    label: "Pingouin",
    emoji: "🐧",
    img: "/images/device/p03.jpg",
    accentColor: "bg-slate-50",
    hexColor: "#64748B",
    description:
      "Pablo le pingouin est reconnaissable entre tous avec son ventre blanc, son bec orange et ses bras en forme d'ailes. Un classique de la collection, adoré des petits et des grands.",
    tags: ["garçon", "fille", "pingouin", "noir", "blanc"],
    popular: true,
  },
  {
    slug: "aviateur",
    name: "Aviateur",
    label: "Avion Bleu",
    emoji: "✈️",
    img: "/images/device/p21.jpg",
    accentColor: "bg-blue-50",
    hexColor: "#3B82F6",
    description:
      "L'Aviateur est un adorable avion bleu avec ses ailes déployées, son hublot décoré et son hélice rouge sur le dessus. Pour les futurs pilotes et les enfants qui rêvent de voyages.",
    tags: ["garçon", "avion", "bleu", "véhicule"],
    isNew: true,
  },
  {
    slug: "lola",
    name: "Lola",
    label: "Lapin Blanc",
    emoji: "🐰",
    img: "/images/device/p09.jpg",
    accentColor: "bg-rose-50",
    hexColor: "#F43F5E",
    description:
      "Lola est un lapin tout blanc aux longues oreilles roses. Douce et câline, cette coque est parfaite pour les enfants qui aiment les animaux moelleux. Un classique de la collection.",
    tags: ["fille", "lapin", "blanc", "rose", "mignon"],
    popular: true,
  },
  {
    slug: "mimi",
    name: "Mimi",
    label: "Chat Gris",
    emoji: "🐱",
    img: "/images/device/p07.jpg",
    accentColor: "bg-gray-50",
    hexColor: "#9CA3AF",
    description:
      "Mimi est un chat gris avec ses moustaches finement gravées et ses petites oreilles triangulaires. Sa LED rose lui donne un regard mystérieux. Pour tous les fans de chats.",
    tags: ["fille", "chat", "gris", "mignon"],
  },
  {
    slug: "ellie",
    name: "Ellie",
    label: "Éléphant",
    emoji: "🐘",
    img: "/images/device/p15.jpg",
    accentColor: "bg-slate-50",
    hexColor: "#94A3B8",
    description:
      "Ellie est une éléphante avec ses grandes oreilles rondes et sa trompe 3D. Ses yeux brillants en forme d'étoile lui donnent un air de princesse. Pour les enfants qui aiment les grands animaux.",
    tags: ["fille", "éléphant", "gris", "safari"],
    isNew: true,
  },
  {
    slug: "pompier",
    name: "Pompier",
    label: "Camion de Pompier",
    emoji: "🚒",
    img: "/images/device/p16.jpg",
    accentColor: "bg-red-50",
    hexColor: "#EF4444",
    description:
      "Un camion de pompier avec des échelles sur les côtés et un petit visage kawaii adorable. Pour les futurs héros qui rêvent de sauver le monde. La coque la plus héroïque de la collection !",
    tags: ["garçon", "pompier", "rouge", "véhicule", "héros"],
    popular: true,
  },
  {
    slug: "flash",
    name: "Flash",
    label: "Voiture de Course",
    emoji: "🏎️",
    img: "/images/device/p14.jpg",
    accentColor: "bg-red-50",
    hexColor: "#DC2626",
    description:
      "Flash est une voiture de course rouge avec son aileron arrière, ses roues noires et ses bandes blanches. La coque la plus rapide de la collection, pour les enfants qui adorent la vitesse.",
    tags: ["garçon", "voiture", "rouge", "course", "vitesse"],
    popular: true,
  },
  {
    slug: "herisson",
    name: "Hérisson",
    label: "Hérisson",
    emoji: "🦔",
    img: "/images/device/p22.jpg",
    accentColor: "bg-amber-50",
    hexColor: "#F59E0B",
    description:
      "Ce hérisson avec son ventre clair et ses piquants en relief est tout simplement irrésistible. Ses grands yeux kawaii et ses petites joues roses en font un compagnon adorable.",
    tags: ["garçon", "fille", "hérisson", "marron", "forêt"],
    isNew: true,
  },
  {
    slug: "rex",
    name: "Rex",
    label: "Dinosaure T-Rex",
    emoji: "🦕",
    img: "/images/device/p25.jpg",
    accentColor: "bg-green-50",
    hexColor: "#16A34A",
    description:
      "Rex est un T-Rex vert vif avec ses petits bras, ses crocs et ses yeux pétillants. Malgré son air féroce, il est totalement kawaii. La coque préférée de tous les fans de dinosaures.",
    tags: ["garçon", "dinosaure", "vert", "prehistoire"],
    popular: true,
  },
  {
    slug: "roux",
    name: "Roux",
    label: "Renard",
    emoji: "🦊",
    img: "/images/device/p20.jpg",
    accentColor: "bg-orange-50",
    hexColor: "#F97316",
    description:
      "Roux est un renard orange avec ses oreilles pointues et son museau blanc. Malicieux mais adorable, il est le compagnon idéal pour les enfants aventuriers qui aiment la nature.",
    tags: ["garçon", "fille", "renard", "orange", "forêt"],
  },
  {
    slug: "pip",
    name: "Pip",
    label: "Caneton Jaune",
    emoji: "🐣",
    img: "/images/device/p06.jpg",
    accentColor: "bg-yellow-50",
    hexColor: "#EAB308",
    description:
      "Pip est un petit caneton jaune tout rond avec son bec orange et ses petites pattes. Sa touffe de plumes sur la tête lui donne un air espiègle. La coque la plus solaire de la collection.",
    tags: ["garçon", "fille", "canard", "jaune", "mignon"],
  },
  {
    slug: "leo",
    name: "Léo",
    label: "Lionceau",
    emoji: "🦁",
    img: "/images/device/p01.jpg",
    accentColor: "bg-amber-50",
    hexColor: "#D97706",
    description:
      "Léo est un lionceau marron avec sa crinière hérissée et ses petites oreilles rondes. Courageux et affectueux, il est la coque idéale pour les enfants déterminés qui n'ont peur de rien.",
    tags: ["garçon", "lion", "marron", "savane"],
  },
  {
    slug: "nino",
    name: "Nino",
    label: "Petit Ours",
    emoji: "🐻",
    img: "/images/device/p08.jpg",
    accentColor: "bg-amber-50",
    hexColor: "#92400E",
    description:
      "Nino est un petit ours brun avec ses oreilles rondes et son museau clair. Doux et câlin, il est le compagnon de tous les enfants qui aiment être rassurés. Un classique intemporel.",
    tags: ["garçon", "fille", "ours", "marron", "mignon"],
  },
  {
    slug: "orso",
    name: "Orso",
    label: "Ours Noir",
    emoji: "🐻‍❄️",
    img: "/images/device/p04.jpg",
    accentColor: "bg-zinc-100",
    hexColor: "#3F3F46",
    description:
      "Orso est un ours noir et blanc avec une touche de modernité. Ses oreilles noires et son ventre blanc en font un personnage contrasté et élégant. Pour les enfants qui aiment les looks graphiques.",
    tags: ["garçon", "fille", "ours", "noir", "blanc", "moderne"],
    isNew: true,
  },
  {
    slug: "caramel",
    name: "Caramel",
    label: "Ours Pêche",
    emoji: "🍑",
    img: "/images/device/p10.jpg",
    accentColor: "bg-orange-50",
    hexColor: "#FB923C",
    description:
      "Caramel est un ours pêche tout doux, aux couleurs chaudes et apaisantes. Son regard tendre et ses joues roses en font le compagnon idéal pour les moments de câlins.",
    tags: ["fille", "ours", "pêche", "orange", "doux"],
  },
  {
    slug: "coton",
    name: "Coton",
    label: "Grand Lapin",
    emoji: "🐰",
    img: "/images/device/p11.jpg",
    accentColor: "bg-rose-50",
    hexColor: "#FDA4AF",
    description:
      "Coton est un grand lapin blanc aux longues oreilles et aux petites pattes. Encore plus grand et moelleux que Lola, il est parfait pour les enfants qui adorent les peluches.",
    tags: ["fille", "lapin", "blanc", "rose", "doux"],
  },
  {
    slug: "fantasia",
    name: "Fantasia",
    label: "Surprise",
    emoji: "✨",
    img: "/images/device/p19.jpg",
    accentColor: "bg-purple-50",
    hexColor: "#A855F7",
    description:
      "Fantasia est la coque mystère de la collection. Un personnage unique qui ne se dévoile qu'à la réception ! Parfaite comme surprise ou cadeau pour les enfants qui aiment les surprises.",
    tags: ["garçon", "fille", "mystère", "surprise", "unique"],
    isNew: true,
  },
];

export function getCoque(slug: string): Coque | undefined {
  return COQUES.find((c) => c.slug === slug);
}

export function getRelatedCoques(slug: string, count = 6): Coque[] {
  const current = getCoque(slug);
  if (!current) return COQUES.slice(0, count);
  // Prefer same tags, then fill with popular
  const same = COQUES.filter(
    (c) =>
      c.slug !== slug &&
      c.tags.some((t) => current.tags.includes(t))
  );
  const rest = COQUES.filter(
    (c) => c.slug !== slug && !same.find((s) => s.slug === c.slug)
  );
  return [...same, ...rest].slice(0, count);
}
