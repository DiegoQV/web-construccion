import { projects, featuredProject } from "@/data/projects";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectCard, type ProjectCardVariant } from "./ProjectCard";
import styles from "./Gallery.module.css";

const orderedProjects = [
  featuredProject,
  ...projects.filter((project) => project.id !== featuredProject.id),
];

const variants: ProjectCardVariant[] = [
  "featured",
  "portrait",
  "landscape",
  "process",
];

export function Gallery() {
  return (
    <section
      id="proyectos"
      className={styles.gallery}
      aria-labelledby="gallery-title"
    >
      <div className={styles.gallery__inner}>
        <header className={styles.gallery__header}>
          <ScrollReveal className={styles.gallery__heading}>
            <SectionLabel>Obra construida</SectionLabel>
            <h2 id="gallery-title" className="display-md">
              Casas que convierten precisión en bienestar.
            </h2>
          </ScrollReveal>

          <ScrollReveal
            variant="fadeIn"
            delay={120}
            className={styles.gallery__intro}
          >
            <p className="body-lg">
              Una selección de viviendas donde estructura, proporción y acabado
              trabajan juntos para crear espacios hechos para durar.
            </p>
          </ScrollReveal>
        </header>

        <div className={styles.gallery__mobile_hint} aria-hidden="true">
          <span>Desliza para explorar</span>
          <span>01—04</span>
        </div>

        <div className={styles.gallery__composition}>
          {orderedProjects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              delay={index * 90}
              threshold={0.08}
              className={`${styles.gallery__item} ${styles[`gallery__item--${variants[index]}`]}`}
            >
              <ProjectCard
                project={project}
                index={index}
                variant={variants[index]}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
