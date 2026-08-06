"use client";

import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Clock, MapPin, Route, Sparkles } from "lucide-react";
import { NivewayButton } from "@/components/ui/niveway-button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";

export default function PackageDetailPage() {
  const { t, packages } = useI18n();
  const params = useParams();
  const pkg = packages.find((p) => p.id === params.id);

  if (!pkg) notFound();

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-hidden py-24 sm:py-0 sm:h-[50vh] sm:min-h-[400px]">
        <div className="absolute inset-0">
          <img src={pkg.image} alt={pkg.name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/60 to-black/75" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 w-full sm:pt-28">
          <Link
            href="/packages"
            className="inline-flex items-center gap-1.5 text-sm text-green-200 hover:text-white transition-colors mb-6 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {t("pd.back")}
          </Link>
          <div className="max-w-3xl">
            {pkg.popular && (
              <Badge variant="default" className="mb-4 bg-tropical-green-600 text-white font-bold gap-1">
                <Sparkles className="h-3.5 w-3.5 fill-white" /> {t("pd.recommended")}
              </Badge>
            )}
            <h1 className="text-3xl sm:text-5xl font-bold font-heading text-white drop-shadow-lg leading-tight">
              {pkg.name}
            </h1>
            <p className="mt-4 max-w-xl text-base text-green-100/90 font-sans leading-relaxed">
              {pkg.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm border border-white/10">
                <Clock className="h-4 w-4" /> {pkg.duration}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-tropical-green-600/30 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm border border-tropical-green-400/30">
                ${pkg.price} USD / pers
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-[30px] sm:mt-[30px] relative z-20">
        <div className="grid gap-12 lg:grid-cols-3">

          {/* Main */}
          <div className="lg:col-span-2 space-y-8">
            {/* Includes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden border border-gray-100 shadow-xl bg-white">
                <CardContent className="p-8">
                  <h2 className="text-lg font-bold text-gray-900 font-heading mb-6 flex items-center gap-2">
                    <Check className="h-5 w-5 text-tropical-green-600" />
                    {t("pd.includes")}
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {pkg.features.map((f) => (
                      <div key={f} className="flex items-start gap-3 text-sm text-gray-600">
                        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-tropical-green-50">
                          <Check className="h-3.5 w-3.5 text-tropical-green-600" />
                        </div>
                        {f}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* {t("pd.itinerary")} */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="overflow-hidden border border-gray-100 shadow-xl bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-tropical-green-50">
                      <Route className="h-5 w-5 text-tropical-green-600" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-900 font-heading">{t("pd.itinerary")}</h2>
                      <p className="text-xs text-gray-500">{t("pd.itinerarySub")}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute left-[19px] top-0 h-full w-0.5 bg-gradient-to-b from-tropical-green-400 to-tropical-green-200 rounded-full" />
                    <ul className="space-y-0">
                      {pkg.itinerary.map((step, i) => (
                        <li key={step.day} className="relative pb-8 pl-14 last:pb-0">
                          <div className="absolute left-2.5 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-tropical-green-500 bg-white text-xs font-bold text-tropical-green-600 shadow-sm">
                            {i + 1}
                          </div>
                          <div className="rounded-xl bg-gray-50 p-4 transition-all duration-300 hover:bg-tropical-green-50">
                            <span className="inline-block rounded-md bg-tropical-green-50 px-2.5 py-1 text-[11px] font-bold text-tropical-green-700 uppercase tracking-wider">
                              {step.day}
                            </span>
                            <p className="mt-2 text-sm text-gray-700 font-medium">{step.activity}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-gray-100 bg-white shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-tropical-green-600 to-tropical-green-700 px-6 py-4">
                <p className="text-xs font-medium text-green-100 uppercase tracking-wider">{t("pd.price")}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">${pkg.price}</span>
                  <span className="text-sm text-green-200/80">USD</span>
                </div>
              </div>
              <div className="p-6 space-y-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{t("pd.duration")}</span>
                  <span className="font-medium text-gray-800">{pkg.duration}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{t("pd.taxes")}</span>
                  <span className="font-medium text-green-600">{t("pd.included")}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{t("pd.cancel")}</span>
                  <span className="font-medium text-green-600">{t("pd.free")}</span>
                </div>
                <div className="border-t border-gray-100 pt-5">
                  <NivewayButton />
                  <p className="mt-3 text-center text-xs text-gray-400">{t("pd.hurry")}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-xl">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">{t("pd.info")}</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <Clock className="h-4 w-4 text-tropical-green-600" />
                  {pkg.duration}
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 text-tropical-green-600" />
                  {t("pd.region")}
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <Check className="h-4 w-4 text-tropical-green-600" />
                  {t("pd.allIncluded")}
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
