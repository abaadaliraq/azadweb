"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";

const contactMethods = {
  email: "mailto:azad.pro@gmail.com",
  whatsapp: "https://wa.me/9647737079079",
  instagram: "https://www.instagram.com/azad.tarriq/?__pwa=1",
};

const methodKeys = ["email", "whatsapp", "instagram"] as const;

export function ContactSection() {
  const { direction, t } = useI18n();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const copy = t.contact;

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "0px 0px -18% 0px",
        threshold: 0.2,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      className="contact-section"
      data-topbar-theme="light"
      data-visible={isVisible}
      dir={direction}
      ref={sectionRef}
    >
      <div className="contact-inner">
        <div className="contact-kicker">
          <span>{copy.index}</span>
          <span>{copy.label}</span>
        </div>

        <p className="contact-intro">
          {copy.intro}
        </p>

        <div
          className="contact-links"
          aria-label={copy.label}
        >
          {methodKeys.map((key) => {
            const method = copy.methods[key];
            const href = contactMethods[key];
            const isExternal = href.startsWith("http");

            return (
              <a
                className="contact-method"
                data-method={key}
                href={href}
                key={key}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
              >
                <span>{method.label}</span>
                <span aria-hidden="true">↗</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}