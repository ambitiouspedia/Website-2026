import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/site";
import { getOrganizationSchema, JsonLd } from "@/lib/seo";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    template: "%s | Ambitious Pedia",
    default: "Ambitious Pedia — Business Technology, Automation, AI & ERP/CRM",
  },
  description:
    "Ambitious Pedia helps businesses use technology to simplify operations, automate repetitive work and grow — ERP & CRM implementation, AI automation, custom software, integrations, IT and digital marketing. Based in Pune.",
  openGraph: {
    siteName: SITE.name,
    type: "website",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${jakarta.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd data={getOrganizationSchema()} />
      </body>
    </html>
  );
}
