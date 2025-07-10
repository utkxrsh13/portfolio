import PropTypes from 'prop-types';

const LoadingSpinner = ({ size = "md", color = "green" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  };

  const colorClasses = {
    green: "border-green",
    cyan: "border-cyan",
    white: "border-white"
  };

  return (
    <div className="flex items-center justify-center">
      <div className={`
        ${sizeClasses[size]} 
        border-2 
        ${colorClasses[color]} 
        border-t-transparent 
        rounded-full 
        animate-spin
        shadow-neon
      `}>
      </div>
    </div>
  );
};

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  color: PropTypes.oneOf(['green', 'cyan', 'white'])
};

export default LoadingSpinner;
