import { cn } from "@/lib/utils";
import styles from "./SectionLabel.module.css";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * SectionLabel — Small uppercase overline label used above section titles.
 * Renders in brand accent color with wide letter spacing.
 *
 * @example
 * <SectionLabel>Proyectos Realizados</SectionLabel>
 */
export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span className={cn(styles.label, "overline", className)}>{children}</span>
  );
}
