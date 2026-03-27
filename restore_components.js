const fs = require('fs');

const compDir = 'src/components/home';

fs.writeFileSync(`${compDir}/PartnersSection.jsx`, `"use client";
import React from 'react';

const PARTNERS = [
  { alt: "MLA Academy", src: "/logo-1.jpg", h: "44px" },
  { alt: "Career Mantra", src: "/career-mantra.png", h: "36px" },
  { alt: "Incode", src: "/incode-logo.png", h: "24px" },
  { alt: "SRIIN5NET", src: "/sriin5net-logo.png", h: "28px" },
  { alt: "Elevare", src: "/elevera.png", h: "32px" },
];

export default function PartnersSection() {
  return (
    <>
      <div style={{ borderTop: "1px solid #e5e5e5", borderBottom: "1px solid #e5e5e5", background: "#fff", padding: "24px 0", overflow: "hidden", position: "relative", zIndex: 10 }}>
        <div style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}>
          <div className="animate-marquee" style={{ display: "flex", alignItems: "center", gap: "80px", width: "max-content", animationDuration: "32s" }}>
            {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((p, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src={p.src} alt={p.alt} style={{ height: p.h, width: "auto", objectFit: "contain" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}`);

fs.writeFileSync(`${compDir}/MissionVisionSection.jsx`, `"use client";
import React from 'react';
import { FadeUp } from "@/components/Animations";

export default function MissionVisionSection() {
  return (
    <>
      <section style={{ padding: "100px 0", background: "#fff" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 5%" }}>
          <div style={{ marginBottom: "56px", maxWidth: "800px" }}>
            <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(36px, 4.5vw, 48px)", fontWeight: 500, color: "#0a0a0a", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "20px" }}>
              Vision that Inspires.<br />Mission that Delivers.
            </h2>
            <p style={{ fontSize: "18px", color: "#525252", lineHeight: 1.5, fontWeight: 400, maxWidth: "640px" }}>
              At Elevare Connect, our foundation is built on purpose—empowering future professionals through mentorship, mindset, and practical mastery.
            </p>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", width: "500px", height: "500px", background: "radial-gradient(circle, #C084FC 0%, transparent 60%)", opacity: 0.15, borderRadius: "50%", top: "50%", left: "0%", transform: "translate(-30%, -50%)", filter: "blur(80px)", pointerEvents: "none" }} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
              {[
                { title: "Our Mission", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000", text: "To elevate potential through personalized coaching, interactive learning, and expert guidance." },
                { title: "Our Vision", img: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=1000", text: "To be a trusted catalyst in shaping the next generation of career-ready, emotionally intelligent, and socially responsible professionals." },
              ].map((item, i) => (
                <FadeUp key={i} delay={i * 100} className="card-hover">
                  <div style={{ padding: "8px", background: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.9)", backdropFilter: "blur(24px)", borderRadius: "28px", boxShadow: "0 12px 40px rgba(168,85,247,0.15)" }}>
                    <div style={{ position: "relative", width: "100%", aspectRatio: "16/10", borderRadius: "20px", overflow: "hidden" }}>
                      <img src={item.img} alt={item.title} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 40%, transparent 100%)" }} />
                      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "32px", color: "#fff" }}>
                        <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "26px", fontWeight: 800, marginBottom: "6px", textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}>{item.title}</h3>
                        <p style={{ fontSize: "16px", lineHeight: 1.6, opacity: 0.95, textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>{item.text}</p>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}`);

fs.writeFileSync(`${compDir}/StatsSection.jsx`, `"use client";
import React from 'react';
import { Monitor, Users, Star, Target } from "lucide-react";
import { FadeUp, AnimNum } from "@/components/Animations";

export default function StatsSection() {
  return (
    <>
      <section style={{ padding: "40px 0 100px 0", background: "#fafafa", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: "600px", height: "600px", background: "radial-gradient(circle, #C084FC 0%, transparent 60%)", opacity: 0.12, top: "50%", left: "-10%", transform: "translateY(-50%)", filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 5%", position: "relative", zIndex: 10 }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: <Monitor size={22} />, label: "Colleges Impacted", end: 50 },
              { icon: <Users size={22} />, label: "Students Trained", end: 20000 },
              { icon: <Star size={22} />, label: "Industry Experts", end: 20 },
              { icon: <Target size={22} />, label: "Programs Delivered", end: 100 },
            ].map((s, i) => (
              <FadeUp key={i} delay={i * 100} className="card-hover">
                <div style={{
                  background: "rgba(255,255,255,0.5)", borderTop: "1.5px solid rgba(255,255,255,0.95)", borderLeft: "1.5px solid rgba(255,255,255,0.95)",
                  borderRight: "1px solid rgba(255,255,255,0.4)", borderBottom: "1px solid rgba(255,255,255,0.4)",
                  backdropFilter: "blur(30px)", borderRadius: "28px", padding: "48px 24px", textAlign: "center", boxShadow: "0 20px 50px rgba(168,85,247,0.08)",
                }}>
                  <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px", color: "#9333EA", transform: "scale(1.5)" }}>{s.icon}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "42px", fontWeight: 800, color: "#0a0a0a", lineHeight: 1.1, marginBottom: "8px" }}>
                    <AnimNum end={s.end} />
                  </div>
                  <p style={{ fontSize: "15px", color: "#525252", fontWeight: 600 }}>{s.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}`);

