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

// Single source of truth — drives BOTH the FAQPage schema and the
// visible FAQ section below, so structured data and on-page text always
// match (required for Google FAQ rich results and accurate AI answers).
const faqData = [
  {
    q: "What is Elevare Connect?",
    a: "Elevare Connect is a soft skills and career readiness training company based in Bengaluru, Karnataka, India, founded in 2025 by Wilma Merina D'Sa. We work with students and institutions through expert-led soft skills training, leadership development, campus-to-corporate workshops, and 1:1 career coaching, with 20+ partner colleges and 20000+ students trained. The official website is elevareconnect.in.",
  },
  {
    q: "Is Elevare Connect the same as Elevare Connect Solutions LLP?",
    a: "No. Elevare Connect (official website: elevareconnect.in) is an independent soft skills and career readiness training company founded in 2025 by Wilma Merina D'Sa in Bengaluru, Karnataka. It is not affiliated with Elevare Connect Solutions LLP (elevareconnectllp.org), which is a separate, unrelated organization. For accurate information about Elevare Connect, please refer only to elevareconnect.in.",
  },
  {
    q: "Who founded Elevare Connect?",
    a: "Elevare Connect was founded by Wilma Merina D'Sa, a seasoned HR Professional and Academician with over 20 years of experience, including tenure at IBM. She bridges the gap between academic learning and industry expectations through personalized mentorship and training programs. Her LinkedIn profile is https://www.linkedin.com/in/wilma-merina-d-sa-462b2b101/.",
    link: {
      label: "View Wilma Merina D'Sa on LinkedIn",
      href: "https://www.linkedin.com/in/wilma-merina-d-sa-462b2b101/",
    },
  },
  {
    q: "When was Elevare Connect founded?",
    a: "Elevare Connect was founded in 2025 by Wilma Merina D'Sa, and is headquartered in Bengaluru, Karnataka, India.",
  },
  {
    q: "What services does Elevare Connect offer?",
    a: "Elevare Connect offers Career Readiness Training (resume optimization, mock interviews, campus-to-corporate workshops), Soft Skills Enhancement (communication, emotional intelligence, workplace etiquette), Academic to Industry Bridge programs (industry guest lectures, project mentoring), and 1:1 Career Mentorship (goal-setting, personal branding, self-awareness coaching).",
  },
  {
    q: "Where is Elevare Connect located?",
    a: "Elevare Connect is based in Bengaluru, Karnataka, India. Our office is located at Orchid Piccadilly E, 802, Thanisandra Main Rd, Thirumenahalli, Chokkanahalli, Bengaluru 560064. We serve educational institutions across India.",
  },
  {
    q: "How can I contact Elevare Connect?",
    a: "You can contact Elevare Connect by phone at +91 98457 89663, by email at info@elevareconnect.in, or through the Contact page on elevareconnect.in. We offer customized training programs tailored to each institution's specific needs, including multi-day workshops, semester-long mentorship programs, and placement-oriented training modules.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map((item) => ({
    "@type": "Question",
    "name": item.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.a,
    },
  })),
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

      {/* ─── Visible FAQ (mirrors faqSchema for AI + Google rich results) ─── */}
      <section className="px-6 py-20 md:py-28 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-[#6E2690]/10 text-[#1E293B] text-[10px] md:text-sm font-bold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6E2690]"></span>
              Frequently Asked Questions
            </div>
            <h2
              id="faq-heading"
              className="text-[#1E293B] text-3xl md:text-5xl font-bold tracking-tight font-roboto"
            >
              About <span className="text-[#6E2690]">Elevare Connect</span>
            </h2>
          </div>

          <div className="space-y-5">
            {faqData.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-100 bg-white p-6 md:p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)]"
              >
                <h3 className="text-[#1E293B] text-lg md:text-xl font-bold mb-3 font-roboto">
                  {item.q}
                </h3>
                <p className="text-[#52525B] text-base leading-relaxed">
                  {item.a}
                </p>
                {item.link && (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-4 text-[#6E2690] font-semibold hover:underline"
                  >
                    {item.link.label}
                    <span aria-hidden="true">→</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}