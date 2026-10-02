"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useI18n } from "@/i18n/LanguageProvider";

export default function Faq() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section" aria-labelledby="titre-faq">
      <div className="container faq-grid">
        <div className="section-head">
          <p className="eyebrow eyebrow-dark">{t.faq.eyebrow}</p>
          <h2 id="titre-faq">{t.faq.title}</h2>
        </div>
        <div className="faq-list">
          {t.faq.items.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q} className={`faq-item${isOpen ? " is-open" : ""}`}>
                <h3>
                  <button
                    type="button"
                    id={`faq-btn-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpen(isOpen ? null : index)}
                  >
                    <span>{item.q}</span>
                    <ChevronDown aria-hidden="true" />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-btn-${index}`}
                  hidden={!isOpen}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
