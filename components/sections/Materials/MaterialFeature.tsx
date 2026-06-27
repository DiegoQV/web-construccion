import Image from "next/image";
import type { MaterialFeature as MaterialFeatureData } from "@/data/materials";
import styles from "./Materials.module.css";

interface MaterialFeatureProps {
  feature: MaterialFeatureData;
  featured: boolean;
}

export function MaterialFeature({
  feature,
  featured,
}: MaterialFeatureProps) {
  return (
    <figure className={styles.feature}>
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
