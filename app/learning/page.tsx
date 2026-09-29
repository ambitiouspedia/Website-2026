import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHead from "@/components/ui/SectionHead";
import ArticleExplorer from "@/components/sections/ArticleExplorer";
import CtaBand from "@/components/ui/CtaBand";
import { LEARNING, LEARNING_TOPICS, LEARNING_FORMATS } from "@/data/learning";
import { sortByDate } from "@/lib/content";
import { getBreadcrumbSchema, JsonLd } from "@/lib/seo";
import "../pages.css";

export const metadata: Metadata = {
  title: "Learning — Guides, Checklists & Tutorials",
  description:
    "Free guides, checklists and tutorials on AI, automation, ERP, CRM, Zoho, ERPNext, Microsoft 365, cloud, software development and digital marketing.",
  alternates: { canonical: "/learning" },
  openGraph: { url: "/learning" },
};

// Learning = practical, educational resources (Insights = company perspective).
// Topics and formats grow automatically as resources are added in data/learning.ts.
export default function LearningPage() {
  const all = sortByDate(LEARNING);
  const counts = (t: string) => all.filter((a) => a.category === t).length;

  return (
    <>
      <PageHero
        eyebrow="Learning"
        title="Learn to get more from business technology."
        lead="Practical guides, checklists and tutorials on AI, ERP, CRM, Zoho, cloud and more — free to use."
        crumbs={[{ name: "Learning", href: "/learning" }]}
        cta={false}
      />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Latest resources" title="Start here" />
          <ArticleExplorer articles={all} base="/learning" filters={LEARNING_FORMATS} field="format" />
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <SectionHead eyebrow="Topics" title="What you can learn about" text="More guides are on the way across every topic." />
          <ul className="topics">
            {LEARNING_TOPICS.map((t, i) => (
              <li key={t} data-reveal style={{ ["--d" as string]: i % 4 }}>
                <b>{t}</b>
                <small>{counts(t) > 0 ? `${counts(t)} resource${counts(t) > 1 ? "s" : ""}` : "Coming soon"}</small>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="cta--spaced"><CtaBand title="Rather have us do it for you?" text="Our team implements everything we write about." /></div>
      <JsonLd data={getBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Learning", item: "/learning" }])} />
    </>
  );
}
