"use client";

import { useScrollDirection } from "@/hooks/useScrollDirection";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site-config";
import styles from "./FloatingCTA.module.css";

/**
 * FloatingCTA — Fixed phone button visible only on mobile.
 * Becomes semi-transparent when scrolling down (non-invasive).
 * Positioned bottom-right, z-index 100.
 */
export function FloatingCTA() {
  const direction = useScrollDirection();

  return (
    <a
      href={siteConfig.whatsappHref}
      className={cn(
        styles.button,
        direction === "down" && styles["button--faded"]
      )}
      aria-label={`Contactar por WhatsApp: ${siteConfig.phoneDisplay}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Phone icon — inline SVG to avoid icon library dependency at this stage */}
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
      </svg>
    </a>
  );
}
