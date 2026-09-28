import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/data/services";
import { getPublishedCaseStudies } from "@/data/caseStudies";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudies = getPublishedCaseStudies();

  const staticRoutes = [
    "",
    "/services",
    "/solutions",
    "/industries",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    // Case studies index only once there is something on it
    ...(caseStudies.length > 0 ? ["/case-studies"] : []),
  ].map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : route.startsWith("/privacy") || route === "/terms" ? 0.3 : 0.8,
  }));

  const services = SERVICES.map((s) => ({
    url: `${SITE.url}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const studies = caseStudies.map((c) => ({
    url: `${SITE.url}/case-studies/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...services, ...studies];
}
