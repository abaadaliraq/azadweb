import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata, pageSeo } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(pageSeo.privacy);

export default function PrivacyLayout({ children }: { children: ReactNode }) {
  return children;
}
