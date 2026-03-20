import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Inner container — stacks on mobile/md, side-by-side on lg */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-12 lg:px-2 flex flex-col lg:flex-row items-center justify-between gap-8 py-20 lg:mt-72">

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
