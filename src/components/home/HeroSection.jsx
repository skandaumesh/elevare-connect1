"use client";
import { motion } from "framer-motion";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[100vh] min-h-[600px] flex items-center overflow-hidden bg-white">
      
      {/* Background Image - Neutral Premium Style (Softened) optimized for LCP */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Image
          src="/hero_premium.png"
          alt="Elevare Connect Professional Mentorship background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[85%] md:object-center scale-105"
        />
      </div>

      {/* Modern Gradient Accents for Depth */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#7C3AED]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-[#7C3AED]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Eyebrow - High-Impact Highlighted Badge */}
          <div className="inline-flex mb-8">
            <span className="px-5 py-2.5 rounded-full bg-[#7C3AED] text-white text-[10px] md:text-sm font-black tracking-[0.15em] uppercase shadow-xl shadow-[#7C3AED]/20">
              Elevare Connect
            </span>
          </div>

          {/* Scaled Back Heading */}
          <h1 className="text-[#0D0D0D] text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] uppercase [text-shadow:0_1px_2px_rgba(255,255,255,0.8)]">
            Where Ambition Finds <br className="hidden sm:block" />
            <span className="text-[#7C3AED]">its Direction.</span>
          </h1>

          {/* Subheading - Refined Spacing */}
          <p className="text-[#0D0D0D] md:text-[#52525B] text-base md:text-lg font-bold md:font-medium mb-10 leading-relaxed max-w-xl border-l-[3px] border-slate-200 pl-6 [text-shadow:0_1px_2px_rgba(255,255,255,0.8)]">
            Expert-led soft skills, campus-to-career mentoring and professional grooming for students and young professionals.
          </p>

          {/* CTAs - Scaled Down */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 md:gap-6">
            <a href="/services" className="w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4 bg-[#7C3AED] text-white font-bold rounded-xl hover:bg-[#6D28D9] transition-all text-center tracking-wide uppercase text-xs md:text-sm shadow-xl hover:-translate-y-0.5">
              Discover More
            </a>
            <a href="/contact" className="w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4 bg-white text-[#0D0D0D] font-bold rounded-xl border border-slate-200 hover:border-[#0D0D0D] transition-all text-center tracking-wide uppercase text-xs md:text-sm shadow-sm group">
              Contact Us <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}