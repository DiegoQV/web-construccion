import type { Testimonial } from "@/types/testimonial";

export const testimonialsContent = {
  eyebrow: "Experiencias de obra",
  title: "La confianza también se construye.",
  introduction:
    "Experiencias de familias que valoraron una obra ordenada, comunicación directa y resultados bien ejecutados.",
} as const;

export const testimonials: Testimonial[] = [
  {
    id: "comunicacion-obra",
    quote:
      "Desde la primera reunión tuvimos claro qué se iba a construir, cuánto costaría cada etapa y cómo avanzaría la obra. El maestro estuvo pendiente de las decisiones importantes y nos explicó cada cambio antes de ejecutarlo. Esa forma ordenada de trabajar nos dio tranquilidad durante todo el proyecto.",
    clientName: "Cliente por confirmar",
    projectType: "Vivienda unifamiliar",
    location: "Chachapoyas, Amazonas, Perú",
    rating: 5,
    status: "placeholder",
  },
  {
    id: "presupuesto-claro",
    quote:
      "Lo que más valoramos fue la responsabilidad con los tiempos y el cuidado en los acabados. Cuando aparecía una duda, recibíamos una respuesta directa y una solución concreta. La vivienda se entregó limpia, funcional y con los detalles revisados junto a nosotros, tal como se había acordado.",
    clientName: "Cliente por confirmar",
    projectType: "Residencia familiar",
    location: "Chachapoyas, Amazonas, Perú",
    rating: 5,
    status: "placeholder",
  },
  {
    id: "calidad-acabados",
    quote:
      "Construir en un terreno con pendiente nos preocupaba por el costo y la seguridad. El proceso fue explicado con paciencia, desde la estructura hasta las instalaciones, y siempre supimos cuál era el siguiente paso. Ver el resultado terminado confirmó que habíamos elegido a un equipo serio y comprometido.",
    clientName: "Cliente por confirmar",
    projectType: "Vivienda en ladera",
    location: "Chachapoyas, Amazonas, Perú",
    rating: 5,
    status: "placeholder",
  },
];

// TODO(content): Replace placeholder quotes and client identities only after
// receiving explicit approval from the corresponding clients.
