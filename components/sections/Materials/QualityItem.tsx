import {
  Boxes,
  BrickWall,
  ClipboardCheck,
  HardHat,
  PaintRoller,
  Ruler,
  type LucideIcon,
} from "lucide-react";
import type { MaterialIcon, QualityPrinciple } from "@/data/materials";
import styles from "./Materials.module.css";

const icons: Record<MaterialIcon, LucideIcon> = {
  materials: Boxes,
  structure: BrickWall,
  finishes: PaintRoller,
  supervision: HardHat,
  detail: Ruler,
  verification: ClipboardCheck,
};

interface QualityItemProps {
  principle: QualityPrinciple;
  index: number;
}

export function QualityItem({ principle, index }: QualityItemProps) {
  const Icon = icons[principle.icon];

  return (
    <article className={styles.quality}>
      <div className={styles.quality__topline}>
        <span className={styles.quality__icon} aria-hidden="true">
          <Icon size={24} strokeWidth={1.4} />
        </span>
        <span className={styles.quality__index} aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className={styles.quality__title}>{principle.title}</h3>
      <p className={styles.quality__description}>{principle.description}</p>
    </article>
  );
}
