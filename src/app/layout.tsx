import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import SkipLink from "@/components/SkipLink";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { messages } from "@/i18n/messages";
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
  title: messages.fr.meta.title,
  description: messages.fr.meta.description,
  authors: [{ name: "Yves Web Studio" }],
};

export const viewport: Viewport = {
  themeColor: "#0a1428",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <LanguageProvider>
          <SkipLink />
          <Header />
          <main id="contenu">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
