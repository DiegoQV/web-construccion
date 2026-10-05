import { materialsContent } from "@/data/materials";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MaterialsCarousel } from "./MaterialsCarousel";
import styles from "./Materials.module.css";

export function Materials() {
  return (
    <section
      id="calidad"
      className={styles.materials}
      aria-labelledby="materials-title"
    >
      <div className={styles.materials__inner}>
        <ScrollReveal className={styles.materials__header}>
          <SectionLabel>{materialsContent.eyebrow}</SectionLabel>
          <h2
            id="materials-title"
            className={`${styles.materials__title} display-md`}
          >
            {materialsContent.title}
          </h2>
        </ScrollReveal>
      </div>
      <MaterialsCarousel />
    </section>
  );
}
