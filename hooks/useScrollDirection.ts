"use client";

import { useEffect, useState } from "react";

type ScrollDirection = "up" | "down" | "idle";

/**
 * Detects the current scroll direction.
 * Used by the FloatingCTA button to reduce opacity when scrolling down.
 *
 * @param threshold - Minimum scroll delta to register a direction change. Default: 5
 */
export function useScrollDirection(threshold = 5): ScrollDirection {
  const [direction, setDirection] = useState<ScrollDirection>("idle");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      if (Math.abs(delta) < threshold) return;

      setDirection(delta > 0 ? "down" : "up");
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, threshold]);

  return direction;
}
