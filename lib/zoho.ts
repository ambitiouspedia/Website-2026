// ─── Zoho CRM Web-to-Lead ──────────────────────────────────────────────────
// The enquiry form posts natively (no fetch/JS interception) to Zoho CRM's
// Web-to-Lead endpoint, the same pattern as the LK Machinery site's CRM form.
//
// Values below are copied from the webform the founder generated in Zoho CRM
// (Setup → Developer Hub → Webforms → Leads, form "ambitiouspedia.com",
// id 1320271000000572008, 2026-09-29). If the webform is regenerated in Zoho,
// re-copy `action` and every hidden input from the new embed code.
//
// Field names are Zoho's own Lead field labels — they must match the
// generated form exactly or the mapping silently fails.

export const ZOHO_WEBFORM: {
  action: string;
  hidden: Record<string, string>;
} = {
  action: "https://crm.zoho.in/crm/WebToLeadForm",
  hidden: {
    xnQsjsdp: "ac32d1cde68e93276cee272ed072092271da30852f93816afbad1119d4921894",
    xmIwtLD:
      "00d4dfd9ec8c46c7550f4e4041e1ed9bec90612d06164d619972e911e48c94e1c40b206e72a076ba8cbf6df60fa00bbc",
    actionType: "TGVhZHM=",
    returnURL: "https://www.ambitiouspedia.com/contact/thank-you",
    // Google Ads click id — Zoho fills this itself when ads tracking is on
    zc_gad: "",
    // Zoho's spam honeypot ("honeypot" in base64) — must stay empty
    aG9uZXlwb3Q: "",
  },
};

// Fields present in the webform: First Name, Last Name (mandatory in Zoho),
// Email, Phone, Company (made optional in Zoho by the founder), Lead Source,
// Description. Lead Source is not sent — its pick-list has no "Website"
// option yet.
export const ZOHO_FIELDS = {
  firstName: "First Name",
  lastName: "Last Name",
  company: "Company",
  email: "Email",
  phone: "Phone",
  description: "Description",
} as const;
