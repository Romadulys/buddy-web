"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import type { Coque } from "@/lib/coques";

type Props = {
  coque: Coque;
  related: Coque[];
};

export function ProductPageClient({ coque, related }: Props) {
  const { addCoque, addPack, hasPack, openCart } = useCart();
  const [added, setAdded] = useState<"coque" | "pack" | null>(null);

  function handleAddCoque() {
    addCoque(coque.slug, coque.name, coque.label, coque.img);
    setAdded("coque");
    setTimeout(() => setAdded(null), 2000);
  }

  function handleAddPack() {
    addPack(coque.slug, coque.name, coque.label, coque.img);
    setAdded("pack");
    setTimeout(() => setAdded(null), 2000);
  }

  return (
    <>
      {/* ── Breadcrumb ── */}
      <div className="bg-zinc-50 border-b border-zinc-100 py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-zinc-400">
            <Link href="/" className="hover:text-zinc-700 transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/#shop" className="hover:text-zinc-700 transition-colors">Boutique</Link>
            <span>/</span>
            <span className="text-zinc-700 font-medium">{coque.name} — {coque.label}</span>
          </nav>
        </div>
      </div>

      {/* ── Main product section ── */}
      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left — product images */}
            <div className="space-y-4">
              {/* Main image */}
              <div
                className="rounded-3xl overflow-hidden aspect-square relative"
                style={{ background: `${coque.hexColor}18` }}
              >
                <Image
                  src={coque.img}
                  alt={`Buddy ${coque.name} — ${coque.label}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-6"
                />
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {coque.popular && (
                    <span className="bg-white/90 backdrop-blur-sm text-[#9333EA] text-xs font-bold px-3 py-1.5 rounded-full border border-purple-100 shadow-sm">
                      ⭐ Coup de cœur
                    </span>
                  )}
                  {coque.isNew && (
                    <span className="bg-gradient-to-r from-[#9333EA] to-[#EC4899] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                      ✨ Nouveauté
                    </span>
                  )}
                </div>
              </div>

              {/* Secondary lifestyle image */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden aspect-video relative bg-zinc-50 border border-zinc-100">
                  <Image
                    src="/images/device/buddy-bears-3.jpg"
                    alt="Buddy avec différentes coques"
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-video relative bg-zinc-50 border border-zinc-100">
                  <Image
                    src="/images/device/buddy-6colors.jpg"
                    alt="Buddy — gamme complète"
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right — product info */}
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Title */}
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9333EA] bg-purple-50 border border-purple-100 rounded-full px-3 py-1 mb-3">
                  🎨 Coque Buddy
                </span>
                <h1 className="text-4xl sm:text-5xl font-black text-zinc-900 leading-tight mb-1">
                  {coque.emoji} {coque.name}
                </h1>
                <p className="text-lg text-zinc-500 font-medium">{coque.label}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex">{"★★★★★".split("").map((s, i) => (
                  <span key={i} className="text-yellow-400">{s}</span>
                ))}</div>
                <span className="text-sm text-zinc-500">4,9/5 · 48 avis parents</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {coque.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-zinc-100 text-zinc-600 rounded-full px-3 py-1 font-medium">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-zinc-600 leading-relaxed">{coque.description}</p>

              {/* Specs */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: "🧴", label: "Silicone premium" },
                  { icon: "💧", label: "IP67 résistant" },
                  { icon: "🔄", label: "Interchangeable" },
                ].map((s) => (
                  <div key={s.label} className="bg-zinc-50 border border-zinc-100 rounded-xl p-3 text-center">
                    <div className="text-xl mb-1">{s.icon}</div>
                    <p className="text-xs font-semibold text-zinc-700 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* ── CTA Section ── */}
              <div className="border border-zinc-100 rounded-2xl overflow-hidden">

                {/* Option 1: Coque seule */}
                <div className="p-5 border-b border-zinc-100">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-bold text-zinc-900">Coque seule</p>
                      <p className="text-xs text-zinc-400">Compatible avec tous les appareils Buddy</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-black text-zinc-900">14,99€</p>
                      <p className="text-xs text-green-600 font-semibold">Port offert</p>
                    </div>
                  </div>
                  <button
                    onClick={handleAddCoque}
                    className={`w-full rounded-xl py-3.5 text-sm font-bold transition-all ${
                      added === "coque"
                        ? "bg-green-500 text-white"
                        : "bg-zinc-900 text-white hover:bg-zinc-700"
                    }`}
                  >
                    {added === "coque" ? "✓ Ajouté au panier !" : `Ajouter ${coque.name} au panier`}
                  </button>
                </div>

                {/* Option 2: Pack Buddy + cette coque */}
                <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <p className="font-bold text-zinc-900 flex items-center gap-2">
                        Pack Buddy complet
                        <span className="text-xs bg-gradient-to-r from-[#9333EA] to-[#EC4899] text-white px-2 py-0.5 rounded-full">
                          Recommandé
                        </span>
                      </p>
                      <p className="text-xs text-zinc-500 mt-0.5">Appareil Buddy + coque {coque.name} + abonnement 1 mois offert</p>
                    </div>
                    <div className="text-right flex-shrink-0 ml-4">
                      <p className="text-2xl font-black text-zinc-900">119€</p>
                      <p className="text-xs text-green-600 font-semibold">Port offert</p>
                    </div>
                  </div>
                  <ul className="space-y-1 mb-4 mt-3">
                    {[
                      "Buddy Mini — l'appareil sans écran",
                      `Coque ${coque.name} ${coque.emoji} incluse`,
                      "Abonnement 1er mois offert",
                      "SIM 4G intégrée",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-zinc-600">
                        <span className="text-[#9333EA] font-bold">✓</span>{item}
                      </li>
                    ))}
                  </ul>
                  {hasPack ? (
                    <div className="w-full text-center text-sm text-[#9333EA] font-semibold py-2 bg-purple-100 rounded-xl">
                      ✓ Pack Buddy déjà dans votre panier
                      <button onClick={openCart} className="block mx-auto text-xs text-zinc-500 hover:underline mt-0.5">
                        Voir mon panier →
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={handleAddPack}
                      className={`w-full rounded-xl py-3.5 text-sm font-bold transition-all ${
                        added === "pack"
                          ? "bg-green-500 text-white"
                          : "btn-gradient text-white shadow-md shadow-purple-200"
                      }`}
                    >
                      {added === "pack"
                        ? "✓ Pack ajouté au panier !"
                        : `Choisir le Pack Buddy avec ${coque.name} — 119€`}
                    </button>
                  )}
                </div>
              </div>

              {/* Trust row */}
              <div className="flex flex-wrap gap-3 text-xs text-zinc-500">
                {[
                  "🔒 Paiement sécurisé",
                  "🔄 30j satisfait ou remboursé",
                  "📦 Livraison offerte",
                  "🛡️ Garantie 1 an",
                ].map((t) => (
                  <span key={t} className="flex items-center gap-1">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Product details tabs ── */}
      <section className="bg-zinc-50 py-12 border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-black text-zinc-900 mb-3 flex items-center gap-2">
                <span className="text-xl">🧴</span> Matière & Sécurité
              </h3>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li>✓ Silicone médical non toxique</li>
                <li>✓ Sans BPA, sans phtalates</li>
                <li>✓ Certifié EN 71 (jouets enfants)</li>
                <li>✓ Résistant aux chutes (1,5m)</li>
                <li>✓ Lavable à l&apos;eau et au savon</li>
              </ul>
            </div>
            <div>
              <h3 className="font-black text-zinc-900 mb-3 flex items-center gap-2">
                <span className="text-xl">🔄</span> Compatibilité
              </h3>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li>✓ Compatible Buddy Mini (toutes versions)</li>
                <li>✓ Clip-on magnétique — se change en 3 secondes</li>
                <li>✓ N&apos;affecte pas le signal GPS ni 4G</li>
                <li>✓ Accès aux boutons préservé</li>
                <li>✓ Rechargement sans retirer la coque</li>
              </ul>
            </div>
            <div>
              <h3 className="font-black text-zinc-900 mb-3 flex items-center gap-2">
                <span className="text-xl">📦</span> Dans la boîte
              </h3>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li>✓ 1× Coque {coque.name}</li>
                <li>✓ Notice de montage illustrée</li>
                <li>✓ Emballage recyclable</li>
                <li className="text-zinc-400">Buddy Mini vendu séparément (pack 119€)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related coques ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-black text-zinc-900">
              Vous aimerez aussi
            </h2>
            <Link href="/#shop" className="text-sm font-semibold text-[#9333EA] hover:underline">
              Voir tout →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {related.map((c) => (
              <Link
                key={c.slug}
                href={`/coques/${c.slug}`}
                className="group bg-white border border-zinc-100 rounded-2xl overflow-hidden hover:border-[#9333EA] hover:shadow-xl hover:shadow-purple-100 transition-all duration-200"
              >
                <div className="aspect-square relative overflow-hidden bg-zinc-50">
                  <Image
                    src={c.img}
                    alt={`Buddy ${c.name}`}
                    fill
                    sizes="200px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <p className="font-bold text-zinc-900 text-sm leading-tight">{c.name}</p>
                  <p className="text-xs text-zinc-400 mb-1">{c.label}</p>
                  <p className="text-sm font-black text-[#9333EA]">14,99€</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
