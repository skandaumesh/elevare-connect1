"use client";
import Link from "next/link";
import { Briefcase, ChartLine, Ship, Users, Check, ArrowRight, Sparkles } from "lucide-react";
import { useReveal } from "@/components/Animations";

const services = [
    { title: "Career Readiness", icon: Briefcase, desc: "Bridges the gap between campus and corporate life.", points: ["Campus-to-Corporate transition", "Resume & LinkedIn optimization", "Mock interviews & feedback"] },
    { title: "Skill Enhancement", icon: ChartLine, desc: "Develop the soft skills that matter most in the industry.", points: ["Communication & Time Management", "Workplace Etiquette", "Emotional Intelligence"] },
    { title: "Industry Bridge", icon: Ship, desc: "Align academic potential with current industry logic.", points: ["Industry Guest Lectures", "Final-year Project Mentoring", "Market-ready Curriculum"] },
    { title: "Mentorship", icon: Users, desc: "Personalized guidance for long-term career growth.", points: ["1:1 Personalized Mentorship", "Personal Branding", "Goal-setting Frameworks"] },
];

export default function ServicesPage() {
    const addToRefs = useReveal();

    return (
        <div className="relative bg-white min-h-screen">
            {/* Hero */}
            <section className="relative text-center pt-40 pb-24 overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
                    <div ref={addToRefs} className="space-y-10 reveal flex flex-col items-center">
                        <div className="tag">OUR SERVICES</div>
                        <h1 style={{ fontSize: "clamp(48px, 7vw, 84px)", lineHeight: 1, letterSpacing: "-0.04em", fontWeight: 600 }} className="text-[#111827]">
                            Industry <br className="hidden sm:block" />
                            <span className="text-gray-400">Readiness.</span>
                        </h1>
                        <p className="text-[#6B7280] max-w-lg mx-auto" style={{ fontSize: "20px", lineHeight: 1.6, fontWeight: 400 }}>
                            From soft skills to final year projects, we empower students with the tools they need to succeed.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Cards */}
            <section className="px-6 py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-8 relative border-t border-gray-50">
                {services.map((s, idx) => {
                    const Icon = s.icon; return (
                        <div key={idx} ref={addToRefs} className="reveal glass-card p-10 space-y-8 group border-gray-100 hover:border-black/10 shadow-sm transition-all duration-500 bg-white">
                            <div className="flex gap-6 items-start">
                                <div className="w-14 h-14 rounded-3xl flex items-center justify-center text-black bg-gray-50 flex-shrink-0 transition-transform group-hover:scale-105">
                                    <Icon size={24} strokeWidth={2} />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold text-[#111827]" style={{ letterSpacing: "-0.01em" }}>{s.title}</h3>
                                    <p className="text-[#6B7280] leading-relaxed" style={{ fontSize: "16px" }}>{s.desc}</p>
                                </div>
                            </div>
                            <div className="grid gap-3">
                                {s.points.map((p, pIdx) => (
                                    <div key={pIdx} className="flex gap-4 items-center p-4 rounded-2xl bg-gray-50/50 border border-gray-100 transition-colors group-hover:bg-gray-50">
                                        <Check size={18} className="text-[#111827] flex-shrink-0" />
                                        <span style={{ fontSize: "15px", color: "#4B5563", fontWeight: 500 }}>{p}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </section>

            {/* CTA */}
            <section ref={addToRefs} className="reveal px-6 max-w-5xl mx-auto pb-40 relative">
                <div className="glass-card relative overflow-hidden text-center px-10 py-20 md:px-20 border-gray-100 bg-white shadow-2xl rounded-[40px]">
                    <div className="relative z-10 space-y-10">
                        <h2 className="text-[#111827]" style={{ fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1, letterSpacing: "-0.03em", fontWeight: 600 }}>Is Elevare right <br className="hidden sm:block" /> for your campus?</h2>
                        <p className="text-[#6B7280] max-w-lg mx-auto" style={{ fontSize: "18px", lineHeight: 1.6 }}>Empower your student bodies with real-world professional excellence.</p>
                        <div className="pt-4 flex justify-center gap-6">
                            <Link href="/contact" className="px-10 py-5 rounded-full bg-black text-white font-bold text-[16px] transition-all hover:-translate-y-1 hover:shadow-xl inline-flex items-center gap-2">
                                Book a Demo <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
