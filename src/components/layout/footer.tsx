"use client";

import Link from "next/link";
import { Instagram, Facebook, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-black to-tropical-green-950 text-white border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:gap-12 sm:grid-cols-2 lg:grid-cols-12">
          
          {/* Brand Info */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-4 sm:space-y-5">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight font-heading">
              Tropical Trips & Travel
            </h3>
            <p className="max-w-sm text-sm text-gray-300 leading-relaxed font-sans">
              {siteConfig.tagline} Descubre los mejores destinos de ecoturismo, lagos, volcanes y cultura en Nicaragua y Costa Rica guiado por expertos locales.
            </p>
            <div className="flex gap-3 sm:gap-4 pt-2">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl sm:rounded-2xl bg-white/5 p-3.5 sm:p-3.5 transition-all duration-300 hover:bg-tropical-yellow-400 hover:text-tropical-green-950 hover:-translate-y-1 shadow-md border border-white/10"
                aria-label="Instagram"
              >
                <Instagram className="h-5 sm:h-5 w-5 sm:w-5" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl sm:rounded-2xl bg-white/5 p-3.5 sm:p-3.5 transition-all duration-300 hover:bg-tropical-yellow-400 hover:text-tropical-green-950 hover:-translate-y-1 shadow-md border border-white/10"
                aria-label="Facebook"
              >
                <Facebook className="h-4 sm:h-5 w-4 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="sm:col-span-1 lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-tropical-yellow-400 font-heading">
              {t("ft.links")}
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 font-sans">
              {[
                ["nav.home", "/"],
                ["nav.tours", "/tours"],
                ["nav.packages", "/packages"],
                ["nav.about", "/about"],
                ["nav.contact", "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-gray-300 transition-colors hover:text-tropical-yellow-300 flex items-center gap-1 group w-fit"
                  >
                    <span>{t(label)}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-3 sm:space-y-4">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-tropical-yellow-400 font-heading">
              {t("ft.contact")}
            </h4>
            <ul className="space-y-3 sm:space-y-3.5 font-sans text-sm text-gray-300">
              <li className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/5 text-tropical-green-400">
                  <Phone className="h-4 w-4" />
                </div>
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/5 text-tropical-green-400">
                  <Mail className="h-4 w-4" />
                </div>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors break-all">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/5 text-tropical-yellow-400">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-10 sm:mt-12 border-t border-white/5 pt-6 sm:pt-8 text-center text-xs text-gray-500 font-sans">
          <p>© {new Date().getFullYear()} {siteConfig.name}. {t("ft.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
