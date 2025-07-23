import { Link } from "react-scroll";
import { FaCode, FaRocket, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import TypewriterEffect from "../ui/TypewriterEffect";

const AboutMeText = () => {
  const highlights = [
    "Frontend Developer",
    "MERN Stack Enthusiast",
    "Passionate Learner",
    "Problem Solver",
    "Tech Explorer",
    "Creative Coder",
  ];

  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center space-y-6 relative">
      {/* Section indicator */}
      <div className="flex items-center gap-4 mb-2">
        <span className="text-green font-mono text-sm">02.</span>
        <div className="w-16 h-[1px] bg-gradient-to-r from-green to-transparent"></div>
      </div>

      {/* Enhanced heading */}
      <motion.h2 
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="text-6xl md:text-7xl font-bold mb-8 relative"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-green to-cyan bg-[length:200%_auto] animate-gradient-shift">
          About Me
        </span>
        
        {/* Glitch effect overlay */}
        <div className="absolute inset-0 text-green/20 blur-sm animate-pulse">
          About Me
        </div>
      </motion.h2>

      {/* Dynamic typewriter subtitle */}
      <motion.div
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="flex items-center gap-2 mb-6"
      >
        <span className="text-green font-mono text-sm">$</span>
        <TypewriterEffect 
          texts={highlights}
          speed={40}
          deleteSpeed={20}
          delayBetween={1000}
          cursorColor="green"
          className="text-green/80 font-mono"
        />
      </motion.div>

      {/* Enhanced description */}
      <motion.div
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="space-y-4 text-white/80 leading-relaxed"
      >
        <p className="text-lg">
          I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-cyan font-semibold">
            Utkarsh
          </span>
          , a passionate{" "}
          <span className="text-green font-semibold px-2 py-1 bg-green/10 rounded border border-green/20">
            Frontend Developer
          </span>{" "}
          with a strong focus on building interactive and responsive user interfaces using{" "}
          <span className="text-cyan font-semibold">React.js</span>. 
          I love crafting smooth, accessible, and pixel-perfect experiences on the web.
        </p>

        <p className="text-lg">
          I&apos;m diving deeper into{" "}
          <span className="text-yellow font-semibold px-2 py-1 bg-yellow/10 rounded border border-yellow/20">
            backend development
          </span>
          , learning the full{" "}
          <span className="text-orange font-semibold">MERN stack</span>{" "}
          to become a well-rounded full-stack developer. I&apos;m constantly exploring technologies like{" "}
          <span className="text-green font-mono text-sm">Node.js</span>,{" "}
          <span className="text-cyan font-mono text-sm">Express</span>, and{" "}
          <span className="text-green font-mono text-sm">MongoDB</span>{" "}
          to complement my frontend skills.
        </p>

        <p className="text-lg">
          I&apos;m always excited about{" "}
          <span className="text-cyan font-semibold">learning</span>,{" "}
          <span className="text-green font-semibold">collaborating</span>, and{" "}
          <span className="text-yellow font-semibold">building impactful web experiences</span>. 
          Let&apos;s create something awesome together!
        </p>
      </motion.div>

      {/* Key skills indicators */}
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-wrap gap-4 mt-8"
      >
        <div className="flex items-center gap-2 px-3 py-2 bg-green/10 border border-green/20 rounded-lg hover:bg-green/20 transition-colors duration-300">
          <FaCode className="text-green text-sm" />
          <span className="text-green font-mono text-sm">Clean Code</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 bg-cyan/10 border border-cyan/20 rounded-lg hover:bg-cyan/20 transition-colors duration-300">
          <FaRocket className="text-cyan text-sm" />
          <span className="text-cyan font-mono text-sm">Performance</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 bg-yellow/10 border border-yellow/20 rounded-lg hover:bg-yellow/20 transition-colors duration-300">
          <FaLightbulb className="text-yellow text-sm" />
          <span className="text-yellow font-mono text-sm">Innovation</span>
        </div>
      </motion.div>

      {/* Enhanced CTA button */}
      <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="mt-10"
      >
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="group relative inline-flex items-center gap-3 px-6 py-3 border-2 border-green/50 rounded-xl font-mono text-sm uppercase tracking-wider text-green hover:bg-green/10 hover:border-green hover:shadow-neon transition-all duration-300 hover:scale-105 md:self-start sm:self-center cursor-pointer"
        >
          <FaRocket className="group-hover:translate-x-1 transition-transform duration-300" />
          <span>View My Projects</span>
          <div className="absolute inset-0 bg-gradient-to-r from-green/20 to-cyan/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </Link>
      </motion.div>

      {/* Code decoration */}
      <div className="absolute -bottom-4 -left-4 text-green/20 font-mono text-xs opacity-50">
        &lt;/about&gt;
      </div>
    </div>
  );
};

export default AboutMeText;
