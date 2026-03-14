import React from "react";
import { motion } from "framer-motion";

export default function RecentlyWork() {
  return (
    <section className="bg-white px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <h2
          className="text-center text-3xl md:text-4xl font-black tracking-tight mb-12"
          style={{ fontFamily: '"Stretch Pro", sans-serif' }}
        >
          RECENTLY WORK
        </h2>

        {/* Content layout */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left: text content */}
          <div className="w-full md:w-1/2 space-y-5">
            <div className="space-y-1">
              <h3
                className="text-2xl md:text-5xl font-extrabold text-red-500"
                style={{ fontFamily: '"Mooli", sans-serif' }}
              >
                NaekWatch
              </h3>
              <p className="text-sm md:text-xl font-medium text-neutral-500">
                Movie Streaming Online
              </p>
            </div>

            <p className="text-sm md:text-xl leading-relaxed text-neutral-600 max-w-md">
              NaekWatch is a group startup project, OTT platform for providing
              movie online service through user device for a better experience
              of watching movie with friendly UX/UI and less drama behavior.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Demo button */}
              <button className="inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-2.5 text-sm md:text-base font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black transition hover:cursor-pointer">
                <span>Demo</span>
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>

              {/* Collaborator button */}
              <button className="hover:cursor-pointer inline-flex items-center gap-2 rounded-full border border-black text-black px-6 py-2.5 text-sm md:text-base font-medium bg-white hover:bg-black hover:text-white hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black transition">
                <span>Collaborator</span>
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h7.5c-.31-.45-.5-.97-.5-1.5 0-1.38.7-2.59 1.76-3.32C9.11 13.45 8.5 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 2.09 1.97 3.62 0 .53-.11 1.05-.29 1.52H23v-1.5C23 14.17 18.33 13 16 13z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Right: image */}
          <motion.div
            className="w-full md:w-[70%] flex justify-center"
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-2xl overflow-hidden">
              <img
                src="https://res.cloudinary.com/dicrvjstp/image/upload/v1773420947/NaekMac_xh6jgu.jpg"
                alt="NaekWatch mockup"
                className="w-full h-auto block"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}