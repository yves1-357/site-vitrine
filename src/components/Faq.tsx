"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faq } from "@/config/site";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section" aria-labelledby="titre-faq">
      <div className="container faq-grid">
        <div className="section-head">
          <p className="eyebrow eyebrow-dark">Questions fréquentes</p>
          <h2 id="titre-faq">Avant de vous lancer</h2>
        </div>
        <div className="faq-list">
          {faq.map((item, index) => {
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
