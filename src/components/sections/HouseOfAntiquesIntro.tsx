"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { MobileImageSlider } from "@/components/ui/MobileImageSlider";
import { useI18n } from "@/lib/i18n";

const houseLeftImage = "/images/house-of-antiques/hoa-left.jpg";
const houseRightImage = "/images/house-of-antiques/hoa-right.jpg";
const houseLeftMobilePosition = "center center";
const houseRightMobilePosition = "center center";

function ManualHouseImage({
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

export function HouseOfAntiquesIntro() {
  const { direction, isRtl, t } = useI18n();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const copy = t.houseIntro;

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
      className="house-intro"
      data-topbar-theme="light"
      data-visible={isVisible}
      ref={sectionRef}
    >
      <MobileImageSlider
        imageClassName="house-image"
        slides={[
          { position: houseLeftMobilePosition, src: houseLeftImage },
          { position: houseRightMobilePosition, src: houseRightImage },
        ]}
        toneClassName="house-mobile-slider"
      />

      <div
        className="house-visual house-visual-left"
        aria-hidden="true"
        style={
          {
            "--house-mobile-position": houseLeftMobilePosition,
          } as CSSProperties
        }
      >
        <ManualHouseImage className="house-image" src={houseLeftImage} />
      </div>

      <article className="house-copy" dir={direction}>
        <div className="house-copy-inner">
          <p className="house-index">{copy.index}</p>
          <p className="house-label">{copy.label}</p>
          <p className="house-meta">{copy.meta}</p>
          <h2>{copy.title}</h2>
          <div className="house-body">
            {copy.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link className="house-cta" href="/house-of-antiques">
            <span>{copy.cta}</span>
            <span aria-hidden="true">{isRtl ? "←" : "→"}</span>
          </Link>
        </div>
      </article>

      <div
        className="house-visual house-visual-right"
        aria-hidden="true"
        style={
          {
            "--house-mobile-position": houseRightMobilePosition,
          } as CSSProperties
        }
      >
        <ManualHouseImage className="house-image" src={houseRightImage} />
      </div>
    </section>
  );
}
