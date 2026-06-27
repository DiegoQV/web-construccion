import { Star } from "lucide-react";
import type { Testimonial } from "@/types/testimonial";
import styles from "./Testimonials.module.css";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const statusLabel =
    testimonial.status === "verified"
      ? "Testimonio verificado"
      : "Testimonio provisional";

  return (
    <figure className={styles.testimonial}>
      <span className={styles.testimonial__mark} aria-hidden="true">
        “
      </span>

      <div className={styles.testimonial__topline}>
        <span className={styles.testimonial__status}>{statusLabel}</span>
        <div
          className={styles.testimonial__rating}
          aria-label={`${testimonial.rating} de 5 estrellas`}
        >
          {Array.from({ length: testimonial.rating }, (_, index) => (
            <Star
              key={index}
              aria-hidden="true"
              size={13}
              strokeWidth={1.4}
              fill="currentColor"
            />
          ))}
        </div>
      </div>

      <blockquote className={styles.testimonial__quote}>
        <p>{testimonial.quote}</p>
      </blockquote>

      <figcaption className={styles.testimonial__author}>
        <cite>{testimonial.clientName}</cite>
        <div className={styles.testimonial__meta}>
          <span>{testimonial.projectType}</span>
          <span>{testimonial.location}</span>
        </div>
      </figcaption>
    </figure>
  );
}
