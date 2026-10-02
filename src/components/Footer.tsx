"use client";

import Link from "next/link";
import { brand, developer } from "@/config/site";
import { useI18n } from "@/i18n/LanguageProvider";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-brand">{brand.name}</p>
          <p>{t.footer.notice}</p>
        </div>
        <div className="footer-meta">
          <p>
            {t.footer.signed} {developer.name} — {t.dev.baseline}
          </p>
          <p>
            <Link href="/credits">{t.footer.credits}</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
