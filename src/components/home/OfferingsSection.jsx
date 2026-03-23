"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const offerings = [
    {
        title: "Career Readiness Programming",
        items: ["Campus to Corporate", "Resume Building", "Mock Interviews"],
        img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=900"
    },
    {
        title: "Advanced Skill Enhancement",
        items: ["Emotional IQ", "Time tracking", "Work Ethics"],
        img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=900"
    },
    {
        title: "Academic to Industry Transition",
        items: ["Guest Lectures", "Project Mentoring", "Industry Alignment"],
        img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=900"
    },
    {
        title: "1:1 Mentorship & Deep Growth",
        items: ["Group Mentoring", "Personal Branding", "Decision Matrix"],
        img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=900"
    },
    {
        title: "Corporate Leadership Training",
        items: ["Execution Strategy", "Performance Metrics", "Active Listening"],
        img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=900"
    }
];

const COUNT = offerings.length;
const TRACK = [...offerings, ...offerings, ...offerings];

export default function OfferingsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(COUNT + 1);
    const isResetting = useRef(false);

    const getStride = useCallback(() => {
        const w = window.innerWidth;
        if (w >= 1024) return 608;
        if (w >= 768) return 506;
        return 304;
    }, []);

    const scrollToIndex = useCallback((idx) => {
        if (!scrollRef.current) return;
        const stride = getStride();
        scrollRef.current.scrollTo({ left: idx * stride, behavior: "instant" });
    }, [getStride]);

    useEffect(() => {
        scrollToIndex(COUNT + 1);
    }, [scrollToIndex]);

    const handleScroll = useCallback(() => {
        if (!scrollRef.current || isResetting.current) return;
        const el = scrollRef.current;
        const parentRect = el.getBoundingClientRect();
        const parentCenter = parentRect.left + parentRect.width / 2;

        let closestIndex = 0;
        let minDistance = Infinity;

        Array.from(el.children).forEach((child, idx) => {
            const rect = child.getBoundingClientRect();
            const childCenter = rect.left + rect.width / 2;
            const dist = Math.abs(parentCenter - childCenter);
            if (dist < minDistance) {
                minDistance = dist;
                closestIndex = idx;
            }
        });

        if (closestIndex !== activeIndex) {
            setActiveIndex(closestIndex);
        }

        if (closestIndex >= COUNT * 2) {
            isResetting.current = true;
            const mappedIdx = closestIndex - COUNT;
            requestAnimationFrame(() => {
                scrollToIndex(mappedIdx);
                setActiveIndex(mappedIdx);
                isResetting.current = false;
            });
        } else if (closestIndex < COUNT) {
            isResetting.current = true;
            const mappedIdx = closestIndex + COUNT;
            requestAnimationFrame(() => {
                scrollToIndex(mappedIdx);
                setActiveIndex(mappedIdx);
                isResetting.current = false;
            });
        }
    }, [activeIndex, scrollToIndex]);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        let isHovered = false;
        const t = setInterval(() => {
            if (isHovered || isResetting.current) return;
            const stride = getStride();
            el.scrollBy({ left: stride, behavior: "smooth" });
        }, 3500);

        const handleEnter = () => { isHovered = true; };
        const handleLeave = () => { isHovered = false; };

        el.addEventListener("mouseenter", handleEnter);
        el.addEventListener("mouseleave", handleLeave);
        el.addEventListener("touchstart", handleEnter, { passive: true });
        el.addEventListener("touchend", handleLeave);

        return () => {
            clearInterval(t);
            el.removeEventListener("mouseenter", handleEnter);
            el.removeEventListener("mouseleave", handleLeave);
            el.removeEventListener("touchstart", handleEnter);
            el.removeEventListener("touchend", handleLeave);
        };
    }, [getStride]);

    const slideNext = () => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollBy({ left: getStride(), behavior: "smooth" });
    };

    const slidePrev = () => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollBy({ left: -getStride(), behavior: "smooth" });
    };

    const realIndex = ((activeIndex % COUNT) + COUNT) % COUNT;

    return (
        <section ref={ref} className="py-24 bg-[#F9F8F3] relative overflow-hidden">
            <style dangerouslySetInnerHTML={{
                __html: `
                    @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
                    .font-instrument-serif { font-family: 'Instrument Serif', serif; }
                    .no-scrollbar::-webkit-scrollbar { display: none; }
                    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                `}} />

            {/* Decorative SVG */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.1 } : {}}
                transition={{ duration: 1 }}
                className="absolute top-16 right-16 pointer-events-none hidden lg:block"
            >
                <svg width="100" height="100" viewBox="0 0 60 60" fill="none">
                    <path d="M18 35 L26 8" stroke="#2B124C" strokeWidth="4" strokeLinecap="round" />
                    <path d="M25 40 L48 20" stroke="#A87ED7" strokeWidth="4" strokeLinecap="round" />
                    <path d="M28 46 L55 52" stroke="#2B124C" strokeWidth="4" strokeLinecap="round" />
                </svg>
            </motion.div>

            {/* Background divider lines with brand colors */}
            <div className="absolute top-0 bottom-0 left-[25%] lg:left-[20%] w-px bg-[#2B124C]/5 pointer-events-none hidden md:block" />
            <div className="absolute top-0 bottom-0 right-[25%] lg:right-[20%] w-px bg-[#2B124C]/5 pointer-events-none hidden md:block" />

            {/* Header */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 w-full mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#2B124C]/5 border border-[#2B124C]/10 text-[#2B124C] text-[11px] font-bold tracking-[0.3em] uppercase mb-6">
                        <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M10 2L11 8L17 9L11 10L10 16L9 10L3 9L9 8L10 2Z" fill="#A87ED7" /></svg>
                        WHAT WE OFFER
                    </div>
                    <h2 className="font-instrument-serif text-[#2B124C] tracking-wide text-3xl md:text-5xl">
                        Our <span className="bg-gradient-to-r from-[#A87ED7] to-[#2B124C] bg-clip-text text-transparent">Offerings</span>
                    </h2>
                </motion.div>
            </div>

            {/* Horizontal photo track */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full relative z-20"
            >
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex gap-4 md:gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory pb-10 px-[calc(50vw-150px)] sm:px-[calc(50vw-180px)] md:px-[calc(50vw-250px)] lg:px-[calc(50vw-300px)] no-scrollbar"
                >
                    {TRACK.map((item, idx) => {
                        return (
                            <div
                                key={idx}
                                className="group shrink-0 snap-center w-[300px] sm:w-[360px] md:w-[500px] lg:w-[600px] transition-opacity duration-300"
                            >
                                <div className="relative w-full aspect-[3/2] lg:aspect-[16/9] rounded-[20px] overflow-hidden cursor-pointer"
                                    style={{
                                        border: '1.5px solid rgba(255,255,255,0.8)',
                                        boxShadow: '0 4px 24px rgba(43, 18, 76, 0.08)',
                                    }}
                                >
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        draggable="false"
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-transparent pointer-events-none" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </motion.div>

            {/* Bottom Panel */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-30 mt-2">
                <div className="grid grid-cols-1 md:grid-cols-[20%_60%_20%] items-center gap-6 md:gap-0">
                    {/* Left Arrow */}
                    <div className="hidden md:flex justify-end pr-8">
                        <button onClick={slidePrev} className="w-12 h-12 rounded-full flex items-center justify-center text-[#2B124C] hover:scale-110 transition-all duration-300"
                            style={{
                                background: 'rgba(255,255,255,0.6)',
                                backdropFilter: 'blur(12px)',
                                border: '1.5px solid rgba(43,18,76,0.1)',
                            }}
                        >
                            <ChevronLeft size={20} strokeWidth={2} />
                        </button>
                    </div>

                    {/* Center Text */}
                    <div className="flex flex-col items-center justify-center text-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={realIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="w-full flex flex-col items-center"
                            >
                                <h3 className="font-instrument-serif text-2xl md:text-[32px] text-[#2B124C] tracking-wide leading-snug mb-4 md:mb-5">
                                    {offerings[realIndex].title}
                                </h3>
                                <div className="flex flex-wrap items-center justify-center gap-4 mb-2">
                                    {offerings[realIndex].items.map((line, i) => (
                                        <React.Fragment key={i}>
                                            <span className="text-[11px] md:text-[13px] font-bold tracking-widest uppercase text-gray-500">
                                                {line}
                                            </span>
                                            {i !== offerings[realIndex].items.length - 1 && (
                                                <span className="w-1.5 h-1.5 bg-[#A87ED7] rounded-full shrink-0 block" />
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Arrow */}
                    <div className="hidden md:flex justify-start pl-8">
                        <button onClick={slideNext} className="w-12 h-12 rounded-full flex items-center justify-center text-[#2B124C] hover:scale-110 transition-all duration-300"
                            style={{
                                background: 'rgba(255,255,255,0.6)',
                                backdropFilter: 'blur(12px)',
                                border: '1.5px solid rgba(43,18,76,0.1)',
                            }}
                        >
                            <ChevronRight size={20} strokeWidth={2} />
                        </button>
                    </div>

                    {/* Mobile controls */}
                    <div className="flex md:hidden justify-center items-center gap-4 mt-8">
                        <button onClick={slidePrev} className="w-11 h-11 rounded-full flex items-center justify-center text-[#2B124C]"
                            style={{ background: 'rgba(43,18,76,0.05)', border: '1px solid rgba(43,18,76,0.1)' }}
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button onClick={slideNext} className="w-11 h-11 rounded-full flex items-center justify-center text-[#2B124C]"
                            style={{ background: 'rgba(43,18,76,0.05)', border: '1px solid rgba(43,18,76,0.1)' }}
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
