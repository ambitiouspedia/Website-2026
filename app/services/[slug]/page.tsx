import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, AlertCircle } from "lucide-react";
import { SERVICES, getService, getGroup } from "@/data/services";
import { SOLUTIONS } from "@/data/solutions";
import PageHero from "@/components/ui/PageHero";
import ServiceIcon from "@/components/ui/ServiceIcon";
import SalesFlow from "@/components/sections/SalesFlow";
import IntegrationHub from "@/components/sections/IntegrationHub";
import ProcessSteps from "@/components/sections/ProcessSteps";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { getBreadcrumbSchema, getServiceSchema, JsonLd } from "@/lib/seo";
import "./service.css";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.summary,
    alternates: { canonical: `/services/${slug}` },
    openGraph: { url: `/services/${slug}` },
  };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const group = getGroup(service.group);
  const related = service.related.map(getService).filter((s) => s !== undefined);
  const solutions = SOLUTIONS.filter((s) => s.services.includes(service.slug));

  return (
    <>
      <PageHero
        eyebrow={group.name}
        title={service.name}
        lead={service.intro}
        crumbs={[
          { name: "Services", href: "/services" },
          { name: service.shortName, href: `/services/${slug}` },
        ]}
      />

      {/* Key message + problems */}
      <section className="section">
        <div className="container svc-intro">
          <blockquote className="svc-key">
            <span className="icon-badge"><ServiceIcon name={service.icon} /></span>
            <p>{service.keyMessage}</p>
          </blockquote>
          <div>
            <h2 className="svc-h2">Is this you?</h2>
            <ul className="svc-problems">
              {service.problems.map((p) => (
                <li key={p}><AlertCircle aria-hidden="true" />{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section section--sand">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What we do</p>
            <h2>How we help</h2>
          </div>
          <div className="svc-caps">
            {service.capabilities.map((c) => (
              <div key={c.title} className="svc-cap">
                <h3>{c.title}</h3>
                <ul>{c.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service-specific visual */}
      {service.slug === "crm-sales-automation" && (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">The sales process</p>
              <h2>From first enquiry to repeat business.</h2>
            </div>
            <SalesFlow />
          </div>
        </section>
      )}
      {service.slug === "integrations" && (
        <section className="section section--dark">
          <div className="container svc-hub">
            <div className="section-head">
              <p className="eyebrow">Connected systems</p>
              <h2>CRM ↔ ERP ↔ Accounting ↔ Website ↔ WhatsApp ↔ AI ↔ Internal systems</h2>
              <p>Information is entered once and flows to every system that needs it — so nobody re-types the same customer, order or invoice.</p>
            </div>
            <IntegrationHub />
          </div>
        </section>
      )}

      {/* Platforms */}
      <section className="section">
        <div className="container svc-platforms">
          <div>
            <p className="eyebrow">Platforms & technology</p>
            <h2 className="svc-h2">What we work with</h2>
            {service.platformsNote && <p className="svc-note">{service.platformsNote}</p>}
          </div>
          <ul className="chips">
            {service.platforms.map((p) => <li key={p} className="chip">{p}</li>)}
          </ul>
        </div>
      </section>

      {/* Related problems */}
      {solutions.length > 0 && (
        <section className="section section--sand">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Problems this solves</p>
              <h2>What customers tell us</h2>
            </div>
            <ul className="svc-solutions">
              {solutions.map((s) => (
                <li key={s.slug}>
                  <p className="svc-solutions__q">“{s.problem}”</p>
                  <p>{s.approach}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Process */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">How we deliver</p>
            <h2>Understand → Analyze → Design → Implement → Integrate → Automate → Support</h2>
          </div>
          <ProcessSteps compact />
        </div>
      </section>

      {/* Enquiry + related */}
      <section className="section">
        <div className="container svc-enquiry">
          <EnquiryForm defaultService={service.name} title={`Talk to us about ${service.shortName.toLowerCase()}`} />
          <aside className="svc-related">
            <h2 className="svc-related__title">Related services</h2>
            <ul>
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/services/${r.slug}`}>
                    <span className="icon-badge"><ServiceIcon name={r.icon} /></span>
                    <span>{r.name}</span>
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <JsonLd data={getServiceSchema(service)} />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Services", item: "/services" },
          { name: service.name, item: `/services/${slug}` },
        ])}
      />
    </>
  );
}
