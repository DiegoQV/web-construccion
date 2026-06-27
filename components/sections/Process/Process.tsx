import { processSteps } from "@/data/process-steps";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProcessStep } from "./ProcessStep";
import styles from "./Process.module.css";

export function Process() {
  return (
    <section
      id="proceso"
      className={styles.process}
      aria-labelledby="process-title"
    >
      <div className={styles.process__inner}>
        <header className={styles.process__header}>
          <ScrollReveal className={styles.process__heading}>
            <SectionLabel>Un proceso sin improvisaciones</SectionLabel>
            <h2 id="process-title" className="display-md">
              Cinco etapas. Un responsable de principio a fin.
            </h2>
          </ScrollReveal>

          <ScrollReveal
            variant="fadeIn"
            delay={120}
            className={styles.process__intro}
          >
            <p className="body-lg">
              Cada decisión se planifica, se comunica y se supervisa para que tu
              obra avance con orden, costos claros y resultados verificables.
            </p>
          </ScrollReveal>
        </header>

        <ol className={styles.process__timeline}>
          {processSteps.map((step, index) => (
            <ScrollReveal
              key={step.id}
              as="li"
              delay={index * 110}
              threshold={0.15}
              className={styles.process__item}
            >
              <ProcessStep step={step} />
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
