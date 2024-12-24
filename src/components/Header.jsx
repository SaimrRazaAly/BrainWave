import { brainwave } from "../assets";
import { navigation } from "../Constants";
import { useLocation } from "react-router-dom";
import Button from "../components/Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

import { disablePageScroll, enablePageScroll } from "scroll-lock";
const Header = () => {
  const pathname = useLocation();
  const [openNav, setOpenNav] = useState(true);

  const toggleNavigation = () => {
    if (openNav) {
      setOpenNav(false);
      enablePageScroll();
    } else {
      setOpenNav(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNav) return;
    setOpenNav(false);
    enablePageScroll();
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNav ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        {/* Logo */}
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="Brain" />
        </a>

        {/* Navigation */}
        <nav
          className={`${
            openNav ? "flex" : "hidden"
          } fixed top-[4.5rem] left-0 right-0 bottom-0 bg-n-8 
          lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center m-auto lg:flex-row">
            {navigation.map((value) => (
              <a
                key={value.id}
                href={value.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors
                  hover:text-color-1 ${
                    value.onlyMobile && "lg:hidden"
                  } px-6 py-6 md:py-8
                  lg:-mr-0.25 lg:text-xs lg:font-semibold
                  ${
                    value.url === pathname.hash
                      ? "z-2 lg:text-n-1"
                      : "lg:text-n-1/50"
                  }
                  lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {value.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        {/* Call-to-action buttons */}
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>
        {/* Mobile Menu Toggle */}
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNav} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
