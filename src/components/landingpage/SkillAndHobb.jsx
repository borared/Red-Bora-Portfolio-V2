import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const codeData = [
  { label: "LANGS", items: "JavaScript · Java · C · C++" },
  { label: "FRONT", items: "React · Vite · Next.js" },
  { label: "BACK", items: "Node.js" },
  { label: "DATA", items: "MySQL · PostgreSQL" },
  { label: "TOOLS", items: "Figma · Photoshop · VSCode · Antigravity · Cursor" },
];

const cultureData = [
  { label: "WATCH", items: "MARVEL · DC · Anime" },
  { label: "SOUND", items: "The Weeknd · Joji · Timeless" },
  { label: "INSTRUMENT", items: "Guitar" },
  { label: "WEAR", items: "Vintage" },
  { label: "CITY", items: "AreySkat · Cambodia" },
];

export default function SkillAndHobb() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: { 
      scaleY: 1, 
      transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  const horizontalLineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1, 
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const headerWordVariants = {
    hidden: { y: "125%" },
    visible: { 
      y: "0%", 
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  const labelVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const rowContentVariants = {
    hidden: { y: "125%" },
    visible: { 
      y: "0%", 
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="overflow-hidden bg-white min-h-screen relative flex items-center justify-center py-24 px-6 md:px-12 xl:px-24 overflow-hidden z-10 w-full" 
      id="skill-and-hobb"
    >
      <motion.div 
        className="max-w-[90rem] w-full mx-auto grid grid-cols-1 md:grid-cols-2 relative gap-y-16 md:gap-y-0"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Vertical Middle Line Divider */}
        <motion.div 
          variants={lineVariants}
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#ff3e00] origin-top -translate-x-1/2"
        />

        {/* --- LEFT COLUMN: THE CODE --- */}
        <div className="flex flex-col pr-0 md:pr-16 lg:pr-32">
          
          <div className="flex flex-col mb-16 space-y-10 lg:space-y-16 relative">
            <motion.div variants={labelVariants} className="text-[#ff3e00] text-xs font-mono uppercase font-bold tracking-[0.2em]" style={{ fontFamily: "'Space Mono', monospace" }}>
              / WHO AM I / RED BORA
            </motion.div>
            
            <motion.div variants={labelVariants} className="text-[#ff3e00] text-xs font-mono uppercase font-bold tracking-[0.2em]" style={{ fontFamily: "'Space Mono', monospace" }}>
              THE CODE
            </motion.div>

            <h2 className="text-6xl sm:text-7xl lg:text-[7rem] font-bold text-neutral-900 leading-[0.85] tracking-tighter uppercase font-sans">
              <div className="overflow-hidden py-1"><motion.div variants={headerWordVariants}>WHAT</motion.div></div>
              <div className="overflow-hidden py-1"><motion.div variants={headerWordVariants}>I BUILD</motion.div></div>
            </h2>
          </div>

          <div className="flex flex-col w-full relative">
            {codeData.map((item, index) => (
              <div key={index} className="flex flex-row items-baseline py-5 overflow-hidden relative">
                {/* Horizontal Line Drawer */}
                <motion.div 
                  variants={horizontalLineVariants}
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-neutral-200 origin-left" 
                />
                
                <div className="w-[140px] md:w-[130px] shrink-0 overflow-hidden">
                  <motion.span variants={rowContentVariants} className="text-[#ff3e00] text-xs font-mono font-bold tracking-widest uppercase block" style={{ fontFamily: "'Space Mono', monospace" }}>
                    {item.label}
                  </motion.span>
                </div>
                <div className="flex-1 overflow-hidden">
                  <motion.span variants={rowContentVariants} className="text-neutral-900 text-sm md:text-base font-mono block" style={{ fontFamily: "'Space Mono', monospace" }}>
                    {item.items}
                  </motion.span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- RIGHT COLUMN: THE CULTURE --- */}
        <div className="flex flex-col pl-0 md:pl-16 lg:pl-32">
          
          <div className="flex flex-col mb-16 space-y-10 lg:space-y-16 relative md:mt-[6.5rem]">
            <motion.div variants={labelVariants} className="text-[#ff3e00] text-xs font-mono uppercase font-bold tracking-[0.2em]" style={{ fontFamily: "'Space Mono', monospace" }}>
              THE CULTURE
            </motion.div>
            
            <h2 className="text-6xl sm:text-7xl lg:text-[7rem] font-bold text-neutral-900 leading-[0.85] tracking-tighter uppercase font-sans">
              <div className="overflow-hidden py-1"><motion.div variants={headerWordVariants}>WHAT</motion.div></div>
              <div className="overflow-hidden py-1"><motion.div variants={headerWordVariants}>MOVES ME</motion.div></div>
            </h2>
          </div>

          <div className="flex flex-col w-full relative">
            {cultureData.map((item, index) => (
              <div key={index} className="flex flex-row items-baseline py-5 overflow-hidden relative">
                {/* Horizontal Line Drawer */}
                <motion.div 
                  variants={horizontalLineVariants}
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-neutral-200 origin-left" 
                />
                
                <div className="w-[140px] md:w-[130px] shrink-0 overflow-hidden">
                  <motion.span variants={rowContentVariants} className="text-[#ff3e00] text-xs font-mono font-bold tracking-widest uppercase block" style={{ fontFamily: "'Space Mono', monospace" }}>
                    {item.label}
                  </motion.span>
                </div>
                <div className="flex-1 overflow-hidden">
                  <motion.span variants={rowContentVariants} className="text-neutral-900 text-sm md:text-base font-mono block" style={{ fontFamily: "'Space Mono', monospace" }}>
                    {item.items}
                  </motion.span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </motion.div>
    </section>
  );
}
