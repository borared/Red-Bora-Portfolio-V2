import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import Magnetic from "../global/Magnetic";

const collaborators = [
  { id: 1, name: "Red Bora", role: "Product & Frontend Lead", github: "https://github.com/borared", image: "https://github.com/borared.png", desktopPos: { x: 50, y: -75 }, mobilePos: { x: 60, y: -90 } },
  { id: 2, name: "Sophat Panhaseth", role: "Backend Architecture", github: "https://github.com/Panha-SeTh", image: "https://res.cloudinary.com/dicrvjstp/image/upload/v1775926232/photo_2026-04-11_23-50-17_vmo271.jpg", desktopPos: { x: 75, y: -25 }, mobilePos: { x: 60, y: -30 } },
  { id: 3, name: "Sot Noreaksattya", role: "Frontend & Game UI", github: "https://github.com/Lilsyaz45", image: "https://lilsyaz45.github.io/my-portfolio/image.jpg", desktopPos: { x: 75, y: 30 }, mobilePos: { x: 60, y: 30 } },
  { id: 4, name: "Tep Kheng Meng Khim", role: "UI/UX & Testing", github: "https://github.com/Mengkhim11", image: "https://res.cloudinary.com/dicrvjstp/image/upload/v1775925357/photo_2026-04-11_23-35-08_b5u1h1.jpg", desktopPos: { x: 50, y: 80 }, mobilePos: { x: 60, y: 90 } },
];

/**
 * Dynamic Recently Works Configuration
 */
export const recentlyWorks = [
  {
    id: "veaja",
    header: "RECENTLY WORK",
    title: "VEAJAA",
    titleFont: '"Stretch Pro", sans-serif',
    titleColor: "#a3ff05",
    subtitle: "Frontend Engineering Contributor",
    description:
      "Veaja is an AI voice agent that answers, qualifies, books, and dispatches around the clock with zero latency, logging actions and dispatching immediate next steps.",
    demoUrl: "https://red-bora-portfolio.vercel.app/",
    bgType: "monitor-terminal",
    bgImage:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1792865613/v2_bg3_sizfev.jpg",
    videoUrl:
      "https://res.cloudinary.com/dicrvjstp/video/upload/v1792865876/veaja-intro-v2_zpf8hz.mp4",
    align: "left",
    screenCoords: { iw: 1533, ih: 896, left: 934, top: 309, width: 427, height: 324 },
    collaborators: collaborators,
  },
  {
    id: "zinko",
    title: "Zinko",
    titleFont: '"Permanent Marker", sans-serif',
    titleColor: "#0537efff",
    subtitle: "Product Owner & Founder",
    description:
      "Zinko is a gamified live quiz platform designed like a competitive esports arena, featuring real-time team battles, tactical powers, and deep social engagement.",
    demoUrl: "https://zinko.games/",
    bgType: "monitor-terminal",
    bgImage:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1792868190/v2_bg4_vmmwyr.png",
    screenImage:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1777997332/Screenshot_2026-05-05_230842_acnwl7.png",
    videoUrl: "https://res.cloudinary.com/dicrvjstp/video/upload/v1792868731/zinko-intro_jw4blw.mp4",
    align: "right",
    screenCoords: { iw: 1533, ih: 896, left: 171, top: 309, width: 427, height: 319 },
    collaborators: collaborators,
  },
];

