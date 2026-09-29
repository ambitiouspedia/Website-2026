// ─── How we work ───────────────────────────────────────────────────────────
// Seven steps from the founder's brief (2026-09-29).

export const PROCESS_STEPS = [
  { label: "Understand", title: "Understand your business", text: "How your business runs today — people, processes and the tools you already use.", deliverable: "Process map" },
  { label: "Analyze", title: "Find the bottlenecks", text: "Where time is lost, data is re-typed or decisions are made without the right information.", deliverable: "Problem list & priorities" },
  { label: "Design", title: "Choose the right technology", text: "Platform, custom build or a mix — chosen for your process and budget.", deliverable: "Solution design" },
  { label: "Implement", title: "Build and configure", text: "Configuration, development and data migration, delivered in stages you can review.", deliverable: "Working system" },
  { label: "Integrate", title: "Connect your systems", text: "CRM, accounting, website, WhatsApp and internal tools linked together.", deliverable: "Connected data flow" },
  { label: "Automate", title: "Remove repetitive work", text: "Follow-ups, reports, notifications and data entry handled automatically.", deliverable: "Automations live" },
  { label: "Support", title: "Train and support", text: "Hands-on training, then ongoing support and improvements as you grow.", deliverable: "Trained team, ongoing help" },
] as const;

export const SALES_FLOW = ["Lead", "Follow-up", "Quotation", "Negotiation", "Order", "Customer", "Repeat"] as const;

export const INTEGRATION_NODES = ["CRM", "ERP", "Accounting", "Website", "WhatsApp", "AI", "Email"] as const;
