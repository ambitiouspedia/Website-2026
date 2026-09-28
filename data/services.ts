// ─── Services ──────────────────────────────────────────────────────────────
// Copy is written from the founder's positioning brief (2026-09-28): business
// language first, platform/technology names second. Do not add claims such as
// "certified partner", client counts or outcome percentages — Ambitious Pedia
// is not (yet) a certified Zoho or Frappe partner, and no measured results
// have been supplied.

export type ServiceGroupId = "business" | "technology" | "ai" | "growth";

export interface ServiceGroup {
  id: ServiceGroupId;
  name: string;
  summary: string;
  /** Sub-capabilities listed on the group card, each pointing at a service page. */
  items: { label: string; slug: string }[];
}

export interface Service {
  slug: string;
  group: ServiceGroupId;
  /** Business-language name used everywhere as the primary label. */
  name: string;
  /** Short nav/card label. */
  shortName: string;
  icon: IconName;
  /** One-line promise shown on cards and as the meta description. */
  summary: string;
  /** The key message for the service, shown prominently on its page. */
  keyMessage: string;
  intro: string;
  /** Problems a business owner would recognise. */
  problems: string[];
  /** What we actually do — grouped capability list. */
  capabilities: { title: string; points: string[] }[];
  /** Platforms/technology — deliberately secondary to the business copy. */
  platforms: string[];
  platformsNote?: string;
  related: string[];
}

export type IconName =
  | "erp"
  | "crm"
  | "ai"
  | "code"
  | "web"
  | "server"
  | "growth"
  | "link";

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: "business",
    name: "Business Transformation",
    summary:
      "Move sales, accounts and operations out of spreadsheets and into systems that fit how you work.",
    items: [
      { label: "ERP", slug: "erp-business-software" },
      { label: "CRM", slug: "crm-sales-automation" },
      { label: "Accounting", slug: "erp-business-software" },
      { label: "Process Automation", slug: "ai-business-automation" },
    ],
  },
  {
    id: "technology",
    name: "Technology",
    summary:
      "Custom applications, websites, integrations and the IT infrastructure that keeps them running.",
    items: [
      { label: "Custom Software", slug: "custom-software-development" },
      { label: "Web Development", slug: "website-development" },
      { label: "Integrations", slug: "integrations" },
      { label: "Cloud & IT Infrastructure", slug: "it-infrastructure-cloud" },
    ],
  },
  {
    id: "ai",
    name: "AI & Automation",
    summary:
      "AI assistants and automations that work with your own processes and data.",
    items: [
      { label: "AI Assistants", slug: "ai-business-automation" },
      { label: "Business Automation", slug: "ai-business-automation" },
      { label: "WhatsApp / Telegram Automation", slug: "ai-business-automation" },
      { label: "AI Integrations", slug: "integrations" },
    ],
  },
  {
    id: "growth",
    name: "Growth",
    summary:
      "Marketing that is measured by leads and sales, connected to your CRM.",
    items: [
      { label: "SEO", slug: "digital-marketing" },
      { label: "Digital Marketing", slug: "digital-marketing" },
      { label: "Lead Generation", slug: "digital-marketing" },
      { label: "Marketing Automation", slug: "crm-sales-automation" },
    ],
  },
];

