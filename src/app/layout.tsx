import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Élyse Chauffeur — Site de démonstration VTC et taxi en Belgique",
  description:
    "Site de démonstration pour une entreprise fictive de transport avec chauffeur en Belgique. Aucune réservation réelle : réalisation de portfolio par Yves Web Studio.",
  authors: [{ name: "Yves Web Studio" }],
};

export const viewport: Viewport = {
  themeColor: "#0a1428",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <a href="#contenu" className="skip-link">
          Aller au contenu
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
