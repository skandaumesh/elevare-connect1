export const metadata = {
    title: "Contact Us | Partner with Elevare Connect",
    description: "Get in touch with Elevare Connect for institutional training, career mentorship workshops, and student empowerment programs. Email us at info@elevareconnect.in. Based in Bengaluru, Karnataka, India.",
    openGraph: {
        title: "Contact Elevare Connect",
        description: "Partner with us for transformative workshops and career readiness programs at your institution.",
        images: [{ url: "/elevare.png", width: 1200, height: 630, alt: "Contact Elevare Connect" }],
    },
    alternates: {
        canonical: "https://elevareconnect.in/contact",
    },
};

export default function ContactLayout({ children }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "name": "Contact Elevare Connect",
                        "description": "Get in touch with Elevare Connect for workshops, career mentorship, or institutional training programs.",
                        "mainEntity": {
                            "@type": "EducationalOrganization",
                            "name": "Elevare Connect",
                            "url": "https://elevareconnect.in",
                            "email": "info@elevareconnect.in",
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
                            "areaServed": [
                                {
                                    "@type": "State",
                                    "name": "Karnataka"
                                },
                                {
                                    "@type": "Country",
                                    "name": "India"
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
