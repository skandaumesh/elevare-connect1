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
            blob1: "bg-purple-100", blob2: "bg-[#FDFBFF]"
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
        <section className="py-14 md:py-20 bg-gradient-to-b from-white via-[#FAF6FD] to-white relative overflow-hidden">
            {/* Design Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Visible brand glows — slow drifting */}
                <motion.div
                    animate={{ y: [0, -40, 0], x: [0, 25, 0], scale: [1, 1.12, 1] }}
                    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[5%] left-[-8%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#6E2690]/[0.08] rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{ y: [0, 35, 0], x: [0, -25, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[0%] right-[-8%] w-[450px] md:w-[650px] h-[450px] md:h-[650px] bg-[#6E2690]/[0.07] rounded-full blur-[110px]"
                />

                {/* Purple dot texture */}
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#6E2690 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

                {/* Decorative dashed rings — slow spin + float */}
                <motion.svg
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute top-16 right-[6%] hidden lg:block" width="140" height="140" viewBox="0 0 140 140" fill="none"
                >
                    <circle cx="70" cy="70" r="64" stroke="#6E2690" strokeOpacity="0.15" strokeWidth="1.5" strokeDasharray="8 8" />
                    <circle cx="70" cy="70" r="38" stroke="#6E2690" strokeOpacity="0.1" strokeWidth="1.5" />
                </motion.svg>
                <motion.svg
                    animate={{ rotate: -360, y: [0, -15, 0] }}
                    transition={{ rotate: { duration: 50, repeat: Infinity, ease: "linear" }, y: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
                    className="absolute bottom-20 left-[4%] hidden lg:block" width="100" height="100" viewBox="0 0 100 100" fill="none"
                >
                    <circle cx="50" cy="50" r="45" stroke="#6E2690" strokeOpacity="0.12" strokeWidth="1.5" strokeDasharray="6 6" />
                </motion.svg>

                {/* Floating accent dots */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[30%] left-[8%] w-3 h-3 rounded-full bg-[#6E2690]/20 hidden md:block"
                />
                <motion.div
                    animate={{ y: [0, 18, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-[15%] right-[20%] w-2 h-2 rounded-full bg-[#6E2690]/25 hidden md:block"
                />
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[25%] right-[10%] w-2.5 h-2.5 rounded-full bg-[#6E2690]/15 hidden md:block"
                />
            </div>

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-[#1E293B] text-4xl md:text-[44px] font-bold tracking-tight">
                        Program Add-Ons & <span className="text-[#6E2690]">Enrichments</span>
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
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            quality={75}
                                        />
                                    </div>
                                </div>

                                {/* Text content with improved typography */}
                                <h3 className="text-[#1E293B] text-[19px] leading-tight font-bold tracking-tight">
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
