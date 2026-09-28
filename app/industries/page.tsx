import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import IndustriesGrid from "@/components/sections/IndustriesGrid";
import CtaBand from "@/components/ui/CtaBand";
import { getBreadcrumbSchema, JsonLd } from "@/lib/seo";
import "../pages.css";

export const metadata: Metadata = {
  title: "Industries — Manufacturing, Distribution, Solar & Technology",
  description:
    "Ambitious Pedia has worked with manufacturers, FMCG and food distributors, solar companies and software companies on business software, automation, AI and websites.",
  alternates: { canonical: "/industries" },
  openGraph: { url: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Industries we've worked with."
        lead="Different industries, similar problems: disconnected data, manual follow-ups and processes that have outgrown spreadsheets. These are the sectors we have worked in so far."
        crumbs={[{ name: "Industries", href: "/industries" }]}
      />

      <section className="section section--sand">
        <div className="container">
          <IndustriesGrid detailed />
        </div>
      </section>

      <div className="cta-band--spaced">
        <CtaBand
          title="Working in a different industry?"
          text="The problems we solve — tracking leads, connecting systems, automating repetitive work — apply to most growing businesses. Tell us about yours."
        />
      </div>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Industries", item: "/industries" },
        ])}
      />
    </>
  );
}
