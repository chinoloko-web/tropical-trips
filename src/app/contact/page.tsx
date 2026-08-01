"use client";

import { useState } from "react";
import { Mail, MapPin, Send, Phone, Clock, MessageCircle, Check, ArrowRight, Sparkles, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig, tours } from "@/lib/data";
import { motion } from "framer-motion";

const benefits = [
  { icon: Clock, text: "Respuesta en menos de 24 horas" },
  { icon: Check, text: "Sin compromiso ni costo" },
  { icon: MessageCircle, text: "Atención personalizada" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", tour: "" });

  const inputClass =
    "w-full rounded-xl border border-gray-200 px-5 py-4 text-sm transition-all duration-300 focus:border-tropical-green-500 focus:outline-none focus:ring-2 focus:ring-tropical-green-500/20 bg-white hover:border-gray-300 text-gray-900 placeholder:text-gray-400";

  return (
    <div className="pb-24">
      {/* ===== HERO ===== */}
      <section className="relative flex items-center justify-center overflow-hidden py-24 sm:py-0 sm:h-[45vh]">
        <div className="absolute inset-0">
          <img
            src="/images/general/IMG_20250405_123007.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/60 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:pt-28 text-center text-white">
          <Badge variant="accent" className="mb-4">Contacto</Badge>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-heading drop-shadow-md leading-tight">
            Hablemos de tu <span className="bg-gradient-to-r from-tropical-yellow-300 to-tropical-yellow-400 bg-clip-text text-transparent">Aventura</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-green-100 font-sans drop-shadow-sm">
            Diseñemos juntos la historia de tu próximo viaje por Nicaragua y Costa Rica.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-12 relative z-20">
        {/* ===== BENEFITS BAR ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-12 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-tropical-green-50 to-emerald-50 border border-tropical-green-100"
        >
          {benefits.map((b, i) => (
            <div key={i} className="flex items-center gap-2.5 text-sm text-gray-700 font-medium">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-tropical-green-100 text-tropical-green-600">
                <b.icon className="h-4 w-4" />
              </div>
              <span>{b.text}</span>
            </div>
          ))}
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-12 items-start">
          
          {/* ===== FORM ===== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <Card className="border border-gray-100 shadow-xl rounded-3xl overflow-hidden bg-white group hover:shadow-2xl transition-shadow duration-500">
              {/* Header with gradient */}
              <div className="relative overflow-hidden">
                <div className="h-2 w-full bg-gradient-to-r from-tropical-green-500 via-emerald-400 to-tropical-green-500" />
                <div className="p-8 sm:p-10">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-tropical-green-50 text-tropical-green-600">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold font-heading text-gray-900">Envíanos un Mensaje</h2>
                      <p className="text-sm text-gray-500 font-sans mt-0.5">
                        Completa el formulario y te responderemos a la brevedad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="px-8 sm:px-10 pb-10">
                <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Nombre Completo <span className="text-tropical-green-600">*</span>
                      </label>
                      <input
                        className={inputClass}
                        placeholder="Tu nombre"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Correo Electrónico <span className="text-tropical-green-600">*</span>
                      </label>
                      <input
                        className={inputClass}
                        type="email"
                        placeholder="tu@correo.com"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Teléfono / WhatsApp
                      </label>
                      <input
                        className={inputClass}
                        placeholder="+506 8888 8888"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Tour de Interés
                      </label>
                      <select
                        className={`${inputClass} appearance-none cursor-pointer`}
                        value={form.tour}
                        onChange={(e) => setForm({ ...form, tour: e.target.value })}
                      >
                        <option value="">Selecciona un tour</option>
                        {tours.map((t) => (
                          <option key={t.id} value={t.name}>
                            {t.name}
                          </option>
                        ))}
                        <option value="A medida">Itinerario personalizado</option>
                        <option value="Otro">Otro / Consulta general</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Mensaje <span className="text-tropical-green-600">*</span>
                    </label>
                    <textarea
                      className={`${inputClass} min-h-[150px] resize-none`}
                      placeholder="Cuéntanos sobre tu viaje ideal: fechas, destino, número de personas, lo que sea que sueñes..."
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    className="w-full font-bold flex items-center justify-center gap-2 mt-4 shadow-xl shadow-tropical-green-600/25 hover:shadow-tropical-green-600/40 transition-shadow"
                  >
                    <Send className="h-5 w-5" /> Enviar Mensaje
                    <ArrowRight className="h-4 w-4" />
                  </Button>

                  <p className="text-center text-xs text-gray-400 font-sans pt-2">
                    Tus datos están seguros. No compartimos información con terceros.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* ===== SIDEBAR ===== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Email Card */}
            <Card className="border border-gray-100 shadow-lg rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-1">
              <CardContent className="flex items-start gap-5 p-7 sm:p-8">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-tropical-green-50 to-emerald-50 text-tropical-green-600 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-gray-400 text-xs uppercase tracking-wider">Correo Directo</p>
                  <a href={`mailto:${siteConfig.email}`} className="text-base sm:text-lg font-bold text-gray-900 hover:text-tropical-green-600 transition-colors mt-1 block font-heading break-all">
                    {siteConfig.email}
                  </a>
                  <p className="text-sm text-gray-500 mt-2 font-sans flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-tropical-green-500" /> Respuesta en menos de 24h
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="border border-gray-100 shadow-lg rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-1">
              <CardContent className="flex items-start gap-5 p-7 sm:p-8">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-tropical-green-50 to-emerald-50 text-tropical-green-600 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-gray-400 text-xs uppercase tracking-wider">WhatsApp / Teléfono</p>
                  <p className="text-base sm:text-lg font-bold text-gray-900 mt-1 font-heading">
                    {siteConfig.phone}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card className="border border-gray-100 shadow-lg rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-1">
              <CardContent className="flex items-start gap-5 p-7 sm:p-8">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-tropical-yellow-50 to-amber-50 text-tropical-yellow-600 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-gray-400 text-xs uppercase tracking-wider">Área de Operación</p>
                  <p className="text-base sm:text-lg font-bold text-gray-900 mt-1 font-heading">
                    {siteConfig.address}
                  </p>
                  <p className="text-sm text-gray-500 mt-2 font-sans flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-tropical-yellow-500" /> Tours en toda la región
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Sparkles, text: "Reserva 100% segura" },
                { icon: Check, text: "Cancelación gratuita" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 rounded-xl bg-gray-50 px-4 py-3 border border-gray-100">
                  <item.icon className="h-4 w-4 text-tropical-green-600 shrink-0" />
                  <span className="text-xs font-semibold text-gray-600">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
