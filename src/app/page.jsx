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
    "Professional Development India",
  ],

  // Canonical — homepage specific
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
    "Empowering students and institutions through expert-led soft skills training, career mentorship, and 1:1 coaching. 20+ partner colleges, 20000+ students trained.",
  "isPartOf": { "@id": `${siteUrl}/#website` },
  "about": { "@id": `${siteUrl}/#organization` },
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": `${siteUrl}/elevare.png`
  },
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Elevare Connect?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Elevare Connect is a professional mentorship and career readiness consultancy based in Bengaluru, India. We empower students and institutions through expert-led soft skills training, leadership development, campus-to-corporate workshops, and 1:1 career coaching. With 20+ partner colleges and 20000+ students trained."
      }
    },
    {
      "@type": "Question",
      "name": "What services does Elevare Connect offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Elevare Connect offers Career Readiness Training (resume optimization, mock interviews, campus-to-corporate workshops), Soft Skills Enhancement (communication, emotional intelligence, workplace etiquette), Academic to Industry Bridge programs (industry guest lectures, project mentoring), and 1:1 Career Mentorship (goal-setting, personal branding, self-awareness coaching)."
      }
    },
    {
      "@type": "Question",
      "name": "Who founded Elevare Connect?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Elevare Connect was founded by Wilma Merina D'Sa, a seasoned HR Professional and Academician with over 20 years of experience, including tenure at IBM. She bridges the gap between academic learning and industry expectations through personalized mentorship and training programs."
      }
    },
    {
      "@type": "Question",
      "name": "Where is Elevare Connect located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Elevare Connect is based in Bengaluru, Karnataka, India. Our office is located at Orchid Piccadilly E, 802, Thanisandra Main Rd, Thirumenahalli, Chokkanahalli, Bengaluru 560064. We serve educational institutions across India."
      }
    },
    {
      "@type": "Question",
      "name": "How can institutions partner with Elevare Connect?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Institutions can partner with Elevare Connect by reaching out via email at info@elevareconnect.in or through our Contact page. We offer customized training programs tailored to each institution's specific needs, including multi-day workshops, semester-long mentorship programs, and placement-oriented training modules."
      }
    }
  ]
};

// ─── Page ────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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