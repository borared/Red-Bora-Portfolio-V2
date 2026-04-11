import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

export default function LocationBased() {
  const canvasRef = useRef();

  useEffect(() => {
    let globe;
    let phi = 1.6; // Focus on Southeast Asia (Cambodia) on load

    const timeout = setTimeout(() => {
      if (!canvasRef.current) return;

      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 1200,
        height: 1200,
        phi: 0,
        theta: 0.15,
        dark: 0, // TURNED OFF "dark mode" auto-inversion that was hiding/messing up our custom colors!
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [1, 1, 1], // Pure white dots
        markerColor: [0.1, 0.95, 0.2], // Pure Bright Green marker
        glowColor: [0.05, 0.05, 0.05], // Very faint edge glow
        markers: [
          { location: [11.5564, 104.9282], size: 0.1 } // Phnom Penh, Cambodia
        ],
        onRender: (state) => {
          // Keep it rotating infinitely
          state.phi = phi;
          phi += 0.003; 
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      if (globe) {
        globe.destroy();
      }
    };
  }, []);

  return (
    <section className="bg-[#050609] text-white py-24 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-3xl text-center z-10 relative mb-8">
        <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-wide font-sans">
          Based in Arey Skat, Cambodia
        </h2>
        <p className="text-neutral-400 text-base md:text-[18px]">
          Open to remote collaborations worldwide
        </p>
      </div>

      <div className="relative w-full max-w-[600px] flex items-center justify-center pt-8">
        {/* The globe rendering canvas */}
        <canvas
          ref={canvasRef}
          className="w-full"
          style={{ aspectRatio: "1/1", opacity: 0.9 }}
        />
        
        {/* Soft bottom edge blend over the globe */}
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#050609] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
