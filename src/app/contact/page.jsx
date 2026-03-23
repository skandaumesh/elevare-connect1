"use client";
import { Mail, Linkedin, Instagram, Send, Facebook, Twitter, Sparkles } from "lucide-react";
import { useReveal } from "@/components/Animations";

export default function ContactPage() {
    const addToRefs = useReveal();

    const contactMethods = [
        { icon: Mail, label: "Email", value: "info@elevareacademy.com", href: "mailto:info@elevareacademy.com" },
        { icon: Linkedin, label: "LinkedIn", value: "Elevare Connect", href: "https://www.linkedin.com/in/elevare-academy-791889379/" },
        { icon: Instagram, label: "Instagram", value: "@elevare05", href: "https://www.instagram.com/elevare05/" },
    ];

    return (
        <div className="relative bg-white min-h-screen">
            {/* Hero */}
            <section className="relative text-center pt-40 pb-24 overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
                    <div ref={addToRefs} className="space-y-10 reveal flex flex-col items-center">
                        <div className="tag">CONTACT US</div>
                        <h1 style={{ fontSize: "clamp(48px, 7vw, 84px)", lineHeight: 1, letterSpacing: "-0.04em", fontWeight: 600 }} className="text-[#111827]">
                            Collaborate <br className="hidden sm:block" />
                            <span className="text-gray-400">With Us.</span>
                        </h1>
                        <p className="text-[#6B7280] max-w-lg mx-auto" style={{ fontSize: "20px", lineHeight: 1.6, fontWeight: 400 }}>
                            Reach out to empower your students with professional excellence and world-class training.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="px-6 py-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 lg:gap-32 items-start relative border-t border-gray-50">
                {/* Left: Contact Info */}
                <div ref={addToRefs} className="reveal space-y-12">
                    <div className="space-y-6">
                        <h2 className="text-[#111827]" style={{ fontSize: "clamp(32px, 4.5vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.03em", fontWeight: 600 }}>Start a Conversation.</h2>
                        <p className="text-[#6B7280] max-w-sm" style={{ fontSize: "18px", lineHeight: 1.65 }}>Whether you&apos;re an institution or individual seeking mentorship, we&apos;ll respond within 24 hours.</p>
                    </div>

                    <div className="grid gap-4">
                        {contactMethods.map((item, idx) => {
                            const Icon = item.icon; return (
                                <div key={idx} className="glass-card flex items-center gap-6 p-6 group cursor-pointer border-gray-100 hover:border-black/10 shadow-sm transition-all duration-500">
                                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all bg-gray-50 text-black group-hover:scale-110"><Icon size={20} /></div>
                                    <div>
                                        <span className="font-bold text-gray-400 block mb-1" style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase" }}>{item.label}</span>
                                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-[15px] font-bold text-[#111827] no-underline hover:text-black transition-colors">{item.value}</a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="space-y-4 pt-4 border-t border-gray-50">
                        <span className="font-bold text-gray-400" style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" }}>Follow the impact</span>
                        <div className="flex gap-3">
                            {[
                                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61582428213379" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/elevare-academy-791889379/" },
                                { icon: Twitter, href: "https://x.com/ElevareA49358" },
                                { icon: Instagram, href: "https://www.instagram.com/elevare05/" },
                            ].map((s, i) => {
                                const Icon = s.icon; return (
                                    <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                                        className="w-11 h-11 rounded-full flex items-center justify-center transition-all bg-white border border-gray-100 text-gray-400 hover:text-black hover:border-black hover:-translate-y-1">
                                        <Icon size={18} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Right: Form */}
                <div ref={addToRefs} className="reveal delay-1">
                    <form className="glass-card p-10 md:p-14 space-y-8 bg-white border border-gray-100 shadow-xl rounded-[40px]">
                        <div className="space-y-2">
                            <h3 className="text-3xl font-bold text-[#111827]" style={{ letterSpacing: "-0.02em" }}>Get in touch</h3>
                            <p className="text-[#6B7280] font-medium" style={{ fontSize: "15px" }}>We&apos;ll get back with a roadmap for impact.</p>
                        </div>
                        <div className="grid gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="font-bold text-[#111827] pl-1" style={{ fontSize: "11px", letterSpacing: "0.06em", textTransform: "uppercase" }}>Institution</label>
                                <input type="text" placeholder="Your organization" className="input-clean bg-gray-50/50 border-gray-100 h-14" />
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="font-bold text-[#111827] pl-1" style={{ fontSize: "11px", letterSpacing: "0.06em", textTransform: "uppercase" }}>Name</label>
                                    <input type="text" placeholder="Your name" className="input-clean bg-gray-50/50 border-gray-100 h-14" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="font-bold text-[#111827] pl-1" style={{ fontSize: "11px", letterSpacing: "0.06em", textTransform: "uppercase" }}>Phone</label>
                                    <input type="tel" placeholder="+91 00000 00000" className="input-clean bg-gray-50/50 border-gray-100 h-14" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-bold text-[#111827] pl-1" style={{ fontSize: "11px", letterSpacing: "0.06em", textTransform: "uppercase" }}>Email</label>
                                <input type="email" placeholder="name@institution.com" className="input-clean bg-gray-50/50 border-gray-100 h-14" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-bold text-[#111827] pl-1" style={{ fontSize: "11px", letterSpacing: "0.06em", textTransform: "uppercase" }}>Message</label>
                                <textarea rows="3" placeholder="How can we help?" className="input-clean bg-gray-50/50 border-gray-100 resize-none p-4" />
                            </div>
                        </div>
                        <button type="submit" className="w-full text-white rounded-full font-bold h-16 flex items-center justify-center gap-2 transition-all bg-black hover:bg-zinc-800 hover:-translate-y-1 active:scale-[0.98] text-[16px] border-none cursor-pointer">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>
            </section>
            <div className="h-24" />
        </div>
    );
}
