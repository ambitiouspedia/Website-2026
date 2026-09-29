import Link from "next/link";
import { ArrowRight, Check, Server, HardDrive, ShieldCheck, Mail } from "lucide-react";
import { getService } from "@/data/services";
import "./FocusPlatforms.css";

// The three focus areas the founder wants to lead with, each with a small
// illustrative UI so the card explains itself at a glance.

function ZohoMini() {
  const apps = ["CRM", "Books", "Inventory", "People", "Desk", "Analytics"];
  return (
    <div className="fp-mini fp-mini--zoho" aria-hidden="true">
      <span className="fp-mini__label">Zoho One</span>
      <div className="fp-apps">
        {apps.map((a, i) => <span key={a} style={{ ["--i" as string]: i }}>{a}</span>)}
      </div>
    </div>
  );
}

function MailMini() {
  const rows = ["SPF", "DKIM", "DMARC"];
  return (
    <div className="fp-mini fp-mini--mail" aria-hidden="true">
      <div className="fp-mail">
        <Mail /> <span>you@<b>yourcompany</b>.com</span>
      </div>
      <div className="fp-checks">
        {rows.map((r, i) => (
          <span key={r} style={{ ["--i" as string]: i }}><Check /> {r}</span>
        ))}
      </div>
    </div>
  );
}

function CloudMini() {
  const rows = [
    { icon: Server, label: "App server", state: "Running" },
    { icon: HardDrive, label: "Nightly backup", state: "Completed" },
    { icon: ShieldCheck, label: "Access (MFA)", state: "Enforced" },
  ];
  return (
    <div className="fp-mini fp-mini--cloud" aria-hidden="true">
      {rows.map((r, i) => (
        <div key={r.label} className="fp-srv" style={{ ["--i" as string]: i }}>
          <r.icon /> <span>{r.label}</span> <b>{r.state}</b>
        </div>
      ))}
    </div>
  );
}

const ITEMS = [
  { slug: "zoho-solutions", visual: <ZohoMini /> },
  { slug: "microsoft-365", visual: <MailMini /> },
  { slug: "it-infrastructure-cloud", visual: <CloudMini /> },
];

export default function FocusPlatforms() {
  return (
    <div className="fp">
      {ITEMS.map(({ slug, visual }, i) => {
        const s = getService(slug)!;
        return (
          <Link key={slug} href={`/services/${slug}`} className="fp__card card card--hover spot" data-reveal style={{ ["--d" as string]: i }}>
            {visual}
            <div className="fp__body">
              <h3>{s.name}</h3>
              <p>{s.summary}</p>
              <ul className="fp__hl">
                {s.highlights.map((h) => <li key={h}><Check aria-hidden="true" /> {h}</li>)}
              </ul>
              <span className="link-arrow">Explore {s.shortName} <ArrowRight aria-hidden="true" /></span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
