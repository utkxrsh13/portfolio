const NavbarLogo = () => {
  return (
    <div className="relative group cursor-pointer">
      {/* Desktop Logo */}
      <div className="hidden md:block">
        <h1 className="text-2xl lg:text-3xl font-mono font-bold tracking-wider transition-all duration-300 group-hover:scale-105">
          <span className="text-green relative">
            UT
            <span className="absolute -top-1 -right-1 text-xs text-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              01
            </span>
          </span>
          <span className="text-white group-hover:text-cyan transition-colors duration-300">
            KARSH
          </span>
        </h1>
        {/* Underline effect */}
        <div className="h-0.5 w-0 bg-gradient-to-r from-green to-cyan transition-all duration-300 group-hover:w-full"></div>
      </div>

      {/* Mobile Logo */}
      <div className="block md:hidden">
        <h1 className="text-3xl font-mono font-bold relative">
          <span className="text-green">UT</span>
          <span className="absolute -top-1 -right-1 text-xs text-cyan opacity-60">01</span>
        </h1>
      </div>

      {/* Subtle background glow on hover */}
      <div className="absolute inset-0 -z-10 bg-green/5 rounded-lg scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
    </div>
  );
};

export default NavbarLogo;
