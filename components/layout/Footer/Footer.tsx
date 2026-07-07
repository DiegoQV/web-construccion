import { siteConfig } from "@/data/site-config";
import styles from "./Footer.module.css";

const footerLinks = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <div className={styles.footer__top}>
          <nav className={styles.footer__nav} aria-label="Navegación del pie">
            <ul>
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <p className={styles.footer__location}>
            {siteConfig.city}, {siteConfig.region} · Desde{" "}
            {siteConfig.foundingYear}
          </p>
        </div>

        <div className={styles.footer__bottom}>
          <p>
            © {currentYear} {siteConfig.ownerName}. Todos los derechos reservados.
          </p>
          <a href="#main-content" className={styles.footer__back}>
            Volver arriba <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
