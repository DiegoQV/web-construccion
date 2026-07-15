// =============================================================================
// PROJECTS DATA
// Gallery projects shown in the third home-page section.
// Image paths reference /public/images/gallery/
// =============================================================================

import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "casa-dos-pisos-dia",
    title: "Residencia Familiar Moderna",
    category: "Residencial",
    location: "Chachapoyas, Amazonas, Perú",
    year: 2023,
    description:
      "Dos niveles, amplios paños acristalados y carpintería de madera a medida para una vivienda luminosa y duradera.",
    highlight: "Carpintería a medida",
    featured: true,
    image: {
      src: "/images/gallery/casa-dos-pisos-dia.png",
      alt: "Vista exterior de residencia familiar moderna de dos niveles con ventanales amplios y carpintería de madera",
      width: 1920,
      height: 1080,
      focalPoint: "center 35%",
    },
  },
  {
    id: "residencia-urbana-tres-niveles",
    title: "Residencia Urbana de Tres Niveles",
    category: "Residencial",
    location: "Chachapoyas, Amazonas, Perú",
    year: 2024,
    description:
      "Tres niveles resueltos con precisión, amplios paños acristalados y luz natural en los ambientes principales.",
    highlight: "Fachada y luz natural",
    featured: false,
    image: {
      src: "/images/gallery/residencia-urbana-tres-niveles.png",
      alt: "Fachada blanca de residencia urbana de tres niveles con amplios ventanales de carpintería metálica",
      width: 1085,
      height: 1450,
      focalPoint: "center 45%",
    },
  },
  {
    id: "vivienda-unifamiliar-ladera",
    title: "Vivienda Unifamiliar en Ladera",
    category: "Residencial",
    location: "Chachapoyas, Amazonas, Perú",
    year: 2024,
    description:
      "Una vivienda luminosa que aprovecha la pendiente con accesos claros y una fachada resistente de mantenimiento sencillo.",
    highlight: "Adaptación al terreno",
    featured: false,
    image: {
      src: "/images/gallery/vivienda-unifamiliar-ladera.png",
      alt: "Vivienda unifamiliar blanca de dos niveles adaptada a un terreno en pendiente en Chachapoyas",
      width: 1448,
      height: 1086,
      focalPoint: "center 50%",
    },
  },
  {
    id: "interior-residencial-acabados",
    title: "Acondicionamiento Interior Residencial",
    category: "Interiores",
    location: "Chachapoyas, Amazonas, Perú",
    year: 2025,
    description:
      "Una intervención que mejora circulación, iluminación y continuidad mediante acabados limpios y funcionales.",
    highlight: "Distribución e iluminación",
    featured: false,
    image: {
      src: "/images/gallery/interior-residencial-acabados.jpg",
      alt: "Interior residencial renovado con circulación amplia, iluminación empotrada y acabados de piso continuo",
      width: 1198,
      height: 1600,
      focalPoint: "center 55%",
    },
  },
  {
    id: "fachada-residencial-tres-niveles",
    title: "Fachada Residencial de Tres Niveles",
    category: "Residencial",
    location: "Chachapoyas, Amazonas, Perú",
    year: 2025,
    description:
      "Frente renovado con balcones, carpintería en madera y ventanas amplias para una presencia limpia y luminosa.",
    highlight: "Fachada terminada",
    featured: false,
    image: {
      src: "/images/gallery/fachada-residencial-tres-niveles.webp",
      alt: "Fachada blanca de residencia de tres niveles con balcones metálicos y carpintería de madera",
      width: 1600,
      height: 1000,
      focalPoint: "center 45%",
    },
  },
  {
    id: "pasillo-acabados-interiores",
    title: "Acabados Interiores Continuos",
    category: "Interiores",
    location: "Chachapoyas, Amazonas, Perú",
    year: 2025,
    description:
      "Piso tipo madera, muros nivelados e iluminación empotrada para una circulación sobria y bien rematada.",
    highlight: "Pisos y muros",
    featured: false,
    image: {
      src: "/images/gallery/pasillo-acabados-interiores.webp",
      alt: "Pasillo residencial con piso tipo madera, muros grises e iluminación empotrada",
      width: 1200,
      height: 1500,
      focalPoint: "center 50%",
    },
  },
  {
    id: "sala-cocina-piso-pulido",
    title: "Sala Cocina de Piso Pulido",
    category: "Residencial",
    location: "Chachapoyas, Amazonas, Perú",
    year: 2025,
    description:
      "Ambiente social abierto con cocina integrada, escalera interior y porcelanato brillante de gran formato.",
    highlight: "Porcelanato pulido",
    featured: false,
    image: {
      src: "/images/gallery/sala-cocina-piso-pulido.webp",
      alt: "Sala cocina abierta con isla revestida, escalera interior y piso de porcelanato pulido",
      width: 1600,
      height: 1000,
      focalPoint: "center 58%",
    },
  },
  {
    id: "bano-enchape-decorativo",
    title: "Baño con Enchape Decorativo",
    category: "Baños",
    location: "Chachapoyas, Amazonas, Perú",
    year: 2025,
    description:
      "Revestimiento marmolizado, ducha en vidrio y mueble suspendido para un acabado compacto y elegante.",
    highlight: "Enchape marmolizado",
    featured: false,
    image: {
      src: "/images/gallery/bano-enchape-decorativo.webp",
      alt: "Baño residencial con enchape marmolizado azul y dorado, ducha en vidrio y mueble de lavabo",
      width: 1200,
      height: 1500,
      focalPoint: "center 45%",
    },
  },
];

/** Returns the featured project (main gallery card) */
export const featuredProject = projects.find((p) => p.featured) ?? projects[0];

/** Returns all projects available to the gallery */
export const galleryProjects = projects;
