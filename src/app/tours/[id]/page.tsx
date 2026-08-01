"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock, MapPin, Check, ArrowLeft, Compass, Sparkles, Map as MapIcon,
  Route, Star, Shield, HeartHandshake, Users, Sun, X, ChevronLeft, ChevronRight,
} from "lucide-react";
import { NivewayButton } from "@/components/ui/niveway-button";
import { TourMap } from "@/components/ui/tour-map";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { tours, testimonials } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemReveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TrustBadge = ({ icon: Icon, text }: { icon: any; text: string }) => (
  <div className="flex items-center gap-2 rounded-xl bg-gray-100 px-3 py-2 shadow-sm border border-gray-200">
    <Icon className="h-4 w-4 text-tropical-green-600" />
    <span className="text-xs font-semibold text-gray-700">{text}</span>
  </div>
);

export default function TourDetailPage() {
  const params = useParams();
  const tour = tours.find((t) => t.id === params.id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!tour) {
    notFound();
  }

  const galleryImages = tour.images || [tour.image];

  useEffect(() => {
    if (lightboxIndex === null) return;
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
    <div className="pb-24">
      {/* ===== HERO ===== */}
      <section className="relative flex items-center justify-center overflow-hidden py-24 sm:py-0 sm:h-[60vh] sm:min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src={tour.image}
            alt={tour.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 w-full sm:pt-28">
          <Link
            href="/tours"
            className="inline-flex items-center gap-1.5 text-sm text-green-200 hover:text-white transition-colors mb-6 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Volver a tours
          </Link>
          <div className="max-w-3xl">
            {tour.tag && (
              <Badge variant="accent" className="mb-4 shadow-lg shadow-tropical-yellow-400/20">
                {tour.tag}
              </Badge>
            )}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-white drop-shadow-lg leading-tight">
              {tour.name}
            </h1>
            <p className="mt-4 max-w-xl text-base sm:text-lg text-green-100/90 font-sans leading-relaxed">
              {tour.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {[tour.duration, tour.location, `$${tour.price}/pers`].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm border border-white/10"
                >
                  {tag}
                </span>
              ))}
              <span className="inline-flex items-center gap-1.5 rounded-full bg-tropical-yellow-400/20 px-4 py-2 text-sm font-medium text-tropical-yellow-300 backdrop-blur-sm border border-tropical-yellow-400/20">
                <Star className="h-4 w-4 fill-current" /> 4.9
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 -mt-12 sm:-mt-16 relative z-20">
        <div className="grid gap-12 lg:grid-cols-3">

          {/* ===== MAIN ===== */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-2 space-y-6 sm:space-y-8"
          >
            {/* Gallery */}
            <motion.div variants={itemReveal}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-2">
                {galleryImages.slice(0, 5).map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setLightboxIndex(i)}
                    className={`relative overflow-hidden rounded-xl sm:rounded-2xl bg-gray-200 group cursor-pointer ${
                      i === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
                    }`}
                    style={{ aspectRatio: "1/1" }}
                  >
                    <img
                      src={img}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    {i > 0 && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="rounded-full bg-white/90 p-2 shadow-lg">
                          <ChevronRight className="h-4 sm:h-5 w-4 sm:w-5 text-gray-700" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Lightbox */}
            <AnimatePresence>
              {lightboxIndex !== null &&
                createPortal(
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[100] bg-black"
                  onClick={() => setLightboxIndex(null)}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxIndex(null);
                    }}
                    className="absolute right-4 top-4 z-[110] rounded-full bg-white/15 p-3 text-white hover:bg-white/30 transition-colors shadow-lg"
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

            {/* Trust badges */}
            <motion.div
              variants={itemReveal}
              className="flex flex-wrap items-center gap-3"
            >
              <TrustBadge icon={Shield} text="Reserva 100% segura" />
              <TrustBadge icon={HeartHandshake} text="Cancelación gratuita" />
              <TrustBadge icon={Users} text="Grupos reducidos" />
              <TrustBadge icon={Sun} text="Mejor precio garantizado" />
            </motion.div>

            {/* ===== SOBRE ESTE TOUR ===== */}
            <motion.div variants={itemReveal}>
              <Card className="overflow-hidden border border-gray-100 shadow-xl bg-white">
                <CardContent className="p-5 sm:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-tropical-green-50">
                      <Compass className="h-5 w-5 text-tropical-green-600" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-900 font-heading">
                        Sobre este tour
                      </h2>
                      <p className="text-xs text-gray-500">Información general</p>
                    </div>
                  </div>
                  <p className="text-gray-500 leading-relaxed text-base">
                    {tour.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* ===== INCLUYE + DETALLES ===== */}
            <motion.div variants={itemReveal}>
              <Card className="overflow-hidden border border-gray-100 shadow-xl bg-white">
                <CardContent className="p-8">
                  <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 font-heading mb-4 flex items-center gap-2">
                        <Check className="h-5 w-5 text-tropical-green-600" />
                        Incluye
                      </h3>
                      <ul className="space-y-3">
                        {tour.includes.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-tropical-green-50">
                              <Check className="h-3.5 w-3.5 text-tropical-green-600" />
                            </div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 font-heading mb-4 flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-tropical-green-600" />
                        Detalles
                      </h3>
                      <ul className="space-y-3">
                        {tour.details.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                            <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-tropical-green-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* ===== EXPERIENCIAS ===== */}
            <motion.div variants={itemReveal}>
              <Card className="overflow-hidden border border-gray-100 shadow-xl bg-white">
                <div className="relative aspect-[3/1] sm:aspect-[4/1] overflow-hidden">
                  <img
                    src={tour.images?.[1] || tour.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <div className="flex items-center gap-2 text-tropical-yellow-300 mb-2">
                      <Sparkles className="h-5 w-5" />
                      <span className="text-xs font-bold uppercase tracking-wider">
                        Vive la experiencia
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-white font-heading">
                      Experiencias
                    </h2>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {tour.experiences.map((item) => (
                      <div
                        key={item}
                        className="group flex items-start gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4 transition-all duration-300 hover:border-tropical-green-200 hover:bg-tropical-green-50"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-tropical-yellow-50 text-tropical-yellow-600 transition-transform group-hover:scale-110">
                          <Sparkles className="h-5 w-5" />
                        </div>
                        <p className="pt-1.5 text-sm text-gray-700 font-medium">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* ===== ITINERARIO ===== */}
            <motion.div variants={itemReveal}>
              <Card className="overflow-hidden border border-gray-100 shadow-xl bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-tropical-green-50">
                      <Route className="h-5 w-5 text-tropical-green-600" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-900 font-heading">
                        Itinerario
                      </h2>
                      <p className="text-xs text-gray-500">Día a día del tour</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute left-[19px] top-0 h-full w-0.5 bg-gradient-to-b from-tropical-green-400 to-tropical-green-200 rounded-full" />
                    <ul className="space-y-0">
                      {tour.itinerary.map((step, i) => (
                        <li key={i} className="relative pb-8 pl-11 sm:pl-14 last:pb-0">
                          <div className="absolute left-0 sm:left-2.5 top-0 flex h-7 sm:h-8 w-7 sm:w-8 items-center justify-center rounded-full border-2 border-tropical-green-500 bg-white text-[10px] sm:text-xs font-bold text-tropical-green-600 shadow-sm">
                            {i + 1}
                          </div>
                          <div className="rounded-xl bg-gray-50 p-4 transition-all duration-300 hover:bg-tropical-green-50">
                            <span className="inline-block rounded-md bg-tropical-green-50 px-2.5 py-1 text-[11px] font-bold text-tropical-green-700 uppercase tracking-wider">
                              {step.time}
                            </span>
                            <p className="mt-2 text-sm text-gray-700 font-medium">
                              {step.activity}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* ===== PUNTO DE ENCUENTRO ===== */}
            <motion.div variants={itemReveal}>
              <Card className="overflow-hidden border border-gray-100 shadow-xl bg-white">
                <CardContent className="p-8">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-tropical-green-50">
                        <MapIcon className="h-6 w-6 text-tropical-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 font-heading">
                          Punto de Encuentro
                        </h3>
                        <p className="mt-1 max-w-lg text-sm text-gray-500 leading-relaxed">
                          {tour.meetingPoint}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="shrink-0 font-medium"
                      onClick={() =>
                        window.open(
                          `https://www.google.com/maps/search/${encodeURIComponent(tour.location)}`,
                          "_blank"
                        )
                      }
                    >
                      <MapPin className="h-4 w-4" />
                      Ver en mapa
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* ===== TESTIMONIALS ===== */}
            <motion.div variants={itemReveal}>
              <Card className="overflow-hidden border border-gray-100 shadow-xl bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-tropical-yellow-50">
                      <Star className="h-5 w-5 text-tropical-yellow-600 fill-current" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-900 font-heading">
                        Lo que dicen nuestros viajeros
                      </h2>
                      <p className="text-xs text-gray-500">Opiniones reales</p>
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {testimonials.slice(0, 3).map((t) => (
                      <div
                        key={t.name}
                        className="rounded-xl border border-gray-100 bg-gray-50 p-5"
                      >
                        <div className="flex items-center gap-1 mb-3">
                          {Array.from({ length: t.rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="h-3.5 w-3.5 fill-tropical-yellow-400 text-tropical-yellow-400"
                            />
                          ))}
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                          &ldquo;{t.text}&rdquo;
                        </p>
                        <div className="mt-4 flex items-center gap-2">
                          <img
                            src={t.image}
                            alt={t.name}
                            className="h-7 w-7 rounded-full object-cover"
                          />
                          <div>
                            <p className="text-xs font-bold text-gray-800">{t.name}</p>
                            <p className="text-[10px] text-gray-500">{t.country}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* ===== SIDEBAR ===== */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Price Card */}
            <div className="rounded-2xl border border-gray-100 bg-white shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-tropical-green-600 to-tropical-green-700 px-6 py-4">
                <p className="text-xs font-medium text-green-100 uppercase tracking-wider">
                  Precio por persona
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">${tour.price}</span>
                  <span className="text-sm text-green-200/80">USD</span>
                </div>
              </div>
              <div className="p-6 space-y-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Impuestos y tasas</span>
                  <span className="font-medium text-gray-800">Incluidos</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Cancelación</span>
                  <span className="font-medium text-green-600">Gratuita</span>
                </div>
                <div className="border-t border-gray-100 pt-5">
                  <NivewayButton />
                  <p className="mt-3 text-center text-xs text-gray-400">
                    No pierdas tu cupo. Los espacios se llenan rápido.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-xl">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
                Info rápida
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <Users className="h-4 w-4 text-tropical-green-600" />
                  Máx. 8 personas
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <Clock className="h-4 w-4 text-tropical-green-600" />
                  {tour.duration}
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 text-tropical-green-600" />
                  {tour.location}
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <Shield className="h-4 w-4 text-tropical-green-600" />
                  Guía certificado
                </li>
              </ul>
            </div>

            {/* Map */}
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-xl">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
                Ubicación
              </h4>
              <TourMap lat={tour.lat} lng={tour.lng} location={tour.location} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
