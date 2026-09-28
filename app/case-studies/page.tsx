import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import { getPublishedCaseStudies } from "@/data/caseStudies";
import "../pages.css";

// Not linked from the navigation, and kept out of the sitemap/index, until
// the first case study is published (see data/caseStudies.ts).
const hasPublished = getPublishedCaseStudies().length > 0;

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "How Ambitious Pedia has helped businesses solve real problems — problem, solution, technology, implementation and result.",
  alternates: { canonical: "/case-studies" },
  robots: hasPublished ? undefined : { index: false, follow: true },
};

const STRUCTURE = ["Problem", "Solution", "Technology", "Implementation", "Result"];

export default function CaseStudiesPage() {
  const studies = getPublishedCaseStudies();
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Real problems, real solutions."
        lead="Every case study follows the same structure — what the problem was, what we did, which technology we used, how we implemented it, and what changed."
        crumbs={[{ name: "Case studies", href: "/case-studies" }]}
      />

      <section className="section section--sand">
        <div className="container">
          {studies.length === 0 ? (
            <div className="empty">
              <h2>Case studies are on their way.</h2>
              <p>
                We are documenting our recent projects properly — with measured results where
                they are available. In the meantime, we are happy to talk through relevant work
                on a call.
              </p>
              <ul className="structure chips">
                {STRUCTURE.map((s) => <li key={s} className="chip">{s}</li>)}
              </ul>
            </div>
          ) : (
            <ul className="sol-list">
              {studies.map((c) => (
                <li key={c.slug} className="sol">
                  <div>
                    <span className="sol__label">{c.industry}</span>
                    <h2 className="sol__q">{c.title}</h2>
                  </div>
                  <div className="sol__body">
                    <p>{c.summary}</p>
                    <Link href={`/case-studies/${c.slug}`} className="text-link">
                      Read the case study <ArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <div className="cta-band--spaced">
        <CtaBand />
      </div>
    </>
  );
}
