import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TypewriterEffect = ({ 
  texts = [], 
  speed = 100, 
  deleteSpeed = 50, 
  delayBetween = 2000,
  className = "",
  cursorColor = "green"
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;

    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      const fullText = texts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        
        if (currentText === fullText) {
          setIsPaused(true);
        }
      }
    }, isPaused ? delayBetween : isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentTextIndex, texts, speed, deleteSpeed, delayBetween]);

  const cursorColorClass = {
    green: 'bg-green',
    cyan: 'bg-cyan',
    white: 'bg-white',
    yellow: 'bg-yellow'
  };

  return (
    <div className={`font-mono ${className}`}>
      <span>{currentText}</span>
      <span className={`inline-block w-[2px] h-5 ml-1 animate-pulse ${cursorColorClass[cursorColor]} terminal-cursor`}></span>
    </div>
  );
};

TypewriterEffect.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string),
  speed: PropTypes.number,
  deleteSpeed: PropTypes.number,
  delayBetween: PropTypes.number,
  className: PropTypes.string,
  cursorColor: PropTypes.oneOf(['green', 'cyan', 'white', 'yellow'])
};

export default TypewriterEffect;
