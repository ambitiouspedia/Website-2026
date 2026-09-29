import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArticleView from "@/components/sections/ArticleView";
import { INSIGHTS } from "@/data/insights";
import { sortByDate } from "@/lib/content";
import "../../pages.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return INSIGHTS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const a = INSIGHTS.find((x) => x.slug === slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: `/insights/${slug}` },
    openGraph: { type: "article", url: `/insights/${slug}`, title: a.title, description: a.description, publishedTime: a.date },
  };
}

export default async function InsightPage({ params }: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const a = INSIGHTS.find((x) => x.slug === slug);
  if (!a) notFound();
  const more = sortByDate(INSIGHTS).filter((x) => x.slug !== slug).slice(0, 3);
  return <ArticleView a={a} section="Insights" base="/insights" more={more} />;
}
