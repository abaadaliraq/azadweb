import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata, pageSeo } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(pageSeo.journey);

export default function JourneyLayout({ children }: { children: ReactNode }) {
  return children;
}
