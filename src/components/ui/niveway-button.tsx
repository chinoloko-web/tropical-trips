"use client";

import { useEffect, useRef } from "react";
import { useI18n } from "@/lib/i18n";

export function NivewayButton({
  embedSrc = "https://app.niveway.com/api/public/embed/bfc576cd-9eb3-4c1e-91ce-248caaa7cdda",
}: {
  embedSrc?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useI18n();

  useEffect(() => {
    if (!containerRef.current) return;
    const div = containerRef.current;

    const button = document.createElement("button");
    button.type = "button";
    button.style.cssText =
      "display:inline-flex;align-items:center;justify-content:center;gap:8px;white-space:nowrap;border-radius:9999px;font-size:16px;font-weight:700;height:56px;padding:0 32px;transition:background 150ms ease, color 150ms ease;background:#059669;color:#FFFFFF;border:0;cursor:pointer;width:100%;box-shadow:0 10px 15px -3px rgba(5,150,105,0.2);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif";
    button.textContent = t("book");

    const applyGreen = () => {
      button.style.background = "#059669";
      button.style.color = "#FFFFFF";
    };
    const mouseenter = () => {
      button.style.background = "#047857";
      button.style.color = "#FFFFFF";
    };
    const mouseleave = applyGreen;

    button.onmouseenter = mouseenter;
    button.onmouseleave = mouseleave;

    const script = document.createElement("script");
    script.src = embedSrc;
    // El script de Niveway tiene su propio color de hover (teal) y lo pisa al
    // volver. Lo registramos de nuevo tras cargar para que el verde gane.
    script.addEventListener("load", () => {
      button.removeEventListener("mouseenter", mouseenter);
      button.removeEventListener("mouseleave", mouseleave);
      button.addEventListener("mouseenter", mouseenter);
      button.addEventListener("mouseleave", mouseleave);
    });

    div.appendChild(button);
    div.appendChild(script);

    return () => {
      div.innerHTML = "";
    };
  }, [t, embedSrc]);

  return <div ref={containerRef} />;
}