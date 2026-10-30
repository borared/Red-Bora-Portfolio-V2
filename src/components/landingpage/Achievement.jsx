import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Award, ArrowUpRight, X, Maximize2 } from "lucide-react";
import Magnetic from "../global/Magnetic";
import { optimizeThumb, optimizeBg } from "../../utils/cloudinary";

const achievementDetails = {
  title: "Top 3 Awarding // Next-Gen Engagement Program",
  batch: "Batch III (2025 - 2026)",
  project: "VEAJA",
  projectSubtitle: "AI Voice Agent System",
  organization: "Cambodia Academy of Digital Technology (CADT)",
  rank: "TOP 3 WINNER",
  summary:
    "Honored with a Top 3 Awarding finish in the competitive Next-Gen Engagement Program Batch III for engineering VEAJA — an intelligent voice dispatch agent built to handle high-concurrency client communications with low latency and real-time operational routing.",
  highlights: [
    "Pioneered real-time audio interaction pipelines and responsive frontend dashboard control.",
    "Integrated live dispatch logging with sub-second feedback loops and telemetry status.",
    "Presented live prototype demonstration before academic faculty, industry mentors, and engineering judges."
  ]
};

// Panel configuration mimicking the graphic comic/hero split pattern
const comicPanels = [
  // Top Row: 3 panels
  {
    id: "top-left",
    title: "STAGE PODIUM",
    label: "AWARD / 01",
    image: optimizeThumb("https://res.cloudinary.com/dicrvjstp/image/upload/v1793358993/photo_2026-10-30_18-13-32_jed5bx.jpg", 800),
    objectPos: "object-center",
    zoom: "scale-100",
    skew: "clip-panel-tl",
    borderClasses: "border-b-4 border-r-2 border-black"
  },
  {
    id: "top-center",
    title: "TROPHY & HANDSHAKE",
    label: "AWARD / 02",
    image: optimizeThumb("https://res.cloudinary.com/dicrvjstp/image/upload/v1793359027/photo_2026-10-30_18-13-28_n7azd9.jpg", 800),
    objectPos: "object-center",
    zoom: "scale-100",
    skew: "clip-panel-tc",
    borderClasses: "border-b-4 border-x-2 border-black"
  },
  {
    id: "top-right",
    title: "STAGE SPOTLIGHT",
    label: "AWARD / 03",
    image: optimizeThumb("https://res.cloudinary.com/dicrvjstp/image/upload/v1793358993/photo_2026-10-30_18-13-48_zn8soe.jpg", 800),
    objectPos: "object-center",
    zoom: "scale-100",
    skew: "clip-panel-tr",
    borderClasses: "border-b-4 border-l-2 border-black"
  },

  // Middle Hero Slash: 2 dynamic diagonal panels
  {
    id: "mid-left",
    title: "TEAM CELEBRATION",
    label: "CEREMONY / MAIN",
    image: optimizeThumb("https://res.cloudinary.com/dicrvjstp/image/upload/v1793349681/photo_2026-10-30_15-39-54_rqxn5z.jpg", 1000),
    objectPos: "object-center",
    zoom: "scale-[1.05] origin-center",
    borderClasses: "border-y-4 border-r-2 border-black"
  },
  {
    id: "mid-right",
    title: "CERTIFICATE & CADT TROPHY",
    label: "MEDAL CLOSEUP",
    image: optimizeThumb("https://res.cloudinary.com/dicrvjstp/image/upload/v1793358992/photo_2026-10-30_18-13-34_pbor39.jpg", 800),
    objectPos: "object-center",
    zoom: "scale-100",
    borderClasses: "border-y-4 border-l-2 border-black"
  },

  // Horizontal Dynamic Wide Action Strip
  {
    id: "action-strip",
    title: "THE AWARDING CEREMONY STAGE",
    label: "STAGE FULL PANORAMA",
    image: optimizeThumb("https://res.cloudinary.com/dicrvjstp/image/upload/v1793349516/awarding_yaa2ro.jpg", 1200),
    objectPos: "object-[center_42%]",
    zoom: "scale-100",
    borderClasses: "border-y-4 border-black"
  },

  // Bottom Row: Brand insignia + Portrait shot + Group victory shot
  {
    id: "bot-left",
    isLogo: true,
    title: "NEXT-GEN BATCH III",
    label: "OFFICIAL LAUREL",
    borderClasses: "border-t-4 border-r-2 border-black"
  },
  {
    id: "bot-mid",
    title: "ENGINEERING LEAD",
    label: "RECOGNITION",
    image: optimizeThumb("https://res.cloudinary.com/dicrvjstp/image/upload/v1793358993/photo_2026-10-30_18-13-32_jed5bx.jpg", 800),
    objectPos: "object-[38%_38%]",
    zoom: "scale-[1.8] origin-[38%_35%]",
    borderClasses: "border-t-4 border-x-2 border-black"
  },
  {
    id: "bot-right",
    title: "HONORARY WINNERS",
    label: "TOP 3 BATCH III",
    image: optimizeThumb("https://res.cloudinary.com/dicrvjstp/image/upload/v1793359256/photo_2026-10-30_18-19-54_y67fgj.jpg", 800),
    objectPos: "object-center",
    zoom: "scale-100",
    borderClasses: "border-t-4 border-l-2 border-black"
  }
];

