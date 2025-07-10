import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";
import { motion } from "framer-motion";
import { FaEnvelope, FaRocket, FaHandshake } from "react-icons/fa";
import TypewriterEffect from "../ui/TypewriterEffect";

const ContactMeMain = () => {
  return (
    <div id="contact" className="relative overflow-hidden py-20" style={{ pointerEvents: 'auto' }}>
      {/* Background tech grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px] pointer-events-none"></div>
      
      {/* Floating contact icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 360, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-[10%] text-green/8 text-3xl"
        >
          <FaEnvelope />
        </motion.div>
        <motion.div
          animate={{ y: [15, -15, 15], x: [-5, 5, -5] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-[8%] text-cyan/8 text-4xl"
        >
          <FaRocket />
        </motion.div>
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [0, -180, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-[5%] text-green/8 text-2xl"
        >
          <FaHandshake />
        </motion.div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-20 right-[10%] w-64 h-64 bg-gradient-to-br from-green/8 via-cyan/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-[5%] w-80 h-80 bg-gradient-to-tr from-cyan/8 via-green/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      {/* Main content */}
      <div className="max-w-[1200px] mx-auto items-center justify-center mt-[50px] px-4 relative z-10" style={{ pointerEvents: 'auto' }}>
        {/* Enhanced header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-green text-2xl"
            >
              <FaEnvelope />
            </motion.div>
            <h2 className="text-6xl font-bold bg-gradient-to-r from-green via-cyan to-green bg-clip-text text-transparent">
              Contact Me
            </h2>
            <motion.div
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-cyan text-2xl"
            >
              <FaHandshake />
            </motion.div>
          </div>
          
          {/* Glowing line underneath */}
          <div className="w-40 h-1 bg-gradient-to-r from-transparent via-green to-transparent mx-auto mb-6 rounded-full"></div>
          
          {/* Subtitle */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-green font-mono text-sm">{'// Let\'s Connect'}</span>
          </div>
          
          <TypewriterEffect
            text="Ready to bring your ideas to life? Let's discuss your next project!"
            delay={100}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          />
        </motion.div>

        {/* Contact form container with glass morphism */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-30"
        >
          {/* Glowing background effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-green/5 via-transparent to-cyan/5 rounded-3xl blur-xl pointer-events-none"></div>
          
          {/* Main contact container */}
          <div className="relative bg-gray-900/40 backdrop-blur-sm border border-gray-700/50 p-8 rounded-3xl hover:border-green/30 transition-all duration-500 shadow-2xl">
            {/* Tech decorations */}
            <div className="absolute top-4 left-4 text-green/20 font-mono text-xs pointer-events-none">
              &lt;contact&gt;
            </div>
            <div className="absolute top-4 right-4 text-cyan/20 font-mono text-xs pointer-events-none">
              {'{ form }'}
            </div>
            <div className="absolute bottom-4 right-4 text-green/20 font-mono text-xs pointer-events-none">
              &lt;/contact&gt;
            </div>
            
            {/* Content */}
            <div className="flex justify-between gap-12 lg:flex-row sm:flex-col">
              <div className="lg:w-1/2 w-full">
                <ContactMeLeft />
              </div>
              <div className="lg:w-1/2 w-full">
                <ContactMeRight />
              </div>
            </div>

            {/* Bottom scanning line */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green/50 to-transparent pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Bottom decoration */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan to-transparent opacity-30 mt-20"></div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-5 left-5 w-8 h-8 border-l-2 border-t-2 border-green/30"></div>
      <div className="absolute top-5 right-5 w-8 h-8 border-r-2 border-t-2 border-cyan/30"></div>
      <div className="absolute bottom-5 left-5 w-8 h-8 border-l-2 border-b-2 border-green/30"></div>
      <div className="absolute bottom-5 right-5 w-8 h-8 border-r-2 border-b-2 border-cyan/30"></div>

      {/* Matrix-style scanning lines */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan to-transparent"
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
};

export default ContactMeMain;
