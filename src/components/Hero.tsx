"use client";

import Image from "next/image";
import { ArrowRight, Briefcase, Plane, KeySquare } from "lucide-react";
import { images } from "@/config/site";
import { useI18n } from "@/i18n/LanguageProvider";

export default function Hero() {
  const { t } = useI18n();
  const h = t.hero;
  return (
    <section id="accueil" className="hero" aria-labelledby="titre-accueil">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{h.eyebrow}</p>
          <h1 id="titre-accueil">{h.title}</h1>
          <p className="lead">
            {h.lead}
          </p>
          <div className="hero-actions">
            <a href="#trajet" className="btn btn-gold">
              {h.primary} <ArrowRight aria-hidden="true" />
            </a>
            <a href="#services" className="btn btn-ghost">
              {h.secondary}
            </a>
          </div>
          <ul className="hero-tags" aria-label={h.tagsLabel}>
            <li>
              <Plane aria-hidden="true" /> {h.tags[0]}
            </li>
            <li>
              <Briefcase aria-hidden="true" /> {h.tags[1]}
            </li>
            <li>
              <KeySquare aria-hidden="true" /> {h.tags[2]}
            </li>
          </ul>
        </div>

        <div className="hero-visual">
          <Image
            src={images.hero.src}
            alt={h.alt}
            width={images.hero.width}
            height={images.hero.height}
            priority
            sizes="(max-width: 900px) 92vw, 44vw"
          />
          <p className="hero-badge">{h.badge}</p>
        </div>
      </div>
    </section>
  );
}
