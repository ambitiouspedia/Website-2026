import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import { getPublishedCaseStudies, getCaseStudy } from "@/data/caseStudies";
import { getService } from "@/data/services";
import { getBreadcrumbSchema, JsonLd } from "@/lib/seo";
import "../../pages.css";

// Only published case studies are generated; unpublished drafts 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedCaseStudies().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/case-studies/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: cs.title,
    description: cs.summary,
    alternates: { canonical: `/case-studies/${slug}` },
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/case-studies/[slug]">) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  // Result is only rendered when real, measured results exist.
  const sections = [
    { title: "Problem", items: cs.problem },
    { title: "Solution", items: cs.solution },
    { title: "Technology", items: cs.technology },
    { title: "Implementation", items: cs.implementation },
    { title: "Result", items: cs.results },
  ].filter((s) => s.items.length > 0);

  return (
    <>
      <PageHero
        eyebrow={`${cs.industry} · ${cs.client}`}
        title={cs.title}
        lead={cs.summary}
        crumbs={[
          { name: "Case studies", href: "/case-studies" },
          { name: cs.client, href: `/case-studies/${slug}` },
        ]}
      />
      <section className="section">
        <div className="container legal prose">
          {sections.map((s) => (
            <div key={s.title}>
              <h2>{s.title}</h2>
              <ul>{s.items.map((it) => <li key={it}>{it}</li>)}</ul>
            </div>
          ))}
          <h2>Services involved</h2>
          <ul>
            {cs.services.map((slug) => {
              const svc = getService(slug);
              return svc ? <li key={slug}><Link href={`/services/${slug}`}>{svc.name}</Link></li> : null;
            })}
          </ul>
        </div>
      </section>
      <CtaBand />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Case studies", item: "/case-studies" },
          { name: cs.title, item: `/case-studies/${slug}` },
        ])}
      />
    </>
  );
}
