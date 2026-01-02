import { HeroSection } from "@/components/home/HeroSection";
import { BlueprintToReality } from "@/components/home/BlueprintToReality";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { ConstructionProcess } from "@/components/home/ConstructionProcess";
import { StatsCounter } from "@/components/home/StatsCounter";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <HeroSection />
      <BlueprintToReality />
      <StatsCounter />
      <ServicesSection />
      <ConstructionProcess />
      <ProjectsSection />
      <WhyChooseSection />
      <CTASection />
    </>
  );
};

export default Index;
