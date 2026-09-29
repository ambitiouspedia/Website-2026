import type { Metadata } from "next";
import Link from "next/link";
import "./pages.css";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "70vh" }}>
      <div className="blobs" aria-hidden="true"><span /><span /><span /></div>
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>We couldn&apos;t find that page.</h1>
        <p className="page-hero__lead">It may have moved when we rebuilt the website.</p>
        <div className="page-hero__actions">
          <Link href="/" className="btn btn--primary">Go to the homepage</Link>
          <Link href="/services" className="btn btn--secondary">View services</Link>
        </div>
      </div>
    </section>
  );
}
