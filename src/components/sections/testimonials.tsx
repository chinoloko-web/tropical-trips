"use client";

import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";

export function Testimonials() {
  const { t, testimonials } = useI18n();
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-50 to-transparent" />
      <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-tropical-green-50 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-tropical-yellow-50 blur-3xl" />

      {/* Quote marks decoration */}
      <div className="absolute top-20 right-10 text-[200px] font-serif text-gray-100 leading-none select-none hidden lg:block">
        &ldquo;
      </div>
      <div className="absolute bottom-20 left-10 text-[200px] font-serif text-gray-100 leading-none select-none hidden lg:block rotate-180">
        &ldquo;
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Badge variant="secondary">{t("ts.badge")}</Badge>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 font-heading sm:text-4xl">
            {t("ts.title")}
          </h2>
          <p className="mt-4 text-gray-500 font-sans">
            {t("ts.desc")}
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex"
            >
              <Card className="hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 w-full border-gray-100 bg-white rounded-3xl overflow-hidden flex flex-col justify-between group">
                <div className="h-1.5 w-full bg-gradient-to-r from-tropical-green-400 to-tropical-green-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <CardContent className="p-5 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <Quote className="h-8 w-8 text-tropical-green-200 mb-4" />
                    <div className="flex gap-1.5 mb-5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4.5 w-4.5 fill-tropical-yellow-400 text-tropical-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 italic leading-relaxed text-sm font-sans">
                      &ldquo;{t.text}&rdquo;
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-3.5 border-t border-gray-100 pt-5">
                    <img
                      src={t.image}
                      alt={t.name}
                      loading="lazy"
                      decoding="async"
                      className="h-11 w-11 rounded-full object-cover shadow-sm bg-gray-100 border-2 border-gray-50"
                    />
                    <div>
                      <p className="font-bold text-gray-900 text-sm font-heading">{t.name}</p>
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider font-sans mt-0.5">
                        {t.country}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
