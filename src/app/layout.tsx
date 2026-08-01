import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { CursorFollower } from "@/components/ui/cursor-follower";
import { BackToTop } from "@/components/ui/back-to-top";
import { LanguageProvider } from "@/lib/i18n";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const poppins = Poppins({ subsets: ["latin"], weight: ["300","400","500","600","700"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "Tropical Trips & Travel | Tours por Centroamérica",
  description: "Descubre Nicaragua y Costa Rica con Tropical Trips. Tours personalizados, paquetes todo incluido y experiencias auténticas.",
  keywords: ["tours nicaragua", "tours costa rica", "centroamérica", "viajes", "tropical trips"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} ${poppins.variable} font-sans antialiased`}>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
          <BackToTop />
          <CursorFollower />
        </LanguageProvider>
      </body>
    </html>
  );
}
