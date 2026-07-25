"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CursorFollower() {
  const [isTouch, setIsTouch] = useState(true);
  const [visible, setVisible] = useState(false);

  const springX = useSpring(0, { stiffness: 150, damping: 12 });
  const springY = useSpring(0, { stiffness: 150, damping: 12 });
  const ringX = useSpring(0, { stiffness: 80, damping: 10 });
  const ringY = useSpring(0, { stiffness: 80, damping: 10 });

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(isTouchDevice);
    if (isTouchDevice) return;

    const move = (e: MouseEvent) => {
      springX.set(e.clientX);
      springY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
      setVisible(true);
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [springX, springY, ringX, ringY]);

  if (isTouch) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: ringX,
          y: ringY,
          opacity: visible ? 1 : 0,
        }}
      >
        <div className="h-8 w-8 rounded-full border-2 border-tropical-green-500/40 -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: springX,
          y: springY,
          opacity: visible ? 1 : 0,
        }}
      >
        <div className="h-3 w-3 rounded-full bg-tropical-green-500 -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
    </>
  );
}
