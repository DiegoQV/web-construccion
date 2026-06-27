export interface MaterialFeature {
  id: string;
  image: string;
  alt: string;
  label: string;
  caption: string;
}

export const materialsContent = {
  eyebrow: "Calidad desde la base",
  title: "Construimos con procesos, no con improvisación.",
  introduction:
    "Materiales adecuados, revisión directa y precisión en cada etapa de obra.",
  features: [
    {
      id: "supervision-directa",
      image: "/images/materials/supervision-fachada.png",
      alt: "Maestro trabajando sobre andamios durante la ejecución de una fachada residencial",
      label: "Supervisión directa",
      caption: "La obra se acompaña de principio a fin.",
    },
    {
      id: "acabados",
      image: "/images/materials/acabados-interiores.png",
      alt: "Escalera revestida y piso interior durante la colocación de acabados",
      label: "Acabados",
      caption: "La precisión se reconoce en cada encuentro.",
    },
    {
      id: "estructura",
      image: "/images/materials/estructura-residencial.png",
      alt: "Vivienda residencial con estructura y cerramientos en proceso de construcción",
      label: "Estructura",
      caption: "Cada etapa se revisa antes de avanzar.",
    },
  ] satisfies MaterialFeature[],
} as const;
