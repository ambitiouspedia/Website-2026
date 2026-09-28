import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { SITE } from "@/lib/site";
import { getBreadcrumbSchema, JsonLd } from "@/lib/seo";
import "../pages.css";

export const metadata: Metadata = {
  title: "Contact Us — Book a Consultation",
  description:
    "Talk to Ambitious Pedia about ERP, CRM, AI automation, custom software, integrations, IT or digital marketing. Call +91 9226744588 or email sales@ambitiouspedia.com.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book a consultation."
        lead="Tell us what's slowing your business down. We'll understand your process and recommend the right next step."
        crumbs={[{ name: "Contact", href: "/contact" }]}
        cta={false}
      />

      <section className="section section--sand">
        <div className="container contact-grid">
          <EnquiryForm />

          <div className="contact-cards">
            <div className="contact-card">
              <span className="icon-badge"><Phone aria-hidden="true" /></span>
              <div>
                <h2>Call us</h2>
                <a href={SITE.phoneHref}>{SITE.phone}</a>
              </div>
            </div>
            <div className="contact-card">
              <span className="icon-badge"><MessageCircle aria-hidden="true" /></span>
              <div>
                <h2>WhatsApp</h2>
                <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a>
              </div>
            </div>
            <div className="contact-card">
              <span className="icon-badge"><Mail aria-hidden="true" /></span>
              <div>
                <h2>Email</h2>
                <p>New projects: <a href={`mailto:${SITE.salesEmail}`}>{SITE.salesEmail}</a></p>
                <p>Existing clients: <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a></p>
              </div>
            </div>
            <div className="contact-card">
              <span className="icon-badge"><MapPin aria-hidden="true" /></span>
              <div>
                <h2>Office</h2>
                <p>{SITE.address.locality}, {SITE.address.region}, {SITE.address.country}</p>
                <div className="contact-card__links">
                  <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Contact", item: "/contact" },
        ])}
      />
    </>
  );
}
