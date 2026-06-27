import { Star } from "lucide-react";
import type { Testimonial } from "@/types/testimonial";
import styles from "./Testimonials.module.css";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className={styles.testimonial}>
      <span className={styles.testimonial__mark} aria-hidden="true">
        &ldquo;
      </span>

      <div
        className={styles.testimonial__rating}
        aria-label={`${testimonial.rating} de 5 estrellas`}
      >
        {Array.from({ length: testimonial.rating }, (_, index) => (
          <Star
            key={index}
            aria-hidden="true"
            size={14}
            strokeWidth={1.3}
            fill="currentColor"
          />
        ))}
      </div>

      <blockquote className={styles.testimonial__quote}>
        <p>{testimonial.quote}</p>
      </blockquote>

      <figcaption className={styles.testimonial__author}>
        <span className={styles.testimonial__divider} aria-hidden="true" />
        <cite>{testimonial.clientName}</cite>
        <div className={styles.testimonial__meta}>
          <span className={styles.testimonial__project}>
            {testimonial.projectType}
          </span>
          <span className={styles.testimonial__location}>
            {testimonial.location}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}
