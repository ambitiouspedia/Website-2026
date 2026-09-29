import type { NextConfig } from "next";

// Old service ids from the previous Vite site (data/services.ts in the old
// codebase). That site rendered every /services/<id> URL as the services
// page, so any of these may be indexed or linked — send each to its closest
// new equivalent. Hardware supply is now a small part of IT Infrastructure.
const OLD_SERVICE_REDIRECTS: Record<string, string> = {
  "laptops-desktops": "it-infrastructure-cloud",
  "peripherals-accessories": "it-infrastructure-cloud",
  "custom-builds": "it-infrastructure-cloud",
  "electronic-components": "it-infrastructure-cloud",
  "servers-equipment": "it-infrastructure-cloud",
  "operating-systems": "it-infrastructure-cloud",
  "security-software": "it-infrastructure-cloud",
  "cloud-solutions": "it-infrastructure-cloud",
  "business-management": "erp-business-software",
  "custom-development": "custom-software-development",
};

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...Object.entries(OLD_SERVICE_REDIRECTS).map(([from, to]) => ({
        source: `/services/${from}`,
        destination: `/services/${to}`,
        permanent: true,
      })),
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      // v2: case studies became Projects; blog lives under Insights
      { source: "/case-studies", destination: "/projects", permanent: true },
      { source: "/case-studies/:slug", destination: "/projects", permanent: true },
      { source: "/blog", destination: "/insights", permanent: true },
      { source: "/blogs", destination: "/insights", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
