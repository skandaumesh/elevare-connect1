import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import VisionMissionSection from "@/components/home/VisionMissionSection";
import StatsSection from "@/components/home/StatsSection";
import WhyElevareSection from "@/components/home/WhyElevareSection";
import OfferingsSection from "@/components/home/OfferingsSection";
import ProgramAddOnsSection from "@/components/home/ProgramAddOnsSection";
import CollaborationsSection from "@/components/home/CollaborationsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export const metadata = {
  title: "Elevare Connect | Where Ambition Finds its Direction",
  description: "Next-gen professional training and mentorship in Bengaluru. Transform students into career-ready professionals with Wilma Merina D'Sa.",
  openGraph: {
    title: "Elevare Connect | Empowering Professionals",
    description: "Bridging the gap between academic learning and real-world expectations.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <VisionMissionSection />
      <StatsSection />
      <WhyElevareSection />
      <OfferingsSection />
      <ProgramAddOnsSection />
      <CollaborationsSection />
      <TestimonialsSection />

    </>
  );
}
