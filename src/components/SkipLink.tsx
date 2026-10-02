"use client";

import { useI18n } from "@/i18n/LanguageProvider";

export default function SkipLink() {
  const { t } = useI18n();
  return (
    <a href="#contenu" className="skip-link">
      {t.skip}
    </a>
  );
}
