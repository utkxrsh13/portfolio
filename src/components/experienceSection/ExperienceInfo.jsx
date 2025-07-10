import { motion } from "framer-motion";

const ExperienceInfo = ({ number, text }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="flex flex-col justify-center items-center group cursor-pointer"
    >
      <motion.p 
        className="font-bold text-5xl bg-gradient-to-r from-green to-cyan bg-clip-text text-transparent group-hover:from-cyan group-hover:to-green transition-all duration-500"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 2 }}
      >
        {number}
      </motion.p>
      <p className="font-semibold text-lg text-gray-300 uppercase tracking-wider -mt-2 group-hover:text-white transition-colors duration-300">
        {text}
      </p>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-green/5 to-cyan/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 scale-150"></div>
    </motion.div>
  );
};

export default ExperienceInfo;
