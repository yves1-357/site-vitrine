"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { brand, navLinks } from "@/config/site";
import { useI18n } from "@/i18n/LanguageProvider";

export default function Header() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            É
          </span>
          <span className="brand-name">{brand.name}</span>
        </Link>

        <button
          ref={buttonRef}
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          <span className="sr-only">{open ? t.header.closeMenu : t.header.openMenu}</span>
        </button>

        <div className="lang-switch" role="group" aria-label={t.header.langLabel}>
          <button
            type="button"
            lang="fr"
            aria-pressed={lang === "fr"}
            aria-label={t.header.langFr}
            onClick={() => setLang("fr")}
          >
            FR
          </button>
          <button
            type="button"
            lang="en"
            aria-pressed={lang === "en"}
            aria-label={t.header.langEn}
            onClick={() => setLang("en")}
          >
            EN
          </button>
        </div>

        <nav
          id="menu-principal"
          className="nav"
          data-open={open}
          aria-label={t.header.navLabel}
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)}>
                  {t.header.links[link.id]}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#trajet"
            className="btn btn-gold nav-cta"
            onClick={() => setOpen(false)}
          >
            {t.header.cta}
          </Link>
        </nav>
      </div>
    </header>
  );
}
