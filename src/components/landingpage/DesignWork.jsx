import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import Magnetic from "../global/Magnetic";
import { optimizeThumb, optimizeBg } from "../../utils/cloudinary";

export const projects = [
  {
    id: 1,
    title: "British Wrecks",
    subtitle: "Web UI Design",
    tagline: "A driver's guide to the ship wrecks around Ireland",
    image: optimizeThumb(
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1773458411/IrishWreckk_yeng2q.jpg", 1000
    ),
  },
  {
    id: 2,
    title: "Cambodia",
    subtitle: "Tourism Poster Design",
    tagline: "Welcome to Kingdom of Wonder — Travel with happiness",
    image: optimizeThumb(
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1773458410/Cambodia_iaqr84.jpg", 1000
    ),
  },
  {
    id: 3,
    title: "CADT Restaurant",
    subtitle: "Brand & Menu Design",
    tagline: "Get your hunger menu",
    image: optimizeThumb(
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1773458411/Cadt_Hang_riubcd_rkhalk.jpg", 1000
    ),
  },
  {
    id: 4,
    title: "Coke Sustainability",
    subtitle: "Campaign UI Mockup",
    tagline: "Enjoy again and again and again",
    image: optimizeThumb(
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1773458410/Coca_UI122_b7g4jz.jpg", 1000
    ),
  },
  {
    id: 5,
    title: "Zinko Quiz",
    subtitle: "Master the Quiz Control the Outcome",
    tagline: "A gamified quiz platform that feels like a real game competition, with team VS team and build more strategy, engagement, motivation between a group of friend, teacher, family.",
    image: optimizeThumb(
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1792908206/zinko_poster_ae2jcf.jpg", 1000
    ),
  },
  {
    id: 6,
    title: "VEAJA",
    subtitle: "Zero Missed Call from Customer",
    tagline: "Ai voice agent that can handle mutiple call at the same time",
    image: optimizeThumb(
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1792908206/veaja_poster_ooxwya.jpg", 1000
    ),
  },
];

/**
 * Individual Plastic Specimen Card with Stacking Deck Exit Motion & Interactive 3D Cursor Tilt
 */
