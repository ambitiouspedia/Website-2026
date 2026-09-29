import { SITE } from "@/lib/site";

// ─── Structured data (JSON-LD) ─────────────────────────────────────────────
// Only verified facts from lib/site.ts. No street address or geo-coordinates
// are included because none have been provided yet.

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    logo: `${SITE.url}/images/logo.png`,
    foundingDate: String(SITE.foundedYear),
    email: SITE.salesEmail,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.countryCode,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: SITE.salesEmail,
        telephone: SITE.phone,
        areaServed: "IN",
        availableLanguage: "en",
      },
      {
        "@type": "ContactPoint",
        contactType: "technical support",
        email: SITE.supportEmail,
        areaServed: "IN",
      },
    ],
    sameAs: [SITE.social.linkedin, SITE.social.instagram],
  };
}

export function getServiceSchema(service: {
  name: string;
  summary: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.summary,
    url: `${SITE.url}/services/${service.slug}`,
    areaServed: "IN",
    provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
  };
}

export function getBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.item}`,
    })),
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.shortName,
    url: SITE.url,
    publisher: { "@type": "Organization", name: SITE.name },
  };
}

export function getFaqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function getArticleSchema(a: {
  title: string;
  description: string;
  date: string;
  author: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    datePublished: a.date,
    dateModified: a.date,
    author: { "@type": "Organization", name: a.author },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${SITE.url}/images/logo.png` },
    },
    mainEntityOfPage: `${SITE.url}${a.path}`,
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
