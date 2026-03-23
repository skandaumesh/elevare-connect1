"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function WhyElevareSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const features = [
        {
            tag: "FOUNDATION",
            title: "Foundational Expertise",
            desc: "Led by a seasoned HR Professional, bringing theory and practice into perfect harmony.",
            highlight: "Expertise",
            img: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80&w=600"
        },
        {
            tag: "STRATEGY",
            title: "Personalized Approach",
            desc: "We align methodology to each student's unique personality and future career aspirations.",
            highlight: "Personalized",
            img: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=600"
        },
        {
            tag: "OUTCOME",
            title: "Holistic Development",
            desc: "Nurturing emotional intelligence, critical thinking, and a commanding leadership presence.",
            highlight: "Holistic",
            img: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=600"
        }
    ];

    return (
        <section ref={ref} className="py-24 bg-white relative overflow-hidden">
            <style dangerouslySetInnerHTML={{
                __html: `
                    @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
                    .font-instrument-serif { font-family: 'Instrument Serif', serif; }
                `}} />

            {/* Decorative background */}
            <div className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] bg-[#A87ED7]/5 rounded-full blur-[140px] pointer-events-none" />

            {/* Decorative SVG — floating doodle */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 0.12, scale: 1 } : {}}
                transition={{ duration: 1 }}
                className="absolute bottom-20 left-8 pointer-events-none hidden lg:block"
            >
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                    <path d="M40 10 Q40 40 10 40 Q40 40 40 70 Q40 40 70 40 Q40 40 40 10 Z" stroke="#2B124C" strokeWidth="2" fill="none" />
                    <path d="M75 15 Q75 25 65 25 Q75 25 75 35 Q75 25 85 25 Q75 25 75 15 Z" stroke="#A87ED7" strokeWidth="1.5" fill="none" />
                </svg>
            </motion.div>

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#2B124C]/5 border border-[#2B124C]/10 text-[#2B124C] text-[11px] font-bold tracking-[0.3em] uppercase mb-6">
                        <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M10 2L11 8L17 9L11 10L10 16L9 10L3 9L9 8L10 2Z" fill="#A87ED7" /></svg>
                        WHY US
                    </div>
                    <h2 className="font-instrument-serif text-[#2B124C] tracking-wide text-3xl md:text-5xl">
                        Why Choose <span className="bg-gradient-to-r from-[#A87ED7] to-[#2B124C] bg-clip-text text-transparent">Elevare</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            className="group rounded-[32px] p-2 hover:-translate-y-2 transition-all duration-500"
                            style={{
                                background: 'rgba(255,255,255,0.6)',
                                backdropFilter: 'blur(12px)',
                                border: '1.5px solid rgba(255,255,255,0.8)',
                                boxShadow: '0 4px 24px rgba(43, 18, 76, 0.06)',
                            }}
                        >
                            <div className="px-5 md:px-6 pt-6 md:pt-8 pb-5 md:pb-6 flex flex-col min-h-[160px] md:h-[200px]">
                                <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-[#A87ED7] uppercase tracking-widest mb-3">
                                    <svg width="10" height="10" viewBox="0 0 20 20" fill="none"><path d="M10 2L11 8L17 9L11 10L10 16L9 10L3 9L9 8L10 2Z" fill="#A87ED7" /></svg>
                                    {item.tag}
                                </span>
                                <h3 className="font-instrument-serif text-[22px] text-[#2B124C] leading-snug tracking-wide mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-[15px] text-gray-500 leading-relaxed font-medium">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Image Area */}
                            <div className="relative w-full h-[180px] md:h-[220px] rounded-[24px] overflow-hidden bg-[#2B124C] flex items-center justify-center">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 ease-in-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-[#2B124C]/10 mix-blend-overlay pointer-events-none transition-colors duration-500 group-hover:bg-transparent" />
                                <span className="relative z-10 text-white font-instrument-serif text-2xl sm:text-3xl tracking-wide drop-shadow-lg px-4 text-center group-hover:scale-105 transition-transform duration-500">
                                    {item.highlight}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
