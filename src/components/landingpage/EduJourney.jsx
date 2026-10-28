import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const journeyData = [
  {
    id: 1,
    degree: "Bachelor of Computer Science",
    school: "Cambodia Academy of Digital Technology (CADT)",
    specialize: "Software Engineer",
    focus: "Full Stack Development",
    year: "2024 - Present",
    image: "https://res.cloudinary.com/dicrvjstp/image/upload/v1776186397/CCADDTT_wisnb5.jpg",
  },
  {
    id: 2,
    degree: "High School Diploma",
    school: "Prek Loung High School",
    specialize: "Science",
    focus: "Mathematics & Physics",
    grade: "A 99.403",
    year: "2022 - 2024",
    image: "https://res.cloudinary.com/dicrvjstp/image/upload/v1776187055/HighSchool_kemxz2.jpg",
  },
  {
    id: 3,
    degree: "English Second Lang.",
    school: "Pannasastra University of Cambodia (PUC)",
    specialize: "English",
    focus: "Communication",
    year: "2023 - 2024",
    image: "https://res.cloudinary.com/dicrvjstp/image/upload/v1776187055/pannasastra_g36sve.jpg",
  },
  {
    id: 4,
    degree: "Next-Gen Program Batch II",
    school: "Cambodia Academy of Digital Technology (CADT)",
    specialize: "Technology",
    focus: "Frontend Development",
    year: "5 weeks (Aug-Sep 2025)",
    image: "https://res.cloudinary.com/dicrvjstp/image/upload/v1776187073/Next-Gen_atqdcj.jpg",
  },
];

