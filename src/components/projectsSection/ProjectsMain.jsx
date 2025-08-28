import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import ComingSoonProject from "./ComingSoonProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "InspiraPix",
    year: "Mar 2025",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "https://inspirapix.vercel.app/",
    tech: ["React", "AI", "Tailwind"],
    status: "Live",
    category: "Full-Stack"
  },
  {
    name: "GoHop",
    year: "Jan 2025",
    align: "left",
    image: "/images/website-img-3.jpg",
    link: "https://github.com/utkxrsh13/GOHOP-mobile",
    tech: ["React Native", "Node.js", "MongoDB"],
    status: "Development",
    category: "Mobile"
  },
  {
    name: "CareerVista",
    year: "Sept 2024",
    align: "right",
    image: "/images/website-img-2.webp",
    link: "https://career-vista.onrender.com/",
    tech: ["MERN", "JWT", "Redux"],
    status: "Live",
    category: "Full-Stack"
  },
  {
    name: "TruBot",
    year: "Aug 2024",
    align: "left",
    image: "/images/website-img-4.jpg",
    link: "https://tr-ubot.vercel.app/",
    tech: ["Framer", "AI", "TypeScript"],
    status: "Live",
    category: "AI/ML"
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="relative w-full max-w-screen-lg mx-auto px-2 sm:px-4 py-10 sm:py-20">
      {/* Subtle code-style background */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-gray-900/40 to-black/10 opacity-80"></div>
      {/* Minimal tech elements */}
      <div className="absolute top-4 left-4 text-green/20 font-mono text-xs select-none">// projects section</div>
      <div className="absolute bottom-4 right-4 text-cyan/20 font-mono text-xs select-none">// end projects</div>

      {/* Section header */}
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="relative z-10"
      >
        <ProjectsText />
      </motion.div>

      {/* Projects grid with enhanced spacing */}
      <div className="relative z-10 mt-10 sm:mt-20">
        <div className="flex flex-col gap-12 sm:gap-32 w-full max-w-2xl mx-auto">
          {projects.map((project, index) => {
            return (
              <motion.div
                key={index}
                variants={fadeIn(project.align === "left" ? "left" : "right", 0.07 * index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                className="relative"
              >
                {/* Project number indicator as code comment */}
                <div className={`absolute -top-6 ${
                  project.align === "left" ? "left-0" : "right-0"
                } flex items-center gap-1 opacity-50 font-mono text-xs select-none`}>
                  <span className="text-green">// {String(index + 1).padStart(2, '0')}</span>
                </div>

                <SingleProject
                  name={project.name}
                  year={project.year}
                  align={project.align}
                  image={project.image}
                  link={project.link}
                />

                {/* Project separator line as subtle border */}
                {index < projects.length - 1 && (
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-[1px] bg-green/10"></div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Coming Soon Section */}
        <ComingSoonProject />

        {/* Section footer */}
        <motion.div
          variants={fadeIn("up", 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="mt-12 sm:mt-32 text-center"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-8 sm:w-16 h-[1px] bg-green/10"></div>
            <span className="text-green/60 font-mono text-xs sm:text-sm">{'// Thank you for exploring my work'}</span>
            <div className="w-8 sm:w-16 h-[1px] bg-green/10"></div>
          </div>
          {/* Tech stack summary as code tags */}
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mt-4 sm:mt-8">
            {Array.from(new Set(projects.flatMap(p => p.tech))).map((tech, index) => (
              <span
                key={tech}
                className="px-2 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs bg-gradient-to-br from-gray-900/60 to-black/30 border border-green/30 rounded font-mono text-green/80 tracking-wider hover:bg-green/20 hover:text-cyan transition-colors duration-200 hover:scale-105 shadow-sm"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {'<'}{tech}{'>'}
              </span>
            ))}
          </div>
          {/* Call to action as code comment */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="mt-6 sm:mt-12"
          >
            <p className="text-green/60 font-mono text-xs sm:text-sm mb-2">{'// Let\'s build something amazing together'}</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Closing tag */}
      <div className="absolute bottom-4 right-4 text-green/20 font-mono text-xs">
        &lt;/projects&gt;
      </div>
    </div>
  );
};

export default ProjectsMain;
