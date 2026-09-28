// ─── Solutions by business problem ─────────────────────────────────────────
// The problem statements are quoted from the founder's brief (section 14):
// the things a customer actually says when they approach Ambitious Pedia.
// Each maps to the services that address it.

export interface Solution {
  slug: string;
  problem: string;
  /** What is usually going on underneath. */
  diagnosis: string;
  /** How we typically approach it. */
  approach: string;
  services: string[];
}

export const SOLUTIONS: Solution[] = [
  {
    slug: "leads-not-tracked",
    problem: "Our sales team doesn't track leads properly.",
    diagnosis:
      "Leads arrive from calls, the website, WhatsApp and exhibitions, and each salesperson keeps them differently. Follow-ups are missed and nobody can see the full pipeline.",
    approach:
      "We map your sales stages, set up a CRM that captures leads from every source, and automate follow-up reminders and reports.",
    services: ["crm-sales-automation", "integrations"],
  },
  {
    slug: "accounts-sales-disconnected",
    problem: "Our accounts and sales data are disconnected.",
    diagnosis:
      "Orders are recorded in one place and invoiced in another, so figures don't match and month-end reconciliation takes days.",
    approach:
      "We connect your CRM, ERP and accounting so orders, invoices and payments flow automatically — or consolidate them into one system where that makes more sense.",
    services: ["integrations", "erp-business-software"],
  },
  {
    slug: "excel-for-everything",
    problem: "We are using Excel for everything.",
    diagnosis:
      "Spreadsheets work until several people need the same data at once. Then versions multiply, formulas break and nobody trusts the numbers.",
    approach:
      "We identify which processes have outgrown Excel and move them to the right system — ERP, CRM or a focused custom application — including migrating your existing data.",
    services: ["erp-business-software", "custom-software-development"],
  },
  {
    slug: "need-an-erp",
    problem: "We need an ERP.",
    diagnosis:
      "The question is usually not which ERP is best, but which one fits your processes, team and budget — and how to implement it without disrupting operations.",
    approach:
      "We analyse your processes first, recommend a platform such as Zoho or ERPNext, then implement, migrate data, train your team and support you after go-live.",
    services: ["erp-business-software"],
  },
  {
    slug: "need-a-crm",
    problem: "We need a CRM.",
    diagnosis:
      "A CRM only helps if it mirrors how you actually sell and your team actually uses it.",
    approach:
      "We design the pipeline around your sales stages — lead, follow-up, quotation, negotiation, order — and automate the repetitive steps so adoption is easy.",
    services: ["crm-sales-automation"],
  },
  {
    slug: "automate-whatsapp",
    problem: "We want to automate WhatsApp.",
    diagnosis:
      "Customers already talk to you on WhatsApp, but replies, order updates and reminders are all typed by hand.",
    approach:
      "We automate WhatsApp messages and connect them to your CRM or ERP, so updates go out automatically and conversations are recorded against the right customer.",
    services: ["ai-business-automation", "integrations"],
  },
  {
    slug: "ai-in-business",
    problem: "We want AI in our business.",
    diagnosis:
      "Generic chatbots don't know your products, customers or procedures. Useful AI needs access to your own data and a clear job to do.",
    approach:
      "We identify where AI will save real time, then build assistants connected to your ERP, CRM and documents — for internal knowledge, sales support, customer queries or document processing.",
    services: ["ai-business-automation"],
  },
  {
    slug: "custom-application",
    problem: "We need a custom application.",
    diagnosis:
      "Your process is specific enough that standard software either doesn't fit or forces costly workarounds.",
    approach:
      "We scope the business problem first, then design and build a focused application — inventory, quotations, HR, portals or dashboards — that connects to your existing systems.",
    services: ["custom-software-development"],
  },
  {
    slug: "systems-dont-communicate",
    problem: "Our systems don't communicate with each other.",
    diagnosis:
      "Each tool works on its own, so the same information is typed into several places and errors creep in.",
    approach:
      "We connect your CRM, ERP, accounting, website, WhatsApp and internal tools through APIs so data is entered once and shared everywhere.",
    services: ["integrations"],
  },
  {
    slug: "servers-cloud-it",
    problem: "We need help with servers, cloud or IT.",
    diagnosis:
      "Infrastructure has grown piece by piece, with no clear backups, access control or anyone responsible for it.",
    approach:
      "We set up or clean up servers, cloud hosting, backups, networks, email and secure remote access — and support them going forward.",
    services: ["it-infrastructure-cloud"],
  },
  {
    slug: "more-leads",
    problem: "We need more leads through digital marketing.",
    diagnosis:
      "Marketing activity is running, but there is no clear link between what is spent and the enquiries and sales that come in.",
    approach:
      "We combine SEO, ads and social media with a lead-generating website and CRM tracking, so you can see which activity brings business.",
    services: ["digital-marketing", "website-development"],
  },
];
