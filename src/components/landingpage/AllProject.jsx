import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, GitBranch, X } from "lucide-react";

// ── Data ────────────────────────────────────────────────────────────────────

const schoolProjects = [
  {
    id: 1,
    title: "NaekWatch",
    tagline: "NaekWatch is a movie streaming online, it provides service movie and series with khmer dubbing. Also NaekWatch has a task to do to earn point for redeem product.",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1774027492/Screenshot_2026-03-19_222317_wzljbh.png",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/borared/frontend-naek-watch",
    demo: "https://tos-trip-trip-guidance-website.vercel.app/",
  },
  {
    id: 2,
    title: "TosTrip",
    tagline: "TosTrip is a trip guidance exclusively dedicated to guide tourist for their trip around the world. This project showcases the elegance, performance of trip advisor while offering a seamless user experience.",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1774027670/Screenshot_2026-03-21_002740_qmvzh9.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/borared/TosTrip-Trip-Guidance-Website",
    demo: "https://tos-trip-trip-guidance-website.vercel.app/",
  },
  {
    id: 3,
    title: "Hospital Management System",
    tagline: "The Hospital Admin Management System is a centralized, object-oriented platform designed to streamline healthcare operations. It serves as a digital hub for administrators to oversee the essential pillars of a hospital's daily workflow.",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1775829871/Screenshot_2026-04-10_210224_jhl8t1.png",
    tags: ["Java", "OOP Concept", "Console-based"],
    link: "https://github.com/borared/Hospital-Admin-Management-System",
    demo: "https://tos-trip-trip-guidance-website.vercel.app/",
  },
  {
    id: 4,
    title: "Mini Calculator",
    tagline: "A simple calculator with basic arithmetic operations.",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1776058028/Screenshot_2026-04-13_122656_y8nkua.png",
    tags: ["Circuit Verse Tool"],
    link: "#",
    demo: "https://circuitverse.org/simulator/edit/final-mini-calculator-project-g2-t4",
  },
  {
    id: 5,
    title: "N/A",
    tagline: "N/A",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1773494163/Screenshot_2026-03-14_201443_rwhkos.png",
    tags: ["N/A", "N/A"],
    link: "#",
    demo: "https://tos-trip-trip-guidance-website.vercel.app/",
  },
];

const personalProjects = [
  {
    id: 1,
    title: "Portfolio V2",
    tagline: "My personal portfolio — designed from scratch",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1774028066/Screenshot_2026-03-21_003322_tz1sbz.png",
    tags: ["React", "Vite", "JavaScript"],
    link: "https://github.com/borared/Red-Bora-Portfolio-V2",
    demo: "https://red-bora-portfolio-v2.vercel.app/",
  },
  {
    id: 2,
    title: "Web Mojo",
    tagline: "A freelance company site",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1774028194/Screenshot_2026-03-21_003624_hz7eu9.png",
    tags: ["React", "Vite", "JavaScript"],
    link: "https://github.com/borared/Web-Mojo",
    demo: "https://web-mojo.vercel.app/",
  },
  {
    id: 3,
    title: "Banner Design",
    tagline: "Freelance at Vachana Dental Clinic",
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
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1775997909/Option_6_khloty.jpg"
    ]
  },
  {
    id: 4,
    title: "Portfolio V1",
    tagline: "My personal portfolio — designed from scratch",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1776057257/Screenshot_2026-04-13_121403_wkgfp0.png",
    tags: ["React JS", "Vite", "JavaScript"],
    link: "https://github.com/borared/Red-Bora-Portfolio",
    demo: "https://red-bora-portfolio.vercel.app/",
  },
];

// ── Sub-components ───────────────────────────────────────────────────────────