fs.writeFileSync(`${compDir}/FeaturesSection.jsx`, `"use client";
import React from 'react';
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/Animations";

export default function FeaturesSection() {
  return (
    <>
      <section style={{ padding: "96px 0", background: "#fafafa" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 5%" }}>
          <FadeUp>
            <div style={{ display: "inline-block", padding: "5px 16px", borderRadius: "999px", border: "1px solid #C084FC", color: "#9333EA", background: "#fff", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "24px" }}>What We Offer</div>
            <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: "#0a0a0a", maxWidth: "560px", marginBottom: "64px", lineHeight: 1.1 }}>
              The platform that powers your professional journey.
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Card 1 - Wide */}
            <FadeUp className="card-hover lg:col-span-2" style={{ background: "#fff", borderRadius: "20px", border: "1px solid #e5e5e5", padding: "36px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", display: "flex", flexWrap: "wrap", gap: "40px" }}>
              <div style={{ flex: "1 1 280px" }}>
                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "22px", fontWeight: 700, marginBottom: "12px" }}>Career Readiness</h3>
                <p style={{ color: "#737373", lineHeight: 1.7, fontSize: "15px" }}>Campus-to-Corporate workshops, Resume & LinkedIn optimization, and Mock Interviews with actionable feedback.</p>
              </div>
              <div style={{ flex: "1 1 240px", background: "#fafafa", borderRadius: "14px", border: "1px solid #e5e5e5", padding: "20px" }}>
                <div style={{ fontSize: "11px", fontWeight: 600, color: "#a3a3a3", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "16px" }}>Progress Tracker</div>
                {[{ label: "Resume Review", done: true }, { label: "LinkedIn Updated", done: true }, { label: "Mock Interview", done: false }].map((item) => (
                  <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#fff", padding: "12px 14px", borderRadius: "10px", border: \`1px solid \${item.done ? "#e5e5e5" : "#A855F7"}\`, marginBottom: "8px", borderLeft: !item.done ? "3px solid #A855F7" : "1px solid #e5e5e5" }}>
                    <span style={{ fontSize: "13px", fontWeight: item.done ? 500 : 600, color: item.done ? "#404040" : "#0a0a0a" }}>{item.label}</span>
                    <div style={{ color: "#A855F7" }}>{item.done ? "✓" : "→"}</div>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Card 2 */}
            <FadeUp delay={100} className="card-hover" style={{ background: "#fff", borderRadius: "20px", border: "1px solid #e5e5e5", padding: "36px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", display: "flex", flexDirection: "column" }}>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "22px", fontWeight: 700, marginBottom: "12px" }}>Skill Enhancement</h3>
              <p style={{ color: "#737373", lineHeight: 1.7, fontSize: "15px", marginBottom: "24px", flex: 1 }}>Communication, Time Management, Workplace Etiquette, and Emotional Intelligence.</p>
              <div style={{ background: "#fafafa", borderRadius: "12px", border: "1px solid #e5e5e5", padding: "16px" }}>
                {[{ l: "Communication", v: 85, c: "#A855F7" }, { l: "Etiquette", v: 90, c: "#9333EA" }, { l: "Emotional IQ", v: 75, c: "#7E22CE" }].map((b) => (
                  <div key={b.l} style={{ marginBottom: "10px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "4px" }}>
                      <span style={{ fontWeight: 500, color: "#404040" }}>{b.l}</span>
                      <span style={{ fontWeight: 600, color: b.c }}>{b.v}%</span>
                    </div>
                    <div style={{ height: "4px", background: "#e5e5e5", borderRadius: "2px", overflow: "hidden" }}>
                      <div style={{ width: \`\${b.v}%\`, height: "100%", background: b.c, borderRadius: "2px" }} />
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Card 3 */}
            <FadeUp delay={150} className="card-hover" style={{ background: "#fff", borderRadius: "20px", border: "1px solid #e5e5e5", padding: "36px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "22px", fontWeight: 700, marginBottom: "12px" }}>Academic to Industry</h3>
              <p style={{ color: "#737373", lineHeight: 1.7, fontSize: "15px", marginBottom: "24px" }}>Industry guest lectures and Final-year project mentoring to align academic content with industry practices.</p>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ background: "#f5f5f5", color: "#737373", padding: "6px 14px", borderRadius: "8px", fontSize: "12px", fontWeight: 600, textDecoration: "line-through" }}>Theory</span>
                <ArrowRight size={16} />
                <span style={{ background: "rgba(168,85,247,0.1)", color: "#7E22CE", padding: "6px 14px", borderRadius: "8px", fontSize: "12px", fontWeight: 700, border: "1px solid rgba(168,85,247,0.2)" }}>Practice</span>
              </div>
            </FadeUp>

            {/* Card 4 */}
            <FadeUp delay={200} className="card-hover" style={{ background: "#fff", borderRadius: "20px", border: "1px solid #e5e5e5", padding: "36px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "22px", fontWeight: 700, marginBottom: "12px" }}>Mentorship</h3>
              <p style={{ color: "#737373", lineHeight: 1.7, fontSize: "15px", marginBottom: "24px" }}>1:1 and group mentorship, Goal-setting, Personal Branding, and Self-awareness frameworks.</p>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ display: "flex" }}>
                  {["#C084FC", "#9333EA", "#6B21A8"].map((c, i) => (
                    <div key={i} style={{ width: "30px", height: "30px", borderRadius: "50%", background: \`linear-gradient(135deg,\${c},\${c}cc)\`, border: "2px solid #fff", marginLeft: i === 0 ? 0 : "-8px" }} />
                  ))}
                  <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#f5f5f5", border: "2px solid #fff", marginLeft: "-8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", fontWeight: 700, color: "#404040" }}>+120</div>
                </div>
                <span style={{ fontSize: "12px", fontWeight: 500, color: "#737373" }}>Actively Mentored</span>
              </div>
            </FadeUp>

            {/* Card 5 - Full Width */}
            <FadeUp delay={250} className="card-hover lg:col-span-3" style={{ background: "#fff", borderRadius: "20px", border: "1px solid #e5e5e5", padding: "36px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center" }}>
              <div style={{ flex: "0 0 280px" }}>
                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "22px", fontWeight: 700, marginBottom: "12px" }}>Placement Programs</h3>
                <p style={{ color: "#737373", lineHeight: 1.7, fontSize: "15px" }}>Comprehensive suites for final-year students preparing for recruitment drives.</p>
              </div>
              <div style={{ flex: 1, display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {["Interview Prep", "Industry Talks", "JD Based Training", "Public Speaking", "Aptitude Building", "Resume Clinics", "Soft Skills Boot Camp", "Campus to Corporate"].map((t, i) => (
                  <span key={i} style={{ padding: "8px 18px", background: "#fafafa", border: "1px solid #e5e5e5", borderRadius: "999px", fontSize: "13px", fontWeight: 500, color: "#404040" }}>{t}</span>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}`);

