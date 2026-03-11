import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * Magnetic Wrapper: 
 * Calculates mouse position relative to the element center 
 * and applies a spring-based translation.
 */
const Magnetic = ({ children, strength = 3 }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const x = (clientX - centerX) / strength;
    const y = (clientY - centerY) / strength;
    setPosition({ x, y });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-6">
      {/* Logo */}
      <a 
        href="#" 
        className="text-2xl tracking-tight text-black"
        style={{ fontFamily: '"Stretch Pro", sans-serif' }}
      >
        RBR
      </a>

      {/* Hamburger Section */}
      <div className="relative flex items-center justify-center">
        <Magnetic strength={3}>
          {/* The 'group' class is here so that hovering anywhere near 
              the button triggers the dot's scale animation.
          */}
          <div className="relative group p-4 cursor-pointer">
            
            {/* The Dot */}
            <span className="absolute left-1 bottom-2 w-2.5 h-2.5 bg-black rounded-full transition-transform duration-300 group-hover:scale-125 z-10" />

            {/* The Button */}
            <button
              className="
                relative w-14 h-14 bg-black rounded-full
                flex items-center justify-center
                group-hover:animate-liquid
                transition-all duration-300 hover:cursor-pointer
              "
            >
              {/* Parallax effect for the inner lines */}
              <Magnetic strength={1.5}>
                <div className="flex flex-col gap-1.5 pointer-events-none">
                  <span className="block w-6 h-[2px] bg-white rounded-full"></span>
                  <span className="block w-6 h-[2px] bg-white rounded-full"></span>
                  <span className="block w-6 h-[2px] bg-white rounded-full"></span>
                </div>
              </Magnetic>
            </button>
          </div>
        </Magnetic>
      </div>
    </nav>
  );
};

export default Navbar;