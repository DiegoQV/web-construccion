// =============================================================================
// HOME PAGE
// Composes all sections in the order defined by the UX Architecture.
// Composes the complete production sections.
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
import { faqItems } from "@/data/faq";
import { siteConfig } from "@/data/site-config";

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": `${siteConfig.siteUrl}/#business`,
  name: `${siteConfig.ownerName} · ${siteConfig.businessName}`,
  url: siteConfig.siteUrl,
  image: new URL(siteConfig.ogImage, siteConfig.siteUrl).toString(),
  description: siteConfig.metaDescription,
  foundingDate: String(siteConfig.foundingYear),
  telephone: siteConfig.phoneHref.replace("tel:", ""),
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.region,
    addressCountry: "PE",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: `${siteConfig.city}, ${siteConfig.region}, ${siteConfig.country}`,
  },
  founder: {
    "@type": "Person",
    name: siteConfig.ownerName,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de construcción residencial",
    itemListElement: [
      "Construcción de viviendas",
      "Acabados residenciales",
      "Supervisión de obra",
      "Remodelación de viviendas",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([businessJsonLd, faqJsonLd]).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

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
