import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Home, FolderKanban, User, Mail } from "lucide-react";
import Magnetic from "./Magnetic";

const menuItems = [
  { id: "home", label: "Home", Icon: Home, href: "/" },
  { id: "projects", label: "Projects", Icon: FolderKanban, href: "#projects" },
  { id: "about", label: "About", Icon: User, href: "#about" },
  { id: "contact", label: "Contact", Icon: Mail, href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  const handleItemClick = () => {
    setOpen(false);
  };

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

      {/* Hamburger Section (fixed button + menu) */}
      <div className="fixed top-6 right-10 z-50 flex items-center justify-center">
        {/* Wrapper just for positioning; Magnetic only affects the button */}
        <div className="relative select-none">
          {/* Hamburger + dot with Magnetic */}
          <Magnetic strength={3}>
            <div className="relative group p-4 cursor-pointer">
              {/* The Dot */}
              <span className="absolute left-1 bottom-2 w-2.5 h-2.5 bg-black rounded-full transition-transform duration-300 group-hover:scale-125 z-10" />

              {/* The Button */}
              <button
                type="button"
                aria-label="Open navigation menu"
                onClick={toggleMenu}
                className="relative w-14 h-14 bg-black rounded-full flex items-center justify-center group-hover:animate-liquid transition-all duration-300 hover:cursor-pointer"
              >
                {/* Parallax effect for the inner lines */}
                <Magnetic strength={1.5}>
                  <div className="flex flex-col gap-1.5 pointer-events-none">
                    <span className="block w-6 h-[2px] bg-white rounded-full" />
                    <span className="block w-6 h-[2px] bg-white rounded-full" />
                    <span className="block w-6 h-[2px] bg-white rounded-full" />
                  </div>
                </Magnetic>
              </button>
            </div>
          </Magnetic>

          {/* Floating circle menu (no Magnetic here) */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 0.05,
                    },
                  },
                  closed: {
                    transition: {
                      staggerChildren: 0.05,
                      staggerDirection: -1,
                    },
                  },
                }}
                className="absolute right-0 top-full mt-4 flex flex-col items-center gap-4 z-50 pointer-events-auto"
              >
                {menuItems.map(({ id, label, Icon, href }) => (
                  <div key={id} className="w-40 flex justify-end">
                    <motion.a
                      href={href}
                      onClick={handleItemClick}
                      variants={{
                        open: {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        },
                        closed: {
                          opacity: 0,
                          y: -10,
                          scale: 0.5,
                        },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                      className="group w-11 h-11 bg-black rounded-full flex items-center justify-end text-white shadow-lg overflow-hidden transition-all duration-300 ease-out hover:w-40"
                      aria-label={label}
                    >
                      <span className="ml-4 mr-2 text-sm opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out whitespace-nowrap">
                        {label}
                      </span>
                      <Icon className="w-4 h-4 mr-3 flex-shrink-0" />
                    </motion.a>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
