import React from "react";
import { motion } from "framer-motion";

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
  return (
    <section
      className="relative min-h-screen h-screen flex items-center justify-end px-8 md:px-16 lg:px-24 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dicrvjstp/image/upload/v1792860604/Screenshot_2026-10-24_234817_hki36w.png')",
      }}
    >
      <div className="relative z-10 max-w-7xl w-full flex justify-end">
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
      </div>
    </section>
  );
}