import { Sparkles, MessageCircle, Check, TrendingUp } from "lucide-react";
import "./HeroVisual.css";

// Illustrative product UI — a connected business dashboard. Sample labels
// only (no real client data); hidden from assistive tech with a text
// description instead.
const STAGES = [
  { label: "Leads", h: 88 },
  { label: "Follow-up", h: 70 },
  { label: "Quotation", h: 54 },
  { label: "Order", h: 40 },
  { label: "Repeat", h: 30 },
];

export default function HeroVisual() {
  return (
    <figure className="hv">
      <figcaption className="sr-only">
        Illustration: a sales pipeline dashboard connected to an AI assistant and WhatsApp updates.
      </figcaption>
      <div className="hv__stage" aria-hidden="true">
        {/* Main dashboard card */}
        <div className="hv__card hv__main glass">
          <div className="hv__head">
            <span className="hv__dots"><i /><i /><i /></span>
            <span className="hv__title">Sales pipeline</span>
            <span className="hv__live"><i /> Live</span>
          </div>
          <div className="hv__bars">
            {STAGES.map((s, i) => (
              <div key={s.label} className="hv__col">
                <span className="hv__bar" style={{ height: `${s.h}%`, ["--i" as string]: i }} />
                <span className="hv__lbl">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="hv__row">
            <div className="hv__metric">
              <TrendingUp />
              <span><b>Follow-ups</b> automated</span>
            </div>
            <div className="hv__chips"><span>CRM</span><span>ERP</span><span>Books</span></div>
          </div>
        </div>

        {/* AI assistant bubble */}
        <div className="hv__card hv__ai glass">
          <p className="hv__q">Which quotations are pending follow-up?</p>
          <p className="hv__a">
            <Sparkles />
            <span>Found them in your CRM — reminders scheduled for today.</span>
          </p>
        </div>

        {/* WhatsApp notification */}
        <div className="hv__card hv__wa glass">
          <span className="hv__wa-icon"><MessageCircle /></span>
          <span><b>WhatsApp</b> Quotation sent to customer</span>
          <Check className="hv__ok" />
        </div>
      </div>
    </figure>
  );
}
