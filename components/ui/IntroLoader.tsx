"use client";

import { useEffect, useState } from "react";
import { SiteLogo } from "@/components/ui/SiteLogo";

const storageKey = "azad-intro-seen";
const maxVisibleMs = 2000;
const exitMs = 360;

function hasSeenIntro() {
  try {
    return window.sessionStorage?.getItem(storageKey) === "true";
  } catch {
    return false;
  }
}

function markIntroSeen() {
  try {
    window.sessionStorage?.setItem(storageKey, "true");
  } catch {
    // Storage can be unavailable in private or embedded browser contexts.
  }
}

export function IntroLoader() {
  const [phase, setPhase] = useState<"hidden" | "visible" | "exiting">(
    "hidden",
  );

  useEffect(() => {
    if (hasSeenIntro()) {
      return;
    }

    let exitTimer: number | undefined;
    let isDone = false;

    const finish = () => {
      if (isDone) {
        return;
      }

      isDone = true;
      markIntroSeen();
      setPhase("exiting");
      exitTimer = window.setTimeout(() => setPhase("hidden"), exitMs);
    };

    const waitForHeroImage = () => {
      const heroImage = document.querySelector<HTMLImageElement>(".hero-image img");

      if (!heroImage || heroImage.complete) {
        finish();
        return;
      }

      heroImage.addEventListener("load", finish, { once: true });
      heroImage.addEventListener("error", finish, { once: true });
    };

    const enterFrame = window.requestAnimationFrame(() => setPhase("visible"));
    const maxTimer = window.setTimeout(finish, maxVisibleMs);

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", waitForHeroImage, {
        once: true,
      });
    } else {
      waitForHeroImage();
    }

    return () => {
      if (enterFrame) {
        window.cancelAnimationFrame(enterFrame);
      }
      if (maxTimer) {
        window.clearTimeout(maxTimer);
      }
      if (exitTimer) {
        window.clearTimeout(exitTimer);
      }
      document.removeEventListener("DOMContentLoaded", waitForHeroImage);

      const heroImage = document.querySelector<HTMLImageElement>(".hero-image img");
      heroImage?.removeEventListener("load", finish);
      heroImage?.removeEventListener("error", finish);
    };
  }, []);

  if (phase === "hidden") {
    return null;
  }

  return (
    <div className="intro-loader" data-phase={phase} role="status">
      <SiteLogo className="intro-logo" href="" priority size={92} />
      <span className="intro-loader-dot" aria-hidden="true" />
      <span className="sr-only">Loading Azad Tariq</span>
    </div>
  );
}
