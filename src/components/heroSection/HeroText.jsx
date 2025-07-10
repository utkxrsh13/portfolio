import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import TypewriterEffect from "../ui/TypewriterEffect";

const HeroText = () => {
  const typewriterTexts = [
    "Building amazing web experiences...",
    "Crafting modern user interfaces...",
    "Developing full-stack solutions...",
    "Creating AI-powered applications..."
  ];

  return (
    <div className="flex flex-col gap-6 h-full justify-center md:text-left sm:text-center relative">
      {/* Code-like prefix */}
      <motion.div
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-green/60 font-mono text-sm"
      >
        <span className="text-green">01.</span> console.log(&quot;Hello World&quot;);
      </motion.div>

      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-white/80 font-light tracking-wider"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-green font-semibold">Frontend</span>{" "}
        <span className="text-white/60">&amp;</span>{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-cyan font-semibold">Full-Stack</span>{" "}
        Developer
      </motion.h2>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[3.5rem] lg:text-7xl sm:text-5xl font-bold uppercase relative"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green via-cyan to-green bg-[length:200%_auto] animate-pulse">
          UTKARSH
        </span>
        <br className="sm:hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-green to-cyan bg-[length:200%_auto] animate-pulse">
          TIWARI
        </span>
        
        {/* Glitch effect overlay */}
        <div className="absolute inset-0 text-green/20 animate-pulse blur-sm">
          UTKARSH<br className="sm:hidden md:block" />TIWARI
        </div>
      </motion.h1>

      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="space-y-4"
      >
        <p className="text-lg text-white/80 leading-relaxed">
          Passionate and skilled{" "}
          <span className="text-yellow font-semibold px-2 py-1 bg-yellow/10 rounded border border-yellow/20">
            MERN stack
          </span>{" "}
          developer with experience in building{" "}
          <span className="text-cyan font-semibold">full-stack applications</span>{" "}
          and{" "}
          <span className="text-orange font-semibold px-2 py-1 bg-orange/10 rounded border border-orange/20">
            AI-powered
          </span>{" "}
          tools.
        </p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mt-6">
          {['React', 'Node.js', 'MongoDB', 'Express', 'Framer', 'GitHub'].map((tech, index) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-green/10 border border-green/20 rounded-lg text-green font-mono uppercase tracking-wider hover:bg-green/20 transition-colors duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Enhanced typing indicator with typewriter effect */}
      <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex items-center gap-2 text-green/80 font-mono text-sm mt-4"
      >
        <span className="text-green">$</span>
        <TypewriterEffect 
          texts={typewriterTexts}
          speed={80}
          deleteSpeed={40}
          delayBetween={2000}
          cursorColor="green"
          className="text-green/80"
        />
      </motion.div>
    </div>
  );
};

export default HeroText;
