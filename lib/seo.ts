import type { Metadata } from "next";

export const siteUrl = "https://www.azadtarriq.com";
export const siteName = "Azad Tariq";
export const defaultOgImage = "/images/azad_hero.jpg";

type SeoPage = {
  canonicalPath: string;
  description: string;
  keywords: string[];
  title: string;
};

const globalKeywords = [
  "Azad Tariq Al-Almani",
  "Azad Tariq Al Almani",
  "Azad Al-Almani",
  "Azad Tariq",
  "Azad Almani",
  "Tariq Almani",
  "أزاد طارق الألماني",
  "ازاد طارق الالماني",
  "أزاد الألماني",
  "ازاد الالماني",
  "أزاد طارق",
  "ازاد طارق",
  "طارق الألماني",
  "طارق الالماني",
];

export const pageSeo = {
  home: {
    canonicalPath: "/",
    title: "Azad Tariq Al-Almani | Cinema, Heritage & Digital Experiences",
    description:
      "Official website of Azad Tariq Al-Almani, presenting his work across cinema, art direction, heritage, House of Antiques, virtual reality and digital experiences through Abaad Al-Iraq.",
    keywords: [
      "Azad Tariq cinema",
      "Iraqi art director",
      "House of Antiques Baghdad",
      "Abaad Al-Iraq",
      "digital experiences Iraq",
      "أزاد طارق السينما",
      "بيت التحفيات",
      "أبعاد العراق",
    ],
  },
  journey: {
    canonicalPath: "/journey",
    title: "Azad Tariq Journey | Cinema, Heritage & Technology",
    description:
      "Explore Azad Tariq's journey between Iraq, Egypt and the United States, shaped by cinema, visual production, Baghdad heritage and digital experiences.",
    keywords: [
      "Azad Tariq Journey",
      "Azad Tariq cinema",
      "Iraqi heritage",
      "Baghdad heritage",
      "مسيرة أزاد طارق",
      "تراث بغداد",
    ],
  },
  works: {
    canonicalPath: "/works",
    title: "Azad Tariq | Cinema & Film Production",
    description:
      "Azad Tariq's cinema and film production experience, including art direction and work connected to productions such as 122 and Al-Jawzaa.",
    keywords: [
      "Azad Tariq cinema",
      "Azad Tariq film producer",
      "Azad Tariq art director",
      "Iraqi film producer",
      "122 movie",
      "Al Jawzaa",
      "فيلم 122",
      "فيلم الجوزاء",
    ],
  },
  house: {
    canonicalPath: "/house-of-antiques",
    title: "Azad Tariq & House of Antiques | Baghdad Heritage",
    description:
      "House of Antiques is part of Azad Tariq Al-Almani's story and the Al-Almani family legacy in Baghdad, carried across three generations.",
    keywords: [
      "House of Antiques Baghdad",
      "House of Antiques Iraq",
      "Azad Tariq House of Antiques",
      "Azad Tariq Al-Almani",
      "Baghdad heritage",
      "بيت التحفيات",
      "بيت التحفيات بغداد",
    ],
  },
  abaad: {
    canonicalPath: "/abaad-aliraq",
    title: "Azad Tariq & Abaad Al-Iraq | Virtual Reality & Digital Solutions",
    description:
      "Azad Tariq's work with Abaad Al-Iraq, from introducing virtual reality and virtual tours in Iraq to digital solutions, systems, websites, apps and e-commerce platforms.",
    keywords: [
      "Abaad Al-Iraq",
      "Abaad Iraq",
      "virtual reality Iraq",
      "virtual tours Iraq",
      "360 virtual tours Iraq",
      "digital solutions Iraq",
      "web development Iraq",
      "أبعاد العراق",
      "واقع افتراضي العراق",
      "جولات افتراضية العراق",
      "حلول رقمية العراق",
    ],
  },
  terms: {
    canonicalPath: "/terms",
    title: "Terms of Use | Azad Tariq",
    description:
      "Terms of Use for the official Azad Tariq website, covering portfolio content, intellectual property, external links and contact information.",
    keywords: ["Azad Tariq Terms of Use", "شروط استخدام أزاد طارق"],
  },
  privacy: {
    canonicalPath: "/privacy",
    title: "Privacy Policy | Azad Tariq",
    description:
      "Privacy Policy for the official Azad Tariq website, including language preferences, external contact links and basic technical data.",
    keywords: ["Azad Tariq Privacy Policy", "سياسة خصوصية أزاد طارق"],
  },
} satisfies Record<string, SeoPage>;

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function buildPageMetadata(page: SeoPage): Metadata {
  const canonicalUrl = absoluteUrl(page.canonicalPath);
  const imageUrl = absoluteUrl(defaultOgImage);

  return {
    metadataBase: new URL(siteUrl),
    title: page.title,
    description: page.description,
    applicationName: siteName,
    authors: [{ name: "Azad Tariq Al-Almani" }],
    creator: "Azad Tariq Al-Almani",
    publisher: siteName,
    keywords: [...globalKeywords, ...page.keywords],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: canonicalUrl,
      siteName,
      type: "website",
      locale: "ar_IQ",
      alternateLocale: ["en_US", "ku_IQ"],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "Azad Tariq Al-Almani",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Azad Tariq Al-Almani",
    alternateName: [
      "Azad Tariq",
      "Azad Tariq Al Almani",
      "Azad Al-Almani",
      "Azad Almani",
      "أزاد طارق الألماني",
      "ازاد طارق الالماني",
      "أزاد طارق",
      "ازاد طارق",
      "أزاد الألماني",
      "ازاد الالماني",
    ],
    url: absoluteUrl("/"),
    image: absoluteUrl(defaultOgImage),
    sameAs: [
      "https://www.instagram.com/azad.tarriq/",
      "https://www.facebook.com/share/1DpmigtJz9/",
    ],
    description:
      "Azad Tariq Al-Almani works across cinema, art direction, heritage and digital experiences.",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: absoluteUrl("/"),
  },
];