export default function Achievement() {
  const [modalImage, setModalImage] = useState(null);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth pure vertical parallax shift across scroll progression (no zoom)
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const scrollToVeaja = () => {
    const el = document.getElementById("recently-work-veaja");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="achievement"
      ref={sectionRef}
      className="relative w-full bg-black text-white py-20 sm:py-28 md:py-36 px-6 sm:px-10 md:px-14 lg:px-20 select-none overflow-hidden"
    >
      {/* Section Background Image Layer with Pure Parallax Motion (No Zoom) */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <motion.img
          style={{ y: bgY }}
          src={optimizeBg("https://res.cloudinary.com/dicrvjstp/image/upload/v1793357298/bg_section_krkkej.jpg", 1920)}
          alt="Achievement Section Background"
          loading="lazy"
          decoding="async"
          className="absolute -top-[25%] -bottom-[25%] inset-x-0 w-full h-[150%] object-cover object-center opacity-100 will-change-transform"
        />
        {/* Ultra-subtle contrast layers for maximum background clarity & brightness */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/45 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/80 via-black/35 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 via-black/35 to-transparent pointer-events-none" />
      </div>


      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-none"
            style={{ fontFamily: '"Audiowide", cursive, sans-serif' }}
          >
            Achievements
          </h2>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Comic Panel Graphic Collage (Exact layout pattern of reference) */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {/* The Comic Poster Board Frame with dark overlay background */}
            <div className="relative overflow-hidden p-2.5 sm:p-3.5 bg-black/60 backdrop-blur-[2px] rounded-2xl sm:rounded-3xl border border-white/10">
              <div className="relative flex flex-col gap-1.5 sm:gap-2">
                {/* ── ROW 1: Top 3 Tilted/Angled Perspective Panels ── */}
                <div className="grid grid-cols-12 gap-1.5 sm:gap-2 h-36 sm:h-44 md:h-52">
                  {/* Panel 1 (Left ~28%) */}
                  <div
                    onClick={() => setModalImage(comicPanels[0].image)}
                    className="col-span-4 relative overflow-hidden bg-neutral-900 group cursor-pointer border-2 border-black rounded-xl sm:rounded-2xl"
                  >
                    <img
                      src={comicPanels[0].image}
                      alt={comicPanels[0].title}
                      className={`w-full h-full object-cover vintage-archive-photo ${comicPanels[0].objectPos} ${comicPanels[0].zoom}`}
                    />
                    {/* Vintage Film Warmth & Faded Contrast Overlay */}
                    <div className="absolute inset-0 bg-[#d97706]/[0.08] mix-blend-color pointer-events-none z-[2]" />
                    <div className="absolute inset-0 bg-[#451a03]/[0.10] mix-blend-multiply pointer-events-none z-[2]" />
                    {/* Analog Film Grain */}
                    <div className="absolute inset-0 vintage-film-grain opacity-40 mix-blend-overlay pointer-events-none z-[3]" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 z-10">
                      <span className="text-[9px] font-mono text-white flex items-center gap-1">
                        <Maximize2 className="w-2.5 h-2.5" /> Inspect
                      </span>
                    </div>
                  </div>

                  {/* Panel 2 (Center ~42%) */}
                  <div
                    onClick={() => setModalImage(comicPanels[1].image)}
                    className="col-span-5 relative overflow-hidden bg-neutral-900 group cursor-pointer border-2 border-black rounded-xl sm:rounded-2xl"
                  >
                    <img
                      src={comicPanels[1].image}
                      alt={comicPanels[1].title}
                      className={`w-full h-full object-cover vintage-archive-photo ${comicPanels[1].objectPos} ${comicPanels[1].zoom}`}
                    />
                    {/* Vintage Film Warmth & Faded Contrast Overlay */}
                    <div className="absolute inset-0 bg-[#d97706]/[0.08] mix-blend-color pointer-events-none z-[2]" />
                    <div className="absolute inset-0 bg-[#451a03]/[0.10] mix-blend-multiply pointer-events-none z-[2]" />
                    {/* Analog Film Grain */}
                    <div className="absolute inset-0 vintage-film-grain opacity-40 mix-blend-overlay pointer-events-none z-[3]" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 z-10">
                      <span className="text-[9px] font-mono text-white flex items-center gap-1">
                        <Maximize2 className="w-2.5 h-2.5" /> Inspect
                      </span>
                    </div>
                  </div>

                  {/* Panel 3 (Right ~30%) */}
                  <div
                    onClick={() => setModalImage(comicPanels[2].image)}
                    className="col-span-3 relative overflow-hidden bg-neutral-900 group cursor-pointer border-2 border-black rounded-xl sm:rounded-2xl"
                  >
                    <img
                      src={comicPanels[2].image}
                      alt={comicPanels[2].title}
                      className={`w-full h-full object-cover vintage-archive-photo ${comicPanels[2].objectPos} ${comicPanels[2].zoom}`}
                    />
                    {/* Vintage Film Warmth & Faded Contrast Overlay */}
                    <div className="absolute inset-0 bg-[#d97706]/[0.08] mix-blend-color pointer-events-none z-[2]" />
                    <div className="absolute inset-0 bg-[#451a03]/[0.10] mix-blend-multiply pointer-events-none z-[2]" />
                    {/* Analog Film Grain */}
                    <div className="absolute inset-0 vintage-film-grain opacity-40 mix-blend-overlay pointer-events-none z-[3]" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 z-10">
                      <span className="text-[9px] font-mono text-white flex items-center gap-1">
                        <Maximize2 className="w-2.5 h-2.5" /> Inspect
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── ROW 2: Slanted Dynamic Middle Cut (Team Lead vs Certificate Zoom) ── */}
                <div className="grid grid-cols-12 gap-1.5 sm:gap-2 h-48 sm:h-60 md:h-72">
                  {/* Left Big Focus (~68%) */}
                  <div
                    onClick={() => setModalImage(comicPanels[3].image)}
                    className="col-span-8 relative overflow-hidden bg-neutral-900 group cursor-pointer border-2 border-black rounded-xl sm:rounded-2xl"
                  >
                    <img
                      src={comicPanels[3].image}
                      alt={comicPanels[3].title}
                      className={`w-full h-full object-cover vintage-archive-photo ${comicPanels[3].objectPos} ${comicPanels[3].zoom}`}
                    />
                    {/* Vintage Film Warmth & Faded Contrast Overlay */}
                    <div className="absolute inset-0 bg-[#d97706]/[0.08] mix-blend-color pointer-events-none z-[2]" />
                    <div className="absolute inset-0 bg-[#451a03]/[0.10] mix-blend-multiply pointer-events-none z-[2]" />
                    {/* Analog Film Grain */}
                    <div className="absolute inset-0 vintage-film-grain opacity-40 mix-blend-overlay pointer-events-none z-[3]" />

                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end justify-between z-10">
                      <span
                        className="text-xs sm:text-sm font-bold text-white drop-shadow"
                        style={{ fontFamily: '"Quantico", sans-serif' }}
                      >
                        Next-Gen Batch III Grand Ceremony
                      </span>
                      <span className="text-[9px] font-mono text-neutral-300 px-1.5 py-0.5 rounded bg-black/60 border border-neutral-700">
                        CLICK FULL
                      </span>
                    </div>
                  </div>

                  {/* Right Cut: Close-up on Certificate & Medal (~32%) */}
                  <div
                    onClick={() => setModalImage(comicPanels[4].image)}
                    className="col-span-4 relative overflow-hidden bg-neutral-900 group cursor-pointer border-2 border-black rounded-xl sm:rounded-2xl"
                  >
                    <img
                      src={comicPanels[4].image}
                      alt={comicPanels[4].title}
                      className={`w-full h-full object-cover vintage-archive-photo ${comicPanels[4].objectPos} ${comicPanels[4].zoom}`}
                    />
                    {/* Vintage Film Warmth & Faded Contrast Overlay */}
                    <div className="absolute inset-0 bg-[#d97706]/[0.08] mix-blend-color pointer-events-none z-[2]" />
                    <div className="absolute inset-0 bg-[#451a03]/[0.10] mix-blend-multiply pointer-events-none z-[2]" />
                    {/* Analog Film Grain */}
                    <div className="absolute inset-0 vintage-film-grain opacity-40 mix-blend-overlay pointer-events-none z-[3]" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 z-10">
                      <span className="text-[9px] font-mono text-white flex items-center gap-1">
                        <Maximize2 className="w-2.5 h-2.5" /> Inspect
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── ROW 3: Horizontal Panoramic Action Strip (Top 3 Podium Award) ── */}
                <div
                  onClick={() => setModalImage(comicPanels[5].image)}
                  className="w-full h-64 sm:h-80 md:h-96 relative overflow-hidden bg-neutral-900 group cursor-pointer border-2 border-black rounded-xl sm:rounded-2xl"
                >
                  <img
                    src={comicPanels[5].image}
                    alt={comicPanels[5].title}
                    className={`w-full h-full object-cover vintage-archive-photo ${comicPanels[5].objectPos} ${comicPanels[5].zoom}`}
                  />
                  {/* Vintage Film Warmth & Faded Contrast Overlay */}
                  <div className="absolute inset-0 bg-[#d97706]/[0.08] mix-blend-color pointer-events-none z-[2]" />
                  <div className="absolute inset-0 bg-[#451a03]/[0.10] mix-blend-multiply pointer-events-none z-[2]" />
                  {/* Analog Film Grain */}
                  <div className="absolute inset-0 vintage-film-grain opacity-40 mix-blend-overlay pointer-events-none z-[3]" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end justify-between p-2.5 z-10">
                    <span
                      className="text-[11px] sm:text-xs font-mono text-neutral-200 uppercase tracking-wider"
                      style={{ fontFamily: '"Space Mono", monospace' }}
                    >
                      Top 3 Podium Award // CADT Next-Gen Program
                    </span>
                    <span className="text-[9px] font-mono text-neutral-300 px-1.5 py-0.5 rounded bg-black/70 border border-neutral-700">
                      Expand
                    </span>
                  </div>
                </div>

                {/* ── ROW 4: Bottom 3 Panels (Graphic Logo Badge + Character Close-up + Victory Crowd) ── */}
                <div className="grid grid-cols-12 gap-1.5 sm:gap-2 h-32 sm:h-40 md:h-44">
                  {/* Left Badge Panel (Graphic Brand style like Lyle Style logo) */}
                  <div className="col-span-4 relative overflow-hidden flex flex-col items-center justify-center p-1 sm:p-2 text-center rounded-xl sm:rounded-2xl">
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <span
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-wider uppercase leading-none drop-shadow-xl"
                        style={{ fontFamily: '"Audiowide", cursive, sans-serif' }}
                      >
                        TOP 3
                      </span>
                      <span
                        className="text-xs sm:text-sm md:text-base tracking-widest text-[#ea580c] font-black uppercase mt-2 drop-shadow"
                        style={{ fontFamily: '"Quantico", sans-serif' }}
                      >
                        NEXT-GEN BATCH III
                      </span>
                    </div>
                  </div>

                  {/* Middle Character Profile Panel */}
                  <div
                    onClick={() => setModalImage(comicPanels[7].image)}
                    className="col-span-3 relative overflow-hidden bg-neutral-900 group cursor-pointer border-2 border-black rounded-xl sm:rounded-2xl"
                  >
                    <img
                      src={comicPanels[7].image}
                      alt={comicPanels[7].title}
                      className={`w-full h-full object-cover vintage-archive-photo ${comicPanels[7].objectPos} ${comicPanels[7].zoom}`}
                    />
                    {/* Vintage Film Warmth & Faded Contrast Overlay */}
                    <div className="absolute inset-0 bg-[#d97706]/[0.08] mix-blend-color pointer-events-none z-[2]" />
                    <div className="absolute inset-0 bg-[#451a03]/[0.10] mix-blend-multiply pointer-events-none z-[2]" />
                    {/* Analog Film Grain */}
                    <div className="absolute inset-0 vintage-film-grain opacity-40 mix-blend-overlay pointer-events-none z-[3]" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-1.5 z-10">
                      <span className="text-[8.5px] font-mono text-white">Inspect</span>
                    </div>
                  </div>

                  {/* Right Team Group Panel */}
                  <div
                    onClick={() => setModalImage(comicPanels[8].image)}
                    className="col-span-5 relative overflow-hidden bg-neutral-900 group cursor-pointer border-2 border-black rounded-xl sm:rounded-2xl"
                  >
                    <img
                      src={comicPanels[8].image}
                      alt={comicPanels[8].title}
                      className={`w-full h-full object-cover vintage-archive-photo ${comicPanels[8].objectPos} ${comicPanels[8].zoom}`}
                    />
                    {/* Vintage Film Warmth & Faded Contrast Overlay */}
                    <div className="absolute inset-0 bg-[#d97706]/[0.08] mix-blend-color pointer-events-none z-[2]" />
                    <div className="absolute inset-0 bg-[#451a03]/[0.10] mix-blend-multiply pointer-events-none z-[2]" />
                    {/* Analog Film Grain */}
                    <div className="absolute inset-0 vintage-film-grain opacity-40 mix-blend-overlay pointer-events-none z-[3]" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 z-10">
                      <span className="text-[9px] font-mono text-white flex items-center gap-1">
                        <Maximize2 className="w-2.5 h-2.5" /> Inspect
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-label explaining the graphic layout */}
            <div className="flex items-center justify-between px-1 text-[10px] font-mono text-neutral-400">
              <span style={{ fontFamily: '"Space Mono", monospace' }}>
                [PANEL COMPOSITION // MULTI-PERSPECTIVE DOCUMENTARY]
              </span>
              <span style={{ fontFamily: '"Space Mono", monospace' }}>
                CLICK ANY PANEL TO EXPAND FULL IMAGE
              </span>
            </div>
          </div>

          {/* Right Column: Structured Telemetry & Milestone Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Top Info Section */}
            <div className="p-0 sm:p-2">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ea580c] text-white text-sm sm:text-base font-bold tracking-wider"
                  style={{ fontFamily: '"Quantico", sans-serif' }}
                >
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                  {achievementDetails.rank}
                </span>
                <span
                  className="px-4 py-1.5 rounded-full bg-neutral-800/90 border border-neutral-700 text-neutral-300 text-sm sm:text-base font-mono"
                  style={{ fontFamily: '"Space Mono", monospace' }}
                >
                  {achievementDetails.batch}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.15] mb-3 tracking-wide uppercase"
                style={{ fontFamily: '"Audiowide", cursive, sans-serif' }}
              >
                Next-Gen Engagement Program
              </h3>

              {/* Institution */}
              <p
                className="text-neutral-300 text-base sm:text-lg md:text-xl mb-8"
                style={{ fontFamily: '"Quantico", sans-serif' }}
              >
                Organized by: <span className="text-white font-bold">{achievementDetails.organization}</span>
              </p>

              {/* Associated Product Link (VEAJA) */}
              <div className="mb-8 flex items-center justify-between gap-6 py-2 border-y border-neutral-800/80">
                <div>
                  <span
                    className="text-xs sm:text-sm text-neutral-400 uppercase tracking-widest block font-bold mb-1"
                    style={{ fontFamily: '"Quantico", sans-serif' }}
                  >
                    AWARDED PROJECT
                  </span>
                  <p
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#a3ff05] tracking-wide"
                    style={{ fontFamily: '"Stretch Pro", sans-serif' }}
                  >
                    {achievementDetails.project}
                  </p>
                  <p
                    className="text-sm sm:text-base text-neutral-300 mt-1"
                    style={{ fontFamily: '"Quantico", sans-serif' }}
                  >
                    {achievementDetails.projectSubtitle}
                  </p>
                </div>

                <Magnetic strength={2}>
                  <button
                    type="button"
                    onClick={scrollToVeaja}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-black hover:bg-neutral-900 border border-neutral-700 hover:border-neutral-500 text-sm sm:text-base text-white transition-all cursor-pointer group shrink-0 shadow-lg"
                    style={{ fontFamily: '"Quantico", sans-serif' }}
                  >
                    <span>View in Works</span>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#a3ff05] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </Magnetic>
              </div>

              {/* Summary Description */}
              <p
                className="text-neutral-200 text-base sm:text-lg md:text-xl leading-relaxed"
                style={{ fontFamily: '"Quantico", sans-serif' }}
              >
                {achievementDetails.summary}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for high-res photo inspection */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <button
              type="button"
              onClick={() => setModalImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-600 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={modalImage}
              alt="Expanded Evidence"
              className="max-w-full max-h-[90vh] object-contain rounded-lg border border-neutral-800 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
