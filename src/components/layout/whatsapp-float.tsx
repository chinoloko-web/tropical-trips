"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { motion } from "framer-motion";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={`https://wa.me/${siteConfig.whatsapp}?text=Hola! Me interesa planificar un viaje por Centroamérica con Tropical Trips 🌴`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex h-12 sm:h-14 w-12 sm:w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl shadow-black/20 hover:bg-green-600 transition-colors"
      aria-label="Contactar por WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-green-500/30 animate-ping -z-10" />
      <MessageCircle className="h-6 sm:h-7 w-6 sm:w-7" />
    </motion.a>
  );
}
