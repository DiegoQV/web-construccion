"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import type { Project } from "@/types/project";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/Button";
import styles from "./Gallery.module.css";

export function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!project) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [project]);

  return (
    <dialog ref={dialogRef} className={styles.dialog} aria-labelledby="project-dialog-title" onClose={onClose} onClick={event => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}>
      {project && <div className={styles.dialog__content}>
        <button type="button" className={styles.dialog__close} aria-label="Cerrar obra ampliada" onClick={() => dialogRef.current?.close()} autoFocus><X size={22} aria-hidden="true" /></button>
        <div className={styles.dialog__image}><Image src={project.image.src} alt={project.image.alt} fill sizes="(max-width: 767px) 95vw, 65vw" style={{ objectFit: "contain" }} /></div>
        <div className={styles.dialog__details}>
          <h2 id="project-dialog-title">{project.title}</h2>
          <p>{project.description}</p>
          <dl><div><dt>Ubicación</dt><dd>{project.location}</dd></div><div><dt>Año</dt><dd>{project.year}</dd></div><div><dt>Detalle destacado</dt><dd>{project.highlight}</dd></div></dl>
          <Button href={siteConfig.whatsappHref.split("?")[0] + "?text=" + encodeURIComponent(`Hola Dilber, vi la obra «${project.title}» y quisiera conversar sobre un proyecto similar.`)} target="_blank" rel="noopener noreferrer" variant="accent">Consultar por una obra similar</Button>
        </div>
      </div>}
    </dialog>
  );
}
