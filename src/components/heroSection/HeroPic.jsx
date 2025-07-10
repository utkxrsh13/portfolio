import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";
import { FaCode, FaReact, FaJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

const HeroPic = () => {
  const techIcons = [
    { Icon: FaReact, color: "text-cyan", delay: "0s" },
    { Icon: FaJs, color: "text-yellow", delay: "0.5s" },
    { Icon: SiTypescript, color: "text-blue-400", delay: "1s" },
    { Icon: SiTailwindcss, color: "text-cyan", delay: "1.5s" },
    { Icon: FaCode, color: "text-green", delay: "2s" },
  ];

  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="relative h-full flex items-center justify-center group"
    >
      {/* Main profile image with enhanced styling */}
      <div className="relative z-20">
        <div className="relative overflow-hidden rounded-full border-4 border-green/30 hover:border-green/60 transition-all duration-500 group-hover:scale-105">
          <img
            src="/images/cropped_circle_image.png"
            alt="Utkarsh - Frontend Developer"
            className="max-h-[450px] w-auto filter hover:brightness-110 transition-all duration-500"
          />
          
          {/* Overlay gradient for modern effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-green/10 via-transparent to-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Status indicator */}
        <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
          <div className="w-2 h-2 bg-green rounded-full animate-pulse"></div>
          <span className="text-green text-xs font-mono">ONLINE</span>
        </div>
      </div>

      {/* Enhanced hexagon background with multiple layers */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center">
        {/* Primary rotating hexagon */}
        <PiHexagonThin className="h-[600px] w-auto text-green/30 animate-spin-slow" 
          style={{ animationDuration: '20s' }} />
        
        {/* Secondary counter-rotating hexagon */}
        <PiHexagonThin className="absolute h-[500px] w-auto text-cyan/20 animate-spin-slow" 
          style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
        
        {/* Blur effect hexagon */}
        <PiHexagonThin className="absolute h-[650px] w-auto text-green/10 blur-md animate-spin-slow" 
          style={{ animationDuration: '30s' }} />
      </div>

      {/* Floating tech icons around the image */}
      <div className="absolute inset-0 -z-5">
        {techIcons.map(({ Icon, color, delay }, index) => {
          const angle = (index / techIcons.length) * 360;
          const radius = 220;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          
          return (
            <motion.div
              key={index}
              className={`absolute text-2xl ${color} opacity-60 hover:opacity-100 transition-opacity duration-300`}
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
                animationDelay: delay
              }}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 360],
              }}
              transition={{
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
            >
              <Icon />
            </motion.div>
          );
        })}
      </div>

      {/* Orbital rings */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute inset-0 rounded-full border border-green/20 animate-pulse" 
          style={{ width: '300px', height: '300px', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}></div>
        <div className="absolute inset-0 rounded-full border border-cyan/10 animate-pulse" 
          style={{ 
            width: '400px', 
            height: '400px', 
            left: '50%', 
            top: '50%', 
            transform: 'translate(-50%, -50%)',
            animationDelay: '1s'
          }}></div>
      </div>

      {/* Code snippet floating around */}
      <div className="absolute -top-8 -left-8 text-green/30 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        const developer = &apos;Utkarsh&apos;;
      </div>
      <div className="absolute -bottom-8 -right-8 text-cyan/30 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        return &lt;Innovation /&gt;;
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-green/10 via-transparent to-cyan/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
};

export default HeroPic;
