"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects, featuredProject } from "@/data/projects";
import { siteConfig } from "@/data/site-config";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Button } from "@/components/ui/Button";
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

const getProjectVariant = (index: number) => variants[index % variants.length];

export function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);
  const prefersReducedMotion = useReducedMotion();

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
    item?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const goToAdjacentProject = (direction: -1 | 1) => {
    const nextIndex =
      (activeProject + direction + orderedProjects.length) %
      orderedProjects.length;
    goToProject(nextIndex);
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

        <div className={styles.gallery__viewport}>
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
                className={`${styles.gallery__item} ${styles[`gallery__item--${getProjectVariant(index)}`]}`}
              >
                <ProjectCard
                  project={project}
                  index={index}
                  variant={getProjectVariant(index)}
                  isActive={index === activeProject}
                />
              </ScrollReveal>
            ))}
          </div>

          <div
            className={styles.gallery__mobile_arrows}
            aria-label="Navegar por los proyectos"
          >
            <button
              type="button"
              className={`${styles.gallery__arrow} ${styles["gallery__arrow--previous"]}`}
              aria-label="Ver proyecto anterior"
              onClick={() => goToAdjacentProject(-1)}
            >
              <ChevronLeft aria-hidden="true" size={20} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              className={`${styles.gallery__arrow} ${styles["gallery__arrow--next"]}`}
              aria-label="Ver proyecto siguiente"
              onClick={() => goToAdjacentProject(1)}
            >
              <ChevronRight aria-hidden="true" size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <footer className={styles.gallery__footer}>
          <div className={styles.gallery__cta_copy}>
            <span className={styles.gallery__cta_rule} aria-hidden="true" />
            <p>¿Tienes una vivienda en mente?</p>
          </div>

          <Button
            variant="accent"
            size="md"
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.gallery__cta}
          >
            Quiero construir algo similar
          </Button>
        </footer>
      </div>
    </section>
  );
}
