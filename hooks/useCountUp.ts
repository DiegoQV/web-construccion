"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

interface UseCountUpOptions {
  /** Target number to count up to */
  target: number;
  /** Animation duration in ms. Default: 2000 */
  duration?: number;
  /** Whether the count should start. Controlled by intersection observer. */
  isActive: boolean;
}

/**
 * Animates a number from 0 to the target value.
 * Respects prefers-reduced-motion — shows the final value immediately if set.
 *
 * Uses requestAnimationFrame for smooth, performant animation.
 */
export function useCountUp({
  target,
  duration = 2000,
  isActive,
}: UseCountUpOptions): number {
  const [count, setCount] = useState(0);
  const prefersReduced = useReducedMotion();
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isActive) return;

    // Show final value immediately for reduced motion preference
    if (prefersReduced) {
      // Defer to avoid setState-in-effect lint error
      const id = requestAnimationFrame(() => setCount(target));
      return () => cancelAnimationFrame(id);
    }

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic — decelerates toward the end
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startTimeRef.current = null;
    };
  }, [isActive, target, duration, prefersReduced]);

  return count;
}
