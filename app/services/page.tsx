import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHead from "@/components/ui/SectionHead";
import ServicesBento from "@/components/sections/ServicesBento";
import FocusPlatforms from "@/components/sections/FocusPlatforms";
import ProcessStepper from "@/components/sections/ProcessStepper";
import Faq from "@/components/ui/Faq";
import CtaBand from "@/components/ui/CtaBand";
import Icon from "@/components/ui/Icon";
import { CATEGORIES, getServicesByCategory } from "@/data/services";
import { FAQS } from "@/data/faq";
import { getBreadcrumbSchema, JsonLd } from "@/lib/seo";
import "../pages.css";

export const metadata: Metadata = {
  title: "Services — Zoho, ERP, CRM, AI Automation, Custom Software & Cloud",
  description:
    "Zoho and ERPNext implementation, CRM and sales automation, AI assistants, custom business applications, integrations, Microsoft 365, cloud and IT infrastructure, and digital marketing.",
  alternates: { canonical: "/services" },
  openGraph: { url: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything you need to run on connected, automated systems."
        lead="Five areas, one team. Most projects combine several — that's why we deliver them together."
        crumbs={[{ name: "Services", href: "/services" }]}
      />

      <section className="section">
        <div className="container">
          <h2 className="sr-only">Service categories</h2>
          <ServicesBento />
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <SectionHead eyebrow="Focus areas" title="Zoho, Microsoft 365 and the cloud." />
          <FocusPlatforms />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="All services" title="Every service, by category." />
          <div className="svc-index">
            {CATEGORIES.map((c) => (
              <div key={c.id} className="svc-index__group" data-reveal>
                <p className="svc-index__head"><span className="icon-tile"><Icon name={c.icon} /></span> {c.name}</p>
                <ul>
                  {getServicesByCategory(c.id).map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="svc-index__link">
                        <span><b>{s.name}</b><small>{s.summary}</small></span>
                        <ArrowRight aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHead eyebrow="How we deliver" title="The same process behind every service." center />
          <ProcessStepper />
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <SectionHead eyebrow="FAQ" title="Common questions" center />
          <Faq items={FAQS.slice(0, 6)} />
        </div>
      </section>

      <CtaBand />
      <JsonLd data={getBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Services", item: "/services" }])} />
    </>
  );
}
