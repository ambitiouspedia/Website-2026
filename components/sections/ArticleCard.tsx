import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type Article, formatDate, readingTime } from "@/lib/content";
import "./ArticleCard.css";

// Generated cover — a branded abstract thumbnail, so articles don't need
// stock photography. Swap for a real image later by adding one here.
export function ArticleCover({ a, large = false }: { a: Article; large?: boolean }) {
  return (
    <div className={`acover acover--${a.cover} ${large ? "acover--lg" : ""}`} aria-hidden="true">
      <span className="acover__grid" />
      <span className="acover__orb" />
      <span className="acover__label">{a.format ?? a.category}</span>
    </div>
  );
}

export default function ArticleCard({
  a,
  base,
  featured = false,
  i = 0,
}: {
  a: Article;
  base: "/insights" | "/learning";
  featured?: boolean;
  i?: number;
}) {
  return (
    <article className={`acard card card--hover ${featured ? "acard--featured" : ""}`} data-reveal style={{ ["--d" as string]: i }}>
      <ArticleCover a={a} large={featured} />
      <div className="acard__body">
        <p className="acard__meta">
          <span className="acard__cat">{a.category}</span>
          {a.format && <span>{a.format}</span>}
          <span>{readingTime(a)} min read</span>
        </p>
        <h3>
          <Link href={`${base}/${a.slug}`} className="acard__link">{a.title}</Link>
        </h3>
        <p className="acard__desc">{a.description}</p>
        <p className="acard__foot">
          <time dateTime={a.date}>{formatDate(a.date)}</time>
          <ArrowUpRight aria-hidden="true" />
        </p>
      </div>
    </article>
  );
}
