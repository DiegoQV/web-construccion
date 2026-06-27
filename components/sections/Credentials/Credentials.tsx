import { credentialsContent } from "@/data/credentials";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StatItem } from "./StatItem";
import styles from "./Credentials.module.css";

export function Credentials() {
  return (
    <section
      className={styles.credentials}
      aria-labelledby="credentials-title"
    >
      <div className={styles.credentials__inner}>
        <div className={styles.credentials__header}>
          <ScrollReveal className={styles.credentials__heading}>
            <SectionLabel>{credentialsContent.eyebrow}</SectionLabel>
            <h2
              id="credentials-title"
              className={`${styles.credentials__title} display-md`}
            >
              {credentialsContent.title}
            </h2>
          </ScrollReveal>

          <ScrollReveal
            variant="fadeIn"
            delay={120}
            className={styles.credentials__intro}
          >
            <p className="body">{credentialsContent.description}</p>
          </ScrollReveal>
        </div>

        <div
          className={styles.credentials__grid}
          aria-label="Indicadores de experiencia y calidad"
        >
          {credentialsContent.stats.map((stat, index) => (
            <ScrollReveal
              key={stat.id}
              delay={120 + index * 90}
              threshold={0.2}
              className={styles.credentials__reveal}
            >
              <StatItem {...stat} index={index} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
