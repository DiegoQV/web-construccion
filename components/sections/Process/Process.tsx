import Image from "next/image";
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
        <div className={styles.process__presentation}>
          <SectionLabel>Un proceso sin improvisaciones</SectionLabel>
          <ScrollReveal className={styles.process__heading}>
            <h2 id="process-title" className="display-md">
              <span>Cinco etapas. Un responsable</span>{" "}
              <span>de principio a fin.</span>
            </h2>
          </ScrollReveal>

        <header className={styles.process__header}>
          <ScrollReveal as="figure" variant="imageUp" className={styles.process__photo}>
            <Image
              src="/images/materials/supervision-fachada.png"
              alt="Trabajo en una fachada residencial con andamios durante la ejecución de la obra"
              fill
              sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 80px), 560px"
            />
            <figcaption className={styles.process__photoLabel}>En obra <span aria-hidden="true">·</span> Chachapoyas</figcaption>
          </ScrollReveal>
        </header>
        </div>

        <ScrollReveal as="ol" variant="trace" threshold={0.08} className={styles.process__timeline}>
          {processSteps.map((step, index) => (
            <ScrollReveal
              key={step.id}
              as="li"
              delay={index * 80}
              threshold={0.08}
              className={styles.process__item}
            >
              <ProcessStep step={step} />
            </ScrollReveal>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
