"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useCountUp } from "@/hooks/useCountUp";

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

/**
 * AnimatedNumber — Counts up from 0 to the target value when scrolled into view.
 * Used in the Credentials section for statistics.
 * Respects prefers-reduced-motion via useCountUp.
 *
 * @example
 * <AnimatedNumber value={20} suffix="+" />
 */
export function AnimatedNumber({
  value,
  suffix = "",
  duration = 2000,
  className,
}: AnimatedNumberProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLSpanElement>({
    threshold: 0.5,
    once: true,
  });

  const count = useCountUp({ target: value, duration, isActive: isVisible });

  return (
    <span ref={ref} className={className} aria-label={`${value}${suffix}`}>
      {count}
      {suffix}
    </span>
  );
}
