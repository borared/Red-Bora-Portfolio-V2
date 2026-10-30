import React, { useRef, useState, useEffect, useMemo } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { ExternalLink, GitBranch, X, Layers } from "lucide-react";
import { optimizeThumb, optimizeBg } from "../../utils/cloudinary";

// ── Data ────────────────────────────────────────────────────────────────────

const schoolProjects = [
  {
    id: "s1",
    category: "school",
    categoryLabel: "School Project",
    title: "NaekWatch",
    tagline:
      "NaekWatch is a movie streaming online, it provides service movie and series with khmer dubbing. Also NaekWatch has a task to do to earn point for redeem product.",
    image: optimizeThumb(
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1774027492/Screenshot_2026-03-19_222317_wzljbh.png", 800
    ),
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/borared/frontend-naek-watch",
    demo: "https://naek-watch.vercel.app/",
  },
  {
    id: "s2",
    category: "school",
    categoryLabel: "School Project",
    title: "TosTrip",
    tagline:
      "TosTrip is a trip guidance exclusively dedicated to guide tourist for their trip around the world. This project showcases the elegance, performance of trip advisor while offering a seamless user experience.",
    image: optimizeThumb(
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1774027670/Screenshot_2026-03-21_002740_qmvzh9.png", 800
    ),
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/borared/TosTrip-Trip-Guidance-Website",
    demo: "https://tos-trip-trip-guidance-website.vercel.app/",
  },
  {
    id: "s3",
    category: "school",
    categoryLabel: "School Project",
    title: "Hospital Management System",
    tagline:
      "The Hospital Admin Management System is a centralized, object-oriented platform designed to streamline healthcare operations. It serves as a digital hub for administrators to oversee the essential pillars of a hospital's daily workflow.",
    image: optimizeThumb(
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1775829871/Screenshot_2026-04-10_210224_jhl8t1.png", 800
    ),
    tags: ["Java", "OOP Concept", "Console-based"],
    link: "https://github.com/borared/Hospital-Admin-Management-System",
    demo: "https://github.com/borared/Hospital-Admin-Management-System",
  },
  {
    id: "s4",
    category: "school",
    categoryLabel: "School Project",
    title: "Mini Calculator",
    tagline: "A simple calculator with basic arithmetic operations.",
    image: optimizeThumb(
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1776058028/Screenshot_2026-04-13_122656_y8nkua.png", 800
    ),
    tags: ["Circuit Verse Tool"],
    link: "#",
    demo: "https://circuitverse.org/simulator/edit/final-mini-calculator-project-g2-t4",
  },
];

