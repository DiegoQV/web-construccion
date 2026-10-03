"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/site-config";
import styles from "./FloatingCTA.module.css";

function WhatsAppLogo() {
  return (
    <svg
      aria-hidden="true"
      className={styles.icon}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16 3C8.82 3 3 8.64 3 15.6c0 2.45.72 4.83 2.08 6.86L3.36 29 10.1 27.3A13.23 13.23 0 0 0 16 28.65c7.18 0 13-5.65 13-12.6C29 8.64 23.18 3 16 3Zm0 23.35c-1.82 0-3.6-.48-5.16-1.4l-.37-.21-4 .99 1.06-3.83-.24-.39a10.04 10.04 0 0 1-1.6-5.46C5.7 10.36 10.31 5.7 16 5.7c5.69 0 10.31 4.66 10.31 10.35 0 5.68-4.62 10.3-10.31 10.3Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.72 18.63c-.31-.16-1.84-.91-2.13-1.01-.28-.11-.49-.16-.7.16-.2.31-.8 1.01-.98 1.22-.18.21-.36.24-.67.08-.31-.16-1.31-.49-2.5-1.55a9.35 9.35 0 0 1-1.73-2.16c-.18-.32-.02-.49.14-.65.14-.14.31-.36.46-.54.16-.18.21-.31.31-.52.11-.21.06-.39-.02-.55-.08-.15-.7-1.68-.96-2.3-.25-.61-.51-.52-.7-.53h-.59c-.21 0-.55.08-.83.39-.29.31-1.09 1.06-1.09 2.59 0 1.52 1.11 3 1.27 3.2.15.21 2.18 3.34 5.3 4.68.74.32 1.32.51 1.77.65.74.24 1.42.2 1.95.12.6-.09 1.84-.75 2.1-1.47.26-.73.26-1.35.18-1.48-.08-.13-.28-.21-.59-.36Z"
      />
    </svg>
  );
}

/**
 * FloatingCTA — Acceso fijo y directo a WhatsApp.
 * Circular WhatsApp logo, available on mobile and desktop.
 */
export function FloatingCTA() {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [isObstructing, setIsObstructing] = useState(false);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 767px)");
    let frame: number | null = null;

    const checkOverlap = () => {
      frame = null;
      const button = buttonRef.current;
      if (!button) return;
      if (!mobile.matches || document.activeElement === button) {
        setIsObstructing(false);
        return;
      }

      // Keep the preferred position; yield space to controls underneath it.
      const floating = button.getBoundingClientRect();
      const controls = document.querySelectorAll<HTMLElement>(
        "main a, main button, main summary, main video, footer a, footer button"
      );
      const overlaps = Array.from(controls).some((control) => {
        if (control === button || control.closest('[aria-hidden="true"]')) return false;
        if (!control.getClientRects().length) return false;
        const rect = control.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0 &&
          rect.left < floating.right + 8 && rect.right > floating.left - 8 &&
          rect.top < floating.bottom + 8 && rect.bottom > floating.top - 8;
      });
      setIsObstructing(overlaps);
    };

    const scheduleCheck = () => {
      if (frame === null) frame = requestAnimationFrame(checkOverlap);
    };

    const resizeObserver = new ResizeObserver(scheduleCheck);
    resizeObserver.observe(document.body);
    window.addEventListener("scroll", scheduleCheck, { passive: true, capture: true });
    window.addEventListener("resize", scheduleCheck);
    document.addEventListener("focusin", scheduleCheck);
    document.addEventListener("focusout", scheduleCheck);
    mobile.addEventListener("change", scheduleCheck);
    scheduleCheck();

    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", scheduleCheck, true);
      window.removeEventListener("resize", scheduleCheck);
      document.removeEventListener("focusin", scheduleCheck);
      document.removeEventListener("focusout", scheduleCheck);
      mobile.removeEventListener("change", scheduleCheck);
    };
  }, []);

  return (
    <a
      ref={buttonRef}
      href={siteConfig.whatsappHref}
      className={`${styles.button} ${isObstructing ? styles["button--hidden"] : ""}`}
      aria-hidden={isObstructing || undefined}
      tabIndex={isObstructing ? -1 : undefined}
      title="Escribir por WhatsApp"
      aria-label={`Contactar por WhatsApp: ${siteConfig.phoneDisplay}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsAppLogo />
    </a>
  );
}
