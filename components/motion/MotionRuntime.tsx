"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelector = [
  "[data-motion]",
  ".journey-detail-hero",
  ".journey-detail-intro-block",
  ".journey-detail-chapter",
  ".cinema-chapter",
  ".legal-section",
  ".site-footer",
].join(",");

const parallaxSelector = [
  ".hero-image",
  ".journey-detail-hero-image",
  ".journey-detail-image-panel",
  ".cinema-hero .journey-detail-hero-image",
].join(",");

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function MotionRuntime() {
  const pathname = usePathname();

  useEffect(() => {
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      document
        .querySelectorAll<HTMLElement>(revealSelector)
        .forEach((element) => {
          element.dataset.motionVisible = "true";
          element.dataset.visible = "true";
        });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target as HTMLElement;
          element.dataset.motionVisible = "true";
          element.dataset.visible = "true";
          observer.unobserve(element);
        });
      },
      {
        rootMargin: "0px 0px -14% 0px",
        threshold: 0.18,
      },
    );

    document.querySelectorAll<HTMLElement>(revealSelector).forEach((element) => {
      if (
        element.dataset.motionVisible === "true" ||
        element.dataset.visible === "true"
      ) {
        return;
      }

      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (
      prefersReducedMotion() ||
      window.matchMedia("(max-width: 760px)").matches
    ) {
      return;
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(parallaxSelector),
    );
    let frame = 0;

    const update = () => {
      frame = 0;
      const viewportHeight = window.innerHeight;

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();

        if (rect.bottom < 0 || rect.top > viewportHeight) {
          return;
        }

        const progress =
          (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
        const offset = Math.max(-24, Math.min(24, progress * -34));
        element.style.setProperty("--motion-parallax-y", `${offset}px`);
      });
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      elements.forEach((element) => {
        element.style.removeProperty("--motion-parallax-y");
      });
    };
  }, [pathname]);

  return null;
}
