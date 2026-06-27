// =============================================================================
// FAQ DATA
// Each question addresses a real client objection.
// Answers must be direct, in first person, specific — never evasive.
// =============================================================================

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "presupuesto",
    question: "¿Qué pasa si el costo sube durante la obra?",
    answer:
      "Trabajo con presupuesto cerrado y por escrito. Si surge algo imprevisto que modifica el costo — como un cambio de diseño solicitado por el cliente o una condición del terreno no detectada — te informo antes de continuar. Nunca ejecuto un trabajo adicional sin tu autorización previa.",
  },
  {
    id: "tiempo",
    question: "¿Cuánto tiempo toma construir una casa?",
    answer:
      "Depende del tamaño y la complejidad, pero para una vivienda de entre 100 y 250 m² el plazo habitual es de 6 a 10 meses. En la primera reunión defino el cronograma completo por etapas, con fechas específicas para cada hito.",
  },
  {
    id: "visita",
    question: "¿Puedo visitar la obra mientras se construye?",
    answer:
      "Sí, y te lo recomiendo. Puedes visitar cuando quieras, previo aviso. Además, envío reportes fotográficos de avance regularmente para que estés informado aunque no puedas asistir en persona.",
  },
  {
    id: "garantia",
    question: "¿Qué garantía tienes sobre tu trabajo?",
    answer:
      "Garantizo la estructura por 10 años y los acabados por 1 año. Si hay algún problema producto de la construcción en ese período, lo resuelvo sin costo adicional. Antes de entregar la obra, hacemos una inspección conjunta para asegurarnos de que todo esté en orden.",
  },
  {
    id: "equipo",
    question: "¿Trabajas con subcontratistas o tienes tu propio equipo?",
    answer:
      "Cuento con mi propio equipo de albañilería y trabajo con especialistas de confianza para instalaciones eléctricas, hidrosanitarias y acabados. Yo superviso personalmente todas las etapas. No subcontrato la obra en su totalidad a terceros.",
  },
  {
    id: "inicio",
    question: "¿Cómo se inicia el proceso?",
    answer:
      "Con una reunión gratuita donde revisamos el terreno, tus necesidades y el presupuesto disponible. A partir de ahí preparo una cotización detallada por escrito. Si estás de acuerdo, firmamos un contrato y establecemos el cronograma de inicio.",
  },
];
