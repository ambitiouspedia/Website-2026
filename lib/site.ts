// ─── Company facts ─────────────────────────────────────────────────────────
// Single source of truth for every contact detail and company fact on the
// site. Everything here was supplied directly by the founder (2026-09-29) —
// do not add figures (team size, client counts, years of experience, etc.)
// that have not been confirmed.

export const SITE = {
  name: "Ambitious Pedia Tech and Services",
  shortName: "Ambitious Pedia",
  tagline: "Business Technology. Automation. AI. Digital Transformation.",
  // Vercel serves the site on www (apex 308-redirects to it) — keep canonical
  // URLs on the same host.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ambitiouspedia.com",

  // Started in 2018; formally registered in 2023. Keep both facts distinct.
  foundedYear: 2018,
  registeredYear: 2023,
  gstin: "27CELPJ1162F1ZM",

  phone: "+91 9226744588",
  phoneHref: "tel:+919226744588",
  // NOTE: WhatsApp availability on this number not yet confirmed by founder.
  whatsappHref: "https://wa.me/919226744588",
  salesEmail: "sales@ambitiouspedia.com",
  supportEmail: "support@ambitiouspedia.com",

  // Only city-level location has been provided — no street address yet.
  address: {
    locality: "Pune",
    region: "Maharashtra",
    country: "India",
    countryCode: "IN",
  },

  social: {
    linkedin: "https://www.linkedin.com/company/ambitious-pedia-tech-services",
    instagram: "https://www.instagram.com/ambitiouspedia_techandservices",
  },
} as const;
