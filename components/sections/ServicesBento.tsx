import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES, getServicesByCategory } from "@/data/services";
import Icon from "@/components/ui/Icon";
import "./ServicesBento.css";

// Five service categories as an asymmetric bento grid. Each card: icon,
// title, one line, the capabilities as tags, and links to its service pages.
export default function ServicesBento() {
  return (
    <div className="bento">
      {CATEGORIES.map((cat, i) => {
        const services = getServicesByCategory(cat.id);
        return (
          <article key={cat.id} className={`bento__card bento__card--${cat.id} card card--hover spot`} data-reveal style={{ ["--d" as string]: i }}>
            <div className="bento__top">
              <span className="icon-tile"><Icon name={cat.icon} /></span>
              <span className="bento__count">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3>{cat.name}</h3>
            <p>{cat.summary}</p>
            <ul className="bento__tags">
              {cat.items.map((it) => <li key={it}>{it}</li>)}
            </ul>
            <ul className="bento__links">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>
                    {s.shortName} <ArrowUpRight aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        );
      })}
    </div>
  );
}
