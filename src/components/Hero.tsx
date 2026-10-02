import Image from "next/image";
import { ArrowRight, Briefcase, Plane, KeySquare } from "lucide-react";
import { brand, images } from "@/config/site";

export default function Hero() {
  return (
    <section id="accueil" className="hero" aria-labelledby="titre-accueil">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Transport avec chauffeur · Belgique</p>
          <h1 id="titre-accueil">{brand.tagline}</h1>
          <p className="lead">
            Transferts aéroport, trajets privés et déplacements professionnels :
            un service pensé pour que vous arriviez à l’heure, détendu, sans
            avoir à y penser.
          </p>
          <div className="hero-actions">
            <a href="#trajet" className="btn btn-gold">
              Préparer mon trajet <ArrowRight aria-hidden="true" />
            </a>
            <a href="#services" className="btn btn-ghost">
              Découvrir nos services
            </a>
          </div>
          <ul className="hero-tags" aria-label="Types de trajets">
            <li>
              <Plane aria-hidden="true" /> Aéroports
            </li>
            <li>
              <Briefcase aria-hidden="true" /> Affaires
            </li>
            <li>
              <KeySquare aria-hidden="true" /> Trajets privés
            </li>
          </ul>
        </div>

        <div className="hero-visual">
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            width={images.hero.width}
            height={images.hero.height}
            priority
            sizes="(max-width: 900px) 92vw, 44vw"
          />
          <p className="hero-badge">Site de démonstration</p>
        </div>
      </div>
    </section>
  );
}
