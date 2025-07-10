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
    <div id="projects" className="relative max-w-[1200px] mx-auto px-4 py-20">
      {/* Background tech elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-20 left-10 text-6xl text-green font-mono animate-float">
          {'</>'}
        </div>
        <div className="absolute bottom-20 right-10 text-4xl text-cyan font-mono animate-float" style={{ animationDelay: '1s' }}>
          {'{}'}
        </div>
        <div className="absolute top-1/2 left-1/4 text-2xl text-yellow/30 font-mono animate-pulse">
          .project
        </div>
        <div className="absolute top-1/3 right-1/4 text-lg text-green/20 font-mono animate-float" style={{ animationDelay: '2s' }}>
          &lt;code/&gt;
        </div>
      </div>

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
      <div className="relative z-10 mt-20">
        <div className="flex flex-col gap-32 max-w-[1000px] mx-auto">
          {projects.map((project, index) => {
            return (
              <motion.div
                key={index}
                variants={fadeIn(project.align === "left" ? "left" : "right", 0.2 * index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                className="relative"
              >
                {/* Project number indicator */}
                <div className={`absolute -top-8 ${
                  project.align === "left" ? "left-0" : "right-0"
                } flex items-center gap-2 opacity-60`}>
                  <span className="text-green font-mono text-sm">
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  <div className="w-8 h-[1px] bg-gradient-to-r from-green to-transparent"></div>
                </div>

                <SingleProject
                  name={project.name}
                  year={project.year}
                  align={project.align}
                  image={project.image}
                  link={project.link}
                />

                {/* Project separator line */}
                {index < projects.length - 1 && (
                  <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-green/30 to-transparent"></div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Coming Soon Section */}
        <ComingSoonProject />

        {/* Section footer */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="mt-32 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-green"></div>
            <span className="text-green/60 font-mono text-sm">Thank you for exploring my work</span>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-green"></div>
          </div>
          
          {/* Tech stack summary */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {Array.from(new Set(projects.flatMap(p => p.tech))).map((tech, index) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs bg-green/5 border border-green/20 rounded-lg text-green/80 font-mono uppercase tracking-wider hover:bg-green/10 transition-colors duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="mt-12"
          >
            <p className="text-white/60 font-mono text-sm mb-4">
              $ echo &quot;Let&apos;s build something amazing together&quot;
            </p>
            <div className="flex justify-center">
              <div className="w-2 h-4 bg-green animate-pulse"></div>
            </div>
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
