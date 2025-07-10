import { motion } from "framer-motion";
import { FaReact, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";

const ExperienceTopRight = () => {
  const skills = [
    { icon: FaReact, name: "React", color: "text-cyan" },
    { icon: FaJs, name: "JavaScript", color: "text-yellow-400" },
    { icon: FaHtml5, name: "HTML5", color: "text-orange-400" },
    { icon: FaCss3Alt, name: "CSS3", color: "text-blue-400" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="lg:w-[350px] sm:w-full bg-gradient-to-br from-gray-900/50 to-black/30 backdrop-blur-sm border border-green/20 p-6 rounded-2xl hover:border-green/40 transition-all duration-500 hover:shadow-xl hover:shadow-green/10"
    >
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-white mb-2">Technical Expertise</h3>
        <div className="w-16 h-1 bg-gradient-to-r from-green to-cyan mx-auto rounded-full"></div>
      </div>

      {/* Skills icons */}
      <div className="flex justify-center gap-4 mb-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.2, y: -5 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              delay: index * 0.3,
              hover: { duration: 0.3 }
            }}
            className={`text-2xl ${skill.color} cursor-pointer`}
            title={skill.name}
          >
            <skill.icon />
          </motion.div>
        ))}
      </div>

      {/* Main description */}
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed text-center">
          I specialize in{" "}
          <span className="font-bold text-cyan bg-cyan/10 px-2 py-1 rounded">
            React and modern JavaScript
          </span>
          , leveraging best practices to create scalable and maintainable solutions.
        </p>
        
        <div className="bg-black/20 rounded-lg p-4 border border-green/10">
          <p className="text-sm text-gray-400 mb-2 text-center">Focus Areas:</p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-green/10 text-green px-2 py-1 rounded text-center">Performance</div>
            <div className="bg-cyan/10 text-cyan px-2 py-1 rounded text-center">Scalability</div>
            <div className="bg-green/10 text-green px-2 py-1 rounded text-center">Clean Code</div>
            <div className="bg-cyan/10 text-cyan px-2 py-1 rounded text-center">User Experience</div>
          </div>
        </div>
        
        <p className="text-gray-300 leading-relaxed text-center text-sm">
          My experience spans working on diverse projects, from small business
          websites to{" "}
          <span className="font-bold text-green">
            complex front-end systems
          </span>
          , always aiming for exceptional user experiences.
        </p>
      </div>

      {/* Bottom accent */}
      <div className="mt-6 flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan to-transparent rounded-full opacity-50"></div>
      </div>
    </motion.div>
  );
};

export default ExperienceTopRight;
