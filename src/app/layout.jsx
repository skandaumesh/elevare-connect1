import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://elevareconnect.in"; // Placeholder, update if different

import { DM_Sans, Roboto, Instrument_Serif } from 'next/font/google';

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

const roboto = Roboto({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument-serif',
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Elevare Connect | Professional Mentorship & Career Readiness",
    template: "%s | Elevare Connect"
  },
  description: "Empowering students and institutions through expert-led coaching, soft skills training, and 1:1 mentorship. Bridging the gap between campus and corporate with 20+ years of experience. Based in Bengaluru, India.",
  keywords: [
    "Elevare Connect", "Soft Skills Training India", "Career Mentorship Bengaluru",
    "Campus to Corporate", "Placement Readiness", "Wilma Merina D'Sa",
    "Professional Grooming", "Institutional Training", "Student Empowerment",
    "Interview Preparation", "Leadership Training India", "College Training Programs",
    "Soft Skills Workshop Bengaluru", "Corporate Readiness Training",
    "Employability Skills India", "Career Coaching Karnataka"
  ],
  authors: [{ name: "Wilma Merina D'Sa" }],
  creator: "Elevare Connect",
  publisher: "Elevare Connect",
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
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Elevare Connect | Where Ambition Finds its Direction",
    description: "Expert mentorship to transform students into career-ready professionals. 20+ partner colleges, 20000+ students trained.",
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
    description: "Bridging the gap between academic learning and industry expectations. Based in Bengaluru, India.",
    images: ["/elevare.png"],
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
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: 'EeTcc9XPqk_gca7WU0dMpVQc2-QDNoK-Smi5sAF_3vM',
  },
  // Geo Tags for Bengaluru, India
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bengaluru",
    "geo.position": "12.9716;77.5946",
    "ICBM": "12.9716, 77.5946",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#8E44AD" />
      </head>
      <body className={`flex flex-col min-h-screen antialiased overflow-x-hidden font-sans bg-[#F9F8F3] text-[#52525B] ${dmSans.variable} ${roboto.variable} ${instrumentSerif.variable}`}>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Elevare Connect",
                "alternateName": "Elevare Academy",
                "url": "https://elevareconnect.in"
              },
              {
                "@context": "https://schema.org",
                "@type": "EducationalOrganization",
                "name": "Elevare Connect",
              "alternateName": "Elevare Academy",
              "url": "https://elevareconnect.in",
              "logo": "https://elevareconnect.in/elevare.png",
              "description": "Professional mentorship and career readiness consultancy that empowers students with soft skills, leadership, and employability training.",
              "image": "https://elevareconnect.in/elevare.png",
              "slogan": "Transform. Rise. Achieve.",
              "foundingDate": "2020",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bengaluru",
                "addressRegion": "Karnataka",
                "postalCode": "560001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 12.9716,
                "longitude": 77.5946
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "info@elevareconnect.in",
                "availableLanguage": ["English", "Hindi", "Kannada"]
              },
              "founder": {
                "@type": "Person",
                "name": "Wilma Merina D'Sa",
                "jobTitle": "Founder & Lead Trainer",
                "image": "https://elevareconnect.in/Founder.jpeg"
              },
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "sameAs": [
                "https://www.linkedin.com/in/wilma-merina-d-sa-462b2b101/",
                "https://www.instagram.com/skandaumesh/"
              ],
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "value": "1-10"
              }
              }
            ])
          }}
        />
        {/* SiteNavigationElement Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              "name": "Main Navigation",
              "hasPart": [
                { "@type": "WebPage", "name": "Home", "url": "https://elevareconnect.in/" },
                { "@type": "WebPage", "name": "About Us", "url": "https://elevareconnect.in/about" },
                { "@type": "WebPage", "name": "Our Services", "url": "https://elevareconnect.in/services" },
                { "@type": "WebPage", "name": "Gallery", "url": "https://elevareconnect.in/gallery" },
                { "@type": "WebPage", "name": "Contact", "url": "https://elevareconnect.in/contact" }
              ]
            }),
          }}
        />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
