const fs = require('fs');

const inFile = 'src/app/page.js';
const code = fs.readFileSync(inFile, 'utf8');

function extractBlock(startMarker, endMarker) {
  const s = code.indexOf(startMarker);
  const e = endMarker ? code.indexOf(endMarker, s) : code.indexOf('</>', s);
  if (s === -1 || e === -1) return '';
  let block = code.substring(s, e);

  // Trim strictly to outermost JSX tag boundaries
  let firstTag = block.indexOf('<');
  let lastTag = block.lastIndexOf('>');
  if (firstTag !== -1 && lastTag !== -1 && lastTag > firstTag) {
    block = block.substring(firstTag, lastTag + 1);
  }
  return block;
}

const CONST_HERO = code.substring(code.indexOf('/* ── Hero Images ── */'), code.indexOf('/* ── Partners ── */'));
const CONST_PARTNERS = code.substring(code.indexOf('/* ── Partners ── */'), code.indexOf('/* ── Testimonials ── */'));
const CONST_TEST = code.substring(code.indexOf('/* ── Testimonials ── */'), code.indexOf('export default function HomePage'));

const JSX_HERO = extractBlock('/* ══ HERO ══ */', '/* ══ PARTNERS ══ */');
const JSX_PARTNERS = extractBlock('/* ══ PARTNERS ══ */', '/* ══ MISSION & VISION ══ */');
const JSX_MISSION = extractBlock('/* ══ MISSION & VISION ══ */', '/* ══ STATS ══ */');
const JSX_STATS = extractBlock('/* ══ STATS ══ */', '/* ══ FEATURES ══ */');
const JSX_FEATURES = extractBlock('/* ══ FEATURES ══ */', '/* ══ CASE STUDIES ══ */');
const JSX_CASE = extractBlock('/* ══ CASE STUDIES ══ */', '/* ══ HOW IT WORKS ══ */');
const JSX_HOW = extractBlock('/* ══ HOW IT WORKS ══ */', '/* ══ TESTIMONIALS ══ */');
const JSX_TEST = extractBlock('/* ══ TESTIMONIALS ══ */', '/* ══ CTA ══ */');
const JSX_CTA = extractBlock('/* ══ CTA ══ */', '</>');

// Fix right side clipping to prevent sliding into text
let fixedHeroJSX = JSX_HERO.replace(
  '<div style={{ flex: "1 1 500px", maxWidth: "100%", position: "relative" }}>',
  '<div style={{ flex: "1 1 500px", maxWidth: "100%", position: "relative", overflow: "hidden" }}>'
);

const compDir = 'src/components/home';

fs.writeFileSync(`${compDir}/HeroSection.jsx`, `"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

${CONST_HERO}

export default function HeroSection() {
  return (
    <>
      ${fixedHeroJSX}
    </>
  );
}`);

fs.writeFileSync(`${compDir}/PartnersSection.jsx`, `"use client";
import React from 'react';

${CONST_PARTNERS}

export default function PartnersSection() {
  return (
    <>
      ${JSX_PARTNERS}
    </>
  );
}`);

fs.writeFileSync(`${compDir}/MissionVisionSection.jsx`, `"use client";
import { FadeUp } from "@/components/Animations";

export default function MissionVisionSection() {
  return (
    <>
      ${JSX_MISSION}
    </>
  );
}`);

fs.writeFileSync(`${compDir}/StatsSection.jsx`, `"use client";
import { Monitor, Users, Star, Target } from "lucide-react";
import { FadeUp, AnimNum } from "@/components/Animations";

export default function StatsSection() {
  return (
    <>
      ${JSX_STATS}
    </>
  );
}`);

fs.writeFileSync(`${compDir}/FeaturesSection.jsx`, `"use client";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/Animations";

export default function FeaturesSection() {
  return (
    <>
      ${JSX_FEATURES}
    </>
  );
}`);

fs.writeFileSync(`${compDir}/CaseStudiesSection.jsx`, `"use client";
import { FadeUp } from "@/components/Animations";

export default function CaseStudiesSection() {
  return (
    <>
      ${JSX_CASE}
    </>
  );
}`);

fs.writeFileSync(`${compDir}/HowItWorksSection.jsx`, `"use client";
import { FadeUp } from "@/components/Animations";

export default function HowItWorksSection() {
  return (
    <>
      ${JSX_HOW}
    </>
  );
}`);

fs.writeFileSync(`${compDir}/TestimonialsSection.jsx`, `"use client";
import { useState, useEffect } from "react";
import { FadeUp } from "@/components/Animations";

${CONST_TEST}

export default function TestimonialsSection() {
  const [activeT, setActiveT] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveT((p) => (p + 1) % TESTIMONIALS.length), 4200);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      ${JSX_TEST}
    </>
  );
}`);

fs.writeFileSync(`${compDir}/CTASection.jsx`, `"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/Animations";

export default function CTASection() {
  return (
    <>
      ${JSX_CTA}
    </>
  );
}`);

console.log("Extraction successful and purely formatted!");
