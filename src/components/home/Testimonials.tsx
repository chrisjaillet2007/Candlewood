import { TESTIMONIALS } from "@/data/testimonials";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

export default function Testimonials() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-28 sm:px-10 sm:py-36">
        <SectionHeading
          eyebrow="In Their Words"
          title="What it feels like to work with us."
          align="center"
          className="mb-16"
        />

        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.context} delay={i * 0.08} className="text-center">
              <p className="font-display text-xl italic leading-snug sm:text-2xl">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="text-eyebrow mt-6 text-ink-soft">{t.context}</p>
            </FadeIn>
          ))}
        </div>

        <p className="mt-16 text-center text-xs text-stone">
          Representative client sentiment — full testimonials from completed
          Candlewood projects will be added here as they’re gathered.
        </p>
      </div>
    </section>
  );
}
