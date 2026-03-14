import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "British Wrecks",
    tagline: "A driver's guide to the ship wrecks around Ireland",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1773458411/IrishWreckk_yeng2q.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Cambodia",
    tagline: "Welcome to Kingdom of Wonder — Travel with happiness",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1773458410/Cambodia_iaqr84.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "CADT Restaurant",
    tagline: "Get your hunger menu",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1773458411/Cadt_Hang_riubcd_rkhalk.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Coke Sustainability",
    tagline: "Enjoy again and again and again",
    image:
      "https://res.cloudinary.com/dicrvjstp/image/upload/v1773458410/Coca_UI122_b7g4jz.jpg",
    link: "#",
  },
];

export default function DesignWork() {
  const sectionRef = useRef(null);

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
            DESIGN WORK • DESIGN WORK • DESIGN WORK • DESIGN WORK • DESIGN WORK •
            DESIGN WORK • DESIGN WORK • DESIGN WORK •
          </span>
          <span className="inline-block pr-24">
            DESIGN WORK • DESIGN WORK • DESIGN WORK • DESIGN WORK • DESIGN WORK •
            DESIGN WORK • DESIGN WORK • DESIGN WORK •
          </span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="px-4 py-12 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-3">

          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className={`group relative rounded-xl overflow-hidden bg-neutral-100 shadow-lg hover:shadow-xl transition-shadow
              ${project.id === 4 ? "md:col-span-2" : ""}
              ${project.id === 2 ? "md:row-span-2 md:flex md:flex-col" : ""}
              `}
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
                    project.id === 4
                      ? "aspect-[16/7]"
                      : project.id === 2
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

                    <span className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium w-fit">
                      View
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path d="M5 12h14m-7-7l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}