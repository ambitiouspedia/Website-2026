import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArticleView from "@/components/sections/ArticleView";
import { LEARNING } from "@/data/learning";
import { sortByDate } from "@/lib/content";
import "../../pages.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return LEARNING.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/learning/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const a = LEARNING.find((x) => x.slug === slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: `/learning/${slug}` },
    openGraph: { type: "article", url: `/learning/${slug}`, title: a.title, description: a.description, publishedTime: a.date },
  };
}

export default async function LearningArticlePage({ params }: PageProps<"/learning/[slug]">) {
  const { slug } = await params;
  const a = LEARNING.find((x) => x.slug === slug);
  if (!a) notFound();
  const more = sortByDate(LEARNING).filter((x) => x.slug !== slug).slice(0, 3);
  return <ArticleView a={a} section="Learning" base="/learning" more={more} />;
}
