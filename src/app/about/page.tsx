"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Globe, Shield, Star, Users, MapPin, Quote, Target, Eye, Award, ChevronRight, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { stats, siteConfig } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

const values = [
  { icon: Heart, color: "from-pink-500 to-rose-500" },
  { icon: Globe, color: "from-tropical-green-500 to-emerald-500" },
  { icon: Shield, color: "from-blue-500 to-indigo-500" },
  { icon: Star, color: "from-yellow-400 to-amber-500" },
];

const highlights = [
  { icon: MapPin },
  { icon: Award },
  { icon: Users },
  { icon: Heart },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutPage() {
  const { t, teamMembers } = useI18n();
  return (
    <div className="pb-24">
      {/* ===== HERO ===== */}
      <section className="relative flex items-center justify-center overflow-hidden py-24 sm:py-0 sm:h-[50vh]">
        <div className="absolute inset-0">
          <img
            src="/images/general/IMG_20250418_151723.webp"
            alt={t("ab.badge")}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/60 to-black/75" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:pt-28 text-center text-white">
          <Badge variant="accent" className="mb-4">{t("ab.badge")}</Badge>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-heading drop-shadow-md">
            {t("ab.title")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-green-100 font-sans drop-shadow-sm">
            {t("ab.desc")}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ===== STATS ===== */}
        <div className="-mt-6 sm:-mt-16 relative z-20 grid grid-cols-2 gap-4 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-tropical-green-700 via-tropical-green-600 to-emerald-700 p-5 sm:p-8 text-white shadow-2xl sm:grid-cols-4 border border-white/10">
          {stats.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className="text-2xl sm:text-4xl font-extrabold font-heading drop-shadow-sm">{s.value}</p>
              <p className="mt-1 text-[10px] sm:text-sm text-green-100 font-medium">{t(`stats.${idx + 1}`)}</p>
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
              <Badge variant="secondary">{t("ab.storyBadge")}</Badge>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900 font-heading leading-tight">
                {t("ab.storyTitle1")}<br />{t("ab.storyTitle2")}
              </h2>
              <div className="mt-6 space-y-4 text-gray-600 font-sans leading-relaxed">
                <p>
                  {t("ab.para1")}
                </p>
                <p>
                  Desde las calles coloniales de Granada hasta las aguas turquesa del Río Celeste, pasando por volcanes activos, bosques nubosos y playas paradisíacas — cada ruta que diseñamos busca conectarte con la esencia de nuestra tierra.
                </p>
                <p>
                  {t("ab.para2")}
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3 max-h-[400px] sm:max-h-[500px]">
              <div className="rounded-2xl overflow-hidden shadow-lg row-span-2">
                <img
                  src="/images/rio-celeste/IMG_20250401_122522.webp"
                  alt="Naturaleza"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/amo-el-agua/parque-nacional-rincon-de-la-vieja-namubak5.webp"
                  alt="Cultura"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/rio-celeste/IMG_20250404_122120.webp"
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
                  <h3 className="text-2xl font-bold text-gray-900 font-heading">{t("ab.missionTitle")}</h3>
                  <p className="mt-4 text-gray-600 leading-relaxed font-sans">
                    {t("ab.missionText")}
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
                  <h3 className="text-2xl font-bold text-gray-900 font-heading">{t("ab.visionTitle")}</h3>
                  <p className="mt-4 text-gray-600 leading-relaxed font-sans">
                    {t("ab.visionText")}
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
            <Badge variant="secondary">{t("ab.whyBadge")}</Badge>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 font-heading">{t("ab.whyTitle")}</h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto font-sans">
              {t("ab.whyDesc")}
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, idx) => (
              <motion.div key={idx} variants={fadeUp}>
                <Card className="h-full border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white group">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-tropical-green-50 text-tropical-green-600 group-hover:bg-tropical-green-600 group-hover:text-white transition-all duration-300 shadow-md">
                      <h.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-bold text-gray-900 font-heading text-lg">{t(`ab.h${idx + 1}`)}</h3>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed font-sans">{t(`ab.h${idx + 1}d`)}</p>
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
            <Badge variant="secondary">{t("ab.valuesBadge")}</Badge>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 font-heading">{t("ab.valuesTitle")}</h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto font-sans">
              {t("ab.valuesDesc")}
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, idx) => (
              <motion.div key={idx} variants={fadeUp}>
                <Card className="text-center h-full border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white group overflow-hidden">
                  <div className={`h-2 w-full bg-gradient-to-r ${v.color}`} />
                  <CardContent className="p-8">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 text-tropical-green-600 group-hover:bg-tropical-green-600 group-hover:text-white transition-all duration-300 shadow-md">
                      <v.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-6 font-bold text-gray-900 text-lg font-heading">{t(`ab.v${idx + 1}`)}</h3>
                    <p className="mt-3 text-sm text-gray-500 leading-relaxed font-sans">{t(`ab.v${idx + 1}d`)}</p>
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
              <Users className="h-4 w-4" /> {t("ab.teamBadge")}
            </Badge>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 font-heading">{t("ab.teamTitle")}</h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-500 font-sans">
              {t("ab.teamDesc")}
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
                  <div className="relative aspect-square overflow-hidden bg-gray-100">
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
                {t("ab.ctaTitle")}
              </h2>
              <p className="text-green-100 font-sans text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
                {t("ab.ctaDesc")}
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/contact" className="w-full sm:w-auto">
                  <Button variant="accent" size="lg" className="w-full sm:w-auto font-bold flex items-center justify-center gap-2">
                    <MessageCircle className="h-5 w-5" /> {t("ab.ctaContact")}
                  </Button>
                </a>
                <Link href="/tours" className="w-full sm:w-auto">
                  <Button variant="white" size="lg" className="w-full sm:w-auto font-bold flex items-center justify-center gap-2">
                    {t("ab.ctaTours")} <ChevronRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
