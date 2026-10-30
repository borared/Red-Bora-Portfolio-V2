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
  const [isGlitching, setIsGlitching] = useState(false);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [maxScrollY, setMaxScrollY] = useState(0);

  // Trigger Spider-Verse Miles Morales multiverse glitch whenever active milestone switches
  useEffect(() => {
    setIsGlitching(true);
    const timer = setTimeout(() => {
      setIsGlitching(false);
    }, 580);
    return () => clearTimeout(timer);
  }, [activeIndex]);

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
        {/* Background Image Layer with subtle breathing depth & ambient cyber glow */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
          {/* Ambient Orange Cyber Glow behind character model */}
          <div className="absolute top-1/2 left-[14%] -translate-y-1/2 w-[420px] h-[420px] bg-[#ea580c]/16 rounded-full blur-[110px] pointer-events-none animate-pulse" />

          {/* Floating Background Image */}
          <motion.img
            animate={{
              y: [0, -8, 0],
              scale: [1, 1.025, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src="https://res.cloudinary.com/dicrvjstp/image/upload/v1793059466/v2_bg11_gilerp.jpg"
            alt="Education Background"
            className="w-full h-full object-cover object-center will-change-transform opacity-95"
          />

          {/* Vignette overlays for smooth contrast and seamless blending */}
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/20 to-black/70 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-12 items-center justify-between h-full max-h-[88vh]">
          {/* Left Column: Header, Chronological Timeline Rail & Milestone Telemetry */}
          <div className="w-full lg:w-[42%] flex flex-col justify-between h-auto lg:h-[620px] py-1 select-none">
            {/* Header & Subtitle */}
            <div className="pointer-events-auto -mt-2 sm:-mt-4 lg:-mt-6">
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

            {/* Interactive Cyber Timeline Circuit Rail */}
            <div className="pointer-events-auto my-auto py-2 hidden sm:flex flex-col gap-4 max-w-lg">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="text-sm font-mono tracking-tight text-[#ea580c] uppercase font-bold"
                  style={{ fontFamily: '"Space Mono", monospace' }}
                >
                  [//]
                </span>
                <span
                  className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#ea580c] uppercase font-bold"
                  style={{ fontFamily: '"Space Mono", monospace' }}
                >
                  CHRONO_RAIL // 2022 — PRESENT
                </span>
              </div>

              {/* Connected Vertical Circuit Wire */}
              <div className="relative pl-7 flex flex-col gap-5 border-l-2 border-white/20">
                {/* Dynamic Electric Laser Pulse traveling down the circuit */}
                <motion.div
                  className="absolute left-[-2px] w-[2px] bg-[#ea580c] shadow-[0_0_12px_#ea580c]"
                  animate={{
                    top: `${(activeIndex / (journeyData.length - 1)) * 74}%`,
                    height: "26%",
                  }}
                  transition={{ type: "spring", stiffness: 280, damping: 28 }}
                />

                {journeyData.map((item, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToIndex(idx)}
                      className={`group flex items-start gap-3.5 text-left transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "opacity-100 translate-x-2"
                          : "opacity-45 hover:opacity-85"
                      }`}
                    >
                      {/* Sharp Cyber Diamond Marker (zero circles) */}
                      <div className="relative -ml-[35px] mt-1.5 flex items-center justify-center">
                        <div
                          className={`w-3.5 h-3.5 rotate-45 transition-all duration-300 ${
                            isActive
                              ? "bg-[#ea580c] shadow-[0_0_12px_#ea580c] scale-110"
                              : "border-2 border-white/40 bg-black group-hover:border-white"
                          }`}
                        />
                      </div>

                      {/* Milestone Text */}
                      <div className="flex flex-col gap-0.5">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`text-xs sm:text-sm font-mono tracking-wider transition-colors font-bold ${
                              isActive ? "text-[#ea580c]" : "text-white/60"
                            }`}
                            style={{ fontFamily: '"Space Mono", monospace' }}
                          >
                            {item.year}
                          </span>
                          {isActive && (
                            <span className="text-[10px] px-2 py-0.5 rounded bg-[#ea580c]/20 border border-[#ea580c]/50 text-[#ea580c] font-mono uppercase font-bold tracking-wider">
                              ACTIVE
                            </span>
                          )}
                        </div>
                        <span
                          className={`text-base sm:text-lg md:text-xl font-bold tracking-wide transition-colors ${
                            isActive
                              ? "text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.45)]"
                              : "text-white/70"
                          }`}
                          style={{ fontFamily: '"Audiowide", cursive, sans-serif' }}
                        >
                          {item.degree}
                        </span>
                        <span
                          className="text-xs sm:text-sm text-white/60 truncate max-w-[340px]"
                          style={{ fontFamily: '"Quantico", sans-serif' }}
                        >
                          {item.school}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Milestone Telemetry Status Bar */}
            <div className="pointer-events-auto hidden sm:flex items-center gap-3 bg-black/75 border border-white/15 px-4 py-2.5 rounded-2xl backdrop-blur-xl shadow-xl w-fit">
              <span
                className="text-[9px] font-mono text-[#ea580c] tracking-widest font-bold uppercase"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                MILESTONE
              </span>
              <span
                className="text-xs font-black text-white tracking-wider"
                style={{ fontFamily: '"Quantico", sans-serif' }}
              >
                [ 0{activeIndex + 1} / 0{journeyData.length} ]
              </span>
              <div className="w-1 h-3.5 bg-white/20" />
              <span
                className="text-[10px] font-bold text-white/80 truncate max-w-[200px]"
                style={{ fontFamily: '"Quantico", sans-serif' }}
              >
                {journeyData[activeIndex]?.specialize}
              </span>
            </div>
          </div>

          {/* Right Column: Pinned Layout Container with Vertically Scrolling Photos */}
          <div className="w-full lg:w-[58%] relative flex items-center justify-center h-[420px] sm:h-[480px] md:h-[540px] lg:h-[620px]">
            {/* Ambient dark blur glow to soften container presence */}
            <div className="absolute -inset-4 sm:-inset-8 bg-black/80 blur-2xl rounded-[3rem] pointer-events-none -z-10" />

            <div
              ref={containerRef}
              className={`relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.95)] bg-black group ${
                isGlitching ? "miles-glitch-active" : ""
              }`}
            >
              {/* Spider-Verse Multiverse Chromatic Ghost Slices */}
              <div className="spider-glitch-cyan bg-[#00f0ff]/20 pointer-events-none" />
              <div className="spider-glitch-magenta bg-[#ff0055]/20 pointer-events-none" />

              {/* Retro CRT Phosphor Scanline Texture Overlay */}
              <div className="absolute inset-0 crt-screen-scanlines z-30 pointer-events-none opacity-40 mix-blend-overlay" />

              {/* Rolling CRT Electron Beam */}
              <div className="crt-scanline-beam z-30 pointer-events-none" />

              {/* CRT Glass Curvature Vignette & Phosphor Shadow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.4)_75%,rgba(0,0,0,0.92)_100%)] pointer-events-none z-25" />

              {/* CRT Corner Screen Glare Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.07] pointer-events-none z-25" />

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
                {journeyData.map((item, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <div
                      key={item.id}
                      className="relative w-full h-[420px] sm:h-[480px] md:h-[540px] lg:h-[620px] shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden bg-black select-none transition-all duration-500"
                    >
                      {/* Sharp Status Tag Chip (Top Right, zero circles) */}
                      <div className="absolute top-4 right-4 z-40 flex items-center gap-1.5 px-3 py-1 bg-black/80 border border-white/20 backdrop-blur-md pointer-events-none">
                        <span
                          className={`text-[8.5px] font-mono font-bold ${
                            isActive ? "text-[#ea580c]" : "text-white/40"
                          }`}
                        >
                          {isActive ? "[REPLAY // 2026]" : "[ARCHIVE]"}
                        </span>
                        <span
                          className="text-[9px] font-mono tracking-widest uppercase font-bold text-white/90"
                          style={{ fontFamily: '"Space Mono", monospace' }}
                        >
                          {item.year.includes("Present") ? "ACTIVE" : "RECORDED"}
                        </span>
                      </div>

                      {/* Background Image - Vintage archival 2026 grade with Spider-Verse chromatic step glitch */}
                      <img
                        src={item.image}
                        alt={item.school}
                        className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-out vintage-archive-photo ${
                          isActive
                            ? `scale-100 ${isGlitching ? "miles-glitch-active" : ""}`
                            : "scale-[1.03] opacity-75 grayscale-[35%]"
                        }`}
                      />

                      {/* Vintage Film Warmth & Faded Contrast Overlay */}
                      <div className="absolute inset-0 bg-[#d97706]/[0.07] mix-blend-color pointer-events-none z-[2]" />
                      <div className="absolute inset-0 bg-[#451a03]/[0.08] mix-blend-multiply pointer-events-none z-[2]" />

                      {/* Analog Film Grain Texture */}
                      <div className="absolute inset-0 vintage-film-grain opacity-45 mix-blend-overlay pointer-events-none z-[3]" />

                      {/* Multi-layered Chromatic Ghost Images during Spider-Verse glitch */}
                      {isActive && isGlitching && (
                        <>
                          <img
                            src={item.image}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none mix-blend-screen opacity-70 filter hue-rotate-[160deg] contrast-200 translate-x-[-12px] translate-y-[4px] z-10"
                          />
                          <img
                            src={item.image}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none mix-blend-screen opacity-70 filter hue-rotate-[-60deg] contrast-200 translate-x-[12px] translate-y-[-4px] z-10"
                          />
                        </>
                      )}

                      {/* Radial Vignette: wide open center with subtle dark edges */}
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.35)_80%,rgba(0,0,0,0.9)_100%)] pointer-events-none z-[1]" />

                      {/* Gradient Overlay & Content */}
                      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/95 via-black/45 via-35% to-transparent flex flex-col justify-end p-5 sm:p-8 md:p-10 pb-8 sm:pb-10">
                        <div className="max-w-3xl">
                          {/* Year */}
                          <div
                            className="text-[#ea580c] font-black text-xs sm:text-sm md:text-base tracking-widest uppercase mb-1.5 flex items-center gap-2"
                            style={{ fontFamily: '"Quantico", sans-serif' }}
                          >
                            <span>{item.year}</span>
                            <span className="h-[1px] w-6 bg-[#ea580c]/60" />
                          </div>

                          {/* Degree Title */}
                          <h3
                            className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight mb-2 drop-shadow-lg"
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
                              className="bg-white/15 backdrop-blur-md text-white border border-white/20 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-sm hover:border-orange-500/40 transition-colors"
                              style={{ fontFamily: '"Quantico", sans-serif' }}
                            >
                              Specialize: {item.specialize}
                            </span>
                            <span
                              className="bg-white/15 backdrop-blur-md text-white border border-white/20 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-sm hover:border-orange-500/40 transition-colors"
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
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

