import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";

const SingleSkill = ({ imgSvg, text, proficiency = "Expert", progress = 85 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="group relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -15, scale: 1.05 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Glowing background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-green/10 via-transparent to-cyan/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Main skill card */}
      <div className="relative bg-gray-900/70 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-green/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-green/20">
        {/* Tech icon container */}
        <div className="relative mb-3">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white h-[60px] w-[60px] flex items-center justify-center rounded-lg border border-gray-600/50 group-hover:border-green/50 transition-all duration-500 text-2xl mx-auto relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green/10 to-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Icon */}
            <motion.div
              animate={isHovered ? { scale: [1, 1.2, 1], rotate: [0, 10, 0] } : {}}
              transition={{ duration: 0.5 }}
              className="relative z-10 group-hover:text-green transition-colors duration-300"
            >
              {imgSvg}
            </motion.div>
            
            {/* Scanning line effect */}
            <motion.div
              className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green to-transparent"
              animate={isHovered ? { y: [0, 60, 0] } : { y: 0 }}
              transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
            />
          </div>
          
          {/* Floating particles */}
          <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-green/50 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
          <div className="absolute -bottom-1 -right-1 w-1 h-1 bg-cyan/50 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Skill name */}
        <div className="text-center">
          <h3 className="text-white font-bold text-xs mb-1 group-hover:text-green transition-colors duration-300">
            {text}
          </h3>
          
          {/* Progress indicator */}
          <div className="w-full bg-gray-700/50 rounded-full h-0.5 mb-1">
            <motion.div
              className="bg-gradient-to-r from-green to-cyan h-0.5 rounded-full"
              initial={{ width: 0 }}
              animate={isHovered ? { width: `${progress}%` } : { width: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </div>
          
          {/* Proficiency level */}
          <span className="text-xs text-gray-400 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {proficiency}
          </span>
        </div>

        {/* Code decoration */}
        <div className="absolute top-1 right-1 text-green/20 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          &lt;/&gt;
        </div>
        
        {/* Bottom tech line */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </motion.div>
  );
};

SingleSkill.propTypes = {
  imgSvg: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  proficiency: PropTypes.string,
  progress: PropTypes.number,
};

export default SingleSkill;
