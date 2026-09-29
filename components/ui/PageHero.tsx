import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

// Inner-page hero: light gradient, breadcrumb, eyebrow, H1, one-line lead.
// `visual` renders on the right on wide screens (glass illustration etc.).
export default function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  cta = true,
  actions,
  visual,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  crumbs: { name: string; href: string }[];
  cta?: boolean;
  actions?: ReactNode;
  visual?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className={`page-hero ${visual ? "page-hero--split" : ""}`}>
      <div className="blobs" aria-hidden="true"><span /><span /><span /></div>
      <div className="container page-hero__grid">
        <div>
          <nav aria-label="Breadcrumb" className="breadcrumbs">
            <Link href="/">Home</Link>
            {crumbs.map((c, i) => (
              <span key={c.href} style={{ display: "contents" }}>
                <span aria-hidden="true">/</span>
                {i === crumbs.length - 1 ? <span aria-current="page">{c.name}</span> : <Link href={c.href}>{c.name}</Link>}
              </span>
            ))}
          </nav>
          <p className="eyebrow" style={{ marginTop: 24 }}>{eyebrow}</p>
          <h1>{title}</h1>
          {lead && <p className="page-hero__lead">{lead}</p>}
          {children}
          {(cta || actions) && (
            <div className="page-hero__actions">
              {actions}
              {cta && (
                <Link href="/contact" className="btn btn--primary">
                  Book a consultation <ArrowRight aria-hidden="true" />
                </Link>
              )}
            </div>
          )}
        </div>
        {visual && <div className="page-hero__visual">{visual}</div>}
      </div>
    </section>
  );
}
