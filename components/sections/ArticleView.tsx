import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import ArticleCard, { ArticleCover } from "./ArticleCard";
import { type Article, type Block, formatDate, readingTime } from "@/lib/content";
import { getService } from "@/data/services";
import { getArticleSchema, getBreadcrumbSchema, JsonLd } from "@/lib/seo";

function slugify(t: string) {
  return t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function Blocks({ body }: { body: Block[] }) {
  return (
    <>
      {body.map((b, i) => {
        switch (b.type) {
          case "h2": return <h2 key={i} id={slugify(b.text)}>{b.text}</h2>;
          case "h3": return <h3 key={i}>{b.text}</h3>;
          case "ul": return <ul key={i}>{b.items.map((it) => <li key={it}>{it}</li>)}</ul>;
          case "ol": return <ol key={i}>{b.items.map((it) => <li key={it}>{it}</li>)}</ol>;
          case "quote": return <blockquote key={i}>{b.text}</blockquote>;
          default: return <p key={i}>{b.text}</p>;
        }
      })}
    </>
  );
}

// Shared article page for Insights and Learning.
export default function ArticleView({
  a,
  section,
  base,
  more,
}: {
  a: Article;
  section: "Insights" | "Learning";
  base: "/insights" | "/learning";
  more: Article[];
}) {
  const path = `${base}/${a.slug}`;
  const toc = a.body.filter((b) => b.type === "h2") as { type: "h2"; text: string }[];
  const services = (a.services ?? []).map(getService).filter((s) => s !== undefined);

  return (
    <>
      <PageHero
        eyebrow={a.format ? `${a.format} · ${a.category}` : a.category}
        title={a.title}
        lead={a.description}
        crumbs={[{ name: section, href: base }, { name: a.title, href: path }]}
        cta={false}
      >
        <p className="article-hero__meta">
          <span>By <b>{a.author}</b></span>
          <time dateTime={a.date}>{formatDate(a.date)}</time>
          <span>{readingTime(a)} min read</span>
        </p>
      </PageHero>

      <section className="section">
        <div className="container article-layout">
          <article>
            <div className="article-cover"><ArticleCover a={a} large /></div>
            <div className="prose"><Blocks body={a.body} /></div>
          </article>
          <aside className="article-aside">
            {toc.length > 2 && (
              <nav className="card" aria-label="On this page">
                <h2>On this page</h2>
                <ul>{toc.map((h) => <li key={h.text}><a href={`#${slugify(h.text)}`}>{h.text}</a></li>)}</ul>
              </nav>
            )}
            {services.length > 0 && (
              <div className="card">
                <h2>Related services</h2>
                <ul>{services.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.shortName} →</Link></li>)}</ul>
              </div>
            )}
            <div className="card" style={{ background: "var(--teal-50)" }}>
              <h2>Need help with this?</h2>
              <p style={{ margin: "8px 0 14px", fontSize: 14.5, color: "var(--text-2)" }}>Talk to us about your situation.</p>
              <Link href="/contact" className="btn btn--primary btn--sm">Book a consultation <ArrowRight aria-hidden="true" /></Link>
            </div>
          </aside>
        </div>
      </section>

      {more.length > 0 && (
        <section className="section section--white">
          <div className="container">
            <div className="section-head section-head--row">
              <div><p className="eyebrow">{section}</p><h2>Keep reading</h2></div>
              <Link href={base} className="link-arrow">All {section.toLowerCase()} <ArrowRight aria-hidden="true" /></Link>
            </div>
            <div className="article-grid">
              {more.map((m, i) => <ArticleCard key={m.slug} a={m} base={base} i={i} />)}
            </div>
          </div>
        </section>
      )}

      <div className="cta--spaced"><CtaBand /></div>
      <JsonLd data={getArticleSchema({ title: a.title, description: a.description, date: a.date, author: a.author, path })} />
      <JsonLd data={getBreadcrumbSchema([{ name: "Home", item: "/" }, { name: section, item: base }, { name: a.title, item: path }])} />
    </>
  );
}
