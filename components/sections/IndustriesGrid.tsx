import { Factory, Truck, Sun, Smartphone, type LucideIcon } from "lucide-react";
import { INDUSTRIES } from "@/data/industries";
import "./IndustriesGrid.css";

const ICONS: Record<string, LucideIcon> = {
  manufacturing: Factory,
  "fmcg-distribution": Truck,
  "solar-energy": Sun,
  "software-technology": Smartphone,
};

export default function IndustriesGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <ul className="industries">
      {INDUSTRIES.map((ind) => {
        const Icon = ICONS[ind.slug];
        return (
          <li key={ind.slug} id={ind.slug} className="industry">
            <span className="icon-badge"><Icon aria-hidden="true" strokeWidth={1.8} /></span>
            <h3>{ind.name}</h3>
            <p>{ind.summary}</p>
            {detailed && (
              <ul className="industry__challenges">
                {ind.challenges.map((c) => <li key={c}>{c}</li>)}
              </ul>
            )}
            {(ind.clients.length > 0 || ind.workDone) && (
              <p className="industry__proof">
                {ind.clients.length > 0 && (
                  <>Worked with <strong>{ind.clients.join(", ")}</strong></>
                )}
                {ind.workDone && <>{ind.workDone}</>}
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
}
