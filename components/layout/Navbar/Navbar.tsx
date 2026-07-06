"use client";

import Link from "next/link";
import { useState } from "react";
import { useNavbarState } from "@/hooks/useNavbarState";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/Button";
import { NavDrawer } from "./NavDrawer";
import { cn } from "@/lib/utils";
import styles from "./Navbar.module.css";

/**
 * Navbar — Fixed navigation header.
 *
 * Behavior:
 * - Transparent over the hero (scroll = 0)
 * - Solid with blur when scrolled > 80px
 * - Collapses to hamburger on tablet/mobile
 *
 * Screen Specification: Section 00
 */
export function Navbar() {
  const { isScrolled } = useNavbarState(80);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          styles.navbar,
          isScrolled && styles["navbar--scrolled"]
        )}
        role="banner"
      >
        <div className={styles.navbar__inner}>
          {/* ── Logo / Nombre ─────────────────────────────── */}
          <Link
            href="/"
            className={styles.navbar__logo}
            aria-label={`${siteConfig.businessName} — Inicio`}
          >
            <span className={styles.navbar__logo_name}>
              {siteConfig.ownerName}
            </span>
            <span className={styles.navbar__logo_role} aria-hidden="true">
              Maestro Constructor
            </span>
          </Link>

          {/* ── Navegación desktop ────────────────────────── */}
          <nav
            className={styles.navbar__nav}
            aria-label="Navegación principal"
          >
            {siteConfig.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(styles.navbar__link, "nav-item")}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* ── Acciones desktop ──────────────────────────── */}
          <div className={styles.navbar__actions}>
            {/* Teléfono — visible solo en desktop */}
            <a
              href={siteConfig.phoneHref}
              className={cn(styles.navbar__phone, "body-sm")}
              aria-label={`Llamar al ${siteConfig.phoneDisplay}`}
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

            {/* CTA compacto */}
            <Button
              variant="outline"
              size="sm"
              href="#contacto"
              className={cn(
                styles.navbar__cta,
                !isScrolled && styles["navbar__cta--inverse"]
              )}
            >
              Cotizar
            </Button>

            {/* Hamburger — visible solo en tablet/mobile */}
            <button
              className={styles.navbar__hamburger}
              onClick={() => setDrawerOpen(true)}
              aria-label="Abrir menú de navegación"
              aria-expanded={drawerOpen}
              aria-controls="nav-drawer"
            >
              <span className={styles.hamburger__line} aria-hidden="true" />
              <span className={styles.hamburger__line} aria-hidden="true" />
              <span className={styles.hamburger__line} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Drawer mobile ─────────────────────────────────── */}
      <NavDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
}
