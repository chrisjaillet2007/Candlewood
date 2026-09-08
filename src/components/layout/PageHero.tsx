import type { ReactNode } from "react";
import FadeIn from "@/components/ui/FadeIn";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pt-40 pb-16 sm:px-10 sm:pt-48 sm:pb-20">
      <FadeIn className="max-w-3xl">
        <p className="text-eyebrow mb-6 text-ink-soft">{eyebrow}</p>
        <h1 className="font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-ink-soft sm:text-base">
            {description}
          </p>
        )}
      </FadeIn>
    </section>
  );
}
