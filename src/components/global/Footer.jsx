import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Magnetic from "./Magnetic";
import resumePDF from "../../fileCV/Red Bora CV (2).pdf";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Inner container — stacks on mobile/md, side-by-side on lg */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-12 lg:px-2 flex flex-col lg:flex-row items-center justify-between gap-8 py-20 lg:mt-72">

        {/* ── Left: copyright text & buttons ── */}
        <div className="z-10 text-center lg:text-left flex flex-col gap-4">
          <p
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tight leading-tight"
            style={{ fontFamily: "Mooli" }}
          >
            ©RBR.
            <br className="hidden sm:block lg:hidden" />
            PORTFOLIO
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 mt-6 z-20">
            <Magnetic>
              <a 
                href="#contact" 
                className="block px-8 py-3.5 bg-white text-black font-bold rounded-full hover:scale-105 hover:bg-neutral-100 transition-all active:scale-95 shadow-lg"
              >
                Contact
              </a>
            </Magnetic>
            <Magnetic>
              <a 
                href={resumePDF}
                download="Red_Bora_CV.pdf"
                className="block px-8 py-3.5 bg-transparent border-2 border-neutral-300 text-white font-bold rounded-full hover:border-white hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
              >
                Download my resume
              </a>
            </Magnetic>
          </div>
        </div>

        {/* ── Right: Lottie + white-circle decoration ── */}

        {/* Mobile / md: simple centered Lottie, no circle overflow */}
        <div className="lg:hidden relative flex items-center justify-center w-full">
          <div className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px]">
            <DotLottieReact
              src="https://lottie.host/4db68bbd-31f6-4cd8-84eb-189de081159a/IGmMCqhzpt.lottie"
              loop
              autoplay
              className="w-full h-full"
            />
          </div>
        </div>

        {/* lg+: original layout with circle and offset Lottie */}
        <div className="hidden lg:flex relative w-[360px] h-[280px] items-end justify-end">
          <div className="absolute -right-60 -bottom-50 w-[500px] h-[500px] bg-white rounded-full" />
          <div className="relative z-80 w-[300px] h-[300px] -bottom-50">
            <DotLottieReact
              src="https://lottie.host/4db68bbd-31f6-4cd8-84eb-189de081159a/IGmMCqhzpt.lottie"
              loop
              autoplay
              className="-mt-58 -ml-75 z-0 w-250 flex justify-start"
            />
          </div>
        </div>

      </div>
    </footer>
  );
}
