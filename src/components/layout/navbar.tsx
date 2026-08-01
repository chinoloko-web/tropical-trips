"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Languages } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";

const navLinks = [
  { href: "/", label: "nav.inicio" },
  { href: "/tours", label: "nav.tours" },
  { href: "/packages", label: "nav.paquetes" },
  { href: "/about", label: "nav.nosotros" },
  { href: "/contact", label: "nav.contacto" },
];

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      if (currentY > lastScrollY.current && currentY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onLightboxChange = (e: Event) => {
      setLightboxOpen((e as CustomEvent).detail === "open");
    };
    window.addEventListener("lightbox:change", onLightboxChange as EventListener);
    return () => window.removeEventListener("lightbox:change", onLightboxChange as EventListener);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        (lightboxOpen || hidden) && "-translate-y-full",
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <img
            src="/logo.png"
            alt="Tropical Trips & Travel"
            className="h-10 sm:h-12 w-auto transition-all duration-300"
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-semibold transition-all duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-tropical-green-500 after:transition-all after:duration-300 hover:after:w-full",
                scrolled
                  ? "text-gray-700 hover:text-tropical-green-600"
                  : "text-white/90 hover:text-white drop-shadow-sm"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setLang(lang === "es" ? "en" : "es")}
          className={cn(
            "hidden lg:flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-bold border transition-colors",
            scrolled
              ? "text-gray-700 hover:bg-gray-100 border-gray-200"
              : "text-white hover:bg-white/10 border-white/20"
          )}
          aria-label="Cambiar idioma / Switch language"
        >
          <Languages className="h-4 w-4" />
          {lang === "es" ? "EN" : "ES"}
        </button>

        <button
          className={cn(
            "p-2.5 rounded-xl transition-colors lg:hidden border",
            scrolled
              ? "text-gray-900 hover:bg-gray-100 border-gray-200"
              : "text-white hover:bg-white/10 border-white/20"
          )}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? t("nav.closeMenu") : t("nav.openMenu")}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div
          ref={menuRef}
          className="absolute top-full left-0 right-0 border-t border-gray-100 bg-white px-4 py-6 lg:hidden shadow-2xl flex flex-col gap-1"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-xl px-4 py-3 text-base font-bold text-gray-800 hover:bg-tropical-green-50 hover:text-tropical-green-700 transition-all"
              onClick={() => setMobileOpen(false)}
            >
              {t(link.label)}
            </Link>
          ))}
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-3 text-base font-bold text-gray-800 hover:bg-tropical-green-50 transition-all"
          >
            <Languages className="h-4 w-4" />
            {lang === "es" ? "English" : "Español"}
          </button>
        </div>
      )}
    </header>
  );
}
