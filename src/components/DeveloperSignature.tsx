"use client";

import { ExternalLink, Mail } from "lucide-react";
import { developer } from "@/config/site";
import { useI18n } from "@/i18n/LanguageProvider";

export default function DeveloperSignature() {
  const { t } = useI18n();
  const links = [
    { label: "GitHub", href: developer.githubUrl },
    { label: "LinkedIn", href: developer.linkedinUrl },
    { label: "Portfolio", href: developer.portfolioUrl },
  ].filter((link) => link.href.trim() !== "");

  return (
    <section className="dev" aria-labelledby="titre-dev">
      <div className="container dev-inner">
        <div>
          <h2 id="titre-dev">{t.dev.title}</h2>
          <p>
            {t.dev.madeBy} <strong>{developer.name}</strong> — {t.dev.baseline}
          </p>
        </div>
        <ul className="dev-links">
          <li>
            <a href={`mailto:${developer.email}`}>
              <Mail aria-hidden="true" /> {developer.email}
            </a>
          </li>
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <ExternalLink aria-hidden="true" /> {link.label}
                <span className="sr-only"> {t.dev.newTab}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
