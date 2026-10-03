import type { ButtonVariant, ButtonSize } from "@/types/common";
import { cn } from "@/lib/utils";
import styles from "./Button.module.css";

interface ButtonAppearance {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

export type ButtonProps = ButtonAppearance & (
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
);

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

  if (href !== undefined) {
    return (
      <a href={href} className={classes} {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props as React.ButtonHTMLAttributes<HTMLButtonElement>}>
      {children}
    </button>
  );
}
