import React from "react";

export default function Greeting() {
  return (
    <section className="min-h-[50vh] bg-white flex items-center justify-center px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Left: Text */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <p className="text-xl md:text-3xl lg:text-5xl text-neutral-700"
          style={{ fontFamily: '"Mooli", sans-serif' }}>Hello Visitor</p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight text-neutral-900"
          style={{ fontFamily: '"Mooli", sans-serif' }}>
            Welcome to
            <br />
            Bora&apos;s World
          </h1>
        </div>

        {/* Right: Video */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-md overflow-hidden">
            <video
              className="w-full h-full object-cover"
              src="https://res.cloudinary.com/dicrvjstp/video/upload/v1773416479/Screen_Recording_2026-03-13_204742_nylswr.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
}