"use client";

import type { ReactNode } from "react";
import { IntroLoader } from "@/components/ui/IntroLoader";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <>
      <IntroLoader />
      <div className="motion-page-shell">{children}</div>
    </>
  );
}
