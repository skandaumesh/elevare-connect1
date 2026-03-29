"use client";
import React from "react";
import Link from "next/link";
import { Users, Award, BookOpen, Target, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="relative min-h-screen bg-[#F9F8F3] overflow-hidden pt-20 md:pt-28">

            {/* Premium BG Design Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Mesh Gradient Accents */}
                <div className="absolute top-[5%] left-[-5%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#662483]/5 rounded-full blur-[100px] md:blur-[160px]" />
                <div className="absolute bottom-[5%] right-[-5%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#662483]/5 rounded-full blur-[100px] md:blur-[160px]" />

                {/* Subtle Modern Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#662483 1px, transparent 1px), linear-gradient(90deg, #662483 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
            </div>

            {/* ─── SECTION 1: HERO ─── */}
            <section className="relative pt-16 md:pt-20 pb-16 md:pb-24 overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        className="max-w-4xl mx-auto flex flex-col items-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 md:px-5 py-1.5 md:py-2 mb-6 md:mb-8 rounded-full bg-[#662483]/10 text-[#662483] text-[10px] md:text-sm font-bold tracking-widest uppercase">
                            <span className="w-2 h-2 rounded-full bg-[#662483] animate-pulse"></span>
                            ABOUT ELEVARE CONNECT
                        </div>
                        <h1 className="text-[#0D0D0D] text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 md:mb-8 leading-[1.1] font-['Roboto',sans-serif]">
                            Empowering with <br className="hidden md:block" />
                            <span className="text-[#662483]">Human-Centric Skills.</span>
                        </h1>
                        <p className="text-[#52525B] text-base md:text-xl font-medium mb-10 md:mb-16 leading-relaxed max-w-2xl mx-auto">
                            We partner with institutions to unlock every student&apos;s potential — enhancing communication, leadership, and emotional intelligence.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-20 justify-center w-full max-w-3xl">
                            {[
                                { v: "20+", l: "Partner Colleges" },
                                { v: "20000+", l: "Students Trained" },
                                { v: "50+", l: "Workshops Delivered" }
                            ].map((s, idx) => (
                                <div key={idx} className="flex flex-col items-center">
                                    <p className="text-[#0D0D0D] text-4xl md:text-6xl font-black tracking-tight mb-1 md:mb-2">{s.v}</p>
                                    <p className="text-[#662483] font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase">{s.l}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── SECTION 2: FOUNDER ─── */}
            <section className="py-20 md:py-28 relative bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10 px-6">
                    <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
                        {/* LEFT COLUMN: Text */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col justify-center text-center lg:text-left"
                        >
                            <h2 className="text-[#0f172a] text-3xl md:text-[46px] font-bold mb-8 md:mb-10 tracking-tight leading-[1.2] font-['Roboto',sans-serif]">
                                The Heart <br className="hidden md:block" />
                                <span className="text-[#662483]">Behind Elevare Connect</span>
                            </h2>

                            <div className="space-y-6 text-[#475569] text-base md:text-lg font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                                <p>
                                    At Elevare Connect, we are passionate about partnering with institutions that share our vision of holistic student development. With a strong foundation in HR and academia, I founded Elevare Connect to support colleges in preparing students not just for jobs, but for confident, impactful careers.
                                </p>
                                <p>
                                    I warmly invite your institution to collaborate with us in equipping students with the essential soft skills, professional grooming, and career readiness they need to thrive beyond campus.
                                </p>
                            </div>

                            <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-slate-100 flex items-center justify-center lg:justify-start gap-4">
                                <div className="hidden md:block w-10 h-[2px] bg-[#662483]" />
                                <p className="text-[#0f172a] text-base md:text-lg font-bold">Wilma Merina D’Sa, <span className="text-slate-500 font-medium ml-1 text-sm md:text-base">Founder</span></p>
                            </div>
                        </motion.div>

                        {/* RIGHT COLUMN: Refined Oval Founder Portrait */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="flex items-center justify-center lg:justify-end py-6"
                        >
                            <div className="relative">
                                {/* Clean Premium Outer Shadow/Glow */}
                                <div className="absolute inset-0 bg-[#662483]/10 rounded-full blur-[60px] transform translate-y-8" />

                                {/* Pure Oval Container */}
                                <div className="relative w-[260px] md:w-[340px] aspect-[1/1.5] rounded-full p-2 bg-white border border-slate-100 shadow-2xl overflow-hidden group">
                                    <div className="relative w-full h-full rounded-full overflow-hidden border-[4px] border-white ring-1 ring-slate-100 shadow-inner group-hover:scale-105 transition-transform duration-1000 ease-out">
                                        <Image
                                            src="/Founder.jpeg"
                                            alt="Wilma Merina D'Sa"
                                            fill
                                            className="object-cover object-top grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
                                            priority
                                        />
                                        {/* Subtle vignette for high-end look */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0D0D0D]/40 opacity-40 group-hover:opacity-20 transition-opacity duration-1000" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── SECTION 3: PHILOSOPHY ─── */}
            <section className="px-6 py-20 md:py-32 relative bg-[#F9F8F3] overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#662483]/5 rounded-full blur-[100px] md:blur-[150px]" />
                    <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-[#662483]/[0.08] rounded-full blur-[120px]" />
                    <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="dot-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="1.5" fill="#662483" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#dot-pattern)" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
                    >
                        <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-[#662483]/10 text-[#662483] text-[10px] md:text-sm font-bold tracking-widest uppercase shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#662483] animate-pulse"></span>
                            OUR PHILOSOPHY
                        </div>
                        <h2 className="text-[#0D0D0D] text-4xl md:text-6xl font-black tracking-tight mb-6 font-['Roboto',sans-serif]">
                            Why <span className="text-[#662483]">Elevare Connect.</span>
                        </h2>
                        <p className="text-[#52525B] text-lg md:text-xl font-medium leading-relaxed">
                            High-performance methodology combined with deep academic empathy.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Expertise", desc: "Led by a seasoned HR Professional & Academician bridging theory and practice.", icon: Award },
                            { title: "Personalized", desc: "Adapting to each student's unique personality and career aspirations.", icon: Users },
                            { title: "Holistic", desc: "Nurturing emotional intelligence, critical thinking, and leadership.", icon: BookOpen },
                            { title: "Aligned", desc: "Real-world alignment with current market demands and global practices.", icon: Target },
                        ].map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{ y: -8 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="group relative p-8 md:p-10 rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(124,58,237,0.1)] transition-all duration-500 overflow-hidden"
                                >
                                    {/* Hover gradient line */}
                                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#662483] to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                    
                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center bg-[#F5F3FF] text-[#662483] mb-6 md:mb-8 shadow-inner group-hover:bg-[#662483] group-hover:text-white transition-colors duration-500 relative z-10">
                                        <Icon className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                                    </div>
                                    <h4 className="font-bold text-xl md:text-[22px] tracking-tight text-[#0D0D0D] mb-4 font-['Roboto',sans-serif] relative z-10">{s.title}</h4>
                                    <p className="text-[#52525B] text-sm md:text-[15px] font-medium leading-relaxed relative z-10">{s.desc}</p>
                                    
                                    {/* Decorative background shape in card */}
                                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#F5F3FF] rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ─── SECTION 4: CTA ─── */}
            <section className="px-6 py-24 md:py-40 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#662483]/10 rounded-full blur-[100px] md:blur-[140px] pointer-events-none" />
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center relative z-10"
                >
                    <h2 className="text-[#0D0D0D] text-4xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] font-['Roboto',sans-serif]">
                        Collaborate <br />
                        <span className="text-[#662483]">with us today.</span>
                    </h2>
                    <p className="text-[#52525B] font-medium text-lg md:text-xl leading-relaxed max-w-lg mx-auto mb-12">
                        Let&apos;s shape the next generation of confident, career-ready professionals together.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-5">
                        <Link href="/contact" className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 rounded-full bg-[#662483] text-white font-bold text-xs md:text-sm tracking-[0.2em] uppercase transition-all hover:bg-[#4A1561] group shadow-xl shadow-[#662483]/20">
                            Get Started <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link href="/services" className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 rounded-full bg-white border border-slate-200 text-[#0D0D0D] font-bold text-xs md:text-sm tracking-[0.2em] uppercase transition-all hover:border-[#662483] hover:text-[#662483]">
                            Our Services
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}