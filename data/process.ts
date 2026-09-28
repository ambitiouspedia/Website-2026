// ─── Our approach ──────────────────────────────────────────────────────────
// From the founder's brief (section 10). The short labels form the headline
// sequence: Understand → Analyze → Design → Implement → Integrate → Automate → Support.

export const PROCESS_STEPS = [
  {
    label: "Understand",
    title: "Understand the business",
    text: "We start with how your business runs today — people, processes and the tools you already use.",
  },
  {
    label: "Analyze",
    title: "Identify problems and bottlenecks",
    text: "We find where time is lost, data is re-entered or decisions are made without the right information.",
  },
  {
    label: "Design",
    title: "Recommend the right technology",
    text: "Platform, custom build or a mix — chosen for your process and budget, not for what is easiest to sell.",
  },
  {
    label: "Implement",
    title: "Implement the solution",
    text: "Configuration, customization, development and data migration, delivered in stages you can review.",
  },
  {
    label: "Integrate",
    title: "Integrate existing systems",
    text: "Connect the new solution with your CRM, accounting, website and communication channels.",
  },
  {
    label: "Automate",
    title: "Automate repetitive processes",
    text: "Follow-ups, reports, notifications and data entry handled automatically.",
  },
  {
    label: "Train",
    title: "Train the team",
    text: "Hands-on training so your team actually uses the system from day one.",
  },
  {
    label: "Support",
    title: "Provide ongoing support",
    text: "We stay involved after go-live — fixing issues, adding improvements and growing the system with you.",
  },
] as const;

export const SALES_FLOW = [
  "Lead",
  "Follow-up",
  "Quotation",
  "Negotiation",
  "Order",
  "Customer",
  "Repeat Business",
] as const;

export const INTEGRATION_NODES = [
  "CRM",
  "ERP",
  "Accounting",
  "Website",
  "WhatsApp",
  "AI",
  "Internal Systems",
] as const;
