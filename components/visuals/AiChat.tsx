import { Sparkles, Database, FileText, MessageCircle } from "lucide-react";
import "./AiChat.css";

// Illustrative AI assistant conversation, answering from ERP data. Messages
// appear in sequence once the card scrolls into view (data-reveal → .is-in).
// Sample content only.
export default function AiChat() {
  return (
    <figure className="chat glass-dark" data-reveal>
      <figcaption className="sr-only">
        Illustration: a staff member asks the company AI assistant about pending dispatches and it answers from ERP data.
      </figcaption>
      <div aria-hidden="true">
        <div className="chat__head">
          <span className="chat__avatar"><Sparkles /></span>
          <div>
            <b>Business assistant</b>
            <span className="chat__status">Connected to ERP · CRM · Documents</span>
          </div>
        </div>
        <div className="chat__body">
          <p className="chat__msg chat__msg--me" style={{ ["--s" as string]: 0 }}>Which orders are pending dispatch this week?</p>
          <div className="chat__msg chat__msg--ai" style={{ ["--s" as string]: 1 }}>
            <p>Here&apos;s what&apos;s pending, from your ERP:</p>
            <ul className="chat__table">
              <li><span>Order</span><span>Customer</span><span>Due</span></li>
              <li><span>SO-0418</span><span>Customer A</span><span className="is-warn">Today</span></li>
              <li><span>SO-0421</span><span>Customer B</span><span>Thu</span></li>
              <li><span>SO-0425</span><span>Customer C</span><span>Fri</span></li>
            </ul>
          </div>
          <p className="chat__msg chat__msg--me" style={{ ["--s" as string]: 2 }}>Send Customer A an update on WhatsApp.</p>
          <p className="chat__msg chat__msg--ai chat__done" style={{ ["--s" as string]: 3 }}>
            <MessageCircle /> Update sent and logged against the customer.
          </p>
        </div>
        <div className="chat__sources">
          <span><Database /> ERPNext</span>
          <span><FileText /> Policies</span>
          <span><MessageCircle /> WhatsApp</span>
        </div>
      </div>
    </figure>
  );
}