const personalProjects = [
  {
    id: "p1",
    category: "startup",
    categoryLabel: "StartUp Project",
    title: "VEAJA",
    tagline: "AI voice agent that can handle multiple calls at the same time.",
    image: optimizeThumb(
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1792934281/Screenshot_2026-10-25_201753_lsvwzc.png", 800
    ),
    tags: ["NestJS", "React", "TypeScript", "Supabase"],
    link: "https://github.com/borared/Red-Bora-Portfolio",
    demo: "https://red-bora-portfolio.vercel.app/",
  },
  {
    id: "p2",
    category: "startup",
    categoryLabel: "StartUp Project",
    title: "Zinko",
    tagline:
      "Zinko is a gamified quiz platform that transforms learning into an exciting adventure and strategy. It empowers educators to create engaging, interactive quizzes that motivate students and make reviewing course material fun and rewarding.",
    image: optimizeThumb(
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1792934260/Screenshot_2026-10-25_201655_yqzvaw.png", 800
    ),
    tags: ["React", "Node.js", "MongoDB", "WebSocket"],
    link: "https://github.com/borared/zinko-quiz-with-strategy",
    demo: "https://zinko.games/",
  },
  {
    id: "p3",
    category: "personal",
    categoryLabel: "Personal Project",
    title: "Portfolio V2",
    tagline: "My personal portfolio — designed from scratch with 3D elements and smooth animations.",
    image: optimizeThumb(
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1792934715/Screenshot_2026-10-25_202456_q00qta.png", 800
    ),
    tags: ["React", "Vite", "JavaScript"],
    link: "https://github.com/borared/Red-Bora-Portfolio-V2",
    demo: "https://red-bora-portfolio-v2.vercel.app/",
  },
  {
    id: "p4",
    category: "personal",
    categoryLabel: "Company Project",
    title: "Khmer PenPal",
    tagline: "Khmer PenPal is a digital drawing letter for kids.",
    image: optimizeThumb(
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1792968664/Screenshot_2026-10-26_055027_yh7ykl.png", 800
    ),
    tags: ["PhotoShop", "Gemini", "UI Design", "Mobile App"],
    link: "#",
    demo: "#",
    galleryImages: [
      optimizeThumb("https://res.cloudinary.com/dicrvjstp/image/upload/v1792968919/photo_2026-10-26_05-49-04_omtd3d.jpg", 1000),
      optimizeThumb("https://res.cloudinary.com/dicrvjstp/image/upload/v1792968918/photo_2026-10-26_05-49-06_vlpqb8.jpg", 1000),
      optimizeThumb("https://res.cloudinary.com/dicrvjstp/image/upload/v1792968918/photo_2026-10-26_05-49-23_mwhif7.jpg", 1000),
      optimizeThumb("https://res.cloudinary.com/dicrvjstp/image/upload/v1792968918/photo_2026-10-26_05-49-18_illeab.jpg", 1000),
      optimizeThumb("https://res.cloudinary.com/dicrvjstp/image/upload/v1792968918/photo_2026-10-26_05-49-51_cyqfhc.jpg", 1000),
      optimizeThumb("https://res.cloudinary.com/dicrvjstp/image/upload/v1792968663/Screenshot_2026-10-26_055004_nojmqh.png", 1000),
      optimizeThumb("https://res.cloudinary.com/dicrvjstp/image/upload/v1792968664/Screenshot_2026-10-26_054948_lpebsv.png", 1000),
    ],
  },
  {
    id: "p5",
    category: "personal",
    categoryLabel: "Personal Project",
    title: "Sched",
    tagline:
      "Sched is a minimalist full-stack Study Planner web application designed to help students organize their tasks, manage deadlines, and track study progress in a simple and user-friendly way.",
    image: optimizeThumb(
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1776334290/Screenshot_2026-04-16_171101_bdll5y.png", 800
    ),
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/borared/Sched-Student-Planner-Subject",
    demo: "https://sched-planner.vercel.app/",
  },
  {
    id: "p6",
    category: "personal",
    categoryLabel: "Freelance Project",
    title: "Web Mojo",
    tagline: "A freelance company site showcasing web development and creative agency capabilities.",
    image: optimizeThumb(
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1774028194/Screenshot_2026-03-21_003624_hz7eu9.png", 800
    ),
    tags: ["React", "Vite", "JavaScript"],
    link: "https://github.com/borared/Web-Mojo",
    demo: "https://web-mojo.vercel.app/",
  },
  {
    id: "p7",
    category: "personal",
    categoryLabel: "Freelance Project",
    title: "Banner Design",
    tagline: "Freelance branding and dental clinic advertising banners created with Photoshop.",
    image: optimizeThumb(
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1774028656/Screenshot_2026-03-21_004403_a5slxk.png", 800
    ),
    tags: ["PhotoShop", "UI Design"],
    link: "#",
    demo: "#",
    galleryImages: [
      optimizeThumb("https://res.cloudinary.com/dicrvjstp/image/upload/v1775997911/80x200_jpd5sm.jpg", 1000),
      optimizeThumb("https://res.cloudinary.com/dicrvjstp/image/upload/v1775997911/OPTION5_ftdubu.jpg", 1000),
      optimizeThumb("https://res.cloudinary.com/dicrvjstp/image/upload/v1775997910/PEAK4_x9j9nj.jpg", 1000),
      optimizeThumb("https://res.cloudinary.com/dicrvjstp/image/upload/v1775997910/60x90_ddv9k4.jpg", 1000),
      optimizeThumb("https://res.cloudinary.com/dicrvjstp/image/upload/v1775997909/Option_6_khloty.jpg", 1000),
    ],
  },
  {
    id: "p8",
    category: "personal",
    categoryLabel: "Personal Project",
    title: "Portfolio V1",
    tagline: "My initial personal portfolio — designed from scratch to display early creative projects.",
    image: optimizeThumb(
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1776057257/Screenshot_2026-04-13_121403_wkgfp0.png", 800
    ),
    tags: ["React JS", "Vite", "JavaScript"],
    link: "https://github.com/borared/Red-Bora-Portfolio",
    demo: "https://red-bora-portfolio.vercel.app/",
  },
];

