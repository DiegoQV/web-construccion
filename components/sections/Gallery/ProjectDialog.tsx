"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/types/project";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/Button";
import styles from "./Gallery.module.css";

export function ProjectDialog({ project, onClose, onNavigate, index, total }: { project: Project | null; onClose: () => void; onNavigate: (direction: -1 | 1) => void; index: number; total: number }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isOpen = project !== null;
  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <dialog ref={dialogRef} className={styles.dialog} aria-labelledby="project-dialog-title" onClose={onClose} onKeyDown={event => { if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return; if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); onNavigate(event.key === "ArrowLeft" ? -1 : 1); } }} onClick={event => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}>
      {project && <div className={styles.dialog__content}>
        <button type="button" className={styles.dialog__close} aria-label="Cerrar obra ampliada" onClick={() => dialogRef.current?.close()} autoFocus><X size={22} aria-hidden="true" /></button>
        <div className={styles.dialog__image}><Image src={project.image.src} alt={project.image.alt} fill sizes="(max-width: 767px) 95vw, 65vw" style={{ objectFit: "contain" }} /></div>
        <div className={styles.dialog__details}>
          <nav className={styles.dialog__navigation} aria-label="Navegar por las obras ampliadas">
            <button type="button" aria-label="Obra anterior" onClick={() => onNavigate(-1)}><ChevronLeft size={20} aria-hidden="true" /></button>
            <span aria-live="polite">{String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
            <button type="button" aria-label="Obra siguiente" onClick={() => onNavigate(1)}><ChevronRight size={20} aria-hidden="true" /></button>
          </nav>
          <h2 id="project-dialog-title">{project.title}</h2>
          <p>{project.description}</p>
          <dl><div><dt>Ubicación</dt><dd>{project.location}</dd></div><div><dt>Año</dt><dd>{project.year}</dd></div><div><dt>Detalle destacado</dt><dd>{project.highlight}</dd></div></dl>
          <Button href={siteConfig.whatsappHref.split("?")[0] + "?text=" + encodeURIComponent(`Hola Dilber, vi la obra «${project.title}» y quisiera conversar sobre un proyecto similar.`)} target="_blank" rel="noopener noreferrer" variant="accent">Consultar por una obra similar</Button>
        </div>
      </div>}
    </dialog>
  );
}
