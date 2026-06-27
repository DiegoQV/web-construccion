import { cn } from "@/lib/utils";
import styles from "./GoldLine.module.css";

interface GoldLineProps {
  className?: string;
  style?: React.CSSProperties;
}

/**
 * GoldLine — The 40×2px brand accent decorative line.
 * Used below the hero tagline and as a section accent separator.
 * Animates in from left to right (scaleX).
 */
export function GoldLine({ className, style }: GoldLineProps) {
  return <span className={cn(styles.line, className)} style={style} aria-hidden="true" />;
}