export default function EduJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [maxScrollY, setMaxScrollY] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const updateScroll = () => {
    if (trackRef.current && containerRef.current) {
      const scrollH = trackRef.current.scrollHeight;
      const clientH = containerRef.current.clientHeight;
      const diff = Math.max(0, scrollH - clientH);
      setMaxScrollY(diff);
    }
  };

  useEffect(() => {
    updateScroll();
    const t1 = setTimeout(updateScroll, 100);
    const t2 = setTimeout(updateScroll, 400);
    const t3 = setTimeout(updateScroll, 1000);

    let resizeObserver;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => updateScroll());
      if (trackRef.current) resizeObserver.observe(trackRef.current);
      if (containerRef.current) resizeObserver.observe(containerRef.current);
    }

    if (document.fonts) {
      document.fonts.ready.then(updateScroll);
    }

    window.addEventListener("resize", updateScroll);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  // Update active index based on scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const normalized = Math.min(Math.max(latest / 0.88, 0), 1);
    const idx = Math.min(
      Math.floor(normalized * journeyData.length),
      journeyData.length - 1
    );
    setActiveIndex(idx);
  });

  // Smooth vertical translation from 0 to -maxScrollY over scrollYProgress [0, 0.88], then holds still from 0.88 to 1.0
  const y = useTransform(scrollYProgress, [0, 0.88, 1], [0, -maxScrollY, -maxScrollY]);

  const scrollToIndex = (idx) => {
    if (!sectionRef.current) return;
    const sectionTop = sectionRef.current.offsetTop;
    const totalScroll = sectionRef.current.offsetHeight - window.innerHeight;
    const targetProgress = (idx / (journeyData.length - 1)) * 0.88;
    const targetScrollY = sectionTop + targetProgress * totalScroll;
    window.scrollTo({ top: targetScrollY, behavior: "smooth" });
  };

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative w-full h-[380vh] bg-black text-white"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center px-6 sm:px-10 md:px-14 lg:px-20 py-6 md:py-10">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="https://res.cloudinary.com/dicrvjstp/image/upload/v1793059466/v2_bg11_gilerp.jpg"
            alt="Education Background"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle dark tint to make the background a little darker */}
          <div className="absolute inset-0 bg-black/35 pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-12 items-center justify-between h-full max-h-[88vh]">
          {/* Left Column: Pinned Header, Description & Space for Model BG */}
          <div className="w-full lg:w-[42%] flex flex-col justify-start h-auto lg:h-[620px] py-0 lg:py-1 select-none pointer-events-none">
            {/* Header & Subtitle */}
            <div className="pointer-events-auto -mt-4 sm:-mt-6 lg:-mt-10">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#ea580c] tracking-wider leading-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] flex flex-wrap items-baseline gap-2 sm:gap-3"
                style={{ fontFamily: '"Audiowide", "Noto Sans JP", sans-serif' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span>EDUCATION</span>
                <span
                  className="text-xl sm:text-2xl md:text-3xl font-bold tracking-normal opacity-90"
                  style={{ fontFamily: '"Noto Sans JP", sans-serif' }}
                >
                  • エデュケーション
                </span>
              </motion.h2>
            </div>

            {/* Clear space reserved for 3D model background */}
            <div className="flex-1 w-full min-h-[160px] lg:min-h-[300px]" />
          </div>

          {/* Right Column: Pinned Layout Container with Vertically Scrolling Photos */}
          <div className="w-full lg:w-[58%] relative flex items-center justify-center h-[420px] sm:h-[480px] md:h-[540px] lg:h-[620px]">
            {/* Ambient dark blur glow to soften container presence */}
            <div className="absolute -inset-4 sm:-inset-8 bg-black/80 blur-2xl rounded-[3rem] pointer-events-none -z-10" />

            <div
              ref={containerRef}
              className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.9)] bg-black group"
            >
              {/* Subtle edge-softening overlays on viewport perimeter */}
              <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-black/85 via-black/30 to-transparent pointer-events-none z-15" />
              <div className="absolute inset-y-0 right-0 w-14 sm:w-20 bg-gradient-to-l from-black/85 via-black/30 to-transparent pointer-events-none z-15" />
              <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-black via-black/80 via-40% to-transparent pointer-events-none z-15" />
              <div className="absolute inset-x-0 top-0 h-16 sm:h-20 bg-gradient-to-b from-black/75 via-black/25 to-transparent pointer-events-none z-15" />

              {/* Vertical Scroll Track */}
              <motion.div
                ref={trackRef}
                style={{ y }}
                className="flex flex-col gap-6 sm:gap-8 w-full will-change-transform"
              >
                {journeyData.map((item, index) => (
                  <div
                    key={item.id}
                    className="relative w-full h-[420px] sm:h-[480px] md:h-[540px] lg:h-[620px] shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden bg-black select-none"
                  >
                    {/* Background Image - Enhanced brightness & vibrancy in the center */}
                    <img
                      src={item.image}
                      alt={item.school}
                      className="absolute inset-0 w-full h-full object-cover object-center brightness-115 contrast-[1.05]"
                    />

                    {/* Radial Vignette: wide open center with subtle dark edges */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.35)_80%,rgba(0,0,0,0.9)_100%)] pointer-events-none z-[1]" />

                    {/* Gradient Overlay & Content */}
                    <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/95 via-black/45 via-35% to-transparent flex flex-col justify-end p-5 sm:p-8 md:p-10 pb-8 sm:pb-10">
                      <div className="max-w-3xl">
                        {/* Year */}
                        <div
                          className="text-[#ea580c] font-black text-xs sm:text-sm md:text-base tracking-widest uppercase mb-1.5"
                          style={{ fontFamily: '"Quantico", sans-serif' }}
                        >
                          {item.year}
                        </div>

                        {/* Degree Title */}
                        <h3
                          className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight mb-2"
                          style={{ fontFamily: '"Audiowide", cursive, sans-serif' }}
                        >
                          {item.degree}
                        </h3>

                        {/* School Name */}
                        <p
                          className="text-neutral-200 text-sm sm:text-base md:text-lg font-medium mb-4 sm:mb-5"
                          style={{ fontFamily: '"Quantico", sans-serif' }}
                        >
                          {item.school}
                        </p>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-2">
                          <span
                            className="bg-white/15 backdrop-blur-md text-white border border-white/20 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-sm"
                            style={{ fontFamily: '"Quantico", sans-serif' }}
                          >
                            Specialize: {item.specialize}
                          </span>
                          <span
                            className="bg-white/15 backdrop-blur-md text-white border border-white/20 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-sm"
                            style={{ fontFamily: '"Quantico", sans-serif' }}
                          >
                            Focus: {item.focus}
                          </span>
                          {item.grade && (
                            <span
                              className="bg-[#ea580c] text-white border border-[#ea580c] text-xs sm:text-sm font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-md"
                              style={{ fontFamily: '"Quantico", sans-serif' }}
                            >
                              Grade: {item.grade}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
