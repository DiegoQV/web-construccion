import Image from "next/image";
import type { Project } from "@/types/project";
import styles from "./ProjectCard.module.css";

export type ProjectCardVariant =
  | "featured"
  | "portrait"
  | "landscape"
  | "process";

interface ProjectCardProps {
  project: Project;
  index: number;
  variant: ProjectCardVariant;
}

const imageSizes: Record<ProjectCardVariant, string> = {
  featured: "(max-width: 767px) 88vw, (max-width: 1023px) 92vw, 64vw",
  portrait: "(max-width: 767px) 88vw, (max-width: 1023px) 46vw, 28vw",
  landscape: "(max-width: 767px) 88vw, (max-width: 1023px) 46vw, 38vw",
  process: "(max-width: 767px) 88vw, (max-width: 1023px) 46vw, 38vw",
};

export function ProjectCard({
  project,
  index,
  variant,
}: ProjectCardProps) {
  return (
    <article className={styles.card} data-variant={variant}>
      <div className={styles.card__media}>
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes={imageSizes[variant]}
          className={styles.card__image}
          style={{ objectPosition: project.image.focalPoint ?? "center" }}
        />
      </div>

      <div className={styles.card__caption}>
        <div className={styles.card__meta}>
          <span aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span>{project.location}</span>
          <span>{project.year}</span>
        </div>

        <h3 className={styles.card__title}>{project.title}</h3>
        <p className={styles.card__description}>{project.description}</p>
      </div>
    </article>
  );
}
