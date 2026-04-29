export default function sitemap() {
  const baseUrl = "https://elevareconnect.in";

  // Use fixed dates — new Date() makes every deploy look "just modified"
  // which gives Google no real signal about what actually changed
  return [
    {
      url: baseUrl,
      lastModified: new Date("2025-01-15"), // your actual launch/last update date
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date("2025-01-15"),
      changeFrequency: "monthly",
      priority: 0.9, // ✅ highest after home — services is core
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2025-01-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2025-01-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date("2025-01-15"),
      changeFrequency: "weekly", // gallery genuinely updates more often
      priority: 0.6,
    },
  ];
}