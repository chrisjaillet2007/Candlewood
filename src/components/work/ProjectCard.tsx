import Link from "next/link";
import type { Project } from "@/data/projects";
import EditorialImage from "@/components/media/EditorialImage";

export default function ProjectCard({
  project,
  aspect = "aspect-[4/5]",
  priority = false,
}: {
  project: Project;
  aspect?: string;
  priority?: boolean;
}) {
  return (
    <Link href={`/portfolio/${project.slug}`} className="group block">
      <div className="overflow-hidden">
        <div className="transition-transform duration-700 ease-out group-hover:scale-[1.03]">
          <EditorialImage
            alt={project.description}
            mood={project.mood}
            tone="cream"
            seed={project.seed}
            label={project.location}
            aspect={aspect}
            priority={priority}
          />
        </div>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-eyebrow mb-2 text-ink-soft">
            {project.location} &middot; {project.type}
          </p>
          <h3 className="font-display text-xl leading-snug transition-colors duration-300 group-hover:text-ink-soft sm:text-2xl">
            {project.name}
          </h3>
        </div>
        <span
          aria-hidden
          className="mt-1 shrink-0 text-lg transition-transform duration-300 group-hover:translate-x-1"
        >
          &rarr;
        </span>
      </div>
    </Link>
  );
}
