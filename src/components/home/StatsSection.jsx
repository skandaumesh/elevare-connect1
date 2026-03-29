"use client";
import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { Building2, GraduationCap, Users, Handshake } from "lucide-react";

function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }

    let startTimestamp = null;
    let frameId = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        frameId = window.requestAnimationFrame(step);
      }
    };
    frameId = window.requestAnimationFrame(step);
    
    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [target, duration, isInView]);

  return { count, ref };
}

export default function StatsSection() {
  return (
    <section className="relative w-full py-12 md:py-16 overflow-hidden bg-[#0D0B26]">
      
      {/* High-Impact Purple Gradient Aura */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1A134D] via-[#0D0B26] to-[#020617]" />

      {/* Premium Background Design Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Floating Mesh Gradient */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#8E44AD]/10 rounded-full blur-[100px]" />
        
        {/* Modern Geometric Line Design (Sine Waves) */}
        <svg className="absolute top-0 right-0 w-full md:w-2/3 h-full text-[#8E44AD]/20" viewBox="0 0 400 400" preserveAspectRatio="none">
          <path d="M0,100 C150,200 250,0 400,100 V400 H0 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0,150 C150,250 250,50 400,150 V400 H0 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M0,200 C150,300 250,100 400,200 V400 H0 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>

        <svg className="absolute bottom-[-10%] left-[-10%] w-full md:w-2/3 h-full text-white/[0.04] rotate-180" viewBox="0 0 400 400" preserveAspectRatio="none">
          <path d="M0,100 C150,200 250,0 400,100 V400 H0 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0,150 C150,250 250,50 400,150 V400 H0 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        
        {/* Tech Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#8E44AD 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        <StatItem icon={<Building2 size={42} strokeWidth={1.5} />} target={20} suffix="+" label="Colleges Impacted" />
        <StatItem icon={<GraduationCap size={42} strokeWidth={1.5} />} target={20000} suffix="+" label="Students Trained" />
        <StatItem icon={<Users size={42} strokeWidth={1.5} />} target={10} suffix="+" label="Industry Experts" />
        <StatItem icon={<Handshake size={42} strokeWidth={1.5} />} target={50} suffix="+" label="Programs Delivered" />
      </div>

    </section>
  );
}

function StatItem({ icon, label, target, suffix }) {
  const { count, ref } = useCounter(target);

  return (
    <div ref={ref} className="group relative flex flex-col items-center justify-center p-10 rounded-[40px] bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:bg-white/[0.08] transition-all duration-700 shadow-2xl">
      <div className="text-white mb-6 p-4 rounded-3xl bg-white/5 border border-white/10 group-hover:bg-[#8E44AD] group-hover:border-[#8E44AD] transition-all duration-500 transform group-hover:scale-110">
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tighter">
        {count}{suffix}
      </div>
      <div className="text-white/60 font-bold text-center text-xs md:text-sm tracking-[0.15em] uppercase mt-1">
        {label}
      </div>
    </div>
  );
}