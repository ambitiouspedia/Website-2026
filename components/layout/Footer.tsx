import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { CATEGORIES, getServicesByCategory } from "@/data/services";
import { Logo } from "./Header";
import "./Footer.css";

const COMPANY = [
  { label: "About us", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Projects", href: "/projects" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "Learning", href: "/learning" },
  { label: "Contact", href: "/contact" },
];

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" /><circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  const services = CATEGORIES.flatMap((c) => getServicesByCategory(c.id));
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo tone="light" />
            <p>Technology, AI and automation that help growing businesses run better.</p>
            <Link href="/contact" className="btn btn--primary btn--sm">Book a consultation <ArrowRight aria-hidden="true" /></Link>
          </div>

          <div>
            <h2 className="footer__heading">Services</h2>
            <ul className="footer__links footer__links--2col">
              {services.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.shortName}</Link></li>)}
            </ul>
          </div>

          <div>
            <h2 className="footer__heading">Company</h2>
            <ul className="footer__links">
              {COMPANY.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
            </ul>
          </div>

          <div>
            <h2 className="footer__heading">Contact</h2>
            <ul className="footer__contact">
              <li><Phone aria-hidden="true" /><a href={SITE.phoneHref}>{SITE.phone}</a></li>
              <li><Mail aria-hidden="true" /><span><a href={`mailto:${SITE.salesEmail}`}>{SITE.salesEmail}</a><br /><a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a></span></li>
              <li><MapPin aria-hidden="true" /><span>{SITE.address.locality}, {SITE.address.region}, {SITE.address.country}</span></li>
            </ul>
            <div className="footer__social">
              <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Ambitious Pedia on LinkedIn"><LinkedInIcon /></a>
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Ambitious Pedia on Instagram"><InstagramIcon /></a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} {SITE.name} · GSTIN {SITE.gstin}</p>
          <div className="footer__legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
