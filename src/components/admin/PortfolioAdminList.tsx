"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Project } from "@/data/projects";

export default function PortfolioAdminList({
  projects,
  published,
  deleted,
}: {
  projects: Project[];
  published: boolean;
  deleted: boolean;
}) {
  const router = useRouter();
  const [deletingSlug, setDeletingSlug] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleDelete(slug: string, name: string) {
    if (!window.confirm(`Delete "${name}"? This can't be undone from here.`)) return;
    setDeletingSlug(slug);
    setError(null);
    try {
      const res = await fetch("/api/admin/portfolio", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        setError(data.error ?? "Couldn't delete that project.");
        return;
      }
      router.push("/admin/portfolio?deleted=1");
      router.refresh();
    } catch {
      setError("Something went wrong. Please check your connection and try again.");
    } finally {
      setDeletingSlug(null);
    }
  }

  return (
    <div>
      {published && (
        <p className="mb-8 border border-ink/10 bg-ivory px-6 py-4 text-sm text-ink">
          Published — this change is usually live within about a minute.
        </p>
      )}
      {deleted && (
        <p className="mb-8 border border-ink/10 bg-ivory px-6 py-4 text-sm text-ink">
          Deleted — this change is usually live within about a minute.
        </p>
      )}
      {error && (
        <p className="mb-8 border border-red-200 bg-red-50 px-6 py-4 text-sm text-red-800">
          {error}
        </p>
      )}

      {projects.length === 0 ? (
        <p className="text-ink-soft">No projects yet. Add your first one above.</p>
      ) : (
        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {projects.map((project) => (
            <li key={project.slug} className="flex items-center gap-5 py-5">
              <div className="h-16 w-16 shrink-0 overflow-hidden bg-linen">
                {project.image ? (
                  // Admin thumbnail only — the public site uses next/image via EditorialImage.
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={project.image} alt="" className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-center text-[9px] uppercase leading-tight tracking-wide text-ink-soft/60">
                    No Photo Yet
                  </div>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-display text-lg">{project.name}</p>
                <p className="truncate text-sm text-ink-soft">
                  {project.location} &middot; {project.type}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-5">
                <Link
                  href={`/admin/portfolio/${project.slug}/edit`}
                  className="text-[13px] uppercase tracking-[0.05em] text-ink-soft transition-colors hover:text-ink"
                >
                  Edit
                </Link>
                <button
                  type="button"
                  onClick={() => handleDelete(project.slug, project.name)}
                  disabled={deletingSlug === project.slug}
                  className="text-[13px] uppercase tracking-[0.05em] text-red-700 transition-colors hover:text-red-900 disabled:opacity-50"
                >
                  {deletingSlug === project.slug ? "Deleting…" : "Delete"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
