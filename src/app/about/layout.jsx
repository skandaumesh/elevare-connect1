export const metadata = {
    title: "About Us | Wilma Merina D'Sa & Elevare Connect",
    description: "Learn about Elevare Connect, founded by Wilma Merina D'Sa with 20+ years of HR and academic expertise. We empower students with human-centric skills, leadership training, and career readiness in Bengaluru, India.",
    openGraph: {
        title: "About Elevare Connect | Our Story & Mission",
        description: "Founded by Wilma Merina D'Sa, a seasoned HR Professional & Academician with 20+ years of experience across IBM and top institutions.",
        images: [{ url: "/Founder.jpeg", width: 800, height: 600, alt: "Wilma Merina D'Sa - Founder of Elevare Connect" }],
    },
    alternates: {
        canonical: "https://elevareconnect.in/about",
    },
};

export default function AboutLayout({ children }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "name": "About Elevare Connect",
                        "description": "Learn about the mission and founder of Elevare Connect.",
                        "mainEntity": {
                            "@type": "Person",
                            "name": "Wilma Merina D'Sa",
                            "jobTitle": "Founder",
                            "worksFor": {
                                "@type": "EducationalOrganization",
                                "name": "Elevare Connect"
                            },
                            "description": "Seasoned HR Professional & Academician with 20+ years of experience, including tenure at IBM.",
                            "image": "https://elevareconnect.in/Founder.jpeg"
                        }
                    }),
                }}
            />
            {children}
        </>
    );
}
