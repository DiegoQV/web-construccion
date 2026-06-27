import type { Testimonial } from "@/types/testimonial";

export const testimonialsContent = {
  eyebrow: "Experiencias de obra",
  title: "Las obras terminan. La confianza permanece.",
} as const;

export const testimonials: Testimonial[] = [
  {
    id: "comunicacion-obra",
    quote:
      "Desde la primera reunión supimos qué se iba a construir, cuánto costaría cada etapa y cómo avanzaría la obra. El maestro explicó cada cambio antes de ejecutarlo y estuvo presente en las decisiones importantes. Esa forma ordenada de trabajar nos dio tranquilidad durante todo el proyecto.",
    clientName: "Familia R. (placeholder)",
    projectType: "Vivienda unifamiliar",
    location: "Chachapoyas · Amazonas · Perú",
    rating: 5,
    status: "placeholder",
  },
  {
    id: "presupuesto-claro",
    quote:
      "Valoramos la responsabilidad con los tiempos y el cuidado en los acabados. Cuando surgía una duda, recibíamos una respuesta directa y una solución concreta. La vivienda se entregó limpia, funcional y con cada detalle revisado junto a nosotros, tal como se había acordado.",
    clientName: "Familia M. (placeholder)",
    projectType: "Residencia familiar",
    location: "Chachapoyas · Amazonas · Perú",
    rating: 5,
    status: "placeholder",
  },
  {
    id: "calidad-acabados",
    quote:
      "Construir en un terreno con pendiente nos preocupaba por el costo y la seguridad. El maestro explicó el proceso con paciencia, desde la estructura hasta las instalaciones, y siempre supimos cuál era el siguiente paso. El resultado confirmó que elegimos a un equipo serio y comprometido.",
    clientName: "Cliente residencial (placeholder)",
    projectType: "Vivienda en ladera",
    location: "Chachapoyas · Amazonas · Perú",
    rating: 5,
    status: "placeholder",
  },
];

// TODO(content): Replace placeholder quotes and client identities only after
// receiving explicit approval from the corresponding clients.
