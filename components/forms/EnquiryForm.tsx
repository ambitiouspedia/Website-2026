"use client";

import { useRef, useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/data/services";
import { SITE } from "@/lib/site";
import { ZOHO_WEBFORM, ZOHO_FIELDS } from "@/lib/zoho";
import "./EnquiryForm.css";

// Posts natively to Zoho CRM Web-to-Lead (see lib/zoho.ts). The only JS on
// submit folds the "service of interest" and message into Zoho's single
// Description field, then lets the browser's normal POST continue.
// The service dropdown and message box deliberately have no `name`, so they
// are not posted as separate params (Zoho reserves a "service" param).
export default function EnquiryForm({
  defaultService = "",
  title = "Tell us about your requirement",
}: {
  defaultService?: string;
  title?: string;
}) {
  const descriptionRef = useRef<HTMLInputElement>(null);
  const serviceRef = useRef<HTMLSelectElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [mailtoSent, setMailtoSent] = useState(false);
  const zohoReady = ZOHO_WEBFORM.action !== "";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const data = new FormData(e.currentTarget);
    const service = serviceRef.current?.value || "Not specified";
    const message = messageRef.current?.value || "";
    const description = `Service of interest: ${service}\n\n${message}`;

    if (zohoReady) {
      if (descriptionRef.current) descriptionRef.current.value = description;
      return; // native POST to Zoho continues
    }

    // Fallback until the Zoho webform is configured: pre-filled email.
    e.preventDefault();
    const body = [
      `Name: ${data.get(ZOHO_FIELDS.firstName)} ${data.get(ZOHO_FIELDS.lastName)}`,
      `Company: ${data.get(ZOHO_FIELDS.company)}`,
      `Email: ${data.get(ZOHO_FIELDS.email)}`,
      `Phone: ${data.get(ZOHO_FIELDS.phone)}`,
      "",
      description,
    ].join("\n");
    window.location.href = `mailto:${SITE.salesEmail}?subject=${encodeURIComponent(
      `Website enquiry — ${service}`
    )}&body=${encodeURIComponent(body)}`;
    setMailtoSent(true);
  }

  return (
    <form
      className="enquiry"
      action={zohoReady ? ZOHO_WEBFORM.action : undefined}
      method="POST"
      acceptCharset="UTF-8"
      onSubmit={handleSubmit}
    >
      <h2 className="enquiry__title">{title}</h2>

      {Object.entries(ZOHO_WEBFORM.hidden).map(([name, value]) => (
        <input key={name} type="hidden" name={name} value={value} />
      ))}
      <input ref={descriptionRef} type="hidden" name={ZOHO_FIELDS.description} />

      <div className="enquiry__grid">
        <label className="field">
          <span>First name *</span>
          <input name={ZOHO_FIELDS.firstName} required autoComplete="given-name" maxLength={40} />
        </label>
        <label className="field">
          <span>Last name *</span>
          <input name={ZOHO_FIELDS.lastName} required autoComplete="family-name" maxLength={80} />
        </label>
        <label className="field">
          <span>Company</span>
          <input name={ZOHO_FIELDS.company} autoComplete="organization" maxLength={200} />
        </label>
        <label className="field">
          <span>Work email *</span>
          <input name={ZOHO_FIELDS.email} type="email" required autoComplete="email" maxLength={100} />
        </label>
        <label className="field">
          <span>Phone *</span>
          <input name={ZOHO_FIELDS.phone} type="tel" required autoComplete="tel" maxLength={30} pattern="[0-9+\-\s()]{7,30}" />
        </label>
        <label className="field">
          <span>What do you need help with?</span>
          <select ref={serviceRef} defaultValue={defaultService}>
            <option value="">Not sure yet</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.name}>{s.name}</option>
            ))}
          </select>
        </label>
        <label className="field field--full">
          <span>Briefly describe the problem you want to solve</span>
          <textarea
            ref={messageRef}
            rows={5}
            maxLength={2000}
            placeholder="e.g. Our sales team tracks leads in Excel and follow-ups get missed…"
          />
        </label>
      </div>

      <div className="enquiry__foot">
        <button type="submit" className="btn btn--primary">
          Send enquiry <ArrowRight aria-hidden="true" />
        </button>
        <p className="enquiry__note">
          {mailtoSent
            ? `Your email app should now open with your enquiry. If it didn't, write to ${SITE.salesEmail}.`
            : "We use these details only to respond to your enquiry."}
        </p>
      </div>
    </form>
  );
}
