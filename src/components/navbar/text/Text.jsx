import "react";
import "./text.css";

const UtkarshPattern = () => {
  return (
    <div className="patterns">
      <svg width="100%" height="100%" viewBox="0 0 800 200">
        <defs>
          {/* Tech-inspired gradient definitions */}
          <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00ff00" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#00bfff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#00ff00" stopOpacity="0.8" />
          </linearGradient>
          
          {/* Matrix-like pattern */}
          <pattern id="matrix-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="transparent" />
            <circle cx="10" cy="10" r="1" fill="rgba(0, 255, 0, 0.1)" />
          </pattern>
        </defs>
        
        {/* Background pattern overlay */}
        <rect x="0" y="0" width="100%" height="100%" fill="url(#matrix-pattern)" opacity="0.3" />
        
        {/* Main text with enhanced styling */}
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="32" fontWeight="700">
          UTKARSH
        </text>
        
        {/* Subtitle/tagline */}
        <text x="50%" y="75%" textAnchor="middle" dominantBaseline="middle" fontSize="12" 
              fill="rgba(0, 255, 0, 0.6)" stroke="none" fontFamily="'JetBrains Mono', monospace">
          &lt;/Frontend Developer&gt;
        </text>
        
        {/* Decorative tech elements */}
        <g opacity="0.4">
          <line x1="10%" y1="30%" x2="20%" y2="30%" stroke="#00ff00" strokeWidth="1" />
          <line x1="80%" y1="70%" x2="90%" y2="70%" stroke="#00bfff" strokeWidth="1" />
          <circle cx="15%" cy="80%" r="2" fill="none" stroke="#00ff00" strokeWidth="1" />
          <circle cx="85%" cy="20%" r="2" fill="none" stroke="#00bfff" strokeWidth="1" />
        </g>
      </svg>
      
      {/* Floating code symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['{', '}', '(', ')', '<', '>', '[', ']'].map((symbol, index) => (
          <div
            key={index}
            className="absolute text-green/20 text-lg font-mono animate-float"
            style={{
              left: `${10 + (index * 10)}%`,
              top: `${20 + (index % 3) * 20}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: '3s'
            }}
          >
            {symbol}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UtkarshPattern;
