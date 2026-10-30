import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { optimizeBg } from "../../utils/cloudinary";

export default function CinematicBanner() {
  const bannerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.14, 1.04, 1.14]);

  return (
    <section
      ref={bannerRef}
      className="relative w-full h-[75vh] overflow-hidden bg-black select-none z-10"
    >
      <motion.img
        style={{ y, scale }}
        src={optimizeBg("https://res.cloudinary.com/dicrvjstp/image/upload/v1793060755/Screenshot_2026-10-27_072527_mg2tsi.png", 1920)}
        alt="Cinematic Interlude"
        loading="lazy"
        decoding="async"
        className="absolute -top-[20%] -bottom-[20%] inset-x-0 w-full h-[140%] object-cover object-center will-change-transform"
      />
      {/* Soft gradient transitions at top & bottom to seamlessly blend with adjacent sections */}
      <div className="absolute inset-x-0 top-0 h-24 sm:h-32 bg-gradient-to-b from-black via-black/60 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none z-10" />
    </section>
  );
}

