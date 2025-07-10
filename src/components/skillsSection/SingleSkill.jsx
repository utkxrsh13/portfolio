import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";

const SingleSkill = ({ imgSvg, text }) => {
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
      <div className="relative bg-gray-900/70 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-green/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-green/20">
        {/* Tech icon container */}
        <div className="relative mb-4">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white h-[80px] w-[80px] flex items-center justify-center rounded-xl border border-gray-600/50 group-hover:border-green/50 transition-all duration-500 text-4xl mx-auto relative overflow-hidden">
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
              animate={isHovered ? { y: [0, 80, 0] } : { y: 0 }}
              transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
            />
          </div>
          
          {/* Floating particles */}
          <div className="absolute -top-2 -right-2 w-2 h-2 bg-green/50 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
          <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-cyan/50 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Skill name */}
        <div className="text-center">
          <h3 className="text-white font-bold text-sm mb-2 group-hover:text-green transition-colors duration-300">
            {text}
          </h3>
          
          {/* Progress indicator */}
          <div className="w-full bg-gray-700/50 rounded-full h-1 mb-2">
            <motion.div
              className="bg-gradient-to-r from-green to-cyan h-1 rounded-full"
              initial={{ width: 0 }}
              animate={isHovered ? { width: "85%" } : { width: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </div>
          
          {/* Proficiency level */}
          <span className="text-xs text-gray-400 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Expert
          </span>
        </div>

        {/* Code decoration */}
        <div className="absolute top-2 right-2 text-green/20 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          &lt;/&gt;
        </div>
        
        {/* Bottom tech line */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Connecting line (vertical) */}
      <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 w-0.5 h-[150px] bg-gradient-to-b from-green/50 via-green/20 to-transparent opacity-30 group-hover:opacity-70 transition-opacity duration-500 -z-10"></div>
    </motion.div>
  );
};

SingleSkill.propTypes = {
  imgSvg: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
};

export default SingleSkill;
