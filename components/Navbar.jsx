import Image from "next/image";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navbg, setNavbg] = useState(false);

  const changeNavbg = () => {
    if (window.scrollY >= 50) {
      setNavbg(true);
    } else {
      setNavbg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbg);
  });

  return (
    <nav
      className={
        navbg
          ? "fixed w-full z-10 bg-black duration-300 ease-in-out"
          : "fixed w-full z-10 bg-transparent duration-300 ease-in-out"
      }
    >
      <div className="flex w-full justify-center items-center px-[100px]">
        <div className="flex w-full max-w-[1720px] justify-between  py-[35px] ">
          <Image src="/Dips-logo.svg" height={75} width={224} alt="dips-logo" />
          <div className="flex gap-[60px] items-center">
            <ul className="font-noto flex gap-10 items-center text-white text-[15px]">
              <li>
                <Link
                  activeClass="active"
                  to="Home"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={100}
                  className="hover:text-primary duration-300 ease-in-out cursor-pointer"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="Services"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={100}
                  className="hover:text-primary duration-300 ease-in-out cursor-pointer"
                >
                  SERVICES
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="Workflow"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={100}
                  className="hover:text-primary duration-300 ease-in-out cursor-pointer"
                >
                  WORK FLOW
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="Portfolio"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={100}
                  className="hover:text-primary duration-300 ease-in-out cursor-pointer"
                >
                  PORTFOLIO
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={100}
                  className="hover:text-primary duration-300 ease-in-out cursor-pointer"
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="Value"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={100}
                  className="hover:text-primary duration-300 ease-in-out cursor-pointer"
                >
                  OUR VALUE
                </Link>
              </li>
            </ul>
            <span className="font-sa text-white text-[26px]">
              +62 21 858 3944
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
