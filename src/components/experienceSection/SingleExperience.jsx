import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";

const SingleExperience = ({ experience, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", index * 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="group relative bg-gradient-to-br from-gray-900/50 to-black/30 backdrop-blur-sm border border-green/20 rounded-2xl p-6 hover:border-green/40 transition-all duration-500 hover:shadow-xl hover:shadow-green/10 hover:-translate-y-2"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green/5 to-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-green mb-1 group-hover:text-cyan transition-colors duration-300">
              {experience.job}
            </h3>
            <p className="text-cyan text-lg font-semibold mb-2">{experience.company}</p>
          </div>
          
          {/* Status badge */}
          <div className="bg-green/20 text-green px-3 py-1 rounded-full text-sm font-medium border border-green/30">
            {experience.status || "Current"}
          </div>
        </div>

        {/* Date and location */}
        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-green" />
            <span>{experience.date}</span>
          </div>
          {experience.location && (
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-cyan" />
              <span>{experience.location}</span>
            </div>
          )}
        </div>

        {/* Tech stack */}
        {experience.technologies && (
          <div className="mb-4">
            <p className="text-sm text-gray-400 mb-2">Tech Stack:</p>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="bg-cyan/10 text-cyan px-2 py-1 rounded text-xs border border-cyan/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Responsibilities */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Achievements:</h4>
          <ul className="space-y-2">
            {experience.responsibilities.map((resp, respIndex) => (
              <li key={respIndex} className="flex items-start gap-3 text-sm text-gray-300">
                <div className="w-1.5 h-1.5 bg-green rounded-full mt-2 flex-shrink-0"></div>
                <span className="leading-relaxed">{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Link if available */}
        {experience.link && (
          <div className="pt-4 border-t border-gray-700/50">
            <a 
              href={experience.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green hover:text-cyan transition-colors duration-300 text-sm font-medium"
            >
              <span>View Project</span>
              <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>
        )}
      </div>

      {/* Corner decoration */}
      <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-green/20 group-hover:border-green/40 transition-colors duration-500"></div>
    </motion.div>
  );
};

export default SingleExperience;
