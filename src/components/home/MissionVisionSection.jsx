"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Eye, ArrowRight } from "lucide-react";

export default function MissionVisionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sections = [
    {
      label: "Mission",
      title: "Elevate every student's potential.",
      desc: "Providing personalized coaching, interactive learning, and expert guidance that bridges academia and a thriving career.",
      img: "/mission.png",
      icon: <Target className="w-6 h-6" />,
      tag: "THE IMPACT"
    },
    {
      label: "Vision",
      title: "Shape the next generation.",
      desc: "Becoming a trusted catalyst for building career-ready, emotionally intelligent, and socially responsible professionals.",
      img: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=1200",
      icon: <Eye className="w-6 h-6" />,
      tag: "THE FUTURE"
    }
  ];

  return (
    <section ref={ref} className="pt-16 pb-32 bg-[#F9F8F3] relative overflow-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
          .font-instrument-serif { font-family: 'Instrument Serif', serif; }
        `}} />

      {/* Decorative background blurs */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#A87ED7]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[0%] right-[0%] w-[500px] h-[500px] bg-[#2B124C]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative SVG — top right corner */}
      <motion.div
        initial={{ opacity: 0, rotate: -20 }}
        animate={isInView ? { opacity: 0.15, rotate: 0 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-20 right-12 pointer-events-none hidden md:block"
      >
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="45" stroke="#2B124C" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="50" cy="50" r="25" stroke="#A87ED7" strokeWidth="1.5" />
          <path d="M50 10 L50 90 M10 50 L90 50" stroke="#2B124C" strokeWidth="0.5" opacity="0.5" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#2B124C]/5 border border-[#2B124C]/10 text-[#2B124C] text-[11px] font-bold tracking-[0.3em] uppercase mb-8">
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M10 2L11 8L17 9L11 10L10 16L9 10L3 9L9 8L10 2Z" fill="#A87ED7" /></svg>
            OUR FOUNDATION
          </div>
          <h2 className="font-instrument-serif text-[#2B124C] tracking-wide text-4xl md:text-6xl lg:text-7xl leading-none">
            Vision & <span className="bg-gradient-to-r from-[#A87ED7] to-[#2B124C] bg-clip-text text-transparent">Mission.</span>
          </h2>
          <p className="mt-8 text-gray-500 font-medium text-lg leading-relaxed max-w-2xl mx-auto">
            At Elevare Connect, we are driven by a singular purpose: to transform potential into professional excellence through human-centric growth.
          </p>
        </motion.div>

        <div className="space-y-20">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12 md:gap-24`}
            >
              {/* Image Column */}
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute -inset-4 bg-[#A87ED7]/5 rounded-[48px] -z-10 transition-transform duration-700 group-hover:scale-[1.02]" />
                <div className="overflow-hidden rounded-[40px] shadow-2xl shadow-[#2B124C]/10 aspect-[4/3]">
                  <img
                    src={section.img}
                    alt={section.label}
                    className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                  />
                </div>
                {/* Float glass icon */}
                <div className="absolute -bottom-6 -right-6 md:right-auto md:-left-6 w-20 h-20 rounded-[24px] flex items-center justify-center text-[#2B124C] shadow-xl"
                  style={{
                    background: 'rgba(255,255,255,0.6)',
                    backdropFilter: 'blur(16px)',
                    border: '1.5px solid rgba(255,255,255,0.8)',
                  }}
                >
                  {section.icon}
                </div>
              </div>

              {/* Text Column */}
              <div className="w-full md:w-1/2 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2B124C]/5 border border-[#2B124C]/10 text-[#2B124C] text-[11px] font-bold tracking-[0.15em] uppercase">
                  {section.tag}
                </div>
                <div className="space-y-4">
                  <span className="text-[#A87ED7] text-sm font-bold tracking-[0.2em] uppercase">0{idx + 1} / {section.label}</span>
                  <h3 className="font-instrument-serif text-4xl md:text-5xl text-[#2B124C] tracking-wide leading-[1.1]">
                    {section.title}
                  </h3>
                </div>
                <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
                  {section.desc}
                </p>
                <motion.button
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 text-[#2B124C] font-bold uppercase tracking-widest text-sm"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}