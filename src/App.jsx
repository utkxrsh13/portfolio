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
    <main className="font-body text-white relative overflow-hidden">
      <CustomCursor />
      {/* Scroll progress indicator */}
      <ScrollProgress />
      
      {/* Enhanced background with tech patterns */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Matrix-like rain effect */}
        {/* <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 100 }, (_, i) => {
            const characters = ['0', '1', 'ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク'];
            return (
              <div
                key={i}
                className="absolute text-green text-sm font-mono animate-matrix will-change-transform"
                style={{
                  left: `${(i * 7) % 100}%`,
                  top: '-20px',
                  animationDelay: `${(i * 0.1) % 5}s`,
                  animationDuration: `${5 + (i % 4)}s`,
                  zIndex: 1
                }}
              >
                {characters[i % characters.length]}
              </div>
            );
          })}
        </div> */}

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
    </main>
  );
}

export default App;
