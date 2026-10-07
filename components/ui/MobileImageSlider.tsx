"use client";

import type { CSSProperties, PointerEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

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
  const pointerIdRef = useRef<number | null>(null);
  const dragStartRef = useRef(0);
  const dragOffsetRef = useRef(0);
  const [baseOffset, setBaseOffset] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isTransitionDisabled, setIsTransitionDisabled] = useState(false);
  const [renderIndex, setRenderIndex] = useState(slides.length > 1 ? 1 : 0);
  const hasLoop = slides.length > 1;
  const renderedSlides = useMemo(() => {
    if (!hasLoop) {
      return slides;
    }

    return [slides[slides.length - 1], ...slides, slides[0]];
  }, [hasLoop, slides]);
  const activeIndex = (() => {
    if (!hasLoop) {
      return Math.max(0, Math.min(slides.length - 1, renderIndex));
    }

    if (renderIndex === 0) {
      return slides.length - 1;
    }

    if (renderIndex === slides.length + 1) {
      return 0;
    }

    return renderIndex - 1;
  })();

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const updateBaseOffset = () => {
      const slide = scroller.querySelectorAll<HTMLElement>(
        ".mobile-image-slide",
      )[renderIndex];

      setBaseOffset(slide?.offsetLeft ?? 0);
    };

    updateBaseOffset();
    window.addEventListener("resize", updateBaseOffset);

    return () => {
      window.removeEventListener("resize", updateBaseOffset);
    };
  }, [renderIndex, renderedSlides.length]);

  const resetLoopPosition = (nextIndex: number) => {
    setIsTransitionDisabled(true);
    setRenderIndex(nextIndex);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setIsTransitionDisabled(false);
      });
    });
  };

  const handleTransitionEnd = () => {
    if (!hasLoop) {
      return;
    }

    if (renderIndex === 0) {
      resetLoopPosition(slides.length);
    } else if (renderIndex === slides.length + 1) {
      resetLoopPosition(1);
    }
  };

  const goToSlide = (index: number) => {
    if (!hasLoop) {
      setRenderIndex(index);
      return;
    }

    setIsTransitionDisabled(false);
    setDragOffset(0);
    setRenderIndex(index + 1);
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!hasLoop) {
      return;
    }

    pointerIdRef.current = event.pointerId;
    dragStartRef.current = event.clientX;
    setIsDragging(true);
    setIsTransitionDisabled(true);
    setDragOffset(0);
    dragOffsetRef.current = 0;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging || pointerIdRef.current !== event.pointerId) {
      return;
    }

    const nextOffset = event.clientX - dragStartRef.current;

    dragOffsetRef.current = nextOffset;
    setDragOffset(nextOffset);
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging || pointerIdRef.current !== event.pointerId) {
      return;
    }

    const slideWidth = scrollerRef.current?.clientWidth ?? 0;
    const swipeThreshold = Math.min(82, slideWidth * 0.18);
    const shouldAdvance = dragOffsetRef.current < -swipeThreshold;
    const shouldRewind = dragOffsetRef.current > swipeThreshold;

    pointerIdRef.current = null;
    dragOffsetRef.current = 0;
    setIsDragging(false);
    setIsTransitionDisabled(false);
    setDragOffset(0);

    if (shouldAdvance) {
      setRenderIndex((current) => current + 1);
    } else if (shouldRewind) {
      setRenderIndex((current) => current - 1);
    }
  };

  const handlePointerCancel = () => {
    pointerIdRef.current = null;
    dragOffsetRef.current = 0;
    setIsDragging(false);
    setIsTransitionDisabled(false);
    setDragOffset(0);
  };

  const trackStyle: CSSProperties = {
    transform: `translate3d(${dragOffset - baseOffset}px, 0, 0)`,
  };

  return (
    <div className={["mobile-image-slider", toneClassName].filter(Boolean).join(" ")}>
      <div
        className="mobile-image-track"
        data-dragging={isDragging}
        data-transition-disabled={isTransitionDisabled}
        onPointerCancel={handlePointerCancel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onTransitionEnd={handleTransitionEnd}
        ref={scrollerRef}
        style={trackStyle}
      >
        {renderedSlides.map((slide, index) => (
          <div
            className="mobile-image-slide"
            key={`${slide.src}-${index}`}
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
              draggable={false}
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
