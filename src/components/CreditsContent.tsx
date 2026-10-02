"use client";

import Link from "next/link";
import { imageCredits } from "@/config/site";
import { useI18n } from "@/i18n/LanguageProvider";

export default function CreditsContent() {
  const { t } = useI18n();
  return (
    <div className="container">
      <h1>{t.credits.title}</h1>
      <p className="section-intro">{t.credits.intro}</p>
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
        <Link href="/">{t.credits.back}</Link>
      </p>
    </div>
  );
}
