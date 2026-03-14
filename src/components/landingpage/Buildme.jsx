import React from "react";
import { motion } from "framer-motion";
import Magnetic from "../global/Magnetic";

export default function Buildme() {
  return (
    <section className="relative z-10 bg-black rounded-t-[150px] mt-[120px] min-h-[150vh] overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto px-6 pt-[600px] pb-24 md:px-12 lg:px-24 flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2
          className="text-white text-3xl md:text-4xl font-black tracking-tight mb-8"
          style={{ fontFamily: '"Mooli", sans-serif' }}
        >
          Wanna Build Your Project?
        </h2>

        <Magnetic strength={2}>
          <button className="hover:cursor-pointer inline-flex items-center justify-center rounded-full bg-white text-black px-8 py-3 text-sm font-semibold tracking-wide shadow-lg shadow-black/20 hover:shadow-xl transition">
            Build me project
          </button>
        </Magnetic>
      </motion.div>
    </section>
  );
}
