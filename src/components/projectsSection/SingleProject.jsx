import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { FaCode, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import TechCard from "../ui/TechCard";
import PropTypes from 'prop-types';

const SingleProject = ({ name, year, align, image, link }) => {
  const isGithubLink = link.includes('github.com');
  
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-between sm:flex-col group`}
    >
      {/* Project Info Card */}
      <TechCard className="flex-1 max-w-md p-6" hover={true} glow={false}>
        <div className="space-y-4">
          {/* Project name with tech styling */}
          <div className="flex items-center gap-3">
            <FaCode className="text-green text-lg" />
            <h2 className="md:text-3xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green to-cyan">
              {name}
            </h2>
          </div>

          {/* Year with modern styling */}
          <div className={`flex items-center gap-2 ${
            align === "left" ? "md:justify-start" : "md:justify-start"
          } sm:justify-center`}>
            <span className="w-2 h-2 bg-yellow rounded-full animate-pulse"></span>
            <h3 className="text-lg font-mono text-yellow/80 tracking-wider">
              {year}
            </h3>
          </div>

          {/* Enhanced CTA button */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-text={isGithubLink ? "CODE" : "LIVE"}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all duration-300 font-mono text-sm uppercase tracking-wider
              ${isGithubLink 
                ? 'border-cyan/50 text-cyan hover:bg-cyan/10 hover:border-cyan hover:shadow-cyber' 
                : 'border-green/50 text-green hover:bg-green/10 hover:border-green hover:shadow-neon'
              }
              hover:scale-105 group-hover:translate-x-2`}
          >
            {isGithubLink ? <FaGithub /> : <FaExternalLinkAlt />}
            {isGithubLink ? 'View Code' : 'Live Demo'}
            <BsFillArrowUpRightCircleFill className="transition-transform duration-300 group-hover:rotate-45" />
          </a>

          {/* Tech indicators */}
          <div className="flex gap-1 mt-4">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className={`w-1 h-8 rounded-full ${
                  i === 0 ? 'bg-green/60' : i === 1 ? 'bg-cyan/40' : 'bg-yellow/30'
                } hover:scale-110 transition-transform duration-300`}
              ></div>
            ))}
          </div>
        </div>
      </TechCard>

      {/* Enhanced Image Container */}
      <div className="relative flex-1 max-w-lg">
        <TechCard className="overflow-hidden p-0" hover={true} glow={true}>
          {/* Image overlay effects */}
          <div className="relative overflow-hidden rounded-2xl">
            {/* Scanning line effect */}
            <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green to-transparent animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan to-transparent animate-pulse delay-1000"></div>
            </div>

            {/* Dark overlay for tech aesthetic */}
            <div className="absolute inset-0 bg-gradient-to-br from-green/10 via-transparent to-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

            {/* Main image */}
            <img 
              src={image} 
              alt={`${name} project preview`}
              className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110 filter group-hover:brightness-110 group-hover:contrast-110 image-content"
              data-cursor-text="PREVIEW"
            />

            {/* Corner tech decorations */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-green/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyan/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-cyan/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-green/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Project status indicator */}
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-2 h-2 bg-green rounded-full animate-pulse"></div>
              <span className="text-green text-xs font-mono">ACTIVE</span>
            </div>
          </div>
        </TechCard>

        {/* Floating tech elements */}
        <div className="absolute -top-3 -left-3 text-green/30 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          &lt;img/&gt;
        </div>
        <div className="absolute -bottom-3 -right-3 text-cyan/30 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          .project
        </div>
      </div>
    </motion.div>
  );
};

SingleProject.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  align: PropTypes.oneOf(['left', 'right']).isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default SingleProject;
