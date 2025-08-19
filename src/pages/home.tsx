import { useState, useEffect } from "react";
import LoadingScreen from "@/components/loading-screen";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import PortfolioSection from "@/components/portfolio-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      {!isLoading && (
        <>
          <Navigation />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <PortfolioSection />
          <ContactSection />
          <Footer />
        </>
      )}
    </>
  );
}
