import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import EditorialImage from "@/components/media/EditorialImage";
import FadeIn from "@/components/ui/FadeIn";
import Line from "@/components/ui/Line";
import ProjectCard from "@/components/work/ProjectCard";
import FinalCta from "@/components/home/FinalCta";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const index = PROJECTS.findIndex((p) => p.slug === slug);
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <>
      <div className="mx-auto max-w-[1400px] px-6 pt-40 sm:px-10 sm:pt-48">
        <FadeIn>
          <Link href="/portfolio" className="text-eyebrow text-ink-soft hover:text-ink">
            &larr; All Work
          </Link>
          <p className="text-eyebrow mt-8 mb-4 text-ink-soft">
            {project.location} &middot; {project.type}
          </p>
          <h1 className="font-display max-w-3xl text-4xl leading-[1.08] sm:text-6xl">
            {project.name}
          </h1>
          <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-ink-soft sm:text-base">
            {project.longDescription}
          </p>
        </FadeIn>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 sm:py-24">
        <EditorialImage
          alt={project.description}
          mood={project.mood}
          tone="cream"
          seed={project.seed}
          label={`${project.location} — Plate 01`}
          aspect="aspect-[16/10]"
          priority
        />

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <EditorialImage
            alt={`${project.description} — detail`}
            mood="detail"
            tone="sand"
            seed={`${project.seed}-detail`}
            aspect="aspect-[4/5]"
          />
          <EditorialImage
            alt={`${project.description} — secondary view`}
            mood={project.mood === "exterior" ? "interior" : "exterior"}
            tone="ivory"
            seed={`${project.seed}-b`}
            aspect="aspect-[4/5]"
          />
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 pb-28 sm:px-10 sm:pb-36">
        <Line className="mb-16" />
        <p className="text-eyebrow mb-8 text-ink-soft">Next Project</p>
        <div className="max-w-md">
          <ProjectCard project={next} aspect="aspect-[4/5]" />
        </div>
      </div>

      <FinalCta />
    </>
  );
}
