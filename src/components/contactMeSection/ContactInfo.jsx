import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  const contactData = [
    { text: "utkarsht0813@gmail.com", Icon: HiOutlineMail },
    { text: "+91 7007879620", Icon: FiPhone },
    { text: "Ghaziabad, UP, 🇮🇳", Icon: IoLocationOutline }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-300 mb-2">Get In Touch</h3>
        <div className="w-16 h-0.5 bg-gradient-to-r from-green to-cyan mx-auto rounded-full"></div>
      </div>
      
      <div className="space-y-3">
        {contactData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <SingleInfo text={item.text} Image={item.Icon} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactInfo;
