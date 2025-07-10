import { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const ProjectFilter = ({ categories, activeCategory, onCategoryChange }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div className="flex justify-center mb-16">
      <div className="flex flex-wrap gap-4 p-2 bg-black/20 backdrop-blur-sm rounded-2xl border border-green/20">
        {categories.map((category, index) => (
          <motion.button
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onCategoryChange(category)}
            onMouseEnter={() => setHoveredCategory(category)}
            onMouseLeave={() => setHoveredCategory(null)}
            className={`relative px-6 py-3 rounded-xl font-mono text-sm uppercase tracking-wider transition-all duration-300 ${
              activeCategory === category
                ? 'text-black bg-green shadow-neon'
                : 'text-green/80 hover:text-green hover:bg-green/10'
            }`}
          >
            {/* Background glow effect */}
            {(activeCategory === category || hoveredCategory === category) && (
              <motion.div
                layoutId="categoryGlow"
                className="absolute inset-0 bg-green/20 rounded-xl blur-md -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
            
            {/* Active indicator */}
            {activeCategory === category && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 bg-green rounded-xl -z-10"
                transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
              />
            )}
            
            <span className="relative z-10">{category}</span>
            
            {/* Tech brackets */}
            <span className="absolute -left-1 top-1/2 -translate-y-1/2 text-green/40 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {'<'}
            </span>
            <span className="absolute -right-1 top-1/2 -translate-y-1/2 text-green/40 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {'>'}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

ProjectFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired
};

export default ProjectFilter;
