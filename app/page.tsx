import Link from "next/link";
import { ArrowRight, Check, Compass, Layers, Shuffle, LifeBuoy, MapPin, CalendarDays } from "lucide-react";
import HeroVisual from "@/components/visuals/HeroVisual";
import FlowVisual from "@/components/visuals/FlowVisual";
import AiChat from "@/components/visuals/AiChat";
import Marquee from "@/components/ui/Marquee";
import SectionHead from "@/components/ui/SectionHead";
import ProblemsGrid from "@/components/sections/ProblemsGrid";
import ServicesBento from "@/components/sections/ServicesBento";
import FocusPlatforms from "@/components/sections/FocusPlatforms";
import ProcessStepper from "@/components/sections/ProcessStepper";
import ProjectCards from "@/components/sections/ProjectCards";
import IndustryTiles from "@/components/sections/IndustryTiles";
import ArticleCard from "@/components/sections/ArticleCard";
import Faq from "@/components/ui/Faq";
import CtaBand from "@/components/ui/CtaBand";
import { PLATFORMS } from "@/data/platforms";
import { PROJECTS } from "@/data/projects";
import { FAQS } from "@/data/faq";
import { INSIGHTS } from "@/data/insights";
import { LEARNING } from "@/data/learning";
import { SERVICES } from "@/data/services";
import { sortByDate, readingTime } from "@/lib/content";
import { SITE } from "@/lib/site";
import { getFaqSchema, JsonLd } from "@/lib/seo";
import "./home.css";

export const metadata = { alternates: { canonical: "/" } };

const WHY = [
  { icon: Compass, title: "Business first", text: "We start with your process and problems — technology comes second." },
  { icon: Layers, title: "End-to-end, one team", text: "Analysis, implementation, integration, automation, training and support." },
  { icon: Shuffle, title: "The right fit", text: "Zoho, ERPNext, Microsoft 365 or custom — we recommend what suits you." },
  { icon: LifeBuoy, title: "With you after go-live", text: "Ongoing support and improvements as your business grows." },
];

const HOME_PROJECTS = ["erpnext-ai-assistant", "crm-implementation", "inventory-management-system", "whatsapp-automation"];

