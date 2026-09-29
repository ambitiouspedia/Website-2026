"use client";

import { useState } from "react";
import type { Article } from "@/lib/content";
import ArticleCard from "./ArticleCard";

// Filterable article grid. Every card is server-rendered into the HTML;
// filtering only hides cards client-side, so all articles stay crawlable.
export default function ArticleExplorer({
  articles,
  base,
  filters,
  field,
}: {
  articles: Article[];
  base: "/insights" | "/learning";
  filters: string[];
  field: "category" | "format";
}) {
  const [active, setActive] = useState<string>("All");
  // Only offer filters that have at least one article
  const available = filters.filter((f) => articles.some((a) => a[field] === f));
  const shown = active === "All" ? articles : articles.filter((a) => a[field] === active);

  return (
    <>
      {available.length > 1 && (
        <div className="filters" role="group" aria-label="Filter articles">
          {["All", ...available].map((f) => (
            <button key={f} type="button" aria-pressed={active === f} onClick={() => setActive(f)}>{f}</button>
          ))}
        </div>
      )}
      {shown.length === 0 ? (
        <p className="empty-note">New articles are on the way.</p>
      ) : (
        <div className="article-grid">
          {shown.map((a, i) => <ArticleCard key={a.slug} a={a} base={base} i={i % 3} />)}
        </div>
      )}
    </>
  );
}
