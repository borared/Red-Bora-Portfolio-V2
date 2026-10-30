import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import Magnetic from "./Magnetic";
import { optimizeBg } from "../../utils/cloudinary";

export default function Footer() {
  const footerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"],
  });

  // Vertical parallax scrolling shift
  const bgY = useTransform(scrollYProgress, [0, 1], ["-16%", "16%"]);

  return (
    <footer
      ref={footerRef}
      className="relative bg-black text-white overflow-hidden min-h-screen h-screen flex items-center justify-center"
    >
      {/* Background Image Layer with Parallax */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        {/* Base Image with Parallax Translation */}
        <motion.img
          style={{ y: bgY }}
          src={optimizeBg("https://res.cloudinary.com/dicrvjstp/image/upload/v1793260679/v2_bg_footer123_vd6qzc.jpg", 1920)}
          alt="Footer Background"
          loading="lazy"
          decoding="async"
          className="absolute -top-[20%] -bottom-[20%] inset-x-0 w-full h-[140%] object-cover object-left brightness-105 will-change-transform"
        />

        {/* Smooth Natural Darkening Gradient: 
            Left side stays clean and naturally bright (only 10% dark), 
            gradually falling into a deep dark backdrop on the right (85% dark) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/55 to-black/85 pointer-events-none" />

        {/* Subtle, soft ambient warmth on the subject without blown-out glow */}
        <div className="absolute top-1/2 left-[15%] -translate-y-1/2 w-[420px] h-[420px] bg-white/[0.06] rounded-full blur-[80px] pointer-events-none" />

        {/* Seamless edge gradients */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
      </div>

      {/* Inner container */}
      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-12 lg:px-8 flex flex-col items-center lg:items-end justify-center">

        {/* Content Box */}
        <div className="text-center lg:text-right flex flex-col items-center lg:items-end gap-4">
          <p
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-wider leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"
            style={{ fontFamily: '"Audiowide", cursive, sans-serif' }}
          >
            ©RBR.PORTFOLIO
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-end gap-4 mt-6">
            <Magnetic>
              <Link
                to="/contact"
                className="group relative block px-8 py-3.5 bg-[#ea580c] text-white font-bold rounded-full hover:scale-105 transition-all active:scale-95 shadow-2xl overflow-hidden cursor-pointer"
                style={{ fontFamily: '"Quantico", sans-serif' }}
              >
                <div className="absolute inset-0 bg-[#c2410c] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 rounded-full" />
                <span className="relative z-10 tracking-wider">Contact</span>
              </Link>
            </Magnetic>
            <Magnetic>
              <a
                href="/Red_Bora_Resume.pdf"
                download="Red_Bora_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-8 py-3.5 bg-black/40 backdrop-blur-md border-2 border-white/60 text-white font-bold rounded-full hover:border-white hover:bg-white/20 transition-all hover:scale-105 active:scale-95 shadow-xl tracking-wider cursor-pointer"
                style={{ fontFamily: '"Quantico", sans-serif' }}
              >
                Download my resume
              </a>
            </Magnetic>
          </div>
        </div>

      </div>
    </footer>
  );
}
