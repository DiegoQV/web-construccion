import type { Testimonial } from "@/types/testimonial";

export const testimonialsContent = {
  eyebrow: "Experiencias de obra",
  title: "Las obras terminan. La confianza permanece.",
} as const;

export const testimonials: Testimonial[] = [
  {
    id: "vivienda-moderna-greysi-mirton",
    quote:
      "En nombre de Mirton y en el mío, queremos expresarle nuestro más profundo agradecimiento por el increíble trabajo en la construcción y acabados de nuestra casa moderna. El resultado ha quedado verdaderamente espectacular, tal como lo soñamos. Somos conscientes de que usted no solo levantó estructuras, paredes y colocó porcelanatos, sino que imprimió su paciencia, esmero y una absoluta dedicación en cada pequeño detalle. Gracias por hacer suyo este proyecto, por transmitirnos esa tranquilidad que tanto necesitábamos durante el proceso y por materializar nuestro hogar con tanta excelencia. Estaremos por siempre agradecidos con usted y con todo su gran equipo de trabajo.",
    clientName: "Greysi y Mirton",
    projectType: "Construcción y acabados de vivienda moderna",
    rating: 5,
    status: "verified",
  },
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
    status: "verified",
  },
];
