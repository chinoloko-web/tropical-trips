"use client";

import { useEffect, useRef } from "react";
import { useI18n } from "@/lib/i18n";

interface NivewayButtonProps {
  embedSrc?: string;
  background?: string;
  hoverBackground?: string;
  shadow?: string;
  radius?: number;
  padding?: string;
  fontSize?: number;
  fontWeight?: number;
}

export function NivewayButton({
  embedSrc = "https://app.niveway.com/api/public/embed/0df1a2e4-732d-46a3-bdd2-34762b41b624",
  background = "#059669",
  hover = "#047857",
  shadow = "0 10px 15px -3px rgba(5,150,105,0.2)",
  radius = 9999,
  padding = "0 32px",
  fontSize = 16,
  fontWeight = 700,
}: NivewayButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useI18n();

  useEffect(() => {
    if (!containerRef.current) return;
    const div = containerRef.current;

    const button = document.createElement("button");
    button.type = "button";
    button.style.cssText = `display:inline-flex;align-items:center;justify-content:center;gap:8px;white-space:nowrap;border-radius:${radius}px;font-size:${fontSize}px;font-weight:${fontWeight};height:auto;padding:${padding};transition:all 0.3s;background:${background};color:#FFFFFF;border:0;cursor:pointer;width:100%;box-shadow:${shadow};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif`;
    button.textContent = t("book");

    button.onmouseenter = () => {
      button.style.background = hover;
      button.style.transform = "translateY(-1px)";
    };
    button.onmouseleave = () => {
      button.style.background = background;
      button.style.transform = "translateY(0)";
    };

    const script = document.createElement("script");
    script.src = embedSrc;

    div.appendChild(button);
    div.appendChild(script);

    return () => {
      div.innerHTML = "";
    };
  }, [t, embedSrc, background, hover, shadow, radius, padding, fontSize, fontWeight]);

  return <div ref={containerRef} />;
}