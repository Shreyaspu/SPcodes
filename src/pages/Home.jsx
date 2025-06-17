import { ThemeToggle } from "../Components/ThemeToggle";
import { StarBackground } from "../Components/StarBackground";
import { Navbar } from "../Components/Navbar";
import { HeroSection } from "../Components/HeroSection";
import { AboutSection } from "../Components/AboutSection";
import { SkillsSection } from "../Components/SkillsSection";
import { ProjectSection } from "../Components/ProjectSection";
import { ContactSection } from "../Components/ContactSection";

import { Footer } from "../Components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
      {/* <ToastContainer
      toastClassName="bg-black text-primary rounded shadow-lg"
        bodyClassName="text-base font-semibold" /> */}
    </div>
  );
};
export default Home;
