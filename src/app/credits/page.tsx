import type { Metadata } from "next";
import CreditsContent from "@/components/CreditsContent";

export const metadata: Metadata = {
  title: "Crédits photographiques — Élyse Chauffeur (démonstration)",
  description: "Sources et licences des photographies utilisées dans ce site de démonstration.",
};

export default function Credits() {
  return (
    <section className="section credits">
      <CreditsContent />
    </section>
  );
}
