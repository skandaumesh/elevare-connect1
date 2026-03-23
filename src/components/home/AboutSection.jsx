"use client";
import { useRef, useEffect, useState } from "react";

function Reveal({ children, delay = 0, style = {} }) {
    const ref = useRef(null);
    const [vis, setVis] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
            { threshold: 0.08 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    return (
        <div ref={ref} style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(20px)",
            transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
            ...style,
        }}>
            {children}
        </div>
    );
}

export default function AboutSection() {
    const [cardHov, setCardHov] = useState(false);

    return (
        <>
            <style>{`
        .abt * { box-sizing: border-box; margin: 0; padding: 0; }
        @media (max-width: 900px) {
          .abt-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

            <section className="abt" id="about" style={{
                background: "#FFFFFF",
                padding: "160px 0",
                fontFamily: "var(--font-sans), sans-serif",
            }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>

                    <div className="abt-grid" style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "80px",
                        alignItems: "start",
                    }}>

                        {/* ── Left: Text ── */}
                        <div>
                            <Reveal>
                                <p style={{
                                    fontSize: "11px", fontWeight: 700,
                                    color: "#111827", letterSpacing: "0.14em",
                                    textTransform: "uppercase", marginBottom: "28px",
                                    display: "flex", alignItems: "center", gap: "8px",
                                }}>
                                    <span style={{
                                        width: "24px", height: "1px",
                                        background: "#111827", display: "inline-block",
                                    }} />
                                    About Us
                                </p>
                            </Reveal>

                            <Reveal delay={80}>
                                <h2 style={{
                                    fontSize: "clamp(34px, 4vw, 50px)",
                                    fontWeight: 400,
                                    letterSpacing: "-0.03em",
                                    lineHeight: 1.12,
                                    color: "#0A0A12",
                                    marginBottom: "32px",
                                }}>
                                    Paving the Path to<br />
                                    <span style={{
                                        color: "#6B7280",
                                    }}>Professional Excellence</span>
                                </h2>
                            </Reveal>

                            <Reveal delay={160}>
                                <p style={{
                                    fontSize: "16px",
                                    color: "#52525B",
                                    lineHeight: 1.8,
                                    marginBottom: "36px",
                                    fontWeight: 400,
                                }}>
                                    Elevare Connect is a training and development initiative committed
                                    to shaping confident, capable, and career-ready individuals.
                                    Founded by Ms. Wilma Merina D'Sa, an astute professional
                                    with over two decades of experience in corporate and academia,
                                    the initiative focuses on developing soft skills, enhancing
                                    professional grooming, and providing campus-to-career mentoring
                                    tailored for students and young professionals.
                                </p>
                            </Reveal>

                            <Reveal delay={240}>
                                <div style={{
                                    borderLeft: "3px solid #F3F4F6",
                                    paddingLeft: "24px",
                                }}>
                                    <p style={{
                                        fontSize: "17px",
                                        fontStyle: "italic",
                                        color: "#1A1A2E",
                                        lineHeight: 1.6,
                                        fontWeight: 400,
                                    }}>
                                        "While degrees open doors, skills and self-confidence hold
                                        the key to success."
                                    </p>
                                </div>
                            </Reveal>
                        </div>

                        {/* ── Right: Founder quote card ── */}
                        <Reveal delay={200}>
                            <div
                                onMouseEnter={() => setCardHov(true)}
                                onMouseLeave={() => setCardHov(false)}
                                style={{
                                    background: "#FFFFFF",
                                    borderRadius: "40px",
                                    padding: "64px 56px",
                                    position: "relative",
                                    overflow: "hidden",
                                    transition: "all 0.4s ease",
                                    transform: cardHov ? "translateY(-4px)" : "translateY(0)",
                                    boxShadow: cardHov
                                        ? "0 20px 40px rgba(0,0,0,0.06)"
                                        : "0 4px 12px rgba(0,0,0,0.02)",
                                    border: "1px solid #F3F4F6",
                                }}
                            >
                                {/* Decorative circle */}
                                <div style={{
                                    position: "absolute", top: "-30px", right: "-30px",
                                    width: "120px", height: "120px", borderRadius: "50%",
                                    background: "#F9FAFB",
                                }} />

                                {/* Quote mark */}
                                <div style={{
                                    fontSize: "64px",
                                    lineHeight: 1,
                                    color: "#F3F4F6",
                                    fontFamily: "Georgia, serif",
                                    marginBottom: "20px",
                                    position: "relative", zIndex: 1,
                                }}>
                                    "
                                </div>

                                <p style={{
                                    fontSize: "17px",
                                    color: "#1A1A2E",
                                    lineHeight: 1.7,
                                    fontWeight: 400,
                                    marginBottom: "36px",
                                    position: "relative", zIndex: 1,
                                }}>
                                    Elevare Connect is my commitment to nurturing not just
                                    employability, but personal excellence. Through skill-building,
                                    mentoring, and empowerment, we help individuals become their best
                                    professional selves.
                                </p>

                                {/* Author */}
                                <div style={{
                                    display: "flex", alignItems: "center", gap: "14px",
                                    position: "relative", zIndex: 1,
                                }}>
                                    <div style={{
                                        width: "56px", height: "56px", borderRadius: "18px",
                                        background: "#111827",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        color: "#fff", fontSize: "17px", fontWeight: 700,
                                    }}>
                                        WD
                                    </div>
                                    <div>
                                        <p style={{ fontSize: "15px", fontWeight: 600, color: "#0A0A12" }}>
                                            Wilma Merina D'Sa
                                        </p>
                                        <p style={{ fontSize: "13px", color: "#6B7280", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                                            Founder, Elevare Connect
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                </div>
            </section>
        </>
    );
}
