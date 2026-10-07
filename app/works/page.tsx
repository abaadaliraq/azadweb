"use client";

import Link from "next/link";
import { useState } from "react";
import { TopBar } from "@/components/layout/TopBar";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { Footer } from "@/src/components/layout/Footer";

const cinemaHeroImage = "/images/cinema-page/hero.jpg";

const cinemaLinks = {
  alJawzaa: "https://youtu.be/u7XveeMnQ2g?si=jy6ZPhYTXRfmrMlW",
  film122: "https://youtu.be/GfFrVE8RFKY?si=kS_AJCYSnpvH764Y",
};

type CinemaLinkKey = keyof typeof cinemaLinks;

const cinemaLinkKeys: CinemaLinkKey[] = ["alJawzaa", "film122"];

function CinemaHeroImage() {
  const [hasImage, setHasImage] = useState(true);

  if (!hasImage) {
    return <div className="cinema-hero-missing" aria-hidden="true" />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt=""
      className="cinema-hero-media"
      onLoad={(event) => {
        if (!event.currentTarget.naturalWidth) {
          setHasImage(false);
        }
      }}
      onError={() => setHasImage(false)}
      src={cinemaHeroImage}
    />
  );
}

function CinemaPageContent() {
  const { direction, language, t } = useI18n();
  const copy = t.cinemaPage;

  const youtubeLabel = (label: string) =>
    language === "ar"
      ? `مشاهدة ${label} على YouTube`
      : language === "ku"
        ? `بینینی ${label} لەسەر YouTube`
        : `Watch ${label} on YouTube`;

  return (
    <>
      <TopBar />

      <main className="cinema-page">
        <header
          className="journey-detail-hero cinema-hero"
          data-topbar-theme="dark"
        >
          <div className="journey-detail-hero-image">
            <CinemaHeroImage />
          </div>

          <div
            className="journey-detail-hero-shade"
            aria-hidden="true"
          />

          <div
            className="journey-detail-hero-content"
            dir={direction}
          >
            <h1>{copy.title}</h1>
          </div>
        </header>

        <section
          className="cinema-content"
          dir={direction}
        >
          {copy.chapters.map((chapter, index) => (
            <article
              className="cinema-chapter"
              key={chapter.index}
            >
              <p className="cinema-chapter-index">
                {chapter.index}
              </p>

              <h2>{chapter.title}</h2>

              <div className="cinema-chapter-body">
                {chapter.body.map((paragraph) => (
                  <p key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {index === 1 ? (
                <div
                  className="cinema-links"
                  aria-label={copy.linksLabel}
                >
                  {cinemaLinkKeys.map((key) => {
                    const href = cinemaLinks[key];
                    const label = copy.links[key];

                    return (
                      <Link
                        aria-label={youtubeLabel(label)}
                        className="cinema-link"
                        href={href}
                        key={key}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span>{label}</span>
                        <span aria-hidden="true">↗</span>
                      </Link>
                    );
                  })}
                </div>
              ) : null}
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default function WorksPage() {
  return (
    <I18nProvider>
      <CinemaPageContent />
    </I18nProvider>
  );
}