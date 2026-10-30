import React from "react";
import { motion } from "framer-motion";
import Magnetic from "../global/Magnetic";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Buildme() {
  return (
    <section className="relative z-10 bg-black text-white rounded-t-[50px] sm:rounded-t-[80px] md:rounded-t-[110px] -mt-12 sm:-mt-16 py-24 sm:py-32 md:py-40 overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.85)]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#ea580c]/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Status Tag */}
        <div className="flex items-center gap-2 mb-6 sm:mb-8 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#ea580c] animate-pulse" />
          <span
            className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] text-[#ea580c] uppercase"
            style={{ fontFamily: '"Space Mono", monospace' }}
          >
            AVAILABILITY: OPEN FOR SELECT PROJECTS
          </span>
        </div>

        <h2
          className="text-white text-3xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 sm:mb-8 leading-tight drop-shadow-xl"
          style={{ fontFamily: '"Mooli", sans-serif' }}
        >
          Wanna Build Your Project?
        </h2>

        <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-xl mb-10 leading-relaxed font-mono">
          From high-performance frontend interfaces to full-stack real-time web engines. Let&apos;s turn complex ideas into refined digital products.
        </p>

        <Magnetic strength={2.5}>
          <Link 
            to="/contact" 
            className="group relative inline-flex items-center gap-3 bg-[#ea580c] text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full overflow-hidden hover:scale-105 active:scale-95 transition-transform shadow-xl shadow-[#ea580c]/25 cursor-pointer"
          >
            <div className="absolute inset-0 bg-[#c2410c] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 rounded-full" />
            <span 
              className="relative z-10 text-base sm:text-lg font-bold tracking-wider uppercase"
              style={{ fontFamily: '"Quantico", sans-serif' }}
            >
              Start a Project
            </span>
            <ArrowUpRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </Magnetic>
      </motion.div>
    </section>
  );
}