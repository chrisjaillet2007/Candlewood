import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import InquiryForm from "@/components/contact/InquiryForm";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Begin Your Journey",
  description:
    "Start a conversation with Candlewood Interiors about your Eastern Massachusetts home.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Begin Your Journey"
        title="Let's talk about your home."
        description="Tell us a little about your project. There's no wrong way to answer any of this — think of it as the start of a conversation, not an application."
      />

      <div className="mx-auto max-w-[1400px] px-6 pb-28 sm:px-10 sm:pb-36">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <FadeIn className="lg:sticky lg:top-32">
              <p className="text-eyebrow mb-6 text-ink-soft">Direct</p>
              <p className="text-[15px] leading-relaxed text-ink-soft">
                Prefer to reach us directly?
              </p>
              <a
                href="mailto:hello@candlewoodinteriors.com"
                className="font-display mt-4 block text-xl"
              >
                hello@candlewoodinteriors.com
              </a>
              <a href="tel:+19785550142" className="font-display mt-2 block text-xl">
                (978) 555-0142
              </a>
              <p className="mt-10 text-[15px] leading-relaxed text-ink-soft">
                Based in Andover, Massachusetts. Serving Eastern Massachusetts,
                with virtual design available beyond.
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-8">
            <FadeIn delay={0.1}>
              <InquiryForm />
            </FadeIn>
          </div>
        </div>
      </div>
    </>
  );
}
