"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  defaultLanguage,
  languages,
  translations,
  type Language,
} from "@/data/translations";

const storageKey = "azad-language";

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (typeof translations)[Language];
  direction: "rtl" | "ltr";
  isRtl: boolean;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function isLanguage(value: string | null): value is Language {
  return languages.some((language) => language === value);
}

function getStoredLanguage() {
  if (typeof window === "undefined") {
    return defaultLanguage;
  }

  const savedLanguage = window.localStorage.getItem(storageKey);
  return isLanguage(savedLanguage) ? savedLanguage : defaultLanguage;
}

function subscribeToLanguageChanges(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("azad-language-change", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("azad-language-change", callback);
  };
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(
    subscribeToLanguageChanges,
    getStoredLanguage,
    () => defaultLanguage,
  );

  useEffect(() => {
    const { dir } = translations[language].meta;
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
    document.documentElement.dataset.language = language;
  }, [language]);

  const value = useMemo(() => {
    const direction = translations[language].meta.dir;

    return {
      language,
      setLanguage: (nextLanguage: Language) => {
        window.localStorage.setItem(storageKey, nextLanguage);
        window.dispatchEvent(new Event("azad-language-change"));
      },
      t: translations[language],
      direction,
      isRtl: direction === "rtl",
    };
  }, [language]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider");
  }

  return context;
}
