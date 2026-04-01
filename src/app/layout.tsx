import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CartProvider } from "@/contexts/CartContext";
import { CartDrawer } from "@/components/cart/CartDrawer";
import BuddyChat from "@/components/BuddyChat";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Buddy — Tes mots prennent leur envol",
    template: "%s | Buddy",
  },
  description:
    "Buddy est le premier communicateur sans écran pour les enfants de 4 à 8 ans. Messages vocaux, GPS, alerte SOS — toute la magie de la communication, sans distraction.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://getbuddy.fr"),
  openGraph: {
    title: "Buddy — Tes mots prennent leur envol",
    description: "Le communicateur sans écran pensé pour les enfants.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col font-[family-name:var(--font-poppins)]`}>
        <CartProvider>
          <Header />
          <CartDrawer />
          <main className="flex-1">{children}</main>
          <Footer />
          <BuddyChat />
        </CartProvider>
      </body>
    </html>
  );
}
