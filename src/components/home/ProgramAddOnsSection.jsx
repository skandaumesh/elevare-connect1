"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProgramAddOnsSection() {
    const addons = [
        {
            id: 1,
            img: "/addon1.png",
            label: "Placement Oriented\nPrograms",
            blob1: "bg-slate-100", blob2: "bg-slate-50"
        },
        {
            id: 2,
            img: "/addon2.png",
            label: "Interview\nPreparations",
            blob1: "bg-purple-100", blob2: "bg-purple-50"
        },
        {
            id: 3,
            img: "/addon3.png",
            label: "Industry Talks and\nGuest Lectures",
            blob1: "bg-emerald-100", blob2: "bg-emerald-50"
        },
        {
            id: 4,
            img: "/addon4.png",
            label: "Workshops and\nWebinars",
            blob1: "bg-amber-100", blob2: "bg-amber-50"
        },
        {
            id: 5,
            img: "/addon5.png",
            label: "Job Description\nBased Training",
            blob1: "bg-rose-100", blob2: "bg-rose-50"
        },
        {
            id: 6,
            img: "/addon6.png",
            label: "Communication &\nPublic Speaking",
            blob1: "bg-cyan-100", blob2: "bg-cyan-50"
        }
    ];

    return (
        <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
            {/* Design Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-[#7C3AED]/[0.03] rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-purple-500/[0.03] rounded-full blur-[140px]" />
                <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#CBD5E1 0.8px, transparent 0.8px)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-[#7C3AED] text-[10px] font-bold tracking-[0.25em] uppercase bg-purple-50/50 border border-purple-100/50 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-pulse"></span>
                        Enrichment Programs
                    </div>
                    <h2 className="text-[#0f172a] text-4xl md:text-[44px] font-bold tracking-tight">
                        Program Add-Ons & <span className="text-[#7C3AED]">Enrichments</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {addons.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] rounded-[32px] p-8 flex flex-col items-center justify-center text-center hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden"
                        >
                            <div className="relative z-10 w-full">
                                {/* Illustration Container */}
                                <div className="relative w-full aspect-[4/3] mb-8 overflow-visible flex items-center justify-center">
                                    {/* Subtle decorative background blob that reacts to hover */}
                                    <div className={`absolute inset-0 ${item.blob1} opacity-[0.15] rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000`}></div>
                                    
                                    <div className="relative w-full h-full transform group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-700 ease-out">
                                        <Image
                                            src={item.img}
                                            alt={item.label}
                                            fill
                                            className="object-contain"
                                            sizes="(max-w-768px) 100vw, 33vw"
                                        />
                                    </div>
                                </div>

                                {/* Text content with improved typography */}
                                <h3 className="text-[#0f172a] text-[19px] leading-tight font-bold tracking-tight">
                                    {item.label.split('\n').map((line, i) => (
                                        <span key={i} className="block">
                                            {line}
                                        </span>
                                    ))}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
