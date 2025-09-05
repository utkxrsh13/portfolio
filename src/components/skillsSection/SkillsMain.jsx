import AllSkills from "./AllSkills";
import SkillsText from "./SkillsText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaCode, FaCogs, FaDatabase, FaServer } from "react-icons/fa";

const SkillsMain = () => {
  return (
    <div id="skills" className="relative overflow-hidden bg-gradient-to-b from-gray-900/50 to-transparent">
      {/* Background tech grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      
      {/* Floating tech icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 360, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-[10%] text-green/10 text-3xl"
        >
          <FaCode />
        </motion.div>
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [360, 0, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-[15%] text-cyan/10 text-4xl"
        >
          <FaCogs />
        </motion.div>
        <motion.div
          animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-[20%] text-green/10 text-2xl"
        >
          <FaDatabase />
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10], rotate: [0, 180, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 right-[25%] text-cyan/10 text-3xl"
        >
          <FaServer />
        </motion.div>
      </div>

      {/* Matrix-style scanning lines */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan to-transparent"
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-20 right-[10%] w-64 h-64 bg-gradient-to-br from-green/5 via-cyan/3 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-[5%] w-80 h-80 bg-gradient-to-tr from-cyan/5 via-green/3 to-transparent rounded-full blur-3xl"></div>

      {/* Main content */}
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <SkillsText />
        </motion.div>
        
        {/* Skills layout for all screen sizes */}
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <AllSkills />
          </motion.div>
        </div>

        {/* Bottom decoration */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green to-transparent opacity-30"></div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-5 left-5 w-8 h-8 border-l-2 border-t-2 border-green/20"></div>
      <div className="absolute top-5 right-5 w-8 h-8 border-r-2 border-t-2 border-cyan/20"></div>
      <div className="absolute bottom-5 left-5 w-8 h-8 border-l-2 border-b-2 border-green/20"></div>
      <div className="absolute bottom-5 right-5 w-8 h-8 border-r-2 border-b-2 border-cyan/20"></div>
    </div>
  );
};

export default SkillsMain;
