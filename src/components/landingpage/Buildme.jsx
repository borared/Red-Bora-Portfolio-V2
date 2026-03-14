import React from "react";
import Magnetic from "../global/Magnetic";

export default function Buildme() {
  return (
    <section className="bg-black rounded-t-[200px] mt-[120px] min-h-[100vh]">
      <div className="max-w-6xl mx-auto px-6 py-24 md:px-12 lg:px-24 flex flex-col items-center justify-center text-center">
        <h2
          className="text-white text-3xl md:text-4xl font-black tracking-tight mb-8"
          style={{ fontFamily: '"Mooli", sans-serif' }}
        >
          Wanna Build Your Project?
        </h2>

        <Magnetic strength={2}>
          <button className="inline-flex items-center justify-center rounded-full bg-white text-black px-8 py-3 text-sm font-semibold tracking-wide shadow-lg shadow-black/20 hover:shadow-xl transition">
            Build me project
          </button>
        </Magnetic>
      </div>
    </section>
  );
}
