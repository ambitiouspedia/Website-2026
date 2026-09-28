import Image from "next/image";
import { INTEGRATION_NODES } from "@/data/process";
import "./IntegrationHub.css";

// Hub-and-spoke diagram: your business at the centre, every system connected
// to it. Lines are SVG (with a slow "data flowing" dash animation); labels
// are HTML so they stay crisp and scale with the layout.
const R = 38; // node ring radius, % of the box

const nodes = INTEGRATION_NODES.map((label, i) => {
  const a = (-90 + (360 / INTEGRATION_NODES.length) * i) * (Math.PI / 180);
  return {
    label,
    x: +(50 + R * Math.cos(a)).toFixed(2),
    y: +(50 + R * Math.sin(a)).toFixed(2),
  };
});

export default function IntegrationHub({ caption = true }: { caption?: boolean }) {
  return (
    <figure className="hub">
      <div className="hub__box">
        <svg className="hub__lines" viewBox="0 0 100 100" aria-hidden="true">
          <circle cx="50" cy="50" r={R} className="hub__ring" />
          {nodes.map((n, i) => (
            <line
              key={n.label}
              x1="50" y1="50" x2={n.x} y2={n.y}
              className="hub__spoke"
              style={{ animationDelay: `${i * -0.45}s` }}
            />
          ))}
        </svg>

        <div className="hub__core">
          <Image src="/images/logo-mark.png" alt="" width={34} height={52} />
          <span>Your business</span>
        </div>

        <ul className="hub__nodes">
          {nodes.map((n) => (
            <li key={n.label} style={{ left: `${n.x}%`, top: `${n.y}%` }}>{n.label}</li>
          ))}
        </ul>
      </div>
      {caption && (
        <figcaption className="hub__caption">
          One connected flow of data — entered once, available everywhere.
        </figcaption>
      )}
    </figure>
  );
}
