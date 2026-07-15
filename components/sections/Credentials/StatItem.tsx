import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import styles from "./Credentials.module.css";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  status: "verified";
  index: number;
}

export function StatItem({
  value,
  suffix,
  label,
  status,
  index,
}: StatItemProps) {
  return (
    <article className={styles.stat} data-content-status={status}>
      <span className={styles.stat__index} aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>

      <AnimatedNumber
        value={value}
        suffix={suffix}
        duration={1600 + index * 120}
        className={`${styles.stat__value} stat-number`}
      />

      <span className={styles.stat__rule} aria-hidden="true" />
      <h3 className={styles.stat__label}>{label}</h3>
    </article>
  );
}
