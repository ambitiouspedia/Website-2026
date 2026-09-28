import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ServiceGroups from "@/components/sections/ServiceGroups";
import ProcessSteps from "@/components/sections/ProcessSteps";
import CtaBand from "@/components/ui/CtaBand";
import { getBreadcrumbSchema, JsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Services — ERP, CRM, AI Automation, Custom Software & IT",
  description:
    "ERP and CRM implementation, AI and business automation, custom business applications, websites, system integrations, IT infrastructure and digital marketing for SMEs.",
  alternates: { canonical: "/services" },
  openGraph: { url: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Everything a growing business needs to run on connected, automated systems."
        lead="Business software, automation, AI, custom applications and IT — grouped by what they do for your business. Most projects combine several, which is why we deliver them as one team."
        crumbs={[{ name: "Services", href: "/services" }]}
      />

      <section className="section section--sand">
        <div className="container">
          <ServiceGroups />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">How we deliver</p>
            <h2>The same process behind every service.</h2>
          </div>
          <ProcessSteps compact />
        </div>
      </section>

      <CtaBand />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Services", item: "/services" },
        ])}
      />
    </>
  );
}
