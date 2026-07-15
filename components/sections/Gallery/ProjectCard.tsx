"use client";

import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useReducedMotion } from "@/hooks/useReducedMotion";
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
  isActive?: boolean;
}

const imageSizes: Record<ProjectCardVariant, string> = {
  featured: "(max-width: 767px) calc(100vw - 8px), (max-width: 1023px) 92vw, 64vw",
  portrait: "(max-width: 767px) calc(100vw - 8px), (max-width: 1023px) 46vw, 28vw",
  landscape: "(max-width: 767px) calc(100vw - 8px), (max-width: 1023px) 46vw, 38vw",
  process: "(max-width: 767px) calc(100vw - 8px), (max-width: 1023px) 46vw, 38vw",
};

export function ProjectCard({
  project,
  index,
  variant,
  isActive = false,
}: ProjectCardProps) {
  const [mediaRef, isMediaVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.35,
    once: true,
  });
  const prefersReducedMotion = useReducedMotion();
  const shouldReveal = isMediaVisible && !prefersReducedMotion;
  const curtainDelay = `${Math.min(index * 90, 360) + 100}ms`;

  return (
    <article
      className={styles.card}
      data-variant={variant}
      data-active={isActive}
    >
      <div ref={mediaRef} className={styles.card__media}>
        <Image
          src={project.image.src}
          alt=""
          fill
          sizes={imageSizes[variant]}
          className={styles.card__backdrop}
          style={{ objectPosition: project.image.focalPoint ?? "center" }}
          aria-hidden="true"
        />
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes={imageSizes[variant]}
          className={styles.card__image}
          style={{ objectPosition: project.image.focalPoint ?? "center" }}
        />
        {!prefersReducedMotion && (
          <div
            className={`${styles.card__curtain} ${shouldReveal ? styles["card__curtain--revealing"] : ""}`}
            style={{ "--curtain-delay": curtainDelay } as React.CSSProperties}
            aria-hidden="true"
          >
            <span className={styles.card__curtain_left} />
            <span className={styles.card__curtain_right} />
          </div>
        )}
      </div>

      <div className={styles.card__caption}>
        <h3 className={styles.card__title}>{project.title}</h3>

        <div className={styles.card__meta}>
          <span aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span>{project.location}</span>
          <span>{project.year}</span>
          <span>{project.category}</span>
        </div>
        <p className={styles.card__description}>{project.description}</p>
      </div>
    </article>
  );
}
