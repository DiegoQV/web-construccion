"use client";

import { MessageCircle } from "lucide-react";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site-config";
import styles from "./FloatingCTA.module.css";

/**
 * FloatingCTA — Acceso fijo y directo a WhatsApp.
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
      <MessageCircle aria-hidden="true" size={22} strokeWidth={1.6} />
      <span className={styles.label}>WhatsApp</span>
    </a>
  );
}
