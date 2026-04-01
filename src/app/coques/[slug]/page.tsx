import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { COQUES, getCoque, getRelatedCoques } from "@/lib/coques";
import { ProductPageClient } from "./ProductPageClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return COQUES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const coque = getCoque(slug);
  if (!coque) return { title: "Coque introuvable" };
  return {
    title: `${coque.emoji} ${coque.name} — ${coque.label} | Buddy`,
    description: `Découvrez la coque ${coque.name} (${coque.label}) pour votre Buddy. ${coque.description}`,
    openGraph: {
      title: `Buddy ${coque.name} — ${coque.label}`,
      description: coque.description,
      images: [{ url: coque.img }],
    },
  };
}

export default async function CoquePage({ params }: Props) {
  const { slug } = await params;
  const coque = getCoque(slug);
  if (!coque) notFound();

  const related = getRelatedCoques(slug, 6);

  return <ProductPageClient coque={coque} related={related} />;
}