export default function HomePage() {
  const insights = sortByDate(INSIGHTS);
  const featured = insights.find((a) => a.featured) ?? insights[0];
  const moreInsights = insights.filter((a) => a !== featured).slice(0, 2);
  const learning = sortByDate(LEARNING).slice(0, 3);

  return (
    <>
      {/* ─── 1. Hero ────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="blobs" aria-hidden="true"><span /><span /><span /></div>
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow hero__in" style={{ ["--d" as string]: 0 }}>ERP · CRM · AI · Automation · Cloud</p>
            <h1 className="hero__in" style={{ ["--d" as string]: 1 }}>
              Run your business on <span className="text-gradient">connected, automated</span> systems.
            </h1>
            <p className="hero__lead hero__in" style={{ ["--d" as string]: 2 }}>
              We help growing businesses use technology, AI and automation to improve and scale their
              operations — from Zoho and ERPNext to custom software, Microsoft 365 and cloud.
            </p>
            <div className="hero__actions hero__in" style={{ ["--d" as string]: 3 }}>
              <Link href="/contact" className="btn btn--primary">Book a consultation <ArrowRight aria-hidden="true" /></Link>
              <Link href="/services" className="btn btn--secondary">Explore services</Link>
            </div>
            <ul className="hero__trust hero__in" style={{ ["--d" as string]: 4 }}>
              <li><CalendarDays aria-hidden="true" /> Since {SITE.foundedYear}</li>
              <li><MapPin aria-hidden="true" /> {SITE.address.locality}, India</li>
              <li><Check aria-hidden="true" /> {SERVICES.length} service areas</li>
            </ul>
          </div>
          <div className="hero__visual hero__in" style={{ ["--d" as string]: 2 }}>
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* ─── 2. Platforms strip ────────────────────────────────────── */}
      <section className="strip" aria-labelledby="strip-h">
        <div className="container">
          <p id="strip-h" className="strip__label">Platforms & tools we work with</p>
        </div>
        <Marquee items={PLATFORMS} label="Platforms and tools we work with" />
      </section>

      {/* ─── 3. Problems ───────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Problems we solve"
            title="Sound familiar?"
            text="Most businesses don't come to us asking for software — they come with a problem."
            aside={<Link href="/solutions" className="link-arrow">All solutions <ArrowRight aria-hidden="true" /></Link>}
          />
          <ProblemsGrid limit={6} />
        </div>
      </section>

      {/* ─── 4. What we do, in one picture ─────────────────────────── */}
      <section className="section section--white">
        <div className="container">
          <SectionHead eyebrow="What we do" title="From manual work to connected, automated operations." center />
          <FlowVisual />
        </div>
      </section>

      {/* ─── 5. Services ───────────────────────────────────────────── */}
      <section className="section section--tint">
        <div className="container">
          <SectionHead
            eyebrow="Services"
            title="One partner for business software, AI, custom technology and IT."
            aside={<Link href="/services" className="link-arrow">All services <ArrowRight aria-hidden="true" /></Link>}
          />
          <ServicesBento />
        </div>
      </section>

      {/* ─── 6. Focus platforms ────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Platforms we focus on"
            title="Zoho, Microsoft 365 and the cloud — set up properly."
            text="Three areas where most growing businesses need a hand."
          />
          <FocusPlatforms />
        </div>
      </section>

      {/* ─── 7. AI & Automation ────────────────────────────────────── */}
      <section className="section section--dark ai-band">
        <div className="ai-band__glow" aria-hidden="true" />
        <div className="container ai-band__grid">
          <div data-reveal>
            <p className="eyebrow">AI & Automation</p>
            <h2 className="h2 ai-band__title">AI that works with your data — not a generic chatbot.</h2>
            <p className="lead ai-band__lead">Assistants and automations connected to your ERP, CRM, documents and WhatsApp.</p>
            <ul className="tick-list ai-band__list">
              <li>Answers from live business data</li>
              <li>WhatsApp & Telegram automation</li>
              <li>Documents turned into data</li>
              <li>Reports prepared and sent automatically</li>
            </ul>
            <Link href="/services/ai-business-automation" className="btn btn--primary">Explore AI & Automation <ArrowRight aria-hidden="true" /></Link>
          </div>
          <AiChat />
        </div>
      </section>

      {/* ─── 8. How we work ────────────────────────────────────────── */}
      <section className="section section--dark process-band">
        <div className="container">
          <SectionHead eyebrow="How we work" title="A clear process, from first call to ongoing support." center />
          <ProcessStepper />
        </div>
      </section>

      {/* ─── 9. Projects ───────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Projects"
            title="Solutions we've delivered."
            aside={<Link href="/projects" className="link-arrow">All projects <ArrowRight aria-hidden="true" /></Link>}
          />
          <ProjectCards compact items={PROJECTS.filter((p) => HOME_PROJECTS.includes(p.slug))} />
        </div>
      </section>

      {/* ─── 10. Industries ────────────────────────────────────────── */}
      <section className="section section--white">
        <div className="container">
          <SectionHead
            eyebrow="Industries"
            title="Businesses we work with."
            aside={<Link href="/industries" className="link-arrow">Industries <ArrowRight aria-hidden="true" /></Link>}
          />
          <IndustryTiles />
        </div>
      </section>

      {/* ─── 11. Why Ambitious Pedia ───────────────────────────────── */}
      <section className="section">
        <div className="container why">
          <div className="why__intro" data-reveal>
            <p className="eyebrow">Why Ambitious Pedia</p>
            <h2 className="h2">A technology partner, not just a vendor.</h2>
            <p className="lead">We understand how sales, accounts and operations fit together — and build the technology around them.</p>
            <div className="why__facts glass">
              <div><b>{SITE.foundedYear}</b><span>Working with businesses since</span></div>
              <div><b>{SERVICES.length}</b><span>Service areas</span></div>
              <div><b>7</b><span>Step delivery process</span></div>
            </div>
          </div>
          <ul className="why__grid">
            {WHY.map((w, i) => (
              <li key={w.title} className="card card--hover spot" data-reveal style={{ ["--d" as string]: i }}>
                <span className="icon-tile"><w.icon aria-hidden="true" /></span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── 12. Resources ─────────────────────────────────────────── */}
      <section className="section section--white">
        <div className="container">
          <SectionHead
            eyebrow="Resources"
            title="Insights and learning for business technology."
            aside={<Link href="/insights" className="link-arrow">All insights <ArrowRight aria-hidden="true" /></Link>}
          />
          <div className="res">
            <div className="res__main">
              <ArticleCard a={featured} base="/insights" featured />
              <div className="res__pair">
                {moreInsights.map((a, i) => <ArticleCard key={a.slug} a={a} base="/insights" i={i + 1} />)}
              </div>
            </div>
            <aside className="res__learn card" data-reveal>
              <p className="eyebrow">Learning</p>
              <h3>Guides & checklists</h3>
              <ul>
                {learning.map((l) => (
                  <li key={l.slug}>
                    <Link href={`/learning/${l.slug}`}>
                      <span className="res__fmt">{l.format}</span>
                      <b>{l.title}</b>
                      <small>{readingTime(l)} min read</small>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/learning" className="link-arrow">Visit Learning <ArrowRight aria-hidden="true" /></Link>
            </aside>
          </div>
        </div>
      </section>

      {/* ─── 13. FAQ ───────────────────────────────────────────────── */}
      <section className="section">
        <div className="container faq-layout">
          <div data-reveal>
            <p className="eyebrow">FAQ</p>
            <h2 className="h2">Questions we hear often.</h2>
            <p className="lead" style={{ marginTop: 14 }}>Can&apos;t find your answer? We&apos;re happy to talk it through.</p>
            <Link href="/contact" className="btn btn--secondary" style={{ marginTop: 24 }}>Ask a question</Link>
          </div>
          <Faq items={FAQS} />
        </div>
      </section>

      {/* ─── 14. CTA ───────────────────────────────────────────────── */}
      <CtaBand />
      <JsonLd data={getFaqSchema(FAQS)} />
    </>
  );
}
