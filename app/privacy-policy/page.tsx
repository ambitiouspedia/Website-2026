import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { SITE } from "@/lib/site";
import "../pages.css";

// NOTE: plain-language starting point written for the redesign — the old
// site's policy text was not available. Should be reviewed by the founder
// (and ideally a legal adviser) before launch.

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE.name} collects, uses and protects information submitted through this website.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        crumbs={[{ name: "Privacy Policy", href: "/privacy-policy" }]}
        cta={false}
      />
      <section className="section">
        <div className="container legal">
          <div className="prose">
            <p className="legal__updated">Last updated: September 2026</p>
            <p>
              This policy explains how {SITE.name} (&quot;we&quot;, &quot;us&quot;) handles
              information collected through {SITE.url.replace("https://", "")}.
            </p>

            <h2>Information we collect</h2>
            <ul>
              <li>
                <strong>Information you give us</strong> — your name, company, email address,
                phone number and message when you submit an enquiry or contact us.
              </li>
              <li>
                <strong>Technical information</strong> — standard information such as browser
                type, pages visited and approximate location, collected by our hosting provider
                and any analytics tools we use.
              </li>
            </ul>

            <h2>How we use it</h2>
            <ul>
              <li>To respond to your enquiry and discuss your requirements</li>
              <li>To provide and support services you have engaged us for</li>
              <li>To improve our website and understand how it is used</li>
            </ul>
            <p>We do not sell your personal information.</p>

            <h2>Where it is stored</h2>
            <p>
              Enquiries submitted through this website are stored in our customer relationship
              management (CRM) system, which is operated by a third-party provider on our behalf.
              We share information with service providers only as needed to run our business.
            </p>

            <h2>How long we keep it</h2>
            <p>
              We keep enquiry information for as long as needed to respond to you and for our
              legitimate business records, after which it is deleted or anonymised.
            </p>

            <h2>Your choices</h2>
            <p>
              You can ask us to access, correct or delete the personal information we hold about
              you by emailing <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>.
            </p>

            <h2>Changes to this policy</h2>
            <p>We may update this policy from time to time. The date above shows the latest version.</p>

            <h2>Contact</h2>
            <p>
              {SITE.name}, {SITE.address.locality}, {SITE.address.region}, {SITE.address.country}.
              Email: <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a> · Phone:{" "}
              <a href={SITE.phoneHref}>{SITE.phone}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
