"use client";
import { motion } from "framer-motion";

export default function VisionMissionSection() {
    const cardsData = [
        {
            title: "Our Mission",
            desc: "To elevate potential through personalized coaching, interactive learning, and expert guidance.",
            img: "/mission.png",
        },
        {
            title: "Our Vision",
            desc: "To be a trusted catalyst in shaping the next generation of career-ready, emotionally intelligent, and socially responsible professionals.",
            img: "/vision.png",
        }
    ];

    return (
        <section className="py-24 bg-[#FFFFFF] relative overflow-hidden">

            {/* Decorative textured visual background similar to the reference screenshot */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#6E2690] via-transparent to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center max-w-4xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-[#0D0D0D] text-4xl md:text-[44px] font-medium mb-6 tracking-tight">
                        Vision that Inspires Mission that Delivers
                    </h2>
                    <p className="text-[#52525B] text-lg leading-relaxed">
                        At Elevare Connect, our foundation is built on purpose empowering future professionals through mentorship, mindset, and practical mastery.
                    </p>
                </motion.div>

                {/* Mission & Vision Row (2 Columns) */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {cardsData.slice(0, 2).map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            className="relative w-full min-h-[440px] md:aspect-video rounded-[32px] overflow-hidden shadow-2xl group"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url(${card.img})` }}
                            ></div>

                            {/* Dark Gradient Overlay - Optimized for mobile top-to-bottom or left-to-right fade */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:bg-gradient-to-r md:from-black/80 md:via-black/30 md:to-transparent"></div>

                            {/* Text Content */}
                            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end max-w-2xl">
                                <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 tracking-tight drop-shadow-md">
                                    {card.title}
                                </h3>
                                <p className="text-white/90 text-sm md:text-lg leading-relaxed font-medium drop-shadow-sm max-w-lg">
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
