import {
  testimonials,
  testimonialsContent,
} from "@/data/testimonials";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TestimonialSlider } from "./TestimonialSlider";
import styles from "./Testimonials.module.css";

export function Testimonials() {
  return (
    <section
      className={styles.testimonials}
      aria-labelledby="testimonials-title"
    >
      <div className={styles.testimonials__inner}>
        <header className={styles.testimonials__header}>
          <ScrollReveal className={styles.testimonials__heading}>
            <SectionLabel>{testimonialsContent.eyebrow}</SectionLabel>
            <h2 id="testimonials-title" className="display-md">
              {testimonialsContent.title}
            </h2>
          </ScrollReveal>
        </header>

        <ScrollReveal threshold={0.15}>
          <TestimonialSlider testimonials={testimonials} />
        </ScrollReveal>
      </div>
    </section>
  );
}
