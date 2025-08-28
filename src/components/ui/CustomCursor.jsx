import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) return;

    // Hide default cursor
    document.body.style.cursor = 'none';

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const updateCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mouseX - 8}px, ${mouseY - 8}px)`;
      }
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${mouseX - 20}px, ${mouseY - 20}px)`;
      }
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      updateCursor();
    };

    const handleMouseEnter = (e) => {
      const target = e.target;
      
      if (target.matches('a, button, [role="button"], .cursor-pointer, [data-cursor="pointer"]')) {
        setIsHovering(true);
        setCursorText(target.dataset.cursorText || "");
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorText("");
    };

    // Event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    // Initialize cursor position
    updateCursor();

    return () => {
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9999] w-4 h-4 bg-white rounded-full transition-all duration-300 ease-out ${
          isHovering ? 'scale-150 bg-green mix-blend-normal' : 'mix-blend-difference'
        }`}
        style={{
          boxShadow: isHovering 
            ? '0 0 20px rgba(0, 255, 0, 0.5)' 
            : '0 0 10px rgba(255, 255, 255, 0.3)',
        }}
      >
        {/* Cursor text */}
        {cursorText && isHovering && (
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs font-mono text-white bg-black/80 px-2 py-1 rounded whitespace-nowrap">
            {cursorText}
          </div>
        )}
      </div>

      {/* Follower ring */}
      <div
        ref={followerRef}
        className={`fixed pointer-events-none z-[9998] w-10 h-10 border rounded-full transition-all duration-500 ease-out ${
          isHovering 
            ? 'scale-150 border-green/60 border-2' 
            : 'border-white/30 border'
        }`}
        style={{
          mixBlendMode: 'difference',
        }}
      />
    </>
  );
};

export default CustomCursor;
