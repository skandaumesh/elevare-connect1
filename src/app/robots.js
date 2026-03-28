export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/_next/', // Standard Next.js internal path
      },
      sitemap: 'https://elevareconnect.in/sitemap.xml',
    };
  }
