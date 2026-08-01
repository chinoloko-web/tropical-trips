import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { ToursPreview } from "@/components/sections/tours-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { Gallery } from "@/components/sections/gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ToursPreview />
      <Gallery />
      <Testimonials />
      <CTA />
    </>
  );
}
