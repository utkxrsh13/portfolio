import PropTypes from 'prop-types';

const TechCard = ({ 
  children, 
  className = "", 
  hover = true, 
  glow = false,
  border = true 
}) => {
  return (
    <div className={`
      relative overflow-hidden rounded-2xl 
      ${border ? 'border border-green/20' : ''}
      ${glow ? 'shadow-neon' : 'shadow-lg shadow-black/20'}
      ${hover ? 'hover:border-green/50 hover:shadow-neonLarge hover:-translate-y-2 hover:scale-105' : ''}
      bg-black/20 backdrop-blur-sm
      transition-all duration-500 ease-out
      group
      ${className}
    `}>
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green/5 via-transparent to-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Border glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green/20 via-cyan/20 to-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Corner decorations */}
      <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-green/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-cyan/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-cyan/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-green/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

TechCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hover: PropTypes.bool,
  glow: PropTypes.bool,
  border: PropTypes.bool
};

export default TechCard;
