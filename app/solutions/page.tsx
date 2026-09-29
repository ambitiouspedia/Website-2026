import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import FlowVisual from "@/components/visuals/FlowVisual";
import SectionHead from "@/components/ui/SectionHead";
import { SOLUTIONS } from "@/data/solutions";
import { getService } from "@/data/services";
import { getBreadcrumbSchema, JsonLd } from "@/lib/seo";
import "../pages.css";

export const metadata: Metadata = {
  title: "Solutions by Business Problem",
  description:
    "Leads not tracked, Excel for everything, disconnected accounts and sales, systems that don't talk to each other — how Ambitious Pedia solves the problems growing businesses face.",
  alternates: { canonical: "/solutions" },
  openGraph: { url: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Start with the problem. We'll find the right technology."
        lead="You don't need to know whether you need an ERP, a CRM or a custom app. Tell us what's going wrong."
        crumbs={[{ name: "Solutions", href: "/solutions" }]}
      />

      <section className="section">
        <div className="container">
          <ul className="sol-list">
            {SOLUTIONS.map((s, i) => (
              <li key={s.slug} id={s.slug} className="sol card" data-reveal style={{ ["--d" as string]: i % 2 }}>
                <h2 className="sol__q">“{s.problem}”</h2>
                <dl>
                  <div className="sol__row"><dt>Usually</dt><dd>{s.diagnosis}</dd></div>
                  <div className="sol__row sol__row--fix" style={{ marginTop: 10 }}><dt>We</dt><dd>{s.approach}</dd></div>
                </dl>
                <div className="sol__links">
                  {s.services.map((slug) => {
                    const svc = getService(slug);
                    return svc ? (
                      <Link key={slug} href={`/services/${slug}`} className="link-arrow">{svc.shortName} <ArrowRight aria-hidden="true" /></Link>
                    ) : null;
                  })}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <SectionHead eyebrow="The pattern" title="Almost every solution follows the same path." center />
          <FlowVisual />
        </div>
      </section>

      <div className="cta--spaced">
        <CtaBand title="Don't see your problem here?" text="Most projects start as a conversation about something that isn't working. Tell us about yours." />
      </div>
      <JsonLd data={getBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Solutions", item: "/solutions" }])} />
    </>
  );
}
