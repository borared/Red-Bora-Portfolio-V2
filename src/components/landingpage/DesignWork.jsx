import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import React, { useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "British Wrecks",
    tagline: "A driver's guide to the ship wrecks around Ireland",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1773458411/IrishWreckk_yeng2q.jpg",
  },
  {
    id: 2,
    title: "Cambodia",
    tagline: "Welcome to Kingdom of Wonder — Travel with happiness",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1773458410/Cambodia_iaqr84.jpg",
  },
  {
    id: 3,
    title: "CADT Restaurant",
    tagline: "Get your hunger menu",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1773458411/Cadt_Hang_riubcd_rkhalk.jpg",
  },
  {
    id: 4,
    title: "Coke Sustainability",
    tagline: "Enjoy again and again and again",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1773458410/Coca_UI122_b7g4jz.jpg",
  },
];

export default function DesignWork() {
  const sectionRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Image moves slower than page scroll (Dennis style)
  const y = useTransform(scrollYProgress, [0, 1], [-120, 120]);

  return (
    <section ref={sectionRef} className="bg-white">
      {/* Header */}
      <div className="bg-black py-4 md:py-5 overflow-hidden">
        <div
          className="text-white text-xl md:text-2xl font-black tracking-tight whitespace-nowrap"
          style={{
            fontFamily: '"Stretch Pro", sans-serif',
            animation: "scroll 25s linear infinite",
          }}
        >
          <span className="inline-block pr-24">
            DESIGN WORK • DESIGN WORK • DESIGN WORK • DESIGN WORK • DESIGN WORK
            • DESIGN WORK • DESIGN WORK • DESIGN WORK •
          </span>
          <span className="inline-block pr-24">
            DESIGN WORK • DESIGN WORK • DESIGN WORK • DESIGN WORK • DESIGN WORK
            • DESIGN WORK • DESIGN WORK • DESIGN WORK •
          </span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="px-4 py-12 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-3">
          {projects.map((project, index) => {
            if (project.id === 4) {
              return (
                <article
                  key={project.id}
                  className="md:col-span-2 sticky top-0 z-0 group relative rounded-xl overflow-hidden bg-neutral-100 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    <a href={project.link} className="block rounded-xl">
                      {/* Image Container */}
                      <div className="relative overflow-hidden aspect-[16/7]">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="absolute inset-0 w-full h-[130%] object-cover will-change-transform"
                          style={{ y }}
                        />
                      </div>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

                      {/* Text */}
                      <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-gradient-to-t from-black/80 to-transparent -mx-5 -mb-5 px-5 pb-5 pt-8 md:-mx-6 md:-mb-6 md:px-6 md:pb-6 md:pt-10">
                          <h3
                            className="text-xl md:text-2xl font-bold mb-1"
                            style={{ fontFamily: '"Mooli", sans-serif' }}
                          >
                            {project.title}
                          </h3>

                          <p className="text-sm md:text-base text-white/90 mb-3">
                            {project.tagline}
                          </p>

                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveProject(project);
                            }}
                            className="hover:cursor-pointer inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium w-fit"
                          >
                            View
                          </button>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                </article>
              );
            }

            return (
              <motion.article
                key={project.id}
                className={`group relative rounded-xl overflow-hidden bg-neutral-100 shadow-lg hover:shadow-xl transition-shadow ${
                  project.id === 2 ? "md:row-span-2 md:flex md:flex-col" : ""
                }`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <a
                  href={project.link}
                  className={`block rounded-xl ${
                    project.id === 2 ? "md:flex-1 md:flex md:flex-col" : ""
                  }`}
                >
                  {/* Image Container */}
                  <div
                    className={`relative overflow-hidden ${
                      project.id === 2
                        ? "aspect-[4/3] md:flex-1"
                        : "aspect-[4/3] md:aspect-[3/2]"
                    }`}
                  >
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-[130%] object-cover will-change-transform"
                      style={{ y }}
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

                  {/* Text */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-gradient-to-t from-black/80 to-transparent -mx-5 -mb-5 px-5 pb-5 pt-8 md:-mx-6 md:-mb-6 md:px-6 md:pb-6 md:pt-10">
                      <h3
                        className="text-xl md:text-2xl font-bold mb-1"
                        style={{ fontFamily: '"Mooli", sans-serif' }}
                      >
                        {project.title}
                      </h3>

                      <p className="text-sm md:text-base text-white/90 mb-3">
                        {project.tagline}
                      </p>

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveProject(project);
                        }}
                        className="hover:cursor-pointer inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium w-fit"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.img
              src={activeProject.image}
              alt={activeProject.title}
              className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
