import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import IntegrationHub from "@/components/sections/IntegrationHub";
import ProblemsGrid from "@/components/sections/ProblemsGrid";
import ServiceGroups from "@/components/sections/ServiceGroups";
import SalesFlow from "@/components/sections/SalesFlow";
import ProcessSteps from "@/components/sections/ProcessSteps";
import IndustriesGrid from "@/components/sections/IndustriesGrid";
import CtaBand from "@/components/ui/CtaBand";
import { PLATFORM_GROUPS, INTEGRATION_EXAMPLES } from "@/data/platforms";
import { SITE } from "@/lib/site";
import "./home.css";

export const metadata = {
  alternates: { canonical: "/" },
};

const PRINCIPLES = [
  {
    title: "Business first, technology second",
    text: "We talk about leads, orders, stock and reports — then choose the software that supports them.",
  },
  {
    title: "End-to-end",
    text: "Analysis, implementation, integration, automation, training and support from one team.",
  },
  {
    title: "The right fit, not one product",
    text: "Zoho, ERPNext, Tally or a custom build — we recommend what suits your process and budget.",
  },
];

const AI_USES = [
  { title: "Business assistants", text: "Answer questions about orders, stock and customers from your ERP or CRM." },
  { title: "Knowledge assistants", text: "Give staff instant answers from company documents and procedures." },
  { title: "WhatsApp & Telegram", text: "Automated replies, updates and reminders on the channels customers use." },
  { title: "Document & data processing", text: "Extract data from documents instead of typing it in." },
  { title: "Automated reporting", text: "Daily and weekly reports compiled and sent automatically." },
  { title: "Sales & support assistance", text: "Help your team respond faster with the right information." },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Business Technology · Automation · AI</p>
            <h1>
              Technology that <span className="hero__hl">simplifies operations</span>, automates
              repetitive work and helps your business grow.
            </h1>
            <p className="hero__lead">
              Ambitious Pedia is a technology partner for SMEs and growing businesses. We implement
              ERP and CRM, build AI automations and custom applications, connect your systems and
              manage the IT underneath — all designed around how your business actually works.
            </p>
            <div className="hero__actions">
              <Link href="/contact" className="btn btn--primary">
                Book a consultation <ArrowRight aria-hidden="true" />
              </Link>
              <Link href="/services" className="btn btn--ghost-dark">
                Explore services
              </Link>
            </div>
            <p className="hero__meta">
              {SITE.address.locality}, India · Working with businesses since {SITE.foundedYear}
            </p>
          </div>
          <div className="hero__visual">
            <IntegrationHub />
          </div>
        </div>
      </section>

      {/* ─── Problems we solve ────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What problems we solve</p>
            <h2>Sound familiar?</h2>
            <p>
              Most businesses don&apos;t come to us asking for software. They come with a problem.
              These are the ones we hear most.
            </p>
          </div>
          <ProblemsGrid limit={6} />
          <p className="home__more">
            <Link href="/solutions" className="text-link">
              See all the problems we solve <ArrowRight aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>

      {/* ─── Who we are ───────────────────────────────────────────────── */}
      <section className="section section--sand">
        <div className="container who">
          <div className="section-head">
            <p className="eyebrow">Who we are</p>
            <h2>We start with your business process — then choose the technology.</h2>
            <p>
              We help businesses move from manual and disconnected processes to connected,
              automated and scalable digital operations. Business owners and decision-makers work
              with us because we understand how sales, accounts and operations fit together, and
              we can analyse a problem and then build or implement the right solution.
            </p>
            <Link href="/about" className="text-link who__link">
              About Ambitious Pedia <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <ul className="who__principles">
            {PRINCIPLES.map((p) => (
              <li key={p.title}>
                <Check aria-hidden="true" />
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── Services ─────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Our services</p>
            <h2>One partner for business software, automation, AI and IT.</h2>
            <p>Grouped by what they do for your business, so it&apos;s easy to find where to start.</p>
          </div>
          <ServiceGroups />
        </div>
      </section>

      {/* ─── CRM & sales flow ─────────────────────────────────────────── */}
      <section className="section section--sand">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">CRM & sales automation</p>
            <h2>Your complete sales process, managed digitally.</h2>
            <p>
              From the first enquiry to repeat orders — every lead tracked, every follow-up on
              time, and management able to see the whole pipeline.
            </p>
          </div>
          <SalesFlow />
          <p className="home__more">
            <Link href="/services/crm-sales-automation" className="text-link">
              CRM implementation & sales automation <ArrowRight aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>

      {/* ─── AI ───────────────────────────────────────────────────────── */}
      <section className="section section--dark">
        <div className="container ai">
          <div className="section-head ai__head">
            <p className="eyebrow">AI & business automation</p>
            <h2>AI that works with your business processes and data — not just a generic chatbot.</h2>
            <p>
              Useful AI needs to know your products, customers and procedures. We connect AI
              assistants and automations to your ERP, CRM and documents. We are actively building
              AI assistants that work with ERPNext and OpenClaw.
            </p>
            <Link href="/services/ai-business-automation" className="btn btn--primary ai__cta">
              Explore AI & automation <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <ul className="ai__uses">
            {AI_USES.map((u) => (
              <li key={u.title}>
                <h3>{u.title}</h3>
                <p>{u.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── Integrations ─────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Integrations</p>
            <h2>Stop entering the same information twice.</h2>
            <p>
              CRM ↔ ERP ↔ Accounting ↔ Website ↔ WhatsApp ↔ AI ↔ Internal systems. We connect the
              tools you already use so data flows between them automatically.
            </p>
          </div>
          <ul className="integrations">
            {INTEGRATION_EXAMPLES.map((ex) => (
              <li key={`${ex.from}-${ex.to}`}>
                <p className="integrations__pair">
                  <span>{ex.from}</span>
                  <span className="integrations__arrow" aria-label="connected with">⇄</span>
                  <span>{ex.to}</span>
                </p>
                <p className="integrations__text">{ex.text}</p>
              </li>
            ))}
          </ul>
          <p className="home__more">
            <Link href="/services/integrations" className="text-link">
              How we approach integrations <ArrowRight aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>

      {/* ─── Platforms & technology ───────────────────────────────────── */}
      <section className="section section--sand">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Technology & platforms</p>
            <h2>Platforms we work with.</h2>
            <p>
              The technology matters — but it comes second. These are the platforms and tools we
              implement, integrate and build with.
            </p>
          </div>
          <div className="platforms">
            {PLATFORM_GROUPS.map((g) => (
              <div key={g.name} className="platforms__group">
                <h3>{g.name}</h3>
                <ul className="chips">
                  {g.items.map((it) => <li key={it} className="chip">{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process ──────────────────────────────────────────────────── */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Our process</p>
            <h2>A process, not just a list of services.</h2>
            <p>Every engagement follows the same path — so the solution fits the business, and keeps working after go-live.</p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* ─── Industries ───────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Industries</p>
            <h2>Industries we&apos;ve worked with.</h2>
          </div>
          <IndustriesGrid />
          <p className="home__more">
            <Link href="/industries" className="text-link">
              More about the industries we serve <ArrowRight aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
