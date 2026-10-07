"use client";

import { useEffect, useState } from "react";
import { SiteLogo } from "@/components/ui/SiteLogo";

const holdMs = 1850;
const exitMs = 720;

export function IntroLoader() {
  const [phase, setPhase] = useState<"hidden" | "visible" | "exiting">(
    () => {
      if (typeof window === "undefined") {
        return "visible";
      }

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      return reduceMotion ? "hidden" : "visible";
    },
  );

  useEffect(() => {
    if (phase === "hidden") {
      return;
    }

    let exitTimer: number | undefined;

    const finish = () => {
      setPhase("exiting");
      exitTimer = window.setTimeout(() => setPhase("hidden"), exitMs);
    };

    document.documentElement.dataset.intro = "active";
    const holdTimer = window.setTimeout(finish, holdMs);

    return () => {
      window.clearTimeout(holdTimer);
      if (exitTimer) {
        window.clearTimeout(exitTimer);
      }
    };
  }, [phase]);

  useEffect(() => {
    if (phase === "hidden") {
      delete document.documentElement.dataset.intro;
    } else {
      document.documentElement.dataset.intro = "active";
    }
  }, [phase]);

  if (phase === "hidden") {
    return null;
  }

  return (
    <div className="intro-loader" data-phase={phase} role="status">
      <SiteLogo className="intro-logo" href="" priority size={92} />
      <span className="sr-only">Loading Azad Tariq</span>
    </div>
  );
}
