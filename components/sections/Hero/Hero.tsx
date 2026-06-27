"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
 * Efecto: Ken Burns (zoom lento) + parallax en scroll
 *
 * Screen Specification: Sección 01
 */
export function Hero() {
  const prefersReduced = useReducedMotion();
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  // Parallax en scroll
  useEffect(() => {
    if (prefersReduced) return;

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

  // Parallax: imagen se mueve al 40% de la velocidad de scroll
  const parallaxOffset = prefersReduced ? 0 : scrollY * 0.4;

  return (
    <section
      ref={heroRef}
      className={styles.hero}
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
            ? { transform: `translateY(${parallaxOffset}px)` }
            : undefined
        }
      >
        <Image
          src="/images/hero/casa-nocturna.png"
          alt="Fachada iluminada de noche de vivienda residencial construida por el maestro, con acabados en concreto arquitectónico y marcos de madera natural"
          fill
          priority
          quality={90}
          sizes="100vw"
          className={cn(
            styles.hero__image,
            !prefersReduced && styles["hero__image--kenburns"],
            isLoaded && styles["hero__image--loaded"]
          )}
          onLoad={() => setIsLoaded(true)}
          style={{ objectPosition: "center 40%" }}
        />
      </div>

      {/* ── Overlays ─────────────────────────────────────── */}
      {/* Overlay superior — legibilidad del navbar */}
      <div className={styles.hero__overlay_top} aria-hidden="true" />
      {/* Overlay inferior — zona de texto (mínimo, la foto ya es oscura) */}
      <div className={styles.hero__overlay_bottom} aria-hidden="true" />

      {/* ── Contenido de texto ───────────────────────────── */}
      <div className={styles.hero__content}>
        <div
          className={cn(
            styles.hero__text,
            isLoaded && styles["hero__text--visible"]
          )}
        >
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
            {siteConfig.tagline}
          </h1>

          {/* Subtítulo */}
          <p
            className={cn(styles.hero__subtitle, "body-lg")}
            style={{ "--delay": "280ms" } as React.CSSProperties}
          >
            Viviendas de alta calidad desde {siteConfig.foundingYear}
          </p>

          {/* Acciones */}
          <div
            className={styles.hero__actions}
            style={{ "--delay": "380ms" } as React.CSSProperties}
          >
            <Button
              variant="outline"
              size="md"
              href="#proyectos"
              className={styles.hero__btn}
            >
              Ver proyectos
            </Button>

            <span className={cn(styles.hero__since, "body-sm")}>
              Desde {siteConfig.foundingYear}
            </span>
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
