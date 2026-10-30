import React from "react";

export default function Model2D() {
  return (
    <section className="relative w-full bg-black overflow-hidden py-8 sm:py-14">
      {/* Top transition gradient */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-950">
          {/* Header pill */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center gap-2 px-3 py-1 bg-black/80 border border-white/20 backdrop-blur-md rounded-full pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]" />
            <span
              className="text-[9px] font-mono tracking-widest text-neutral-300 uppercase"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              ARCHIVE // 2D CONCEPT ART
            </span>
          </div>

          <img
            src="https://res.cloudinary.com/dicrvjstp/image/upload/v1776180835/githubmodel_tjgenb.jpg"
            alt="Model 2D Characters"
            className="w-full h-auto object-cover block hover:scale-[1.01] transition-transform duration-700"
          />

          {/* Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Bottom transition gradient to Footer */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
    </section>
  );
}

