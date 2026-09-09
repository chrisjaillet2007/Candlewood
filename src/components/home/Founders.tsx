import EditorialImage from "@/components/media/EditorialImage";
import SectionHeading from "@/components/ui/SectionHeading";
import Line from "@/components/ui/Line";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { TEAM_PHOTOS } from "@/data/team";

export default function Founders() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 sm:px-10 sm:py-36">
      <SectionHeading
        eyebrow="The Founders"
        title="Two childhood friends from Andover, now designing homes together."
        description="Annmarie Jaillet and Lauren Savarese grew up together in Andover, Massachusetts, and built their own careers in interior design before joining forces to start Candlewood — bringing a shared design sensibility and a genuine friendship to every project."
        className="mb-16"
      />

      <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2">
        <FadeIn>
          <EditorialImage
            src={TEAM_PHOTOS.annmarie}
            alt="Portrait of Annmarie Jaillet, co-founder of Candlewood Interiors"
            mood="portrait"
            tone="sand"
            seed="founder-annmarie"
            aspect="aspect-[4/5]"
          />
          <Line className="my-6" />
          <h3 className="font-display text-2xl">Annmarie Jaillet</h3>
          <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink-soft">
            Annmarie brings a background steeped in classic New England
            architecture and a talent for making formal spaces feel
            approachable. She believes a well-designed room should work as
            hard as the family living in it.
          </p>
        </FadeIn>

        <FadeIn delay={0.12}>
          <EditorialImage
            src={TEAM_PHOTOS.lauren}
            alt="Portrait of Lauren Savarese, co-founder of Candlewood Interiors"
            mood="portrait"
            tone="ivory"
            seed="founder-lauren"
            aspect="aspect-[4/5]"
          />
          <Line className="my-6" />
          <h3 className="font-display text-2xl">Lauren Savarese</h3>
          <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink-soft">
            Lauren’s eye for texture, color, and layered materials brings
            warmth to every project. She’s spent her career translating how
            a family wants to feel into rooms that actually feel that way.
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={0.2} className="mt-14">
        <Button href="/about" variant="ghost">
          Read Our Full Story
        </Button>
      </FadeIn>
    </section>
  );
}
