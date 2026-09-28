import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SOLUTIONS } from "@/data/solutions";
import "./ProblemsGrid.css";

// "Sound familiar?" — the problems customers actually describe, each linking
// to how we approach it on the Solutions page.
export default function ProblemsGrid({ limit }: { limit?: number }) {
  const items = limit ? SOLUTIONS.slice(0, limit) : SOLUTIONS;
  return (
    <ul className="problems">
      {items.map((s) => (
        <li key={s.slug}>
          <Link href={`/solutions#${s.slug}`} className="problem">
            <span className="problem__quote">“{s.problem}”</span>
            <span className="problem__cta">
              How we solve it <ArrowRight aria-hidden="true" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
