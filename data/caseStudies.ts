// ─── Case studies ──────────────────────────────────────────────────────────
// Structure: Problem → Solution → Technology → Implementation → Result.
//
// No case studies have been written yet (confirmed by the founder
// 2026-09-29). Entries are only shown on the site when `published: true`.
// Never publish a result that hasn't been measured — leave `results` empty
// and the Result section is simply not rendered.

export interface CaseStudy {
  slug: string;
  published: boolean;
  title: string;
  client: string;
  industry: string;
  summary: string;
  problem: string[];
  solution: string[];
  technology: string[];
  implementation: string[];
  results: string[];
  services: string[];
  note?: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    // DRAFT — facts below are from the LK Machinery website project itself,
    // but the founder has not yet reviewed or approved this case study, and
    // client permission to publish it has not been confirmed.
    slug: "lk-machinery-b2b-website-crm-lead-capture",
    published: false,
    title: "B2B website with CRM lead capture for an industrial machinery manufacturer",
    client: "LK Machinery India",
    industry: "Manufacturing",
    summary:
      "A rebuilt product website for a die casting, injection molding and CNC machinery manufacturer, with enquiries flowing straight into their CRM.",
    problem: [
      "The previous website did not present the full, current product range clearly.",
      "Enquiries needed to reach the sales team's CRM without manual copying.",
      "Old URLs indexed by search engines needed to keep working after the rebuild.",
    ],
    solution: [
      "A new product-led website with category and model pages for each machine range.",
      "Enquiry forms posting directly into the company's CRM as leads, tagged with the product of interest.",
      "Redirects from old URLs and structured data for search engines.",
    ],
    technology: ["Next.js", "TypeScript", "Vercel", "vtiger CRM Web-to-Lead", "Google Tag Manager"],
    implementation: [
      "Built from an approved design, with every product specification verified against the manufacturer's own sources.",
      "Search Console monitoring used to find and redirect dead URLs from the old site.",
    ],
    results: [],
    services: ["website-development", "crm-sales-automation", "digital-marketing"],
    note: "Needs founder review + client permission before publishing. Add measured results if available.",
  },
];

export function getPublishedCaseStudies() {
  return CASE_STUDIES.filter((c) => c.published);
}

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug && c.published);
}
