"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/data/site-config";
import styles from "./VideoShowcaseSection.module.css";

const showcaseVideos = [
  {
    id: "recorrido-01",
    src: "/videos/constructora_presentacion_v2_con_musica.mp4",
    label: "Recorrido interior",
    ariaLabel: "Recorrido por el interior de una vivienda construida",
  },
  {
    id: "recorrido-02",
    src: "/videos/recorrido-obra-02.mp4",
    label: "Detalles de obra",
    ariaLabel: "Recorrido por los detalles de una obra ejecutada",
  },
  {
    id: "recorrido-03",
    src: "/videos/recorrido-obra-03.mp4",
    label: "Proyecto residencial",
    ariaLabel: "Recorrido por un proyecto residencial ejecutado",
  },
] as const;

export function VideoShowcaseSection() {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [soundEnabledId, setSoundEnabledId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.35) return;

          const video = entry.target as HTMLVideoElement;
          video.pause();
          video.muted = true;
          setSoundEnabledId((currentId) => {
            return currentId === video.dataset.videoId ? null : currentId;
          });
        });
      },
      { threshold: [0, 0.35, 0.72, 1] }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  const pauseOtherVideos = (activeIndex: number) => {
    videoRefs.current.forEach((video, index) => {
      if (!video || index === activeIndex) return;

      video.pause();
      video.muted = true;
    });
  };

  const enableSound = (videoId: string, videoIndex: number) => {
    const video = videoRefs.current[videoIndex];
    if (!video) return;

    pauseOtherVideos(videoIndex);
    video.muted = false;
    void video
      .play()
      .then(() => setSoundEnabledId(videoId))
      .catch(() => {
        video.muted = true;
      });
  };

  const handlePlay = (videoId: string, videoIndex: number) => {
    pauseOtherVideos(videoIndex);
    const video = videoRefs.current[videoIndex];
    setSoundEnabledId(video && !video.muted ? videoId : null);
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
              Recorridos de obra
            </SectionLabel>
            <h2 id="video-showcase-title" className={styles.showcase__title}>
              Obras que hablan por sí solas
            </h2>
          </div>

          <p className={styles.showcase__description}>
            Recorre algunos de nuestros proyectos y descubre el nivel de
            detalle, amplitud y calidad presente en cada espacio.
          </p>
        </ScrollReveal>

        <div className={styles.showcase__gallery} aria-label="Recorridos de obra">
          {showcaseVideos.map((video, index) => (
            <ScrollReveal
              key={video.id}
              variant="fadeIn"
              delay={120 + index * 60}
              threshold={0.08}
              className={styles.showcase__media}
            >
              <article className={styles.showcase__item}>
                <div className={styles.showcase__frame}>
                  <video
                    ref={(element) => {
                      videoRefs.current[index] = element;
                    }}
                    data-video-id={video.id}
                    className={styles.showcase__video}
                    controls
                    muted
                    playsInline
                    preload="metadata"
                    onPlay={() => handlePlay(video.id, index)}
                    aria-label={video.ariaLabel}
                  >
                    <source src={video.src} type="video/mp4" />
                    Tu navegador no puede reproducir este video.
                  </video>

                  {soundEnabledId !== video.id && (
                    <button
                      type="button"
                      className={styles.showcase__sound}
                      onClick={() => enableSound(video.id, index)}
                      aria-label={`Activar ${video.label.toLowerCase()} con sonido`}
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

                <p className={styles.showcase__caption}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {video.label}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal
          variant="fadeIn"
          delay={180}
          className={styles.showcase__footer}
        >
          <span className={styles.showcase__rule} aria-hidden="true" />
          <Button
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
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
