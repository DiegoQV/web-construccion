import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/data/site-config";
import styles from "./CTAFinal.module.css";

export function CTAFinal() {
  return (
    <section
      id="contacto"
      className={styles.contact}
      aria-labelledby="contact-title"
    >
      <div className={styles.contact__inner}>
        <ScrollReveal className={styles.contact__content}>
          <SectionLabel className={styles.contact__label}>
            Hablemos de tu proyecto
          </SectionLabel>

          <h2 id="contact-title" className={styles.contact__title}>
            Tu vivienda comienza con una conversación.
          </h2>

          <p className={styles.contact__description}>
            Cuéntanos qué deseas construir y coordinemos una primera
            conversación para conocer tu terreno, necesidades y presupuesto.
          </p>

          <div className={styles.contact__actions}>
            <Button
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="accent"
              size="lg"
              className={styles.contact__primary}
            >
              Escribir por WhatsApp
            </Button>

            <Button
              href={siteConfig.phoneHref}
              variant="outline"
              size="lg"
              className={styles.contact__secondary}
            >
              Llamar ahora
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal
          variant="fadeIn"
          delay={140}
          className={styles.contact__details}
        >
          <span className={styles.contact__detail_label}>Contacto directo</span>
          <a
            href={siteConfig.phoneHref}
            className={styles.contact__phone}
            aria-label={`Llamar al ${siteConfig.phoneDisplay}`}
          >
            {siteConfig.phoneDisplay}
          </a>

          <span className={styles.contact__rule} aria-hidden="true" />

          <address className={styles.contact__location}>
            {siteConfig.city}
            <br />
            {siteConfig.region}, {siteConfig.country}
          </address>

          <p className={styles.contact__owner}>
            <span>{siteConfig.ownerName}</span>
            Maestro Constructor
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
