"use client";

import Link from "next/link";
import { ArrowRight, Clock, MapPin, Compass } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";

export function ToursPreview() {
  const { t, tours } = useI18n();
  const previewTours = tours.slice(0, 3);

  return (
    <section id="tours" className="relative py-24 sm:py-32 overflow-hidden bg-gray-50">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-dots-light" />
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white to-transparent" />
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-tropical-green-100/50 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-tropical-yellow-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Badge variant="secondary">{t("tp.badge")}</Badge>
          <h2 className="mt-4 text-2xl sm:text-4xl font-bold text-gray-900 font-heading">
            {t("tp.title")}
          </h2>
          <p className="mt-4 text-gray-500 font-sans">
            {t("tp.desc")}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {previewTours.map((tour, idx) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex"
            >
              <Card className="group overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col w-full bg-white rounded-3xl">
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {tour.tag && (
                    <Badge variant="accent" className="absolute left-4 top-4 font-bold shadow-md">
                      {tour.tag}
                    </Badge>
                  )}
                  <div className="absolute bottom-4 right-4 rounded-2xl bg-black/60 px-4 py-2 font-extrabold text-white shadow-md backdrop-blur-sm">
                    ${tour.price}
                  </div>
                </div>

                <CardContent className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 font-heading group-hover:text-tropical-green-600 transition-colors">
                      {tour.name}
                    </h3>
                    <p className="mt-3 text-sm text-gray-500 leading-relaxed font-sans line-clamp-3">
                      {tour.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center gap-4 text-xs text-gray-500 font-sans border-t border-gray-100 pt-4">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-tropical-green-500" /> {tour.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-tropical-green-500" /> {tour.location}
                      </span>
                    </div>

                    <Link href={`/tours/${tour.id}`} className="block mt-5">
                      <Button variant="outline" className="w-full font-bold flex items-center justify-center gap-2 group/btn">
                        {t("tp.details")} <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/tours">
            <Button variant="secondary" size="lg" className="font-bold shadow-lg shadow-tropical-green-500/25">
              <Compass className="h-5 w-5" /> {t("tp.all")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
