import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProjectsSection from "@/sections/ProjectsSection";
import TechStackSection from "@/sections/TechStackSection";
import ExperienceSection from "@/sections/ExperienceSection";
import CertificatesSection from "@/sections/CertificatesSection";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificatesSection />
      </main>
      {/* Footer contains Contact form + minimal bottom bar */}
      <Footer />
    </>
  );
}
