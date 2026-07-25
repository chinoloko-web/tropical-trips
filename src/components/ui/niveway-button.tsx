"use client";

import { useEffect, useRef } from "react";

export function NivewayButton() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const div = containerRef.current;

    const button = document.createElement("button");
    button.type = "button";
    button.style.cssText =
      "display:inline-flex;align-items:center;justify-content:center;gap:8px;white-space:nowrap;border-radius:9999px;font-size:16px;font-weight:700;height:56px;padding:0 32px;transition:all 0.3s;background:#059669;color:#FFFFFF;border:0;cursor:pointer;width:100%;box-shadow:0 10px 15px -3px rgba(5,150,105,0.2);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif";
    button.textContent = "Reservar ahora";

    button.onmouseenter = () => {
      button.style.background = "#047857";
      button.style.transform = "translateY(-1px)";
      button.style.boxShadow = "0 20px 25px -5px rgba(5,150,105,0.3)";
    };
    button.onmouseleave = () => {
      button.style.background = "#059669";
      button.style.transform = "translateY(0)";
      button.style.boxShadow = "0 10px 15px -3px rgba(5,150,105,0.2)";
    };

    const script = document.createElement("script");
    script.src =
      "https://app.niveway.com/api/public/embed/0df1a2e4-732d-46a3-bdd2-34762b41b624";

    div.appendChild(button);
    div.appendChild(script);

    return () => {
      div.innerHTML = "";
    };
  }, []);

  return <div ref={containerRef} />;
}
