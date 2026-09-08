import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import EditorialImage from "@/components/media/EditorialImage";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <div className="absolute inset-0 opacity-40">
        <EditorialImage
          alt="Soft morning light in a bright New England living room"
          mood="interior"
          tone="ink"
          seed="final-cta"
          aspect="aspect-auto h-full"
          reveal={false}
          className="h-full"
        />
      </div>
      <div className="relative mx-auto max-w-[1000px] px-6 py-32 text-center sm:px-10 sm:py-40">
        <FadeIn>
          <h2 className="font-display text-4xl leading-[1.1] sm:text-5xl md:text-6xl">
            Your home should be a place to exhale.
          </h2>
          <p className="mx-auto mt-8 max-w-md text-[15px] leading-relaxed text-cream/75 sm:text-base">
            Candlewood Interiors creates thoughtful, beautiful homes designed
            to make everyday life feel a little more effortless.
          </p>
          <div className="mt-10 flex justify-center">
            <Button href="/contact" variant="primary" className="!bg-cream !text-ink hover:!bg-cream/85">
              Begin Your Journey
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
