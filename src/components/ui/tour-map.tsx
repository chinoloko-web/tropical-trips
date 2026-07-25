"use client";

import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TourMapProps {
  lat: number;
  lng: number;
  location: string;
}

export function TourMap({ lat, lng, location }: TourMapProps) {
  const embedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.02},${lat - 0.02},${lng + 0.02},${lat + 0.02}&layer=mapnik&marker=${lat},${lng}`;
  const directionsUrl = `https://www.openstreetmap.org/directions?from=&to=${lat}%2C${lng}#map=14/${lat}/${lng}`;

  return (
    <div className="space-y-3">
      <div className="relative overflow-hidden rounded-2xl border border-gray-100 shadow-lg bg-gray-100">
        <iframe
          src={embedUrl}
          title={`Mapa - ${location}`}
          className="w-full h-[280px] sm:h-[320px]"
          loading="lazy"
          allowFullScreen
        />
      </div>
      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <Button
          variant="outline"
          size="sm"
          className="w-full font-medium flex items-center justify-center gap-2"
        >
          <MapPin className="h-4 w-4" />
          Ver en mapa grande &rarr;
        </Button>
      </a>
    </div>
  );
}
