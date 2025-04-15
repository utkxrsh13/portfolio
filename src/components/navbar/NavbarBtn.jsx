import { Link } from "react-scroll";
// import { LuArrowDownRight } from "react-icons/lu";
import Button from "../ui/Button";

const NavbarBtn = () => {
  return (
    <button className="  rounded-full text-xl font-bold font-body text-black border flex items-center gap-1 bg-gradient-to-r  from-darkCyan to-orange transition-all duration-500 hover:scale-110  cursor-pointer hover:shadow-cyanShadow">
      <Link spy={true} smooth={true} duration={500} offset={-120} to="contact">
        <Button />
      </Link>
      {/* <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div> */}
    </button>
  );
};

export default NavbarBtn;
