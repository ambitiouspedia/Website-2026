import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICE_GROUPS, getServicesByGroup } from "@/data/services";
import ServiceIcon from "@/components/ui/ServiceIcon";
import "./ServiceGroups.css";

// Services organised into the four categories from the brief, rather than
// one long list. Each group lists its service pages with a one-line summary.
export default function ServiceGroups() {
  return (
    <div className="groups">
      {SERVICE_GROUPS.map((group, gi) => (
        <section key={group.id} className="group" aria-labelledby={`group-${group.id}`}>
          <div className="group__head">
            <span className="group__index">0{gi + 1}</span>
            <h3 id={`group-${group.id}`}>{group.name}</h3>
            <p>{group.summary}</p>
            <ul className="group__tags">
              {group.items.map((it) => <li key={it.label}>{it.label}</li>)}
            </ul>
          </div>
          <ul className="group__services">
            {getServicesByGroup(group.id).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="svc-card">
                  <span className="icon-badge"><ServiceIcon name={s.icon} /></span>
                  <span className="svc-card__body">
                    <span className="svc-card__title">{s.name}</span>
                    <span className="svc-card__text">{s.summary}</span>
                  </span>
                  <ArrowRight className="svc-card__arrow" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
