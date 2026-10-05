import type { ProcessStep as ProcessStepData } from "@/data/process-steps";
import styles from "./Process.module.css";

interface ProcessStepProps {
  step: ProcessStepData;
}

export function ProcessStep({ step }: ProcessStepProps) {
  return (
    <article className={styles.step} tabIndex={0} aria-labelledby={`process-step-${step.id}`}>
      <span className={styles.step__number} aria-hidden="true">{step.number}</span>

      <div className={styles.step__content}>
        <h3 id={`process-step-${step.id}`} className={styles.step__title}>{step.title}</h3>
        <p className={styles.step__description}>{step.description}</p>
        <p className={styles.step__outcome}><span>Resultado</span> {step.outcome}</p>
      </div>
    </article>
  );
}
