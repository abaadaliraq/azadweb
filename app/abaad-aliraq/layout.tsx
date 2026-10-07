import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata, pageSeo } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(pageSeo.abaad);

export default function AbaadAlIraqLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
