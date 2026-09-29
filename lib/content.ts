// ─── Articles (Insights + Learning) ────────────────────────────────────────
// Both sections share one article model. Insights = company perspective /
// thought leadership. Learning = practical, educational resources (guides,
// checklists, tutorials). Bodies are simple typed blocks — no MDX needed —
// so new articles can be added by copying an existing entry.

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string };

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  /** Learning only: Guide | Checklist | Tutorial | Template … */
  format?: string;
  date: string; // ISO yyyy-mm-dd
  author: string;
  /** Visual theme for the generated thumbnail. */
  cover: "teal" | "navy" | "amber";
  featured?: boolean;
  body: Block[];
  /** Service pages this article supports (internal links). */
  services?: string[];
}

export function readingTime(a: Article) {
  const words = a.body
    .map((b) => ("text" in b ? b.text : b.items.join(" ")))
    .join(" ")
    .split(/\s+/).length;
  return Math.max(2, Math.round(words / 220));
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function sortByDate(list: Article[]) {
  return [...list].sort((a, b) => b.date.localeCompare(a.date));
}
