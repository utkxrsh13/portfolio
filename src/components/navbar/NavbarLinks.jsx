import { useDispatch } from "react-redux";
import { closeMenu } from "../../state/menuSlice";

const links = [
  { link: "Home", section: "hero" },
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  const dispatch = useDispatch();

  const handleLinkClick = (section, e) => {
    e.preventDefault();
    
    // Check if element exists
    const element = document.getElementById(section);
    
    if (element) {
      // Manual smooth scroll
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu when a link is clicked
    dispatch(closeMenu());
  };

  return (
    <div className="relative overflow-hidden">
      <ul className="flex lg:flex-row flex-col lg:gap-8 gap-3 text-white font-body lg:items-center">
        {links.map((link, index) => {
          return (
            <li key={index} className="group relative overflow-hidden">
              <button
                onClick={(e) => handleLinkClick(link.section, e)}
                className="cursor-pointer text-white/80 hover:text-green transition-all duration-300 font-medium tracking-wide uppercase text-sm lg:hover:scale-105 relative z-10 bg-transparent border-none outline-none py-3 lg:py-2 px-0 w-full lg:w-auto text-left lg:text-center block"
                style={{ pointerEvents: 'auto' }}
              >
                {link.link}
              </button>
              
              {/* Underline effect */}
              <div className="absolute bottom-1 lg:bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-green to-cyan group-hover:w-full transition-all duration-300 ease-out"></div>
              
              {/* Glow effect on hover - contained within bounds */}
              <div className="absolute inset-0 rounded-md bg-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 transform-gpu"></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavbarLinks;
