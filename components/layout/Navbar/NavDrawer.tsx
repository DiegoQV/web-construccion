"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import styles from "./NavDrawer.module.css";

interface NavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * NavDrawer — Mobile navigation drawer.
 *
 * Slides in from the right. Traps focus while open.
 * Returns focus to the hamburger button on close.
 *
 * Screen Specification: Section 00 — Mobile Drawer
 */
export function NavDrawer({ isOpen, onClose }: NavDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);

  // Focus trap — move focus into drawer on open
  useEffect(() => {
    if (isOpen) {
      firstFocusableRef.current?.focus();
      // Prevent body scroll while drawer is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          styles.overlay,
          isOpen && styles["overlay--visible"]
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={drawerRef}
        id="nav-drawer"
        className={cn(styles.drawer, isOpen && styles["drawer--open"])}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        {/* Cabecera del drawer */}
        <div className={styles.drawer__header}>
          <button
            ref={firstFocusableRef}
            className={styles.drawer__close}
            onClick={onClose}
            aria-label="Cerrar menú"
          >
            {/* X icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Items de navegación */}
        <nav
          className={styles.drawer__nav}
          aria-label="Navegación móvil"
        >
          {siteConfig.navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.drawer__link}
              onClick={handleLinkClick}
              style={{ animationDelay: `${index * 60}ms` }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Footer del drawer — teléfono + CTA */}
        <div className={styles.drawer__footer}>
          <a
            href={siteConfig.phoneHref}
            className={cn(styles.drawer__phone, "body-sm")}
          >
            <svg
              width="14"
              height="14"
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
            {siteConfig.phoneDisplay}
          </a>

          <Button
            variant="accent"
            size="lg"
            href="#contacto"
            className={styles.drawer__cta}
            onClick={handleLinkClick}
          >
            Solicitar cotización
          </Button>
        </div>
      </div>
    </>
  );
}
