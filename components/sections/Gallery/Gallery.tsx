"use client";

import { useRef, useState } from "react";
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
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);

  const updateActiveProject = () => {
    const track = trackRef.current;
    if (!track) return;

    const closestIndex = Array.from(track.children).reduce(
      (closest, item, index) =>
        Math.abs((item as HTMLElement).offsetLeft - track.scrollLeft) <
        Math.abs(
          (track.children[closest] as HTMLElement).offsetLeft - track.scrollLeft
        )
          ? index
          : closest,
      0
    );

    setActiveProject(closestIndex);
  };

  const goToProject = (index: number) => {
    const item = trackRef.current?.children[index] as HTMLElement | undefined;
    item?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  };

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
              Viviendas donde estructura, proporción y acabado crean espacios
              hechos para durar.
            </p>
          </ScrollReveal>
        </header>

        <div className={styles.gallery__mobile_hint}>
          <span aria-hidden="true">← Desliza para explorar →</span>
          <span className={styles.gallery__mobile_count} aria-live="polite">
            {String(activeProject + 1).padStart(2, "0")}—
            {String(orderedProjects.length).padStart(2, "0")}
          </span>
        </div>

        <div className={styles.gallery__mobile_progress} aria-label="Seleccionar proyecto">
          {orderedProjects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              className={styles.gallery__progress_button}
              data-active={index === activeProject}
              aria-label={`Ver proyecto ${index + 1}: ${project.title}`}
              aria-current={index === activeProject ? "true" : undefined}
              onClick={() => goToProject(index)}
            />
          ))}
        </div>

        <div
          ref={trackRef}
          className={styles.gallery__composition}
          onScroll={updateActiveProject}
          aria-label="Proyectos construidos"
        >
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
                isActive={index === activeProject}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
