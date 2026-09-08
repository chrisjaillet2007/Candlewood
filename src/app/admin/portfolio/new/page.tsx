import type { Metadata } from "next";
import { loadProjectsForAdmin, extractTypes } from "@/lib/portfolio-admin";
import ProjectForm from "@/components/admin/ProjectForm";

export const metadata: Metadata = { title: "Add Project" };

export default async function NewProjectPage() {
  const projects = await loadProjectsForAdmin().catch(() => []);
  const existingTypes = extractTypes(projects);

  return (
    <div>
      <h1 className="font-display text-3xl">Add a Project</h1>
      <p className="mt-2 max-w-md text-[15px] text-ink-soft">
        Fill in the details below. You can always come back and add photos
        later — everything works fine without them.
      </p>
      <div className="mt-10">
        <ProjectForm mode="create" existingTypes={existingTypes} />
      </div>
    </div>
  );
}
