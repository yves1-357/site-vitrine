"use client";

import { useI18n } from "@/i18n/LanguageProvider";

export default function HowItWorks() {
  const { t } = useI18n();
  const h = t.how;
  return (
    <section id="fonctionnement" className="section section-alt" aria-labelledby="titre-fonctionnement">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow eyebrow-dark">{h.eyebrow}</p>
          <h2 id="titre-fonctionnement">{h.title}</h2>
          <p className="section-intro">{h.intro}</p>
        </div>
        <ol className="steps">
          {h.steps.map((step, index) => (
            <li key={step.title} className="step">
              <span className="step-number" aria-hidden="true">
                {index + 1}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
