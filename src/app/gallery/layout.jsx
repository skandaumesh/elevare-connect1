export const metadata = {
    title: "Gallery | Visual Impact & Campus Transformations",
    description: "Explore the transformation and growth at Elevare Connect through our gallery. Witness impactful workshops, campus engagements, and mentorship sessions across colleges in India.",
    keywords: ["Elevare Connect Workshops", "Student Transformation Images", "Campus Mentorship Stories", "Career Coaching Events Bengaluru", "Professional Grooming Gallery"],
    openGraph: {
        title: "Gallery | Elevare Connect",
        description: "Visual stories of career transformation and skill development across 50+ partner institutions.",
        images: [{ url: "/gallery/gallery17.jpeg", width: 1200, height: 630, alt: "Elevare Connect Workshop Session" }],
    },
    alternates: {
        canonical: "https://elevareconnect.in/gallery",
    },
};

export default function GalleryLayout({ children }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ImageGallery",
                        "name": "Elevare Connect Gallery",
                        "description": "Photos from workshops, training sessions, and campus events conducted by Elevare Connect.",
                        "publisher": {
                            "@type": "EducationalOrganization",
                            "name": "Elevare Connect"
                        }
                    }),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://elevareconnect.in/"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Gallery",
                                "item": "https://elevareconnect.in/gallery"
                            }
                        ]
                    })
                }}
            />
            {children}
        </>
    );
}