function SpecimenSlide({ project, index, total, onExpand, isLast }) {
  const slideRef = useRef(null);
  const cardRef = useRef(null);

  // Scroll tracking for stacking deck animation when covered by next slide
  const { scrollYProgress } = useScroll({
    target: slideRef,
    offset: ["start start", "end start"],
  });

  const deckScale = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.90]);
  const deckY = useTransform(scrollYProgress, [0, 1], ["0px", isLast ? "0px" : "-35px"]);
  const deckRotateX = useTransform(scrollYProgress, [0, 1], [0, isLast ? 0 : -6]);
  const deckOverlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [0, 0.4, isLast ? 0 : 0.75]
  );
  const deckBlur = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px)", isLast ? "blur(0px)" : "blur(3px)"]
  );

  // Interactive 3D Cursor Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 22 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 22 });

  const tiltRotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["9deg", "-9deg"]);
  const tiltRotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-9deg", "9deg"]);

  // Dynamic Cellophane Glare position
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["10%", "90%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["10%", "90%"]);
  const glareOpacity = useMotionValue(0);
  const glareOpacitySpring = useSpring(glareOpacity, { stiffness: 180, damping: 20 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
    glareOpacity.set(1);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    glareOpacity.set(0);
  };

  return (
    <div
      ref={slideRef}
      id={`design-work-${project.id}`}
      className="sticky top-0 h-screen w-full flex items-center justify-between pt-20 md:pt-24 pb-6 px-4 sm:px-8 md:px-12 lg:px-20 select-none pointer-events-none"
      style={{ zIndex: index + 1 }}
    >
      {/* Motion Deck Container with scroll exit depth */}
      <motion.div
        style={{
          scale: deckScale,
          y: deckY,
          rotateX: deckRotateX,
          filter: deckBlur,
          perspective: 1200,
        }}
        className="w-full sm:max-w-md md:max-w-[420px] lg:max-w-[460px] xl:max-w-[480px] h-[55vh] sm:h-[60vh] md:h-[64vh] lg:h-[68vh] max-h-[520px] flex items-center pointer-events-auto md:ml-16 lg:ml-28 xl:ml-36 will-change-transform"
      >
        {/* Parallelogram Plastic Specimen Container with 3D Tilt */}
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX: tiltRotateX,
            rotateY: tiltRotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative w-full h-full cursor-pointer select-none"
        >
          {/* Inner skew container to preserve the signature parallelogram angle */}
          <div
            style={{ transform: "skewX(6deg)" }}
            className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-white/[0.04] backdrop-blur-2xl border border-white/25 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),inset_0_1.5px_2px_rgba(255,255,255,0.5),inset_0_-1px_1px_rgba(255,255,255,0.15),inset_1px_0_2px_rgba(255,255,255,0.25),inset_-1px_0_2px_rgba(255,255,255,0.15)] flex items-center justify-center transition-shadow duration-300 hover:shadow-[0_30px_70px_-10px_rgba(234,88,12,0.35)]"
          >
            {/* Heat-Sealed Inner Seam Rim */}
            <div className="absolute inset-1.5 sm:inset-2 rounded-[14px] sm:rounded-[20px] border border-white/10 pointer-events-none z-20" />

            {/* Retail Packaging Hang Hole Punch Slot */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex items-center justify-center">
              <div className="w-8 sm:w-10 h-2 sm:h-2.5 rounded-full border border-white/30 bg-black/60 shadow-[inset_0_1px_2px_rgba(0,0,0,0.9)] backdrop-blur-md" />
            </div>

            {/* Specimen / Plastic Sample Tag (Top Left) (Zero Circles) */}
            <div className="absolute top-2.5 sm:top-3.5 left-3.5 sm:left-4 z-30 pointer-events-none flex items-center gap-1.5">
              <span
                className="text-[10px] font-mono text-[#ea580c] font-bold"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                [#]
              </span>
              <span
                className="text-xs sm:text-sm font-bold tracking-widest text-white/90 uppercase"
                style={{ fontFamily: '"Quantico", sans-serif' }}
              >
                SAMPLE // 0{index + 1}
              </span>
            </div>

            {/* Ambient Blurred Artwork Backdrop */}
            <div
              className="absolute inset-0 bg-cover bg-center filter blur-3xl opacity-25 scale-110 pointer-events-none"
              style={{ backgroundImage: `url(${project.image})` }}
            />

            {/* Main Poster Image with fluid layoutId */}
            <motion.img
              layoutId={`specimen-img-${project.id}`}
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="relative z-10 w-full h-full object-contain p-3.5 sm:p-4 will-change-transform drop-shadow-[0_12px_24px_rgba(0,0,0,0.7)]"
            />

            {/* Dynamic Interactive Specular Glare (Moves with Cursor across Cellophane) */}
            <motion.div
              style={{
                opacity: glareOpacitySpring,
                background: `radial-gradient(circle 220px at ${glareX} ${glareY}, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 45%, transparent 70%)`,
              }}
              className="absolute inset-0 pointer-events-none z-25"
            />

            {/* Static Plastic Sheen / Glare Reflection 1: Diagonal Light Streak */}
            <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] pointer-events-none z-20 bg-gradient-to-br from-white/[0.12] via-transparent to-transparent -rotate-12" />

            {/* Plastic Sheen / Glare Reflection 2: Top Surface Gloss */}
            <div className="absolute inset-0 pointer-events-none z-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.16] via-transparent to-black/30" />

            {/* Cellophane Crease / Specular Diagonal Slit */}
            <div className="absolute inset-0 pointer-events-none z-20 bg-[linear-gradient(135deg,transparent_35%,rgba(255,255,255,0.09)_42%,rgba(255,255,255,0.02)_45%,transparent_50%)]" />

            {/* Top-Right Quick Expand Icon */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onExpand(project);
              }}
              className="absolute top-2.5 sm:top-3 right-3 sm:right-3.5 z-30 p-1.5 sm:p-2 rounded-full bg-black/60 border border-white/20 text-white/80 hover:text-white hover:border-[#ea580c] hover:bg-[#ea580c]/20 backdrop-blur-md cursor-pointer transition-all"
              aria-label="Expand poster"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="h-3.5 w-3.5"
              >
                <polyline points="15 3 21 3 21 9" />
                <polyline points="9 21 3 21 3 15" />
                <line x1="21" y1="3" x2="14" y2="10" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
            </button>

            {/* Bottom-Left Edge Description Overlay */}
            <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/95 via-black/85 via-50% to-transparent pt-12 pb-4 sm:pb-5 px-4 sm:px-6 flex flex-col justify-end items-start text-left pointer-events-auto">
              <div className="space-y-1 sm:space-y-1.5 max-w-lg">
                {/* Title */}
                <h3
                  className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-wide leading-tight drop-shadow-xl"
                  style={{ fontFamily: '"Audiowide", cursive, sans-serif' }}
                >
                  {project.title}
                </h3>

                {/* Subtitle */}
                {project.subtitle && (
                  <p
                    className="text-[10px] sm:text-xs font-bold text-orange-400 uppercase tracking-widest"
                    style={{ fontFamily: '"Quantico", sans-serif' }}
                  >
                    {project.subtitle}
                  </p>
                )}

                {/* Tagline / Description */}
                <p
                  className="text-xs sm:text-sm text-neutral-200 leading-relaxed drop-shadow-md line-clamp-2 pt-0.5"
                  style={{ fontFamily: '"Quantico", sans-serif' }}
                >
                  {project.tagline}
                </p>
              </div>

              {/* View Full Poster Button */}
              <div className="pt-2.5 sm:pt-3">
                <Magnetic>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onExpand(project);
                    }}
                    style={{ fontFamily: '"Audiowide", cursive, sans-serif' }}
                    className="group/btn relative overflow-hidden inline-flex items-center gap-2 rounded-full bg-black/90 border border-white/20 text-white px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs font-medium tracking-wider shadow-lg hover:shadow-orange-500/20 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 transition hover:cursor-pointer backdrop-blur-md"
                  >
                    <div className="absolute inset-0 bg-[#ea580c] translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-500 rounded-full" />
                    <span className="relative z-10">View Full Poster</span>
                    <span className="relative z-10 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="h-2.5 w-2.5"
                      >
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                      </svg>
                    </span>
                  </button>
                </Magnetic>
              </div>
            </div>

            {/* Stacking Exit Dark Dimming Overlay */}
            <motion.div
              style={{ opacity: deckOverlayOpacity }}
              className="absolute inset-0 bg-black pointer-events-none z-35"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Right Area placeholder */}
      <div className="hidden md:flex flex-1 h-full items-center justify-center pointer-events-none select-none pl-6 lg:pl-12" />
    </div>
  );
}

