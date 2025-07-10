import { motion } from 'framer-motion';
import { FaRocket, FaCode, FaBrain } from 'react-icons/fa';
import { BiLoaderAlt } from 'react-icons/bi';
import TechCard from '../ui/TechCard';

const ComingSoonProject = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="relative mt-32"
    >
      <TechCard className="p-8 text-center max-w-2xl mx-auto" hover={true} glow={true}>
        {/* Animated loader icon */}
        <div className="flex justify-center mb-6">
          <BiLoaderAlt className="text-6xl text-green animate-spin" />
        </div>

        {/* Coming soon text */}
        <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green to-cyan">
          More Projects Coming Soon
        </h3>

        <p className="text-white/70 mb-8 leading-relaxed">
          Currently working on exciting new projects involving cutting-edge technologies. 
          Stay tuned for updates on my latest innovations!
        </p>

        {/* Tech icons */}
        <div className="flex justify-center gap-8 mb-6">
          <div className="flex flex-col items-center gap-2 group">
            <FaCode className="text-2xl text-green/60 group-hover:text-green transition-colors duration-300" />
            <span className="text-xs text-white/50 font-mono">Next.js</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <FaBrain className="text-2xl text-cyan/60 group-hover:text-cyan transition-colors duration-300" />
            <span className="text-xs text-white/50 font-mono">AI/ML</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <FaRocket className="text-2xl text-yellow/60 group-hover:text-yellow transition-colors duration-300" />
            <span className="text-xs text-white/50 font-mono">Web3</span>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-green/20 animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>

        {/* Background decoration */}
        <div className="absolute -top-4 -left-4 text-green/20 font-mono text-xs">
          &lt;innovation/&gt;
        </div>
        <div className="absolute -bottom-4 -right-4 text-cyan/20 font-mono text-xs">
          .inProgress
        </div>
      </TechCard>
    </motion.div>
  );
};

export default ComingSoonProject;
