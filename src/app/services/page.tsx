import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import { SERVICES } from "@/data/services";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import FinalCta from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service interior design for Eastern Massachusetts — whole-home design, kitchens and baths, new construction, styling, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="However much support your home needs."
        description="Every engagement starts as a conversation about what you actually need — a single room, a full renovation, or anything in between."
      />

      <div className="mx-auto max-w-[1400px] px-6 pb-28 sm:px-10 sm:pb-36">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.slug} delay={Math.min(i * 0.04, 0.3)}>
            <div className="grid gap-6 border-b border-ink/10 py-12 sm:grid-cols-[4rem_1fr_1fr] sm:gap-10 sm:py-14">
              <span className="font-display text-lg text-stone">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-display text-2xl leading-tight sm:text-3xl">
                {service.name}
              </h2>
              <p className="max-w-md text-[15px] leading-relaxed text-ink-soft">
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}

        <FadeIn delay={0.2} className="mt-16">
          <Button href="/contact">Begin Your Journey</Button>
        </FadeIn>
      </div>

      <FinalCta />
    </>
  );
}
