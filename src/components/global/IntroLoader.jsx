import React, { useEffect, useRef, useState } from "react";

/**
 * IntroLoader
 * Displays a full-screen intro (0→100 counter) then fades out.
 * Props:
 *   onComplete – callback fired once the overlay has fully hidden.
 */
export default function IntroLoader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [hiding, setHiding] = useState(false);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  // Total duration of the counter animation in ms
  const DURATION = 2000;

  useEffect(() => {
    const animate = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / DURATION, 1);

      // Ease-out cubic for a natural deceleration near 100
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * 100));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        // Short pause at 100, then trigger the hide transition
        setTimeout(() => {
          setHiding(true);
          // Wait for CSS transition to finish before unmounting
          setTimeout(() => {
            onComplete?.();
          }, 800);
        }, 300);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Zero-pad to 3 digits
  const display = String(count).padStart(3, "0");

  return (
    <div
      className={`intro-loader ${hiding ? "intro-loader--hide" : ""}`}
      aria-hidden="true"
    >
      {/* Scanline / noise overlay */}
      <div className="intro-loader__scanlines" />

      {/* Top-left label */}
      <span className="intro-loader__label intro-loader__label--tl">
        PORTFOLIO
      </span>

      {/* Top-right label */}
      <span className="intro-loader__label intro-loader__label--tr">
        {new Date().getFullYear()}
      </span>

      {/* Centre – big counter */}
      <div className="intro-loader__center">
        <span className="intro-loader__counter">{display}</span>
        <span className="intro-loader__percent">%</span>
      </div>

      {/* Bottom-left status */}
      <div className="intro-loader__bottom">
        <span className="intro-loader__status-dot" />
        <span className="intro-loader__status-text">
          INITIALIZING&nbsp;&nbsp;/&nbsp;&nbsp;LOADING ASSETS
        </span>
      </div>

      {/* Horizontal rule that shrinks away */}
      <div className="intro-loader__rule" />
    </div>
  );
}
