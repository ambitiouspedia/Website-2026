@AGENTS.md

# Ambitious Pedia — Project Briefing

## What this is

Rebuild of ambitiouspedia.com for **Ambitious Pedia Tech and Services** (Pune) — a technology and digital transformation company for SMEs: ERP/CRM implementation, AI & business automation, custom business applications, websites, integrations, IT infrastructure and digital marketing. Positioning brief from the founder (2026-09-28): business language first, technical language second.

## Stack

- Next.js 16 (App Router) + TypeScript, deployed on Vercel
- **Plain CSS** — no Tailwind. Tokens are CSS custom properties in `app/globals.css`; each component has a sibling `.css` file. Kept this way so the site can be edited without Tailwind knowledge (same approach as the LK Machinery site).
- Fonts: Plus Jakarta Sans (headings) + Inter (body) via `next/font/google`
- Icons: `lucide-react`
- **Design system v2 "Clear Ocean"** (founder-approved 2026-09-29), all tokens in `app/globals.css`: navy text `#0F172A`, primary teal `#0B7285` (buttons: white text on teal), cyan `#5CC4D1` for gradients, amber `#FDB022` (from the logo) as a small accent only — never body text (use `--amber-ink`). Light site with navy dark bands (AI, process, footer). Glass (`.glass`, `.glass-dark`) max 2–3 per screen; spacing, radii, shadows, type scale and motion are all tokens.
- Motion: `[data-reveal]` scroll reveal + `.spot` cursor spotlight via `components/ui/Interactions.tsx`; only active under `html.js`, disabled for reduced motion. Keep animation transform/opacity-only.

## Structure

```
app/                     routes: home, services/[slug] (10 services; zoho-solutions, microsoft-365,
                         it-infrastructure-cloud use the long "platform" layout), solutions, projects,
                         industries, about, contact(+thank-you), insights/[slug], learning/[slug], legal
components/layout        Header (mega-menu + dropdowns + mobile drawer), Footer
components/ui            Icon, SectionHead, PageHero, CtaBand, Faq, Marquee, Interactions
components/visuals       HeroVisual, FlowVisual, AiChat, IntegrationHub, SalesFlow (coded illustrations, no stock images)
components/sections      ServicesBento, FocusPlatforms, ProcessStepper, ProjectCards, IndustryTiles, ProblemsGrid, Article*
components/forms         EnquiryForm (Zoho Web-to-Lead)
data/                    services, solutions, projects, industries, faq, process, platforms, insights, learning
lib/site.ts              company facts — single source of truth
lib/content.ts           article model (Insights + Learning) — add articles in data/insights.ts / data/learning.ts
lib/zoho.ts              Zoho webform config (action URL + hidden fields)
lib/seo.tsx              JSON-LD helpers (Organization, WebSite, Service, FAQPage, Article, Breadcrumb)
```

## Critical rule: real content only

Never invent clients, testimonials, statistics, results, team size or certifications. The previous site shipped fake testimonials ("Sneha Reddy, Healthlink", "grown 3x") and made-up stats — do not reintroduce anything like that. Unknowns go in `note` fields in `data/*` (never rendered) or are simply left out.

Verified facts (founder, 2026-09-29):
- Working with businesses since **2018**, formally **registered 2023** — keep these distinct
- GSTIN 27CELPJ1162F1ZM; office Pune, Maharashtra, India (no street address provided)
- Phone +91 9226744588; sales@ambitiouspedia.com; support@ambitiouspedia.com
- LinkedIn `linkedin.com/company/ambitious-pedia-tech-services`; Instagram `instagram.com/ambitiouspedia_techandservices`
- **Not** a certified Zoho or Frappe/ERPNext partner (Zoho partnership expected later) — always "platforms we work with", never "partner"/"certified"
- Clients/industries: LK Machinery India (manufacturing), Vijaya Enterprises (FMCG — food distributor to hotels), solar panel companies (unnamed), software companies (Android development, AI agents; unnamed)
- Delivered solution types (founder-confirmed): ERPNext + AI assistant, CRM, inventory, sales quotation, HRMS, WhatsApp automation, B2B website (LK Machinery), Android apps & AI agents — in `data/projects.ts`. No measured results yet: `outcome` describes what changes, never numbers.
- Insights/Learning starter articles (2026-09-29) are general advice written for the redesign — founder to review. Careers page deferred by founder.
- Analytics: set `NEXT_PUBLIC_GA_ID` in Vercel to enable GA4; nothing loads without it.

## Lead capture

`EnquiryForm` posts natively to Zoho CRM Web-to-Lead (`https://crm.zoho.in/crm/WebToLeadForm`, webform id 1320271000000572008 — configured in `lib/zoho.ts`, returnURL → `/contact/thank-you`). Fields: First Name, Last Name (Zoho-mandatory), Email, Phone, Company (optional), Description. The service dropdown + message are combined into Description and have no `name` attribute (Zoho reserves a `service` param). Field `name` attributes must match Zoho's labels exactly. If the webform is regenerated in Zoho, re-copy the action URL and all hidden inputs.

## Gotchas

- Don't put `backdrop-filter`, `transform` or `filter` on `.header` itself — it becomes the containing block for the fixed mobile drawer and collapses it to 72px. The blur lives on `.header::before`.
- The mobile drawer fades in place (no off-screen translate) so it can't cause horizontal overflow.
- Old Vite-site URLs `/services/<old-id>`, `/case-studies`, `/blog(s)` are redirected in `next.config.ts`.
- `[hidden]` is forced to `display:none !important` globally — component `display` rules would otherwise override it (the process stepper showed all panels).
- Hosting: Vercel (see memory/CLAUDE notes). DNS lives in Netlify DNS and holds the GoDaddy email MX records — never delete that zone. Test on a branch preview before merging to `main`.

## Workflow

- `npm run build` and `npx eslint .` must pass before a task is done
- Verify layout/interaction changes in a real browser (`npm run dev`) at both mobile and desktop widths
