import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaCode, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import TechCard from "../ui/TechCard";

const AboutMeImage = () => {
  const floatingIcons = [
    { Icon: FaReact, color: "text-cyan", delay: 0 },
    { Icon: FaNodeJs, color: "text-green", delay: 0.5 },
    { Icon: SiMongodb, color: "text-green", delay: 1 },
    { Icon: FaCode, color: "text-yellow", delay: 1.5 },
  ];

  return (
    <motion.div
      variants={fadeIn("left", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="relative group"
    >
      {/* Main image container with modern styling */}
      <div className="relative">
        <TechCard className="overflow-hidden p-0 w-[320px] h-[520px]" hover={true} glow={true}>
          <div className="relative w-full h-full">
            {/* Enhanced image with overlay effects */}
            <img
              src="/images/about-me.jpg"
              alt="Utkarsh Tiwari - About Me"
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 filter group-hover:brightness-110"
            />
            
            {/* Tech overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-green/20 via-transparent to-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Scanning lines effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-green to-transparent animate-scan-horizontal"></div>
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-cyan to-transparent animate-scan-horizontal-reverse"></div>
              <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-transparent via-green/70 to-transparent animate-scan-vertical"></div>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-green/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-cyan/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-cyan/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-green/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Status indicator */}
            <div className="absolute top-6 right-6 flex items-center gap-2 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-2 h-2 bg-green rounded-full animate-pulse"></div>
              <span className="text-green text-xs font-mono">CODING</span>
            </div>
          </div>
        </TechCard>

        {/* Modern background shape */}
        <div className="absolute -bottom-8 -left-8 w-[280px] h-[480px] bg-gradient-to-br from-green/20 via-cyan/10 to-transparent rounded-[2rem] -z-10 blur-sm group-hover:blur-none transition-all duration-500"></div>
        
        {/* Secondary background shape */}
        <div className="absolute -bottom-12 -left-12 w-[260px] h-[460px] bg-gradient-to-tr from-cyan/10 via-green/5 to-transparent rounded-[1.5rem] -z-20 animate-pulse"></div>
      </div>

      {/* Floating tech icons around the image */}
      <div className="absolute inset-0 -z-5">
        {floatingIcons.map(({ Icon, color, delay }, index) => {
          const positions = [
            { top: '20%', left: '-10%' },
            { top: '40%', right: '-10%' },
            { bottom: '30%', left: '-8%' },
            { bottom: '15%', right: '-8%' }
          ];
          
          return (
            <motion.div
              key={index}
              className={`absolute text-2xl ${color} opacity-60 hover:opacity-100 transition-opacity duration-300`}
              style={positions[index]}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                y: { duration: 3 + delay, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 4 + delay, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Icon />
            </motion.div>
          );
        })}
      </div>

      {/* Code snippets floating around */}
      <div className="absolute -top-8 -right-8 text-green/30 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        class Developer {'{'}
      </div>
      <div className="absolute -bottom-8 -left-8 text-cyan/30 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        passion: &apos;coding&apos;;
      </div>
      <div className="absolute top-1/2 -right-12 text-yellow/30 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 rotate-90">
        skills++
      </div>

      {/* Orbital elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-green/20 rounded-full animate-spin-slow opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-cyan/10 rounded-full animate-spin-slow opacity-20" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-yellow/10 rounded-full animate-spin-slow opacity-15" style={{ animationDuration: '30s' }}></div>
        
        {/* Orbital dots */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] animate-spin-slow">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-green/60 rounded-full"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan/60 rounded-full"></div>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-green/5 via-transparent to-cyan/5 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
};

export default AboutMeImage;