const allProjects = [...personalProjects, ...schoolProjects];

// ── Tabletop Perspective Scatter Profiles (Deterministic organic placement) ──
const TABLE_ROTATIONS = [-4.2, 3.6, -2.4, 4.5, -3.4, 2.8, -4.0, 3.2, -1.8, 3.8, -2.8, 2.2];
const TABLE_Y_OFFSETS = [16, -20, 24, -14, 18, -22, 12, -18, 22, -12, 16, -16];

// ── Sub-components: Plastic Sample Project Card with Tabletop 3D Perspective ──

function ProjectCard({ project, index, onOpenGallery }) {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  // Tabletop resting offsets
  const restRotation = TABLE_ROTATIONS[index % TABLE_ROTATIONS.length];
  const restY = TABLE_Y_OFFSETS[index % TABLE_Y_OFFSETS.length];

  // 3D Mouse Tilt & Specular Cellophane Glare
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 22 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 22 });

  const tiltRotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const tiltRotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

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
    setHovered(false);
  };

  return (
    <motion.div
      className="relative shrink-0 flex items-center justify-center will-change-transform py-4"
      style={{
        zIndex: hovered ? 45 : 10 + (index % 6),
      }}
      animate={{
        y: hovered ? restY - 28 : restY,
        rotate: hovered ? 0 : restRotation,
        scale: hovered ? 1.045 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 240,
        damping: 22,
      }}
    >
      {/* Tabletop Surface Contact Shadow */}
      <motion.div
        aria-hidden="true"
        animate={{
          y: hovered ? 44 : 14,
          scaleX: hovered ? 1.15 : 0.94,
          scaleY: hovered ? 0.65 : 0.95,
          opacity: hovered ? 0.22 : 0.72,
          filter: hovered ? "blur(24px)" : "blur(12px)",
        }}
        transition={{ type: "spring", stiffness: 240, damping: 22 }}
        className="absolute -bottom-2 left-6 right-6 h-8 bg-black/95 rounded-[50%] pointer-events-none -z-10"
      />

      {/* Physical Specimen Sleeve Card with 3D Mouse Tilt */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: tiltRotateX,
          rotateY: tiltRotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-[300px] sm:w-[340px] md:w-[370px] lg:w-[390px] h-[450px] sm:h-[475px] rounded-2xl sm:rounded-3xl overflow-hidden bg-white/[0.04] backdrop-blur-2xl border border-white/20 shadow-[0_22px_55px_-15px_rgba(0,0,0,0.95),inset_0_1.5px_2px_rgba(255,255,255,0.45),inset_0_-1px_1px_rgba(255,255,255,0.15),inset_1px_0_2px_rgba(255,255,255,0.2),inset_-1px_0_2px_rgba(255,255,255,0.15)] hover:border-white/25 transition-colors duration-300 flex flex-col justify-between p-3.5 sm:p-4 select-none group will-change-transform"
      >
        {/* Heat-Sealed Inner Seam Rim */}
        <div className="absolute inset-1.5 sm:inset-2 rounded-[14px] sm:rounded-[18px] border border-white/10 pointer-events-none z-20" />

        {/* Retail Packaging Hang Hole Punch Slot */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex items-center justify-center">
          <div className="w-9 sm:w-11 h-2 sm:h-2.5 rounded-full border border-white/30 bg-black/70 shadow-[inset_0_1px_2px_rgba(0,0,0,0.9)] backdrop-blur-md" />
        </div>

        {/* Dynamic Specular Cellophane Glare (Follows Cursor) */}
        <motion.div
          style={{
            opacity: glareOpacitySpring,
            background: `radial-gradient(circle 200px at ${glareX} ${glareY}, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.06) 45%, transparent 70%)`,
          }}
          className="absolute inset-0 pointer-events-none z-25"
        />

        {/* Plastic Sheen / Glare Reflection 1: Diagonal Light Streak */}
        <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] pointer-events-none z-20 bg-gradient-to-br from-white/[0.12] via-transparent to-transparent -rotate-12" />

        {/* Plastic Sheen / Glare Reflection 2: Top Surface Gloss */}
        <div className="absolute inset-0 pointer-events-none z-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.14] via-transparent to-black/35" />

        {/* Cellophane Crease / Specular Diagonal Slit */}
        <div className="absolute inset-0 pointer-events-none z-20 bg-[linear-gradient(135deg,transparent_35%,rgba(255,255,255,0.08)_42%,rgba(255,255,255,0.02)_45%,transparent_50%)]" />

        {/* Header Row of the Plastic Sample (Zero Circles) */}
        <div className="relative z-30 flex items-center justify-between pt-1 mb-1.5">
          <span
            className="text-[11px] sm:text-xs font-bold tracking-widest text-white/90 uppercase"
            style={{ fontFamily: '"Quantico", sans-serif' }}
          >
            SAMPLE // 0{index + 1}
          </span>
          <span
            className="text-[9px] sm:text-[10px] text-neutral-400 tracking-wider font-mono"
            style={{ fontFamily: '"Space Mono", monospace' }}
          >
            [LOT: {String(project.id).toUpperCase()}]
          </span>
        </div>

        {/* Poster / Preview Image Container inside sleeve with Sharp Corner Brackets */}
        <div className="relative z-30 bg-[#0c0c0c] rounded-xl overflow-hidden aspect-video flex items-center justify-center mb-2.5 border border-white/15 shadow-inner group/preview">
          {/* Sharp Industrial CAD Corner Brackets (no circles) */}
          <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-white/40 group-hover/preview:border-white/70 transition-colors pointer-events-none z-30" />
          <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-white/40 group-hover/preview:border-white/70 transition-colors pointer-events-none z-30" />
          <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-white/40 group-hover/preview:border-white/70 transition-colors pointer-events-none z-30" />
          <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-white/40 group-hover/preview:border-white/70 transition-colors pointer-events-none z-30" />

          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 group-hover/preview:scale-105"
          />

          {/* Action Overlay */}
          <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2.5 p-2 z-30">
            {project.link && project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white/15 hover:bg-white text-white hover:text-black border border-white/30 rounded-md font-bold hover:scale-105 active:scale-95 transition-all text-xs"
                style={{ fontFamily: '"Quantico", sans-serif' }}
              >
                <GitBranch className="w-3.5 h-3.5" />
                Code
              </a>
            )}
            <button
              type="button"
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#ea580c] hover:bg-[#ff6d1a] text-white rounded-md font-bold hover:scale-105 active:scale-95 shadow-[0_0_12px_rgba(234,88,12,0.4)] transition-all text-xs cursor-pointer"
              style={{ fontFamily: '"Quantico", sans-serif' }}
              onClick={(e) => {
                e.stopPropagation();
                if (project.galleryImages) {
                  if (onOpenGallery) onOpenGallery(project.galleryImages);
                } else if (project.demo && project.demo !== "#") {
                  window.open(project.demo, "_blank");
                }
              }}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              {project.galleryImages ? "Gallery" : "Demo"}
            </button>
          </div>

          {/* Gallery badge if item has images */}
          {project.galleryImages && (
            <div
              className="absolute top-2 right-2 bg-black/75 backdrop-blur-sm text-white px-2 py-0.5 rounded text-[9px] flex items-center gap-1 border border-white/20 shadow-sm z-30"
              style={{ fontFamily: '"Quantico", sans-serif' }}
            >
              <Layers className="w-2.5 h-2.5 text-[#ea580c]" />
              {project.galleryImages.length} Shots
            </div>
          )}
        </div>

        {/* Content Information */}
        <div className="relative z-30 flex-1 flex flex-col justify-between">
          <div>
            {/* Category Pill */}
            <div className="flex items-center justify-between gap-2 mb-1">
              <span
                className="text-xs uppercase tracking-wider text-[#ea580c] font-bold"
                style={{ fontFamily: '"Quantico", sans-serif' }}
              >
                [ {project.categoryLabel} ]
              </span>
            </div>

            {/* Title in Audiowide */}
            <h3
              className="text-white text-lg sm:text-xl md:text-2xl font-bold tracking-wide mb-1 line-clamp-1 transition-colors"
              style={{ fontFamily: '"Audiowide", cursive, sans-serif' }}
            >
              {project.title}
            </h3>

            {/* Description in Quantico */}
            <p
              className="text-neutral-300 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-1.5"
              style={{ fontFamily: '"Quantico", sans-serif' }}
            >
              {project.tagline}
            </p>
          </div>

          {/* Bottom: Tags */}
          <div>
            <div className="pt-2 border-t border-white/10 flex items-center gap-1.5 sm:gap-2 flex-wrap mb-1.5">
              <span
                className="text-xs text-neutral-300 font-medium mr-0.5"
                style={{ fontFamily: '"Quantico", sans-serif' }}
              >
                Built with:
              </span>
              {project.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-0.5 rounded bg-white/10 text-neutral-200 border border-white/15 group-hover:border-white/30 font-medium transition-colors"
                  style={{ fontFamily: '"Quantico", sans-serif' }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Authentic Sample Barcode Footer */}
            <div
              className="pt-1 border-t border-white/10 flex items-center justify-between text-[8px] sm:text-[9px] text-neutral-400 tracking-wider"
              style={{ fontFamily: '"Quantico", sans-serif' }}
            >
              <span>SPEC // 2026-RB</span>
              <span className="font-mono text-white/50 tracking-[0.25em] text-[9px]">||| | |||| || |</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Main Component ───────────────────────────────────────────────────────────

export default function AllProject() {
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const targetRef = useRef(null);
  const trackRef = useRef(null);
  const [maxScroll, setMaxScroll] = useState(0);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return allProjects;
    if (selectedCategory === "startup") return allProjects.filter((p) => p.category === "startup");
    if (selectedCategory === "school") return allProjects.filter((p) => p.category === "school");
    if (selectedCategory === "personal") return allProjects.filter((p) => p.category === "personal");
    return allProjects;
  }, [selectedCategory]);

  const categories = useMemo(
    () => [
      { id: "all", label: "ALL", count: allProjects.length },
      { id: "startup", label: "STARTUP", count: allProjects.filter((p) => p.category === "startup").length },
      { id: "school", label: "SCHOOL", count: allProjects.filter((p) => p.category === "school").length },
      { id: "personal", label: "PERSONAL", count: allProjects.filter((p) => p.category === "personal").length },
    ],
    []
  );

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Track active project index for telemetry HUD
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const rawIdx = Math.floor((latest / 0.88) * filteredProjects.length);
    const clampedIdx = Math.max(0, Math.min(rawIdx, filteredProjects.length - 1));
    setCurrentCardIndex(clampedIdx);
  });

  const updateScroll = () => {
    if (trackRef.current) {
      const trackWidth = trackRef.current.scrollWidth;
      const windowWidth = window.innerWidth;
      const scrollDist = Math.max(0, trackWidth - windowWidth);
      setMaxScroll(scrollDist);
    }
  };

  useEffect(() => {
    updateScroll();
    const t1 = setTimeout(updateScroll, 100);
    const t2 = setTimeout(updateScroll, 400);

    let resizeObserver;
    if (typeof ResizeObserver !== "undefined" && trackRef.current) {
      resizeObserver = new ResizeObserver(updateScroll);
      resizeObserver.observe(trackRef.current);
    }

    if (document.fonts) {
      document.fonts.ready.then(updateScroll);
    }

    window.addEventListener("resize", updateScroll);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener("resize", updateScroll);
    };
  }, [filteredProjects]);

  // Smoothly scrolls all cards into view from 0 to 0.88, then keeps section stuck from 0.88 to 1.0
  const x = useTransform(scrollYProgress, [0, 0.88, 1], [0, -maxScroll, -maxScroll]);

  // Background horizontal parallax drift
  const bgX = useTransform(scrollYProgress, [0, 0.88], ["0%", "-14%"]);

  // Linear progress bar scale
  const progressBarScale = useTransform(scrollYProgress, [0, 0.88], [0, 1]);

  return (
    <>
      <section
        ref={targetRef}
        id="projects"
        className="relative w-full h-[520vh] bg-black"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-5 md:py-7">
          {/* Background Image Layer with Smooth Parallax Drift */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
            <motion.div
              style={{ x: bgX }}
              className="absolute inset-0 w-[125%] h-full will-change-transform"
            >
              <img
                src={optimizeBg("https://res.cloudinary.com/dicrvjstp/image/upload/v1792923009/v2_bg7_rgfew6.png", 1920)}
                alt="All Projects Background"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-left md:object-center"
              />
            </motion.div>
            {/* Contrast overlays */}
            <div className="absolute inset-0 bg-black/45 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/75 pointer-events-none" />
          </div>

          {/* Header Bar & Sharp Category Filter Tabs */}
          <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 sm:px-8">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider text-[#ea580c] drop-shadow-[0_0_25px_rgba(234,88,12,0.45)] mb-2.5"
              style={{ fontFamily: '"Audiowide", cursive, sans-serif' }}
            >
              PROJECTS
            </h1>

            {/* Sharp Rectangular Category Filter Tabs (Zero Circles) */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap pointer-events-auto">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      if (targetRef.current) {
                        targetRef.current.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className={`px-3.5 sm:px-4 py-1.5 text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "text-black bg-[#ea580c] shadow-[0_0_16px_rgba(234,88,12,0.4)]"
                        : "text-white/70 hover:text-white bg-black/60 hover:bg-white/10 border border-white/20"
                    }`}
                    style={{ fontFamily: '"Quantico", sans-serif' }}
                  >
                    <span>
                      [ {cat.label} // 0{cat.count} ]
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Data Component: Sticky Horizontal Scrolling Track on 3D Table Surface */}
          <div
            className="relative z-10 flex-1 flex items-center w-full min-h-0 my-auto py-2 overflow-hidden"
            style={{ perspective: "1400px" }}
          >
            {/* Tabletop Perspective Surface Grid Plane */}
            <div
              className="absolute inset-x-0 bottom-2 sm:bottom-6 h-52 sm:h-72 pointer-events-none opacity-20 select-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(234,88,12,0.12) 0%, transparent 85%), repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 80px), repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px)",
                transform: "perspective(900px) rotateX(62deg)",
                transformOrigin: "bottom center",
                maskImage: "linear-gradient(to top, black 25%, transparent 95%)",
                WebkitMaskImage: "linear-gradient(to top, black 25%, transparent 95%)",
              }}
            />

            <motion.div
              ref={trackRef}
              style={{
                x,
                paddingRight: "max(120px, calc(50vw - 195px))",
              }}
              className="flex gap-10 sm:gap-14 md:gap-16 items-center will-change-transform pl-6 sm:pl-10 py-14 sm:py-20 md:py-24"
            >
              {filteredProjects.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={idx}
                  onOpenGallery={setSelectedGallery}
                />
              ))}
            </motion.div>
          </div>

          {/* Sharp Industrial Linear Progress Rail (Zero Circles) */}
          <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 flex items-center justify-between gap-6 pointer-events-none select-none text-[10px] font-mono tracking-widest text-white/60 uppercase">
            <div className="flex items-center gap-2">
              <span className="text-[#ea580c] font-bold" style={{ fontFamily: '"Space Mono", monospace' }}>
                [CATALOG // 2026-2050]
              </span>
            </div>

            {/* Linear Progress Wire */}
            <div className="flex-1 h-[2px] bg-white/15 relative overflow-hidden">
              <motion.div
                style={{ scaleX: progressBarScale }}
                className="absolute inset-y-0 left-0 w-full bg-[#ea580c] origin-left shadow-[0_0_10px_#ea580c]"
              />
            </div>

            <div className="flex items-center gap-2 text-white/80" style={{ fontFamily: '"Quantico", sans-serif' }}>
              <span>SPECIMEN:</span>
              <span className="text-[#ea580c] font-bold">
                [ 0{Math.min(currentCardIndex + 1, filteredProjects.length)} / 0{filteredProjects.length} ]
              </span>
            </div>
          </div>

          {/* Bottom Edge Marquee */}
          <div className="relative z-10 w-full flex items-center justify-center overflow-hidden pointer-events-none select-none pt-2 pb-1">
            <div
              className="relative w-full overflow-hidden flex items-center"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
              }}
            >
              <div
                className="flex w-max shrink-0 will-change-transform"
                style={{
                  animation: "cyberpunkMarquee 35s linear infinite",
                }}
              >
                {/* Primary Group */}
                <div className="flex shrink-0 items-center">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={`cp-group1-${i}`}
                      className="flex items-center whitespace-nowrap px-4 sm:px-6 md:px-8"
                    >
                      <span
                        className="text-[#ea580c] font-black tracking-widest text-sm sm:text-base md:text-xl drop-shadow-[0_0_16px_rgba(234,88,12,0.65)]"
                        style={{ fontFamily: '"Noto Sans JP", sans-serif' }}
                      >
                        ラボラトリー 2050
                      </span>
                      <span className="mx-3 sm:mx-4 text-[#ea580c]/50 font-mono text-sm sm:text-base">
                        //
                      </span>
                      <span
                        className="text-white/90 font-black tracking-widest text-sm sm:text-base md:text-xl drop-shadow-[0_0_14px_rgba(255,255,255,0.3)]"
                        style={{ fontFamily: '"Audiowide", cursive, sans-serif' }}
                      >
                        LABORATORY 2050
                      </span>
                      <span className="mx-3 sm:mx-4 text-[#ea580c]/50 font-mono text-sm sm:text-base">
                        //
                      </span>
                    </div>
                  ))}
                </div>

                {/* Duplicate Group for seamless infinite loop */}
                <div className="flex shrink-0 items-center" aria-hidden="true">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={`cp-group2-${i}`}
                      className="flex items-center whitespace-nowrap px-4 sm:px-6 md:px-8"
                    >
                      <span
                        className="text-[#ea580c] font-black tracking-widest text-sm sm:text-base md:text-xl drop-shadow-[0_0_16px_rgba(234,88,12,0.65)]"
                        style={{ fontFamily: '"Noto Sans JP", sans-serif' }}
                      >
                        ラボラトリー 2050
                      </span>
                      <span className="mx-3 sm:mx-4 text-[#ea580c]/50 font-mono text-sm sm:text-base">
                        //
                      </span>
                      <span
                        className="text-white/90 font-black tracking-widest text-sm sm:text-base md:text-xl drop-shadow-[0_0_14px_rgba(255,255,255,0.3)]"
                        style={{ fontFamily: '"Audiowide", cursive, sans-serif' }}
                      >
                        LABORATORY 2050
                      </span>
                      <span className="mx-3 sm:mx-4 text-[#ea580c]/50 font-mono text-sm sm:text-base">
                        //
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes cyberpunkMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>

      {/* Full-Screen Gallery Modal */}
      <AnimatePresence>
        {selectedGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex justify-center bg-black/88 backdrop-blur-xl p-4 md:p-10 pt-16"
            onClick={() => setSelectedGallery(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-full max-h-[85vh] bg-[#101010] rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-white/15"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/60">
                <h2
                  className="text-[#ea580c] text-base md:text-lg tracking-wider"
                  style={{ fontFamily: '"Audiowide", cursive, sans-serif' }}
                >
                  BANNER DESIGN GALLERY
                </h2>
                <button
                  onClick={() => setSelectedGallery(null)}
                  className="w-9 h-9 bg-white/10 hover:bg-[#ea580c] text-white rounded-md border border-white/20 flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Gallery Images */}
              <div
                className="overflow-y-auto w-full h-full p-4 md:p-8 flex flex-col items-center gap-10 scroll-smooth"
                style={{ scrollbarWidth: "thin", scrollbarColor: "#ea580c #1a1a1a" }}
              >
                {selectedGallery.map((imgUrl, i) => (
                  <img
                    key={i}
                    src={imgUrl}
                    alt={`Gallery item ${i + 1}`}
                    className="w-full max-w-3xl h-auto rounded-xl shadow-2xl border border-white/15"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

