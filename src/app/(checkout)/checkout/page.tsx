"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, clearCart } = useCart();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "France",
    promoCode: "",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [promoApplied, setPromoApplied] = useState(false);

  const PROMO_CODE = "BUDDY10";
  const PROMO_DISCOUNT = 0.10; // 10% on subscription, shown as discount display

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleApplyPromo = () => {
    if (form.promoCode.toUpperCase() === PROMO_CODE) {
      setPromoApplied(true);
    } else {
      setError("Code promo invalide.");
      setTimeout(() => setError(null), 3000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_name: `${form.firstName} ${form.lastName}`.trim(),
          customer_email: form.email,
          items: items.map((i) => ({
            id: i.id,
            name: i.name,
            label: i.label,
            type: i.type,
            qty: i.qty,
            price: i.price,
          })),
          total_amount: totalPrice,
          shipping_address: {
            line1: form.address,
            city: form.city,
            postal_code: form.postalCode,
            country: form.country,
          },
          promo_code: promoApplied ? PROMO_CODE : undefined,
          notes: form.notes || undefined,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erreur serveur");
      }

      const { orderId } = await res.json();
      clearCart();
      router.push(`/checkout/success?orderId=${orderId}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
      setSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center px-4">
        <div className="text-center py-16">
          <span className="text-6xl mb-4 block">🛍️</span>
          <h2 className="text-2xl font-black text-zinc-900 mb-3">Votre panier est vide</h2>
          <p className="text-zinc-500 mb-6">Choisissez votre Buddy avant de passer commande.</p>
          <Link href="/#shop" className="btn-gradient text-white font-bold px-8 py-3 rounded-full shadow-lg">
            Voir les personnages →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Top bar */}
      <div className="bg-white border-b border-zinc-100 px-4 py-4">
        <div className="mx-auto max-w-5xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🤝</span>
            <span className="text-xl font-black gradient-text">BUDDY</span>
          </Link>
          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <span className="font-semibold text-[#9333EA]">1. Vos infos</span>
            <span>→</span>
            <span>2. Paiement</span>
            <span>→</span>
            <span>3. Confirmation</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-10 grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* ── Form ── */}
        <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-8">
          {/* Contact */}
          <div className="bg-white rounded-2xl border border-zinc-100 shadow-sm p-6">
            <h2 className="text-lg font-black text-zinc-900 mb-5 flex items-center gap-2">
              <span>👤</span> Vos coordonnées
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-1.5">
                  Prénom *
                </label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Marie"
                  className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-[#9333EA] focus:ring-2 focus:ring-purple-100 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-1.5">
                  Nom *
                </label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Dupont"
                  className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-[#9333EA] focus:ring-2 focus:ring-purple-100 transition-all"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-1.5">
                Email *
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="marie@exemple.fr"
                className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-[#9333EA] focus:ring-2 focus:ring-purple-100 transition-all"
              />
              <p className="text-xs text-zinc-400 mt-1.5">Vous recevrez la confirmation à cette adresse.</p>
            </div>
            <div className="mt-4">
              <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-1.5">
                Téléphone
              </label>
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+33 6 12 34 56 78"
                className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-[#9333EA] focus:ring-2 focus:ring-purple-100 transition-all"
              />
            </div>
          </div>

          {/* Shipping */}
          <div className="bg-white rounded-2xl border border-zinc-100 shadow-sm p-6">
            <h2 className="text-lg font-black text-zinc-900 mb-5 flex items-center gap-2">
              <span>📦</span> Adresse de livraison
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-1.5">
                  Adresse *
                </label>
                <input
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                  placeholder="12 rue des Lilas"
                  className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-[#9333EA] focus:ring-2 focus:ring-purple-100 transition-all"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-1.5">
                    Ville *
                  </label>
                  <input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    required
                    placeholder="Paris"
                    className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-[#9333EA] focus:ring-2 focus:ring-purple-100 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-1.5">
                    Code postal *
                  </label>
                  <input
                    name="postalCode"
                    value={form.postalCode}
                    onChange={handleChange}
                    required
                    placeholder="75001"
                    className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-[#9333EA] focus:ring-2 focus:ring-purple-100 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-1.5">
                  Pays
                </label>
                <select
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-[#9333EA] focus:ring-2 focus:ring-purple-100 transition-all"
                >
                  <option>France</option>
                  <option>Belgique</option>
                  <option>Suisse</option>
                  <option>Luxembourg</option>
                  <option>Canada</option>
                </select>
              </div>
            </div>
          </div>

          {/* Promo code */}
          <div className="bg-white rounded-2xl border border-zinc-100 shadow-sm p-6">
            <h2 className="text-lg font-black text-zinc-900 mb-5 flex items-center gap-2">
              <span>🎁</span> Code promo
            </h2>
            <div className="flex gap-3">
              <input
                name="promoCode"
                value={form.promoCode}
                onChange={handleChange}
                placeholder="Ex: BUDDY10"
                disabled={promoApplied}
                className="flex-1 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-[#9333EA] focus:ring-2 focus:ring-purple-100 transition-all disabled:bg-zinc-50 disabled:text-zinc-400 uppercase"
              />
              <button
                type="button"
                onClick={handleApplyPromo}
                disabled={promoApplied || !form.promoCode}
                className="px-5 py-3 rounded-xl bg-zinc-900 text-white text-sm font-bold hover:bg-zinc-700 transition-colors disabled:opacity-40"
              >
                {promoApplied ? "✓ Appliqué" : "Appliquer"}
              </button>
            </div>
            {promoApplied && (
              <div className="mt-3 flex items-center gap-2 text-sm text-green-700 bg-green-50 border border-green-100 rounded-xl px-4 py-2.5">
                <span className="text-green-500">✓</span>
                <strong>BUDDY10</strong> appliqué — -10% sur votre abonnement annuel !
              </div>
            )}
          </div>

          {/* Notes */}
          <div className="bg-white rounded-2xl border border-zinc-100 shadow-sm p-6">
            <h2 className="text-lg font-black text-zinc-900 mb-5 flex items-center gap-2">
              <span>📝</span> Notes (optionnel)
            </h2>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Instructions de livraison, message pour l'équipe Buddy..."
              rows={3}
              className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-[#9333EA] focus:ring-2 focus:ring-purple-100 transition-all resize-none"
            />
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-100 text-red-700 rounded-xl px-4 py-3 text-sm font-medium">
              ⚠️ {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="btn-gradient w-full py-4 rounded-2xl text-base font-bold text-white shadow-lg shadow-purple-200 disabled:opacity-60 transition-all"
          >
            {submitting ? "Envoi en cours..." : "Confirmer ma précommande →"}
          </button>

          <p className="text-xs text-zinc-400 text-center">
            🔒 Précommande sans CB — vous serez contacté pour le paiement avant l&apos;expédition (été 2026).
          </p>
        </form>

        {/* ── Order Summary ── */}
        <div className="lg:col-span-2">
          <div className="sticky top-24 space-y-4">
            <div className="bg-white rounded-2xl border border-zinc-100 shadow-sm p-6">
              <h2 className="text-lg font-black text-zinc-900 mb-5">
                Votre commande
              </h2>

              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3 items-center">
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-zinc-50 border border-zinc-100">
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-zinc-900 text-sm leading-tight">{item.name}</p>
                      <p className="text-xs text-zinc-400">{item.label}</p>
                      {item.type === "pack" && (
                        <p className="text-xs text-[#9333EA] font-semibold mt-0.5">Pack complet</p>
                      )}
                      <p className="text-xs text-zinc-500 mt-0.5">
                        {item.qty > 1 ? `${item.qty}×` : ""} {item.price.toFixed(2).replace(".", ",")}€
                      </p>
                    </div>
                    <span className="font-black text-zinc-900 text-sm">
                      {(item.price * item.qty).toFixed(2).replace(".", ",")}€
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 space-y-2.5 border-t border-zinc-100 pt-4">
                <div className="flex justify-between text-sm text-zinc-500">
                  <span>Sous-total</span>
                  <span>{totalPrice.toFixed(2).replace(".", ",")}€</span>
                </div>
                <div className="flex justify-between text-sm text-zinc-500">
                  <span>Livraison</span>
                  <span className="text-green-600 font-semibold">Offerte 🎁</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-sm text-green-700">
                    <span>Code BUDDY10</span>
                    <span className="font-semibold">-10% abo annuel</span>
                  </div>
                )}
                <div className="flex justify-between font-black text-zinc-900 text-xl border-t border-zinc-100 pt-2.5">
                  <span>Total</span>
                  <span className="gradient-text">{totalPrice.toFixed(2).replace(".", ",")}€</span>
                </div>
              </div>
            </div>

            {/* Abonnement reminder */}
            <div className="bg-purple-50 border border-purple-100 rounded-2xl p-4">
              <p className="text-xs text-zinc-600 leading-relaxed">
                <strong className="text-zinc-900">ℹ️ Abonnement requis</strong><br />
                4,99€/mois ou 49€/an (sans engagement). Inclut réseau 4G, GPS temps réel et messages illimités.
              </p>
            </div>

            {/* Trust */}
            <div className="bg-white rounded-2xl border border-zinc-100 shadow-sm p-4 space-y-2.5">
              {[
                "🔒 Précommande sécurisée",
                "🔄 Remboursement 30j garanti",
                "📦 Livraison offerte France",
                "🛡️ IP67 — résistant eau & chocs",
              ].map((t) => (
                <p key={t} className="text-xs text-zinc-600 flex items-center gap-2">{t}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
