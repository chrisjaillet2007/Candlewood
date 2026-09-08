import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { JOURNAL_POSTS } from "@/data/journal";
import EditorialImage from "@/components/media/EditorialImage";
import FadeIn from "@/components/ui/FadeIn";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return JOURNAL_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = JOURNAL_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = JOURNAL_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-[820px] px-6 pt-40 pb-28 sm:px-10 sm:pt-48 sm:pb-36">
      <FadeIn>
        <Link href="/journal" className="text-eyebrow text-ink-soft hover:text-ink">
          &larr; Journal
        </Link>
        <p className="text-eyebrow mt-8 mb-4 text-ink-soft">{post.category}</p>
        <h1 className="font-display text-4xl leading-[1.1] sm:text-5xl">{post.title}</h1>
      </FadeIn>

      <FadeIn delay={0.1} className="mt-12">
        <EditorialImage
          alt={post.title}
          mood="detail"
          tone="ivory"
          seed={post.seed}
          aspect="aspect-[16/10]"
          priority
        />
      </FadeIn>

      <FadeIn delay={0.15} className="mt-14 space-y-6 text-[16px] leading-relaxed text-ink-soft sm:text-lg">
        {post.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </FadeIn>
    </article>
  );
}
