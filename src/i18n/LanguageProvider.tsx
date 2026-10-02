"use client";

import { createContext, useCallback, useContext, useEffect, useSyncExternalStore } from "react";
import { messages, type Lang, type Messages } from "./messages";

const STORAGE_KEY = "elyse-lang";
const listeners = new Set<() => void>();
let current: Lang = "fr";
let loaded = false;

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot(): Lang {
  if (!loaded) {
    loaded = true;
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "fr") current = saved;
    } catch {
      /* stockage indisponible : on reste en français */
    }
  }
  return current;
}

const getServerSnapshot = (): Lang => "fr";

type I18n = { lang: Lang; t: Messages; setLang: (lang: Lang) => void };

const I18nContext = createContext<I18n | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const t = messages[lang];

  const setLang = useCallback((next: Lang) => {
    current = next;
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* préférence non conservée */
    }
    listeners.forEach((l) => l());
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t.meta.description);
  }, [lang, t]);

  return <I18nContext.Provider value={{ lang, t, setLang }}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18n {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n doit être utilisé dans un LanguageProvider");
  return ctx;
}
