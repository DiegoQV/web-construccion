"use client";

import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverOptions {
  /** Fraction of the element visible before triggering. Default: 0.15 */
  threshold?: number;
  /** Root margin for early/late triggering. Default: "0px" */
  rootMargin?: string;
  /** If true, stops observing after first intersection. Default: true */
  once?: boolean;
}

/**
 * Observes when an element enters the viewport.
 * Used by ScrollReveal and AnimatedNumber components.
 *
 * @returns [ref, isVisible] — attach ref to the target element
 */
export function useIntersectionObserver<T extends HTMLElement = HTMLElement>(
  options: UseIntersectionObserverOptions = {}
): [React.RefObject<T | null>, boolean] {
  const { threshold = 0.15, rootMargin = "0px", once = true } = options;

  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Skip if already visible and once is true
    if (isVisible && once) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once, isVisible]);

  return [ref, isVisible];
}
