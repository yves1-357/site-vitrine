import { ExternalLink, Mail } from "lucide-react";
import { developer } from "@/config/site";

export default function DeveloperSignature() {
  const links = [
    { label: "GitHub", href: developer.githubUrl },
    { label: "LinkedIn", href: developer.linkedinUrl },
    { label: "Portfolio", href: developer.portfolioUrl },
  ].filter((link) => link.href.trim() !== "");

  return (
    <section className="dev" aria-labelledby="titre-dev">
      <div className="container dev-inner">
        <div>
          <h2 id="titre-dev">Un site comme celui-ci pour votre activité ?</h2>
          <p>
            Réalisé par <strong>{developer.name}</strong> — {developer.baseline}
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
                <span className="sr-only"> (s’ouvre dans un nouvel onglet)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
