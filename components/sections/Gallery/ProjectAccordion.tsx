"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import type { Project } from "@/types/project";
import styles from "./ProjectAccordion.module.css";

export function ProjectAccordion({ projects, offset, onOpen }: {
  projects: Project[];
  offset: number;
  onOpen: (project: Project) => void;
}) {
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  return (
    <div className={styles.group} role="group" aria-label={`Obras ${offset + 1} a ${offset + projects.length}`}>
      <div className={styles.label}>
        <span>{String(offset + 1).padStart(2, "0")} — {String(offset + projects.length).padStart(2, "0")}</span>
        <span>Selecciona una obra para explorar</span>
      </div>
      <div className={styles.panels} style={{ gridTemplateColumns: projects.map((_, index) => index === active ? "minmax(0, 6fr)" : "minmax(0, 1fr)").join(" ") }}>
        {projects.map((project, index) => (
          <article key={project.id} className={styles.panel} data-active={index === active}>
            <button
              ref={element => { buttons.current[index] = element; }}
              className={styles.select}
              type="button"
              aria-label={`Seleccionar obra: ${project.title}`}
              aria-pressed={index === active}
              onClick={() => setActive(index)}
              onFocus={() => setActive(index)}
              onPointerEnter={event => { if (event.pointerType === "mouse") setActive(index); }}
              onKeyDown={event => {
                let next: number;
                if (event.key === "ArrowRight") next = (index + 1) % projects.length;
                else if (event.key === "ArrowLeft") next = (index - 1 + projects.length) % projects.length;
                else if (event.key === "Home") next = 0;
                else if (event.key === "End") next = projects.length - 1;
                else return;
                event.preventDefault();
                buttons.current[next]?.focus();
              }}
            >
              <Image src={project.image.src} alt={project.image.alt} fill sizes="(max-width: 1023px) 1px, 860px" className={styles.image} style={{ objectPosition: project.image.focalPoint ?? "center" }} />
              <span className={styles.number} aria-hidden="true">{String(offset + index + 1).padStart(2, "0")}</span>
              <span className={styles.vertical} aria-hidden="true">{project.title}</span>
            </button>
            <div className={styles.details} aria-hidden={index !== active} inert={index !== active}>
              <p className={styles.meta}>{project.category} · {project.year}</p>
              <h3>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <button type="button" className={styles.open} onClick={() => onOpen(project)} aria-label={`Ver obra: ${project.title}`}>
                Ver obra <ArrowUpRight size={20} aria-hidden="true" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
