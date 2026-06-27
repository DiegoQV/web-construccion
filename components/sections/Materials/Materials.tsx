import { materialsContent } from "@/data/materials";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { QualityItem } from "./QualityItem";
import styles from "./Materials.module.css";

export function Materials() {
  return (
    <section
      id="calidad"
      className={styles.materials}
      aria-labelledby="materials-title"
    >
      <div className={styles.materials__inner}>
        <div className={styles.materials__layout}>
          <div className={styles.materials__editorial}>
            <ScrollReveal>
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

            <ScrollReveal
              variant="fadeIn"
              delay={160}
              className={styles.materials__commitment}
            >
              <span>Nuestro criterio</span>
              <p>{materialsContent.commitment}</p>
            </ScrollReveal>
          </div>

          <ul
            className={styles.materials__list}
            aria-label="Principios de materiales y calidad"
          >
            {materialsContent.principles.map((principle, index) => (
              <ScrollReveal
                key={principle.id}
                as="li"
                delay={index * 80}
                threshold={0.1}
                className={styles.materials__item}
              >
                <QualityItem principle={principle} index={index} />
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
