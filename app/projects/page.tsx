import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ProjectCards from "@/components/sections/ProjectCards";
import CtaBand from "@/components/ui/CtaBand";
import { getBreadcrumbSchema, JsonLd } from "@/lib/seo";
import "../pages.css";

export const metadata: Metadata = {
  title: "Projects — ERPNext + AI, CRM, Inventory, HRMS, WhatsApp Automation",
  description:
    "Solutions Ambitious Pedia has delivered: ERPNext AI assistant, CRM implementation, inventory management, sales quotation systems, HRMS, WhatsApp automation and B2B websites.",
  alternates: { canonical: "/projects" },
  openGraph: { url: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Solutions we've delivered."
        lead="Each one follows the same path: the problem, what we built, the technology behind it, and what changed."
        crumbs={[{ name: "Projects", href: "/projects" }]}
      />
      <section className="section">
        <div className="container">
          <h2 className="sr-only">All projects</h2>
          <ProjectCards />
        </div>
      </section>
      <CtaBand title="Have a similar problem?" text="Tell us what you're dealing with — we'll tell you how we'd approach it." />
      <JsonLd data={getBreadcrumbSchema([{ name: "Home", item: "/" }, { name: "Projects", item: "/projects" }])} />
    </>
  );
}
