// =============================================================================
// HOME PAGE
// Composes all sections in the order defined by the UX Architecture.
// Each section is a placeholder until its Sprint is implemented.
// =============================================================================

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Credentials } from "@/components/sections/Credentials";
import { Gallery } from "@/components/sections/Gallery";
import { VideoShowcaseSection } from "@/components/sections/VideoShowcaseSection";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { Materials } from "@/components/sections/Materials";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTAFinal } from "@/components/sections/CTAFinal";

export default function HomePage() {
  return (
    <>
      {/* 00 — Navigation */}
      <Navbar />

      {/* Main content — landmark for skip link */}
      <main id="main-content">
        {/* 01 — Hero: Fotografía 1 (casa nocturna) */}
        <Hero />

        {/* 02 — Credenciales: estadísticas animadas */}
        <Credentials />

        {/* 03 — Galería: Fotografías 2, 3 y 4 */}
        <Gallery />

        {/* 04 — Recorrido audiovisual de una vivienda */}
        <VideoShowcaseSection />

        {/* 05 — El Maestro: presentación personal */}
        <About />

        {/* 06 — Proceso constructivo: 5 pasos */}
        <Process />

        {/* 07 — Materiales y calidad */}
        <Materials />

        {/* 08 — Testimonios */}
        <Testimonials />

        {/* 09 — Preguntas frecuentes */}
        <FAQ />

        {/* 10 — CTA Final */}
        <CTAFinal />
      </main>

      {/* 11 — Footer */}
      <Footer />
    </>
  );
}
