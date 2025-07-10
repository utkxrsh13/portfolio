import TypewriterEffect from "../ui/TypewriterEffect";

const ProjectsText = () => {
  const projectDescriptions = [
    "Building innovative web solutions...",
    "Crafting responsive user interfaces...", 
    "Developing full-stack applications...",
    "Creating seamless user experiences..."
  ];

  return (
    <div className="flex flex-col items-center mt-[100px] relative">
      {/* Background tech elements */}
      <div className="absolute -top-10 left-10 text-green/20 font-mono text-xs">
        &lt;projects&gt;
      </div>
      <div className="absolute -top-10 right-10 text-cyan/20 font-mono text-xs">
        portfolio.showcase()
      </div>

      {/* Section number indicator */}
      <div className="flex items-center gap-4 mb-6">
        <span className="text-green font-mono text-sm">03.</span>
        <div className="w-16 h-[1px] bg-gradient-to-r from-green to-transparent"></div>
      </div>

      {/* Main heading with modern styling */}
      <h2 className="text-6xl md:text-7xl font-bold mb-8 relative">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-green to-cyan bg-[length:200%_auto] animate-gradient-shift">
          Projects
        </span>
        
        {/* Glitch effect overlay */}
        <div className="absolute inset-0 text-green/20 blur-sm animate-pulse">
          Projects
        </div>
      </h2>

      {/* Enhanced description */}
      <div className="max-w-3xl text-center space-y-6">
        <p className="text-lg text-white/80 leading-relaxed">
          I&apos;ve worked on a variety of{" "}
          <span className="text-cyan font-semibold">web development projects</span>, 
          ranging from responsive websites to{" "}
          <span className="text-green font-semibold">full-stack applications</span>{" "}
          and complex{" "}
          <span className="text-yellow font-semibold">front-end interfaces</span>.
        </p>

        {/* Typewriter effect for dynamic content */}
        <div className="flex items-center justify-center gap-2 text-green/80 font-mono text-sm">
          <span className="text-green">$</span>
          <TypewriterEffect 
            texts={projectDescriptions}
            speed={60}
            deleteSpeed={30}
            delayBetween={2500}
            cursorColor="green"
            className="text-green/80"
          />
        </div>

        {/* Tech stack tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {['React', 'Node.js', 'Next.js', 'MongoDB', 'TypeScript', 'AI'].map((tech, index) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-green/10 border border-green/20 rounded-lg text-green font-mono uppercase tracking-wider hover:bg-green/20 transition-colors duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-cyan to-transparent"></div>
    </div>
  );
};

export default ProjectsText;
