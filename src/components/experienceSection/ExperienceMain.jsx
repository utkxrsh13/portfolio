import AllExperiences from "./AllExperiences";
import ExperienceText from "./ExperienceText";
import ExperienceTop from "./ExperienceTop";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaBuilding, FaCode, FaUsers, FaRocket } from "react-icons/fa";

const ExperienceMain = () => {
  return (
    <div id="experience" className="relative overflow-hidden bg-gradient-to-b from-transparent via-gray-900/30 to-transparent">
      {/* Background tech grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
      
      {/* Floating experience icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [-25, 25, -25], rotate: [0, 360, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-[8%] text-cyan/8 text-4xl"
        >
          <FaBuilding />
        </motion.div>
        <motion.div
          animate={{ y: [20, -20, 20], x: [-5, 5, -5] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-[12%] text-green/8 text-3xl"
        >
          <FaCode />
        </motion.div>
        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [0, -180, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 left-[15%] text-cyan/8 text-2xl"
        >
          <FaUsers />
        </motion.div>
        <motion.div
          animate={{ y: [15, -15, 15], x: [5, -5, 5] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-[20%] text-green/8 text-3xl"
        >
          <FaRocket />
        </motion.div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-40 right-[5%] w-72 h-72 bg-gradient-to-br from-cyan/5 via-green/3 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-[8%] w-64 h-64 bg-gradient-to-tr from-green/5 via-cyan/3 to-transparent rounded-full blur-3xl"></div>

      {/* Main content */}
      <div className="max-w-[1200px] mx-auto px-4 relative">
        {/* Experience text section */}
        <motion.div
          variants={fadeIn("down", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <ExperienceText />
        </motion.div>

        {/* Experience top section */}
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
        >
          <ExperienceTop />
        </motion.div>

        {/* Enhanced separator line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="h-1 mt-8 mb-4 bg-gradient-to-r from-transparent via-cyan to-transparent lg:block sm:hidden rounded-full"
        />

        {/* All experiences section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <AllExperiences />
        </motion.div>

        {/* Bottom decoration */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green to-transparent opacity-30"></div>
      </div>

      {/* Corner tech decorations */}
      <div className="absolute top-10 left-10 w-12 h-12 border-l-2 border-t-2 border-cyan/20 rounded-tl-lg"></div>
      <div className="absolute top-10 right-10 w-12 h-12 border-r-2 border-t-2 border-green/20 rounded-tr-lg"></div>
      <div className="absolute bottom-10 left-10 w-12 h-12 border-l-2 border-b-2 border-green/20 rounded-bl-lg"></div>
      <div className="absolute bottom-10 right-10 w-12 h-12 border-r-2 border-b-2 border-cyan/20 rounded-br-lg"></div>

      {/* Matrix-style scanning lines */}
      <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
        {/* <motion.div
          className="absolute top-1/4 left-0 w-[200%] h-[2px] bg-gradient-to-r from-transparent via-cyan to-transparent"
          animate={{ x: ['-100%', '0%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        /> */}
        {/* <motion.div
          className="absolute bottom-1/4 left-0 w-[200%] h-[2px] bg-gradient-to-r from-transparent via-green to-transparent"
          animate={{ x: ['0%', '-100%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-0 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-yellow/60 to-transparent"
          animate={{ x: ['-100%', '50%'] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
        /> */}
      </div>
    </div>
  );
};

export default ExperienceMain;
