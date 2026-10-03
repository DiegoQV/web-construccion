"use client";

import { useSyncExternalStore } from "react";

/**
 * Detects if the user has requested reduced motion via system preferences.
 * Returns true when animations should be disabled or minimized.
 *
 * Uses the same snapshot on the server and during hydration, then subscribes
 * to system preference changes without changing the initial markup.
 */
export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}

function subscribe(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