function ProjectCard({ project, onOpenGallery }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative flex flex-col flex-shrink-0 w-[300px] md:w-[350px] min-h-[420px] rounded-2xl overflow-hidden border border-neutral-200 shadow-sm cursor-pointer group bg-[#fdfcf9]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Top Image area */}
      <div className="h-[200px] w-full bg-blue-100/50 overflow-hidden relative border-b border-neutral-100">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        />
      </div>

      {/* Content area */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-gray-900 group-hover:text-[#000000] font-bold text-[18px] leading-tight transition-colors pr-2">
            {project.title}
          </h3>
          <div className={`flex-shrink-0 w-6 h-6 rounded-full border border-[#bbcefb] flex items-center justify-center transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-1.5 h-1.5 bg-[#000000] rounded-full"></div>
          </div>
        </div>
        
        <p className="text-neutral-500 text-[14px] leading-relaxed mb-6 line-clamp-3">
          {project.tagline}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-semibold bg-[#eef2fc] text-[#537AE0] rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
          <a
            href={project.link !== "#" ? project.link : undefined}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-neutral-300 text-neutral-600 hover:bg-neutral-100 transition-colors text-[14px] font-semibold"
            onClick={(e) => {
              if(!project.link || project.link === "#") e.preventDefault();
            }}
          >
            <GitBranch className="w-4 h-4" />
            Code
          </a>
          <a
            href={project.demo !== "#" && !project.galleryImages ? project.demo : "#"}
            target={!project.galleryImages ? "_blank" : undefined}
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#000000] text-white hover:bg-[#4365c4] transition-colors text-[14px] font-semibold cursor-pointer"
            onClick={(e) => {
              if (project.galleryImages) {
                e.preventDefault();
                if (onOpenGallery) onOpenGallery(project.galleryImages);
              } else if (!project.demo || project.demo === "#") {
                e.preventDefault();
              }
            }}
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCarousel({ projects, onOpenGallery }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const SCROLL_AMOUNT = 360;

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * SCROLL_AMOUNT, behavior: "smooth" });
    setTimeout(updateScrollState, 400);
  };

  return (
    <div className="relative">
      {/* Arrow buttons */}
      <div className="flex gap-2 absolute -top-12 right-0">
        <button
          onClick={() => scroll(-1)}
          disabled={!canScrollLeft}
          className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:bg-black hover:text-white hover:border-black disabled:opacity-30 disabled:pointer-events-none transition-all duration-200"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => scroll(1)}
          disabled={!canScrollRight}
          className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:bg-black hover:text-white hover:border-black disabled:opacity-30 disabled:pointer-events-none transition-all duration-200"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Scrollable row */}
      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        className="flex gap-6 overflow-x-auto pb-6 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpenGallery={onOpenGallery} />
        ))}
      </div>
    </div>
  );
}

// ── Main Component ───────────────────────────────────────────────────────────

const categories = [
  { key: "school", label: "School Projects", data: schoolProjects },
  { key: "personal", label: "Personal Projects", data: personalProjects },
];

export default function AllProject() {
  const [selectedGallery, setSelectedGallery] = useState(null);

  return (
    <>
      <section id="projects" className="bg-white py-20 px-6 md:px-10 lg:px-16">
      {/* Section header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <motion.h2
          className="text-5xl md:text-6xl font-black text-black mb-4 leading-tight"
          style={{ fontFamily: '"Stretch Pro", sans-serif' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          MY PROOJECT
        </motion.h2>
        <motion.p
          className="text-neutral-500 text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A comprehensive showcase of my work across different domains — from
          academic projects to personal experiments and professional
          contributions.
        </motion.p>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto space-y-16">
        {categories.map(({ key, label, data }) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Category label */}
            <div className="flex items-center justify-between mb-8">
              <h3
                className="text-xl md:text-2xl font-bold text-black"
                style={{ fontFamily: '"Mooli", sans-serif' }}
              >
                {label}
              </h3>
            </div>  

            <ProjectCarousel projects={data} onOpenGallery={setSelectedGallery} />
          </motion.div>
        ))}
      </div>
    </section>

      {/* Full-Screen Gallery Modal */}
      <AnimatePresence>
        {selectedGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10 pt-20"
            onClick={() => setSelectedGallery(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-full max-h-[85vh] bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              <button
                onClick={() => setSelectedGallery(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/60 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div
                className="overflow-y-auto w-full h-full p-4 md:p-8 flex flex-col items-center gap-12 scroll-smooth"
                style={{ scrollbarWidth: "thin", scrollbarColor: "#4f4f4f #1a1a1a" }}
              >
                {selectedGallery.map((imgUrl, i) => (
                  <img
                    key={i}
                    src={imgUrl}
                    alt={`Gallery item ${i + 1}`}
                    className="w-full max-w-3xl h-auto rounded-lg shadow-xl"
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