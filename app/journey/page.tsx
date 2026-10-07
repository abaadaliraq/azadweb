"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useState } from "react";
import { TopBar } from "@/components/layout/TopBar";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { Footer } from "@/src/components/layout/Footer";
import {
  journeyDetailHero,
  journeyFeaturedChapters,
} from "@/src/data/journey";

function JourneyImage({
  className,
  priority = false,
  sizes,
  src,
}: {
  className: string;
  priority?: boolean;
  sizes: string;
  src: string;
}) {
  const [hasImage, setHasImage] = useState(true);

  if (!hasImage) {
    return <div className={`${className} journey-detail-image-missing`} />;
  }

  return (
    <Image
      alt=""
      className={className}
      fill
      onError={() => setHasImage(false)}
      priority={priority}
      sizes={sizes}
      src={src}
    />
  );
}

function JourneyDetailContent() {
  const { direction, language } = useI18n();
  const title =
    language === "en" ? "The Journey" : language === "ku" ? "گەشت" : "المسيرة";
  const intro =
    language === "en"
      ? "Azad Tariq's journey between image and cinema, Baghdad's memory, and digital experiences."
      : language === "ku"
        ? "گەشتی ئازاد تارق لە نێوان وێنە و سینەما، یادی بەغدا، و ئەزموونی دیجیتاڵی."
        : "رحلة أزاد طارق بين الصورة والسينما، ذاكرة بغداد، والتجارب الرقمية.";

  return (
    <>
      <TopBar />
      <main className="journey-detail-page">
        <header className="journey-detail-hero" data-topbar-theme="dark">
          <div
            className="journey-detail-hero-image"
            style={
              {
                "--journey-hero-position": journeyDetailHero.imagePosition,
              } as CSSProperties
            }
          >
            <JourneyImage
              className="journey-detail-hero-media"
              priority
              sizes="100vw"
              src={journeyDetailHero.image}
            />
          </div>
          <div className="journey-detail-hero-shade" aria-hidden="true" />
          <div className="journey-detail-hero-content" dir={direction}>
            <h1>{title}</h1>
          </div>
        </header>

        <section className="journey-detail-intro-block" dir={direction}>
          <p>{intro}</p>
        </section>

        <div className="journey-detail-spreads">
          {journeyFeaturedChapters.map((chapter, index) => {
            const copy = chapter.translations[language];
            const chapterNumber = String(index + 1).padStart(2, "0");
            const imageSide = index === 1 ? "right" : "left";

            return (
              <section
                className="journey-detail-chapter"
                data-image-side={imageSide}
                data-topbar-theme="light"
                dir={direction}
                key={chapter.id}
                style={
                  {
                    "--chapter-color": chapter.backgroundColor,
                  } as CSSProperties
                }
              >
                <div className="journey-detail-image-panel">
                  <JourneyImage
                    className="journey-detail-image"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    src={chapter.image}
                  />
                </div>

                <article className="journey-detail-text-panel">
                  <div className="journey-detail-text-inner">
                    <p className="journey-detail-number">{chapterNumber}</p>
                    <p className="journey-detail-location">{copy.location}</p>
                    <h2>{copy.heading}</h2>
                    <div className="journey-detail-body">
                      {copy.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </article>
              </section>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function JourneyPage() {
  return (
    <I18nProvider>
      <JourneyDetailContent />
    </I18nProvider>
  );
}
