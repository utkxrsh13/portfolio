import SingleExperience from "./SingleExperience";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const experiences = [
  {
    job: "React Developer",
    company: "Celebal Technologies",
    date: "2025 - Present",
    location: "Remote",
    status: "Current",
    technologies: ["React", "JavaScript", "Node.js", "Tailwind CSS"],
    responsibilities: [
      "Developed and maintained 15+ reusable React components used across multiple projects",
      "Collaborated with cross-functional teams to implement scalable web applications",
      "Optimized application performance resulting in 40% faster load times",
      "Mentored junior developers and conducted code reviews",
      "Implemented responsive designs following modern UI/UX principles"
    ],
    link: "https://github.com/utkxrsh13/form-validation"
  },
  {
    job: "Web Developer",
    company: "RetoINDIA",
    date: "2024 - 2025",
    location: "India",
    status: "Completed",
    technologies: ["HTML", "CSS", "JavaScript", "Framer", "React"],
    responsibilities: [
      "Built visually appealing, responsive eCommerce platform serving 1000+ daily users",
      "Integrated payment gateways and implemented secure user authentication",
      "Developed custom animations and interactive elements using Framer",
      "Collaborated with design team to ensure pixel-perfect implementation",
      "Reduced page load time by 35% through code optimization"
    ],
    link: "https://reto-india.onrender.com/"
  },
  {
    job: "Frontend Developer",
    company: "Freelance Projects",
    date: "2022 - 2024",
    location: "Remote",
    status: "Multiple Projects",
    technologies: ["React", "JavaScript", "SCSS", "Bootstrap"],
    responsibilities: [
      "Completed 8+ successful client projects ranging from portfolios to web applications",
      "Specialized in converting designs to pixel-perfect, responsive websites",
      "Implemented modern JavaScript frameworks and libraries",
      "Maintained 98% client satisfaction rate with timely project delivery",
      "Provided ongoing maintenance and support for deployed applications"
    ]
  }
];

const AllExperiences = () => {
  return (
    <div className="mt-16">
      {/* Section header */}
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-center mb-12"
      >
        <h3 className="text-2xl font-bold text-white mb-4">Professional Journey</h3>
        <div className="w-20 h-1 bg-gradient-to-r from-green to-cyan mx-auto rounded-full"></div> 
      </motion.div>

      {/* Timeline layout for larger screens, stacked for mobile */}
      <div className="relative">
        {/* Timeline line - hidden on mobile */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-green via-cyan to-green rounded-full opacity-30" style={{ height: 'calc(100% - 40px)', top: '20px' }}></div>
        
        {/* Experience cards with integrated timeline dots */}
        <div className="space-y-8 lg:space-y-16">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={fadeIn(index % 2 === 0 ? "left" : "right", index * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="relative"
            >
              {/* Timeline dot positioned relative to each card */}
              <div className="hidden lg:block absolute left-1/2 top-6 transform -translate-x-1/2 w-5 h-5 bg-green rounded-full border-4 border-gray-900 z-20 shadow-lg shadow-green/30">
                <div className="absolute inset-0 bg-green rounded-full animate-ping opacity-30"></div>
              </div>
              
              {/* Experience card with alternating layout */}
              <div className={`lg:flex lg:items-start ${
                index % 2 === 0 
                  ? 'lg:flex-row lg:justify-start' 
                  : 'lg:flex-row-reverse lg:justify-start'
              }`}>
                {/* Experience content */}
                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <SingleExperience experience={experience} index={index} />
                </div>
                
                {/* Spacer for timeline center */}
                <div className="hidden lg:block lg:w-2/12"></div>
                
                {/* Empty space on opposite side */}
                <div className="hidden lg:block lg:w-5/12"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to action */}
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-center mt-16 p-8 bg-gradient-to-r from-gray-900/50 to-black/30 backdrop-blur-sm rounded-2xl border border-green/20"
      >
        <h3 className="text-xl font-bold text-white mb-4">Let&apos;s Work Together</h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          I&apos;m always interested in new opportunities and exciting projects. 
          Feel free to reach out if you&apos;d like to collaborate!
        </p>
        <div className="flex justify-center gap-4">
          <a 
            href="https://github.com/utkxrsh13" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green/10 hover:bg-green/20 text-green px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 border border-green/30"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/utkxrsh13/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-cyan/10 hover:bg-cyan/20 text-cyan px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 border border-cyan/30"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default AllExperiences;