fs.writeFileSync(`${compDir}/CaseStudiesSection.jsx`, `"use client";
import React from 'react';
import { FadeUp } from "@/components/Animations";

export default function CaseStudiesSection() {
  return (
    <>
      <section style={{ padding: "96px 0", background: "#fff" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 5%" }}>
          <FadeUp>
             <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(28px,4vw,52px)", fontWeight: 800, color: "#0a0a0a", maxWidth: "560px", marginBottom: "64px", lineHeight: 1.1 }}>
              The coaching engine that drives career breakthroughs.
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
            {[
              { name: "Saksham Mathur", role: "Sr. Executive TA, Wipro", quote: "Became the youngest Senior Executive in my organization.", from: "#C084FC", to: "#9333EA", tags: ["Career Coaching", "Leadership"] },
              { name: "Dhruv Roy", role: "Voyager Sales, Marriott", quote: "Built confidence, discipline, and a strong professional mindset.", from: "#9333EA", to: "#6B21A8", tags: ["Professional Mindset", "Soft Skills"] },
              { name: "Yashika Singh", role: "Financial Analyst, ABM Indore", quote: "Her practical approach helped me secure my first job.", from: "#7E22CE", to: "#4C1D95", tags: ["Mock Interviews", "Placement"] },
            ].map((c, i) => (
              <FadeUp key={i} delay={i * 100} className="card-hover" style={{ background: "#fff", borderRadius: "20px", border: "1px solid #e5e5e5", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                <div style={{ height: "120px", background: \`linear-gradient(135deg,\${c.from},\${c.to})\`, position: "relative", padding: "20px" }}>
                  <div style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)", color: "#fff", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", padding: "4px 10px", borderRadius: "999px" }}>Case Study</div>
                </div>
                <div style={{ padding: "24px" }}>
                  <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "17px", fontWeight: 700, color: "#0a0a0a" }}>{c.name}</h3>
                  <p style={{ color: "#A855F7", fontSize: "13px", fontWeight: 600, marginBottom: "14px" }}>{c.role}</p>
                  <p style={{ color: "#404040", fontSize: "14px", lineHeight: 1.6, fontStyle: "italic", marginBottom: "18px" }}>"{c.quote}"</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {c.tags.map((t) => <span key={t} style={{ background: "#fafafa", border: "1px solid #e5e5e5", color: "#737373", fontSize: "11px", fontWeight: 500, padding: "3px 10px", borderRadius: "6px" }}>{t}</span>)}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}`);

