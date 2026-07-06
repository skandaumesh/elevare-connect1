export default function sitemap() {
  const baseUrl = "https://elevareconnect.in";

  // Mirrors the navbar: Home, About Us, Our Services, Gallery, Contact
  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-07-07"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-07-07"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date("2026-07-07"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date("2026-07-07"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-07-07"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
