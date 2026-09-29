// ─── Services ──────────────────────────────────────────────────────────────
// Five categories (founder's structure, 2026-09-29) → ten service pages.
// Business language first, platform names second. Never claim "certified"
// or "partner" status — Ambitious Pedia holds no Zoho/Microsoft/Frappe
// partnership yet. Describing a vendor's products (what Zoho One includes,
// what Microsoft 365 includes) is factual; our own services are listed
// separately under `capabilities` / `phases`.
//
// Slugs are public URLs — don't rename without adding a redirect.

export type CategoryId = "business" | "ai" | "custom" | "cloud" | "growth";

export type IconName =
  | "erp" | "crm" | "zoho" | "ai" | "code" | "web" | "link"
  | "server" | "mail" | "growth";

export interface Category {
  id: CategoryId;
  name: string;
  icon: IconName;
  summary: string;
  items: string[];
}

export interface Service {
  slug: string;
  category: CategoryId;
  name: string;
  shortName: string;
  icon: IconName;
  /** One line — cards, meta description. */
  summary: string;
  /** The key promise, shown large on the page. */
  keyMessage: string;
  /** 1–2 sentences under the H1. */
  intro: string;
  /** 3 short outcome bullets in the hero. */
  highlights: string[];
  problems: string[];
  capabilities: { title: string; points: string[] }[];
  platforms: string[];
  /** Detailed "platform" pages only: the vendor products covered. */
  products?: { name: string; text: string }[];
  productsTitle?: string;
  /** Detailed pages: how an engagement runs. */
  phases?: { title: string; text: string }[];
  faqs?: { q: string; a: string }[];
  related: string[];
  /** Internal flag — never rendered. */
  note?: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "business",
    name: "Business Technology",
    icon: "erp",
    summary: "ERP, CRM and Zoho — implemented around how your business works.",
    items: ["ERP Implementation", "CRM Implementation", "Zoho Solutions", "ERPNext Solutions", "Business Process Automation"],
  },
  {
    id: "ai",
    name: "AI & Automation",
    icon: "ai",
    summary: "AI assistants and automations connected to your own data.",
    items: ["AI Business Assistants", "AI Knowledge Assistants", "AI + ERP/CRM Integration", "WhatsApp Automation", "Workflow Automation"],
  },
  {
    id: "custom",
    name: "Custom Technology",
    icon: "code",
    summary: "Applications, websites and integrations built for your process.",
    items: ["Custom Software", "Web Applications", "Business Applications", "API Development", "System Integrations"],
  },
  {
    id: "cloud",
    name: "IT & Cloud",
    icon: "server",
    summary: "Cloud, servers, business email and the infrastructure underneath.",
    items: ["Cloud / VPS", "Microsoft 365 & Email", "Server Solutions", "Backup Solutions", "Deployment & Administration"],
  },
  {
    id: "growth",
    name: "Digital Growth",
    icon: "growth",
    summary: "Marketing measured in enquiries and sales, not clicks.",
    items: ["SEO", "Digital Marketing", "Lead Generation", "Marketing Automation"],
  },
];

