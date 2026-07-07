"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import styles from "./VideoShowcaseSection.module.css";

export function VideoShowcaseSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isProminent = entry.intersectionRatio >= 0.72;

        if (!isProminent) {
          video.pause();
          video.muted = true;
          return;
        }

        if (soundEnabled) {
          video.muted = false;
          void video.play().catch(() => {
            video.muted = true;
          });
        }
      },
      { threshold: [0, 0.25, 0.72, 1] }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [soundEnabled]);

  const enableSound = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    void video
      .play()
      .then(() => setSoundEnabled(true))
      .catch(() => {
        video.muted = true;
      });
  };

  return (
    <section
      className={styles.showcase}
      aria-labelledby="video-showcase-title"
    >
      <div className={styles.showcase__inner}>
        <ScrollReveal className={styles.showcase__header}>
          <div className={styles.showcase__heading}>
            <SectionLabel className={styles.showcase__label}>
              Recorrido interior
            </SectionLabel>
            <h2 id="video-showcase-title" className={styles.showcase__title}>
              Interiores que hablan por sí solos
            </h2>
          </div>

          <p className={styles.showcase__description}>
            Recorre una de nuestras viviendas y descubre el nivel de detalle,
            amplitud y calidad en cada espacio.
          </p>
        </ScrollReveal>

        <ScrollReveal
          variant="fadeIn"
          delay={120}
          threshold={0.08}
          className={styles.showcase__media}
        >
          <div className={styles.showcase__frame}>
            <video
              ref={videoRef}
              className={styles.showcase__video}
              src="/videos/constructora_presentacion_v2_con_musica.mp4"
              controls
              muted
              playsInline
              preload="metadata"
              aria-label="Recorrido por el interior de una vivienda construida"
            >
              Tu navegador no puede reproducir este video.
            </video>

            {!soundEnabled && (
              <button
                type="button"
                className={styles.showcase__sound}
                onClick={enableSound}
                aria-label="Activar video con música"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M11 5 6 9H3v6h3l5 4V5Z" />
                  <path d="M15.5 8.5a5 5 0 0 1 0 7" />
                  <path d="M18 6a8.5 8.5 0 0 1 0 12" />
                </svg>
                Activar sonido
              </button>
            )}
          </div>
        </ScrollReveal>

        <ScrollReveal
          variant="fadeIn"
          delay={180}
          className={styles.showcase__footer}
        >
          <span className={styles.showcase__rule} aria-hidden="true" />
          <Button
            href="#contacto"
            variant="outline"
            size="md"
            className={styles.showcase__cta}
          >
            Solicitar una cotización
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
