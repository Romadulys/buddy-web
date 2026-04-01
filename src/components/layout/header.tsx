"use client";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-gradient-to-r from-[#9333EA] via-[#EC4899] to-[#F97316] text-white text-sm py-2 overflow-hidden">
        <div className="flex gap-16 animate-ticker whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex gap-16 shrink-0">
              <span>🤝 Précommande ouverte — Livraison été 2026</span>
              <span>✨ 119€ — Port offert en France</span>
              <span>🎁 Code BUDDY10 : -10% sur l&apos;abonnement 1 an</span>
              <span>🛡️ IP67 — Résistant aux chutes et à l&apos;eau</span>
            </span>
          ))}
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-purple-100 bg-white/90 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🤝</span>
            <span className="text-xl font-black gradient-text tracking-tight">BUDDY</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link href="#comment-ca-marche" className="text-sm font-medium text-zinc-600 hover:text-[#9333EA] transition-colors">Comment ça marche</Link>
            <Link href="#personnalites" className="text-sm font-medium text-zinc-600 hover:text-[#9333EA] transition-colors">Les Buddy</Link>
            <Link href="#app" className="text-sm font-medium text-zinc-600 hover:text-[#9333EA] transition-colors">Application</Link>
            <Link href="#pricing" className="text-sm font-medium text-zinc-600 hover:text-[#9333EA] transition-colors">Tarifs</Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/login" className="hidden md:block text-sm font-medium text-zinc-600 hover:text-[#9333EA] transition-colors">
              Connexion
            </Link>
            <Link href="#pricing" className="btn-gradient rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-md">
              Précommander
            </Link>
            <button className="md:hidden p-2 rounded-lg text-zinc-600" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="md:hidden border-t border-purple-100 bg-white px-4 py-4 space-y-3">
            <Link href="#comment-ca-marche" className="block text-sm font-medium text-zinc-700 py-2" onClick={() => setMobileOpen(false)}>Comment ça marche</Link>
            <Link href="#personnalites" className="block text-sm font-medium text-zinc-700 py-2" onClick={() => setMobileOpen(false)}>Les Buddy</Link>
            <Link href="#app" className="block text-sm font-medium text-zinc-700 py-2" onClick={() => setMobileOpen(false)}>Application</Link>
            <Link href="#pricing" className="block text-sm font-medium text-zinc-700 py-2" onClick={() => setMobileOpen(false)}>Tarifs</Link>
            <Link href="/login" className="block text-sm font-medium text-zinc-700 py-2" onClick={() => setMobileOpen(false)}>Connexion</Link>
          </div>
        )}
      </header>
    </>
  );
}
