import ExperienceInfo from "./ExperienceInfo";
import { motion } from "framer-motion";
import { FaCalendar, FaRocket, FaCode } from "react-icons/fa";

const ExperienceTopLeft = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col gap-8 lg:w-[350px] sm:w-full p-6 bg-gradient-to-br from-gray-900/50 to-black/30 backdrop-blur-sm rounded-2xl border border-green/20 hover:border-green/40 transition-all duration-500"
    >
      {/* Header with icon */}
      <div className="text-center relative">
        <div className="flex items-center justify-center gap-3 mb-4">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-green text-2xl"
          >
            <FaCalendar />
          </motion.div>
          <h3 className="text-green font-bold uppercase text-2xl font-special tracking-wider">
            Since 2022
          </h3>
        </div>
        
        {/* Decorative line */}
        <div className="w-16 h-1 bg-gradient-to-r from-green to-cyan mx-auto rounded-full mb-6"></div>
      </div>

      {/* Stats section with enhanced design */}
      <div className="bg-black/20 rounded-xl p-6 border border-green/10">
        <div className="flex justify-center items-center gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <ExperienceInfo number="3+" text="Years" />
          </motion.div>
          
          <div className="flex flex-col items-center">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl text-cyan mb-2"
            >
              <FaRocket />
            </motion.div>
            <div className="w-8 h-1 bg-gradient-to-r from-cyan to-green rounded-full"></div>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <ExperienceInfo number="15+" text="Projects" />
          </motion.div>
        </div>
      </div>

      {/* Description with tech focus */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-3">
          <FaCode className="text-cyan" />
          <span className="text-sm text-gray-400 uppercase tracking-wider">Experience Overview</span>
        </div>
        
        <p className="text-gray-300 leading-relaxed text-sm">
          With <span className="text-green font-semibold">3+ years</span> of hands-on experience 
          in modern web development, I&apos;ve successfully delivered 
          <span className="text-cyan font-semibold"> 15+ projects</span> ranging from 
          dynamic single-page applications to complex e-commerce platforms.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {['React', 'JavaScript', 'Framer', 'GitHub', 'Node.js'].map((tech, index) => (
            <span 
              key={index}
              className="bg-green/10 text-green px-3 py-1 rounded-full text-xs border border-green/20 hover:border-green/40 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-green to-transparent rounded-full opacity-50"></div>
      </div>
    </motion.div>
  );
};

export default ExperienceTopLeft;
