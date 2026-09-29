import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICES, FEATURED_SLUGS } from "@/data/services";
import { INSIGHTS } from "@/data/insights";
import { LEARNING } from "@/data/learning";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    page("", 1, "weekly"),
    page("/services", 0.9),
    ...SERVICES.map((s) => page(`/services/${s.slug}`, FEATURED_SLUGS.includes(s.slug) ? 0.9 : 0.8)),
    page("/solutions", 0.8),
    page("/projects", 0.8),
    page("/industries", 0.7),
    page("/about", 0.7),
    page("/contact", 0.8),
    page("/insights", 0.7, "weekly"),
    ...INSIGHTS.map((a) => ({ ...page(`/insights/${a.slug}`, 0.6), lastModified: new Date(a.date) })),
    page("/learning", 0.7, "weekly"),
    ...LEARNING.map((a) => ({ ...page(`/learning/${a.slug}`, 0.6), lastModified: new Date(a.date) })),
    page("/privacy-policy", 0.2, "yearly"),
    page("/terms", 0.2, "yearly"),
  ];
}
