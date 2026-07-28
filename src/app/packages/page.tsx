"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Sparkles, ArrowRight, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { packages } from "@/lib/data";

export default function PackagesPage() {
  return (
    <div className="pb-24">
      {/* Banner */}
      <section className="relative h-[40vh] sm:h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/general/IMG_20250406_151631.jpg"
            alt="Paquetes - Volcán"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/60 to-black/75" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <Badge variant="accent" className="mb-4">Planes Completos</Badge>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-heading drop-shadow-md">
            Paquetes Todo Incluido
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-green-100 font-sans drop-shadow-sm">
            Diseñados para tu comodidad. Hoteles, tours, transporte y guías organizados para que solo disfrutes.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-10 sm:mt-16">
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex"
            >
              <Card className={`group overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col w-full bg-white rounded-3xl ${pkg.popular ? "ring-2 ring-tropical-green-500" : ""}`}>
                <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-100">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {pkg.popular && (
                    <div className="absolute top-4 left-4">
                      <Badge variant="default" className="gap-1 bg-tropical-green-600 text-white font-bold shadow-lg">
                        <Sparkles className="h-3.5 w-3.5 fill-white" /> Recomendado
                      </Badge>
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 rounded-2xl bg-black/60 px-4 py-2 font-extrabold text-white shadow-md backdrop-blur-sm">
                    ${pkg.price}
                  </div>
                </div>

                <CardContent className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-tropical-green-600 font-bold uppercase tracking-wider mb-1">
                      <Clock className="h-3.5 w-3.5" /> {pkg.duration}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 font-heading group-hover:text-tropical-green-600 transition-colors">
                      {pkg.name}
                    </h3>
                    <p className="mt-3 text-sm text-gray-500 leading-relaxed font-sans line-clamp-2">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 font-sans border-t border-gray-50 pt-4">
                      {pkg.features.slice(0, 3).map((f) => (
                        <span key={f} className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-full">
                          <Check className="h-3 w-3 text-tropical-green-500" /> {f}
                        </span>
                      ))}
                      {pkg.features.length > 3 && (
                        <span className="text-gray-400">+{pkg.features.length - 3} más</span>
                      )}
                    </div>

                    <Link href={`/packages/${pkg.id}`} className="block mt-5">
                      <Button
                        variant={pkg.popular ? "default" : "outline"}
                        className="w-full font-bold flex items-center justify-center gap-2"
                      >
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
