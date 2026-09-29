import Image from "next/image";
import { INTEGRATION_NODES } from "@/data/process";
import "./IntegrationHub.css";

// Hub-and-spoke diagram: your business at the centre, every system connected
// to it. SVG lines with a slow "data flowing" dash; HTML labels stay crisp.
const R = 38;

const nodes = INTEGRATION_NODES.map((label, i) => {
  const a = (-90 + (360 / INTEGRATION_NODES.length) * i) * (Math.PI / 180);
  return { label, x: +(50 + R * Math.cos(a)).toFixed(2), y: +(50 + R * Math.sin(a)).toFixed(2) };
});

export default function IntegrationHub({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <figure className={`hub hub--${tone}`}>
      <figcaption className="sr-only">
        Diagram: CRM, ERP, accounting, website, WhatsApp, AI and email all connected through your business.
      </figcaption>
      <div className="hub__box" aria-hidden="true">
        <svg className="hub__lines" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={R} className="hub__ring" />
          {nodes.map((n, i) => (
            <line key={n.label} x1="50" y1="50" x2={n.x} y2={n.y} className="hub__spoke" style={{ animationDelay: `${i * -0.4}s` }} />
          ))}
        </svg>
        <div className="hub__core">
          <Image src="/images/logo-mark.png" alt="" width={30} height={46} />
          <span>Your business</span>
        </div>
        <ul className="hub__nodes">
          {nodes.map((n) => (
            <li key={n.label} style={{ left: `${n.x}%`, top: `${n.y}%` }}>{n.label}</li>
          ))}
        </ul>
      </div>
    </figure>
  );
}
