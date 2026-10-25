import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "../global/Magnetic";

export const projects = [
  {
    id: 1,
    title: "British Wrecks",
    subtitle: "Web UI Design",
    tagline: "A driver's guide to the ship wrecks around Ireland",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1773458411/IrishWreckk_yeng2q.jpg",
  },
  {
    id: 2,
    title: "Cambodia",
    subtitle: "Tourism Poster Design",
    tagline: "Welcome to Kingdom of Wonder — Travel with happiness",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1773458410/Cambodia_iaqr84.jpg",
  },
  {
    id: 3,
    title: "CADT Restaurant",
    subtitle: "Brand & Menu Design",
    tagline: "Get your hunger menu",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1773458411/Cadt_Hang_riubcd_rkhalk.jpg",
  },
  {
    id: 4,
    title: "Coke Sustainability",
    subtitle: "Campaign UI Mockup",
    tagline: "Enjoy again and again and again",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1773458410/Coca_UI122_b7g4jz.jpg",
  },
  {
    id: 5,
    title: "Zinko Quiz",
    subtitle: "Master the Quiz Control the Outcome",
    tagline: "A gamified quiz platform that feels like a real game competition, with team VS team and build more strategy, engagement, motivation between a group of friend, teacher, family.",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1792908206/zinko_poster_ae2jcf.jpg",
  },
  {
    id: 6,
    title: "VEAJA",
    subtitle: "Zero Missed Call from Customer",
    tagline: "Ai voice agent that can handle mutiple call at the same time",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1792908206/veaja_poster_ooxwya.jpg",
  },
];

export default function DesignWork() {
  const sectionRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section
      ref={sectionRef}
      id="design-work"
      className="relative w-full bg-black text-white"
    >
      {/* Sticky Background Image strictly contained within Design Work */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <img
            src="https://res.cloudinary.com/dicrvjstp/image/upload/v1792906780/Screenshot_2026-10-25_123928_ehxb36.png"
            alt="Design Work Background"
            className="w-full h-full object-cover object-right md:object-center"
          />
          {/* Subtle gradient overlays for contrast and smooth blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/85 pointer-events-none" />
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

      {/* Sticky 100vh Slides Container */}
      <div className="relative w-full">
        {projects.map((project, index) => (
          <div
            key={project.id}
            id={`design-work-${project.id}`}
            className="sticky top-0 h-screen w-full flex items-center justify-between pt-20 md:pt-24 pb-6 px-4 sm:px-8 md:px-12 lg:px-20 select-none pointer-events-none"
            style={{ zIndex: index + 1 }}
          >
            {/* Left: Poster Container (Plastic Sample Parallelogram Design - heavy at the right) */}
            <div className="w-full sm:max-w-md md:max-w-[420px] lg:max-w-[460px] xl:max-w-[480px] h-[55vh] sm:h-[60vh] md:h-[64vh] lg:h-[68vh] max-h-[520px] flex items-center pointer-events-auto md:ml-16 lg:ml-28 xl:ml-36">
              <div
                style={{
                  transform: "skewX(6deg)",
                }}
                className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),inset_0_1.5px_2px_rgba(255,255,255,0.45),inset_0_-1px_1px_rgba(255,255,255,0.15),inset_1px_0_2px_rgba(255,255,255,0.2),inset_-1px_0_2px_rgba(255,255,255,0.15)] flex items-center justify-center select-none transition-transform duration-300"
              >
                {/* Heat-Sealed Inner Seam Rim */}
                <div className="absolute inset-1.5 sm:inset-2 rounded-[14px] sm:rounded-[20px] border border-white/10 pointer-events-none z-20" />

                {/* Retail Packaging Hang Hole Punch Slot */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex items-center justify-center">
                  <div className="w-8 sm:w-10 h-2 sm:h-2.5 rounded-full border border-white/30 bg-black/60 shadow-[inset_0_1px_2px_rgba(0,0,0,0.9)] backdrop-blur-md" />
                </div>

                {/* Specimen / Plastic Sample Tag (Top Left) */}
                <div className="absolute top-2.5 sm:top-3.5 left-3.5 sm:left-4 z-30 pointer-events-none flex items-center">
                  <span
                    className="text-xs sm:text-sm font-bold tracking-widest text-white/85 uppercase"
                    style={{ fontFamily: '"Quantico", sans-serif' }}
                  >
                    SAMPLE // 0{index + 1}
                  </span>
                </div>

                {/* Ambient Blurred Artwork Backdrop */}
                <div
                  className="absolute inset-0 bg-cover bg-center filter blur-3xl opacity-20 scale-110 pointer-events-none"
                  style={{ backgroundImage: `url(${project.image})` }}
                />

                {/* Main Poster Image fitting container */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="relative z-10 w-full h-full object-contain p-3.5 sm:p-4"
                />

                {/* Plastic Sheen / Glare Reflection 1: Diagonal Light Streak */}
                <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] pointer-events-none z-20 bg-gradient-to-br from-white/[0.12] via-transparent to-transparent -rotate-12" />

                {/* Plastic Sheen / Glare Reflection 2: Top Surface Gloss */}
                <div className="absolute inset-0 pointer-events-none z-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.16] via-transparent to-black/30" />

                {/* Cellophane Crease / Specular Diagonal Slit */}
                <div className="absolute inset-0 pointer-events-none z-20 bg-[linear-gradient(135deg,transparent_35%,rgba(255,255,255,0.09)_42%,rgba(255,255,255,0.02)_45%,transparent_50%)]" />

                {/* Top-Right Quick Expand Icon */}
                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="absolute top-2.5 sm:top-3 right-3 sm:right-3.5 z-30 p-1.5 sm:p-2 rounded-full bg-black/60 border border-white/20 text-white/80 hover:text-white backdrop-blur-md cursor-pointer transition-colors"
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
                        className="text-[10px] sm:text-xs font-bold text-neutral-400 uppercase tracking-widest"
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
                          setActiveProject(project);
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
              </div>
            </div>

            {/* Right: Reserved spacious area for 3D model background */}
            <div className="hidden md:flex flex-1 h-full items-center justify-center pointer-events-none select-none pl-6 lg:pl-12">
              {/* Space reserved for 3D Model background */}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-6 right-6 z-50 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors hover:cursor-pointer"
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

            <motion.div
              className="relative max-w-[95vw] max-h-[92vh] flex items-center justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="max-w-[95vw] max-h-[92vh] object-contain rounded-2xl shadow-2xl border border-white/15"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
