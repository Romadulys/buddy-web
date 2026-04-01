"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

/* ─── Types ────────────────────────────────────────────────── */
export type CartItemType = "coque" | "pack";

export type CartItem = {
  id: string;          // slug (+ "-pack" suffix for packs)
  type: CartItemType;
  slug: string;
  name: string;
  label: string;
  img: string;
  price: number;
  qty: number;
  selectedCoque?: string; // for pack: which coque is included
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;
};

type CartAction =
  | { type: "ADD_ITEM"; item: CartItem }
  | { type: "REMOVE_ITEM"; id: string }
  | { type: "UPDATE_QTY"; id: string; qty: number }
  | { type: "SWAP_PACK_COQUE"; slug: string }
  | { type: "OPEN_CART" }
  | { type: "CLOSE_CART" }
  | { type: "CLEAR" };

/* ─── Reducer ──────────────────────────────────────────────── */
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find((i) => i.id === action.item.id);
      if (existing) {
        return {
          ...state,
          isOpen: true,
          items: state.items.map((i) =>
            i.id === action.item.id ? { ...i, qty: i.qty + 1 } : i
          ),
        };
      }
      return {
        ...state,
        isOpen: true,
        items: [...state.items, action.item],
      };
    }
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.id),
      };
    case "UPDATE_QTY":
      if (action.qty <= 0) {
        return {
          ...state,
          items: state.items.filter((i) => i.id !== action.id),
        };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, qty: action.qty } : i
        ),
      };
    case "SWAP_PACK_COQUE":
      return {
        ...state,
        items: state.items.map((i) =>
          i.type === "pack" ? { ...i, selectedCoque: action.slug } : i
        ),
      };
    case "OPEN_CART":
      return { ...state, isOpen: true };
    case "CLOSE_CART":
      return { ...state, isOpen: false };
    case "CLEAR":
      return { items: [], isOpen: false };
    default:
      return state;
  }
}

/* ─── Context ──────────────────────────────────────────────── */
type CartContextValue = {
  items: CartItem[];
  isOpen: boolean;
  totalItems: number;
  totalPrice: number;
  addCoque: (slug: string, name: string, label: string, img: string) => void;
  addPack: (coqueSlug: string, coqueName: string, coqueLabel: string, coqueImg: string) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  swapPackCoque: (slug: string) => void;
  openCart: () => void;
  closeCart: () => void;
  clearCart: () => void;
  hasPack: boolean;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "buddy-cart";

/* ─── Provider ─────────────────────────────────────────────── */
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false,
  });
  const [hydrated, setHydrated] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as CartItem[];
        parsed.forEach((item) => {
          dispatch({ type: "ADD_ITEM", item });
        });
      }
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  // Persist to localStorage
  useEffect(() => {
    if (hydrated) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    }
  }, [state.items, hydrated]);

  const totalItems = state.items.reduce((acc, i) => acc + i.qty, 0);
  const totalPrice = state.items.reduce((acc, i) => acc + i.price * i.qty, 0);
  const hasPack = state.items.some((i) => i.type === "pack");

  const value: CartContextValue = {
    items: state.items,
    isOpen: state.isOpen,
    totalItems,
    totalPrice,
    hasPack,
    addCoque: (slug, name, label, img) => {
      dispatch({
        type: "ADD_ITEM",
        item: {
          id: slug,
          type: "coque",
          slug,
          name,
          label,
          img,
          price: 14.99,
          qty: 1,
        },
      });
    },
    addPack: (coqueSlug, coqueName, coqueLabel, coqueImg) => {
      dispatch({
        type: "ADD_ITEM",
        item: {
          id: "pack-buddy",
          type: "pack",
          slug: "pack-buddy",
          name: "Pack Buddy",
          label: `avec coque ${coqueName}`,
          img: coqueImg,
          price: 119,
          qty: 1,
          selectedCoque: coqueSlug,
        },
      });
    },
    removeItem: (id) => dispatch({ type: "REMOVE_ITEM", id }),
    updateQty: (id, qty) => dispatch({ type: "UPDATE_QTY", id, qty }),
    swapPackCoque: (slug) => dispatch({ type: "SWAP_PACK_COQUE", slug }),
    openCart: () => dispatch({ type: "OPEN_CART" }),
    closeCart: () => dispatch({ type: "CLOSE_CART" }),
    clearCart: () => dispatch({ type: "CLEAR" }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
