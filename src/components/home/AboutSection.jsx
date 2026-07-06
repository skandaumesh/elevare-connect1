"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
    return (
        <section id="about" className="py-14 md:py-20 bg-white relative overflow-hidden">
            {/* Elegant Minimalist BG */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Soft Gradient Accent */}
                <div className="absolute top-[20%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#6E2690]/[0.02] rounded-full blur-[80px] md:blur-[120px]" />

                {/* Minimalist Pattern */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'radial-gradient(#6E2690 0.8px, transparent 0.8px)',
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* LEFT Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="text-[#1E293B] text-xs md:text-sm font-bold tracking-widest uppercase mb-4">About Us</div>
                        <h2 className="text-[#1E293B] text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight font-roboto">
                            Paving Path to Professional Excellence
                        </h2>
                        <div className="text-[#52525B] text-base md:text-lg leading-relaxed mb-8 md:mb-10 space-y-4">
                            <p>
                                At Elevare Connect, we are passionate about empowering students and partnering with educational institutions to bridge the gap between education and employment. With a strong foundation in HR and academia, I founded Elevare Connect to help students and young professionals develop the confidence, skills, and career readiness needed to thrive in today&apos;s competitive world.
                            </p>
                            <p>
                                Whether through institutional collaborations or individual mentoring and training programs, our mission is to transform potential into professional success.
                            </p>
                            <p>
                                We welcome institutions, students, and young professionals to join us on this journey of growth, learning, and achievement.
                            </p>
                        </div>


                        {/* Founder Card */}
                        <div className="flex items-center gap-4 bg-white px-5 md:px-6 py-3 md:py-4 rounded-2xl w-max border border-slate-100 shadow-sm">
                            <div>
                                <div className="text-[#1E293B] font-bold text-base md:text-lg">Wilma Merina D&apos;Sa</div>
                                <div className="text-[#1E293B] text-[10px] md:text-sm font-bold uppercase tracking-widest">Founder</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full mt-12 lg:mt-0"
                    >
                        {/* Main Image (Large, Left) */}
                        <div className="absolute top-0 left-0 w-[85%] h-[85%] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl z-10 bg-[#FDFBFF] border-2 md:border-4 border-white">
                            <Image src="/p1.jpg" alt="Training Session" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>

                        {/* Overlapping Image (Smaller, Bottom Right) */}
                        <div className="absolute bottom-0 right-0 w-[65%] h-[55%] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl z-20 border-4 md:border-[10px] border-white bg-white">
                            <Image src="/founder2.jpg" alt="Students Collaboration" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
