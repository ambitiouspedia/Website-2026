import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ProcessSteps from "@/components/sections/ProcessSteps";
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

const BELIEFS = [
  {
    title: "Business language first",
    text: "We talk about your leads, orders, stock and reports before we talk about software. Technology is the means, not the message.",
  },
  {
    title: "Implementation, not just software",
    text: "Software only delivers value when it matches your process and your team uses it. That is where we spend our effort.",
  },
  {
    title: "A long-term technology partner",
    text: "We want to be the company you call whenever a business problem needs a technology answer — today and as you grow.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A technology partner for SMEs and growing businesses."
        lead="We help businesses use technology to simplify operations, automate repetitive work and grow."
        crumbs={[{ name: "About", href: "/about" }]}
      />

      <section className="section">
        <div className="container about-grid">
          <div className="prose">
            <h2>Who we are</h2>
            <p>
              {SITE.name} is a technology and digital transformation company based in{" "}
              {SITE.address.locality}, {SITE.address.region}. We help businesses digitise their
              operations, automate processes, implement business software and build custom
              technology solutions.
            </p>
            <p>
              We started working with businesses in {SITE.foundedYear} and formally registered
              the company in {SITE.registeredYear}. Over that time we have worked with manufacturers,
              distributors, solar companies and software companies — on business software,
              websites, mobile applications and AI.
            </p>
            <p>
              Our work covers ERP and CRM implementation, AI and business automation, custom
              business applications, websites, system integrations, IT infrastructure and digital
              marketing. What connects all of it is a focus on the business process first: we
              analyse the problem, then build or implement the solution that fits.
            </p>

            <h3>Who we work with</h3>
            <p>
              Business owners and decision-makers at SMEs and growing companies — especially
              those who are:
            </p>
            <ul>
              <li>running sales, stock or accounts in Excel</li>
              <li>using several systems that don&apos;t communicate with each other</li>
              <li>ready for an ERP or CRM but unsure where to start</li>
              <li>looking to use AI and automation in a practical way</li>
              <li>in need of dependable IT, cloud and server support</li>
            </ul>
          </div>

          <aside className="facts" aria-label="Company facts">
            <h2>At a glance</h2>
            <dl>
              <div><dt>Company</dt><dd>{SITE.name}</dd></div>
              <div><dt>Working with businesses since</dt><dd>{SITE.foundedYear}</dd></div>
              <div><dt>Registered</dt><dd>{SITE.registeredYear}</dd></div>
              <div><dt>Location</dt><dd>{SITE.address.locality}, {SITE.address.region}, {SITE.address.country}</dd></div>
              <div><dt>GSTIN</dt><dd>{SITE.gstin}</dd></div>
              <div><dt>Contact</dt><dd>{SITE.salesEmail}<br />{SITE.phone}</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What we believe</p>
            <h2>How we think about technology.</h2>
          </div>
          <ul className="vision">
            {BELIEFS.map((b) => (
              <li key={b.title}>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Our approach</p>
            <h2>A process, not just a list of services.</h2>
          </div>
          <ProcessSteps />
        </div>
      </section>

      <div className="cta-band--spaced">
        <CtaBand />
      </div>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "About", item: "/about" },
        ])}
      />
    </>
  );
}
