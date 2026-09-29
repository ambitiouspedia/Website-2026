import Link from "next/link";
import { PROJECTS, type Project } from "@/data/projects";
import Icon from "@/components/ui/Icon";
import "./ProjectCards.css";

// Project cards: Problem → Solution → Technology → Outcome.
// `compact` (home page) shows problem + outcome only and scrolls sideways
// on phones; the full version is used on /projects.
export default function ProjectCards({ items = PROJECTS, compact = false }: { items?: Project[]; compact?: boolean }) {
  return (
    <ul className={`projects ${compact ? "projects--compact" : ""}`}>
      {items.map((p, i) => (
        <li key={p.slug} id={p.slug} className="project card card--hover spot" data-reveal style={{ ["--d" as string]: i % 4 }}>
          <div className="project__top">
            <span className="icon-tile"><Icon name={p.icon === "ai" ? "bot" : p.icon} /></span>
            <span className="project__tag">{p.tag}</span>
          </div>
          <h3>{p.title}</h3>
          {p.client && <p className="project__client">For {p.client}</p>}
          <dl className="project__flow">
            <div><dt>Problem</dt><dd>{p.problem}</dd></div>
            {!compact && <div><dt>Solution</dt><dd>{p.solution}</dd></div>}
            {!compact && (
              <div>
                <dt>Technology</dt>
                <dd className="project__tech">{p.technology.map((t) => <span key={t}>{t}</span>)}</dd>
              </div>
            )}
            <div className="project__outcome"><dt>Outcome</dt><dd>{p.outcome}</dd></div>
          </dl>
          {compact && <Link href={`/projects#${p.slug}`} className="project__link" aria-label={`Read more about ${p.title}`} />}
        </li>
      ))}
    </ul>
  );
}
