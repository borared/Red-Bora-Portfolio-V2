import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ExternalLink, GitBranch, X, Layers } from "lucide-react";

// ── Data ────────────────────────────────────────────────────────────────────

const schoolProjects = [
  {
    id: "s1",
    category: "school",
    categoryLabel: "School Project",
    title: "NaekWatch",
    tagline:
      "NaekWatch is a movie streaming online, it provides service movie and series with khmer dubbing. Also NaekWatch has a task to do to earn point for redeem product.",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1774027492/Screenshot_2026-03-19_222317_wzljbh.png",
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
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1774027670/Screenshot_2026-03-21_002740_qmvzh9.png",
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
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1775829871/Screenshot_2026-04-10_210224_jhl8t1.png",
    tags: ["Java", "OOP Concept", "Console-based"],
    link: "https://github.com/borared/Hospital-Admin-Management-System",
    demo: "https://tos-trip-trip-guidance-website.vercel.app/",
  },
  {
    id: "s4",
    category: "school",
    categoryLabel: "School Project",
    title: "Mini Calculator",
    tagline: "A simple calculator with basic arithmetic operations.",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1776058028/Screenshot_2026-04-13_122656_y8nkua.png",
    tags: ["Circuit Verse Tool"],
    link: "#",
    demo: "https://circuitverse.org/simulator/edit/final-mini-calculator-project-g2-t4",
  },
  // {
  //   id: "s5",
  //   category: "school",
  //   categoryLabel: "School Project",
  //   title: "N/A",
  //   tagline: "N/A",
  //   image:
  //     "https://res.cloudinary.com/dicrvjstp/image/upload/v1773494163/Screenshot_2026-03-14_201443_rwhkos.png",
  //   tags: ["N/A", "N/A"],
  //   link: "#",
  //   demo: "https://veaja.dockified.com/",
  // },
];

const personalProjects = [
  {
    id: "p1",
    category: "personal",
    categoryLabel: "StartUp Project",
    title: "VEAJA",
    tagline: "AI voice agent that can handle multiple calls at the same time.",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1792934281/Screenshot_2026-10-25_201753_lsvwzc.png",
    tags: ["NestJS", "React", "TypeScripts", "Supabase"],
    link: "https://github.com/borared/Red-Bora-Portfolio",
    demo: "https://red-bora-portfolio.vercel.app/",
  },
  {
    id: "p2",
    category: "personal",
    categoryLabel: "StartUp Project",
    title: "Zinko",
    tagline:
      "Zinko is a gamified quiz platform that transforms learning into an exciting adventure and strategy. It empowers educators to create engaging, interactive quizzes that motivate students and make reviewing course material fun and rewarding.",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1792934260/Screenshot_2026-10-25_201655_yqzvaw.png",
    tags: ["React", "Node.js", "MongoDB", "WebSocket"],
    link: "https://github.com/borared/zinko-quiz-with-strategy",
    demo: "https://sched-planner.vercel.app/",
  },
  {
    id: "p3",
    category: "personal",
    categoryLabel: "Personal Project",
    title: "Portfolio V2",
    tagline: "My personal portfolio — designed from scratch with 3D elements and smooth animations.",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1792934715/Screenshot_2026-10-25_202456_q00qta.png",
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
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1792968664/Screenshot_2026-10-26_055027_yh7ykl.png",
    tags: ["PhotoShop", "Gemini", "UI Design", "Mobile App"],
    link: "#",
    demo: "#",
    galleryImages: [
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1792968919/photo_2026-10-26_05-49-04_omtd3d.jpg",
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1792968918/photo_2026-10-26_05-49-06_vlpqb8.jpg",
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1792968918/photo_2026-10-26_05-49-23_mwhif7.jpg",
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1792968918/photo_2026-10-26_05-49-18_illeab.jpg",
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1792968918/photo_2026-10-26_05-49-51_cyqfhc.jpg",
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1792968663/Screenshot_2026-10-26_055004_nojmqh.png",
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1792968664/Screenshot_2026-10-26_054948_lpebsv.png",
    ],
  },
  {
    id: "p5",
    category: "personal",
    categoryLabel: "Personal Project",
    title: "Sched",
    tagline:
      "Sched is a minimalist full-stack Study Planner web application designed to help students organize their tasks, manage deadlines, and track study progress in a simple and user-friendly way.",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1776334290/Screenshot_2026-04-16_171101_bdll5y.png",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/borared/Sched-Student-Planner-Subject",
    demo: "https://sched-planner.vercel.app/",
  },

  {
    id: "p6",
    category: "personal",
    categoryLabel: "Personal Project",
    title: "Web Mojo",
    tagline: "A freelance company site showcasing web development and creative agency capabilities.",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1774028194/Screenshot_2026-03-21_003624_hz7eu9.png",
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
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1774028656/Screenshot_2026-03-21_004403_a5slxk.png",
    tags: ["PhotoShop", "UI Design"],
    link: "#",
    demo: "#",
    galleryImages: [
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1775997911/80x200_jpd5sm.jpg",
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1775997911/OPTION5_ftdubu.jpg",
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1775997910/PEAK4_x9j9nj.jpg",
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1775997910/60x90_ddv9k4.jpg",
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1775997909/Option_6_khloty.jpg",
    ],
  },

  {
    id: "p8",
    category: "personal",
    categoryLabel: "Personal Project",
    title: "Portfolio V1",
    tagline: "My initial personal portfolio — designed from scratch to display early creative projects.",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1776057257/Screenshot_2026-04-13_121403_wkgfp0.png",
    tags: ["React JS", "Vite", "JavaScript"],
    link: "https://github.com/borared/Red-Bora-Portfolio",
    demo: "https://red-bora-portfolio.vercel.app/",
  },

];

