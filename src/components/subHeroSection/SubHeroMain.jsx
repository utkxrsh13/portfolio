const SubHeroMain = () => {
  const features = [
    { text: "Fast Learner", icon: "⚡" },
    { text: "Team Player", icon: "🤝" },
    { text: "Detail Master", icon: "🎯" },
    { text: "Problem Solver", icon: "🧩" }
  ];

  return (
    <div className="relative w-full border-y border-green/20 bg-gradient-to-r from-black via-green/5 to-black text-white overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,0,0.1),transparent_50%)] animate-pulse"></div>
      </div>

      {/* Scrolling background text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 text-6xl font-bold whitespace-nowrap animate-pulse">
        <div className="animate-marquee">
          FRONTEND • DEVELOPER • INNOVATION • CREATIVITY • 
        </div>
      </div>

      <div className="relative flex justify-center items-center py-12 px-4">
        <div className="flex lg:flex-row md:flex-row sm:flex-col items-center justify-center gap-8 lg:gap-16 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-3 relative"
            >
              {/* Icon with glow effect */}
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              {/* Feature text */}
              <p className="text-lg md:text-xl font-semibold uppercase tracking-wider text-white/80 group-hover:text-green transition-colors duration-300 text-center">
                {feature.text}
              </p>
              
              {/* Underline effect */}
              <div className="w-0 h-[2px] bg-gradient-to-r from-green to-cyan group-hover:w-full transition-all duration-500"></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-green/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10 scale-150"></div>
              
              {/* Connecting lines for desktop */}
              {index < features.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-8 w-16 h-[1px] bg-gradient-to-r from-green/50 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Side decorative elements */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-transparent via-green to-transparent animate-pulse"></div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-transparent via-cyan to-transparent animate-pulse"></div>
    </div>
  );
};

export default SubHeroMain;
