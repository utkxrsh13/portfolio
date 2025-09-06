import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaPaperPlane, FaUser, FaEnvelope, FaMessage, FaCheck } from "react-icons/fa6";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs
      .sendForm("service_opbfr3a", "template_lvb8mua", form.current, {
        publicKey: "_U79DhCJ4JDJtxiOb",
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setSuccess("Message Sent Successfully");
          setIsSubmitting(false);
          
          // Clear success message after 5 seconds
          setTimeout(() => {
            setSuccess("");
          }, 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSubmitting(false);
        }
      );
  };

  const inputClasses = "h-12 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-600/50 px-4 text-black placeholder-gray-400 focus:outline-none focus:border-green/50 focus:ring-2 focus:ring-green/20 transition-all duration-300 hover:border-gray-500/70";
  const textareaClasses = "rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-600/50 p-4 text-black placeholder-gray-400 focus:outline-none focus:border-green/50 focus:ring-2 focus:ring-green/20 transition-all duration-300 hover:border-gray-500/70 resize-none";

  return (
    <div className="relative">
      {/* Success message */}
      {success && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mb-6 p-4 bg-green/10 border border-green/30 rounded-xl flex items-center gap-3"
        >
          <FaCheck className="text-green text-lg" />
          <p className="text-green font-medium">{success}</p>
        </motion.div>
      )}

      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
        {/* Name input */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative group"
        >
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-green transition-colors duration-300">
            <FaUser />
          </div>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className={`${inputClasses} pl-12`}
            value={name}
            onChange={handleName}
          />
          {/* Scanning line effect */}
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green to-cyan group-focus-within:w-full transition-all duration-500"></div>
        </motion.div>

        {/* Email input */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-green transition-colors duration-300">
            <FaEnvelope />
          </div>
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className={`${inputClasses} pl-12`}
            value={email}
            onChange={handleEmail}
          />
          {/* Scanning line effect */}
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green to-cyan group-focus-within:w-full transition-all duration-500"></div>
        </motion.div>

        {/* Message textarea */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative group"
        >
          <div className="absolute left-4 top-4 text-gray-400 group-focus-within:text-green transition-colors duration-300">
            <FaMessage />
          </div>
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className={`${textareaClasses} pl-12 pt-4`}
            value={message}
            onChange={handleMessage}
          />
          {/* Scanning line effect */}
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green to-cyan group-focus-within:w-full transition-all duration-500"></div>
        </motion.div>

        {/* Submit button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative w-full rounded-xl border border-green/50 text-white h-14 font-bold text-lg bg-gradient-to-r from-green/20 to-cyan/20 hover:from-green/30 hover:to-cyan/30 transition-all duration-500 group overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {/* Button background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-green/10 to-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Button content */}
          <div className="relative flex items-center justify-center gap-3">
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
                <span>Send Message</span>
              </>
            )}
          </div>

          {/* Scanning line effect */}
          <motion.div
            className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.button>
      </form>

      {/* Tech decorations */}
      <div className="absolute -top-2 -right-2 text-green/20 font-mono text-xs">
        &lt;form&gt;
      </div>
      <div className="absolute -bottom-2 -left-2 text-cyan/20 font-mono text-xs">
        &lt;/form&gt;
      </div>
    </div>
  );
};

export default ContactForm;
