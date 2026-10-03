import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import styles from "./About.module.css";

export function About() {
  return (
    <section id="el-maestro" className={styles.about} aria-labelledby="about-title">
      <div className={styles.inner}>
        <figure className={styles.photo}>
          <Image src="/images/materials/supervision-fachada.png" alt="Trabajo en una fachada residencial durante su ejecución en obra" fill sizes="(max-width: 767px) 100vw, 45vw" />
          <figcaption>El oficio se demuestra en cada etapa de la obra.</figcaption>
        </figure>
        <div className={styles.content}>
          <SectionLabel>Conoce al maestro</SectionLabel>
          <h2 id="about-title" className="display-md">Tu proyecto tiene un responsable. Y un nombre.</h2>
          <p className={styles.name}>{siteConfig.ownerName}<span>Maestro Constructor · {siteConfig.city}</span></p>
          <p>Desde {siteConfig.foundingYear}, la experiencia de Dilber se refleja en viviendas construidas y acabados que cuidan cada detalle. Una relación directa para conversar sobre tu proyecto y acompañar su ejecución.</p>
          <ul className={styles.services} aria-label="Servicios">
            <li>Construcción de viviendas</li><li>Remodelación y acabados</li><li>Supervisión de obra</li>
          </ul>
          <Button href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" variant="outline">Conversar con Dilber</Button>
        </div>
      </div>
    </section>
  );
}
