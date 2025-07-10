import { motion } from "framer-motion";

const SingleInfo = ({ text, Image }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02, x: 5 }}
      className="flex gap-4 items-center justify-start p-3 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-green/30 transition-all duration-300 group cursor-pointer"
    >
      <div className="flex items-center justify-center w-10 h-10 bg-green/10 rounded-lg group-hover:bg-green/20 transition-colors duration-300">
        <Image className="text-xl text-green group-hover:scale-110 transition-transform duration-300" />
      </div>
      <p className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
        {text}
      </p>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-green/5 to-cyan/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  );
};

export default SingleInfo;
