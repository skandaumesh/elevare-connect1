"use client";
import { useRef } from "react";
import { Quote } from "lucide-react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    name: "Gouthami Shivakumar",
    role: "Placement Officer, MLA Academy",
    quote: "I would like to express my sincere gratitude to Ms. Wilma Merina D'Sa for conducting an insightful Training and Placement session at MLA Academy of Higher Learning. It helped students understand career planning and skill development.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Yashika Singh",
    role: "Financial Analyst, ABM Indore",
    quote: "I had an opportunity to be a part of various sessions conducted by Ms. Wilma Merina D'Sa. The sessions were very engaging and helped me personally to understand importance of placement readiness and developing right professional skills.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Dhruv Roy",
    role: "Voyager Sales, Marriott",
    quote: "Ms. Wilma Merina D'Sa has been one of the most inspiring mentors in my life. Her guidance helped me build confidence, discipline, and a strong professional mindset while preparing for interviews and entering corporate world.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Saksham Mathur",
    role: "Talent Acquisition, Wipro",
    quote: "Her mentorship helped me take the right steps in the corporate world. Instrumental in my journey to becoming a Senior Executive and mastering professional communication and leadership.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Ananya Mehta",
    role: "HR Manager, Deloitte",
    quote: "Exceptional training modules that truly bridge the gap between academic learning and industry expectations. The delivery is both professional and deeply engaging for every student.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
  }
];

const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

export default function TestimonialsSection() {
  const headRef = useRef(null);
  const isInView = useInView(headRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-[#F9F8F3] overflow-hidden relative">
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
          .font-instrument-serif { font-family: 'Instrument Serif', serif; }
          @keyframes testimonialTicker {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .testimonial-track {
            display: flex;
            width: max-content;
            animation: testimonialTicker 45s linear infinite;
          }
          .testimonial-track:hover {
            animation-play-state: paused;
          }
        `}} />

      {/* Background Blurs */}
      <div className="absolute top-[30%] left-[-5%] w-[600px] h-[600px] bg-[#A87ED7]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] bg-[#2B124C]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative SVG — sparkle cluster */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 0.12, scale: 1 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-20 left-16 pointer-events-none hidden lg:block"
      >
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
          <path d="M40 10 Q40 40 10 40 Q40 40 40 70 Q40 40 70 40 Q40 40 40 10 Z" stroke="#2B124C" strokeWidth="2" fill="none" />
          <path d="M75 15 Q75 25 65 25 Q75 25 75 35 Q75 25 85 25 Q75 25 75 15 Z" stroke="#A87ED7" strokeWidth="1.5" fill="none" />
        </svg>
      </motion.div>

      {/* Header */}
      <div ref={headRef} className="max-w-[1400px] mx-auto px-6 mb-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#2B124C]/5 border border-[#2B124C]/10 text-[#2B124C] text-[11px] font-bold tracking-[0.3em] uppercase mb-6">
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M10 2L11 8L17 9L11 10L10 16L9 10L3 9L9 8L10 2Z" fill="#A87ED7" /></svg>
            VOICES
          </div>
          <h2 className="font-instrument-serif text-[#2B124C] tracking-wide text-4xl md:text-5xl lg:text-7xl">
            Testimonials.
          </h2>
          <p className="text-gray-500 font-medium text-sm md:text-base tracking-wide max-w-lg mx-auto leading-relaxed mt-4">
            Real stories from individuals who transformed their <br className="hidden md:block" /> path through Elevare Connect.
          </p>
        </motion.div>
      </div>

      {/* Continuous Ticker */}
      <div className="relative flex overflow-hidden py-6">
        {/* Edge fades */}
        <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-[#F9F8F3] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-[#F9F8F3] to-transparent z-20 pointer-events-none" />

        <div className="testimonial-track relative z-10">
          {infiniteTestimonials.map((t, i) => (
            <div key={i} className="px-3 md:px-5 w-[calc(100vw/3)] min-w-[320px] max-w-[440px]">
              <div className="h-full p-8 md:p-12 rounded-[32px] flex flex-col justify-between h-[340px] md:h-[380px] transition-all duration-500 hover:-translate-y-1"
                style={{
                  background: 'rgba(255,255,255,0.5)',
                  backdropFilter: 'blur(16px)',
                  border: '1.5px solid rgba(255,255,255,0.8)',
                  boxShadow: '0 4px 24px rgba(43, 18, 76, 0.06)',
                }}
              >
                <div className="space-y-6">
                  <Quote className="text-[#A87ED7]/30 w-10 h-10" />
                  <p className="text-gray-500 text-[14px] md:text-[16px] leading-relaxed font-medium italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-5 pt-8 border-t border-[#2B124C]/5">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white shadow-xl shrink-0">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-instrument-serif text-[#2B124C] text-lg leading-tight mb-1">{t.name}</h4>
                    <p className="text-[11px] font-bold text-[#A87ED7] uppercase tracking-widest leading-none">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}