import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

const STEPS = [
  {
    number: "01",
    name: "Discover",
    description: "Understand your home, your lifestyle, your taste, and your vision.",
  },
  {
    number: "02",
    name: "Imagine",
    description: "Develop a cohesive design direction built around how you live.",
  },
  {
    number: "03",
    name: "Create",
    description: "Bring the vision to life through furnishings, materials, and craftsmanship.",
  },
  {
    number: "04",
    name: "Enjoy",
    description: "Step back, relax, and enjoy a home that finally feels finished.",
  },
];

export default function Process() {
  return (
    <section className="bg-ink text-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-28 sm:px-10 sm:py-36">
        <SectionHeading
          eyebrow="The Candlewood Process"
          title="We handle the complexity, so you can enjoy the result."
          tone="cream"
          className="mb-20"
        />

        <div className="grid gap-y-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
          {STEPS.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1} className="border-t border-cream/20 pt-8">
              <span className="font-display text-sm text-cream/65">{step.number}</span>
              <h3 className="font-display mt-4 text-2xl sm:text-3xl">{step.name}</h3>
              <p className="mt-4 max-w-[22ch] text-[15px] leading-relaxed text-cream/70">
                {step.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