function WorkSlide({ work, index, total, isMobile }) {
  const [showCollaborators, setShowCollaborators] = useState(false);
  const [hoveredCollab, setHoveredCollab] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [screenPos, setScreenPos] = useState(null);

  // Monitor screen alignment for terminal background type
  useEffect(() => {
    if (work.bgType !== "monitor-terminal") return;

    const el = containerRef.current;
    if (!el) return;

    const updatePosition = () => {
      const cw = el.offsetWidth;
      const ch = el.offsetHeight;
      if (!cw || !ch) return;

      const coords = work.screenCoords || {
        iw: 1533,
        ih: 896,
        left: 934,
        top: 309,
        width: 427,
        height: 324,
      };

      const iw = coords.iw;
      const ih = coords.ih;
      const ir = iw / ih;
      const cr = cw / ch;

      let sw, sh, ox, oy;
      if (cr >= ir) {
        sw = cw;
        sh = cw / ir;
        ox = 0;
        oy = (ch - sh) / 2;
      } else {
        sh = ch;
        sw = ch * ir;
        ox = (cw - sw) / 2;
        oy = 0;
      }

      setScreenPos({
        left: ox + sw * (coords.left / iw),
        top: oy + sh * (coords.top / ih),
        width: sw * (coords.width / iw),
        height: sh * (coords.height / ih),
      });
    };

    updatePosition();
    const ro = new ResizeObserver(updatePosition);
    ro.observe(el);
    window.addEventListener("resize", updatePosition);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updatePosition);
    };
  }, [work.bgType, work.screenCoords]);

  const isStretchPro = work.titleFont?.includes("Stretch Pro");
  const isPermanentMarker = work.titleFont?.includes("Permanent Marker");

  return (
    <div
      ref={containerRef}
      id={`recently-work-${work.id}`}
      className="relative w-full min-h-screen md:h-screen h-screen overflow-hidden bg-black px-6 md:px-12 lg:px-24 flex flex-col justify-between py-8 md:py-12 select-none"
    >
      {/* Background layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <img
          src={work.bgImage}
          alt={`${work.title} background`}
          className="w-full h-full object-cover object-center"
        />

        {/* If monitor terminal type, render the live screen-fitted video or image */}
        {work.bgType === "monitor-terminal" && screenPos && (
          <div
            className="absolute overflow-hidden bg-black shadow-inner"
            style={{
              left: `${screenPos.left}px`,
              top: `${screenPos.top}px`,
              width: `${screenPos.width}px`,
              height: `${screenPos.height}px`,
            }}
          >
            {work.videoUrl ? (
              <video
                ref={videoRef}
                src={work.videoUrl}
                autoPlay
                muted={isMuted}
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : work.screenImage ? (
              <img
                src={work.screenImage}
                alt={`${work.title} screen display`}
                className="w-full h-full object-cover object-top"
              />
            ) : null}
            {/* Retro CRT Scanlines & Screen Glow */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.32)_50%)] bg-[length:100%_4px] opacity-35 z-10" />
            {/* Cyber Live Terminal Status Tag */}
            <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1.5 px-2.5 py-0.5 bg-black/80 border border-white/20 backdrop-blur-sm pointer-events-none">
              <span
                className="text-[8.5px] font-mono tracking-widest text-[#a3ff05] uppercase font-black"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                [REC // LIVE FEED 2050]
              </span>
            </div>

            {/* Tactile CRT Video Audio Toggle */}
            {work.videoUrl && (
              <button
                type="button"
                onClick={() => {
                  setIsMuted((prev) => {
                    const next = !prev;
                    if (videoRef.current) {
                      videoRef.current.muted = next;
                    }
                    return next;
                  });
                }}
                className="absolute top-2.5 right-2.5 z-30 flex items-center gap-1.5 px-2 py-0.5 bg-black/85 hover:bg-black border border-white/25 hover:border-[#ea580c] text-white text-[9px] font-mono tracking-wider rounded backdrop-blur-md transition-all cursor-pointer pointer-events-auto shadow-md select-none group"
                style={{ fontFamily: '"Space Mono", monospace' }}
                title={isMuted ? "Click to unmute video audio" : "Click to mute video audio"}
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-3 h-3 text-neutral-400 group-hover:text-white" />
                    <span className="text-neutral-300 group-hover:text-white">AUDIO: OFF</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3 h-3 text-[#ea580c] animate-pulse" />
                    <span className="text-[#ea580c] font-bold">AUDIO: LIVE</span>
                  </>
                )}
              </button>
            )}

            {/* Subtle retro CRT reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none z-10" />
          </div>
        )}

        {/* Subtle dark overlay for media-showcase background legibility */}
        {work.bgType === "media-showcase" && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] pointer-events-none" />
        )}
      </div>

      {/* Top Header */}
      {work.header ? (
        <div className="relative z-10 w-full pt-2 md:pt-4">
          <motion.h2
            initial={{ y: 25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center text-3xl sm:text-4xl md:text-5xl font-black tracking-wider text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]"
            style={{ fontFamily: work.headerFont || '"Audiowide", cursive, sans-serif' }}
          >
            {work.header}
          </motion.h2>
        </div>
      ) : (
        <div className="h-6" />
      )}

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-2 md:py-6">
        <div
          className={`flex flex-col ${work.align === "right" ? "md:flex-row-reverse" : "md:flex-row"
            } items-center justify-between gap-10 md:gap-16`}
        >
          {/* Left: text content */}
          <div className="w-full md:w-7/12 lg:w-1/2 space-y-6 md:space-y-8 max-w-xl">
            <div className="space-y-2">
              <h3
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-xl tracking-normal leading-tight"
                style={{
                  fontFamily: isPermanentMarker
                    ? '"Permanent Marker", cursive, sans-serif'
                    : work.titleFont || '"Audiowide", sans-serif',
                  color: work.titleColor || "#ffffff",
                  ...(isStretchPro
                    ? {
                      fontVariantLigatures: "common-ligatures contextual",
                      fontFeatureSettings: '"liga" 1, "calt" 1',
                      letterSpacing: "normal",
                      fontWeight: 400,
                    }
                    : isPermanentMarker
                      ? {
                        fontWeight: 400,
                        letterSpacing: "0.02em",
                      }
                      : {
                        fontWeight: 800,
                      }),
                }}
              >
                {work.title}
              </h3>
              <p
                className="text-base sm:text-xl md:text-2xl font-medium text-neutral-300 tracking-wide"
                style={{ fontFamily: work.subtitleFont || '"Quantico", sans-serif' }}
              >
                {work.subtitle}
              </p>
            </div>

            <p
              className="text-base sm:text-lg md:text-xl leading-relaxed text-neutral-200 drop-shadow-md"
              style={{ fontFamily: work.descFont || '"Quantico", sans-serif' }}
            >
              {work.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Demo button */}
              {work.demoUrl && (
                <Magnetic>
                  <a
                    href={work.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontFamily: '"Audiowide", cursive, sans-serif' }}
                    className="group relative overflow-hidden inline-flex items-center gap-2.5 rounded-full bg-black/90 border border-white/20 text-white px-6 py-2.5 text-xs sm:text-sm md:text-base font-medium tracking-wider shadow-md hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500 transition hover:cursor-pointer backdrop-blur-sm"
                  >
                    <div
                      className="absolute inset-0 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 rounded-full"
                      style={{ backgroundColor: work.hoverColor || "#ea580c" }}
                    />
                    <span className="relative z-10">Demo</span>
                    <span className="relative z-10 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-3.5 w-3.5"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </a>
                </Magnetic>
              )}

              {/* Collaborator button */}
              {work.collaborators && work.collaborators.length > 0 && (
                <div className="relative inline-block">
                  <Magnetic>
                    <button
                      onClick={() => setShowCollaborators(!showCollaborators)}
                      style={{ fontFamily: '"Audiowide", cursive, sans-serif' }}
                      className="group relative overflow-hidden hover:cursor-pointer inline-flex items-center gap-2.5 rounded-full bg-black/90 border border-white/20 text-white px-6 py-2.5 text-xs sm:text-sm md:text-base font-medium tracking-wider shadow-md hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500 transition backdrop-blur-sm"
                    >
                      <div
                        className="absolute inset-0 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 rounded-full"
                        style={{ backgroundColor: work.hoverColor || "#ea580c" }}
                      />
                      <span className="relative z-10">Collaborator</span>
                      <span className="relative z-10 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-3.5 w-3.5"
                        >
                          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h7.5c-.31-.45-.5-.97-.5-1.5 0-1.38.7-2.59 1.76-3.32C9.11 13.45 8.5 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 2.09 1.97 3.62 0 .53-.11 1.05-.29 1.52H23v-1.5C23 14.17 18.33 13 16 13z" />
                        </svg>
                      </span>
                    </button>
                  </Magnetic>

                  <AnimatePresence>
                    {showCollaborators && (
                      <div className="absolute top-1/2 right-0 pointer-events-none z-10">
                        {work.collaborators.map((collab, index) => (
                          <motion.a
                            key={collab.id}
                            href={collab.github}
                            target="_blank"
                            rel="noreferrer"
                            onMouseEnter={() => setHoveredCollab(collab.id)}
                            onMouseLeave={() => setHoveredCollab(null)}
                            initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                            animate={{
                              opacity: 1,
                              x: isMobile ? collab.mobilePos.x : collab.desktopPos.x,
                              y: isMobile ? collab.mobilePos.y : collab.desktopPos.y,
                              scale: 1,
                            }}
                            exit={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.05,
                              type: "spring",
                              stiffness: 260,
                              damping: 20,
                            }}
                            className="absolute w-[44px] h-[44px] -ml-[22px] -mt-[22px] bg-[#d9d9d9] rounded-full flex items-center justify-center hover:bg-[#ea580c] transition-colors pointer-events-auto cursor-pointer shadow-md ring-2 ring-black"
                          >
                            <img
                              src={collab.image}
                              alt={collab.name}
                              className="w-full h-full object-cover rounded-full"
                            />
                            <AnimatePresence>
                              {hoveredCollab === collab.id && (
                                <motion.div
                                  initial={{ opacity: 0, x: -5, scale: 0.95 }}
                                  animate={{ opacity: 1, x: 0, scale: 1 }}
                                  exit={{ opacity: 0, x: -5, scale: 0.95 }}
                                  transition={{ duration: 0.2 }}
                                  className="absolute left-full ml-3 whitespace-nowrap bg-black/95 border border-white/20 text-white px-3.5 py-1.5 rounded-xl shadow-2xl pointer-events-none flex flex-col z-50 backdrop-blur-md"
                                >
                                  <span className="font-bold text-sm text-white leading-tight">
                                    {collab.name}
                                  </span>
                                  {collab.role && (
                                    <span
                                      className="text-[10px] font-mono text-[#ea580c] uppercase tracking-wider font-semibold"
                                      style={{ fontFamily: '"Space Mono", monospace' }}
                                    >
                                      {collab.role}
                                    </span>
                                  )}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.a>
                        ))}
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>

          {/* Right: media showcase (if available) */}
          {work.mediaImage && (
            <motion.div
              className="w-full md:w-5/12 lg:w-1/2 flex justify-center"
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="w-full max-w-lg lg:max-w-xl overflow-hidden rounded-2xl shadow-2xl border border-white/10 bg-black/40 backdrop-blur-sm group hover:border-white/20 transition-all duration-300">
                <img
                  src={work.mediaImage}
                  alt={`${work.title} preview`}
                  className="w-full h-auto object-cover block group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Slide Index Indicator Footer */}
      <div className="relative z-10 w-full flex justify-between items-center text-xs md:text-sm text-neutral-400/80 px-2 font-mono">
        <span className="tracking-widest">0{index + 1} / 0{total}</span>
        <span className="uppercase tracking-widest text-neutral-400/60">{work.title}</span>
      </div>
    </div>
  );
}

export default function RecentlyWork() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full">
      {recentlyWorks.map((work, index) => (
        <WorkSlide
          key={work.id}
          work={work}
          index={index}
          total={recentlyWorks.length}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
}