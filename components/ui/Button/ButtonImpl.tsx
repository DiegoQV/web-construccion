import type { ButtonVariant, ButtonSize } from "@/types/common";
import { cn } from "@/lib/utils";
import styles from "./Button.module.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Renders as an anchor tag when provided */
  href?: string;
  children: React.ReactNode;
}

/**
 * Button — Design System component
 *
 * Variants defined in Design System:
 * - primary:  Dark fill, full contrast. Max one visible per viewport.
 * - outline:  Transparent with dark border. Fills on hover.
 * - accent:   Bronze/gold fill. Used exclusively for the main CTA.
 * - ghost:    Text-only with arrow suffix. For secondary navigation.
 * - icon:     Square icon button for UI actions (close, arrows).
 */
export function Button({
  variant = "outline",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
