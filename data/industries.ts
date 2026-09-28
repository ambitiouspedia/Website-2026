// ─── Industries ────────────────────────────────────────────────────────────
// Only industries Ambitious Pedia has actually worked in, as confirmed by the
// founder (2026-09-29). `clients` lists only clients the founder has named;
// `workDone` only what has been confirmed. The `challenges` are general
// descriptions of the industry, not claims about specific projects.
//
// `note` fields are internal flags — never rendered.

export interface Industry {
  slug: string;
  name: string;
  summary: string;
  challenges: string[];
  clients: string[];
  workDone?: string;
  services: string[];
  note?: string;
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "manufacturing",
    name: "Manufacturing",
    summary:
      "Manufacturers juggling enquiries, quotations, production, inventory and dispatch across several disconnected tools.",
    challenges: [
      "Long B2B sales cycles with many quotations",
      "Inventory and production tracked in spreadsheets",
      "Dealer and customer enquiries from many channels",
    ],
    clients: ["LK Machinery India"],
    services: ["erp-business-software", "crm-sales-automation", "website-development"],
    note: "Confirm with founder the full scope of LK Machinery work to list here (website rebuild with CRM lead capture is known).",
  },
  {
    slug: "fmcg-distribution",
    name: "FMCG & Food Distribution",
    summary:
      "Distributors supplying hotels and businesses, where orders, stock, deliveries and payments move fast.",
    challenges: [
      "High volume of repeat orders by phone and WhatsApp",
      "Stock, dispatch and payment follow-up",
      "Keeping accounts and orders in sync",
    ],
    clients: ["Vijaya Enterprises"],
    services: ["erp-business-software", "ai-business-automation", "integrations"],
    note: "Confirm what was delivered for Vijaya Enterprises (food distributor to hotels).",
  },
  {
    slug: "solar-energy",
    name: "Solar & Renewable Energy",
    summary:
      "Solar companies managing leads, site surveys, quotations and installation projects.",
    challenges: [
      "Many enquiries needing quick, accurate quotations",
      "Tracking projects from survey to installation",
      "Following up leads that take time to convert",
    ],
    clients: [],
    services: ["crm-sales-automation", "digital-marketing", "custom-software-development"],
    note: "Founder confirmed work with solar panel companies — client names and scope not yet provided.",
  },
  {
    slug: "software-technology",
    name: "Software & Technology Companies",
    summary:
      "Technology companies that need extra development capacity for mobile apps and AI.",
    challenges: [
      "Delivering mobile and AI features on tight timelines",
      "Adding AI agents to existing products",
      "Scaling development without hiring full teams",
    ],
    clients: [],
    workDone: "Android app development and AI agent development.",
    services: ["custom-software-development", "ai-business-automation"],
    note: "Client names not provided — confirm whether any can be named.",
  },
];
