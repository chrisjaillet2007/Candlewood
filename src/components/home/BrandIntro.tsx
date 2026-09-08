import FadeIn from "@/components/ui/FadeIn";
import EditorialImage from "@/components/media/EditorialImage";

export default function BrandIntro() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 sm:px-10 sm:py-36">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <FadeIn>
            <p className="text-eyebrow mb-6 text-ink-soft">Our Philosophy</p>
            <h2 className="font-display text-4xl leading-[1.1] sm:text-5xl">
              Beautiful homes should make life feel easier — not more
              complicated.
            </h2>
          </FadeIn>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <FadeIn delay={0.15} className="max-w-lg space-y-6 text-[15px] leading-relaxed text-ink-soft sm:text-base">
            <p>
              Candlewood Interiors creates thoughtful, elevated interiors
              designed around the way people actually live — not the way a
              showroom looks in a photograph.
            </p>
            <p>
              We believe good design should feel inevitable once it’s
              finished: warm rather than precious, considered rather than
              trendy, and built to hold up to a family’s real, everyday life
              in a New England home.
            </p>
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={0.2} className="mt-16">
        <EditorialImage
          alt="A bright, sunlit living room with dark hardwood floors and cream textiles"
          mood="interior"
          tone="cream"
          seed="brand-intro-living"
          label="Plate 01 — Living Room"
          aspect="aspect-[16/9]"
        />
      </FadeIn>
    </section>
  );
}
