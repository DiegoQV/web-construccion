// =============================================================================
// UTILITIES
// Pure functions with no side effects.
// ============================================================================= */

/**
 * Joins class names, filtering out falsy values.
 * Lightweight alternative to clsx for this project's needs.
 *
 * @example
 * cn('base-class', isActive && 'active', undefined) // 'base-class active'
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Formats a phone number for display.
 * Input: "+593991234567"
 * Output: "+593 99 123 4567"
 */
export function formatPhone(raw: string): string {
  return raw.replace(/(\+\d{3})(\d{2})(\d{3})(\d{4})/, "$1 $2 $3 $4");
}

/**
 * Clamps a number between min and max.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Linear interpolation between two values.
 */
export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}

/**
 * Maps a value from one range to another.
 */
export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  return ((value - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
}

/**
 * Checks if code is running in the browser.
 */
export const isBrowser = typeof window !== "undefined";

/**
 * Checks if the user prefers reduced motion.
 */
export function prefersReducedMotion(): boolean {
  if (!isBrowser) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
