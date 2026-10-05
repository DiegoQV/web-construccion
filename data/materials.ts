export interface MaterialFeature {
  id: string;
  image: string;
  alt: string;
  label: string;
  caption: string;
}

export const materialsContent = {
  eyebrow: "Calidad desde la base",
  title: "La calidad se construye. Y se ve en los detalles.",
  introduction:
    "Del primer muro al último acabado, el cuidado está en cómo se ejecuta cada parte de tu vivienda.",
  features: [
    {
      id: "acabados",
      image: "/images/materials/acabados-interiores.png",
      alt: "Escalera revestida y piso interior durante la colocación de acabados",
      label: "Precisión en los acabados",
      caption: "El cuidado se aprecia en las juntas, los encuentros y la continuidad de cada superficie.",
    },
    {
      id: "estructura",
      image: "/images/gallery/casa-estructura.png",
      alt: "Vivienda residencial con estructura y cerramientos en proceso de construcción",
      label: "Estructura",
      caption: "Revisamos la ejecución de cada etapa antes de avanzar hacia los siguientes trabajos.",
    },
    {
      id: "supervision-directa",
      image: "/images/materials/supervision-fachada.png",
      alt: "Maestro trabajando sobre andamios durante la ejecución de una fachada residencial",
      label: "Supervisión directa",
      caption: "Dilber acompaña la ejecución, revisa el avance y conversa contigo sobre las decisiones de la obra.",
    },
  ] satisfies MaterialFeature[],
} as const;
