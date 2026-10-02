"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useI18n } from "@/i18n/LanguageProvider";

const SECTION_IDS = ["accueil", "services", "vehicules", "trajet"];
const REVEAL_SELECTOR =
  ".section-head, .service, .step, .vehicle, .faq-item, .dev-inner";

/** Effets de page : lien actif, ombre de l’en-tête, retour en haut, apparition au défilement. */
export default function PageEffects() {
  const { t } = useI18n();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");
    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".nav li a"),
    );

    const onScroll = () => {
      header?.toggleAttribute("data-scrolled", window.scrollY > 8);
      setShowTop(window.scrollY > 700);

      const line = window.innerHeight * 0.35;
      let current = "";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      for (const link of links) {
        const active = current !== "" && link.getAttribute("href") === `/#${current}`;
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-reveal", "shown");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      el.setAttribute("data-reveal", "hidden");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      className="to-top"
      data-visible={showTop}
      onClick={toTop}
      tabIndex={showTop ? 0 : -1}
      aria-hidden={!showTop}
    >
      <ArrowUp aria-hidden="true" />
      <span className="sr-only">{t.scrollTop}</span>
    </button>
  );
}
