import Image from "next/image";
import React from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";
export const NavBar = () => {
  return (
    <header className="w-full py-10 px-5 flex justify-between items-center">
      <nav className="w-full flex screen-max-width ">
        <Image src={appleImg} alt="Apple Logo" width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((tab, index) => (
            <div className="px-5 text-sm cursor-pointer text-gray hover:text-neutral-50 transition-all" key={index} >
              {tab}
            </div>
          ))}
        </div>
        <div className="flex  items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <Image src={searchImg} alt="search" width={18} height={18} />
          <Image src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};
