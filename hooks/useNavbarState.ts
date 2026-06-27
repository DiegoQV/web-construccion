"use client";

import { useEffect, useState } from "react";

interface NavbarState {
  /** True when the page has been scrolled past the threshold */
  isScrolled: boolean;
  /** Current scroll position in pixels */
  scrollY: number;
}

/**
 * Tracks scroll position to manage navbar appearance.
 * The navbar transitions from transparent to solid at the threshold.
 *
 * @param threshold - Scroll distance in px before navbar becomes solid. Default: 80
 */
export function useNavbarState(threshold = 80): NavbarState {
  const [state, setState] = useState<NavbarState>({
    isScrolled: false,
    scrollY: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setState({
        isScrolled: currentScrollY > threshold,
        scrollY: currentScrollY,
      });
    };

    // Set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return state;
}
