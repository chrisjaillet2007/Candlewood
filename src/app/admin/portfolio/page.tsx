import Link from "next/link";
import type { Metadata } from "next";
import type { Project } from "@/data/projects";
import { loadProjectsForAdmin } from "@/lib/portfolio-admin";
import PortfolioAdminList from "@/components/admin/PortfolioAdminList";

export const metadata: Metadata = { title: "Portfolio" };

export default async function AdminPortfolioPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  let projects: Project[] = [];
  let loadError: string | null = null;
  try {
    projects = await loadProjectsForAdmin();
  } catch (err) {
    loadError = err instanceof Error ? err.message : "Couldn't load the portfolio.";
  }

  return (
    <div>
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl">Portfolio</h1>
          <p className="mt-2 max-w-md text-[15px] text-ink-soft">
            Add a project, upload a photo, and publish — changes are usually
            live on the website within about a minute.
          </p>
        </div>
        <Link
          href="/admin/portfolio/new"
          className="whitespace-nowrap bg-ink px-6 py-3 text-[13px] tracking-[0.1em] text-cream uppercase transition-colors hover:bg-ink-deep"
        >
          + Add Project
        </Link>
      </div>

      {loadError ? (
        <p className="border border-red-200 bg-red-50 px-6 py-4 text-sm text-red-800">
          {loadError}
        </p>
      ) : (
        <PortfolioAdminList
          projects={projects}
          published={params.published === "1"}
          deleted={params.deleted === "1"}
        />
      )}
    </div>
  );
}
