"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const addOns = [
    {
        label: "Placement Programs",
        desc: "Comprehensive corporate recruitment training.",
        img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=800",
    },
    {
        label: "Interview Prep",
        desc: "Mastering storytelling and professional impact.",
        img: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&q=80&w=800",
    },
    {
        label: "Industry Talks",
        desc: "Insights from global market leaders.",
        img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800",
    },
    {
        label: "Webinars",
        desc: "Digital masterclasses on emerging tech.",
        img: "https://images.unsplash.com/photo-1591115765373-5f9cf1da1776?auto=format&fit=crop&q=80&w=800",
    },
    {
        label: "JD-Based Training",
        desc: "Skill alignment for specific roles.",
        img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    },
    {
        label: "Public Speaking",
        desc: "Commanding presence in any environment.",
        img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800",
    },
];

export default function ProgramAddOnsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section ref={ref} className="py-24 bg-white relative overflow-hidden">
            <style dangerouslySetInnerHTML={{
                __html: `
                    @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
                    .font-instrument-serif { font-family: 'Instrument Serif', serif; }
                `}} />

            {/* Decorative circles */}
            <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#A87ED7]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#2B124C]/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Decorative SVG — bottom-right */}
            <motion.div
                initial={{ opacity: 0, rotate: 20 }}
                animate={isInView ? { opacity: 0.1, rotate: 0 } : {}}
                transition={{ duration: 1 }}
                className="absolute bottom-16 right-12 pointer-events-none hidden lg:block"
            >
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="40" stroke="#A87ED7" strokeWidth="1" strokeDasharray="8 4" />
                    <path d="M50 20 L50 80 M20 50 L80 50" stroke="#2B124C" strokeWidth="0.5" />
                    <circle cx="50" cy="50" r="8" fill="#A87ED7" opacity="0.2" />
                </svg>
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#2B124C]/5 border border-[#2B124C]/10 text-[#2B124C] text-[11px] font-bold tracking-[0.3em] uppercase mb-6">
                        <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M10 2L11 8L17 9L11 10L10 16L9 10L3 9L9 8L10 2Z" fill="#A87ED7" /></svg>
                        EXTENDED LEARNING
                    </div>
                    <h2 className="font-instrument-serif text-[#2B124C] tracking-wide text-4xl md:text-5xl">
                        Program <span className="bg-gradient-to-r from-[#A87ED7] to-[#2B124C] bg-clip-text text-transparent">Add-Ons.</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {addOns.map((add, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="group p-3 rounded-[32px] hover:-translate-y-2 transition-all duration-500"
                            style={{
                                background: 'rgba(255,255,255,0.5)',
                                backdropFilter: 'blur(16px)',
                                border: '1.5px solid rgba(255,255,255,0.8)',
                                boxShadow: '0 4px 24px rgba(43, 18, 76, 0.06)',
                            }}
                        >
                            <div className="flex flex-col h-full">
                                {/* Image */}
                                <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden mb-6">
                                    <img
                                        src={add.img}
                                        alt={add.label}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-[#2B124C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                {/* Content */}
                                <div className="px-5 pb-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-[1.5px] bg-gradient-to-r from-[#A87ED7] to-[#2B124C] opacity-30 group-hover:w-12 group-hover:opacity-60 transition-all duration-500" />
                                        <span className="text-[10px] font-bold text-[#A87ED7] uppercase tracking-widest">
                                            Module {idx + 1}
                                        </span>
                                    </div>
                                    <h3 className="font-instrument-serif text-2xl text-[#2B124C] mb-3 tracking-wide">
                                        {add.label}
                                    </h3>
                                    <p className="text-gray-500 text-[15px] font-medium leading-relaxed">
                                        {add.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
