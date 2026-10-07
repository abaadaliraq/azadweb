"use client";

import { languages } from "@/data/translations";
import { useI18n } from "@/lib/i18n";

export function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();

  return (
    <div className="language-switcher" aria-label="Language selector">
      {languages.map((item) => (
        <button
          aria-pressed={language === item}
          className="language-option"
          key={item}
          onClick={() => setLanguage(item)}
          type="button"
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
