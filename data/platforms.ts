// ─── Platforms & technology ────────────────────────────────────────────────
// Everything listed here comes from the founder's brief. Shown as "platforms
// we work with" — never as partnerships or certifications (none held yet).

export const PLATFORM_GROUPS = [
  {
    name: "Business platforms",
    items: ["Zoho One", "Zoho CRM", "Zoho Books", "ERPNext", "Tally"],
  },
  {
    name: "AI & messaging",
    items: ["OpenClaw", "AI assistants", "WhatsApp", "Telegram"],
  },
  {
    name: "Applications",
    items: ["React.js", "Next.js", "Node.js", "Express.js", "JavaScript", "Python"],
  },
  {
    name: "Data",
    items: ["PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    name: "Infrastructure",
    items: ["Windows Server", "Linux", "Cloud / VPS", "Business email"],
  },
  {
    name: "Marketing",
    items: ["Google Ads", "Google Search Console", "Google Analytics", "Social media"],
  },
] as const;

// Integration examples from the brief (section 9)
export const INTEGRATION_EXAMPLES = [
  { from: "Website", to: "CRM", text: "Enquiries arrive as leads automatically — no copying from email." },
  { from: "CRM", to: "WhatsApp", text: "Follow-ups and updates sent where your customers already are." },
  { from: "Zoho", to: "Accounting", text: "Quotations and orders flow through to invoicing." },
  { from: "Tally", to: "Business apps", text: "Accounts stay in step with sales and operations." },
  { from: "ERPNext", to: "AI", text: "Ask questions of live business data in plain language." },
  { from: "APIs", to: "Internal apps", text: "Custom tools connected to everything else you use." },
] as const;
