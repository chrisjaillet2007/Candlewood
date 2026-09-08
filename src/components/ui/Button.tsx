import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const base =
  "group inline-flex items-center gap-3 text-[13px] tracking-[0.12em] uppercase transition-colors duration-300";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-ink text-cream px-7 py-3.5 hover:bg-ink-deep",
  secondary:
    "border border-ink/30 text-ink px-7 py-3.5 hover:border-ink hover:bg-ink hover:text-cream",
  ghost: "text-ink px-0 py-1 border-b border-ink/30 hover:border-ink",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      <span>{children}</span>
      <span
        aria-hidden
        className="inline-block transition-transform duration-300 group-hover:translate-x-1"
      >
        &rarr;
      </span>
    </Link>
  );
}