fs.writeFileSync(`${compDir}/HowItWorksSection.jsx`, `"use client";
import React from 'react';
import { FadeUp } from "@/components/Animations";

export default function HowItWorksSection() {
  return (
    <>
      <section style={{ padding: "96px 0", background: "#fafafa", borderTop: "1px solid #e5e5e5", borderBottom: "1px solid #e5e5e5" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 5%" }}>
          <FadeUp>
            <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: "#0a0a0a", marginBottom: "64px" }}>
              From ambition to achievement in four steps.
            </h2>
          </FadeUp>
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "32px" }}>
              {[
                { n: "01", title: "ASSESS", desc: "We understand your goals, strengths, and gaps to establish a clear baseline." },
                { n: "02", title: "DESIGN", desc: "We craft a personalized coaching and skill roadmap suited to your profile." },
                { n: "03", title: "DELIVER", desc: "Workshops, mock sessions, mentorship — hands-on rigorous execution every week." },
                { n: "04", title: "TRANSFORM", desc: "Ongoing refinement until you are placement-ready and fully confident." },
              ].map((s, i) => (
                <FadeUp key={i} delay={i * 80}>
                  <div style={{ paddingLeft: "24px", borderLeft: \`2px solid \${i === 2 ? "#9333EA" : "#e5e5e5"}\` }}>
                    <div style={{ fontSize: "20px", fontWeight: 800, color: "#C084FC", marginBottom: "4px" }}>{s.n}</div>
                    <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#0a0a0a", marginBottom: "6px" }}>{s.title}</h3>
                    <p style={{ color: "#737373", lineHeight: 1.7, fontSize: "15px" }}>{s.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
            <FadeUp delay={300} style={{ flex: 1 }}>
              <div style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "20px", padding: "36px", boxShadow: "0 8px 40px rgba(0,0,0,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "28px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#A855F7" }} />
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#0a0a0a" }}>Progress Tracker</h3>
                </div>
                {[{ label: "Communication Skills", val: 80 }, { label: "Interview Readiness", val: 70 }, { label: "Professional Presence", val: 65 }, { label: "Resume Quality", val: 82 }].map((b, i) => (
                  <div key={i} style={{ marginBottom: "24px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", fontWeight: 500, marginBottom: "8px" }}>
                      <span style={{ color: "#404040" }}>{b.label}</span>
                      <span style={{ color: "#9333EA", fontWeight: 700 }}>{b.val}%</span>
                    </div>
                    <div style={{ height: "6px", background: "#f5f5f5", borderRadius: "3px", overflow: "hidden" }}>
                      <div style={{ width: \`\${b.val}%\`, height: "100%", background: "linear-gradient(90deg,#C084FC,#7E22CE)", borderRadius: "3px" }} />
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}`);

fs.writeFileSync(`${compDir}/CTASection.jsx`, `"use client";
import React from 'react';
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/Animations";

export default function CTASection() {
  return (
    <>
      <section className="relative py-24 md:py-32 px-6 md:px-12 bg-white text-center overflow-hidden">
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "700px", height: "700px", background: "radial-gradient(ellipse at center, rgba(192,132,252,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />
        <FadeUp style={{ maxWidth: "640px", margin: "0 auto", position: "relative", zIndex: 10 }}>
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(32px,5vw,60px)", fontWeight: 800, color: "#0a0a0a", marginBottom: "20px", lineHeight: 1.05 }}>
            See what Elevare Connect can do for your growth.
          </h2>
          <p style={{ color: "#737373", fontSize: "18px", lineHeight: 1.7, marginBottom: "48px", maxWidth: "500px", margin: "0 auto 48px" }}>
            Book a personalized session. We'll show you how our mentorship system turns ambition into a rewarding career.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
            <Link href="/contact" className="btn-primary" style={{ padding: "16px 40px", fontSize: "16px", fontWeight: 700, boxShadow: "0 6px 28px rgba(168,85,247,0.3)" }}>
              Book a Session <ArrowRight size={16} />
            </Link>
            <Link href="/services" style={{ color: "#A855F7", fontWeight: 600, fontSize: "15px", textDecoration: "underline", textUnderlineOffset: "4px" }}>Explore our programs</Link>
          </div>
        </FadeUp>
      </section>
    </>
  );
}`);

console.log("Restoration Complete!");
