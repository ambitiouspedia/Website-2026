import { INDUSTRIES } from "@/data/industries";
import Icon from "@/components/ui/Icon";
import "./IndustryTiles.css";

// Businesses we work with. `example` (real, founder-confirmed) shows on the
// tile; the rest describe typical needs only — no implied experience.
export default function IndustryTiles() {
  return (
    <ul className="ind">
      {INDUSTRIES.map((ind, i) => (
        <li key={ind.slug} id={ind.slug} className={`ind__tile card card--hover spot ${ind.example ? "ind__tile--proof" : ""}`} data-reveal style={{ ["--d" as string]: i % 5 }}>
          <span className="icon-tile"><Icon name={ind.icon} /></span>
          <h3>{ind.name}</h3>
          <p>{ind.needs}</p>
          {ind.example && <span className="ind__example">Worked with: {ind.example}</span>}
        </li>
      ))}
    </ul>
  );
}
