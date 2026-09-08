import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import { JOURNAL_POSTS } from "@/data/journal";
import EditorialImage from "@/components/media/EditorialImage";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes on New England design, home inspiration, and life at Candlewood Interiors.",
};

export default function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Notes on New England design."
        description="Field notes from our projects — design advice, materials, entertaining, and the occasional look behind the scenes."
      />

      <div className="mx-auto max-w-[1400px] px-6 pb-28 sm:px-10 sm:pb-36">
        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {JOURNAL_POSTS.map((post) => (
            <FadeIn key={post.slug}>
              <Link href={`/journal/${post.slug}`} className="group block">
                <div className="overflow-hidden">
                  <div className="transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                    <EditorialImage
                      alt={post.title}
                      mood="detail"
                      tone="cream"
                      seed={post.seed}
                      aspect="aspect-[4/5]"
                    />
                  </div>
                </div>
                <p className="text-eyebrow mt-5 mb-2 text-ink-soft">{post.category}</p>
                <h2 className="font-display text-xl leading-snug sm:text-2xl">{post.title}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{post.excerpt}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </>
  );
}
