import { useState } from "react";
import { close, logo, menu } from "../../assets";
import { navLinks } from "../../constants";
import ThemeToggleButton from "../ThemeToggleButton";


const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center navbar">
      <img src={logo} alt="teqard" className="md:w-[10vw] md:h-[13vh] w-[35vw] h-[12vh] md:pt-0 pt-2 -mt-1 md:mt-0 " />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} ${
              active === nav.title ? "active-item" : ""
            }`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}

        {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <ThemeToggleButton/> */}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
      {/* <ThemeToggleButton/> //Need more surpervision */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-blue-400 z-20 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-dimblack" : "text-white"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"} ${
                  active === nav.title ? "active-item" : ""
                }`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
