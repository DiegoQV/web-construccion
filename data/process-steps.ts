export type ProcessIcon =
  | "consultation"
  | "budget"
  | "planning"
  | "construction"
  | "delivery";

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: ProcessIcon;
}

export const processSteps: ProcessStep[] = [
  {
    id: "consulta",
    number: "01",
    title: "Primera consulta",
    description:
      "Revisamos tus necesidades, las condiciones del terreno y el alcance real del proyecto antes de tomar decisiones.",
    icon: "consultation",
  },
  {
    id: "presupuesto",
    number: "02",
    title: "Presupuesto detallado",
    description:
      "Desglosamos materiales, mano de obra, partidas y plazos para que conozcas con claridad dónde se invierte cada recurso.",
    icon: "budget",
  },
  {
    id: "planificacion",
    number: "03",
    title: "Planificación de obra",
    description:
      "Definimos el cronograma, la secuencia de trabajos, las compras y la coordinación del equipo antes de iniciar.",
    icon: "planning",
  },
  {
    id: "construccion",
    number: "04",
    title: "Construcción supervisada",
    description:
      "Controlamos diariamente la ejecución, la calidad de los materiales y el avance acordado, manteniéndote informado.",
    icon: "construction",
  },
  {
    id: "entrega",
    number: "05",
    title: "Entrega final",
    description:
      "Realizamos una inspección conjunta, verificamos cada acabado y entregamos la obra lista para ser habitada.",
    icon: "delivery",
  },
];
