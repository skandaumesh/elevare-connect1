"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const partners = [
    "/career-mantra.png",
    "/incode-logo.png",
    "/logo-1.jpg",
    "/sriin5net-logo.png",
    "/elevera.png"
];

export default function CollaborationsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section ref={ref} className="pt-12 pb-0 bg-[#F9F8F3] overflow-hidden relative">
            <style>{`
                @keyframes scrollLeft {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .collab-ticker {
                    display: flex;
                    width: max-content;
                    animation: scrollLeft 30s linear infinite;
                }
                .collab-ticker:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="max-w-7xl mx-auto px-6 mb-8 text-center text-sm font-semibold text-[#A87ED7] tracking-wider uppercase">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    Moving Colleges & Partners
                </motion.span>
            </div>

            <div className="relative flex overflow-hidden">
                <div className="absolute top-0 left-0 w-20 md:w-32 h-full bg-gradient-to-r from-[#F9F8F3] to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-20 md:w-32 h-full bg-gradient-to-l from-[#F9F8F3] to-transparent z-10 pointer-events-none" />

                <div className="collab-ticker items-center">
                    {[...partners, ...partners, ...partners, ...partners, ...partners, ...partners, ...partners, ...partners].map((src, i) => (
                        <div key={i} className="mx-6 md:mx-10 lg:mx-12 shrink-0 flex items-center justify-center min-w-[100px] md:min-w-[120px]">
                            <img
                                src={src}
                                alt="Partner Logo"
                                className="h-10 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
