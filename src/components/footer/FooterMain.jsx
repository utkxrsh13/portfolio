import { Link } from "react-scroll";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";
import { BsTerminal } from "react-icons/bs";

const FooterMain = () => {
  const footerLinks = [
    {
      name: "About Me",
      section: "about",
    },
    {
      name: "Skills",
      section: "skills",
    },
    {
      name: "Experience",
      section: "experience",
    },
    {
      name: "Projects",
      section: "projects",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className="relative px-4 mb-8 mt-24">
      {/* Animated separator */}
      <div className="relative w-full h-[1px] bg-gradient-to-r from-transparent via-green to-transparent mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan to-transparent animate-pulse"></div>
      </div>

      {/* Main footer content */}
      <div className="max-w-[1200px] mx-auto">
        {/* Desktop Layout */}
        <div className="md:flex justify-between items-start sm:hidden">
          {/* Brand section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <BsTerminal className="text-green text-2xl" />
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green to-cyan">
                Utkarsh Tiwari
              </h3>
            </div>
            <p className="text-white/60 font-mono text-sm max-w-md">
              Frontend Developer crafting modern web experiences with cutting-edge technologies
            </p>
            
            {/* Tech icons */}
            <div className="flex gap-4 mt-2">
              <FaCode className="text-green/60 hover:text-green transition-colors duration-300 cursor-pointer" />
              <FaLaptopCode className="text-cyan/60 hover:text-cyan transition-colors duration-300 cursor-pointer" />
              <FaRocket className="text-yellow/60 hover:text-yellow transition-colors duration-300 cursor-pointer" />
            </div>
          </div>

          {/* Navigation links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white/80 font-semibold uppercase tracking-wider text-sm">
              Quick Navigation
            </h4>
            <ul className="flex flex-col gap-3 text-white/70">
              {footerLinks.map((item, index) => (
                <li key={index} className="group">
                  <Link
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-120}
                    to={item.section}
                    className="hover:text-green transition-all duration-300 cursor-pointer flex items-center gap-2 text-sm uppercase tracking-wide"
                  >
                    <span className="w-0 h-[1px] bg-green group-hover:w-4 transition-all duration-300"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile responsive content */}
        <div className="md:hidden sm:flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-3">
            <BsTerminal className="text-green text-xl" />
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green to-cyan">
              Utkarsh Tiwari
            </h3>
          </div>
          
          <div className="flex gap-6 text-white/70">
            {footerLinks.map((item, index) => (
              <Link
                key={index}
                spy={true}
                smooth={true}
                duration={500}
                offset={-120}
                to={item.section}
                className="hover:text-green transition-all duration-300 cursor-pointer text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex md:flex-row sm:flex-col items-center justify-between mt-12 pt-8 border-t border-green/20 gap-4">
          <p className="text-white/40 font-mono text-xs">
            <span className="text-green">console.log(</span>
            &quot;Built with ❤️ and lots of ☕&quot;
            <span className="text-green">);</span>
          </p>
          
          <p className="text-white/40 text-xs font-mono">
            © {currentYear} Utkarsh Tiwari | All Rights Reserved
          </p>
        </div>

        {/* Decorative tech elements */}
        <div className="absolute top-4 left-4 text-green/20 text-xs font-mono">
          &lt;/footer&gt;
        </div>
        <div className="absolute top-4 right-4 text-cyan/20 text-xs font-mono">
          &lt;developer/&gt;
        </div>
      </div>

      {/* Background tech pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute bottom-10 left-10 text-6xl text-green animate-pulse">
          {'{}'}
        </div>
        <div className="absolute bottom-20 right-20 text-4xl text-cyan animate-pulse">
          {'</>'}
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
