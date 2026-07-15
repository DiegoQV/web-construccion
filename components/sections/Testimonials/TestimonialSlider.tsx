"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FocusEvent,
  type KeyboardEvent,
  type PointerEvent,
  type UIEvent,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "@/types/testimonial";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
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
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [viewportHeight, setViewportHeight] = useState<number>();
  const prefersReducedMotion = useReducedMotion();
  const [sliderRef, isSliderVisible] =
    useIntersectionObserver<HTMLDivElement>({
      threshold: 0.6,
      once: false,
    });

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

  useEffect(() => {
    const viewport = viewportRef.current;
    const activeSlide = slideRefs.current[activeIndex];
    if (!viewport || !activeSlide) return;

    const updateHeight = () => {
      const borderHeight = viewport.offsetHeight - viewport.clientHeight;
      const nextHeight = Math.ceil(
        activeSlide.getBoundingClientRect().height + borderHeight
      );
      setViewportHeight(nextHeight);
    };

    const animationFrame = window.requestAnimationFrame(updateHeight);
    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(activeSlide);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
    };
  }, [activeIndex]);

  useEffect(() => {
    if (
      prefersReducedMotion ||
      isPaused ||
      !isSliderVisible ||
      testimonials.length < 2
    ) {
      return;
    }

    const timer = window.setTimeout(() => {
      goToSlide(activeIndex + 1);
    }, 7000);

    return () => window.clearTimeout(timer);
  }, [
    activeIndex,
    goToSlide,
    isSliderVisible,
    isPaused,
    prefersReducedMotion,
    testimonials.length,
  ]);

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setIsPaused(false);
    }
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") {
      setIsPaused(false);
    }
  };

  return (
    <div
      ref={sliderRef}
      className={styles.slider}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={handleBlur}
    >
      <div
        ref={viewportRef}
        className={styles.slider__viewport}
        style={viewportHeight ? { height: `${viewportHeight}px` } : undefined}
        role="region"
        aria-roledescription="carrusel"
        aria-label="Testimonios de clientes"
        tabIndex={0}
        onScroll={handleScroll}
        onKeyDown={handleKeyDown}
        onPointerDown={() => setIsPaused(true)}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => setIsPaused(false)}
      >
        <div className={styles.slider__track}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={(node) => {
                slideRefs.current[index] = node;
              }}
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

      <div className={styles.slider__controls}>
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
