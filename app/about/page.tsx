import type { Metadata } from "next";
import { Compass, Layers, Handshake } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHead from "@/components/ui/SectionHead";
import ProcessStepper from "@/components/sections/ProcessStepper";
import FlowVisual from "@/components/visuals/FlowVisual";
import CtaBand from "@/components/ui/CtaBand";
import { SITE } from "@/lib/site";
import { getBreadcrumbSchema, JsonLd } from "@/lib/seo";
import "../pages.css";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Ambitious Pedia Tech and Services is a Pune-based technology and digital transformation company helping SMEs digitise operations, automate processes and implement business software. Working with businesses since 2018.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about" },
};

const POINTS = [
  { icon: Compass, title: "Business language first", text: "We talk about leads, orders, stock and reports before software." },
  { icon: Layers, title: "Implementation, not just software", text: "Value comes from fitting the system to your process — and your team using it." },
  { icon: Handshake, title: "A long-term partner", text: "The company you call whenever a business problem needs a technology answer." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A technology partner for growing businesses."
        lead="We help businesses use technology, AI and automation to improve and scale their operations."
        crumbs={[{ name: "About", href: "/about" }]}
        visual={
          <div className="facts glass">
            <h2>At a glance</h2>
            <dl>
            <div><dt>Working with businesses since</dt><dd>{SITE.foundedYear}</dd></div>
            <div><dt>Registered</dt><dd>{SITE.registeredYear}</dd></div>
            <div><dt>Based in</dt><dd>{SITE.address.locality}, {SITE.address.region}</dd></div>
            <div><dt>GSTIN</dt><dd>{SITE.gstin}</dd></div>
            <div><dt>Contact</dt><dd>{SITE.salesEmail}</dd></div>
            </dl>
          </div>
        }
      />

      <section className="section">
        <div className="container about-grid">
          <div className="prose" data-reveal>
            <h2 style={{ marginTop: 0 }}>Who we are</h2>
            <p>
              {SITE.name} is a technology and digital transformation company in {SITE.address.locality}. We started
              working with businesses in {SITE.foundedYear} and formally registered the company in {SITE.registeredYear}.
            </p>
            <p>
              We implement ERP and CRM (including Zoho and ERPNext), build AI assistants and automations, develop
              custom applications, set up Microsoft 365, cloud and IT infrastructure, and run digital marketing — for
              manufacturers, distributors, solar and software companies, and SMEs of every kind.
            </p>
          </div>
          <div data-reveal>
            <p className="eyebrow">Who we work with</p>
            <ul className="tick-list" style={{ marginTop: 16 }}>
              <li>Businesses running sales, stock or accounts in Excel</li>
              <li>Teams using systems that don&apos;t talk to each other</li>
              <li>Companies ready for an ERP or CRM</li>
              <li>Owners who want practical AI and automation</li>
              <li>Anyone who needs dependable email, cloud and IT</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <SectionHead eyebrow="What we believe" title="How we think about technology." />
          <ul className="about-points">
            {POINTS.map((p, i) => (
              <li key={p.title} className="card card--hover spot" data-reveal style={{ ["--d" as string]: i }}>
                <span className="icon-tile"><p.icon aria-hidden="true" /></span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="What we do" title="From manual work to connected operations." center />
          <FlowVisual />
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHead eyebrow="Our approach" title="A process, not just a list of services." center />
          <ProcessStepper />
        </div>
      </section>

      <div className="cta--spaced">
        <CtaBand />
      </div>
      <JsonLd data={getBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "About", item: "/about" }])} />
    </>
  );
}
