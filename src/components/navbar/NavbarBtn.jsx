import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";

const NavbarBtn = () => {
  return (
    <div className="relative group">
      <button 
        className="relative overflow-hidden rounded-xl px-6 py-3 text-sm font-bold font-body text-black border-2 border-green bg-gradient-to-r from-green to-cyan transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green/30 flex items-center gap-2"
        data-cursor="pointer"
        data-cursor-text="CONTACT"
      >
        <Link spy={true} smooth={true} duration={500} offset={-120} to="contact" className="relative z-10">
          <div className="flex items-center gap-2">
            <span>Let&apos;s Talk</span>
            <HiArrowDown className="text-sm group-hover:translate-y-1 transition-transform duration-300" />
          </div>
        </Link>
        
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan to-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
      
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-green to-cyan rounded-xl opacity-20 group-hover:opacity-40 blur transition-opacity duration-300 -z-10"></div>
    </div>
  );
};

export default NavbarBtn;
