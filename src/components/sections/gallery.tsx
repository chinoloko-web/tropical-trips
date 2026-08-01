"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Camera, ChevronRight, X, ChevronLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const galleryImages = [
  "/images/general/IMG_20250405_091919.jpg",
  "/images/general/IMG_20250405_092000.jpg",
  "/images/general/IMG_20250405_123007.jpg",
  "/images/general/IMG_20250406_151631.jpg",
  "/images/general/IMG_20250407_092309.jpg",
  "/images/general/IMG_20250408_123720.jpg",
  "/images/general/IMG_20250408_123826.jpg",
  "/images/general/IMG_20250408_134701.jpg",
];

export function Gallery() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex === null) {
      window.dispatchEvent(new CustomEvent("lightbox:change", { detail: "close" }));
      return;
    }
    window.dispatchEvent(new CustomEvent("lightbox:change", { detail: "open" }));
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxIndex]);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-dots-light" />
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Badge variant="secondary">Galería</Badge>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 font-heading sm:text-4xl">
            Momentos que inspiran
          </h2>
          <p className="mt-4 text-gray-500 font-sans">
            Cada destino guarda una historia. Mirá lo que nuestros viajeros han vivido en Centroamérica.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className={`relative overflow-hidden rounded-2xl bg-gray-200 cursor-pointer group ${
                idx === 0 ? "row-span-2 col-span-2" : ""
              } ${idx === 4 ? "sm:col-span-2" : ""}`}
              style={{ aspectRatio: "1/1" }}
              onClick={() => setLightboxIndex(idx)}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={img}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-300 ${
                  hovered === idx ? "opacity-100" : "opacity-0"
                }`}
              />
              <div
                className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${
                  hovered === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
              >
                <Camera className="h-5 w-5 text-white drop-shadow-lg" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null &&
          createPortal(
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-black"
              onClick={() => setLightboxIndex(null)}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(null);
                }}
                className="absolute right-4 top-4 z-[210] rounded-full bg-white/15 p-3 text-white hover:bg-white/30 transition-colors shadow-lg"
                style={{ width: 48, height: 48 }}
              >
                <X className="h-6 w-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-3 text-white hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <motion.img
                key={lightboxIndex}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={galleryImages[lightboxIndex]}
                alt=""
                className="h-dvh w-full object-cover"
                onClick={(e) => e.stopPropagation()}
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev! + 1) % galleryImages.length);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-3 text-white hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-sm text-white">
                {lightboxIndex + 1} / {galleryImages.length}
              </div>
            </motion.div>,
            document.body
          )}
      </AnimatePresence>
    </section>
  );
}