export const SERVICES: Service[] = [
  // ── Business Technology ──────────────────────────────────────────────
  {
    slug: "zoho-solutions",
    category: "business",
    name: "Zoho Solutions",
    shortName: "Zoho Solutions",
    icon: "zoho",
    summary: "Zoho One, Zoho CRM, Zoho Books and Zoho ERP — set up, customised and connected for your business.",
    keyMessage: "Run sales, finance and operations on one connected Zoho platform — configured for how you actually work.",
    intro:
      "Zoho covers almost every business function, which is exactly why it needs to be set up with care. We plan, configure, migrate, automate and train, so your team gets a system that fits — not dozens of apps nobody uses.",
    highlights: ["Right apps, right licences", "Your data migrated cleanly", "Workflows automated from day one"],
    problems: [
      "You bought Zoho One but use only a couple of apps",
      "CRM, Books and inventory don't share data",
      "Nobody configured workflows, so work is still manual",
      "Unsure whether Zoho One or individual apps make sense",
    ],
    productsTitle: "The Zoho platform",
    products: [
      { name: "Zoho One", text: "Zoho's all-in-one suite — most Zoho applications under a single licence and a single sign-on." },
      { name: "Zoho ERP", text: "Zoho's ERP offering for finance, inventory, purchasing and operations in one system." },
      { name: "Zoho CRM", text: "Leads, deals, pipelines, quotations and sales automation." },
      { name: "Zoho Books", text: "Accounting, invoicing, GST-ready billing and payments." },
      { name: "Zoho Inventory", text: "Stock, warehouses, orders and fulfilment." },
      { name: "Zoho People", text: "HR records, attendance, leave and employee self-service." },
      { name: "Zoho Desk", text: "Customer support tickets across email, phone and chat." },
      { name: "Zoho Creator", text: "Low-code custom apps when a standard app doesn't fit." },
      { name: "Zoho Analytics", text: "Dashboards and reports across all your Zoho data." },
    ],
    capabilities: [
      { title: "Plan", points: ["Process mapping", "Zoho One vs. individual apps", "Licence planning"] },
      { title: "Implement", points: ["Configuration & customisation", "Data migration from Excel, Tally or other tools", "Users, roles & permissions"] },
      { title: "Automate", points: ["Workflows & approvals", "Blueprints for sales stages", "Email & WhatsApp notifications"] },
      { title: "Connect & adopt", points: ["Zoho ↔ website, WhatsApp & other systems", "Dashboards & reports", "Team training & support"] },
    ],
    phases: [
      { title: "Discovery", text: "We map your sales, finance and operations processes and decide which Zoho apps you need." },
      { title: "Design", text: "Modules, fields, pipelines, approval rules and user roles — agreed before we build." },
      { title: "Setup & migration", text: "We configure the apps and move your customers, products and open transactions across." },
      { title: "Automation & integration", text: "Workflows, notifications and connections to your website, WhatsApp and other tools." },
      { title: "Training & go-live", text: "Hands-on sessions per team, then a supported go-live." },
      { title: "Ongoing support", text: "Changes, new automations and new apps as your business grows." },
    ],
    platforms: ["Zoho One", "Zoho ERP", "Zoho CRM", "Zoho Books", "Zoho Inventory", "Zoho People", "Zoho Creator", "Deluge scripting", "Zoho APIs"],
    faqs: [
      { q: "Should we buy Zoho One or individual Zoho apps?", a: "It depends on how many apps and users you need. If you'll use several Zoho apps across teams, Zoho One is usually simpler; if you only need CRM or Books, individual apps can cost less. We work this out with you before you buy." },
      { q: "Can you take over a Zoho setup someone else started?", a: "Yes. We review what's configured, fix what isn't working and complete the setup — without starting over where it isn't needed." },
      { q: "Can you move our data from Excel or Tally into Zoho?", a: "Yes. Customers, products, opening balances and open transactions can be migrated, cleaned and checked before go-live." },
      { q: "Are you a Zoho partner?", a: "Not yet — we work with Zoho as independent implementers. You buy licences directly from Zoho; we plan, configure, automate and support." },
    ],
    related: ["crm-sales-automation", "erp-business-software", "integrations"],
    note: "Confirm with founder which Zoho apps they have implemented for clients. Update the partner FAQ when the Zoho partnership is in place.",
  },
  {
    slug: "erp-business-software",
    category: "business",
    name: "ERP Implementation",
    shortName: "ERP Implementation",
    icon: "erp",
    summary: "ERPNext, Zoho and Tally-connected ERP, implemented around your real processes.",
    keyMessage: "We don't just sell software. We implement it around how your business actually works.",
    intro:
      "Buying an ERP is easy. Making it match your sales, purchase, stock, production and accounts — and getting your team to use it — is the real work.",
    highlights: ["One source of truth", "Reports in minutes, not days", "A team that actually uses it"],
    problems: [
      "Sales, stock and accounts live in separate spreadsheets",
      "The software you bought is only half used",
      "Reports take days to compile by hand",
      "Nobody trusts which system has the right numbers",
    ],
    capabilities: [
      { title: "Plan", points: ["Business process analysis", "Software selection", "Implementation roadmap"] },
      { title: "Implement", points: ["Configuration & customisation", "Data migration", "Users, roles & permissions"] },
      { title: "Automate & connect", points: ["Workflow automation", "Reports & dashboards", "Integration with other systems"] },
      { title: "Adopt", points: ["Team training", "Ongoing support"] },
    ],
    platforms: ["ERPNext", "Zoho ERP", "Zoho One", "Zoho Books", "Tally-connected solutions"],
    faqs: [
      { q: "ERPNext or Zoho — which is right for us?", a: "Both are strong. ERPNext is open-source and very flexible for manufacturing and inventory-heavy businesses; Zoho is a polished cloud suite with many connected apps. We recommend one after understanding your processes." },
      { q: "Can we keep using Tally for accounts?", a: "Often yes. We can connect your ERP or business applications to Tally so accounts stay where your accountant expects them." },
    ],
    related: ["zoho-solutions", "crm-sales-automation", "integrations"],
  },
  {
    slug: "crm-sales-automation",
    category: "business",
    name: "CRM Implementation & Sales Automation",
    shortName: "CRM & Sales Automation",
    icon: "crm",
    summary: "Every lead, follow-up, quotation and order in one system — with the reminders automated.",
    keyMessage: "Every lead tracked, every follow-up on time — from first enquiry to repeat business.",
    intro:
      "When leads live in notebooks, WhatsApp chats and personal phones, follow-ups get missed. We set up a CRM around your sales stages and automate the repetitive parts.",
    highlights: ["No lead forgotten", "Quotations in clicks", "Pipeline visible to management"],
    problems: [
      "Leads are not tracked properly",
      "Follow-ups depend on someone remembering",
      "Quotations are made manually in Word or Excel",
      "No clear view of the sales pipeline",
    ],
    capabilities: [
      { title: "Set up", points: ["CRM implementation", "Lead & customer management", "Pipeline designed around your stages"] },
      { title: "Sell", points: ["Quotation management", "Follow-up automation", "Sales-stage automation"] },
      { title: "Communicate", points: ["Email & WhatsApp automation", "Marketing automation"] },
      { title: "Measure", points: ["Sales reports & dashboards"] },
    ],
    platforms: ["Zoho CRM", "Zoho One", "ERPNext CRM", "WhatsApp", "Email"],
    related: ["zoho-solutions", "digital-marketing", "ai-business-automation"],
  },

  // ── AI & Automation ──────────────────────────────────────────────────
  {
    slug: "ai-business-automation",
    category: "ai",
    name: "AI & Business Automation",
    shortName: "AI & Automation",
    icon: "ai",
    summary: "AI assistants and automations connected to your ERP, CRM and documents — not a generic chatbot.",
    keyMessage: "AI that works with your business processes and data — not just a generic chatbot.",
    intro:
      "Useful AI needs your real information: orders, stock, customers and procedures. We connect assistants and automations to the systems you already use — including ERPNext, where we build AI assistants with OpenClaw.",
    highlights: ["Answers from your own data", "Repetitive work automated", "Works in WhatsApp & Telegram"],
    problems: [
      "Staff answer the same internal questions all day",
      "Data is re-typed from documents into systems",
      "Reports are prepared by hand every week",
      "Customers wait for replies outside office hours",
    ],
    capabilities: [
      { title: "AI assistants", points: ["AI business assistants", "Knowledge assistants", "AI connected with ERP / CRM", "AI sales assistance"] },
      { title: "Customer-facing", points: ["AI customer support", "WhatsApp automation", "Telegram automation"] },
      { title: "Back office", points: ["Document & data processing", "Automated reporting", "Workflow automation"] },
    ],
    platforms: ["ERPNext", "OpenClaw", "Zoho", "WhatsApp", "Telegram", "Python", "Node.js"],
    faqs: [
      { q: "Is our business data safe with AI?", a: "We design assistants to access only the data they need, with the permissions you define, and can keep processing within your own infrastructure where required." },
      { q: "Do we need to replace our existing systems?", a: "No. The point is to connect AI to the ERP, CRM and documents you already have." },
    ],
    related: ["integrations", "erp-business-software", "custom-software-development"],
  },

  // ── Custom Technology ────────────────────────────────────────────────
  {
    slug: "custom-software-development",
    category: "custom",
    name: "Custom Business Applications",
    shortName: "Custom Software",
    icon: "code",
    summary: "Inventory, HRMS, quotation systems, portals and dashboards — built when off-the-shelf doesn't fit.",
    keyMessage: "When standard software doesn't fit your process, we build the application that does.",
    intro:
      "Some processes are too specific for a standard product — or you only need one part of a large system. We build focused business applications and connect them to your existing tools.",
    highlights: ["Built around your workflow", "Connected to your systems", "You own the result"],
    problems: [
      "Standard software forces you to change how you work",
      "You pay for a big system but use one module",
      "Customers or dealers need their own portal",
      "Critical processes run on fragile spreadsheets",
    ],
    capabilities: [
      { title: "Operations", points: ["Inventory management systems", "Sales quotation systems", "Workflow applications"] },
      { title: "People & customers", points: ["HRMS", "CRM", "Customer & internal portals"] },
      { title: "Data & connectivity", points: ["Dashboards", "Web applications", "API development"] },
    ],
    platforms: ["React.js", "Next.js", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "Supabase", "Python"],
    related: ["integrations", "ai-business-automation", "website-development"],
  },
  {
    slug: "website-development",
    category: "custom",
    name: "Business Websites & Web Applications",
    shortName: "Websites & Web Apps",
    icon: "web",
    summary: "Fast, SEO-friendly websites built to generate enquiries — connected to your CRM.",
    keyMessage: "A website should bring in enquiries, not just look good.",
    intro:
      "Corporate, product and B2B websites with speed, search visibility and lead capture designed in — and enquiries flowing straight into your CRM.",
    highlights: ["Enquiries straight into CRM", "Built for Google", "Fast on every device"],
    problems: [
      "The website looks dated and brings no enquiries",
      "Enquiries arrive by email and get lost",
      "Pages are slow and don't rank",
      "Nobody can update the site easily",
    ],
    capabilities: [
      { title: "Websites", points: ["Corporate & B2B websites", "Product websites", "E-commerce"] },
      { title: "Web applications", points: ["React / Next.js applications", "Custom web apps", "API integrations"] },
      { title: "Growth-ready", points: ["SEO-friendly development", "Performance optimisation", "Maintenance"] },
    ],
    platforms: ["Next.js", "React.js", "Node.js", "Vercel", "Zoho CRM lead capture"],
    related: ["digital-marketing", "crm-sales-automation", "integrations"],
  },
  {
    slug: "integrations",
    category: "custom",
    name: "System Integrations & APIs",
    shortName: "Integrations & APIs",
    icon: "link",
    summary: "Connect CRM, ERP, accounting, website, WhatsApp and AI so data is entered once.",
    keyMessage: "Enter information once. Let your systems share it automatically.",
    intro:
      "Most growing businesses use good tools that don't talk to each other, so the same order is typed three times. We connect them so data flows automatically.",
    highlights: ["No double data entry", "Same numbers everywhere", "Real-time updates"],
    problems: [
      "The same data is typed into several systems",
      "Accounts and sales data are disconnected",
      "Website enquiries are copied into the CRM by hand",
      "Different systems show different numbers",
    ],
    capabilities: [
      { title: "Business systems", points: ["CRM ↔ ERP", "Zoho ↔ Accounting", "Tally ↔ Business apps"] },
      { title: "Customer channels", points: ["Website ↔ CRM", "CRM ↔ WhatsApp"] },
      { title: "AI & internal tools", points: ["ERPNext ↔ AI", "APIs ↔ Internal applications"] },
    ],
    platforms: ["Zoho", "ERPNext", "Tally", "WhatsApp", "REST APIs", "Webhooks"],
    related: ["erp-business-software", "ai-business-automation", "custom-software-development"],
  },

  // ── IT & Cloud ───────────────────────────────────────────────────────
  {
    slug: "it-infrastructure-cloud",
    category: "cloud",
    name: "Cloud & IT Infrastructure",
    shortName: "Cloud & IT Infrastructure",
    icon: "server",
    summary: "Cloud servers, backups, networks and secure access — set up and looked after for you.",
    keyMessage: "Reliable IT infrastructure for growing businesses — in the cloud or in your office.",
    intro:
      "Your software is only as dependable as what runs underneath it. We set up and manage cloud servers, deployments, backups, networks and secure access — and help with hardware when you need it.",
    highlights: ["Systems that stay up", "Data backed up", "Secure access from anywhere"],
    problems: [
      "No reliable backup of business data",
      "Servers go down with nobody to call",
      "Staff can't access systems securely from outside",
      "Hosting, domains and DNS are a mess",
    ],
    productsTitle: "What we cover",
    products: [
      { name: "Cloud servers & VPS", text: "Right-sized cloud servers for your ERP, applications and websites." },
      { name: "Application deployment", text: "ERP, web apps and databases deployed, secured and monitored." },
      { name: "Windows Server & Linux", text: "Installation, configuration and ongoing administration." },
      { name: "Backup & recovery", text: "Automated backups with tested restores — cloud and on-premise." },
      { name: "Network setup", text: "Office networks, Wi-Fi, firewalls and VPN." },
      { name: "Security & access", text: "User access, multi-factor authentication and secure remote access." },
      { name: "Domains, DNS & hosting", text: "Domains, DNS records, SSL certificates and hosting set up correctly." },
      { name: "Hardware procurement", text: "Laptops, desktops, servers and networking equipment when you need them." },
    ],
    capabilities: [
      { title: "Cloud & servers", points: ["Cloud / VPS setup", "Windows Server & Linux", "Application deployment"] },
      { title: "Protect", points: ["Backups & recovery", "Security & access management", "Remote access"] },
      { title: "Maintain", points: ["Monitoring & administration", "Updates & patching", "Support when things break"] },
    ],
    phases: [
      { title: "Assess", text: "We review your current servers, hosting, backups, network and access." },
      { title: "Plan", text: "A clear recommendation: what to move to the cloud, what to keep, and the cost." },
      { title: "Set up & migrate", text: "Servers configured, applications and data moved with minimal downtime." },
      { title: "Secure", text: "Backups, access control and multi-factor authentication in place and tested." },
      { title: "Manage", text: "Ongoing monitoring, updates and support." },
    ],
    platforms: ["Cloud / VPS", "Windows Server", "Linux", "Docker", "Nginx", "SSL", "DNS"],
    faqs: [
      { q: "Should we move our servers to the cloud?", a: "Not always. Cloud suits most business applications and remote teams; some workloads are cheaper or faster on-premise. We recommend based on your systems, users and budget." },
      { q: "Can you host our ERP or custom application?", a: "Yes — we deploy, secure and maintain ERPs such as ERPNext and custom applications on cloud servers." },
      { q: "Do you provide ongoing IT support?", a: "Yes. After setup we can monitor, update and support your infrastructure." },
    ],
    related: ["microsoft-365", "custom-software-development", "erp-business-software"],
    note: "Confirm with founder which cloud providers they deploy on (AWS / Azure / GCP / specific VPS) before naming them.",
  },
  {
    slug: "microsoft-365",
    category: "cloud",
    name: "Microsoft 365 & Business Email",
    shortName: "Microsoft 365 & Email",
    icon: "mail",
    summary: "Professional business email and Microsoft 365 — set up, migrated and secured.",
    keyMessage: "Professional email on your own domain, with Teams, OneDrive and Office — set up properly.",
    intro:
      "Email is the one system every business depends on. We set up Microsoft 365 and business email on your domain, migrate existing mailboxes and configure security so messages actually get delivered.",
    highlights: ["Email on your own domain", "Mailboxes migrated safely", "Delivered, not in spam"],
    problems: [
      "Staff use personal Gmail or free email for business",
      "Emails land in customers' spam folders",
      "Moving to a new provider feels risky",
      "Nobody manages users, passwords or licences",
    ],
    productsTitle: "Microsoft 365 for business",
    products: [
      { name: "Exchange Online email", text: "Business mailboxes, shared calendars and contacts on your own domain." },
      { name: "Microsoft Teams", text: "Chat, meetings and calls for your team." },
      { name: "OneDrive", text: "Cloud storage for each user's files, synced across devices." },
      { name: "SharePoint", text: "Shared team sites and document libraries." },
      { name: "Office apps", text: "Word, Excel, PowerPoint and Outlook — desktop, web and mobile, depending on plan." },
      { name: "Security & admin", text: "Multi-factor authentication, user management and admin controls." },
    ],
    capabilities: [
      { title: "Set up", points: ["Plan & licence selection", "Domain & DNS (MX, SPF, DKIM, DMARC)", "Mailboxes, groups & shared mailboxes"] },
      { title: "Migrate", points: ["From GoDaddy, cPanel, Gmail or other providers", "Mail, contacts & calendars", "Minimal downtime cut-over"] },
      { title: "Secure & manage", points: ["Multi-factor authentication", "User & licence management", "Teams & OneDrive setup", "Ongoing support"] },
    ],
    phases: [
      { title: "Review", text: "Your current email provider, domain, users and what needs to move." },
      { title: "Plan", text: "The right Microsoft 365 plan per user and a migration schedule." },
      { title: "Configure", text: "Tenant, domain verification, DNS records and mailboxes." },
      { title: "Migrate", text: "Existing email, contacts and calendars moved across, then MX records switched." },
      { title: "Secure & train", text: "MFA, admin roles, Outlook and Teams set up on every device." },
    ],
    platforms: ["Microsoft 365", "Exchange Online", "Microsoft Teams", "OneDrive", "SharePoint", "Outlook"],
    faqs: [
      { q: "Will we lose emails when we switch to Microsoft 365?", a: "No — existing mail, contacts and calendars are migrated before the switch, and the cut-over is planned to avoid downtime." },
      { q: "Why do our emails go to spam?", a: "Usually missing or incorrect SPF, DKIM and DMARC records on your domain. We set these up correctly as part of every email setup." },
      { q: "Do we buy licences from you?", a: "You can buy Microsoft 365 licences directly from Microsoft or an authorised reseller; we plan, configure, migrate and support." },
    ],
    related: ["it-infrastructure-cloud", "integrations", "zoho-solutions"],
    note: "Founder asked for MS solutions 'like email services' — confirm scope (M365 only, or also Google Workspace / other email providers). Update licence FAQ if they become a reseller.",
  },

  // ── Digital Growth ───────────────────────────────────────────────────
  {
    slug: "digital-marketing",
    category: "growth",
    name: "Digital Marketing & Lead Generation",
    shortName: "Digital Marketing",
    icon: "growth",
    summary: "SEO, ads and social media connected to real leads and sales — not just traffic.",
    keyMessage: "Marketing measured by enquiries and sales, not clicks and likes.",
    intro:
      "Traffic only matters if it turns into enquiries. We run SEO, ads and social media with tracking through to the CRM, so you see what actually brings business.",
    highlights: ["More qualified enquiries", "Spend linked to sales", "Clear monthly reporting"],
    problems: [
      "Not enough enquiries from the right customers",
      "Ad spend with no link to sales",
      "The website doesn't rank for what customers search",
      "No one reports what marketing achieves",
    ],
    capabilities: [
      { title: "Be found", points: ["SEO", "Google Search Console", "Content strategy"] },
      { title: "Generate demand", points: ["Google Ads / PPC", "Social media marketing", "Lead generation"] },
      { title: "Convert & measure", points: ["Marketing automation", "Analytics & reporting"] },
    ],
    platforms: ["Google Search Console", "Google Ads", "Google Analytics", "Meta", "LinkedIn"],
    related: ["website-development", "crm-sales-automation", "ai-business-automation"],
  },
];

/** Pages with the long-form "platform" layout (products + phases + FAQ). */
export const FEATURED_SLUGS = ["zoho-solutions", "microsoft-365", "it-infrastructure-cloud"];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
export function getServicesByCategory(id: CategoryId) {
  return SERVICES.filter((s) => s.category === id);
}
export function getCategory(id: CategoryId) {
  return CATEGORIES.find((c) => c.id === id)!;
}
