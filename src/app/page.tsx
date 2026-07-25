import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { ToursPreview } from "@/components/sections/tours-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ToursPreview />
      <Testimonials />
      <CTA />
    </>
  );
}
