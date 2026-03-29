"use client";
import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Lightbulb } from "lucide-react";

export default function WhyElevareSection() {
    const cards = [
        {
            icon: <BookOpen size={32} className="text-[#6E2690]" />,
            title: "Foundational Expertise",
            desc: "Led by Wilma Merina D'Sa, a seasoned HR Professional and Academician, bringing theory and practice into harmony."
        },
        {
            icon: <Users size={32} className="text-[#6E2690]" />,
            title: "Personalized Approach",
            desc: "We work individually and in groups, adapting to each student's unique personality and future career aspirations."
        },
        {
            icon: <Lightbulb size={32} className="text-[#6E2690]" />,
            title: "Holistic Development",
            desc: "Our methods go beyond technical training to nurture emotional intelligence, critical thinking, and leadership presence."
        }
    ];

    return (
        <section className="py-24 bg-[#FFFFFF] relative overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Soft Mesh Gradient */}
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.15]"
                    style={{
                        backgroundImage: `radial-gradient(at 0% 0%, #6E2690 0, transparent 50%), 
                              radial-gradient(at 100% 0%, #6E2690 0, transparent 50%),
                              radial-gradient(at 100% 100%, #6E2690 0, transparent 50%),
                              radial-gradient(at 0% 100%, #6E2690 0, transparent 50%)`
                    }}
                />

                {/* Floating Abstract Shapes */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-[10%] w-64 h-64 bg-[#6E2690]/5 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        rotate: [0, -5, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-20 right-[10%] w-96 h-96 bg-[#6E2690]/5 rounded-full blur-3xl"
                />

                {/* Subtle Decorative SVG Pattern */}
                <svg className="absolute top-0 left-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-1.5 mb-4 text-[#6E2690] text-xs font-bold tracking-[0.2em] uppercase bg-[#6E2690]/10 rounded-full">
                        Why Choose Us
                    </div>
                    <h2 className="text-[#6E2690] text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
                        Why <span className="text-[#6E2690]">Elevare Connect.</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            className="group bg-white/70 backdrop-blur-md border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[32px] p-8 hover:shadow-[0_20px_50px_rgba(124,58,237,0.1)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
                        >
                            {/* Subtle card hover accent */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6E2690] to-[#9B59B6] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-[#FDFBFF] flex items-center justify-center mb-6 group-hover:bg-[#6E2690] group-hover:text-white transition-colors duration-300">
                                    {React.cloneElement(card.icon, { className: "group-hover:text-white transition-colors duration-300" })}
                                </div>
                                <h3 className="text-2xl font-bold text-[#6E2690] mb-4 tracking-tight">{card.title}</h3>
                                <p className="text-[#64748b] leading-relaxed font-medium">
                                    {card.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
