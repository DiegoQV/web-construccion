"use client";

import { Star } from "lucide-react";
import { useState } from "react";
import type { Testimonial } from "@/types/testimonial";
import styles from "./Testimonials.module.css";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const [expanded, setExpanded] = useState(false);
  const sentences = testimonial.quote.match(/[^.!?]+[.!?]+(?:\s|$)/g);
  const excerpt = sentences?.slice(0, 2).join("").trim() || testimonial.quote;
  const canExpand = excerpt.length < testimonial.quote.length;
  return (
    <figure className={styles.testimonial}>
      <span className={styles.testimonial__mark} aria-hidden="true">
        &ldquo;
      </span>

      {testimonial.rating && (
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
      )}

      <blockquote className={styles.testimonial__quote}>
        <p id={`quote-${testimonial.id}`}>{expanded ? testimonial.quote : excerpt}</p>
        {canExpand && <button type="button" className={styles.testimonial__read} aria-expanded={expanded} aria-controls={`quote-${testimonial.id}`} onClick={() => setExpanded(value => !value)}>{expanded ? "Mostrar menos" : "Leer testimonio completo"}</button>}
      </blockquote>

      <figcaption className={styles.testimonial__author}>
        <span className={styles.testimonial__divider} aria-hidden="true" />
        <cite>{testimonial.clientName}</cite>
        <div className={styles.testimonial__meta}>
          <span className={styles.testimonial__project}>
            {testimonial.projectType}
          </span>
          {testimonial.location && (
            <span className={styles.testimonial__location}>
              {testimonial.location}
            </span>
          )}
        </div>
      </figcaption>
    </figure>
  );
}
