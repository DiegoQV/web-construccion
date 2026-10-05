import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import styles from "./About.module.css";

export function About() {
  return (
    <section
      id="el-maestro"
      className={styles.about}
      aria-labelledby="about-title"
    >
      <div className={styles.inner}>
        <ScrollReveal as="figure" variant="imageUp" className={styles.photo}>
          <Image
            src="/images/about/dilber-tuesta.webp"
            alt="Dilber Tuesta, maestro constructor, con casco y chaleco de seguridad en una obra"
            fill
            sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 42vw, 480px"
          />
        </ScrollReveal>
        <ScrollReveal delay={120} className={styles.content}>
          <SectionLabel>Conoce al maestro</SectionLabel>
          <h2 id="about-title" className="display-md">
            Tu proyecto tiene un responsable.
          </h2>
          <p className={styles.name}>{siteConfig.ownerName}</p>
          <p>
            Desde {siteConfig.foundingYear}, la experiencia de Dilber se refleja
            en viviendas construidas y acabados que cuidan cada detalle. Una
            relación directa para conversar sobre tu proyecto y acompañar su
            ejecución.
          </p>
          <ul className={styles.services} aria-label="Servicios">
            <li>Construcción de viviendas</li>
            <li>Remodelación y acabados</li>
            <li>Supervisión de obra</li>
          </ul>
          <Button
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            Conversar con Dilber
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
