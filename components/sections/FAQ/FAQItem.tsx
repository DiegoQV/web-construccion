import type { FaqItem } from "@/data/faq";
import styles from "./FAQ.module.css";

export function FAQItem({ item }: { item: FaqItem }) {
  return <details className={styles.item}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>;
}
