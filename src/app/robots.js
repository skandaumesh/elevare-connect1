export default function robots() {
  return {
    rules: [
      {
        // Allow all crawlers — including AI search engines (GPTBot,
        // ChatGPT-User, anthropic-ai, etc.) so they describe Elevare
        // Connect correctly instead of pulling from other sources.
        userAgent: "*",
        allow: "/",
        disallow: [
          "/_next/",        // Next.js internals
          "/api/",          // API routes — never index these
          "/_vercel/",      // Vercel internals if hosted there
        ],
      },
    ],
    sitemap: "https://elevareconnect.in/sitemap.xml",
    host: "https://elevareconnect.in", // Canonical host declaration
  };
}