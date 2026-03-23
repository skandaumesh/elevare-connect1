"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Heart, Lightbulb, Shield, Zap, Sparkles, Quote, Users, Award, BookOpen, Target, ArrowRight } from "lucide-react";

function useReveal() {
    const refs = useRef([]);
    const add = useCallback((el) => { if (el && !refs.current.includes(el)) refs.current.push(el); }, []);
    useEffect(() => {
        const obs = new IntersectionObserver((e) => e.forEach((x) => { if (x.isIntersecting) x.target.classList.add("active"); }), { threshold: 0.08 });
        refs.current.forEach((r) => obs.observe(r));
        return () => obs.disconnect();
    }, []);
    return add;
}

export default function AboutPage() {
    const r = useReveal();
    const [m, setM] = useState(false);
    useEffect(() => setM(true), []);

    return (
        <div className="relative min-h-screen bg-white">
            {/* ─── SECTION 1: HERO ─── */}
            <section className="relative pt-40 pb-24 overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto flex flex-col items-center" style={{ opacity: m ? 1 : 0, transform: m ? "none" : "translateY(24px)", transition: "all 0.8s cubic-bezier(.16,1,.3,1)" }}>
                        <div className="tag mb-10">ABOUT ELEVARE CONNECT</div>
                        <h1 style={{ fontSize: "clamp(48px, 7vw, 84px)", lineHeight: 1, fontWeight: 600, letterSpacing: "-0.04em", marginBottom: "32px" }} className="text-[#111827]">
                            Empowering with <br />
                            <span className="text-gray-400">Human-Centric Skills.</span>
                        </h1>
                        <p style={{ fontSize: "20px", lineHeight: 1.6, color: "#6B7280", maxWidth: "640px", marginBottom: "48px", fontWeight: 400 }}>
                            We partner with institutions to unlock every student&apos;s potential — enhancing communication, leadership, and emotional intelligence.
                        </p>

                        <div className="flex gap-12 md:gap-20 justify-center flex-wrap">
                            {[{ v: "20+", l: "Partner Colleges" }, { v: "500+", l: "Students Trained" }, { v: "50+", l: "Workshops Delivered" }].map((s) => (
                                <div key={s.l} className="flex flex-col items-center">
                                    <p className="font-bold text-[#111827]" style={{ fontSize: "40px", letterSpacing: "-0.03em" }}>{s.v}</p>
                                    <p className="text-gray-400 font-bold" style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.l}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── SECTION 2: FOUNDER ─── */}
            <section className="px-6 py-32 relative border-t border-gray-50">
                <div ref={r} className="reveal max-w-6xl mx-auto">
                    <div className="glass-card overflow-hidden bg-white border border-gray-100 shadow-sm">
                        <div className="grid md:grid-cols-2 lg:grid-cols-5">
                            <div className="md:col-span-2 relative min-h-[500px]">
                                <img src="/founder.jpeg" alt="Wilma Merina D'Sa" className="absolute inset-0 w-full h-full object-cover transition-all duration-1000" />
                            </div>
                            <div className="md:col-span-3 p-10 lg:p-20 flex flex-col justify-center">
                                <div className="tag mb-8">THE VISIONARY</div>
                                <h2 className="text-[#111827] mb-8" style={{ fontSize: "clamp(32px, 4.5vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.02em", fontWeight: 600 }}>Wilma Merina D&apos;Sa</h2>

                                <div className="space-y-6">
                                    <p className="text-[#6B7280]" style={{ fontSize: "18px", lineHeight: 1.7 }}>
                                        At Elevare Connect, we are passionate about partnering with institutions that share our vision of holistic student development. With a strong foundation in HR and academia, I founded Elevare Connect to support colleges in preparing students not just for jobs, but for confident, impactful careers.
                                    </p>
                                    <p className="text-[#6B7280]" style={{ fontSize: "18px", lineHeight: 1.7 }}>
                                        I warmly invite your institution to collaborate with us in equipping students with the essential soft skills, professional grooming, and career readiness they need to thrive beyond campus.
                                    </p>
                                </div>

                                <div className="mt-12 pt-10 flex items-center gap-5 border-t border-gray-50">
                                    <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold">W</div>
                                    <div>
                                        <p className="font-bold text-[#111827]" style={{ fontSize: "18px" }}>Founder, Elevare Connect</p>
                                        <p className="text-gray-400 font-medium" style={{ fontSize: "14px" }}>wilma@elevareacademy.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── SECTION 3: STRATEGY ─── */}
            <section className="px-6 py-32 bg-gray-50/30">
                <div className="max-w-6xl mx-auto text-center mb-20">
                    <div ref={r} className="reveal space-y-6">
                        <div className="tag mx-auto">OUR PHILOSOPHY</div>
                        <h2 className="text-[#111827]" style={{ fontSize: "clamp(40px, 5.5vw, 64px)", lineHeight: 1, letterSpacing: "-0.03em", fontWeight: 600 }}>Why Elevare.</h2>
                        <p className="text-[#6B7280] max-w-2xl mx-auto" style={{ fontSize: "20px", lineHeight: 1.6 }}>High-performance methodology combined with deep academic empathy.</p>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Expertise", desc: "Led by a seasoned HR Professional & Academician bridging theory and practice.", icon: Award },
                        { title: "Personalized", desc: "Adapting to each student's unique personality and career aspirations.", icon: Users },
                        { title: "Holistic", desc: "Nurturing emotional intelligence, critical thinking, and leadership.", icon: BookOpen },
                        { title: "Aligned", desc: "Real-world alignment with current market demands and global practices.", icon: Target },
                    ].map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <div key={i} ref={r} className="reveal glass-card p-10 bg-white border border-gray-100 hover:border-black/10 transition-all duration-500">
                                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gray-50 text-black mb-8">
                                    <Icon size={24} />
                                </div>
                                <h4 className="text-xl font-bold text-[#111827] mb-4">{s.title}</h4>
                                <p className="text-[#6B7280] text-[15px] font-medium leading-relaxed">{s.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ─── SECTION 6: CTA ─── */}
            <section className="px-6 py-40 border-t border-gray-50 bg-white">
                <div ref={r} className="reveal max-w-4xl mx-auto text-center">
                    <div className="space-y-10">
                        <h2 className="text-[#111827] font-bold" style={{ fontSize: "clamp(48px, 6vw, 76px)", lineHeight: 1, letterSpacing: "-0.04em" }}>
                            Collaborate <br />
                            <span className="text-gray-300">with us today.</span>
                        </h2>
                        <p className="text-[#6B7280] max-w-lg mx-auto" style={{ fontSize: "20px", lineHeight: 1.6 }}>
                            Let&apos;s shape the next generation of confident, career-ready professionals together.
                        </p>
                        <div className="flex justify-center gap-6 pt-10">
                            <Link href="/contact" className="px-10 py-5 rounded-full bg-black text-white font-bold text-[16px] transition-all hover:-translate-y-1 hover:shadow-xl">
                                Get Started
                            </Link>
                            <Link href="/services" className="px-10 py-5 rounded-full bg-white border border-gray-200 text-black font-bold text-[16px] transition-all hover:bg-gray-50">
                                Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
