export interface FaqItem { id: string; question: string; answer: string; }

export const faqItems: FaqItem[] = [
  { id: "servicios", question: "¿Qué trabajos puedo consultar?", answer: "Construcción de viviendas, remodelación, acabados y supervisión de obra en Chachapoyas. Describe qué necesitas para revisar el alcance de tu proyecto con Dilber." },
  { id: "inicio", question: "¿Qué información necesito para pedir una cotización?", answer: "Comparte la ubicación del terreno o vivienda, el tipo de trabajo y el área aproximada. Si tienes planos o fotografías, también pueden ayudar. Si todavía no cuentas con todos esos datos, puedes iniciar la conversación con lo que tengas." },
  { id: "presupuesto", question: "¿Cómo se define el presupuesto?", answer: "El presupuesto depende del alcance, los materiales, las condiciones del terreno y los acabados. La propuesta se revisa por partidas para aclarar qué trabajos incluye y qué decisiones quedan pendientes antes de iniciar." },
  { id: "tiempo", question: "¿Cuánto tiempo toma una obra?", answer: "El plazo se define según el tamaño, la complejidad y las condiciones del proyecto. Durante la planificación se revisan las etapas y el cronograma; una duración concreta requiere conocer primero el trabajo que necesitas." },
  { id: "cambios", question: "¿Qué conviene acordar antes de empezar?", answer: "El alcance de los trabajos, los materiales, el presupuesto, las etapas de pago, el cronograma y cómo se gestionarán los cambios. Las condiciones de entrega y las garantías deben quedar claras en la propuesta y el acuerdo de cada proyecto." },
];
