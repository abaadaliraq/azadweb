"use client";

import { useState } from "react";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { SiteLogo } from "@/components/ui/SiteLogo";
import { useI18n } from "@/lib/i18n";

const navLinks = [
  { href: "/", key: "home" },
  { href: "/journey", key: "journey" },
  { href: "/works", key: "works" },
  { href: "/house-of-antiques", key: "antiques" },
  { href: "/abaad-aliraq", key: "abaad" },
] as const;

export function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, direction, language } = useI18n();

  const contactLabel =
    language === "ar"
      ? "التواصل"
      : language === "ku"
        ? "پەیوەندی"
        : "Contact";

  return (
    <header
      className="topbar"
      data-direction={direction}
      data-theme="dark"
      dir="ltr"
    >
      <SiteLogo className="topbar-logo" priority size={44} />

      <div className="topbar-language">
        <LanguageSwitcher />
      </div>

      <button
        aria-controls="site-navigation"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        className="menu-button"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <span />
        <span />
      </button>

      <nav
        className={isOpen ? "topbar-nav is-open" : "topbar-nav"}
        dir={direction}
        id="site-navigation"
      >
        {navLinks.map((link) => (
          <a
            href={link.href}
            key={link.key}
            onClick={() => setIsOpen(false)}
          >
            {t.nav[link.key]}
          </a>
        ))}

        <a
          href="/#contact"
          onClick={() => setIsOpen(false)}
        >
          {contactLabel}
        </a>
      </nav>
    </header>
  );
}