"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import heroImage from "@/public/images/hero/residencia-oficial.png";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/Button";
import { GoldLine } from "@/components/ui/GoldLine";
import { cn } from "@/lib/utils";
import styles from "./Hero.module.css";

/**
 * Hero — Sección de impacto inicial.
 *
 * Fotografía con una entrada breve que respeta el movimiento reducido.
 *
 * Screen Specification: Sección 01
 */
export function Hero() {
  const [isHeroReady, setIsHeroReady] = useState(false);
  const heroStartTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startHeroSequence = useCallback(() => {
    if (heroStartTimerRef.current || isHeroReady) return;

    heroStartTimerRef.current = setTimeout(() => {
      setIsHeroReady(true);
      heroStartTimerRef.current = null;
    }, 100);
  }, [isHeroReady]);

  useEffect(() => {
    const fallbackTimer = setTimeout(startHeroSequence, 900);

    return () => {
      clearTimeout(fallbackTimer);
      if (heroStartTimerRef.current) {
        clearTimeout(heroStartTimerRef.current);
      }
    };
  }, [startHeroSequence]);

  return (
    <section
      className={cn(
        styles.hero,
        isHeroReady && styles["hero--ready"]
      )}
      aria-label="Maestro Constructor Premium"
    >
      {/* ── Fotografía de fondo ──────────────────────────── */}
      <div className={styles.hero__media}>
        <Image
          src={heroImage}
          alt="Vivienda residencial contemporánea de dos niveles con volúmenes definidos y carpintería de madera"
          fill
          preload
          placeholder="blur"
          quality={75}
          sizes="100vw"
          className={styles.hero__image}
          onLoad={startHeroSequence}
        />
      </div>

      {/* ── Overlays ─────────────────────────────────────── */}
      {/* Overlay superior — legibilidad del navbar */}
      <div className={styles.hero__overlay_top} aria-hidden="true" />
      {/* Overlay inferior — zona de texto (mínimo, la foto ya es oscura) */}
      <div className={styles.hero__overlay_bottom} aria-hidden="true" />

      {/* ── Contenido de texto ───────────────────────────── */}
      <div className={styles.hero__content}>
        <div className={styles.hero__text}>
          {/* Etiqueta pre-titular */}
          <p
            className={cn(styles.hero__overline, "overline")}
            style={{ "--delay": "0ms" } as React.CSSProperties}
          >
            Construcción de alta calidad
          </p>

          {/* Línea dorada */}
          <GoldLine
            className={styles.hero__goldline}
            style={{ "--delay": "100ms" } as React.CSSProperties}
          />

          {/* Titular principal — h1 único en la página */}
          <h1
            className={cn(styles.hero__title, "display-xl")}
            style={{ "--delay": "150ms" } as React.CSSProperties}
          >
            <span>Construimos la casa</span>
            <span>que imaginaste.</span>
          </h1>

          {/* Subtítulo */}
          <p
            className={cn(styles.hero__subtitle, "body-lg")}
            style={{ "--delay": "280ms" } as React.CSSProperties}
          >
            <span className={styles.hero__subtitle_desktop}>
              Construcción, remodelación y acabados de viviendas en {siteConfig.city}.
            </span>
            <span className={styles.hero__subtitle_mobile}>
              Construcción, remodelación y acabados en {siteConfig.city}.
            </span>
          </p>

          {/* Acciones */}
          <div
            className={styles.hero__actions}
            style={{ "--delay": "380ms" } as React.CSSProperties}
          >
            <Button
              variant="accent"
              size="md"
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.hero__btn_primary}
            >
              Solicitar cotización
            </Button>

            <Button
              variant="outline"
              size="md"
              href="#proyectos"
              className={styles.hero__btn_secondary}
            >
              Ver obras realizadas
            </Button>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────── */}
      <div className={styles.hero__scroll} aria-hidden="true">
        <span className={styles.hero__scroll_label}>Scroll</span>
        <span className={styles.hero__scroll_line} />
      </div>
    </section>
  );
}
