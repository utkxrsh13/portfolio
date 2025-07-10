import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const NavbarToggler = () => {
  const dispatch = useDispatch();

  const setToggleMenu = () => {
    dispatch(toggleMenu());
  };
  
  return (
    <button
      className="relative text-xl p-3 border border-green/50 rounded-xl bg-black/20 backdrop-blur-sm hover:border-green hover:bg-green/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green/20 group"
      onClick={setToggleMenu}
    >
      <GiHamburgerMenu className="text-green group-hover:text-white transition-colors duration-300" />
      
      {/* Animated background effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green/0 via-green/20 to-green/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  );
};

export default NavbarToggler;
