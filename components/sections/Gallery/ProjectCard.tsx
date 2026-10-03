"use client";

import Image from "next/image";
import { Maximize2 } from "lucide-react";
import type { Project } from "@/types/project";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: () => void;
}

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <button type="button" className={styles.card__media} onClick={onOpen} aria-label={`Ampliar imagen de ${project.title}`}>
        <Image src={project.image.src} alt={project.image.alt} fill sizes="(max-width: 767px) 90vw, (max-width: 1023px) 45vw, 550px" className={styles.card__image} style={{ objectPosition: project.image.focalPoint ?? "center" }} />
        <span className={styles.expand}><Maximize2 size={16} aria-hidden="true" /> Ampliar obra</span>
      </button>
      <div className={styles.card__caption}>
        <div className={styles.card__meta}><span>{String(index + 1).padStart(2, "0")}</span><span>{project.category} · {project.year}</span></div>
        <h3 className={styles.card__title}>{project.title}</h3>
        <p className={styles.location}>{project.location}</p>
        <p className={styles.card__description}>{project.description}</p>
        <p className={styles.highlight}>{project.highlight}</p>
      </div>
    </article>
  );
}
