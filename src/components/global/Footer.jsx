import React from "react";
import Lottie from "lottie-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-20 overflow-hidden min-h-[100vh]">
      <div className="relative max-w-6xl mx-auto px-6 md:px-12 lg:px-2 flex items-center justify-between mt-72">
        <div className="z-10">
          <p
            className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tight"
            style={{ fontFamily: "Mooli" }}
          >
            ©RBR.PORTFOLIO
          </p>
        </div>

        <div className="relative w-[360px] h-[280px] flex items-end justify-end">
          <div className="absolute -right-60 -bottom-50 w-[500px] h-[500px] bg-white rounded-full" />

          <div className="relative z-100 w-[300px] h-[300px] -bottom-50">
            <Lottie
              animationData={{}} // Replace with your Lottie JSON data
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
