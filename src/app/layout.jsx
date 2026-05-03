import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://elevareconnect.in";

import { DM_Sans, Roboto, Instrument_Serif } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans-google',
});

const roboto = Roboto({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-google',
});

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument-serif-google',
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Elevare Connect",
  title: {
    default: "Elevare Connect | Where Ambition Finds its Direction",
    template: "%s | Elevare Connect",
  },
  description:
    "Empowering students and institutions through expert-led coaching, soft skills training, and 1:1 mentorship. Bridging the gap between campus and corporate with 20+ years of experience. Based in Bengaluru, India.",
  keywords: [
    "Elevare Connect",
    "Soft Skills Training India",
    "Career Mentorship Bengaluru",
    "Campus to Corporate",
    "Placement Readiness",
    "Wilma Merina D'Sa",
    "Professional Grooming",
    "Institutional Training",
    "Student Empowerment",
    "Interview Preparation",
    "Leadership Training India",
    "College Training Programs",
    "Soft Skills Workshop Bengaluru",
    "Corporate Readiness Training",
    "Employability Skills India",
    "Career Coaching Karnataka",
  ],
  authors: [{ name: "Wilma Merina D'Sa", url: siteUrl }],
  creator: "Elevare Connect",
  publisher: "Elevare Connect",
  category: "Education",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Elevare Connect | Where Ambition Finds its Direction",
    description:
      "Expert mentorship to transform students into career-ready professionals. 20+ partner colleges, 20000+ students trained.",
    url: siteUrl,
    siteName: "Elevare Connect",
    images: [
      {
        url: "/elevare.png",
        width: 1200,
        height: 630,
        alt: "Elevare Connect - Transform. Rise. Achieve.",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevare Connect | Career Readiness & Mentorship",
    description:
      "Bridging the gap between academic learning and industry expectations. Based in Bengaluru, India.",
    images: ["/elevare.png"],
    creator: "@elevare_connect",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // ✅ REMOVED: canonical from layout — set individually in each page.js
  verification: {
    google: "EeTcc9XPqk_gca7WU0dMpVQc2-QDNoK-Smi5sAF_3vM",
  },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bengaluru",
    "geo.position": "12.9716;77.5946",
    ICBM: "12.9716, 77.5946",
  },
};

// ─── Structured Data ────────────────────────────────────────────────

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  "name": "Elevare Connect",
  "url": `${siteUrl}/`,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${siteUrl}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${siteUrl}/#organization`,
  "name": "Elevare Connect",
  // ✅ REMOVED: alternateName "Elevare Academy"
  "url": siteUrl,
  "logo": {
    "@type": "ImageObject",
    "url": `${siteUrl}/elevare.png`,
    "width": 512,
    "height": 512,
  },
  "description":
    "Professional mentorship and career readiness consultancy that empowers students with soft skills, leadership, and employability training.",
  "image": `${siteUrl}/elevare.png`,
  "slogan": "Transform. Rise. Achieve.",
  "foundingDate": "2020",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Orchid Piccadilly E, 802, Thanisandra Main Rd",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "postalCode": "560077",
    "addressCountry": "IN",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 13.0683,
    "longitude": 77.6253,
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "info@elevareconnect.in",
    "availableLanguage": ["English", "Hindi", "Kannada"],
  },
  "founder": {
    "@type": "Person",
    "name": "Wilma Merina D'Sa",
    "jobTitle": "Founder & Lead Trainer",
    "image": `${siteUrl}/Founder.jpeg`,
    "url": "https://www.linkedin.com/in/wilma-merina-d-sa-462b2b101/",
  },
  "areaServed": {
    "@type": "Country",
    "name": "India",
  },
  "sameAs": [
    "https://www.linkedin.com/in/wilma-merina-d-sa-462b2b101/",
    "https://www.instagram.com/elevare_connect/", // ✅ FIXED: correct Instagram
  ],
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": "1-10",
  },
};

const navigationSchema = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  "name": "Main Navigation",
  "hasPart": [
    { "@type": "WebPage", "name": "Home", "url": `${siteUrl}/` },
    { "@type": "WebPage", "name": "About Us", "url": `${siteUrl}/about` },
    { "@type": "WebPage", "name": "Our Services", "url": `${siteUrl}/services` },
    { "@type": "WebPage", "name": "Gallery", "url": `${siteUrl}/gallery` },
    { "@type": "WebPage", "name": "Contact", "url": `${siteUrl}/contact` },
  ],
};

// ─── Layout ─────────────────────────────────────────────────────────

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#6E2690" />
      </head>
      <body
        className={`flex flex-col min-h-screen antialiased overflow-x-hidden font-sans bg-[#FFFFFF] text-[#52525B] ${dmSans.variable} ${roboto.variable} ${instrumentSerif.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([websiteSchema, organizationSchema]),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(navigationSchema),
          }}
        />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}