"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { MobileImageSlider } from "@/components/ui/MobileImageSlider";
import { useI18n } from "@/lib/i18n";

const filmLeftImage = "/images/film/film-left.jpg";
const filmRightImage = "/images/film/film-right.jpg";
const filmLeftMobilePosition = "center center";
const filmRightMobilePosition = "center center";

function ManualFilmImage({
  className,
  src,
}: {
  className?: string;
  src: string;
}) {
  const [hasImage, setHasImage] = useState(true);

  if (!hasImage) {
    return null;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt=""
      className={className}
      onError={() => setHasImage(false)}
      src={src}
    />
  );
}

export function FilmIntro() {
  const { direction, isRtl, t } = useI18n();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const copy = t.filmIntro;

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
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.18,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="film-intro"
      data-topbar-theme="dark"
      data-visible={isVisible}
      ref={sectionRef}
    >
      <MobileImageSlider
        imageClassName="film-image"
        slides={[
          { position: filmLeftMobilePosition, src: filmLeftImage },
          { position: filmRightMobilePosition, src: filmRightImage },
        ]}
        toneClassName="film-mobile-slider"
      />

      <div
        className="film-visual film-visual-left"
        aria-hidden="true"
        style={
          {
            "--film-mobile-position": filmLeftMobilePosition,
          } as CSSProperties
        }
      >
        <ManualFilmImage className="film-image" src={filmLeftImage} />
      </div>

      <article className="film-copy" dir={direction}>
        <div className="film-copy-inner">
          <p className="film-index">{copy.index}</p>
          <p className="film-label">{copy.label}</p>
          <p className="film-meta">{copy.meta}</p>

          <h2>{copy.title}</h2>

          <div className="film-body">
            {copy.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <Link className="film-cta" href="/works">
            <span>{copy.cta}</span>
            <span aria-hidden="true">{isRtl ? "←" : "→"}</span>
          </Link>
        </div>
      </article>

      <div
        className="film-visual film-visual-right"
        aria-hidden="true"
        style={
          {
            "--film-mobile-position": filmRightMobilePosition,
          } as CSSProperties
        }
      >
        <ManualFilmImage className="film-image" src={filmRightImage} />
      </div>
    </section>
  );
}