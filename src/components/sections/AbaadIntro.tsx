"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { MobileImageSlider } from "@/components/ui/MobileImageSlider";
import { useI18n } from "@/lib/i18n";

const abaadLeftImage = "/images/abaad/abaad-left.jpg";
const abaadRightImage = "/images/abaad/abaad-right.jpg";
const abaadLeftMobilePosition = "center center";
const abaadRightMobilePosition = "center center";

function ManualAbaadImage({
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

export function AbaadIntro() {
  const { direction, isRtl, t } = useI18n();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const copy = t.abaadIntro;

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
      className="abaad-intro"
      data-topbar-theme="dark"
      data-visible={isVisible}
      ref={sectionRef}
    >
      <MobileImageSlider
        imageClassName="abaad-image"
        slides={[
          { position: abaadLeftMobilePosition, src: abaadLeftImage },
          { position: abaadRightMobilePosition, src: abaadRightImage },
        ]}
        toneClassName="abaad-mobile-slider"
      />

      <div
        className="abaad-visual abaad-visual-left"
        aria-hidden="true"
        style={
          {
            "--abaad-mobile-position": abaadLeftMobilePosition,
          } as CSSProperties
        }
      >
        <ManualAbaadImage className="abaad-image" src={abaadLeftImage} />
      </div>

      <article className="abaad-copy" dir={direction}>
        <div className="abaad-copy-inner">
          <p className="abaad-index">{copy.index}</p>
          <p className="abaad-label">{copy.label}</p>
          <p className="abaad-detail">{copy.detail}</p>
          <h2>{copy.title}</h2>
          <div className="abaad-body">
            {copy.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link className="abaad-cta" href="/abaad-aliraq">
            <span>{copy.cta}</span>
            <span aria-hidden="true">{isRtl ? "←" : "→"}</span>
          </Link>
        </div>
      </article>

      <div
        className="abaad-visual abaad-visual-right"
        aria-hidden="true"
        style={
          {
            "--abaad-mobile-position": abaadRightMobilePosition,
          } as CSSProperties
        }
      >
        <ManualAbaadImage className="abaad-image" src={abaadRightImage} />
      </div>
    </section>
  );
}