const allProjects = [...personalProjects, ...schoolProjects];

// ── Sub-components: Plastic Sample Project Card ──────────────────────────────

function ProjectCard({ project, index, onOpenGallery }) {
  const [hovered, setHovered] = useState(false);
  const baseRotation = index % 2 === 0 ? -2.5 : 2.5;

  return (
    <div
      style={{
        transform: hovered ? "rotate(0deg) scale(1.03)" : `rotate(${baseRotation}deg)`,
      }}
      className="relative w-[300px] sm:w-[340px] md:w-[370px] lg:w-[390px] shrink-0 h-full max-h-[465px] rounded-2xl sm:rounded-3xl overflow-hidden bg-white/[0.04] backdrop-blur-2xl border border-white/20 shadow-[0_22px_55px_-15px_rgba(0,0,0,0.95),inset_0_1.5px_2px_rgba(255,255,255,0.45),inset_0_-1px_1px_rgba(255,255,255,0.15),inset_1px_0_2px_rgba(255,255,255,0.2),inset_-1px_0_2px_rgba(255,255,255,0.15)] hover:border-white/35 hover:shadow-[0_28px_60px_-15px_rgba(0,0,0,0.98),inset_0_1.5px_2px_rgba(255,255,255,0.5),inset_0_-1px_1px_rgba(255,255,255,0.15),inset_1px_0_2px_rgba(255,255,255,0.2),inset_-1px_0_2px_rgba(255,255,255,0.15)] transition-all duration-300 flex flex-col justify-between p-3.5 sm:p-4 select-none group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Heat-Sealed Inner Seam Rim */}
      <div className="absolute inset-1.5 sm:inset-2 rounded-[14px] sm:rounded-[18px] border border-white/10 pointer-events-none z-20" />

      {/* Retail Packaging Hang Hole Punch Slot */}
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex items-center justify-center">
        <div className="w-9 sm:w-11 h-2 sm:h-2.5 rounded-full border border-white/30 bg-black/70 shadow-[inset_0_1px_2px_rgba(0,0,0,0.9)] backdrop-blur-md" />
      </div>

      {/* Plastic Sheen / Glare Reflection 1: Diagonal Light Streak */}
      <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] pointer-events-none z-20 bg-gradient-to-br from-white/[0.12] via-transparent to-transparent -rotate-12" />

      {/* Plastic Sheen / Glare Reflection 2: Top Surface Gloss */}
      <div className="absolute inset-0 pointer-events-none z-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.14] via-transparent to-black/35" />

      {/* Cellophane Crease / Specular Diagonal Slit */}
      <div className="absolute inset-0 pointer-events-none z-20 bg-[linear-gradient(135deg,transparent_35%,rgba(255,255,255,0.08)_42%,rgba(255,255,255,0.02)_45%,transparent_50%)]" />

      {/* Header Row of the Plastic Sample */}
      <div className="relative z-30 flex items-center justify-between pt-1 mb-1.5">
        <span
          className="text-[11px] sm:text-xs font-bold tracking-widest text-white/90 uppercase font-quantico"
          style={{ fontFamily: '"Quantico", sans-serif' }}
        >
          SAMPLE // 0{index + 1}
        </span>
        <span
          className="text-[9px] sm:text-[10px] font-quantico text-neutral-400 tracking-wider"
          style={{ fontFamily: '"Quantico", sans-serif' }}
        >
          LOT: {String(project.id).toUpperCase()}
        </span>
      </div>

      {/* Poster / Preview Image Container inside sleeve */}
      <div className="relative z-30 bg-[#0c0c0c] rounded-xl overflow-hidden aspect-video flex items-center justify-center mb-2.5 border border-white/15 shadow-inner">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />

        {/* Action Overlay */}
        <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2.5 p-2 z-30">
          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 px-3.5 py-1.5 bg-white/15 hover:bg-white text-white hover:text-black border border-white/30 rounded-full font-bold hover:scale-105 active:scale-95 transition-all text-xs font-quantico"
              style={{ fontFamily: '"Quantico", sans-serif' }}
            >
              <GitBranch className="w-3.5 h-3.5" />
              Code
            </a>
          )}
          <button
            type="button"
            className="flex items-center gap-1 px-3.5 py-1.5 bg-white hover:bg-neutral-200 text-black border border-white/80 rounded-full font-bold hover:scale-105 active:scale-95 shadow-[0_0_12px_rgba(255,255,255,0.3)] transition-all text-xs font-quantico cursor-pointer"
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
            className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 rounded text-[9px] font-quantico flex items-center gap-1 border border-white/20 shadow-sm z-30"
            style={{ fontFamily: '"Quantico", sans-serif' }}
          >
            <Layers className="w-2.5 h-2.5" />
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
              className="text-xs sm:text-sm uppercase tracking-wider text-white/80 font-quantico font-bold"
              style={{ fontFamily: '"Quantico", sans-serif' }}
            >
              {project.categoryLabel}
            </span>
          </div>

          {/* Title in Audiowide */}
          <h3
            className="text-white text-lg sm:text-xl md:text-2xl font-bold font-audiowide tracking-wide mb-1 line-clamp-1 transition-colors"
            style={{ fontFamily: '"Audiowide", cursive, sans-serif' }}
          >
            {project.title}
          </h3>

          {/* Description in Quantico */}
          <p
            className="text-neutral-300 text-xs sm:text-sm font-quantico leading-relaxed line-clamp-2 mb-1.5"
            style={{ fontFamily: '"Quantico", sans-serif' }}
          >
            {project.tagline}
          </p>
        </div>

        {/* Bottom: Tags */}
        <div>
          <div className="pt-2 border-t border-white/10 flex items-center gap-1.5 sm:gap-2 flex-wrap mb-1.5">
            <span
              className="text-xs sm:text-sm text-neutral-300 font-quantico font-medium mr-0.5"
              style={{ fontFamily: '"Quantico", sans-serif' }}
            >
              Built with:
            </span>
            {project.tags?.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-0.5 rounded bg-white/10 text-neutral-200 border border-white/15 group-hover:border-white/30 font-quantico font-medium transition-colors"
                style={{ fontFamily: '"Quantico", sans-serif' }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Authentic Sample Barcode Footer */}
          <div className="pt-1 border-t border-white/10 flex items-center justify-between text-[8px] sm:text-[9px] font-quantico text-neutral-400 tracking-wider">
            <span>SPEC // 2026-RB</span>
            <span className="font-mono text-white/50 tracking-[0.25em] text-[9px]">||| | |||| || |</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Component ───────────────────────────────────────────────────────────

export default function AllProject() {
  const [selectedGallery, setSelectedGallery] = useState(null);
  const targetRef = useRef(null);
  const trackRef = useRef(null);
  const [maxScroll, setMaxScroll] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const updateScroll = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const windowWidth = window.innerWidth;
        const scrollDist = Math.max(0, trackWidth - windowWidth);
        setMaxScroll(scrollDist);
      }
    };

    updateScroll();
    const t1 = setTimeout(updateScroll, 100);
    const t2 = setTimeout(updateScroll, 400);
    const t3 = setTimeout(updateScroll, 1000);

    let resizeObserver;
    if (typeof ResizeObserver !== "undefined" && trackRef.current) {
      resizeObserver = new ResizeObserver(() => {
        updateScroll();
      });
      resizeObserver.observe(trackRef.current);
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

  // Smoothly scrolls all cards into view from 0 to 0.88, then keeps section stuck from 0.88 to 1.0
  const x = useTransform(scrollYProgress, [0, 0.88, 1], [0, -maxScroll, -maxScroll]);

  return (
    <>
      <section
        ref={targetRef}
        id="projects"
        className="relative w-full h-[520vh] bg-black"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-6 md:py-8">
          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img
              src="https://res.cloudinary.com/dicrvjstp/image/upload/v1792923009/v2_bg7_rgfew6.png"
              alt="All Projects Background"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Header Bar: Centered in the middle */}
          <div className="relative z-10 w-full flex flex-col items-center justify-center text-center pb-2 px-4 sm:px-8 lg:px-14">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider text-[#ff5500] drop-shadow-[0_0_25px_rgba(255,85,0,0.45)] font-audiowide"
              style={{ fontFamily: '"Audiowide", cursive, sans-serif' }}
            >
              PROJECTS
            </h1>
          </div>

          {/* Data Component: Sticky Horizontal Scrolling Track */}
          <div className="relative z-10 flex-1 flex items-center w-full min-h-0 my-auto py-2 overflow-hidden">
            <motion.div
              ref={trackRef}
              style={{
                x,
                paddingRight: "max(120px, calc(50vw - 195px))",
              }}
              className="flex gap-12 sm:gap-16 md:gap-20 items-stretch will-change-transform pl-6 sm:pl-10 py-5"
            >
              {allProjects.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={idx}
                  onOpenGallery={setSelectedGallery}
                />
              ))}
            </motion.div>
          </div>

          {/* Bottom Edge Marquee: Japanese "ラボラトリー 2050" running smooth horizontal */}
          <div className="relative z-10 w-full flex items-center justify-center overflow-hidden pointer-events-none select-none pt-1 pb-1 sm:pb-2">
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
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={`cp-group1-${i}`}
                      className="flex items-center whitespace-nowrap px-4 sm:px-6 md:px-8"
                    >
                      <span
                        className="text-[#ff5500] font-black tracking-widest text-sm sm:text-base md:text-xl lg:text-2xl drop-shadow-[0_0_16px_rgba(255,85,0,0.65)]"
                        style={{ fontFamily: '"Noto Sans JP", sans-serif' }}
                      >
                        ラボラトリー 2050
                      </span>
                      <span className="mx-3 sm:mx-4 md:mx-5 text-[#ff5500]/50 font-mono text-sm sm:text-base md:text-lg lg:text-xl">
                        //
                      </span>
                      <span
                        className="text-white/90 font-black tracking-widest text-sm sm:text-base md:text-xl lg:text-2xl drop-shadow-[0_0_14px_rgba(255,255,255,0.3)]"
                        style={{ fontFamily: '"Audiowide", cursive, sans-serif' }}
                      >
                        LABORATORY 2050
                      </span>
                      <span className="mx-3 sm:mx-4 md:mx-5 text-[#ff5500]/50 font-mono text-sm sm:text-base md:text-lg lg:text-xl">
                        //
                      </span>
                    </div>
                  ))}
                </div>

                {/* Identical Duplicate Group for 100% seamless infinite loop without cut */}
                <div className="flex shrink-0 items-center" aria-hidden="true">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={`cp-group2-${i}`}
                      className="flex items-center whitespace-nowrap px-4 sm:px-6 md:px-8"
                    >
                      <span
                        className="text-[#ff5500] font-black tracking-widest text-sm sm:text-base md:text-xl lg:text-2xl drop-shadow-[0_0_16px_rgba(255,85,0,0.65)]"
                        style={{ fontFamily: '"Noto Sans JP", sans-serif' }}
                      >
                        ラボラトリー 2050
                      </span>
                      <span className="mx-3 sm:mx-4 md:mx-5 text-[#ff5500]/50 font-mono text-sm sm:text-base md:text-lg lg:text-xl">
                        //
                      </span>
                      <span
                        className="text-white/90 font-black tracking-widest text-sm sm:text-base md:text-xl lg:text-2xl drop-shadow-[0_0_14px_rgba(255,255,255,0.3)]"
                        style={{ fontFamily: '"Audiowide", cursive, sans-serif' }}
                      >
                        LABORATORY 2050
                      </span>
                      <span className="mx-3 sm:mx-4 md:mx-5 text-[#ff5500]/50 font-mono text-sm sm:text-base md:text-lg lg:text-xl">
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
            className="fixed inset-0 z-[100] flex justify-center bg-black/85 backdrop-blur-md p-4 md:p-10 pt-16"
            onClick={() => setSelectedGallery(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-full max-h-[85vh] bg-[#141414] rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-white/10"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
                <h2
                  className="text-[#ff5500] text-base md:text-lg font-audiowide tracking-wider"
                  style={{ fontFamily: '"Audiowide", cursive, sans-serif' }}
                >
                  BANNER DESIGN GALLERY
                </h2>
                <button
                  onClick={() => setSelectedGallery(null)}
                  className="w-9 h-9 bg-white/10 hover:bg-[#ff5500] text-white rounded-full flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Gallery Images */}
              <div
                className="overflow-y-auto w-full h-full p-4 md:p-8 flex flex-col items-center gap-10 scroll-smooth"
                style={{ scrollbarWidth: "thin", scrollbarColor: "#ff5500 #1a1a1a" }}
              >
                {selectedGallery.map((imgUrl, i) => (
                  <img
                    key={i}
                    src={imgUrl}
                    alt={`Gallery item ${i + 1}`}
                    className="w-full max-w-3xl h-auto rounded-xl shadow-2xl border border-white/10"
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
