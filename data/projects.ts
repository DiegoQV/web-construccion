// =============================================================================
// PROJECTS DATA
// Exactly 4 projects corresponding to the 4 approved photographs.
// Replace placeholder values with real data when available.
// Image paths reference /public/images/gallery/
// =============================================================================

import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "residencia-urbana-tres-niveles",
    title: "Residencia Urbana de Tres Niveles",
    category: "Residencial",
    location: "Chachapoyas, Amazonas, Perú",
    year: 2024,
    size: "240 m²",
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
    size: "210 m²",
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
    id: "casa-dos-pisos-dia",
    title: "Residencia Familiar Moderna",
    category: "Residencial",
    location: "Chachapoyas, Amazonas, Perú",
    year: 2023,
    size: "220 m²",
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
    id: "interior-residencial-acabados",
    title: "Acondicionamiento Interior Residencial",
    category: "Interiores",
    location: "Chachapoyas, Amazonas, Perú",
    year: 2025,
    size: "95 m²",
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
];

/** Returns the featured project (main gallery card) */
export const featuredProject = projects.find((p) => p.featured) ?? projects[0];

/** Returns all projects available to the gallery */
export const galleryProjects = projects;
