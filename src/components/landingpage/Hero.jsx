import React, { useRef, useEffect } from "react";

export default function Hero() {
  const trackRef = useRef(null);
  const groupRef = useRef(null);
  const xPosRef = useRef(0);
  const animDirectionRef = useRef(-1); // -1: moving left, 1: moving right
  const lastScrollY = useRef(0);

  // Scroll direction detection
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current) {
        animDirectionRef.current = -1; // scrolling down -> text moves left
      } else if (currentY < lastScrollY.current) {
        animDirectionRef.current = 1; // scrolling up -> text moves right
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Butter-smooth seamless marquee animation loop (no cuts, 0 React re-renders)
  useEffect(() => {
    let groupWidth = groupRef.current ? groupRef.current.offsetWidth : 0;

    const updateWidth = () => {
      if (groupRef.current) {
        groupWidth = groupRef.current.offsetWidth;
      }
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    if (groupRef.current) {
      resizeObserver.observe(groupRef.current);
    }
    if (document.fonts) {
      document.fonts.ready.then(updateWidth);
    }

    let frameId;
    let lastTime = performance.now();
    const speed = 90; // smooth pixels per second

    const loop = (currentTime) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      if (groupWidth > 0 && trackRef.current) {
        xPosRef.current += animDirectionRef.current * speed * dt;

        // Infinite seamless loop wrapping
        if (xPosRef.current <= -groupWidth) {
          xPosRef.current += groupWidth;
        } else if (xPosRef.current >= 0) {
          xPosRef.current -= groupWidth;
        }

        trackRef.current.style.transform = `translate3d(${xPosRef.current}px, 0, 0)`;
      }

      frameId = requestAnimationFrame(loop);
    };

    frameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* Hero container */}
      <div
        className="relative overflow-hidden flex justify-center items-center w-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dicrvjstp/image/upload/v1792849691/IMG_20261024_201426_403_wg5m6c.jpg')",
        }}
      >
        {/* Scrolling background text - seamless infinite marquee */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center mt-[430px]">
          <div
            ref={trackRef}
            className="flex w-max whitespace-nowrap will-change-transform"
          >
            {/* Primary group */}
            <div ref={groupRef} className="flex shrink-0 items-center">
              <span
                className="text-9xl font-black italic text-black px-6"
                style={{ fontFamily: '"Stretch Pro", sans-serif' }}
              >
                FOOUNDER OF ZINKO
              </span>
              <span
                className="text-9xl font-black italic text-black px-6"
                style={{ fontFamily: '"Stretch Pro", sans-serif' }}
              >
                FOOUNDER OF ZINKO
              </span>
              <span
                className="text-9xl font-black italic text-black px-6"
                style={{ fontFamily: '"Stretch Pro", sans-serif' }}
              >
                FOOUNDER OF ZINKO
              </span>
            </div>

            {/* Seamless duplicate group (mathematically identical for invisible loop) */}
            <div className="flex shrink-0 items-center" aria-hidden="true">
              <span
                className="text-9xl font-black italic text-black px-6"
                style={{ fontFamily: '"Stretch Pro", sans-serif' }}
              >
                FOOUNDER OF ZINKO
              </span>
              <span
                className="text-9xl font-black italic text-black px-6"
                style={{ fontFamily: '"Stretch Pro", sans-serif' }}
              >
                FOOUNDER OF ZINKO
              </span>
              <span
                className="text-9xl font-black italic text-black px-6"
                style={{ fontFamily: '"Stretch Pro", sans-serif' }}
              >
                FOOUNDER OF ZINKO
              </span>
            </div>
          </div>
        </div>

        {/* Software Engineer Technical Badge at bottom-left */}
        <div className="absolute left-6 sm:left-10 md:left-16 bottom-6 sm:bottom-10 md:bottom-14 z-20 pointer-events-none select-none">
          <div className="relative w-[155px] h-[255px] flex flex-col">
            {/* SVG Custom Notched Outline Frame with perfectly aligned tab and label */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-2xl"
              viewBox="0 0 155 255"
              fill="none"
            >
              <path
                d="M 0 12
                   A 12 12 0 0 1 12 0
                   H 112
                   Q 116 0 119 6
                   L 126 20
                   Q 129 26 134 26
                   H 143
                   A 12 12 0 0 1 155 38
                   V 243
                   A 12 12 0 0 1 143 255
                   H 12
                   A 12 12 0 0 1 0 243
                   V 12 Z"
                fill="#000000"
              />
              <text
                x="14"
                y="13"
                fill="#FFFFFF"
                fontSize="10"
                fontFamily="'Quantico', sans-serif"
                fontWeight="700"
                letterSpacing="0.06em"
                dominantBaseline="central"
              >
                Timeline: 2050
              </text>
            </svg>

            {/* Inner Content below the tab */}
            <div className="relative z-10 pt-[36px] pb-3 px-3 h-full flex flex-col justify-between items-center text-center">
              {/* Circuit / Node Schematic Flow */}
              <div className="w-full flex justify-center pt-1">
                <svg
                  width="95"
                  height="22"
                  viewBox="0 0 95 22"
                  fill="none"
                  className="opacity-90"
                >
                  {/* Node 1 */}
                  <circle cx="12" cy="15" r="3.5" stroke="white" strokeWidth="1.2" />
                  <circle cx="12" cy="15" r="1.5" fill="white" />
                  <text x="4" y="8" fontSize="6.5" fontFamily="'Quantico', sans-serif" fill="white" fontWeight="bold">01</text>
                  {/* S-curve connection */}
                  <path
                    d="M 16 15 C 35 15, 45 6, 65 6"
                    stroke="white"
                    strokeWidth="1.2"
                    strokeDasharray="2 2"
                  />
                  {/* Node 2 */}
                  <circle cx="70" cy="6" r="3.5" stroke="white" strokeWidth="1.2" />
                  <circle cx="70" cy="6" r="1.5" fill="white" />
                  <text x="76" y="8" fontSize="6.5" fontFamily="'Quantico', sans-serif" fill="white" fontWeight="bold">02</text>
                  {/* Output arrow */}
                  <path d="M 74 6 H 88" stroke="white" strokeWidth="1.2" />
                  <path d="M 85 3.5 L 88.5 6 L 85 8.5" stroke="white" strokeWidth="1.2" fill="none" />
                </svg>
              </div>

              {/* Title */}
              <div
                className="text-[12px] font-black tracking-wider text-white leading-tight"
                style={{ fontFamily: '"Quantico", sans-serif' }}
              >
                SOFTWARE
                <br />
                ENGINEER
              </div>

              {/* Thin Divider Line */}
              <div className="w-4/5 h-[1px] bg-white/25 my-1" />

              {/* Radiant Emblem / Insignia */}
              <svg
                width="48"
                height="30"
                viewBox="0 0 50 32"
                fill="none"
                className="opacity-90"
              >
                {/* Left laurel bracket & ray ticks */}
                <path d="M 13 6 C 6 13, 6 19, 13 26" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                <line x1="11" y1="10" x2="7" y2="8" stroke="white" strokeWidth="1" />
                <line x1="8" y1="16" x2="4" y2="16" stroke="white" strokeWidth="1" />
                <line x1="11" y1="22" x2="7" y2="24" stroke="white" strokeWidth="1" />

                {/* Right laurel bracket & ray ticks */}
                <path d="M 37 6 C 44 13, 44 19, 37 26" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                <line x1="39" y1="10" x2="43" y2="8" stroke="white" strokeWidth="1" />
                <line x1="42" y1="16" x2="46" y2="16" stroke="white" strokeWidth="1" />
                <line x1="39" y1="22" x2="43" y2="24" stroke="white" strokeWidth="1" />

                {/* Center 8-point radiating star */}
                <circle cx="25" cy="16" r="2.8" fill="white" />
                <line x1="25" y1="8" x2="25" y2="24" stroke="white" strokeWidth="1.2" />
                <line x1="17" y1="16" x2="33" y2="16" stroke="white" strokeWidth="1.2" />
                <line x1="19" y1="10" x2="31" y2="22" stroke="white" strokeWidth="1" />
                <line x1="19" y1="22" x2="31" y2="10" stroke="white" strokeWidth="1" />
              </svg>

              {/* Sub-context description */}
              <div
                className="text-[8.5px] font-bold tracking-widest text-white/80 uppercase leading-tight pb-1"
                style={{ fontFamily: '"Quantico", sans-serif' }}
              >
                FULL STACK
                <br />
                RED BORA
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
