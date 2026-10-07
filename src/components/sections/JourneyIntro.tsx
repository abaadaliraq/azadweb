"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { MobileImageSlider } from "@/components/ui/MobileImageSlider";
import { useI18n } from "@/lib/i18n";

const journeyLeftImage = "/images/journey/journey-left.jpg";
const journeyRightImage = "/images/journey/journey-right.jpg";
const journeyLeftMobilePosition = "center center";
const journeyRightMobilePosition = "center center";

function ManualJourneyImage({
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

export function JourneyIntro() {
  const { direction, isRtl, t } = useI18n();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const copy = t.journeyIntro;

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
      className="journey-intro"
      data-visible={isVisible}
      data-topbar-theme="light"
      ref={sectionRef}
    >
      <MobileImageSlider
        imageClassName="journey-image"
        slides={[
          { position: journeyLeftMobilePosition, src: journeyLeftImage },
          { position: journeyRightMobilePosition, src: journeyRightImage },
        ]}
        toneClassName="journey-mobile-slider"
      />

      <div
        className="journey-visual journey-visual-left"
        aria-hidden="true"
        style={
          {
            "--journey-mobile-position": journeyLeftMobilePosition,
          } as CSSProperties
        }
      >
        <ManualJourneyImage
          className="journey-image"
          src={journeyLeftImage}
        />
      </div>

      <article className="journey-copy" dir={direction}>
        <div className="journey-copy-inner">
          <p className="journey-index">{copy.index}</p>
          <p className="journey-label">{copy.label}</p>
          <h2>{copy.title}</h2>
          <div className="journey-body">
            {copy.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link className="journey-cta" href="/journey">
            <span>{copy.cta}</span>
            <span aria-hidden="true">{isRtl ? "←" : "→"}</span>
          </Link>
        </div>
      </article>

      <div
        className="journey-visual journey-visual-right"
        aria-hidden="true"
        style={
          {
            "--journey-mobile-position": journeyRightMobilePosition,
          } as CSSProperties
        }
      >
        <ManualJourneyImage
          className="journey-image"
          src={journeyRightImage}
        />
      </div>
    </section>
  );
}
