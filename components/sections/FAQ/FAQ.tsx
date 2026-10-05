import { faqItems } from "@/data/faq";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FAQItem } from "./FAQItem";
import styles from "./FAQ.module.css";

export function FAQ() {
  return (
    <section id="preguntas" className={styles.faq} aria-labelledby="faq-title">
      <div className={styles.inner}>
        <ScrollReveal as="header">
          <SectionLabel>Antes de comenzar</SectionLabel>
          <h2 id="faq-title" className="display-md">Tus dudas también son parte del proyecto.</h2>
          <p>Respuestas para preparar la primera conversación y saber qué acordar antes de iniciar una obra.</p>
        </ScrollReveal>
        <ScrollReveal variant="fadeIn" delay={120}>{faqItems.map(item => <FAQItem key={item.id} item={item} />)}</ScrollReveal>
      </div>
    </section>
  );
}
