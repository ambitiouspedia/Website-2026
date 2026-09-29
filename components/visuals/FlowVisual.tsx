import { FileSpreadsheet, Workflow, Network, TrendingUp, ArrowRight } from "lucide-react";
import "./FlowVisual.css";

// "What we do" in one picture: Manual process → Automation → Connected
// systems → Business result. Replaces a paragraph of explanation.
const STEPS = [
  { icon: FileSpreadsheet, title: "Manual process", text: "Spreadsheets, paper, re-typing, missed follow-ups", tone: "muted" },
  { icon: Workflow, title: "Automation", text: "Workflows, reminders and approvals run themselves", tone: "teal" },
  { icon: Network, title: "Connected systems", text: "CRM, ERP, accounts and WhatsApp share one flow of data", tone: "teal" },
  { icon: TrendingUp, title: "Business result", text: "Faster work, fewer errors, a clear view of the business", tone: "amber" },
] as const;

export default function FlowVisual() {
  return (
    <ol className="flow">
      {STEPS.map((s, i) => (
        <li key={s.title} className={`flow__step flow__step--${s.tone}`} data-reveal style={{ ["--d" as string]: i }}>
          <span className="flow__num">0{i + 1}</span>
          <span className="flow__icon"><s.icon aria-hidden="true" strokeWidth={1.8} /></span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
          {i < STEPS.length - 1 && <ArrowRight className="flow__arrow" aria-hidden="true" />}
        </li>
      ))}
    </ol>
  );
}
