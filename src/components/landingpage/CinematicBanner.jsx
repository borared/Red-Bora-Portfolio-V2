import React from "react";

export default function CinematicBanner() {
  return (
    <section className="relative w-full h-[75vh] overflow-hidden bg-black select-none">
      <img
        src="https://res.cloudinary.com/dicrvjstp/image/upload/v1793060755/Screenshot_2026-10-27_072527_mg2tsi.png"
        alt="Cinematic Interlude"
        className="w-full h-full object-cover object-center"
      />
      {/* Soft gradient transitions at top & bottom to seamlessly blend with adjacent sections */}
      <div className="absolute inset-x-0 top-0 h-20 sm:h-28 bg-gradient-to-b from-black to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-20 sm:h-28 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
