import React from "react";
import { motion } from "framer-motion";

export default function MoreDetailAbout() {
  return (
    <section className="relative z-10 bg-black min-h-[100vh] py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.h2
          className="text-white text-3xl md:text-4xl font-black tracking-tight mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            fontFamily: "Mooli",
          }}
        >
          Or you want to know <br /> me more in detail
        </motion.h2>

        <motion.div
          className="w-full rounded-[32px] bg-white p-10 md:p-14 shadow-xl shadow-black/20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          {/* Add your detailed content here */}
          {/* <p className="text-black/70 text-base md:text-lg leading-relaxed">
            Here you can share a deeper dive into your story, your skills, your
            process, or anything you want people to know when they’re
            considering working with you.
          </p> */}
          <img src="https://res.cloudinary.com/dicrvjstp/image/upload/v1773494163/Screenshot_2026-03-14_201443_rwhkos.png" alt=""/>
        </motion.div>
      </div>
    </section>
  );
}
