import { ArrowUpRight, ArrowUp, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import styles from "./Footer.module.css";

const footerLinks = [
  { label: "Obras realizadas", href: "#proyectos" },
  { label: "Conoce al maestro", href: "#el-maestro" },
  { label: "Proceso de trabajo", href: "#proceso" },
  { label: "Preguntas frecuentes", href: "#preguntas" },
] as const;

export function Footer({ homePath = "" }: { homePath?: string }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} aria-label="Información y contacto">
      <div className={styles.footer__inner}>
        <div className={styles.footer__top}>
          <div className={styles.footer__brand}>
            <a href={`${homePath}#main-content`} className={styles.footer__identity} aria-label={`${siteConfig.ownerName} — volver al inicio`}>
              <span className={styles.footer__name}>{siteConfig.ownerName}</span>
              <span className={styles.footer__role}>{siteConfig.businessName}</span>
            </a>
            <p className={styles.footer__description}>
              Construcción, remodelación y acabados de viviendas.
              Experiencia y cuidado en cada detalle, desde {siteConfig.foundingYear}.
            </p>
            <span className={styles.footer__signature}>Tu proyecto, de principio a fin.</span>
          </div>

          <nav className={styles.footer__nav} aria-labelledby="footer-nav-title">
            <h2 id="footer-nav-title" className={styles.footer__heading}>Explora</h2>
            <ul>
              {footerLinks.map(item => <li key={item.href}><a href={`${homePath}${item.href}`}>{item.label}</a></li>)}
            </ul>
          </nav>

          <div className={styles.footer__contact}>
            <h2 className={styles.footer__heading}>Hablemos de tu proyecto</h2>
            <p className={styles.footer__location}><MapPin size={17} aria-hidden="true" /><span>{siteConfig.city}, {siteConfig.region}<br />{siteConfig.country}</span></p>
            <a href={siteConfig.phoneHref} className={styles.footer__phone}><Phone size={16} aria-hidden="true" />{siteConfig.phoneDisplay}</a>
            <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" className={styles.footer__whatsapp}>Escribir por WhatsApp <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        </div>

        <div className={styles.footer__bottom}>
          <p>© {currentYear} {siteConfig.ownerName}. Todos los derechos reservados.</p>
          <Link href="/privacidad" className={styles.footer__legal}>Política de privacidad</Link>
          <a href="#main-content" className={styles.footer__back}>Volver arriba <ArrowUp size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
