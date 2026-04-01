"use client";

import { useState } from "react";
import type { Avis } from "@/app/avis/page";

const FILTER_CATEGORIES = ["Tous", "5 étoiles", "4 étoiles", "École", "Famille", "Voyage"];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= count ? "text-yellow-400" : "text-zinc-200"}>
          ★
        </span>
      ))}
    </div>
  );
}

export function AvisFilters({ avis }: { avis: Avis[] }) {
  const [active, setActive] = useState("Tous");

  const filtered = avis.filter((a) => {
    if (active === "Tous") return true;
    if (active === "5 étoiles") return a.rating === 5;
    if (active === "4 étoiles") return a.rating === 4;
    return a.situation === active;
  });

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {FILTER_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
              active === cat
                ? "bg-[#9333EA] text-white shadow-md"
                : "bg-white text-[#9333EA] border border-purple-200 hover:bg-purple-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((a) => (
          <div key={a.id} className="bg-white rounded-3xl p-6 shadow-sm border border-zinc-100 card-hover flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                {a.emoji}
              </div>
              <div>
                <p className="font-bold text-zinc-900 text-sm">{a.name}</p>
                <p className="text-xs text-zinc-500">{a.age}</p>
              </div>
            </div>
            <Stars count={a.rating} />
            <p className="text-zinc-600 text-sm leading-relaxed flex-1">&quot;{a.text}&quot;</p>
            <div className="flex gap-2">
              <span className="bg-purple-50 text-[#9333EA] text-xs font-semibold px-2.5 py-0.5 rounded-full">
                {a.situation}
              </span>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-zinc-400">
          <span className="text-4xl block mb-3">🔍</span>
          <p>Aucun avis dans cette catégorie.</p>
        </div>
      )}
    </div>
  );
}
