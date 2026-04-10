import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

// ── Data ────────────────────────────────────────────────────────────────────

const schoolProjects = [
  {
    id: 1,
    title: "NaekWatch",
    tagline: "Movie Streaming Online",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1774027492/Screenshot_2026-03-19_222317_wzljbh.png",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    id: 2,
    title: "TosTrip",
    tagline: "Make it easy for Trip Guidance",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1774027670/Screenshot_2026-03-21_002740_qmvzh9.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#",
  },
  {
    id: 3,
    title: "Hospital Management System",
    tagline: "Make it easy for Hospital Management",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1775829871/Screenshot_2026-04-10_210224_jhl8t1.png",
    tags: ["Java", "OOP Concept", "Console-based"],
    link: "#",
  },
  {
    id: 4,
    title: "N/A",
    tagline: "N/A",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1773494163/Screenshot_2026-03-14_201443_rwhkos.png",
    tags: ["N/A", "N/A"],
    link: "#",
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
    link: "#",
  },
  {
    id: 2,
    title: "Web Mojo",
    tagline: "A freelance company site",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1774028194/Screenshot_2026-03-21_003624_hz7eu9.png",
    tags: ["React", "Vite", "JavaScript"],
    link: "#",
  },
  {
    id: 3,
    title: "Banner Design",
    tagline: "Freelance at Vachana Dental Clinic",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1774028656/Screenshot_2026-03-21_004403_a5slxk.png",
    tags: ["PhotoShop", "UI Design"],
    link: "#",
  },
  {
    id: 4,
    title: "N/A",
    tagline: "N/A",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1773494163/Screenshot_2026-03-14_201443_rwhkos.png",
    tags: ["N/A", "N/A"],
    link: "#",
  },
];

// ── Sub-components ───────────────────────────────────────────────────────────

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative flex-shrink-0 w-[300px] md:w-[340px] h-[220px] rounded-2xl overflow-hidden shadow-md cursor-pointer group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Image */}
      <motion.img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover"
        animate={{ scale: hovered ? 1.06 : 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      />

      {/* Gradient overlay — always visible at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* Hover dark overlay */}
      <motion.div
        className="absolute inset-0 bg-black/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Bottom text — always visible */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-bold text-base leading-tight mb-0.5">
          {project.title}
        </h3>
        <p className="text-white text-xs leading-snug line-clamp-1">
          {project.tagline}
        </p>

        {/* Tags + link — appear on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="flex items-center gap-2 mt-2 flex-wrap"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.25 }}
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] bg-white/20 backdrop-blur-sm text-white rounded-full px-2 py-0.5 border border-white/20"
                >
                  {tag}
                </span>
              ))}
              {project.link && project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-auto text-white/80 hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function ProjectCarousel({ projects }) {
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
        className="flex gap-4 overflow-x-auto pb-3 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
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
  return (
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

            <ProjectCarousel projects={data} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}