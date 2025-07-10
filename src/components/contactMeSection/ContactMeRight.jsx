import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ContactInfo from "./ContactInfo";

const ContactMeRight = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/utkxrsh13",
      label: "GitHub",
      color: "hover:text-gray-300"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/utkxrsh13/",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: FaEnvelope,
      href: "mailto:utkarsht0813@gmail.com",
      label: "Email",
      color: "hover:text-green"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center gap-8 relative z-10"
    >
      {/* Email illustration with animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green/20 to-cyan/20 rounded-full blur-xl"></div>
        <motion.img
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          src="/images/email-image.png"
          alt="email illustration"
          className="max-w-[280px] relative z-10 drop-shadow-lg"
        />
        
        {/* Floating particles around image */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-4 -right-4 w-8 h-8 border-2 border-green/30 rounded-full"
        ></motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-2 -left-2 w-6 h-6 border-2 border-cyan/30 rounded-full"
        ></motion.div>
      </motion.div>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full"
      >
        <ContactInfo />
      </motion.div>

      {/* Social Media Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="w-full"
      >
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold text-gray-300 mb-2">Connect With Me</h3>
          <div className="w-16 h-0.5 bg-gradient-to-r from-green to-cyan mx-auto rounded-full"></div>
        </div>
        
        <div className="flex justify-center gap-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center justify-center w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl text-gray-400 ${social.color} transition-all duration-300 hover:border-green/50 hover:shadow-lg hover:shadow-green/20 group`}
              title={social.label}
            >
              <social.icon className="text-lg group-hover:scale-110 transition-transform duration-300" />
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-green/10 to-cyan/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Quick response badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-gradient-to-r from-green/10 to-cyan/10 backdrop-blur-sm border border-green/20 rounded-xl p-4 text-center"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-green rounded-full"
          ></motion.div>
          <span className="text-green font-semibold text-sm">Online Now</span>
        </div>
        <p className="text-gray-400 text-xs">
          Usually responds within 24 hours
        </p>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute -top-2 -right-2 text-cyan/20 font-mono text-xs pointer-events-none">
        &lt;connect/&gt;
      </div>
    </motion.div>
  );
};

export default ContactMeRight;
