import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-6 ">
      
      {/* Logo */}
      <div className="text-2xl font-extrabold tracking-tight">
        RBR
      </div>

      {/* Hamburger */}
      <div className="relative flex items-center justify-center">

        {/* dot */}
        <span className="absolute -left-2 -bottom-1 w-2.5 h-2.5 bg-black rounded-full"></span>

        {/* circle */}
        <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
          <div className="flex flex-col gap-1">
            <span className="block w-4 h-[2px] bg-white"></span>
            <span className="block w-4 h-[2px] bg-white"></span>
            <span className="block w-4 h-[2px] bg-white"></span>
          </div>
        </button>
      </div>


    </nav>
  );
};

export default Navbar;