"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({ target, suffix, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = parseInt(target);
    if (isNaN(end)) return;
    if (start === end) return;

    let totalMiliseconds = duration * 1000;
    let incrementTime = totalMiliseconds / end;
    if (incrementTime < 10) incrementTime = 10;

    let timer = setInterval(() => {
      start += Math.ceil(end / (duration * 60));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const stats = [
  { value: 50, suffix: "+", label: "Colleges Impacted", icon: "M20 2L22 15L35 17L22 19L20 32L18 19L5 17L18 15L20 2Z" },
  { value: 10000, suffix: "+", label: "Students Trained", icon: "M20 2L22 15L35 17L22 19L20 32L18 19L5 17L18 15L20 2Z" },
  { value: 25, suffix: "+", label: "Industry Experts", icon: "M20 2L22 15L35 17L22 19L20 32L18 19L5 17L18 15L20 2Z" },
  { value: 100, suffix: "+", label: "Programs Delivered", icon: "M20 2L22 15L35 17L22 19L20 32L18 19L5 17L18 15L20 2Z" },
];

export default function StatsSection() {
  const headRef = useRef(null);
  const isInView = useInView(headRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-[#F9F8F3] relative overflow-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
          .font-instrument-serif { font-family: 'Instrument Serif', serif; }
        `}} />

      {/* Background Decor */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#A87ED7]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#2B124C]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative SVG lines */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.08 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-10 left-10 pointer-events-none hidden lg:block"
      >
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="#2B124C" strokeWidth="0.5" strokeDasharray="4 8" />
          <circle cx="100" cy="100" r="50" stroke="#A87ED7" strokeWidth="0.5" strokeDasharray="4 8" />
          <circle cx="100" cy="100" r="20" stroke="#2B124C" strokeWidth="1" />
        </svg>
      </motion.div>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10 w-full">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#2B124C]/5 border border-[#2B124C]/10 text-[#2B124C] text-[11px] font-bold tracking-[0.3em] uppercase mb-4">
            OUR IMPACT
          </div>
          <h2 className="font-instrument-serif text-[#2B124C] tracking-wide text-3xl md:text-5xl leading-none">
            Numbers that <span className="bg-gradient-to-r from-[#A87ED7] to-[#2B124C] bg-clip-text text-transparent">Speak.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1100px] mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 md:p-8 rounded-[32px] flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2"
                style={{
                  background: 'rgba(255, 255, 255, 0.5)',
                  backdropFilter: 'blur(16px)',
                  border: '1.5px solid rgba(255, 255, 255, 0.8)',
                  boxShadow: '0 4px 24px rgba(43, 18, 76, 0.06)',
                }}
              >
                {/* Decorative sparkle */}
                <div className="mb-4">
                  <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
                    <path d={stat.icon} fill="#A87ED7" opacity="0.3" />
                    <path d="M20 8L21 15L28 16L21 17L20 24L19 17L12 16L19 15L20 8Z" fill="#2B124C" />
                  </svg>
                </div>

                <div className="font-instrument-serif text-3xl md:text-4xl lg:text-5xl text-[#2B124C] mb-2 tracking-wide leading-none">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>

                <h3 className="text-gray-400 font-medium text-[13px] md:text-[14px] leading-tight tracking-tight">
                  {stat.label}
                </h3>

                <div className="mt-6 w-8 h-[1.5px] bg-gradient-to-r from-[#A87ED7] to-[#2B124C] rounded-full opacity-30" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}