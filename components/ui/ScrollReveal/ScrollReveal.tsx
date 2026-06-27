"use client";

import React from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";
import styles from "./ScrollReveal.module.css";

type RevealVariant = "fadeInUp" | "fadeIn";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  threshold?: number;
  className?: string;
  as?: React.ElementType;
}

/**
 * ScrollReveal — Wraps any content and animates it into view on scroll.
 * Respects prefers-reduced-motion: skips animation entirely if set.
 *
 * @example
 * <ScrollReveal variant="fadeInUp" delay={200}>
 *   <h2>Título de sección</h2>
 * </ScrollReveal>
 */
export function ScrollReveal({
  children,
  variant = "fadeInUp",
  delay = 0,
  threshold = 0.15,
  className,
  as: Tag = "div",
}: ScrollRevealProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold,
    once: true,
  });
  const prefersReduced = useReducedMotion();

  // Skip animation entirely for users who prefer reduced motion
  if (prefersReduced) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag
      ref={ref}
      className={cn(
        styles.reveal,
        styles[`reveal--${variant}`],
        isVisible && styles["reveal--visible"],
        className
      )}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
