import { SALES_FLOW } from "@/data/process";
import "./SalesFlow.css";

// Lead → Follow-up → Quotation → Negotiation → Order → Customer → Repeat Business.
// "Repeat Business" loops back to the start — drawn as a return arrow.
export default function SalesFlow() {
  return (
    <div className="flow">
      <ol className="flow__steps">
        {SALES_FLOW.map((step, i) => (
          <li key={step} className={i === SALES_FLOW.length - 1 ? "is-last" : ""}>
            <span className="flow__num">{String(i + 1).padStart(2, "0")}</span>
            <span className="flow__label">{step}</span>
          </li>
        ))}
      </ol>
      <p className="flow__loop">
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12a9 9 0 0 1 15.5-6.2L21 8" /><path d="M21 3v5h-5" />
          <path d="M21 12a9 9 0 0 1-15.5 6.2L3 16" /><path d="M3 21v-5h5" />
        </svg>
        Every stage tracked in one system, with follow-ups and updates automated.
      </p>
    </div>
  );
}
