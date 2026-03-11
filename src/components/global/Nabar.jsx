import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-[#efefef]">
      
      {/* Logo */}
      <div className="text-2xl font-extrabold tracking-tight">
        RBR
      </div>

      {/* Hamburger */}
      <div className="relative flex items-center justify-center">

        {/* dot */}
        <span className="absolute -left-2 bottom-1 w-2.5 h-2.5 bg-black rounded-full"></span>

        {/* circle */}
        <button className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
          <div className="flex flex-col gap-1.5">
            <span className="block w-7 h-[3px] bg-white rounded"></span>
            <span className="block w-7 h-[3px] bg-white rounded"></span>
            <span className="block w-7 h-[3px] bg-white rounded"></span>
          </div>
        </button>

      </div>

    </nav>
  );
};

export default Navbar;