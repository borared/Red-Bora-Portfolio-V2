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
    demo: "https://naek-watch.vercel.app/",
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
    title: "Sched",
    tagline: "Sched is a minimalist full-stack Study Planner web application designed to help students organize their tasks, manage deadlines, and track study progress in a simple and user-friendly way.",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1776334290/Screenshot_2026-04-16_171101_bdll5y.png",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/borared/Sched-Student-Planner-Subject",
    demo: "https://sched-planner.vercel.app/",
  },
  {
    id: 2,
    title: "Portfolio V2",
    tagline: "My personal portfolio — designed from scratch",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1774028066/Screenshot_2026-03-21_003322_tz1sbz.png",
    tags: ["React", "Vite", "JavaScript"],
    link: "https://github.com/borared/Red-Bora-Portfolio-V2",
    demo: "https://red-bora-portfolio-v2.vercel.app/",
  },
  {
    id: 3,
    title: "Web Mojo",
    tagline: "A freelance company site",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1774028194/Screenshot_2026-03-21_003624_hz7eu9.png",
    tags: ["React", "Vite", "JavaScript"],
    link: "https://github.com/borared/Web-Mojo",
    demo: "https://web-mojo.vercel.app/",
  },
  {
    id: 4,
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
    id: 5,
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
      className="relative flex flex-col group w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Dark container for image */}
      <div className="bg-[#1e1e1e] rounded-[1.5rem] p-3 md:p-5 mb-4 relative overflow-hidden flex items-center justify-center">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-auto aspect-video object-cover rounded-xl"
          animate={{ scale: hovered ? 1.03 : 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        />
        
        {/* Hover overlay for buttons */}
        <motion.div 
          className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 rounded-[1.5rem]"
        >
          <a
            href={project.link !== "#" ? project.link : undefined}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform text-sm"
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
            className="flex items-center gap-2 px-5 py-2.5 bg-black text-white border border-white/20 rounded-full font-bold hover:scale-105 transition-transform text-sm cursor-pointer"
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
        </motion.div>
      </div>

      {/* Text below */}
      <div className="flex flex-col px-1">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="text-black text-base md:text-lg font-medium border-b border-black/30 pb-0.5">
            {project.title}
          </h3>
          <span className="text-neutral-500 text-xs md:text-sm">build with</span>
          <span className="text-black text-sm md:text-base font-medium border-b border-black/30 pb-0.5">
            {project.tags?.length > 0 ? project.tags.join(', ') : "Project"}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ── Main Component ───────────────────────────────────────────────────────────

const categories = [
  { key: "school", label: "School Project", data: schoolProjects },
  { key: "personal", label: "Person Project", data: personalProjects },
];

export default function AllProject() {
  const [selectedGallery, setSelectedGallery] = useState(null);

  return (
    <>
      <section id="projects" className="bg-[#f0f0f0] py-20 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-24">
          {categories.map(({ key, label, data }) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Category label acting as h1 */}
              <div className="mb-10">
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-black max-w-lg leading-tight"
                >
                  {label}.
                </h1>
              </div>

              {/* Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
                {data.map((project) => (
                  <ProjectCard key={project.id} project={project} onOpenGallery={setSelectedGallery} />
                ))}
              </div>
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