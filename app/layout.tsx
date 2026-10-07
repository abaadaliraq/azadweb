import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Changa } from "next/font/google";
import { MotionRuntime } from "@/components/motion/MotionRuntime";
import { buildPageMetadata, pageSeo, structuredData } from "@/lib/seo";
import "./globals.css";

const changa = Changa({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-changa",
});

export const metadata: Metadata = buildPageMetadata(pageSeo.home);

const jsonLd = JSON.stringify(structuredData).replace(/</g, "\\u003c");

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${changa.variable} ${changa.className}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
        <MotionRuntime />
        {children}
      </body>
    </html>
  );
}
