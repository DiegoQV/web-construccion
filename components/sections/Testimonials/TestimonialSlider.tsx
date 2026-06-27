"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type UIEvent,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "@/types/testimonial";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { TestimonialCard } from "./TestimonialCard";
import styles from "./Testimonials.module.css";

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export function TestimonialSlider({
  testimonials,
}: TestimonialSliderProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const goToSlide = useCallback(
    (requestedIndex: number) => {
      const viewport = viewportRef.current;
      if (!viewport) return;

      const index =
        (requestedIndex + testimonials.length) % testimonials.length;

      viewport.scrollTo({
        left: index * viewport.clientWidth,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
      setActiveIndex(index);
    },
    [prefersReducedMotion, testimonials.length]
  );

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    const viewport = event.currentTarget;
    if (!viewport.clientWidth) return;

    const index = Math.round(viewport.scrollLeft / viewport.clientWidth);
    if (index !== activeIndex && index < testimonials.length) {
      setActiveIndex(index);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToSlide(activeIndex - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToSlide(activeIndex + 1);
    }
  };

  useEffect(() => {
    const alignActiveSlide = () => {
      const viewport = viewportRef.current;
      if (!viewport) return;
      viewport.scrollTo({ left: activeIndex * viewport.clientWidth });
    };

    window.addEventListener("resize", alignActiveSlide);
    return () => window.removeEventListener("resize", alignActiveSlide);
  }, [activeIndex]);

  return (
    <div className={styles.slider}>
      <div
        ref={viewportRef}
        className={styles.slider__viewport}
        role="region"
        aria-roledescription="carrusel"
        aria-label="Testimonios de clientes"
        tabIndex={0}
        onScroll={handleScroll}
        onKeyDown={handleKeyDown}
      >
        <div className={styles.slider__track}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={styles.slider__slide}
              role="group"
              aria-roledescription="diapositiva"
              aria-label={`${index + 1} de ${testimonials.length}`}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.slider__controls}>
        <div className={styles.slider__arrows}>
          <button
            type="button"
            className={styles.slider__arrow}
            aria-label="Ver testimonio anterior"
            onClick={() => goToSlide(activeIndex - 1)}
          >
            <ChevronLeft aria-hidden="true" size={20} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            className={styles.slider__arrow}
            aria-label="Ver testimonio siguiente"
            onClick={() => goToSlide(activeIndex + 1)}
          >
            <ChevronRight aria-hidden="true" size={20} strokeWidth={1.5} />
          </button>
        </div>

        <div
          className={styles.slider__indicators}
          aria-label="Seleccionar testimonio"
        >
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              className={styles.slider__indicator}
              aria-label={`Ir al testimonio ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <span className={styles.slider__counter} aria-hidden="true">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(testimonials.length).padStart(2, "0")}
        </span>
      </div>

      <p className="sr-only" aria-live="polite">
        Mostrando testimonio {activeIndex + 1} de {testimonials.length}
      </p>
    </div>
  );
}
