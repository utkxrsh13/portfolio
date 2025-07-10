import { motion } from "framer-motion";
import { FaCode, FaHandshake, FaRocket, FaLightbulb } from "react-icons/fa";

const ContactText = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10"
    >
      {/* Header with animated icon */}
      <div className="flex items-center gap-4 mb-6">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-green text-3xl"
        >
          <FaHandshake />
        </motion.div>
        <div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green via-cyan to-green bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-400 text-sm mt-1 font-mono">&lt;ready-to-collaborate/&gt;</p>
        </div>
      </div>

      {/* Animated decorative line */}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: "6rem" }}
        transition={{ duration: 1, delay: 0.3 }}
        className="h-1 bg-gradient-to-r from-green to-cyan rounded-full mb-8"
      />

      {/* Main content */}
      <div className="space-y-6">
        {/* Primary message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Ready to turn your <span className="text-green font-semibold">ideas into reality</span>? 
            I&apos;d love to hear about your project and discuss how we can work together 
            to create something <span className="text-cyan font-semibold">extraordinary</span>.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-black/30 to-gray-900/30 rounded-xl p-6 border border-green/20 backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 mb-4">
            <FaCode className="text-cyan text-lg" />
            <span className="text-gray-300 font-semibold">What I can help with:</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: FaRocket, text: "React Development", color: "text-green" },
              { icon: FaLightbulb, text: "Web Applications", color: "text-cyan" },
              { icon: FaCode, text: "UI/UX Implementation", color: "text-green" },
              { icon: FaRocket, text: "Performance Optimization", color: "text-cyan" }
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-black/20 transition-all duration-300"
              >
                <service.icon className={`${service.color} text-sm`} />
                <span className="text-gray-300 text-sm">{service.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-green/5 border border-green/20 rounded-lg p-4"
        >
          <p className="text-gray-300 text-sm leading-relaxed">
            <span className="text-green font-semibold">✨ Quick response guaranteed!</span> 
            <br />
            I typically reply within 24 hours. Let&apos;s discuss your next big project!
          </p>
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute -top-4 -right-4 text-green/10 font-mono text-xs pointer-events-none">
        &lt;/contact&gt;
      </div>
      <div className="absolute -bottom-2 -left-2 text-cyan/10 font-mono text-xs pointer-events-none">
        &lt;form&gt;
      </div>
    </motion.div>
  );
};

export default ContactText;
