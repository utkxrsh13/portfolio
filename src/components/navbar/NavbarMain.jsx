import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const useViewCounter = () => {
  const [views, setViews] = useState(null);

  useEffect(() => {
    const namespace = 'utkarsh-portfolio';
    const key = 'views';
    
    // Check if this session already counted a view
    const hasViewed = sessionStorage.getItem('portfolio-viewed');
    
    const fetchViews = async () => {
      try {
        if (!hasViewed) {
          // Increment view count (hit endpoint)
          const res = await fetch(`https://api.counterapi.dev/v1/${namespace}/${key}/up`);
          const data = await res.json();
          setViews(data.count);
          sessionStorage.setItem('portfolio-viewed', 'true');
        } else {
          // Just get current count without incrementing
          const res = await fetch(`https://api.counterapi.dev/v1/${namespace}/${key}`);
          const data = await res.json();
          setViews(data.count);
        }
      } catch (error) {
        console.error('Failed to fetch view count:', error);
      }
    };

    fetchViews();
  }, []);

  return views;
};

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  const [scrolled, setScrolled] = useState(false);
  const views = useViewCounter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 z-[9999] px-4 py-3" style={{ pointerEvents: 'auto' }}>
      {views !== null && (
            <div className="hidden lg:block text-green/60 text-sm font-medium">
              Views: {views}
            </div>
          )}
      <div className="max-w-7xl mx-auto">
        {/* Main navbar container */}
        <div
          className={`flex justify-between items-center px-6 py-4 rounded-2xl border transition-all duration-300
            ${scrolled 
              ? "bg-black/30 backdrop-blur-xl border-green/30 shadow-lg shadow-green/10" 
              : "bg-black/20 backdrop-blur-md border-green/20"
            }
          `}
          style={{ pointerEvents: 'auto' }}
        >
          {/* Logo */}
          <div className="flex-shrink-0 z-10">
            <NavbarLogo />
          </div>
        

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavbarLinks />
          </div>
          
          {/* Desktop CTA Button */}
          <div className="hidden lg:flex flex-shrink-0">
            <NavbarBtn />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden z-10">
            <NavbarToggler />
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="mt-3 px-6 py-6 bg-black/30 backdrop-blur-xl border border-green/30 rounded-2xl">
            <NavbarLinks />
            <div className="mt-6 pt-4 border-t border-green/20">
              <NavbarBtn />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
