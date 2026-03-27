"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, X } from "lucide-react";

const HighlightText = ({ text }) => {
  const parts = text.split(/(Ms\. Wilma Merina D['’]sa)/gi);
  return (
    <>
      {parts.map((part, i) => 
        /Ms\. Wilma Merina D['’]sa/i.test(part) ? (
          <strong key={i} className="font-bold text-[#0D0D0D]">{part}</strong>
        ) : (
          part
        )
      )}
    </>
  );
};

const TestimonialCard = ({ test, onReadMore }) => {
  return (
    <div className="flex-shrink-0 flex flex-col justify-between w-[320px] md:w-[420px] bg-white border border-slate-100 p-8 md:p-10 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-300 whitespace-normal min-h-[420px]">
      <div>
        <div className="flex gap-1 mb-6 text-yellow-400">
          {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
        </div>
        <p className="text-[#52525B] text-base md:text-lg italic leading-relaxed line-clamp-8">
          &quot;<HighlightText text={test.quote} />&quot;
        </p>
      </div>
      
      <div className="mt-auto pt-6 flex flex-col gap-8">
        <button 
          onClick={() => onReadMore(test)} 
          className="text-[#7C3AED] text-sm font-bold hover:underline focus:outline-none text-left"
        >
          Read More
        </button>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border border-[rgba(0,0,0,0.07)]">
            <img src={test.img} alt={test.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="text-[#0D0D0D] font-bold">{test.name}</h4>
            <p className="text-[#7C3AED] text-sm font-medium">{test.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TestimonialsSection() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedTestimonial) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedTestimonial]);

  const testimonials = [
    {
      name: "Gouthami Shivakumar",
      role: "Placement Officer, MLA Academy of Higher Learning",
      quote: "I would like to express my sincere gratitude to Ms. Wilma Merina D'sa for conducting an insightful Training and Placement session at MLA Academy of Higher Learning. Her expertise brought a fresh perspective to our campus, and the session was very informative. It helped students understand the importance of placement readiness, career planning, and meticulous skill development. The feedback has been overwhelmingly positive, highlighting how her practical approach makes a difference.",
      img: "/testimonials/testimonial1.jpeg",
    },
    {
      name: "Dhruv Roy",
      role: "Voyager Sales, Marriott International",
      quote: "Ms. Wilma Merina D'sa has been one of the most inspiring mentors in my life. Her guidance helped me build confidence, discipline, and a strong professional mindset, especially while preparing for interviews and entering the corporate world. The lessons, constant encouragement, and industry insights she gave during my college days continue to guide me in my career today. I owe much of my professional success to the foundational values she instilled in us.",
      img: "/testimonials/testimonial4.jpeg",
    },
    {
      name: "Yashika Singh",
      role: "Financial Analyst, ABM Indore Pvt Ltd",
      quote: "I had an opportunity to be a part of various sessions conducted by Ms. Wilma Merina D'sa, Founder of Elevare Academy, during my graduation days offered through my College. The sessions were very engaging, insightful and helped me personally to understand the importance of placement readiness, career planning, and developing the right professional skills for the modern finance sector. Her guidance and results-oriented approach played an important role in helping me secure my first job.",
      img: "/testimonials/testimonial2.jpeg",
    },
    {
      name: "Saksham Mathur",
      role: "Sr. Executive – Talent Acquisition, Wipro",
      quote: "Ms. Wilma Merina D'sa's mentorship helped me take the right steps in the corporate world during a critical transition phase. Her guidance has been instrumental in my journey to becoming the youngest Senior Executive in my organization. She focuses not just on technical readiness but on the emotional intelligence and leadership qualities that truly set a candidate apart. Her ability to spot potential and nurture it through tailored feedback is exceptional.",
      img: "/testimonials/testimonial3.jpeg",
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[#7C3AED] text-sm font-bold tracking-widest uppercase mb-4">Testimonials</div>
          <h2 className="text-[#0D0D0D] text-4xl md:text-5xl font-bold tracking-tight">
            What People Are Saying
          </h2>
        </motion.div>
      </div>

      <div className="relative flex w-full pb-10 overflow-hidden hide-scrollbar">
        {/* Gradients on edges to blend marquee */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 px-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40
          }}
        >
          {/* We duplicate the array to guarantee a seamless infinite scrolling loop without a visual breaking point */}
          {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((test, idx) => (
            <TestimonialCard key={idx} test={test} onReadMore={setSelectedTestimonial} />
          ))}
        </motion.div>
      </div>

      {/* Modal Popup for Reading Testimonial */}
      <AnimatePresence>
        {selectedTestimonial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-[#0D0D0D]/40 backdrop-blur-sm"
            onClick={() => setSelectedTestimonial(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[32px] p-8 md:p-12 max-w-2xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto hide-scrollbar"
            >
              <button 
                onClick={() => setSelectedTestimonial(null)}
                className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full text-slate-500 hover:text-[#0D0D0D] hover:bg-slate-200 transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-full overflow-hidden border border-[rgba(0,0,0,0.07)]">
                  <img src={selectedTestimonial.img} alt={selectedTestimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-[#0D0D0D] text-xl font-bold">{selectedTestimonial.name}</h4>
                  <p className="text-[#7C3AED] text-sm md:text-base font-medium">{selectedTestimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              
              <p className="text-[#52525B] text-lg md:text-xl italic leading-relaxed">
                &quot;<HighlightText text={selectedTestimonial.quote} />&quot;
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}