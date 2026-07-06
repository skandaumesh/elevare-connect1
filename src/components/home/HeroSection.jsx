"use client";
import { motion } from "framer-motion";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[100dvh] min-h-[600px] flex items-center overflow-hidden bg-white">
      
      {/* Background Image - Neutral Premium Style (Softened) optimized for LCP */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero1.png"
          alt="Elevare Connect Professional Mentorship background"
          fill
          priority
          quality={75}
          sizes="(max-width: 768px) 100vw, 100vw"
          className="object-cover object-[75%] sm:object-[85%] md:object-center scale-105"
        />
        {/* Gradient overlay for text readability optimized for mobile to desktop */ }
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent sm:from-white sm:via-white/70 w-full md:w-3/4" />
        {/* Additional mobile bottom fade to ensure text readability if it wraps */ }
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/80 to-transparent sm:hidden" />
      </div>

      {/* Modern Gradient Accents for Depth */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#6E2690]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-[#6E2690]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mt-20 lg:mt-32">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Eyebrow - High-Impact Highlighted Badge */}
          <div className="inline-flex mb-8">
            <span className="px-5 py-2.5 rounded-full bg-[#6E2690] text-white text-[10px] md:text-sm font-black tracking-[0.15em] uppercase shadow-xl shadow-[#6E2690]/20">
              Elevare Connect
            </span>
          </div>

          {/* Scaled Back Heading */}
          <h1 className="text-[#1E293B] text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] uppercase [text-shadow:0_1px_2px_rgba(255,255,255,0.8)]">
            Where Ambition Finds <br className="hidden sm:block" />
            <span className="text-[#6E2690]">its Direction.</span>
          </h1>

          {/* Subheading - Refined Spacing */}
          <p className="text-[#1E293B] md:text-[#52525B] text-base md:text-lg font-bold md:font-medium mb-10 leading-relaxed max-w-xl border-l-[3px] border-slate-200 pl-6 [text-shadow:0_1px_2px_rgba(255,255,255,0.8)]">
            Expert-led soft skills training, campus-to-career mentoring, and professional grooming for students and young professionals.
          </p>

          {/* CTAs - Scaled Down */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 md:gap-6">
            <a href="/services" className="w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4 bg-[#6E2690] text-white font-bold rounded-xl hover:bg-[#6E2690] transition-all text-center tracking-wide uppercase text-xs md:text-sm shadow-xl hover:-translate-y-0.5">
              Discover More
            </a>
            <a href="/contact" className="w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4 bg-white text-[#1E293B] font-bold rounded-xl border border-slate-200 hover:border-[#0D0D0D] transition-all text-center tracking-wide uppercase text-xs md:text-sm shadow-sm group">
              Contact Us <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}