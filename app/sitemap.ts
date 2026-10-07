import type { MetadataRoute } from "next";
import { absoluteUrl, pageSeo } from "@/lib/seo";

const routes = [
  { page: pageSeo.home, priority: 1 },
  { page: pageSeo.journey, priority: 0.9 },
  { page: pageSeo.works, priority: 0.9 },
  { page: pageSeo.house, priority: 0.9 },
  { page: pageSeo.abaad, priority: 0.9 },
  { page: pageSeo.terms, priority: 0.3 },
  { page: pageSeo.privacy, priority: 0.3 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ page, priority }) => ({
    url: absoluteUrl(page.canonicalPath),
    lastModified: new Date(),
    changeFrequency: priority === 1 ? "monthly" : "yearly",
    priority,
  }));
}
