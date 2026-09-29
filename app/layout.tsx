import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Interactions from "@/components/ui/Interactions";
import { SITE } from "@/lib/site";
import { getOrganizationSchema, getWebsiteSchema, JsonLd } from "@/lib/seo";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

// Google Analytics 4 — set NEXT_PUBLIC_GA_ID (e.g. G-XXXXXXX) in Vercel's
// environment variables to switch it on. Nothing loads while it's unset.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    template: "%s | Ambitious Pedia",
    default: "Ambitious Pedia — ERP, CRM, Zoho, AI Automation & IT Solutions",
  },
  description:
    "Ambitious Pedia helps businesses use technology, AI and automation to improve and scale their operations — Zoho & ERPNext, CRM, AI assistants, custom software, Microsoft 365 and cloud. Based in Pune.",
  openGraph: { siteName: SITE.name, type: "website", locale: "en_IN" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
};

export const viewport: Viewport = {
  themeColor: "#f7f9fc",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <head>
        {/* Enables scroll-reveal styles only when JS runs — content is never hidden without it */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Interactions />
        <JsonLd data={getOrganizationSchema()} />
        <JsonLd data={getWebsiteSchema()} />
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
