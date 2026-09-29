import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, AlertCircle } from "lucide-react";
import { SERVICES, FEATURED_SLUGS, getService, getCategory } from "@/data/services";
import { PROJECTS } from "@/data/projects";
import PageHero from "@/components/ui/PageHero";
import SectionHead from "@/components/ui/SectionHead";
import Icon from "@/components/ui/Icon";
import Faq from "@/components/ui/Faq";
import SalesFlow from "@/components/visuals/SalesFlow";
import IntegrationHub from "@/components/visuals/IntegrationHub";
import AiChat from "@/components/visuals/AiChat";
import ProjectCards from "@/components/sections/ProjectCards";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { getBreadcrumbSchema, getServiceSchema, getFaqSchema, JsonLd } from "@/lib/seo";
import "./service.css";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.name,
    description: s.summary,
    alternates: { canonical: `/services/${slug}` },
    openGraph: { url: `/services/${slug}`, title: s.name, description: s.summary },
  };
}

// Hero-side glass card: the service's key promise + the platforms behind it.
function KeyCard({ icon, message, platforms }: { icon: Parameters<typeof Icon>[0]["name"]; message: string; platforms: string[] }) {
  return (
    <div className="keycard glass">
      <span className="icon-tile icon-tile--active"><Icon name={icon} /></span>
      <p className="keycard__msg">{message}</p>
      <div className="keycard__plat">
        <span>Platforms & technology</span>
        <ul className="chips">{platforms.slice(0, 6).map((p) => <li key={p} className="chip">{p}</li>)}</ul>
      </div>
    </div>
  );
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const category = getCategory(s.category);
  const featured = FEATURED_SLUGS.includes(s.slug);
  const related = s.related.map(getService).filter((r) => r !== undefined);
  const projects = PROJECTS.filter((p) => p.services.includes(s.slug)).slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow={category.name}
        title={s.name}
        lead={s.intro}
        crumbs={[{ name: "Services", href: "/services" }, { name: s.shortName, href: `/services/${slug}` }]}
        visual={<KeyCard icon={s.icon} message={s.keyMessage} platforms={s.platforms} />}
      >
        <ul className="svc-hl">
          {s.highlights.map((h) => <li key={h}>{h}</li>)}
        </ul>
      </PageHero>

      {/* Problems */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Is this you?" title="Problems we solve" />
          <ul className="svc-problems">
            {s.problems.map((p, i) => (
              <li key={p} className="card" data-reveal style={{ ["--d" as string]: i }}>
                <AlertCircle aria-hidden="true" /> {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Vendor products (detailed pages) */}
      {s.products && (
        <section className="section section--white">
          <div className="container">
            <SectionHead eyebrow="What's covered" title={s.productsTitle ?? "What's covered"} />
            <ul className="svc-products">
              {s.products.map((p, i) => (
                <li key={p.name} className="card card--hover spot" data-reveal style={{ ["--d" as string]: i % 3 }}>
                  <h3>{p.name}</h3>
                  <p>{p.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Capabilities */}
      <section className={`section ${s.products ? "" : "section--white"}`}>
        <div className="container">
          <SectionHead eyebrow="What we do" title="How we help" />
          <div className="svc-caps">
            {s.capabilities.map((c, i) => (
              <div key={c.title} className="svc-cap card" data-reveal style={{ ["--d" as string]: i }}>
                <span className="svc-cap__num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{c.title}</h3>
                <ul className="tick-list">{c.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service-specific visual */}
      {s.slug === "crm-sales-automation" && (
        <section className="section section--white">
          <div className="container">
            <SectionHead eyebrow="The sales process" title="From first enquiry to repeat business." />
            <SalesFlow />
          </div>
        </section>
      )}
      {s.slug === "integrations" && (
        <section className="section section--white">
          <div className="container svc-split">
            <SectionHead eyebrow="Connected systems" title="One flow of data across every system." text="Information is entered once and reaches every system that needs it." />
            <IntegrationHub />
          </div>
        </section>
      )}
      {s.slug === "ai-business-automation" && (
        <section className="section section--dark">
          <div className="container svc-split">
            <SectionHead eyebrow="In practice" title="Ask a question. Get an answer from your own data." text="An assistant connected to your ERP, documents and WhatsApp." />
            <AiChat />
          </div>
        </section>
      )}

      {/* Phases (detailed pages) */}
      {s.phases && (
        <section className="section section--tint">
          <div className="container">
            <SectionHead eyebrow="How it works" title="How an engagement runs" />
            <ol className="phases">
              {s.phases.map((p, i) => (
                <li key={p.title} data-reveal style={{ ["--d" as string]: i }}>
                  <span className="phases__num">{i + 1}</span>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Platforms (non-featured pages show them here; featured pages in the hero card) */}
      {!featured && (
        <section className="section section--flush-top">
          <div className="container">
            <div className="svc-plat card" data-reveal>
              <div>
                <p className="eyebrow">Platforms & technology</p>
                <h2 className="h3" style={{ marginTop: 8 }}>What we work with</h2>
              </div>
              <ul className="chips">{s.platforms.map((p) => <li key={p} className="chip chip--teal">{p}</li>)}</ul>
            </div>
          </div>
        </section>
      )}

      {/* Related projects */}
      {projects.length > 0 && (
        <section className="section section--white">
          <div className="container">
            <SectionHead
              eyebrow="Projects"
              title="Related work"
              aside={<Link href="/projects" className="link-arrow">All projects <ArrowRight aria-hidden="true" /></Link>}
            />
            <ProjectCards compact items={projects} />
          </div>
        </section>
      )}

      {/* FAQ */}
      {s.faqs && (
        <section className="section">
          <div className="container container--narrow">
            <SectionHead eyebrow="FAQ" title={`${s.shortName}: common questions`} center />
            <Faq items={s.faqs} />
          </div>
        </section>
      )}

      {/* Enquiry */}
      <section className="section section--tint" id="enquire">
        <div className="container svc-enquiry">
          <EnquiryForm defaultService={s.name} title={`Talk to us about ${s.shortName}`} />
          <aside className="svc-related">
            <h2 className="h3">Related services</h2>
            <ul>
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/services/${r.slug}`} className="card card--hover">
                    <span className="icon-tile"><Icon name={r.icon} /></span>
                    <span><b>{r.shortName}</b><small>{r.summary}</small></span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <JsonLd data={getServiceSchema(s)} />
      {s.faqs && <JsonLd data={getFaqSchema(s.faqs)} />}
      <JsonLd data={getBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Services", item: "/services" }, { name: s.name, item: `/services/${slug}` }])} />
    </>
  );
}
