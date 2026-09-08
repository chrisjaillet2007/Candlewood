import FadeIn from "@/components/ui/FadeIn";
import EditorialImage from "@/components/media/EditorialImage";

export default function NewEngland() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 sm:px-10 sm:py-36">
      <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <FadeIn className="lg:col-span-6">
          <EditorialImage
            alt="A traditional New England shingle-style home exterior in daylight"
            mood="exterior"
            tone="ivory"
            seed="new-england-exterior"
            aspect="aspect-[5/4]"
          />
        </FadeIn>

        <FadeIn delay={0.1} className="lg:col-span-6">
          <p className="text-eyebrow mb-6 text-ink-soft">Rooted Here</p>
          <h2 className="font-display text-4xl leading-[1.1] sm:text-5xl">
            Designed for the way New England lives.
          </h2>
          <div className="mt-6 space-y-5 max-w-lg text-[15px] leading-relaxed text-ink-soft sm:text-base">
            <p>
              We grew up in Andover, and we’ve spent our careers designing
              homes across Eastern Massachusetts — from historic colonials
              to new construction in Dover, Wellesley, Weston, and the towns
              around Boston.
            </p>
            <p>
              That’s given us a particular fluency: with the way light moves
              through an old New England window, the way a mudroom needs to
              survive a real winter, and the quiet, considered style that
              feels right in this part of the country.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
