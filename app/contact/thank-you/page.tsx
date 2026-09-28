import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { SITE } from "@/lib/site";
import "../../pages.css";

// Zoho Web-to-Lead redirects here after a successful submission (set this
// URL as the webform's returnURL in Zoho CRM).
export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <PageHero
        eyebrow="Enquiry received"
        title="Thank you — we've received your enquiry."
        lead={`Our team will get back to you shortly. If it's urgent, call us on ${SITE.phone}.`}
        crumbs={[
          { name: "Contact", href: "/contact" },
          { name: "Thank you", href: "/contact/thank-you" },
        ]}
        cta={false}
      />
      <section className="section">
        <div className="container">
          <p className="prose">
            <Link href="/services" className="text-link">Browse our services</Link>
          </p>
        </div>
      </section>
    </>
  );
}
