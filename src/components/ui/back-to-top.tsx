"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-50 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-tropical-green-600 text-white shadow-xl shadow-tropical-green-600/30 hover:bg-tropical-green-700 transition-all duration-300 hover:-translate-y-1"
          aria-label="Volver arriba"
        >
          <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
