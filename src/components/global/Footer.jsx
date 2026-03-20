import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Inner container — stacks on mobile, side-by-side on lg */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-12 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 py-20 lg:py-28">

        {/* ── Left: copyright text ── */}
        <div className="z-10 text-center lg:text-left">
          <p
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tight leading-tight"
            style={{ fontFamily: "Mooli" }}
          >
            ©RBR.
            <br className="hidden sm:block lg:hidden" />
            PORTFOLIO
          </p>
        </div>

        {/* ── Right: Lottie + white-circle decoration ── */}
        <div className="relative flex items-center justify-center w-full lg:w-auto">
          {/* White decorative circle — only show on lg where there's room */}
          <div className="hidden lg:block absolute -right-24 -bottom-24 w-[380px] h-[380px] bg-white rounded-full pointer-events-none" />

          {/* Lottie animation */}
          <div className="relative z-10 w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px]">
            <DotLottieReact
              src="https://lottie.host/4db68bbd-31f6-4cd8-84eb-189de081159a/IGmMCqhzpt.lottie"
              loop
              autoplay
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
