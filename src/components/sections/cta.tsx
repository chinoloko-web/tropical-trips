"use client";

import { Button } from "@/components/ui/button";
import { Mail, ArrowRight, Send, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";

export function CTA() {
  const { t } = useI18n();
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dots" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />

      <div className="mx-auto max-w-5xl px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl sm:rounded-[2.5rem] bg-gradient-to-br from-tropical-green-900 via-emerald-800 to-tropical-green-900 px-5 sm:px-10 py-14 sm:py-20 text-center shadow-2xl border border-white/10"
        >
          {/* Decorative shapes */}
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-tropical-yellow-400/10 blur-3xl" />
          <div className="absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="absolute top-10 left-10 h-20 w-20 rounded-full bg-white/5 blur-xl" />
          <div className="absolute bottom-10 right-10 h-16 w-16 rounded-full bg-white/5 blur-xl" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-tropical-yellow-300 font-heading bg-white/10 px-4 py-2 rounded-full">
              <MapPin className="h-3.5 w-3.5" /> {t("cta.badge")}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white drop-shadow-md leading-tight">
              {t("cta.title1")}<br />
              <span className="bg-gradient-to-r from-tropical-yellow-300 to-tropical-yellow-400 bg-clip-text text-transparent">{t("cta.title2")}</span>
            </h2>

            <p className="text-green-100/90 font-sans text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
              {t("cta.desc")}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row pt-2">
              <a href="/contact" className="w-full sm:w-auto">
                <Button variant="accent" size="lg" className="w-full sm:w-auto font-bold flex items-center justify-center gap-2 shadow-xl shadow-tropical-yellow-400/30">
                  <Send className="h-5 w-5" /> {t("cta.contact")}
                </Button>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="w-full sm:w-auto">
                <Button variant="white" size="lg" className="w-full sm:w-auto font-bold flex items-center justify-center gap-2">
                  <Mail className="h-5 w-5 text-tropical-green-600" /> {t("cta.email")}
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
