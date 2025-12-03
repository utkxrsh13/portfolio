import { motion } from "framer-motion";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import CustomCursor from "./components/ui/CustomCursor";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import FooterMain from "./components/footer/FooterMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import SubHeroMain from "./components/subHeroSection/SubHeroMain";
import ScrollProgress from "./components/ui/ScrollProgress";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <CustomCursor />
      <motion.main
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="font-body text-white relative overflow-hidden"
      >
            {/* Scroll progress indicator */}
            <ScrollProgress />
            
            {/* Enhanced background with tech patterns */}
            <div className="fixed inset-0 pointer-events-none">
              {/* Subtle grid overlay */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '100px 100px'
                }}
              ></div>

              {/* Floating tech icons background */}
              <div className="absolute inset-0 overflow-hidden">
                {['</>', '{}', '[]', '()', '<>', '&&', '||', '=>'].map((symbol, i) => (
                  <div
                    key={i}
                    className="absolute text-green/10 text-2xl font-mono animate-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${4 + Math.random() * 2}s`
                    }}
                  >
                    {symbol}
                  </div>
                ))}
              </div>
            </div>

            {/* Main content */}
            <div className="relative z-10">
              <NavbarMain />
              <HeroMain />
              <HeroGradient />
              <SubHeroMain />
              <AboutMeMain />
              <SkillsMain />
              <SubSkills />
              <ExperienceMain />
              <ProjectsMain />
              <ContactMeMain />
            <FooterMain />
          </div>
          <Analytics />
        </motion.main>
    </>
  );
}export default App;
