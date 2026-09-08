import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import EditorialImage from "@/components/media/EditorialImage";
import FadeIn from "@/components/ui/FadeIn";
import Line from "@/components/ui/Line";
import SectionHeading from "@/components/ui/SectionHeading";
import FinalCta from "@/components/home/FinalCta";
import { TEAM_PHOTOS, ABOUT_HERO_PHOTO } from "@/data/team";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Annmarie Jaillet and Lauren Savarese, childhood friends from Andover, Massachusetts and founders of Candlewood Interiors.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Candlewood"
        title="Two friends from Andover, one shared way of seeing a home."
      />

      <div className="mx-auto max-w-[1400px] px-6 pb-24 sm:px-10">
        <FadeIn>
          <EditorialImage
            src={ABOUT_HERO_PHOTO}
            alt="Annmarie and Lauren in a bright, sunlit interior"
            mood="interior"
            tone="cream"
            seed="about-hero"
            aspect="aspect-[21/9]"
            priority
          />
        </FadeIn>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 pb-28 sm:px-10 sm:pb-36">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-5">
            <p className="text-eyebrow mb-6 text-ink-soft">Our Story</p>
            <h2 className="font-display text-4xl leading-[1.1] sm:text-5xl">
              A friendship first, a studio second.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="space-y-6 text-[15px] leading-relaxed text-ink-soft sm:text-base lg:col-span-6 lg:col-start-7">
            <p>
              Annmarie Jaillet and Lauren Savarese have known each other since
              childhood, growing up together in Andover, Massachusetts. Long
              before Candlewood existed, they were the kind of friends who
              redesigned each other’s bedrooms for fun.
            </p>
            <p>
              Each built her own career in interior design, working with
              families across Eastern Massachusetts on projects ranging from
              single rooms to full new construction. Along the way, they kept
              noticing the same thing: how much stress a design project could
              cause, and how much of that stress had nothing to do with the
              furniture at all.
            </p>
            <p>
              Candlewood Interiors was born from a simple idea the two of
              them had discussed for years — that the process of designing a
              home should feel as good as the home itself. Today, they bring
              their combined design expertise, their deep familiarity with
              New England homes, and their genuine friendship to every
              client relationship.
            </p>
          </FadeIn>
        </div>

        <Line className="my-20" />

        <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2">
          <FadeIn>
            <EditorialImage
              src={TEAM_PHOTOS.annmarie}
              alt="Portrait of Annmarie Jaillet"
              mood="portrait"
              tone="sand"
              seed="founder-annmarie"
              aspect="aspect-[4/5]"
            />
            <h3 className="font-display mt-6 text-2xl">Annmarie Jaillet</h3>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink-soft">
              Annmarie’s grounding in classic New England architecture shapes
              how she approaches every home — with an instinct for
              proportion, millwork, and the details that make older houses
              feel considered rather than dated.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <EditorialImage
              src={TEAM_PHOTOS.lauren}
              alt="Portrait of Lauren Savarese"
              mood="portrait"
              tone="ivory"
              seed="founder-lauren"
              aspect="aspect-[4/5]"
            />
            <h3 className="font-display mt-6 text-2xl">Lauren Savarese</h3>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink-soft">
              Lauren’s strength is texture and color — the layered, collected
              feeling that makes a finished room feel personal rather than
              staged. She’s especially drawn to projects for busy, growing
              families.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="bg-ivory">
        <div className="mx-auto max-w-[1400px] px-6 py-28 sm:px-10 sm:py-36">
          <SectionHeading
            eyebrow="What We Believe"
            title="A home should support the way you actually live."
            description="Not the way a magazine says you should live, and not the way it looked in a showroom. We design for real families, real winters, and real Tuesday mornings."
          />
        </div>
      </div>

      <FinalCta />
    </>
  );
}
