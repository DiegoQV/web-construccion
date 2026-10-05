export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  outcome: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: "consulta",
    number: "01",
    title: "Primera consulta",
    description:
      "Conversamos sobre lo que necesitas y revisamos el terreno para definir el alcance del proyecto.",
    outcome: "Alcance definido",
  },
  {
    id: "presupuesto",
    number: "02",
    title: "Presupuesto detallado",
    description:
      "Detallamos materiales, mano de obra y partidas para que sepas cómo se distribuye la inversión.",
    outcome: "Presupuesto desglosado",
  },
  {
    id: "planificacion",
    number: "03",
    title: "Planificación de obra",
    description:
      "Organizamos el cronograma, las compras y el equipo antes de comenzar los trabajos.",
    outcome: "Plan de trabajo organizado",
  },
  {
    id: "construccion",
    number: "04",
    title: "Construcción supervisada",
    description:
      "Revisamos la ejecución y los materiales, y te mantenemos informado sobre el avance de la obra.",
    outcome: "Avance supervisado",
  },
  {
    id: "entrega",
    number: "05",
    title: "Entrega final",
    description:
      "Inspeccionamos la obra contigo y verificamos los acabados antes de la entrega.",
    outcome: "Entrega revisada en conjunto",
  },
];
