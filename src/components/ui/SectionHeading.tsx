import type { ReactNode } from "react";
import FadeIn from "./FadeIn";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "ink",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "ink" | "cream";
  className?: string;
}) {
  const textTone = tone === "ink" ? "text-ink" : "text-cream";
  const mutedTone = tone === "ink" ? "text-ink-soft" : "text-cream/75";
  return (
    <FadeIn
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <p className={`text-eyebrow mb-5 ${mutedTone}`}>{eyebrow}</p>
      )}
      <h2 className={`font-display text-4xl sm:text-5xl leading-[1.08] ${textTone}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-6 text-[15px] sm:text-base leading-relaxed ${mutedTone}`}>
          {description}
        </p>
      )}
    </FadeIn>
  );
}
