import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { SITE } from "@/lib/site";
import "../pages.css";

// NOTE: plain-language starting point written for the redesign — should be
// reviewed by the founder (and ideally a legal adviser) before launch.

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of use for the ${SITE.name} website.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        crumbs={[{ name: "Terms of Service", href: "/terms" }]}
        cta={false}
      />
      <section className="section">
        <div className="container legal">
          <div className="prose">
            <p className="legal__updated">Last updated: September 2026</p>
            <p>
              These terms apply to your use of the {SITE.name} website. By using the website you
              agree to them.
            </p>

            <h2>Website content</h2>
            <p>
              The content on this website is for general information about our services. It does
              not form an offer or contract. The scope, price and terms of any project are agreed
              separately in writing.
            </p>

            <h2>Intellectual property</h2>
            <p>
              The website design, text and our logo belong to {SITE.name}. Third-party product
              names and trademarks mentioned (such as Zoho, ERPNext and Tally) belong to their
              respective owners and are used only to describe the platforms we work with; their
              mention does not imply endorsement or partnership.
            </p>

            <h2>Acceptable use</h2>
            <p>
              Please do not misuse the website — for example by attempting to gain unauthorised
              access, disrupting it, or submitting false or malicious information through its forms.
            </p>

            <h2>Links to other websites</h2>
            <p>We are not responsible for the content of external websites linked from this site.</p>

            <h2>Liability</h2>
            <p>
              We work to keep the information on this website accurate, but it is provided
              &quot;as is&quot;. To the extent permitted by law, we are not liable for any loss
              arising from use of this website.
            </p>

            <h2>Governing law</h2>
            <p>These terms are governed by the laws of India.</p>

            <h2>Contact</h2>
            <p>
              Questions about these terms: <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
