"use client";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  // Images from public folder
  const galleryImages = [
    "/hero1.jpeg",
    "/hero2.jpeg",
    "/hero3.jpeg",
    "/hero1.jpeg",
    "/hero2.jpeg",
    "/hero3.jpeg",
    "/hero1.jpeg",
  ];

  // Double the array to create a seamless infinite loop
  const marqueeImages = [...galleryImages, ...galleryImages];

  // Background color variable so the curved masks perfectly blend
  const bgColor = "#F9F8F3"; // Subtle warm cream aesthetic background

  return (
    <section
      className="relative min-h-screen pt-20 pb-0 flex flex-col items-center justify-start overflow-hidden font-instrument-serif"
      style={{ backgroundColor: bgColor }}
    >
      {/* Injection for the elegant Instrument Sans font */}
      <style dangerouslySetInnerHTML={{
        __html: `
                @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
                .font-instrument-serif { font-family: 'Instrument Serif', serif; }
            `}} />

      {/* --- Top Text Content --- */}
      <div className="relative z-40 max-w-4xl mx-auto px-6 text-center flex flex-col justify-start mt-12 md:mt-20 mb-0">



        {/* Main Headline (Exactly as requested) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative inline-block"
        >
          {/* Sparkle Doodle (Top Left) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            animate={{ opacity: 1, scale: 0.8, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute -left-6 -top-4 md:-left-14 md:-top-4 opacity-80 pointer-events-none"
          >
            <svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 10 Q40 40 10 40 Q40 40 40 70 Q40 40 70 40 Q40 40 40 10 Z" stroke="#2B124C" strokeWidth="2.5" fill="none" />
              <path d="M75 15 Q75 25 65 25 Q75 25 75 35 Q75 25 85 25 Q75 25 75 15 Z" stroke="#A87ED7" strokeWidth="2" fill="none" />
              <line x1="22" y1="22" x2="28" y2="28" stroke="#2B124C" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </motion.div>

          {/* Burst/Splash Lines Doodle (Right Side) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            animate={{ opacity: 1, scale: 0.9, rotate: 10 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute -right-6 top-8 md:-right-14 md:top-8 opacity-80 pointer-events-none"
          >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 35 L26 8" stroke="#2B124C" strokeWidth="6" strokeLinecap="round" fill="none" />
              <path d="M25 40 L48 20" stroke="#A87ED7" strokeWidth="6" strokeLinecap="round" fill="none" />
              <path d="M28 46 L55 52" stroke="#2B124C" strokeWidth="6" strokeLinecap="round" fill="none" />
            </svg>
          </motion.div>

          <h1 className="text-[#2B124C] text-4xl md:text-5xl lg:text-[58px] font-semibold leading-[1.05] tracking-wide mb-4 relative z-10 font-instrument-serif">
            Where Ambition <span className="relative inline-block">Finds
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-10 md:-top-12 left-1/2 -translate-x-1/2 w-14 h-14 pointer-events-none"
              >
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 2L22 15L35 17L22 19L20 32L18 19L5 17L18 15L20 2Z" fill="#A87ED7" opacity="0.4" />
                  <path d="M20 8L21 15L28 16L21 17L20 24L19 17L12 16L19 15L20 8Z" fill="#2B124C" />
                </svg>
              </motion.div>
            </span> <br className="hidden md:block" />
            <span className="block mt-2 font-bold tracking-tight bg-gradient-to-r from-[#A87ED7] to-[#2B124C] bg-clip-text text-transparent">its Direction</span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-gray-500 text-[16px] md:text-[19px] leading-relaxed max-w-2xl mx-auto font-medium">
            Professional Coaching & Mentorship Backed <br />
            by Experts in Industry and Academia
          </p>
        </motion.div>


      </div>

      {/* --- Curved Marquee Gallery --- */}
      {/* Using absolute white shapes to pinch the center (concave/valley effect) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative w-full max-w-[100vw] h-[400px] md:h-[480px] lg:h-[560px] overflow-hidden flex-shrink-0 -mt-2 md:-mt-6 lg:-mt-10"
      >
        {/* Top Concave Mask */}
        <div
          className="absolute -top-[2px] left-1/2 -translate-x-1/2 w-[180vw] md:w-[150vw] lg:w-[120vw] h-[60px] md:h-[100px] rounded-b-[50%] z-20 pointer-events-none"
          style={{ backgroundColor: bgColor }}
        />

        {/* Bottom Concave Mask (Slightly smaller to leave some image visible at bottom or same size) */}
        <div
          className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-[180vw] md:w-[150vw] lg:w-[120vw] h-[60px] md:h-[100px] rounded-t-[50%] z-20 pointer-events-none"
          style={{ backgroundColor: bgColor }}
        />

        <motion.div
          className="flex h-full gap-3 md:gap-4 px-2"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35 // scroll speed
          }}
        >
          {marqueeImages.map((src, index) => (
            <div
              key={index}
              className="relative h-full w-[200px] md:w-[260px] lg:w-[320px] flex-shrink-0"
              style={{
                borderRadius: '32px',
                overflow: 'hidden',
                padding: '8px',
                background: 'rgba(255, 255, 255, 0.55)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1.5px solid rgba(255, 255, 255, 0.8)',
                boxShadow: '0 4px 24px rgba(43, 18, 76, 0.1), 0 1px 3px rgba(0,0,0,0.06)',
                transform: 'translateZ(0)',
                WebkitTransform: 'translateZ(0)',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  transform: 'translateZ(0)',
                  WebkitTransform: 'translateZ(0)',
                  isolation: 'isolate',
                }}
              >
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  draggable="false"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

    </section>
  );
}