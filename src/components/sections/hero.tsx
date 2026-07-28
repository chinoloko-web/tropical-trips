"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Star, ChevronDown, Phone } from "lucide-react";
import { clientGallery, siteConfig } from "@/lib/data";

const floatingShapes = [
  { size: 16, x: "10%", y: "20%", delay: 0, duration: 6, color: "bg-tropical-yellow-400/20" },
  { size: 24, x: "85%", y: "15%", delay: 1, duration: 8, color: "bg-tropical-green-400/20" },
  { size: 12, x: "75%", y: "70%", delay: 2, duration: 5, color: "bg-white/10" },
  { size: 20, x: "20%", y: "75%", delay: 0.5, duration: 7, color: "bg-tropical-yellow-400/15" },
  { size: 8, x: "50%", y: "30%", delay: 3, duration: 4, color: "bg-white/20" },
  { size: 14, x: "90%", y: "50%", delay: 1.5, duration: 6, color: "bg-tropical-green-400/15" },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % clientGallery.length);
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background images */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={clientGallery[index]}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/60 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </div>

      {/* Floating decorative shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${shape.color} blur-sm`}
          style={{
            width: shape.size * 4,
            height: shape.size * 4,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            opacity: [0.3, 0.6, 0.3, 0.5, 0.3],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Gradient line */}
      <motion.div
        className="absolute top-1/3 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)",
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Rating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 sm:px-5 py-1.5 sm:py-2.5 backdrop-blur-md border border-white/10"
          >
            <Star className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-tropical-yellow-400 fill-tropical-yellow-400" />
            <span className="text-xs sm:text-sm text-white font-medium">4.9/5 · Más de 1000 viajeros felices</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white font-heading px-2"
          >
            {siteConfig.tagline.split(".")[0]}.<br />
            <span className="bg-gradient-to-r from-tropical-yellow-300 via-tropical-yellow-400 to-tropical-green-400 bg-clip-text text-transparent">
              {siteConfig.tagline.split(".")[1] || "La historia que vas a contar"}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-green-100/90 font-sans px-2 leading-relaxed"
          >
            Descubre Centroamérica con experiencias diseñadas a tu medida en Nicaragua y Costa Rica. Naturaleza, aventura y cultura en un solo viaje.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row"
          >
            <a href="#tours" className="w-full sm:w-auto">
              <Button variant="accent" size="xl" className="w-full sm:w-auto shadow-xl shadow-tropical-yellow-400/30">
                <MapPin className="h-5 w-5" /> Explorar Tours
              </Button>
            </a>
            <a href="/contact" className="w-full sm:w-auto">
              <Button variant="white" size="xl" className="w-full sm:w-auto group">
                <Phone className="h-5 w-5 text-tropical-green-600 group-hover:rotate-12 transition-transform" /> Reservar Ahora
              </Button>
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-8 text-xs text-green-200/70"
          >
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> Sin costo extra
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> Cancelación gratis
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> Guías locales
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-white/50 font-medium uppercase tracking-widest">Descubre</span>
          <div className="h-10 w-6 rounded-full border-2 border-white/30 p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mx-auto h-2 w-1 rounded-full bg-white/60"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
