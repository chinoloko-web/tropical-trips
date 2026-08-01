"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { tours } from "@/lib/data";

export default function ToursPage() {
  return (
    <div className="pb-24">
      {/* Banner */}
      <section className="relative h-[40vh] sm:h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/general/IMG_20250405_091919.jpg"
            alt="Tours - Cascada"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/60 to-black/75" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 pt-24 sm:pt-28 text-center text-white">
          <Badge variant="accent" className="mb-4">Experiencias</Badge>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-heading drop-shadow-md">
            Nuestros Tours
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-green-100 font-sans drop-shadow-sm">
            Desde escaladas de volcanes activos hasta cascadas mágicas y tours de un día. Elige tu próxima aventura.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-10 sm:mt-16">
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour, i) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex"
            >
              <Card className="group overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col w-full bg-white rounded-3xl">
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
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
                    <div className="flex items-center gap-4 text-xs text-gray-500 font-sans border-t border-gray-50 pt-4">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-tropical-green-500" /> {tour.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-tropical-green-500" /> {tour.location}
                      </span>
                    </div>

                    <Link href={`/tours/${tour.id}`} className="block mt-5">
                      <Button variant="outline" className="w-full font-bold flex items-center justify-center gap-2">
                        Ver Detalles <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
