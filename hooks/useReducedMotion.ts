"use client";

import { useEffect, useState } from "react";

/**
 * Detects if the user has requested reduced motion via system preferences.
 * Returns true when animations should be disabled or minimized.
 *
 * Initializes synchronously from matchMedia to avoid a flash of animation
 * on first render, then subscribes to changes.
 */
export function useReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState<boolean>(() => {
    // Safe SSR fallback — window is not available on the server
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReduced(event.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return prefersReduced;
}
