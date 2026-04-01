"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQty,
    totalItems,
    totalPrice,
    clearCart,
  } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-100">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🛒</span>
            <div>
              <h2 className="font-black text-zinc-900 text-lg leading-tight">Mon panier</h2>
              <p className="text-xs text-zinc-400">
                {totalItems === 0
                  ? "Votre panier est vide"
                  : `${totalItems} article${totalItems > 1 ? "s" : ""}`}
              </p>
            </div>
          </div>
          <button
            onClick={closeCart}
            className="w-9 h-9 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 hover:bg-zinc-200 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <span className="text-6xl mb-4">🛍️</span>
              <p className="font-bold text-zinc-700 text-lg mb-2">Votre panier est vide</p>
              <p className="text-zinc-400 text-sm mb-6">
                Choisissez le Buddy de votre enfant pour commencer.
              </p>
              <Link
                href="/#shop"
                onClick={closeCart}
                className="btn-gradient rounded-xl px-6 py-3 text-sm font-bold text-white"
              >
                Voir les personnages →
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 bg-zinc-50 rounded-2xl border border-zinc-100"
              >
                <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-white border border-zinc-100">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div>
                      <p className="font-bold text-zinc-900 text-sm leading-tight">{item.name}</p>
                      <p className="text-xs text-zinc-400 leading-tight">{item.label}</p>
                      {item.type === "pack" && item.selectedCoque && (
                        <p className="text-xs text-[#9333EA] font-medium mt-0.5">
                          Coque {item.label.replace("avec coque ", "")} incluse
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-zinc-300 hover:text-red-400 transition-colors text-sm flex-shrink-0"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    {item.type === "coque" ? (
                      <div className="flex items-center gap-2 bg-white border border-zinc-200 rounded-lg">
                        <button
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          className="w-7 h-7 flex items-center justify-center text-zinc-500 hover:text-zinc-900 font-bold"
                        >
                          −
                        </button>
                        <span className="text-sm font-bold text-zinc-900 w-4 text-center">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="w-7 h-7 flex items-center justify-center text-zinc-500 hover:text-zinc-900 font-bold"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <span className="text-xs bg-purple-50 text-[#9333EA] border border-purple-100 rounded-full px-2 py-1 font-semibold">
                        Pack complet
                      </span>
                    )}
                    <span className="font-black text-zinc-900">
                      {(item.price * item.qty).toFixed(2).replace(".", ",")}€
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-zinc-100 px-6 py-5 space-y-4">
            {/* Subscription reminder */}
            <div className="bg-purple-50 border border-purple-100 rounded-xl p-3 flex items-center gap-3">
              <span className="text-lg">ℹ️</span>
              <p className="text-xs text-zinc-600">
                <strong className="text-zinc-800">Abonnement requis</strong> — 4,99€/mois (ou 49€/an).
                Inclut réseau 4G, GPS et messages illimités.
              </p>
            </div>

            {/* Totals */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-zinc-500">
                <span>Sous-total</span>
                <span>{totalPrice.toFixed(2).replace(".", ",")}€</span>
              </div>
              <div className="flex justify-between text-sm text-zinc-500">
                <span>Livraison</span>
                <span className="text-green-600 font-semibold">Offerte 🎁</span>
              </div>
              <div className="flex justify-between font-black text-zinc-900 text-lg border-t border-zinc-100 pt-2">
                <span>Total</span>
                <span className="gradient-text">{totalPrice.toFixed(2).replace(".", ",")}€</span>
              </div>
            </div>

            <Link
              href="/checkout"
              onClick={closeCart}
              className="btn-gradient w-full rounded-2xl py-4 text-base font-bold text-white text-center block shadow-lg shadow-purple-200"
            >
              Passer la commande →
            </Link>

            <button
              onClick={clearCart}
              className="w-full text-xs text-zinc-400 hover:text-red-400 transition-colors py-1"
            >
              Vider le panier
            </button>
          </div>
        )}
      </div>
    </>
  );
}
