"use client";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import MissionVisionSection from "@/components/home/MissionVisionSection";
import WhyElevareSection from "@/components/home/WhyElevareSection";
import OfferingsSection from "@/components/home/OfferingsSection";
import ProgramAddOnsSection from "@/components/home/ProgramAddOnsSection";
import CollaborationsSection from "@/components/home/CollaborationsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CollaborationsSection />
      <MissionVisionSection />
      <StatsSection />
      <WhyElevareSection />
      <OfferingsSection />
      <ProgramAddOnsSection />
      <TestimonialsSection />
    </>
  );
}
