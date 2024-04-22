import React from "react";

import MobileMenu from "./MobileMenu";
import LaptopLinks from "./LaptopLinks";

const Header = () => {
  return (
    <div className="fixed top-2 w-[100%] z-10 shadow-md shadow-black px-3 rounded-lg py-2">
      <div className="hidden md:block">
        {/*  */}
        <LaptopLinks />
      </div>
      <div className="block md:hidden">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Header;
