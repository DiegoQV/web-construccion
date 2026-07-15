"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { MaterialFeature as MaterialFeatureData } from "@/data/materials";
import styles from "./Materials.module.css";

interface MaterialFeatureProps {
  feature: MaterialFeatureData;
  featured: boolean;
  index: number;
}

export function MaterialFeature({
  feature,
  featured,
  index,
}: MaterialFeatureProps) {
  const [featureRef, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.2,
    once: true,
  });
  const prefersReducedMotion = useReducedMotion();
  const isRevealed = isVisible || prefersReducedMotion;
  const revealStyle = {
    "--reveal-delay": `${index * 120}ms`,
  } as CSSProperties;

  return (
    <figure
      ref={featureRef}
      className={`${styles.feature} ${isRevealed ? styles["feature--revealed"] : ""}`}
      style={revealStyle}
    >
      <div className={styles.feature__media}>
        <Image
          src={feature.image}
          alt={feature.alt}
          fill
          loading="lazy"
          sizes={
            featured
              ? "(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 50vw, 58vw"
              : "(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 50vw, 34vw"
          }
          className={styles.feature__image}
        />
      </div>

      <figcaption className={styles.feature__caption}>
        <span>{feature.label}</span>
        <p>{feature.caption}</p>
      </figcaption>
    </figure>
  );
}
