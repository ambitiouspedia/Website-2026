import Link from "next/link";
import { ArrowRight, AlertCircle } from "lucide-react";
import { SOLUTIONS } from "@/data/solutions";
import "./ProblemsGrid.css";

// "Sound familiar?" — the problems customers actually describe, each linking
// to how we approach it.
export default function ProblemsGrid({ limit }: { limit?: number }) {
  const items = limit ? SOLUTIONS.slice(0, limit) : SOLUTIONS;
  return (
    <ul className="problems">
      {items.map((s, i) => (
        <li key={s.slug} data-reveal style={{ ["--d" as string]: i % 3 }}>
          <Link href={`/solutions#${s.slug}`} className="problem card card--hover spot">
            <AlertCircle className="problem__icon" aria-hidden="true" />
            <span className="problem__quote">“{s.problem}”</span>
            <span className="problem__cta">See how we solve it <ArrowRight aria-hidden="true" /></span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
