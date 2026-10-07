import type { Metadata } from "next";
import { Changa } from "next/font/google";
import "./globals.css";

const changa = Changa({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-changa",
});

export const metadata: Metadata = {
  title: "Azad Tariq",
  description:
    "Personal portfolio for Azad Tariq, art director, entrepreneur and visual storyteller.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${changa.variable} ${changa.className}`}>
        {children}
      </body>
    </html>
  );
}
