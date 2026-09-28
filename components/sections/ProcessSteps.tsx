import { PROCESS_STEPS } from "@/data/process";
import "./ProcessSteps.css";

export default function ProcessSteps({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`process ${compact ? "process--compact" : ""}`}>
      <p className="process__sequence" aria-label="Understand, Analyze, Design, Implement, Integrate, Automate, Train, Support">
        {PROCESS_STEPS.map((s, i) => (
          <span key={s.label}>
            {s.label}
            {i < PROCESS_STEPS.length - 1 && <span className="process__arrow" aria-hidden="true">→</span>}
          </span>
        ))}
      </p>
      <ol className="process__grid">
        {PROCESS_STEPS.map((s, i) => (
          <li key={s.label} className="process__step">
            <span className="process__num">{i + 1}</span>
            <h3>{s.title}</h3>
            {!compact && <p>{s.text}</p>}
          </li>
        ))}
      </ol>
    </div>
  );
}
