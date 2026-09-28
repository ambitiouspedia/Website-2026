import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import { SOLUTIONS } from "@/data/solutions";
import { getService } from "@/data/services";
import { getBreadcrumbSchema, JsonLd } from "@/lib/seo";
import "../pages.css";

export const metadata: Metadata = {
  title: "Solutions by Business Problem",
  description:
    "Leads not tracked, Excel for everything, disconnected accounts and sales, systems that don't talk to each other — how Ambitious Pedia approaches the problems growing businesses face.",
  alternates: { canonical: "/solutions" },
  openGraph: { url: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions by business problem"
        title="Start with the problem. We'll find the right technology."
        lead="You don't need to know whether you need an ERP, a CRM or a custom application. Tell us what's going wrong — these are the problems we hear most, and how we approach them."
        crumbs={[{ name: "Solutions", href: "/solutions" }]}
      />

      <section className="section section--sand">
        <div className="container">
          <ul className="sol-list">
            {SOLUTIONS.map((s) => (
              <li key={s.slug} id={s.slug} className="sol">
                <h2 className="sol__q">“{s.problem}”</h2>
                <div className="sol__body">
                  <div>
                    <span className="sol__label">What&apos;s usually going on</span>
                    <p>{s.diagnosis}</p>
                  </div>
                  <div>
                    <span className="sol__label">How we approach it</span>
                    <p>{s.approach}</p>
                  </div>
                  <div className="sol__links">
                    {s.services.map((slug) => {
                      const svc = getService(slug);
                      return svc ? (
                        <Link key={slug} href={`/services/${slug}`} className="text-link">
                          {svc.name} <ArrowRight aria-hidden="true" />
                        </Link>
                      ) : null;
                    })}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="cta-band--spaced">
        <CtaBand
          title="Don't see your problem here?"
          text="Most of what we work on starts as a conversation about something that isn't working. Tell us about yours."
        />
      </div>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Solutions", item: "/solutions" },
        ])}
      />
    </>
  );
}
