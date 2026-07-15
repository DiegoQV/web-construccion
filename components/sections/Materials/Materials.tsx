import { materialsContent } from "@/data/materials";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MaterialFeature } from "./MaterialFeature";
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
          <p className={`${styles.materials__intro} body-lg`}>
            {materialsContent.introduction}
          </p>
        </ScrollReveal>

        <div
          className={styles.materials__gallery}
          aria-label="Calidad y ejecución en obra"
        >
          {materialsContent.features.map((feature, index) => (
            <div key={feature.id} className={styles.materials__feature}>
              <MaterialFeature
                feature={feature}
                featured={index === 0}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