export const SERVICES: Service[] = [
  {
    slug: "erp-business-software",
    group: "business",
    name: "ERP & Business Software Implementation",
    shortName: "ERP & Business Software",
    icon: "erp",
    summary:
      "ERP, accounting and business software implemented around your actual business processes.",
    keyMessage:
      "We don't just sell software. We implement it according to how your business actually works.",
    intro:
      "Buying an ERP is the easy part. Getting it to match your sales, purchase, inventory, production and accounts processes — and getting your team to use it — is where most implementations struggle. We start with your processes, recommend the right platform, then configure, migrate, train and support.",
    problems: [
      "Sales, stock and accounts live in different spreadsheets",
      "The software you bought is only half used",
      "Reports take days to compile by hand",
      "Nobody is sure which system has the correct numbers",
    ],
    capabilities: [
      {
        title: "Plan",
        points: [
          "Business process analysis",
          "Software selection",
          "Implementation roadmap",
        ],
      },
      {
        title: "Implement",
        points: [
          "Configuration and customization",
          "Data migration from Excel or old systems",
          "User setup, roles and permissions",
        ],
      },
      {
        title: "Automate & connect",
        points: [
          "Workflow automation",
          "Reports and dashboards",
          "Integration with your other systems",
        ],
      },
      {
        title: "Adopt",
        points: ["Team training", "Ongoing support and improvements"],
      },
    ],
    platforms: [
      "Zoho One",
      "Zoho CRM",
      "Zoho Books",
      "ERPNext",
      "Tally-related solutions",
      "Other business management systems",
    ],
    platformsNote:
      "We recommend a platform after understanding your process — not before.",
    related: ["crm-sales-automation", "integrations", "ai-business-automation"],
  },
  {
    slug: "crm-sales-automation",
    group: "business",
    name: "CRM Implementation & Sales Automation",
    shortName: "CRM & Sales Automation",
    icon: "crm",
    summary:
      "Manage every lead, follow-up, quotation and order in one system — with the reminders automated.",
    keyMessage:
      "Every lead tracked, every follow-up on time, every customer visible — from first enquiry to repeat business.",
    intro:
      "When leads live in notebooks, WhatsApp chats and individual salespeople's phones, follow-ups get missed and customers slip away. We set up a CRM around your sales stages and automate the repetitive parts, so your team spends its time selling.",
    problems: [
      "Leads are not tracked properly",
      "Follow-ups depend on someone remembering",
      "Quotations are made manually in Word or Excel",
      "Management has no clear view of the sales pipeline",
    ],
    capabilities: [
      {
        title: "Set up",
        points: [
          "CRM implementation",
          "Lead and customer management",
          "Sales pipeline designed around your stages",
        ],
      },
      {
        title: "Sell",
        points: [
          "Quotation management",
          "Follow-up automation",
          "Sales-stage automation",
        ],
      },
      {
        title: "Communicate",
        points: [
          "Email and WhatsApp automation",
          "Customer communication",
          "Marketing automation",
        ],
      },
      {
        title: "Measure",
        points: ["Sales reports and dashboards"],
      },
    ],
    platforms: ["Zoho CRM", "Zoho One", "ERPNext CRM", "WhatsApp", "Email"],
    related: ["erp-business-software", "digital-marketing", "integrations"],
  },
  {
    slug: "ai-business-automation",
    group: "ai",
    name: "AI & Business Automation",
    shortName: "AI & Automation",
    icon: "ai",
    summary:
      "AI assistants and automations connected to your ERP, CRM and documents — not a generic chatbot.",
    keyMessage:
      "AI that works with your business processes and data — not just a generic chatbot.",
    intro:
      "Useful business AI needs access to your real information: orders, stock, customers, documents and procedures. We build assistants and automations that connect to the systems you already use, and we automate repetitive work in WhatsApp, Telegram, email and reports. We are actively building AI assistants that work with ERPNext and OpenClaw.",
    problems: [
      "Staff spend hours answering the same internal questions",
      "Data is re-typed from documents into systems",
      "Reports are prepared manually every week",
      "Customers wait for replies outside office hours",
    ],
    capabilities: [
      {
        title: "AI assistants",
        points: [
          "AI business assistants",
          "Internal company knowledge assistants",
          "AI connected with ERP / CRM",
          "AI-based sales assistance",
        ],
      },
      {
        title: "Customer-facing",
        points: [
          "AI-based customer support",
          "WhatsApp automation",
          "Telegram automation",
        ],
      },
      {
        title: "Back-office automation",
        points: [
          "AI document and data processing",
          "Automated reporting",
          "Workflow automation",
        ],
      },
    ],
    platforms: [
      "ERPNext",
      "OpenClaw",
      "Zoho",
      "WhatsApp",
      "Telegram",
      "Python",
      "Node.js",
    ],
    related: ["integrations", "erp-business-software", "custom-software-development"],
  },
  {
    slug: "custom-software-development",
    group: "technology",
    name: "Custom Business Applications",
    shortName: "Custom Software",
    icon: "code",
    summary:
      "Business applications built for your workflow when off-the-shelf software doesn't fit.",
    keyMessage:
      "When existing software doesn't fit your process, we build the application that does.",
    intro:
      "Some processes are too specific for a standard product — or you only need one part of a large system. We design and build focused business applications, portals and dashboards, and connect them to the tools you already use.",
    problems: [
      "Off-the-shelf software forces you to change how you work",
      "You pay for a large system but use one module",
      "Customers or dealers need their own portal",
      "Critical processes run on fragile spreadsheets",
    ],
    capabilities: [
      {
        title: "Operations",
        points: [
          "Inventory management systems",
          "Sales quotation systems",
          "Workflow applications",
        ],
      },
      {
        title: "People & customers",
        points: ["HRMS", "CRM", "Customer portals", "Internal business portals"],
      },
      {
        title: "Data & connectivity",
        points: ["Dashboards", "Web applications", "API integrations"],
      },
    ],
    platforms: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Supabase",
      "JavaScript",
      "Python",
    ],
    platformsNote:
      "We choose the technology for maintainability and fit — you own the result.",
    related: ["integrations", "ai-business-automation", "website-development"],
  },
  {
    slug: "website-development",
    group: "technology",
    name: "Business Websites & Web Applications",
    shortName: "Website Development",
    icon: "web",
    summary:
      "Websites built to generate enquiries — fast, SEO-friendly and connected to your CRM.",
    keyMessage:
      "A website should not just look good. It should bring in enquiries and support your sales team.",
    intro:
      "We build corporate, product and B2B websites and web applications with performance, search visibility and lead capture designed in from the start — and enquiries flowing straight into your CRM instead of an inbox.",
    problems: [
      "The website looks outdated and brings no enquiries",
      "Enquiries arrive by email and get lost",
      "Pages are slow and don't show up on Google",
      "Nobody can update the site easily",
    ],
    capabilities: [
      {
        title: "Websites",
        points: [
          "Corporate websites",
          "Product websites",
          "B2B websites",
          "E-commerce",
        ],
      },
      {
        title: "Web applications",
        points: ["React-based websites", "Custom web applications", "API integrations"],
      },
      {
        title: "Growth-ready",
        points: [
          "SEO-friendly development",
          "Performance optimization",
          "Website maintenance",
        ],
      },
    ],
    platforms: ["React.js", "Next.js", "Node.js", "Vercel", "Zoho / CRM lead capture"],
    related: ["digital-marketing", "crm-sales-automation", "integrations"],
  },
  {
    slug: "integrations",
    group: "technology",
    name: "System Integrations",
    shortName: "Integrations",
    icon: "link",
    summary:
      "Connect CRM, ERP, accounting, website, WhatsApp and AI so data is entered once.",
    keyMessage:
      "Enter information once. Let your systems share it automatically.",
    intro:
      "Most growing businesses use several good tools that don't talk to each other — so the same customer, order or invoice is typed again and again. We connect your systems so data flows between them automatically and everyone works from the same information.",
    problems: [
      "The same data is entered in multiple systems",
      "Accounts and sales data are disconnected",
      "Website enquiries are copied into the CRM by hand",
      "Systems give different numbers for the same thing",
    ],
    capabilities: [
      {
        title: "Business systems",
        points: ["Zoho ↔ Accounting", "Tally ↔ Business applications", "CRM ↔ ERP"],
      },
      {
        title: "Customer channels",
        points: ["Website ↔ CRM", "Zoho ↔ Website", "CRM ↔ WhatsApp"],
      },
      {
        title: "AI & internal tools",
        points: ["ERPNext ↔ AI", "APIs ↔ Internal applications"],
      },
    ],
    platforms: ["Zoho", "ERPNext", "Tally", "WhatsApp", "REST APIs", "Webhooks"],
    related: ["erp-business-software", "ai-business-automation", "custom-software-development"],
  },
  {
    slug: "it-infrastructure-cloud",
    group: "technology",
    name: "IT Infrastructure & Cloud Solutions",
    shortName: "IT Infrastructure & Cloud",
    icon: "server",
    summary:
      "Reliable servers, cloud, backups, email and networks for growing businesses.",
    keyMessage: "Reliable IT infrastructure for growing businesses.",
    intro:
      "Your software is only as dependable as the infrastructure underneath it. We set up and look after servers, cloud deployments, backups, networks, business email and secure access — and can help with hardware procurement when you need it.",
    problems: [
      "No reliable backup of business data",
      "Servers or systems go down with nobody to call",
      "Staff can't access systems securely from outside the office",
      "Email and domain setup is messy",
    ],
    capabilities: [
      {
        title: "Servers & cloud",
        points: [
          "Server setup and administration",
          "Windows Server and Linux servers",
          "Cloud / VPS deployment",
          "Application deployment",
        ],
      },
      {
        title: "Protect",
        points: ["Backup solutions", "Security and access management", "Remote access"],
      },
      {
        title: "Essentials",
        points: [
          "Network setup",
          "Domain and hosting",
          "Business email",
          "Hardware procurement",
        ],
      },
    ],
    platforms: ["Windows Server", "Linux", "Cloud / VPS", "Business email", "Networking"],
    related: ["custom-software-development", "erp-business-software", "integrations"],
  },
  {
    slug: "digital-marketing",
    group: "growth",
    name: "Digital Marketing & Lead Generation",
    shortName: "Digital Marketing",
    icon: "growth",
    summary:
      "SEO, ads and social media connected to real leads and sales — not just traffic.",
    keyMessage:
      "Marketing measured by enquiries and sales, not just clicks and likes.",
    intro:
      "Traffic only matters if it turns into enquiries your sales team can follow up. We run SEO, paid ads and social media with tracking through to the CRM, so you can see which activity actually brings business.",
    problems: [
      "You need more enquiries from the right customers",
      "Ad spend with no clear link to sales",
      "The website doesn't rank for what customers search",
      "No one reports what marketing is achieving",
    ],
    capabilities: [
      {
        title: "Be found",
        points: ["SEO", "Website SEO", "Google Search Console", "Content strategy"],
      },
      {
        title: "Generate demand",
        points: [
          "Google Ads / PPC",
          "Social media marketing",
          "Business / product promotion",
          "Lead generation",
        ],
      },
      {
        title: "Convert & measure",
        points: ["Marketing automation", "Analytics and reporting"],
      },
    ],
    platforms: [
      "Google Search Console",
      "Google Ads",
      "Google Analytics",
      "Meta (Facebook / Instagram)",
      "LinkedIn",
    ],
    related: ["website-development", "crm-sales-automation", "ai-business-automation"],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServicesByGroup(group: ServiceGroupId) {
  return SERVICES.filter((s) => s.group === group);
}

export function getGroup(id: ServiceGroupId) {
  return SERVICE_GROUPS.find((g) => g.id === id)!;
}
