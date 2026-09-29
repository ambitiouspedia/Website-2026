import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ArticleCard from "@/components/sections/ArticleCard";
import ArticleExplorer from "@/components/sections/ArticleExplorer";
import CtaBand from "@/components/ui/CtaBand";
import { INSIGHTS, INSIGHT_CATEGORIES } from "@/data/insights";
import { sortByDate } from "@/lib/content";
import { getBreadcrumbSchema, JsonLd } from "@/lib/seo";
import "../pages.css";

export const metadata: Metadata = {
  title: "Insights — AI, ERP, CRM & Business Technology",
  description:
    "Practical articles on AI and automation, ERP and CRM, Zoho, digital transformation, software, cloud and digital marketing for growing businesses.",
  alternates: { canonical: "/insights" },
  openGraph: { url: "/insights" },
};

export default function InsightsPage() {
  const all = sortByDate(INSIGHTS);
  const featured = all.find((a) => a.featured) ?? all[0];
  const rest = all.filter((a) => a !== featured);

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Ideas for running a better business with technology."
        lead="Practical thinking on AI, ERP, CRM, automation and digital transformation."
        crumbs={[{ name: "Insights", href: "/insights" }]}
        cta={false}
      />
      <section className="section">
        <div className="container">
          <h2 className="sr-only">Latest articles</h2>
          {featured && <div className="article-featured"><ArticleCard a={featured} base="/insights" featured /></div>}
          <ArticleExplorer articles={rest} base="/insights" filters={INSIGHT_CATEGORIES} field="category" />
        </div>
      </section>
      <CtaBand />
      <JsonLd data={getBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Insights", item: "/insights" }])} />
    </>
  );
}
