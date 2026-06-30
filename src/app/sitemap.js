export default function sitemap() {
  const baseUrl = "https://elevareconnect.in";

  // Updated dates to signal fresh content to Google
  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-06-30"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date("2026-06-30"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-06-30"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-06-30"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date("2026-06-30"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];
}