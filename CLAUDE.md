@AGENTS.md

# Ambitious Pedia — Project Briefing

## What this is

Rebuild of ambitiouspedia.com for **Ambitious Pedia Tech and Services** (Pune) — a technology and digital transformation company for SMEs: ERP/CRM implementation, AI & business automation, custom business applications, websites, integrations, IT infrastructure and digital marketing. Positioning brief from the founder (2026-09-28): business language first, technical language second.

## Stack

- Next.js 16 (App Router) + TypeScript, deployed on Vercel
- **Plain CSS** — no Tailwind. Tokens are CSS custom properties in `app/globals.css`; each component has a sibling `.css` file. Kept this way so the site can be edited without Tailwind knowledge (same approach as the LK Machinery site).
- Fonts: Plus Jakarta Sans (headings) + Inter (body) via `next/font/google`
- Icons: `lucide-react`
- Brand colours sampled from the logo: orange `#FD9803`, amber `#F5AB01`, yellow `#FDEB04`. Use `--color-orange-ink` (`#A65A00`) for orange *text* on light backgrounds — plain orange fails contrast. Buttons are orange with dark text, never white text.

## Structure

```
app/                     routes (home, services/[slug], solutions, industries, about,
                         contact, contact/thank-you, case-studies/[slug], privacy-policy, terms)
components/layout        Header (mega-menu + mobile drawer), Footer
components/sections      IntegrationHub, SalesFlow, ProcessSteps, ServiceGroups, ProblemsGrid, IndustriesGrid
components/forms         EnquiryForm (Zoho Web-to-Lead)
data/                    services, solutions, industries, process, platforms, caseStudies — all site copy
lib/site.ts              company facts — single source of truth
lib/zoho.ts              Zoho webform config (action URL + hidden fields)
lib/seo.tsx              JSON-LD helpers
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
- No case studies written yet. `data/caseStudies.ts` holds an unpublished LK Machinery draft; entries render only with `published: true`, and the Result section only renders when real results exist.

## Lead capture

`EnquiryForm` posts natively to Zoho CRM Web-to-Lead (`https://crm.zoho.in/crm/WebToLeadForm`, webform id 1320271000000572008 — configured in `lib/zoho.ts`, returnURL → `/contact/thank-you`). Fields: First Name, Last Name (Zoho-mandatory), Email, Phone, Company (optional), Description. The service dropdown + message are combined into Description and have no `name` attribute (Zoho reserves a `service` param). Field `name` attributes must match Zoho's labels exactly. If the webform is regenerated in Zoho, re-copy the action URL and all hidden inputs.

## Gotchas

- Don't put `backdrop-filter`, `transform` or `filter` on `.header` itself — it becomes the containing block for the fixed mobile drawer and collapses it to 72px. The blur lives on `.header::before`.
- The mobile drawer fades in place (no off-screen translate) so it can't cause horizontal overflow.
- Old Vite-site URLs `/services/<old-id>` are 301-redirected in `next.config.ts`.

## Workflow

- `npm run build` and `npx eslint .` must pass before a task is done
- Verify layout/interaction changes in a real browser (`npm run dev`) at both mobile and desktop widths
