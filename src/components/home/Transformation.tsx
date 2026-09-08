import FadeIn from "@/components/ui/FadeIn";
import Line from "@/components/ui/Line";

const BEFORE = ["Overwhelmed", "Unsure where to begin", "Worried about costly mistakes"];
const AFTER = ["At ease", "Confident in every decision", "Proud to be home"];

export default function Transformation() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-28 sm:px-10 sm:py-36">
        <FadeIn className="max-w-2xl">
          <p className="text-eyebrow mb-6 text-ink-soft">The Transformation</p>
          <h2 className="font-display text-4xl leading-[1.1] sm:text-5xl">
            From overwhelmed to at ease.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-ink-soft sm:text-base">
            Every home project starts with a hundred small decisions and one
            big fear: making the wrong one. Our job is to manage the
            complexity so you can enjoy the experience rather than stress
            over it.
          </p>
        </FadeIn>

        <div className="mt-20 grid gap-10 sm:grid-cols-2">
          <FadeIn delay={0.05} className="border border-ink/10 bg-cream/60 p-10 sm:p-12">
            <p className="text-eyebrow mb-8 text-stone">Before Candlewood</p>
            <ul className="space-y-5">
              {BEFORE.map((item) => (
                <li key={item} className="font-display text-xl italic text-ink-soft sm:text-2xl">
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.15} className="border border-ink/10 bg-ink p-10 text-cream sm:p-12">
            <p className="text-eyebrow mb-8 text-cream/65">After Candlewood</p>
            <ul className="space-y-5">
              {AFTER.map((item) => (
                <li key={item} className="font-display text-xl italic sm:text-2xl">
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <FadeIn delay={0.1} className="mt-16">
          <Line />
        </FadeIn>
      </div>
    </section>
  );
}
