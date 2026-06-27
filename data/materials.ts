export type MaterialIcon =
  | "materials"
  | "structure"
  | "finishes"
  | "supervision"
  | "detail"
  | "verification";

export interface QualityPrinciple {
  id: string;
  title: string;
  description: string;
  icon: MaterialIcon;
}

export const materialsContent = {
  eyebrow: "Calidad desde la base",
  title: "Construir bien significa cuidar lo que se ve y lo que no se ve.",
  introduction:
    "Una vivienda durable nace de decisiones correctas en estructura, materiales y ejecución. Por eso cada etapa se revisa antes de avanzar a la siguiente.",
  commitment:
    "La calidad no se inspecciona solamente al final: se controla todos los días en obra.",
  principles: [
    {
      id: "selected-materials",
      title: "Materiales seleccionados",
      description:
        "Elegimos cada material según su función, procedencia y comportamiento en el clima de Amazonas, no solo por su apariencia.",
      icon: "materials",
    },
    {
      id: "safe-structure",
      title: "Estructura segura",
      description:
        "Verificamos niveles, alineamientos, refuerzos y encuentros para que la vivienda tenga una base estable y confiable.",
      icon: "structure",
    },
    {
      id: "durable-finishes",
      title: "Acabados duraderos",
      description:
        "Preparamos correctamente cada superficie y respetamos los tiempos de aplicación para lograr terminaciones uniformes y resistentes.",
      icon: "finishes",
    },
    {
      id: "direct-supervision",
      title: "Supervisión directa",
      description:
        "El maestro revisa personalmente los trabajos críticos, coordina al equipo y corrige cualquier desviación a tiempo.",
      icon: "supervision",
    },
    {
      id: "attention-detail",
      title: "Atención al detalle",
      description:
        "Cuidamos juntas, remates, pendientes y encuentros porque son los detalles que determinan cómo envejece una obra.",
      icon: "detail",
    },
    {
      id: "quality-verification",
      title: "Verificación antes de entregar",
      description:
        "Comprobamos instalaciones, funcionamiento, terminaciones y limpieza con una revisión completa junto al cliente.",
      icon: "verification",
    },
  ] satisfies QualityPrinciple[],
} as const;
