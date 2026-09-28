import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  cta = true,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  crumbs: { name: string; href: string }[];
  cta?: boolean;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <nav aria-label="Breadcrumb" className="breadcrumbs">
          <Link href="/">Home</Link>
          {crumbs.map((c, i) => (
            <span key={c.href} style={{ display: "contents" }}>
              <span aria-hidden="true">/</span>
              {i === crumbs.length - 1 ? (
                <span aria-current="page">{c.name}</span>
              ) : (
                <Link href={c.href}>{c.name}</Link>
              )}
            </span>
          ))}
        </nav>
        <p className="eyebrow" style={{ marginTop: 28 }}>{eyebrow}</p>
        <h1>{title}</h1>
        {lead && <p className="page-hero__lead">{lead}</p>}
        {cta && (
          <div className="page-hero__actions">
            <Link href="/contact" className="btn btn--primary">
              Book a consultation <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
