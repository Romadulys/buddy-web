"use client";

import { useState, useMemo } from "react";
import type { FaqItem } from "@/app/faq/page";

const CATEGORIES = ["Tous", "Produit", "Fonctionnement", "Application", "Abonnement", "Sécurité", "Livraison"];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-5 h-5 text-[#9333EA] transition-transform duration-200 flex-shrink-0 ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [openId, setOpenId] = useState<number | null>(null);

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const matchCat = activeCategory === "Tous" || item.category === activeCategory;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [items, activeCategory, search]);

  return (
    <div>
      {/* Search */}
      <div className="relative mb-8">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Rechercher une question..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-purple-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#9333EA] text-zinc-800 placeholder-zinc-400"
        />
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
              activeCategory === cat
                ? "bg-[#9333EA] text-white shadow-md"
                : "bg-purple-50 text-[#9333EA] hover:bg-purple-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Count */}
      {search && (
        <p className="text-sm text-zinc-500 mb-4">
          {filtered.length} résultat{filtered.length !== 1 ? "s" : ""} pour &quot;{search}&quot;
        </p>
      )}

      {/* Accordion items */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-zinc-500">
          <span className="text-4xl mb-4 block">🔍</span>
          <p className="font-semibold">Aucune question trouvée</p>
          <p className="text-sm mt-1">Essayez un autre terme ou{" "}
            <a href="mailto:hello@getbuddy.fr" className="text-[#9333EA] underline">contactez-nous</a>
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((item, idx) => {
            const isOpen = openId === idx;
            return (
              <div
                key={idx}
                className="border border-purple-100 rounded-2xl bg-white overflow-hidden card-hover"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-[#9333EA]">
                      {item.category}
                    </span>
                    <span className="font-semibold text-zinc-900">{item.question}</span>
                  </div>
                  <ChevronIcon open={isOpen} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-zinc-600 leading-relaxed border-t border-purple-50 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
