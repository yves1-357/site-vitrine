import type { Metadata } from "next";
import Link from "next/link";
import { imageCredits } from "@/config/site";

export const metadata: Metadata = {
  title: "Crédits photographiques — Élyse Chauffeur (démonstration)",
  description: "Sources et licences des photographies utilisées dans ce site de démonstration.",
};

export default function Credits() {
  return (
    <section className="section credits">
      <div className="container">
        <h1>Crédits photographiques</h1>
        <p className="section-intro">
          Photographies issues de Wikimedia Commons, redimensionnées pour le
          web. Les véhicules illustrés ne représentent pas une flotte réelle.
        </p>
        <ul className="credit-list">
          {imageCredits.map((credit) => (
            <li key={credit.file}>
              <a href={credit.url} target="_blank" rel="noopener noreferrer">
                {credit.title}
              </a>{" "}
              — {credit.author} —{" "}
              <a href={credit.licenseUrl} target="_blank" rel="noopener noreferrer">
                {credit.license}
              </a>
            </li>
          ))}
        </ul>
        <p>
          <Link href="/">← Retour à l’accueil</Link>
        </p>
      </div>
    </section>
  );
}
