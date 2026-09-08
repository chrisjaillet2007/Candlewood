import { PROJECTS } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/work/ProjectCard";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function FeaturedWork() {
  const [hero, supporting, wide, ...rest] = PROJECTS;
  const pair = rest.slice(0, 2);

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 sm:px-10 sm:py-36">
      <div className="mb-16 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Featured Work"
          title="A few rooms we've helped come together."
          className="max-w-xl"
        />
        <FadeIn delay={0.1}>
          <Button href="/portfolio" variant="secondary">
            View Full Portfolio
          </Button>
        </FadeIn>
      </div>

      <div className="grid gap-x-8 gap-y-16 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <ProjectCard project={hero} aspect="aspect-[4/3]" priority />
        </div>
        <div className="lg:col-span-4">
          <ProjectCard project={supporting} aspect="aspect-[4/5]" />
        </div>

        <div className="lg:col-span-12">
          <ProjectCard project={wide} aspect="aspect-[21/9]" />
        </div>

        {pair.map((project) => (
          <div key={project.slug} className="lg:col-span-6">
            <ProjectCard project={project} aspect="aspect-[5/4]" />
          </div>
        ))}
      </div>
    </section>
  );
}
