"use client";

import { motion } from "framer-motion";
import { Heart, Globe, Shield, Star, Users, MapPin, Quote, Target, Eye, Award, ChevronRight, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { teamMembers, stats, clientGallery, siteConfig } from "@/lib/data";

const values = [
  { icon: Heart, title: "Pasión", desc: "Amamos lo que hacemos y se nota en cada experiencia y detalle.", color: "from-pink-500 to-rose-500" },
  { icon: Globe, title: "Autenticidad", desc: "Experiencias reales, conectando con las comunidades locales.", color: "from-tropical-green-500 to-emerald-500" },
  { icon: Shield, title: "Seguridad", desc: "Guías capacitados, transporte confiable y protocolos de seguridad.", color: "from-blue-500 to-indigo-500" },
  { icon: Star, title: "Excelencia", desc: "Cuidamos cada detalle para garantizar tu viaje soñado.", color: "from-yellow-400 to-amber-500" },
];

const highlights = [
  { icon: MapPin, title: "2 Países", desc: "Nicaragua y Costa Rica, los destinos más biodiversos de Centroamérica." },
  { icon: Award, title: "13+ Años", desc: "De experiencia guiando viajeros de todo el mundo." },
  { icon: Users, title: "Guías Locales", desc: "Conocimiento auténtico de cada rincón, cultura e historia." },
  { icon: Heart, title: "Viajes a Medida", desc: "Cada itinerario se diseña pensando en tus sueños." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutPage() {
  return (
    <div className="pb-24">
      {/* ===== HERO ===== */}
      <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={clientGallery[2] || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"}
            alt="Nosotros"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/60 to-black/75" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <Badge variant="accent" className="mb-4">Nosotros</Badge>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-heading drop-shadow-md">
            Somos Tropical Trips & Travel
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-green-100 font-sans drop-shadow-sm">
            Nacimos con una misión: mostrar al mundo la belleza natural, la aventura y la cultura auténtica de Nicaragua y Costa Rica.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ===== STATS ===== */}
        <div className="-mt-12 sm:-mt-16 relative z-20 grid grid-cols-2 gap-4 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-tropical-green-700 via-tropical-green-600 to-emerald-700 p-5 sm:p-8 text-white shadow-2xl sm:grid-cols-4 border border-white/10">
          {stats.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className="text-2xl sm:text-4xl font-extrabold font-heading drop-shadow-sm">{s.value}</p>
              <p className="mt-1 text-[10px] sm:text-sm text-green-100 font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* ===== OUR STORY ===== */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="mt-20 sm:mt-28"
        >
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div variants={fadeUp}>
              <Badge variant="secondary">Nuestra Historia</Badge>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900 font-heading leading-tight">
                Más que un tour,<br />una <span className="text-tropical-green-600">experiencia de vida</span>
              </h2>
              <div className="mt-6 space-y-4 text-gray-600 font-sans leading-relaxed">
                <p>
                  Tropical Trips & Travel nació del amor por Centroamérica. Somos un equipo de guías locales apasionados que decidimos unir fuerzas para mostrarle al mundo los tesoros escondidos de Nicaragua y Costa Rica.
                </p>
                <p>
                  Desde las calles coloniales de Granada hasta las aguas turquesa del Río Celeste, pasando por volcanes activos, bosques nubosos y playas paradisíacas — cada ruta que diseñamos busca conectarte con la esencia de nuestra tierra.
                </p>
                <p>
                  No creemos en los tours genéricos. Cada viaje lo construimos contigo, basándonos en tus intereses, tu ritmo y tus sueños. Porque para nosotros, no es un viaje — es la historia que vas a contar.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl overflow-hidden shadow-lg row-span-2">
                <img
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80"
                  alt="Naturaleza"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=600&q=80"
                  alt="Cultura"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80"
                  alt="Aventura"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ===== MISSION & VISION ===== */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-20 sm:mt-28"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <motion.div variants={fadeUp}>
              <Card className="h-full border border-gray-100 bg-gradient-to-br from-tropical-green-50 to-white shadow-xl overflow-hidden">
                <CardContent className="p-8 sm:p-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-tropical-green-600 text-white shadow-lg mb-6">
                    <Target className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 font-heading">Nuestra Misión</h3>
                  <p className="mt-4 text-gray-600 leading-relaxed font-sans">
                    Transformar cada viaje en una experiencia inolvidable, conectando a nuestros viajeros con la autenticidad, la naturaleza y la cultura de Centroamérica a través de guías locales apasionados y un servicio personalizado.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Card className="h-full border border-gray-100 bg-gradient-to-br from-tropical-yellow-50 to-white shadow-xl overflow-hidden">
                <CardContent className="p-8 sm:p-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-tropical-yellow-500 text-white shadow-lg mb-6">
                    <Eye className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 font-heading">Nuestra Visión</h3>
                  <p className="mt-4 text-gray-600 leading-relaxed font-sans">
                    Ser la agencia de viajes líder en Centroamérica, reconocida por nuestra autenticidad, responsabilidad con el medio ambiente y la capacidad de crear historias que nuestros viajeros llevan en el corazón para siempre.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* ===== WHY CHOOSE US ===== */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-20 sm:mt-28"
        >
          <div className="text-center">
            <Badge variant="secondary">¿Por qué nosotros?</Badge>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 font-heading">Viaja con confianza</h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto font-sans">
              No somos una agencia más. Somos locales, apasionados y comprometidos con tu experiencia.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, idx) => (
              <motion.div key={h.title} variants={fadeUp}>
                <Card className="h-full border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white group">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-tropical-green-50 text-tropical-green-600 group-hover:bg-tropical-green-600 group-hover:text-white transition-all duration-300 shadow-md">
                      <h.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-bold text-gray-900 font-heading text-lg">{h.title}</h3>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed font-sans">{h.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ===== VALUES ===== */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-20 sm:mt-28"
        >
          <div className="text-center">
            <Badge variant="secondary">Nuestra Esencia</Badge>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 font-heading">Valores que nos definen</h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto font-sans">
              Guiamos cada paso de tu aventura basándonos en la responsabilidad, la honestidad y el respeto local.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, idx) => (
              <motion.div key={v.title} variants={fadeUp}>
                <Card className="text-center h-full border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white group overflow-hidden">
                  <div className={`h-2 w-full bg-gradient-to-r ${v.color}`} />
                  <CardContent className="p-8">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 text-tropical-green-600 group-hover:bg-tropical-green-600 group-hover:text-white transition-all duration-300 shadow-md">
                      <v.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-6 font-bold text-gray-900 text-lg font-heading">{v.title}</h3>
                    <p className="mt-3 text-sm text-gray-500 leading-relaxed font-sans">{v.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ===== TEAM ===== */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          className="mt-20 sm:mt-28"
        >
          <div className="text-center">
            <Badge variant="secondary" className="flex items-center gap-1.5 mx-auto w-fit">
              <Users className="h-4 w-4" /> Equipo
            </Badge>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 font-heading">Conocé a tus guías</h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-500 font-sans">
              Apasionados profesionales locales listos para mostrarte la historia, tradiciones y naturaleza silvestre de Centroamérica.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                className="flex"
              >
                <Card className="overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col w-full bg-white group">
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge variant="accent" className="font-semibold text-xs py-1 shadow-lg">
                        {member.role}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 font-heading group-hover:text-tropical-green-600 transition-colors">
                      {member.name}
                    </h3>
                    <div className="mt-3 flex-1">
                      <p className="text-sm text-gray-500 leading-relaxed font-sans italic line-clamp-4">
                        &ldquo;{member.bio}&rdquo;
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ===== CTA ===== */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 sm:mt-28"
        >
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[2.5rem] bg-gradient-to-br from-tropical-green-900 via-tropical-green-800 to-emerald-900 px-6 sm:px-12 py-14 sm:py-20 text-center shadow-2xl border border-white/10">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-tropical-yellow-400/10 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <Quote className="h-10 w-10 mx-auto text-tropical-yellow-400/60" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading drop-shadow-md">
                ¿Listo para tu próxima historia?
              </h2>
              <p className="text-green-100 font-sans text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
                Dejanos ser parte de tu viaje. Te prometemos que no será solo un destino — será una experiencia que recordarás siempre.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/contact" className="w-full sm:w-auto">
                  <Button variant="accent" size="lg" className="w-full sm:w-auto font-bold flex items-center justify-center gap-2">
                    <MessageCircle className="h-5 w-5" /> Contáctanos
                  </Button>
                </a>
                <a href="/tours" className="w-full sm:w-auto">
                  <Button variant="white" size="lg" className="w-full sm:w-auto font-bold flex items-center justify-center gap-2">
                    Ver Tours <ChevronRight className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
