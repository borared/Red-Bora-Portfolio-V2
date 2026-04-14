import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const journeyData = [
  {
    id: 1,
    degree: "Bachelor of Computer Science",
    school: "Cambodia Academy of Digital Technology (CADT)",
    specialize: "Software Engineer",
    focus: "Full Stack Development",
    year: "2024 - Present",
    image: "https://res.cloudinary.com/dicrvjstp/image/upload/v1776186397/CCADDTT_wisnb5.jpg"
  },
  {
    id: 2,
    degree: "High School Diploma",
    school: "Prek Loung High School",
    specialize: "Science",
    focus: "Mathematics & Physics",
    grade: "A 99.403",
    year: "2022 - 2024",
    image: "https://res.cloudinary.com/dicrvjstp/image/upload/v1776187055/HighSchool_kemxz2.jpg"
  },
  {
    id: 3,
    degree: "English Program",
    school: "Pannasastra University of Cambodia (PUC)",
    specialize: "English",
    focus: "Communication",
    year: "2023 - 2024",
    image: "https://res.cloudinary.com/dicrvjstp/image/upload/v1776187055/pannasastra_g36sve.jpg"
  },
  {
    id: 4,
    degree: "Next-Gen Program Batch II",
    school: "Cambodia Academy of Digital Technology (CADT)",
    specialize: "Technology",
    focus: "Frontend Development",
    year: "5 weeks (Aug-Sep 2025)",
    image: "https://res.cloudinary.com/dicrvjstp/image/upload/v1776187073/Next-Gen_atqdcj.jpg"
  }
];

export default function EduJourney() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % journeyData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + journeyData.length) % journeyData.length);
  };

  // Auto-slide every 15 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 15000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const currentItem = journeyData[currentIndex];

  return (
    <section id="education" className="bg-[#fdfcf9] py-20 px-6 md:px-10 lg:px-16">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <motion.h2
          className="text-5xl md:text-6xl font-black text-black mb-4 leading-tight"
          style={{ fontFamily: '"Stretch Pro", sans-serif' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          EDUCATIOON
        </motion.h2>
        <motion.p
          className="text-neutral-500 text-base md:text-lg leading-relaxed cursor-default"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          My academic journey, building the core foundation of my knowledge.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-black"
        >
          {/* Animated Slide Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {/* Background Image */}
              <img
                src={currentItem.image}
                alt={currentItem.school}
                className="w-full h-full object-cover"
              />
              
              {/* Gradient Overlay & Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-10 pb-12">
                <div className="max-w-4xl">
                  <h3 className="text-white font-bold text-2xl md:text-4xl mb-2 cursor-pointer">
                    {currentItem.degree}
                  </h3>
                  
                  <p className="text-white/90 text-lg md:text-xl font-medium mb-6 cursor-pointer">
                    {currentItem.school}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-6 cursor-pointer">
                    <span className="bg-[#bbcefb] text-[#3056b7] text-sm md:text-base font-semibold px-4 py-1.5 rounded-full shadow-sm">
                      Specialize: {currentItem.specialize}
                    </span>
                    <span className="bg-[#bbcefb] text-[#3056b7] text-sm md:text-base font-semibold px-4 py-1.5 rounded-full shadow-sm">
                      Focus: {currentItem.focus}
                    </span>
                    {currentItem.grade && (
                      <span className="bg-[#bbcefb] text-[#3056b7] text-sm md:text-base font-semibold px-4 py-1.5 rounded-full shadow-sm">
                        Grade: {currentItem.grade}
                      </span>
                    )}
                  </div>

                  <div className="text-white font-bold text-xl md:text-2xl mt-4 cursor-pointer">
                    {currentItem.year}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute bottom-8 right-6 md:right-10 flex items-center gap-3 z-10">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white transition-colors border border-white/20 shadow-lg"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white transition-colors border border-white/20 shadow-lg"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Progress Bar - Runs for 15s */}
          <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/20 z-10">
            <motion.div
              key={currentIndex}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 15, ease: "linear" }}
              className="h-full bg-[#3056b7]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
