export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/_next/",        // Next.js internals
          "/api/",          // API routes — never index these
          "/_vercel/",      // Vercel internals if hosted there
        ],
      },
      {
        // Block AI training crawlers — protects your content
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "CCBot",
          "anthropic-ai",
          "Claude-Web",
          "Omgilibot",
          "FacebookBot",
        ],
        disallow: "/",
      },
    ],
    sitemap: "https://elevareconnect.in/sitemap.xml",
    host: "https://elevareconnect.in", // Canonical host declaration
  };
}