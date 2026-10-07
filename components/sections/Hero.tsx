"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t, direction, isRtl, language } = useI18n();

  return (
    <section
      className="hero"
      data-direction={direction}
      data-language={language}
      data-topbar-theme="dark"
    >
      <div className="hero-image" aria-hidden="true">
        <Image
          alt=""
          fill
          priority
          sizes="100vw"
          src="/images/azad_hero.jpg"
        />
      </div>

      <div className="hero-shade" />

      <div className="hero-frame">
        <div className="hero-index" aria-hidden="true">
          <span>01</span>
          <span>{t.hero.yearLabel}</span>
        </div>

        <article className="hero-copy" dir={direction}>
          <p className="hero-eyebrow">{t.hero.eyebrow}</p>
          <h1>{t.hero.title}</h1>
          <p className="hero-support">{t.hero.support}</p>
        </article>

        <aside className="hero-descriptor" dir={direction}>
          <span>{t.hero.detailLabel}</span>
          <ul>
            {t.hero.descriptor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>

        <div className="hero-mark" aria-hidden="true">
          <span>{isRtl ? "↙" : "↘"}</span>
        </div>
      </div>
    </section>
  );
}
