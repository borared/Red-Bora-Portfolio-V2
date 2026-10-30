import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const itemVariants = {
  hidden: {
    x: 160,
    opacity: 0,
    backgroundColor: "#ea580c",
    color: "#000000",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.4)",
  },
  visible: {
    x: 0,
    opacity: 1,
    backgroundColor: [
      "#ea580c",
      "#ea580c",
      "rgba(234, 88, 12, 0)",
    ],
    color: [
      "#000000",
      "#000000",
      "#ffffff",
    ],
    boxShadow: [
      "0 20px 25px -5px rgba(0, 0, 0, 0.4)",
      "0 20px 25px -5px rgba(0, 0, 0, 0.4)",
      "0 0px 0px 0px rgba(0, 0, 0, 0)",
    ],
    transition: {
      x: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
      opacity: { duration: 0.3 },
      backgroundColor: {
        duration: 2.1,
        times: [0, 0.65, 1],
        ease: "easeInOut",
      },
      color: {
        duration: 2.1,
        times: [0, 0.65, 1],
        ease: "easeInOut",
      },
      boxShadow: {
        duration: 2.1,
        times: [0, 0.65, 1],
        ease: "easeInOut",
      },
    },
  },
};

export default function Greeting() {
  const greetingRef = useRef(null);

  // Parallax scroll tracking for Greeting section
  const { scrollYProgress } = useScroll({
    target: greetingRef,
    offset: ["start end", "end start"],
  });

  // Layered parallax transformations
  // Background moves through the frame at differential rate
  const bgY = useTransform(scrollYProgress, [0, 1], ["-22%", "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.16, 1.04, 1.16]);

  // Content depth drift
  const contentY = useTransform(scrollYProgress, [0, 0.5, 1], ["70px", "0px", "-70px"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.65, 1, 1, 0.65]);

  // Cyber telemetry HUD parallax drift on left
  const hudY = useTransform(scrollYProgress, [0, 1], ["-70px", "70px"]);

  return (
    <section
      ref={greetingRef}
      className="relative min-h-screen h-screen flex items-center justify-end px-8 md:px-16 lg:px-24 overflow-hidden z-10 shadow-[0_-25px_60px_rgba(0,0,0,0.85)]"
    >
      {/* Parallax Background Layer */}
      <motion.div
        style={{
          y: bgY,
          scale: bgScale,
          backgroundImage:
            "url('https://res.cloudinary.com/dicrvjstp/image/upload/v1792860604/Screenshot_2026-10-24_234817_hki36w.png')",
        }}
        className="absolute -top-[25%] -bottom-[25%] -left-[5%] -right-[5%] bg-cover bg-center bg-no-repeat will-change-transform pointer-events-none"
      />

      {/* Atmospheric depth vignettes and top shadow for smooth transition from Hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/65 pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none z-[1]" />

      {/* Parallax Cyber Telemetry Accent (Left side) */}
      <motion.div
        style={{ y: hudY }}
        className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3.5 z-10 pointer-events-none select-none opacity-85"
      >
        <div className="flex items-center gap-2">
          <span
            className="text-[10px] font-mono font-bold text-[#ea580c]"
            style={{ fontFamily: '"Space Mono", monospace' }}
          >
            [//]
          </span>
          <span
            className="text-[10px] font-bold tracking-[0.25em] text-[#ea580c] uppercase"
            style={{ fontFamily: '"Quantico", sans-serif' }}
          >
            SYS // 2050 · GREETING
          </span>
        </div>
        <div className="h-16 w-[1.5px] bg-gradient-to-b from-[#ea580c] via-white/20 to-transparent ml-1" />
        <div
          className="text-[9px] font-mono tracking-widest text-white/50 leading-relaxed uppercase ml-1"
          style={{ fontFamily: '"Space Mono", monospace' }}
        >
          ENTRY: IDENTIFIED
          <br />
          ZONE: BORA&apos;S WORLD
          <br />
          STATUS: ONLINE
        </div>
      </motion.div>

      {/* Content Container with Parallax & Entrance animation */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-7xl w-full flex justify-end"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
          className="w-auto flex flex-col items-start gap-4 md:gap-5 text-left"
          style={{ fontFamily: '"Audiowide", cursive, sans-serif' }}
        >
          {/* Container 1: Hello Visitor */}
          <motion.div
            variants={itemVariants}
            className="w-fit px-4 sm:px-6 py-2 rounded-lg md:rounded-xl"
          >
            <p
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-wide whitespace-nowrap block drop-shadow-2xl"
              style={{ WebkitTextStroke: "0.2px currentColor" }}
            >
              Greeting Visitor
            </p>
          </motion.div>

          {/* Container 2: Welcome to */}
          <motion.div
            variants={itemVariants}
            className="w-fit px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl md:rounded-2xl"
          >
            <h1
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none whitespace-nowrap block drop-shadow-2xl"
              style={{ WebkitTextStroke: "0.5px currentColor" }}
            >
              Welcome to
            </h1>
          </motion.div>

          {/* Container 3: Bora's World */}
          <motion.div
            variants={itemVariants}
            className="w-fit px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl md:rounded-2xl"
          >
            <h1
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none whitespace-nowrap block drop-shadow-2xl"
              style={{ WebkitTextStroke: "0.5px currentColor" }}
            >
              Bora&apos;s World
            </h1>
          </motion.div>

          {/* Container 4: 2050 */}
          <motion.div
            variants={itemVariants}
            className="w-fit px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl md:rounded-2xl"
          >
            <h1
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none whitespace-nowrap block drop-shadow-2xl"
              style={{ WebkitTextStroke: "0.5px currentColor" }}
            >
              Year 2050
            </h1>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}