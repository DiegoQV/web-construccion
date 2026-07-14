import type { Testimonial } from "@/types/testimonial";

export const testimonialsContent = {
  eyebrow: "Experiencias de obra",
  title: "Las obras terminan. La confianza permanece.",
} as const;

export const testimonials: Testimonial[] = [
  {
    id: "construccion-acabados-vivienda",
    quote:
      "Quiero agradecerle por todo el trabajo de construcción y acabados de nuestra casa. Quedó muy hermosa, como la imaginamos. No solo construyó paredes, techo y porcelanatos; también puso paciencia, esmero y dedicación en cada detalle. Gracias por hacer realidad este proyecto como si fuera suyo y por darnos la tranquilidad que necesitábamos. Quedamos siempre agradecidos con su persona y su trabajo.",
    clientName: "Rony Alexis Canturencio Avalos y Natalie Zumaeta Montoya",
    projectType: "Construcción y acabados de vivienda",
    location: "Chachapoyas · Amazonas · Perú",
    rating: 5,
    status: "verified",
  },
  {
    id: "responsabilidad-y-acabados",
    quote:
      "Durante la construcción de nuestra vivienda, Dilbert trabajó con responsabilidad y mucho cuidado en los acabados. Siempre estuvo dispuesto a explicar cada avance y resolver nuestras dudas con paciencia. Valoramos especialmente su dedicación, el orden con que llevó el trabajo y la tranquilidad de saber que cada detalle estaba siendo atendido.",
    clientName: "Consuelo Ruiz Chavez",
    projectType: "Construcción de vivienda",
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
