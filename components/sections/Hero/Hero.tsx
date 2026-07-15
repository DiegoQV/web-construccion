"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import heroImage from "@/public/images/hero/residencia-oficial.png";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/Button";
import { GoldLine } from "@/components/ui/GoldLine";
import { cn } from "@/lib/utils";
import styles from "./Hero.module.css";

/**
 * Hero — Sección de impacto inicial.
 *
 * Fotografía: casa-nocturna.png (Fotografía 1 — aprobada)
 * Overlay: mínimo — la foto tiene fondo oscuro natural
 * Efecto: acercamiento progresivo + parallax suave al hacer scroll en escritorio
 *
 * Screen Specification: Sección 01
 */
export function Hero() {
  const prefersReduced = useReducedMotion();
  const [scrollY, setScrollY] = useState(0);
  const [isHeroReady, setIsHeroReady] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
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

  // Parallax en scroll
  useEffect(() => {
    if (prefersReduced) return;
    if (!window.matchMedia("(min-width: 1024px)").matches) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Solo calcular mientras el hero es visible
      const heroHeight = heroRef.current?.offsetHeight ?? window.innerHeight;
      if (currentScrollY < heroHeight) {
        setScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prefersReduced]);

  const parallaxOffset = prefersReduced ? 0 : scrollY * 0.3;

  return (
    <section
      ref={heroRef}
      className={cn(
        styles.hero,
        isHeroReady && styles["hero--ready"]
      )}
      aria-label="Maestro Constructor Premium"
    >
      {/* ── Fotografía de fondo ──────────────────────────── */}
      <div
        className={cn(
          styles.hero__media,
          !prefersReduced && styles["hero__media--parallax"]
        )}
        style={
          !prefersReduced
            ? {
                "--hero-parallax-offset": `${parallaxOffset}px`,
              } as React.CSSProperties
            : undefined
        }
      >
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
            {siteConfig.specialty} · {siteConfig.city}
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
              15 años construyendo viviendas sólidas y personalizadas en {siteConfig.city}.
            </span>
            <span className={styles.hero__subtitle_mobile}>
              15 años construyendo viviendas en {siteConfig.city}.
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
              Ver proyectos
            </Button>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────── */}
      {!prefersReduced && (
        <div className={styles.hero__scroll} aria-hidden="true">
          <span className={styles.hero__scroll_line} />
          <span className={styles.hero__scroll_dot} />
        </div>
      )}
    </section>
  );
}
