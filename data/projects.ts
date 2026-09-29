// ─── Projects ──────────────────────────────────────────────────────────────
// Solution types the founder confirmed Ambitious Pedia has delivered
// (2026-09-29): ERPNext + AI assistant, CRM, inventory, sales quotation,
// HRMS, WhatsApp automation, business websites, Android apps & AI agents.
// Client names only where the founder named them. No invented metrics —
// `outcome` describes what the solution changes, not a measured result.

export interface Project {
  slug: string;
  title: string;
  tag: string;
  icon: "ai" | "crm" | "box" | "file" | "users" | "chat" | "web" | "phone";
  client?: string;
  problem: string;
  solution: string;
  technology: string[];
  outcome: string;
  services: string[];
  note?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "erpnext-ai-assistant",
    title: "ERPNext + AI Assistant",
    tag: "AI & Automation",
    icon: "ai",
    problem: "Answers about orders, stock and customers were locked inside the ERP — staff had to search screens or ask colleagues.",
    solution: "An AI assistant connected to ERPNext that answers business questions in plain language from live ERP data.",
    technology: ["ERPNext", "OpenClaw", "AI assistant"],
    outcome: "Staff get answers from live business data in seconds, without navigating the ERP.",
    services: ["ai-business-automation", "erp-business-software"],
  },
  {
    slug: "crm-implementation",
    title: "CRM Implementation",
    tag: "Business Technology",
    icon: "crm",
    problem: "Leads were spread across phones, notebooks and WhatsApp, and follow-ups depended on memory.",
    solution: "A CRM configured around the sales stages, with automated follow-up reminders and a single pipeline view.",
    technology: ["CRM platform", "Workflow automation", "Email & WhatsApp"],
    outcome: "Every lead is captured in one place and follow-ups happen on schedule.",
    services: ["crm-sales-automation", "zoho-solutions"],
  },
  {
    slug: "inventory-management-system",
    title: "Inventory Management System",
    tag: "Custom Technology",
    icon: "box",
    problem: "Stock was tracked in spreadsheets, so availability was never certain and counts didn't match.",
    solution: "A web-based inventory system for items, stock movements, locations and reorder levels.",
    technology: ["Web application", "Database", "Dashboards"],
    outcome: "Stock levels are visible in real time from any device.",
    services: ["custom-software-development"],
  },
  {
    slug: "sales-quotation-system",
    title: "Sales Quotation System",
    tag: "Custom Technology",
    icon: "file",
    problem: "Quotations were typed manually in Word or Excel — slow, inconsistent and hard to track.",
    solution: "A quotation system that builds quotes from a product and price master and tracks their status.",
    technology: ["Web application", "PDF generation", "CRM integration"],
    outcome: "Consistent quotations in minutes, with every quote tracked.",
    services: ["custom-software-development", "crm-sales-automation"],
  },
  {
    slug: "hrms",
    title: "HRMS",
    tag: "Custom Technology",
    icon: "users",
    problem: "Employee records, attendance and leave were managed on paper and in spreadsheets.",
    solution: "An HR management system for employee records, attendance, leave and approvals.",
    technology: ["Web application", "Role-based access", "Approval workflows"],
    outcome: "HR data in one system, with leave and approvals handled digitally.",
    services: ["custom-software-development"],
  },
  {
    slug: "whatsapp-automation",
    title: "WhatsApp Automation",
    tag: "AI & Automation",
    icon: "chat",
    problem: "Order updates, reminders and replies were typed out one by one on WhatsApp.",
    solution: "Automated WhatsApp messages triggered from business events, connected to the CRM or ERP.",
    technology: ["WhatsApp Business", "CRM / ERP integration", "Automation workflows"],
    outcome: "Customers get timely updates automatically, and conversations are recorded against the right customer.",
    services: ["ai-business-automation", "integrations"],
  },
  {
    slug: "b2b-website-crm-lead-capture",
    title: "B2B Website with CRM Lead Capture",
    tag: "Websites",
    icon: "web",
    client: "LK Machinery India",
    problem: "An industrial machinery manufacturer needed its full product range online and enquiries delivered straight to sales.",
    solution: "A product-led website with category and model pages, enquiry forms posting directly into the CRM, and redirects from old URLs.",
    technology: ["Next.js", "Vercel", "CRM Web-to-Lead", "Structured data"],
    outcome: "Product enquiries arrive in the CRM automatically, tagged with the product of interest.",
    services: ["website-development", "crm-sales-automation", "digital-marketing"],
  },
  {
    slug: "android-apps-ai-agents",
    title: "Android Apps & AI Agents",
    tag: "Custom Technology",
    icon: "phone",
    problem: "Software companies needed extra capacity to deliver mobile features and AI agents.",
    solution: "Android application development and AI agent development delivered for software companies.",
    technology: ["Android", "AI agents", "APIs"],
    outcome: "Mobile and AI features delivered without the client hiring a full in-house team.",
    services: ["custom-software-development", "ai-business-automation"],
    note: "Client names not provided.",
  },
];
