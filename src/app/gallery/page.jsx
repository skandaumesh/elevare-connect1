"use client";
import { useState } from "react";
import Link from "next/link";
import { X, Search, Camera, ArrowRight } from "lucide-react";
import { useReveal } from "@/components/Animations";

const galleryItems = [
    { src: "https://elevareacademy.in/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-06-at-17.50.34.jpeg", title: "Workshop Session", type: "Interactive Training" },
    { src: "https://elevareacademy.in/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-06-at-17.50.35-1.jpeg", title: "Training Program", type: "Skill Enhancement" },
    { src: "https://elevareacademy.in/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-06-at-17.50.35.jpeg", title: "Campus Engagement", type: "Institution Bridge" },
    { src: "https://elevareacademy.in/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-06-at-17.50.36.jpeg", title: "Interactive Session", type: "Peer Discussion" },
    { src: "https://elevareacademy.in/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-07-at-20.57.02.jpeg", title: "Mentoring Program", type: "1:1 Coaching" },
    { src: "https://elevareacademy.in/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-07-at-20.57.03-1.jpeg", title: "Leadership Workshop", type: "Career Readiness" },
    { src: "https://elevareacademy.in/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-07-at-20.57.03-2.jpeg", title: "Group Activity", type: "Team Building" },
    { src: "https://elevareacademy.in/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-07-at-20.57.03.jpeg", title: "Collaboration", type: "Impact Program" },
    { src: "https://elevareacademy.in/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-07-at-21.29.22.jpeg", title: "Student Engagement", type: "Campus Event" },
    { src: "https://elevareacademy.in/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-07-at-21.29.23.jpeg", title: "Campus Event", type: "Institutional Bridge" },
];

export default function GalleryPage() {
    const [selectedImg, setSelectedImg] = useState(null);
    const addToRefs = useReveal();

    return (
        <div className="relative bg-white min-h-screen">
            {/* Hero */}
            <section className="relative text-center pt-40 pb-24 overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
                    <div ref={addToRefs} className="space-y-10 reveal flex flex-col items-center">
                        <div className="tag">GALLERY</div>
                        <h1 style={{ fontSize: "clamp(48px, 7vw, 84px)", lineHeight: 1, letterSpacing: "-0.04em", fontWeight: 600 }} className="text-[#111827]">
                            Moments of <br className="hidden sm:block" />
                            <span className="text-gray-400">Growth.</span>
                        </h1>
                        <p className="text-[#6B7280] max-w-lg mx-auto" style={{ fontSize: "20px", lineHeight: 1.6, fontWeight: 400 }}>
                            From vibrant workshops to personal sessions — snapshots of transformation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="px-6 py-24 max-w-7xl mx-auto relative border-t border-gray-50">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryItems.map((item, idx) => (
                        <div key={idx} ref={addToRefs} className="reveal glass-card relative overflow-hidden cursor-pointer group flex flex-col aspect-[4/3] bg-white border border-gray-100 shadow-sm rounded-[32px] hover:shadow-2xl transition-all duration-700" onClick={() => setSelectedImg(item.src)}>
                            <div className="flex-1 overflow-hidden relative">
                                <img src={item.src} alt={item.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-transparent transition-colors group-hover:bg-black/5" />
                            </div>
                            <div className="relative p-6 bg-white flex items-center">
                                <div className="space-y-1 flex-1">
                                    <span className="font-bold uppercase text-gray-400" style={{ fontSize: "10px", letterSpacing: "0.1em" }}>{item.type}</span>
                                    <h3 className="text-lg font-bold text-[#111827]">{item.title}</h3>
                                </div>
                                <div className="ml-auto">
                                    <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 group-hover:text-black group-hover:border-black transition-all">
                                        <Search size={16} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section ref={addToRefs} className="reveal px-6 pb-40 relative">
                <div className="max-w-4xl mx-auto glass-card relative overflow-hidden text-center px-10 py-20 border-gray-100 bg-white shadow-2xl rounded-[40px]">
                    <div className="relative z-10 space-y-10 max-w-2xl mx-auto">
                        <h2 className="text-[#111827] font-bold" style={{ fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1, letterSpacing: "-0.03em" }}>Want Us at <br className="hidden sm:block" /> Your Campus?</h2>
                        <p className="text-[#6B7280] max-w-sm mx-auto" style={{ fontSize: "18px", lineHeight: 1.6 }}>Let&apos;s create more impactful moments together.</p>
                        <div className="pt-4 flex justify-center gap-6">
                            <Link href="/contact" className="px-10 py-5 rounded-full bg-black text-white font-bold text-[16px] transition-all hover:-translate-y-1 hover:shadow-xl inline-flex items-center gap-2">
                                Get in Touch <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {selectedImg && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-white/95 backdrop-blur-2xl transition-all" onClick={() => setSelectedImg(null)}>
                    <button className="absolute top-10 right-10 w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center text-black hover:bg-gray-50 hover:scale-110 transition-all"><X size={24} /></button>
                    <img src={selectedImg} alt="Gallery" className="max-w-full max-h-[85vh] rounded-[40px] shadow-2xl" onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </div>
    );
}
