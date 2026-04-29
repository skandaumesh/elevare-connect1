import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import VisionMissionSection from "@/components/home/VisionMissionSection";
import StatsSection from "@/components/home/StatsSection";
import WhyElevareSection from "@/components/home/WhyElevareSection";
import OfferingsSection from "@/components/home/OfferingsSection";
import ProgramAddOnsSection from "@/components/home/ProgramAddOnsSection";
import CollaborationsSection from "@/components/home/CollaborationsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const siteUrl = "https://elevareconnect.in";

export const metadata = {
  // ✅ Title matches layout template — will NOT use template since it's the homepage
  title: "Elevare Connect | Where Ambition Finds its Direction",
  description:
    "Empowering students and institutions through expert-led soft skills training, career mentorship, and 1:1 coaching. 20+ partner colleges, 20000+ students trained. Based in Bengaluru, India.",
  keywords: [
    "Elevare Connect",
    "Career Mentorship Bengaluru",
    "Soft Skills Training India",
    "Campus to Corporate Program",
    "Student Empowerment Bengaluru",
    "Placement Readiness Training",
    "Wilma Merina D'Sa",
    "Professional Development India",
  ],

  // ✅ Canonical — homepage specific
  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: "Elevare Connect | Where Ambition Finds its Direction",
    description:
      "Expert mentorship to transform students into career-ready professionals. 20+ partner colleges, 20000+ students trained. Based in Bengaluru, India.",
    url: siteUrl,
    siteName: "Elevare Connect",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/elevare.png`,
        width: 1200,
        height: 630,
        alt: "Elevare Connect - Transform. Rise. Achieve.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Elevare Connect | Where Ambition Finds its Direction",
    description:
      "Expert mentorship to transform students into career-ready professionals. Based in Bengaluru, India.",
    images: [`${siteUrl}/elevare.png`],
  },
};

// ─── Homepage Schema ──────────────────────────────────────────────

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/#webpage`,
  "url": siteUrl,
  "name": "Elevare Connect | Where Ambition Finds its Direction",
  "description":
    "Empowering students and institutions through expert-led soft skills training, career mentorship, and 1:1 coaching.",
  "isPartOf": { "@id": `${siteUrl}/#website` },
  "about": { "@id": `${siteUrl}/#organization` },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl,
      },
    ],
  },
};

// ─── Page ────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <HeroSection />
      <AboutSection />
      <VisionMissionSection />
      <StatsSection />
      <WhyElevareSection />
      <OfferingsSection />
      <ProgramAddOnsSection />
      <CollaborationsSection />
      <TestimonialsSection />
    </>
  );
}