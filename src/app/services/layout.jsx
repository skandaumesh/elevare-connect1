export const metadata = {
    title: "Services | Career Readiness, Skill Enhancement & Industry Bridge",
    description: "Explore Elevare Connect's professional services: Career Readiness training, Soft Skills Enhancement, and Academic to Industry Bridge programs. Tailored for colleges and institutions in Bengaluru and across India.",
    openGraph: {
        title: "Our Services | Elevare Connect",
        description: "Career Readiness, Skill Enhancement, and Academic to Industry Bridge — comprehensive training programs for students and institutions.",
        images: [{ url: "/elevare.png", width: 1200, height: 630, alt: "Elevare Connect Services" }],
    },
    alternates: {
        canonical: "https://elevareconnect.in/services",
    },
};

export default function ServicesLayout({ children }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "provider": {
                            "@type": "EducationalOrganization",
                            "name": "Elevare Connect",
                            "url": "https://elevareconnect.in"
                        },
                        "serviceType": "Professional Training & Mentorship",
                        "areaServed": {
                            "@type": "Country",
                            "name": "India"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Training Programs",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Career Readiness",
                                        "description": "Resume optimization, campus-to-corporate workshops, mock interviews with actionable feedback."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Skill Enhancement",
                                        "description": "Communication, time management, workplace etiquette, emotional intelligence training."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Academic to Industry Bridge",
                                        "description": "Industry guest lectures, final-year project mentoring, aligning academics with industry practices."
                                    }
                                }
                            ]
                        }
                    }),
                }}
            />
            {children}
        </>
    );
}
