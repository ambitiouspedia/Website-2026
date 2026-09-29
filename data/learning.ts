import type { Article } from "@/lib/content";

// ─── Learning (educational resources) ──────────────────────────────────────
// Guides, checklists and tutorials — distinct from Insights (company
// perspective). Starter resources written 2026-09-29; founder to review.
// Designed to grow: add topics / formats and they appear in the filters.

export const LEARNING_TOPICS = [
  "AI & Automation",
  "ERP",
  "CRM",
  "Zoho",
  "ERPNext",
  "IT & Cloud",
  "Software Development",
  "Digital Marketing",
];

export const LEARNING_FORMATS = ["Guide", "Checklist", "Tutorial", "Template", "Course", "Webinar"];

export const LEARNING: Article[] = [
  {
    slug: "crm-implementation-checklist",
    title: "CRM implementation checklist: what to prepare before you start",
    description: "Twelve things to decide and gather before setting up a CRM — so the system fits your sales process from day one.",
    category: "CRM",
    format: "Checklist",
    date: "2026-09-29",
    author: "Ambitious Pedia Team",
    cover: "teal",
    featured: true,
    services: ["crm-sales-automation", "zoho-solutions"],
    body: [
      { type: "p", text: "Most CRM problems start before the software is configured. Use this checklist to prepare, and the implementation will be faster and far more likely to stick." },
      { type: "h2", text: "Your sales process" },
      { type: "ol", items: ["Write down your sales stages, from first enquiry to order.", "Define when a lead moves from one stage to the next.", "List where leads come from today (website, calls, exhibitions, referrals, WhatsApp).", "Decide who owns a lead at each stage."] },
      { type: "h2", text: "Your data" },
      { type: "ol", items: ["Collect existing customer and lead lists into one place.", "Remove duplicates and clearly outdated contacts.", "Agree the fields you actually need — keep it short.", "Gather your product or service list and price list."] },
      { type: "h2", text: "Your team" },
      { type: "ol", items: ["Decide who needs access and what each role may see.", "Pick one internal owner for the CRM.", "Agree which reports management wants each week.", "Schedule training time before go-live — not after."] },
      { type: "quote", text: "Tip: start with the minimum number of fields and stages. It's easy to add later, and hard to get people to fill in fields they don't need." },
    ],
  },
  {
    slug: "spf-dkim-dmarc-business-email",
    title: "SPF, DKIM and DMARC: stop business emails landing in spam",
    description: "A plain-English guide to the three DNS records that decide whether your emails are trusted — and how to check yours.",
    category: "IT & Cloud",
    format: "Guide",
    date: "2026-09-29",
    author: "Ambitious Pedia Team",
    cover: "navy",
    services: ["microsoft-365", "it-infrastructure-cloud"],
    body: [
      { type: "p", text: "If customers say your emails end up in spam, the cause is very often missing or incorrect email authentication on your domain. Three DNS records do this job." },
      { type: "h2", text: "SPF — who may send for your domain" },
      { type: "p", text: "SPF (Sender Policy Framework) is a TXT record listing the servers allowed to send email for your domain, for example your email provider and your CRM's mail service. Receiving servers check it to spot forgeries." },
      { type: "ul", items: ["Only one SPF record per domain — combine senders into it.", "Include every service that sends as your domain, such as your email provider, CRM or newsletter tool."] },
      { type: "h2", text: "DKIM — a digital signature" },
      { type: "p", text: "DKIM (DomainKeys Identified Mail) adds a cryptographic signature to each email. Your email provider generates the key; you publish the public part as a DNS record so receivers can verify messages weren't altered." },
      { type: "h2", text: "DMARC — the policy" },
      { type: "p", text: "DMARC tells receiving servers what to do when SPF or DKIM checks fail — do nothing, send to spam, or reject — and where to send reports. Start in monitoring mode (p=none), review the reports, then tighten the policy." },
      { type: "h2", text: "How to check yours" },
      { type: "ol", items: ["Look up your domain's TXT records with any online DNS lookup tool.", "Confirm there is exactly one record starting with v=spf1.", "Check your email provider's admin panel shows DKIM as enabled.", "Look for a TXT record at _dmarc.yourdomain.com."] },
      { type: "p", text: "When you change email providers — for example moving to Microsoft 365 — all three records need updating as part of the switch." },
    ],
  },
  {
    slug: "preparing-data-for-erp-migration",
    title: "Preparing your data for an ERP migration",
    description: "Clean data is the difference between a smooth go-live and months of fixing. What to migrate, what to leave behind, and how to clean it.",
    category: "ERP",
    format: "Guide",
    date: "2026-09-29",
    author: "Ambitious Pedia Team",
    cover: "amber",
    services: ["erp-business-software", "zoho-solutions"],
    body: [
      { type: "p", text: "Whether you're moving to ERPNext, Zoho or another system, the quality of the data you bring in decides how quickly the new ERP becomes trusted." },
      { type: "h2", text: "Decide what to migrate" },
      { type: "ul", items: ["Masters: customers, suppliers, items, price lists, chart of accounts", "Opening balances: stock quantities and account balances on the go-live date", "Open transactions: unpaid invoices, pending orders, open quotations", "History: usually summary only — keep old detail in the previous system or an archive"] },
      { type: "h2", text: "Clean before you move" },
      { type: "ol", items: ["Remove duplicate customers, suppliers and items.", "Standardise names, units of measure and item codes.", "Fill in mandatory fields such as GSTIN, addresses and tax categories.", "Archive inactive records instead of migrating them."] },
      { type: "h2", text: "Pick a clean cut-over date" },
      { type: "p", text: "Choose a go-live date that makes balances easy to verify — often the start of a month or quarter — and freeze changes in the old system shortly before it." },
      { type: "h2", text: "Test, then verify" },
      { type: "p", text: "Run at least one trial import, check totals against your current records, and have the people who use the data every day confirm it looks right before go-live." },
    ],
  },
];
