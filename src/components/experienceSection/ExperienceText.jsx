import { motion } from "framer-motion";
import { FaBriefcase, FaChartLine, FaTrophy } from "react-icons/fa";
import TypewriterEffect from "../ui/TypewriterEffect";

const ExperienceText = () => {
  return (
    <div className="flex flex-col items-center mt-[100px] relative">
      {/* Background tech decorations */}
      <div className="absolute -top-10 left-1/4 w-8 h-8 border border-cyan/20 rotate-45 animate-float"></div>
      <div className="absolute -top-5 right-1/4 w-6 h-6 bg-green/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Header with gradient and animations */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative"
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-cyan text-2xl"
          >
            <FaBriefcase />
          </motion.div>
          <h2 className="text-6xl font-bold bg-gradient-to-r from-cyan via-green to-cyan bg-clip-text text-transparent">
            Experience
          </h2>
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-green text-2xl"
          >
            <FaTrophy />
          </motion.div>
        </div>
        
        {/* Glowing line underneath */}
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan to-transparent mx-auto mb-8 rounded-full"></div>
      </motion.div>

      {/* Enhanced description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-4xl text-center relative"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <FaChartLine className="text-cyan text-xl" />
          <span className="text-cyan font-mono text-sm">{'// Professional Journey'}</span>
        </div>
        
        <TypewriterEffect
          text="Explore my professional journey and the exciting projects I've worked on throughout my career."
          delay={100}
          className="text-lg text-gray-300 leading-relaxed"
        />
        
        {/* Experience tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-2 mt-6"
        >
          {['Professional', 'Projects', 'Growth', 'Innovation'].map((tag, index) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-800/50 border border-cyan/20 rounded-full text-sm text-cyan font-mono"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating code symbols */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 text-cyan/20 font-mono text-xl"
        >
          &lt;exp&gt;
        </motion.div>
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-10 text-green/20 font-mono text-lg"
        >
          {'{ work }'}
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceText;
