import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import FadeIn from "@/components/ui/FadeIn";
import Line from "@/components/ui/Line";
import EditorialImage from "@/components/media/EditorialImage";
import FinalCta from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "How Candlewood Interiors takes the stress out of an interior design project, from first conversation to final styling.",
};

const STEPS = [
  {
    number: "01",
    name: "Discover",
    tagline: "We start by listening.",
    description:
      "Every project begins with an in-depth conversation about how you live: your family, your routines, the rooms that already work and the ones that don't. We walk your home together, and we ask about budget and timeline honestly and early, so there are no surprises later.",
  },
  {
    number: "02",
    name: "Imagine",
    tagline: "We build one cohesive direction.",
    description:
      "From that conversation, we develop a design concept — a palette, a material story, a furniture plan — presented clearly enough that you can say yes with confidence, or ask us to adjust before anything is ordered.",
  },
  {
    number: "03",
    name: "Create",
    tagline: "We manage every detail of execution.",
    description:
      "Once a direction is approved, we handle sourcing, ordering, trade coordination, and installation. This is where most of the stress in a design project usually lives, and where we do the most work on your behalf.",
  },
  {
    number: "04",
    name: "Enjoy",
    tagline: "You get to exhale.",
    description:
      "We install, style, and do a final walkthrough together — and then you get to simply live in the space, without a lingering list of unfinished decisions.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Process"
        title="A clear process for a project that can otherwise feel foggy."
        description="Interior design involves hundreds of decisions. Our process exists to make sure you only ever have to think about a few of them at a time."
      />

      <div className="mx-auto max-w-[1400px] px-6 pb-28 sm:px-10 sm:pb-36">
        {STEPS.map((step, i) => (
          <FadeIn key={step.number}>
            <div className="grid gap-8 py-16 sm:grid-cols-12 sm:gap-10 sm:py-20">
              <div className="sm:col-span-2">
                <span className="font-display text-2xl text-stone">{step.number}</span>
              </div>
              <div className="sm:col-span-4">
                <h2 className="font-display text-3xl leading-tight sm:text-4xl">{step.name}</h2>
                <p className="font-display mt-3 italic text-ink-soft">{step.tagline}</p>
              </div>
              <p className="text-[15px] leading-relaxed text-ink-soft sm:col-span-6 sm:text-base">
                {step.description}
              </p>
            </div>
            {i < STEPS.length - 1 && <Line />}
          </FadeIn>
        ))}
      </div>

      <div className="bg-ivory">
        <div className="mx-auto max-w-[1400px] px-6 py-28 sm:px-10 sm:py-36">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
            <FadeIn className="lg:col-span-6">
              <EditorialImage
                alt="A designer reviewing material samples with a client"
                mood="detail"
                tone="ivory"
                seed="process-materials"
                aspect="aspect-[5/4]"
              />
            </FadeIn>
            <FadeIn delay={0.1} className="lg:col-span-6">
              <p className="text-eyebrow mb-6 text-ink-soft">Why It Works</p>
              <h2 className="font-display text-4xl leading-[1.1] sm:text-5xl">
                Structure is what makes a project feel calm.
              </h2>
              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-ink-soft sm:text-base">
                Most of the anxiety in a design project comes from not
                knowing what happens next, or who’s responsible for it. Our
                process gives every decision a clear place and a clear
                owner — so you always know exactly where things stand.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>

      <FinalCta />
    </>
  );
}
