import React, { useEffect, useRef, useState } from "react";

/**
 * Custom cursor — dot + lagging ring, zarcerog.com style.
 * - Small solid dot tracks instantly
 * - Outer ring follows with lerp easing
 * - Ring expands on hover over interactive elements
 * - mix-blend-mode: difference inverts colors on light backgrounds
 * - Hidden on touch/mobile devices
 */

const LERP = 0.5; // smoothing factor (0 = no movement, 1 = instant)

function lerp(a, b, t) {
  return a + (b - a) * t;
}

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mouse = useRef({ x: -200, y: -200 });
  const ring = useRef({ x: -200, y: -200 });
  const rafId = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Don't render on touch-only devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);

    // Detect hover on interactive elements
    const addHoverListeners = () => {
      const targets = document.querySelectorAll(
        "a, button, [role='button'], input, textarea, select, label, [data-cursor-hover]"
      );
      targets.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    addHoverListeners();

    // Re-attach when DOM changes (e.g. AnimatePresence mounts new nodes)
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mouseleave", onLeave);

    // Animation loop
    const animate = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, LERP);
      ring.current.y = lerp(ring.current.y, mouse.current.y, LERP);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId.current);
      observer.disconnect();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseleave", onLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Don't render on touch devices at all
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Dot — instant tracking */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "white",
          mixBlendMode: "difference",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s ease",
          willChange: "transform",
        }}
      />

      {/* Ring — lagging follower */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: isHovering ? 72 : 40,
          height: isHovering ? 72 : 40,
          borderRadius: "50%",
          border: "1.5px solid white",
          backgroundColor: "transparent",
          mixBlendMode: "difference",
          opacity: visible ? 1 : 0,
          transition: "width 0.35s cubic-bezier(0.25,1,0.5,1), height 0.35s cubic-bezier(0.25,1,0.5,1), opacity 0.2s ease",
          willChange: "transform",
        }}
      />
    </>
  );
}
