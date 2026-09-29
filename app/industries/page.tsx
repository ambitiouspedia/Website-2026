import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import IndustryTiles from "@/components/sections/IndustryTiles";
import ProblemsGrid from "@/components/sections/ProblemsGrid";
import SectionHead from "@/components/ui/SectionHead";
import CtaBand from "@/components/ui/CtaBand";
import { getBreadcrumbSchema, JsonLd } from "@/lib/seo";
import "../pages.css";

export const metadata: Metadata = {
  title: "Industries — Businesses We Work With",
  description:
    "Ambitious Pedia works with manufacturers, traders and distributors, solar and software companies, service businesses, startups and SMEs on ERP, CRM, AI, automation and IT.",
  alternates: { canonical: "/industries" },
  openGraph: { url: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Businesses we work with."
        lead="Different industries, similar problems: disconnected data, manual follow-ups and processes that have outgrown spreadsheets."
        crumbs={[{ name: "Industries", href: "/industries" }]}
      />
      <section className="section">
        <div className="container">
          <h2 className="sr-only">Industries</h2>
          <IndustryTiles />
        </div>
      </section>
      <section className="section section--white">
        <div className="container">
          <SectionHead eyebrow="Common ground" title="The problems we solve in every industry." />
          <ProblemsGrid limit={6} />
        </div>
      </section>
      <div className="cta--spaced">
        <CtaBand title="Working in a different industry?" text="Tracking leads, connecting systems and automating repetitive work apply to most growing businesses." />
      </div>
      <JsonLd data={getBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Industries", item: "/industries" }])} />
    </>
  );
}