export default function DesignWork() {
  const sectionRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);
  const [activeSampleIndex, setActiveSampleIndex] = useState(0);

  // Track overall scroll progress through the section to update the Cyber Specimen HUD
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const rawIdx = Math.floor(latest * projects.length);
    const clampedIdx = Math.max(0, Math.min(rawIdx, projects.length - 1));
    setActiveSampleIndex(clampedIdx);
  });

  const scrollToProject = (id) => {
    const el = document.getElementById(`design-work-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="design-work"
      className="relative w-full bg-black text-white"
    >
      {/* Sticky Background with Floating 3D Character Model & Ambient Cyber Bloom */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Ambient Orange Cyber Bloom Glow behind character */}
          <div className="absolute top-1/2 right-[18%] -translate-y-1/2 w-[420px] h-[420px] bg-[#ea580c]/18 rounded-full blur-[110px] pointer-events-none animate-pulse" />

          {/* Floating / Breathing 3D Character Model */}
          <motion.img
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.025, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src={optimizeBg("https://res.cloudinary.com/dicrvjstp/image/upload/v1792906780/Screenshot_2026-10-25_123928_ehxb36.png", 1600)}
            alt="Design Work Background"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-right md:object-center will-change-transform opacity-95"
          />

          {/* Subtle gradient overlays for contrast and smooth blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-black/90 pointer-events-none" />

          {/* Futuristic Cyber Reticle Markings in the Model Bay */}
          <div className="hidden lg:block absolute right-16 top-28 pointer-events-none text-right opacity-60">
            <div
              className="text-[10px] font-mono tracking-[0.25em] text-[#ea580c] uppercase"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              BAY // SPECIMEN_RESERVE_01
            </div>
            <div
              className="text-[9px] font-mono tracking-widest text-white/50 uppercase"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              MODEL_ID: 2050_CYBER_UNIT
              <br />
              CALIBRATION: ACTIVE
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Marquee Header */}
      <div className="sticky top-0 z-40 bg-black/95 backdrop-blur-md py-4 md:py-5 overflow-hidden border-b border-white/10 select-none">
        <div
          className="text-[#ea580c] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-wider whitespace-nowrap"
          style={{
            fontFamily: '"Audiowide", "Noto Sans JP", sans-serif',
            animation: "scroll 30s linear infinite",
          }}
        >
          <span className="inline-block pr-24">
            DESIGN WORK • デザインワーク • DESIGN WORK • デザインワーク • DESIGN WORK • デザインワーク • DESIGN WORK • デザインワーク •
          </span>
          <span className="inline-block pr-24">
            DESIGN WORK • デザインワーク • DESIGN WORK • デザインワーク • DESIGN WORK • デザインワーク • DESIGN WORK • デザインワーク •
          </span>
        </div>
      </div>

      {/* Floating Cyber Specimen Telemetry HUD (Pinned at Right Bottom) */}
      <div className="sticky bottom-8 z-30 pointer-events-none select-none flex justify-end px-6 md:px-16 lg:px-24">
        <div className="hidden sm:flex items-center gap-4 bg-black/80 border border-white/15 px-4 py-3 rounded-2xl backdrop-blur-xl shadow-2xl pointer-events-auto">
          {/* Active Specimen Number */}
          <div className="flex flex-col">
            <span
              className="text-[9px] font-mono text-[#ea580c] tracking-widest uppercase font-bold"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              ARCHIVE // 2050
            </span>
            <div
              className="text-sm font-black text-white tracking-wider flex items-center gap-1.5"
              style={{ fontFamily: '"Quantico", sans-serif' }}
            >
              <span>SPECIMEN</span>
              <span className="text-[#ea580c]">
                [ 0{activeSampleIndex + 1} / 0{projects.length} ]
              </span>
            </div>
          </div>

          <div className="h-7 w-[1px] bg-white/20" />

          {/* Interactive Sharp Progress Ticks (Zero Circles) */}
          <div className="flex items-center gap-1.5">
            {projects.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => scrollToProject(p.id)}
                aria-label={`Jump to ${p.title}`}
                className={`h-1.5 transition-all duration-300 cursor-pointer ${
                  idx === activeSampleIndex
                    ? "w-6 bg-[#ea580c] shadow-[0_0_8px_#ea580c]"
                    : "w-2 bg-white/25 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <div className="h-7 w-[1px] bg-white/20" />

          {/* Active Title Indicator */}
          <div className="hidden md:flex flex-col text-right max-w-[130px] overflow-hidden">
            <span
              className="text-[8.5px] font-mono text-white/50 tracking-wider truncate uppercase"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              CURRENT SPECIMEN
            </span>
            <span
              className="text-xs font-bold text-white truncate"
              style={{ fontFamily: '"Quantico", sans-serif' }}
            >
              {projects[activeSampleIndex]?.title}
            </span>
          </div>
        </div>
      </div>

      {/* Sticky 100vh Slides Container */}
      <div className="relative w-full">
        {projects.map((project, index) => (
          <SpecimenSlide
            key={project.id}
            project={project}
            index={index}
            total={projects.length}
            isLast={index === projects.length - 1}
            onExpand={setActiveProject}
          />
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Fluid Lightbox Modal with layoutId */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-xl p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-6 right-6 z-50 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[#ea580c] hover:border-[#ea580c] transition-all hover:cursor-pointer shadow-lg"
              aria-label="Close lightbox"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Poster container with layoutId morph */}
            <motion.div
              className="relative max-w-[95vw] max-h-[90vh] flex flex-col items-center justify-center select-none"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                layoutId={`specimen-img-${activeProject.id}`}
                src={activeProject.image}
                alt={activeProject.title}
                className="max-w-[95vw] max-h-[82vh] object-contain rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.95)] border border-white/20"
              />

              {/* Lightbox Meta Details Bar */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition={{ delay: 0.15 }}
                className="mt-4 flex items-center gap-3.5 bg-black/85 border border-white/20 px-5 py-2 rounded-xl backdrop-blur-md"
              >
                <span
                  className="text-xs font-black tracking-wider text-white"
                  style={{ fontFamily: '"Audiowide", cursive, sans-serif' }}
                >
                  {activeProject.title}
                </span>
                <span className="text-[#ea580c] font-mono font-bold text-xs">//</span>
                <span
                  className="text-[10px] font-bold text-neutral-300 tracking-widest uppercase"
                  style={{ fontFamily: '"Quantico", sans-serif' }}
                >
                  {activeProject.subtitle}
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

