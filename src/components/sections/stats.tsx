"use client";

import { stats } from "@/lib/data";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function Stats() {
  const { t } = useI18n();
  return (
    <section className="relative z-20 mx-auto max-w-5xl px-4 -mt-12 sm:-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white via-white to-tropical-green-50 p-6 sm:p-10 shadow-2xl shadow-tropical-green-500/10 border border-tropical-green-100/50"
      >
        {/* Decorative corner */}
        <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-tropical-green-100/40 blur-xl" />
        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-tropical-yellow-100/40 blur-xl" />

        <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center mb-2">
                <Sparkles className="h-4 w-4 text-tropical-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mr-1" />
                <p className="text-2xl sm:text-3xl font-extrabold text-tropical-green-600 font-heading tracking-tight group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </p>
              </div>
              <p className="mt-1 text-[10px] sm:text-xs font-bold sm:font-semibold text-gray-500 uppercase tracking-wide sm:tracking-wider font-sans">
                {t(`stats.${idx + 1}`)}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
