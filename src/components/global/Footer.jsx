import React from "react";
import { Link } from "react-router-dom";
import Magnetic from "./Magnetic";
import resumePDF from "../../fileCV/Red Bora CV (2).pdf";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden min-h-screen h-screen flex items-center justify-center">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="https://res.cloudinary.com/dicrvjstp/image/upload/v1793061680/v2_bg_footer1_k1qkbx.jpg"
          alt="Footer Background"
          className="w-full h-full object-cover object-left brightness-105"
        />
        {/* Subtle dark tint for seamless transitions while keeping bg bright */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
      </div>

      {/* Inner container */}
      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-12 lg:px-8 flex flex-col items-center lg:items-end justify-center">

        {/* Content Box */}
        <div className="text-center lg:text-right flex flex-col items-center lg:items-end gap-4">
          <p
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-wider leading-tight drop-shadow-[0_2px_12px_rgba(255,255,255,0.5)]"
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
                href={resumePDF}
                download="Red_Bora_CV.pdf"
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
