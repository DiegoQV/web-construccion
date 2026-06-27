import {
  CalendarRange,
  FileText,
  HardHat,
  KeyRound,
  MessageSquareCheck,
  type LucideIcon,
} from "lucide-react";
import type {
  ProcessIcon,
  ProcessStep as ProcessStepData,
} from "@/data/process-steps";
import styles from "./Process.module.css";

const icons: Record<ProcessIcon, LucideIcon> = {
  consultation: MessageSquareCheck,
  budget: FileText,
  planning: CalendarRange,
  construction: HardHat,
  delivery: KeyRound,
};

interface ProcessStepProps {
  step: ProcessStepData;
}

export function ProcessStep({ step }: ProcessStepProps) {
  const Icon = icons[step.icon];

  return (
    <article className={styles.step}>
      <div className={styles.step__marker} aria-hidden="true">
        <Icon size={26} strokeWidth={1.4} />
      </div>

      <div className={styles.step__content}>
        <span className={styles.step__number}>{step.number}</span>
        <h3 className={styles.step__title}>{step.title}</h3>
        <p className={styles.step__description}>{step.description}</p>
      </div>
    </article>
  );
}
