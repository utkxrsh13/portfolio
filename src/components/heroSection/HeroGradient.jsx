const HeroGradient = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced gradient orbs with modern styling */}
      <div className="absolute top-20 right-[20%] w-96 h-96 bg-gradient-to-br from-green/20 via-cyan/10 to-transparent rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute top-[40%] left-[10%] w-80 h-80 bg-gradient-to-tr from-cyan/15 via-green/8 to-transparent rounded-full blur-3xl animate-pulse -z-10" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-[30%] right-[10%] w-72 h-72 bg-gradient-to-tl from-green/10 via-cyan/5 to-transparent rounded-full blur-3xl animate-pulse -z-10" style={{ animationDelay: '2s' }}></div>
      
      {/* Matrix-style scanning lines */}
      <div className="absolute inset-0 opacity-20 -z-10">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green to-transparent animate-pulse"></div>
        <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 border border-green/30 rotate-45 animate-float -z-10"></div>
      <div className="absolute top-3/4 right-1/4 w-6 h-6 border border-cyan/30 rounded-full animate-float -z-10" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-green/30 animate-float -z-10" style={{ animationDelay: '0.5s' }}></div>
      
      {/* Tech-inspired particle system */}
      <div className="absolute inset-0 -z-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroGradient;
