import React from "react";
import Magnetic from "./global/Magnetic";

export default function Hero() {
  return (
    <>
      <style>{`
        @keyframes scrollLeftInfinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-left {
          animation: scrollLeftInfinite 20s linear infinite;
        }
      `}</style>

      {/* container is relative so we can absolutely position text over the image */}
      <div className="relative overflow-x-hidden flex justify-center items-center w-full min-h-[100vh] p-4">
        {/* Scrolling background text */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center mt-55">
          <div className="animate-scroll-left whitespace-nowrap flex w-full">
            <span
              className="text-9xl font-black text-black px-4"
              style={{ fontFamily: '"Stretch Pro", sans-serif' }}
            >
              RED BOORA RED BOORA
            </span>
            <span
              className="text-9xl font-black text-black px-4"
              style={{ fontFamily: '"Stretch Pro", sans-serif' }}
            >
              RED BOORA RED BOORA
            </span>
          </div>
        </div>

        {/* Image and text content */}
        <div className="relative z-10">
          <div className="heroImage w-200 -mt-60">
            <img
              src="https://res.cloudinary.com/dicrvjstp/image/upload/v1773253593/rbr_wriul2.png"
              alt="RBR - Software Engineer"
              // mx-auto is a backup for horizontal centering
              className="max-w-4xl w-full h-auto"
            />
          </div>
        </div>

        {/* left/right overlay text */}
        <div className="absolute left-1/5 top-50 transform -translate-y-1/2 z-10">
          <Magnetic strength={2}>
            <h1 className="text-2xl md:text-3xl whitespace-nowrap cursor-pointer">
              A Junior
            </h1>
          </Magnetic>
        </div>
        <div className="absolute right-1/5 top-50 transform -translate-y-1/2 z-10">
          <Magnetic strength={2}>
            <h1 className="text-2xl md:text-3xl whitespace-nowrap text-right cursor-pointer">
              Software Engineer
            </h1>
          </Magnetic>
        </div>
      </div>
    </>
  );
}
