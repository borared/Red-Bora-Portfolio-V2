import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Github } from "lucide-react";

const STORAGE_KEY = "floating_github_pos_v1";
const HINT_KEY = "floating_github_hint_dismissed_v1";

function clamp(n, min, max) {
  return Math.min(Math.max(n, min), max);
}

export default function DraggableGithub({
  href = "https://github.com/borared",
  size = 56,
  margin = 24,
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const pointerDownPosRef = useRef({ x: 0, y: 0 });
  const didDragRef = useRef(false);
  const [showHint, setShowHint] = useState(false);
  const [constraints, setConstraints] = useState({
    left: margin,
    top: margin,
    right: Math.max(margin, window.innerWidth - size - margin),
    bottom: Math.max(margin, window.innerHeight - size - margin),
  });

  const buttonStyle = useMemo(
    () => ({
      width: size,
      height: size,
    }),
    [size],
  );

  useEffect(() => {
    const updateConstraints = () => {
      setConstraints({
        left: margin,
        top: margin,
        right: Math.max(margin, window.innerWidth - size - margin),
        bottom: Math.max(margin, window.innerHeight - size - margin),
      });
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, [margin, size]);

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (typeof parsed?.x === "number" && typeof parsed?.y === "number") {
          x.set(clamp(parsed.x, constraints.left, constraints.right));
          y.set(clamp(parsed.y, constraints.top, constraints.bottom));
          return;
        }
      } catch {
        // ignore
      }
    }

    // Default: bottom-right
    x.set(constraints.right);
    y.set(constraints.bottom);
  }, [constraints.bottom, constraints.left, constraints.right, constraints.top, margin, size, x, y]);

  useEffect(() => {
    const dismissed = window.localStorage.getItem(HINT_KEY) === "1";
    if (dismissed) return;

    setShowHint(true);
    const t = window.setTimeout(() => setShowHint(false), 4500);
    return () => window.clearTimeout(t);
  }, []);

  const persist = () => {
    const next = {
      x: clamp(x.get(), constraints.left, constraints.right),
      y: clamp(y.get(), constraints.top, constraints.bottom),
    };
    x.set(next.x);
    y.set(next.y);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {showHint && (
        <motion.div
          className="pointer-events-none fixed"
          style={{ x, y }}
        >
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-white text-neutral-900 border border-neutral-200 shadow-lg px-3 py-1 text-xs">
            Drag me
          </div>
        </motion.div>
      )}

      <motion.a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label="Open GitHub profile"
        title="GitHub"
        className="pointer-events-auto select-none rounded-full bg-black text-white shadow-xl border border-neutral-800 flex items-center justify-center active:cursor-grabbing cursor-grab fixed"
        style={{ ...buttonStyle, x, y }}
        drag
        dragConstraints={constraints}
        dragMomentum={false}
        dragElastic={0.08}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        onPointerDown={() => {
          pointerDownPosRef.current = { x: x.get(), y: y.get() };
          didDragRef.current = false;
        }}
        onDragStart={() => {
          didDragRef.current = true;
          setShowHint(false);
          window.localStorage.setItem(HINT_KEY, "1");
        }}
        onDragEnd={() => {
          persist();
          window.setTimeout(() => {
            didDragRef.current = false;
          }, 0);
        }}
        onClick={(e) => {
          const dx = Math.abs(x.get() - pointerDownPosRef.current.x);
          const dy = Math.abs(y.get() - pointerDownPosRef.current.y);
          const moved = dx > 3 || dy > 3;
          if (didDragRef.current || moved) e.preventDefault();
        }}
      >
        <Github className="w-6 h-6" />
      </motion.a>
    </div>
  );
}

