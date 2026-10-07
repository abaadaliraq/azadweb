"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

type MobileImageSlide = {
  position?: string;
  src: string;
};

type MobileImageSliderProps = {
  imageClassName: string;
  slides: MobileImageSlide[];
  toneClassName?: string;
};

export function MobileImageSlider({
  imageClassName,
  slides,
  toneClassName,
}: MobileImageSliderProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const updateActiveSlide = () => {
      const slideElements = Array.from(
        scroller.querySelectorAll<HTMLElement>(".mobile-image-slide"),
      );
      const nextIndex = slideElements.reduce((closest, slide, index) => {
        const currentDistance = Math.abs(slide.offsetLeft - scroller.scrollLeft);
        const closestDistance = Math.abs(
          slideElements[closest].offsetLeft - scroller.scrollLeft,
        );

        return currentDistance < closestDistance ? index : closest;
      }, 0);

      setActiveIndex(Math.max(0, Math.min(slides.length - 1, nextIndex)));
    };

    updateActiveSlide();
    scroller.addEventListener("scroll", updateActiveSlide, { passive: true });
    window.addEventListener("resize", updateActiveSlide);

    return () => {
      scroller.removeEventListener("scroll", updateActiveSlide);
      window.removeEventListener("resize", updateActiveSlide);
    };
  }, [slides.length]);

  const goToSlide = (index: number) => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const slide = scroller.querySelectorAll<HTMLElement>(".mobile-image-slide")[
      index
    ];

    scroller.scrollTo({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      left: slide?.offsetLeft ?? 0,
    });
  };

  return (
    <div className={["mobile-image-slider", toneClassName].filter(Boolean).join(" ")}>
      <div className="mobile-image-track" ref={scrollerRef}>
        {slides.map((slide) => (
          <div
            className="mobile-image-slide"
            key={slide.src}
            style={
              {
                "--mobile-image-position": slide.position ?? "center center",
              } as CSSProperties
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              className={imageClassName}
              src={slide.src}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="mobile-slider-dots" aria-label="Image slides">
        {slides.map((slide, index) => (
          <button
            aria-label={`Show image ${index + 1}`}
            aria-pressed={activeIndex === index}
            className="mobile-slider-dot"
            key={slide.src}
            onClick={() => goToSlide(index)}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
