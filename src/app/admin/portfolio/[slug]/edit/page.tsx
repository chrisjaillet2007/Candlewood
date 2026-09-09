import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { loadProjectsForAdmin, extractTypes } from "@/lib/portfolio-admin";
import ProjectForm from "@/components/admin/ProjectForm";

type Params = { slug: string };

export const metadata: Metadata = { title: "Edit Project" };

export default async function EditProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const projects = await loadProjectsForAdmin();
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const existingTypes = extractTypes(projects);

  return (
    <div>
      <h1 className="font-display text-3xl">Edit Project</h1>
      <p className="mt-2 max-w-md text-[15px] text-ink-soft">
        Update the details or replace a photo, then publish.
      </p>
      <div className="mt-10">
        <ProjectForm mode="edit" initialProject={project} existingTypes={existingTypes} />
      </div>
    </div>
  );
}
