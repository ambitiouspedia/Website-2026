import { RefreshCw } from "lucide-react";
import { SALES_FLOW } from "@/data/process";
import "./SalesFlow.css";

// Lead → … → Repeat business, with the last stage looping back.
export default function SalesFlow() {
  return (
    <div className="sflow" data-reveal>
      <ol className="sflow__steps">
        {SALES_FLOW.map((step, i) => (
          <li key={step} className={i === SALES_FLOW.length - 1 ? "is-last" : ""} style={{ ["--i" as string]: i }}>
            <span className="sflow__num">{String(i + 1).padStart(2, "0")}</span>
            <span className="sflow__label">{step}</span>
          </li>
        ))}
      </ol>
      <p className="sflow__loop">
        <RefreshCw aria-hidden="true" />
        Every stage tracked in one system — follow-ups and updates automated.
      </p>
    </div>
  );
}
