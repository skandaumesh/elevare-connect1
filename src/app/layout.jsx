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
  authors: [{ name: "Elevare Connect", url: siteUrl }],
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

// ─── Structured Data (@graph — Google's preferred unified format) ───

const graphSchema = {
  "@context": "https://schema.org",
  "@graph": [
    // ── WebSite ──
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "name": "Elevare Connect",
      "alternateName": "Elevare",
      "url": `${siteUrl}/`,
      "publisher": { "@id": `${siteUrl}/#organization` },
      "inLanguage": "en-IN",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${siteUrl}/?s={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    },

    // ── Organization (Primary Entity) ──
    {
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "@id": `${siteUrl}/#organization`,
      "name": "Elevare Connect",
      "legalName": "Elevare Connect",
      "alternateName": "Elevare",
      "url": siteUrl,
      "logo": {
        "@type": "ImageObject",
        "@id": `${siteUrl}/#logo`,
        "url": `${siteUrl}/elevare.png`,
        "contentUrl": `${siteUrl}/elevare.png`,
        "width": 512,
        "height": 512,
        "caption": "Elevare Connect Logo"
      },
      "image": {
        "@id": `${siteUrl}/#logo`
      },
      "description": "Elevare Connect is a professional mentorship and career readiness consultancy based in Bengaluru, India. We empower students and institutions through expert-led soft skills training, leadership development, campus-to-corporate workshops, and 1:1 career coaching. With 20+ partner colleges and 20000+ students trained.",
      "slogan": "Where Ambition Finds its Direction",
      "foundingDate": "2025",
      "telephone": "+91-98457-89663",
      "foundingLocation": {
        "@type": "Place",
        "name": "Bengaluru, Karnataka, India"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Orchid Piccadilly E, 802, Thanisandra Main Rd, Thirumenahalli, Chokkanahalli",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560064",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 13.0683,
        "longitude": 77.6253
      },
      "hasMap": "https://maps.google.com/?q=Orchid+Piccadilly+E+802+Thanisandra+Main+Rd+Bengaluru",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "telephone": "+91-98457-89663",
          "email": "info@elevareconnect.in",
          "availableLanguage": ["English", "Hindi", "Kannada"],
          "areaServed": "IN"
        }
      ],
      "founder": {
        "@type": "Person",
        "@id": `${siteUrl}/#founder`,
        "name": "Wilma Merina D'Sa",
        "givenName": "Wilma",
        "familyName": "D'Sa",
        "jobTitle": "Founder & Lead Trainer",
        "description": "Seasoned HR Professional & Academician with 20+ years of experience across IBM and top academic institutions. Founder of Elevare Connect.",
        "image": `${siteUrl}/Founder.jpeg`,
        "url": "https://www.linkedin.com/in/wilma-merina-d-sa-462b2b101/",
        "sameAs": [
          "https://www.linkedin.com/in/wilma-merina-d-sa-462b2b101/"
        ],
        "worksFor": {
          "@id": `${siteUrl}/#organization`
        },
        "alumniOf": {
          "@type": "Organization",
          "name": "IBM"
        },
        "knowsAbout": [
          "Human Resources",
          "Soft Skills Training",
          "Career Mentorship",
          "Leadership Development",
          "Campus to Corporate Training"
        ]
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "India"
        },
        {
          "@type": "State",
          "name": "Karnataka"
        },
        {
          "@type": "City",
          "name": "Bengaluru"
        }
      ],
      "sameAs": [
        "https://www.linkedin.com/in/wilma-merina-d-sa-462b2b101/",
        "https://www.instagram.com/elevare_connect/"
      ],
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": "1-10"
      },
      "knowsAbout": [
        "Soft Skills Training",
        "Career Readiness",
        "Campus to Corporate Transition",
        "Professional Grooming",
        "Leadership Training",
        "Placement Readiness",
        "Interview Preparation"
      ],
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Career Readiness Training",
            "description": "Campus-to-corporate workshops, resume optimization, and mock interviews with actionable feedback."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Soft Skills Enhancement",
            "description": "Communication, time management, workplace etiquette, and emotional intelligence training."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Academic to Industry Bridge",
            "description": "Industry guest lectures, project mentoring, and aligning academic curriculum with industry practices."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "1:1 Career Mentorship",
            "description": "Personalized mentorship, goal-setting, personal branding, and self-awareness coaching."
          }
        }
      ]
    },

    // ── SiteNavigation (Helps Google understand page hierarchy) ──
    {
      "@type": "SiteNavigationElement",
      "@id": `${siteUrl}/#navigation`,
      "name": "Main Navigation",
      "hasPart": [
        {
          "@type": "WebPage",
          "name": "Home",
          "url": `${siteUrl}/`,
          "description": "Where Ambition Finds its Direction — empowering students with career mentorship and soft skills training."
        },
        {
          "@type": "WebPage",
          "name": "About Us",
          "url": `${siteUrl}/about`,
          "description": "Our story, mission, and founder — 20+ years of HR and academic expertise."
        },
        {
          "@type": "WebPage",
          "name": "Our Services",
          "url": `${siteUrl}/services`,
          "description": "Career Readiness, Skill Enhancement, and Academic to Industry Bridge programs for colleges and institutions."
        },
        {
          "@type": "WebPage",
          "name": "Gallery",
          "url": `${siteUrl}/gallery`,
          "description": "Visual stories of transformation — workshops, campus engagements, and mentorship sessions."
        },
        {
          "@type": "WebPage",
          "name": "Contact",
          "url": `${siteUrl}/contact`,
          "description": "Partner with Elevare Connect for institutional training and student empowerment programs."
        }
      ]
    },

    // ── Sitelinks SearchBox helper ──
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#sitemap`,
      "name": "Elevare Connect Pages",
      "numberOfItems": 5,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "url": `${siteUrl}/` },
        { "@type": "ListItem", "position": 2, "name": "About Us", "url": `${siteUrl}/about` },
        { "@type": "ListItem", "position": 3, "name": "Our Services", "url": `${siteUrl}/services` },
        { "@type": "ListItem", "position": 4, "name": "Gallery", "url": `${siteUrl}/gallery` },
        { "@type": "ListItem", "position": 5, "name": "Contact", "url": `${siteUrl}/contact` }
      ]
    }
  ]
};

// ─── Layout ─────────────────────────────────────────────────────────

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#6E2690" />
        <meta name="theme-color" content="#4A1561" media="(prefers-color-scheme: dark)" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`flex flex-col min-h-screen antialiased overflow-x-hidden font-sans bg-[#FFFFFF] text-[#52525B] ${dmSans.variable} ${roboto.variable} ${instrumentSerif.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(graphSchema),
          }}
        />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}