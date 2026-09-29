// ─── Businesses we work with ───────────────────────────────────────────────
// Types of business Ambitious Pedia can serve (founder's list, 2026-09-29),
// plus sectors already worked in. `example` only where the founder named a
// real client or confirmed the work — never implied elsewhere. `needs` are
// general descriptions of the sector, not project claims.

export interface Industry {
  slug: string;
  name: string;
  icon: "factory" | "truck" | "briefcase" | "school" | "health" | "store" | "rocket" | "building" | "sun" | "code";
  needs: string;
  example?: string;
}

export const INDUSTRIES: Industry[] = [
  { slug: "manufacturing", name: "Manufacturing", icon: "factory", needs: "Quotations, production, inventory and dispatch in one flow.", example: "LK Machinery India" },
  { slug: "trading-distribution", name: "Trading & Distribution", icon: "truck", needs: "Fast repeat orders, stock and payment follow-up.", example: "Vijaya Enterprises" },
  { slug: "solar-energy", name: "Solar & Energy", icon: "sun", needs: "Leads, site surveys, quotations and projects.", example: "Solar companies" },
  { slug: "software-technology", name: "Software Companies", icon: "code", needs: "Extra capacity for mobile apps and AI agents.", example: "Android & AI agent projects" },
  { slug: "professional-services", name: "Professional Services", icon: "briefcase", needs: "Clients, projects, billing and documents." },
  { slug: "education", name: "Education", icon: "school", needs: "Admissions, enquiries, fees and communication." },
  { slug: "healthcare", name: "Healthcare", icon: "health", needs: "Appointments, records and patient communication." },
  { slug: "retail", name: "Retail", icon: "store", needs: "Inventory, billing and customer engagement." },
  { slug: "startups", name: "Startups", icon: "rocket", needs: "The right systems from day one, built to scale." },
  { slug: "smes", name: "SMEs", icon: "building", needs: "Moving from Excel and manual work to connected systems." },
];
