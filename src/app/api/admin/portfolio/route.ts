import { NextResponse } from "next/server";
import { readTextFile, writeFile, textToBase64 } from "@/lib/github-content";
import { ConfigError } from "@/lib/auth";
import { hasValidSession } from "@/lib/session";
import { slugify, uniqueSlug } from "@/lib/slugify";
import type { Project } from "@/data/projects";

const PROJECTS_PATH = "content/projects.json";
const VALID_SIZES: Project["size"][] = ["hero", "wide", "standard"];

type SavePayload = {
  mode: "create" | "update";
  originalSlug?: string;
  name?: string;
  location?: string;
  type?: string;
  description?: string;
  longDescription?: string;
  size?: string;
  photos?: {
    cover?: string;
    gallery1?: string;
    gallery2?: string;
  };
};

function friendlyError(err: unknown): { message: string; status: number } {
  if (err instanceof ConfigError) return { message: err.message, status: 500 };
  console.error(err);
  return {
    message:
      "Something went wrong publishing your changes. Please try again in a moment.",
    status: 500,
  };
}

async function loadProjects(): Promise<{ projects: Project[]; sha?: string }> {
  const file = await readTextFile(PROJECTS_PATH);
  if (!file) return { projects: [] };
  return { projects: JSON.parse(file.text) as Project[], sha: file.sha };
}

async function uploadPhoto(
  slug: string,
  filename: string,
  base64: string
): Promise<string> {
  const path = `public/portfolio/${slug}/${filename}`;
  const existing = await readTextFile(path);
  await writeFile(
    path,
    base64,
    `Add ${filename} for ${slug} via admin`,
    existing?.sha
  );
  return `/portfolio/${slug}/${filename}`;
}

export async function POST(request: Request) {
  if (!(await hasValidSession())) {
    return NextResponse.json({ error: "Please log in again." }, { status: 401 });
  }

  let payload: SavePayload;
  try {
    payload = (await request.json()) as SavePayload;
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 400 });
  }

  const name = payload.name?.trim() ?? "";
  const location = payload.location?.trim() ?? "";
  const type = payload.type?.trim() ?? "";
  const description = payload.description?.trim() ?? "";
  const longDescription = payload.longDescription?.trim() ?? "";
  const size = VALID_SIZES.includes(payload.size as Project["size"])
    ? (payload.size as Project["size"])
    : "standard";

  if (!name || !location || !type || !description || !longDescription) {
    return NextResponse.json(
      { error: "Please fill in the name, location, type, and both descriptions." },
      { status: 400 }
    );
  }

  try {
    const { projects, sha } = await loadProjects();
    const existingSlugs = projects.map((p) => p.slug);

    let slug: string;
    let existing: Project | undefined;

    if (payload.mode === "update") {
      if (!payload.originalSlug) {
        return NextResponse.json({ error: "Missing project to update." }, { status: 400 });
      }
      existing = projects.find((p) => p.slug === payload.originalSlug);
      if (!existing) {
        return NextResponse.json({ error: "That project no longer exists." }, { status: 404 });
      }
      slug = existing.slug;
    } else {
      slug = uniqueSlug(slugify(name), existingSlugs);
    }

    const photos = payload.photos ?? {};
    const [coverUrl, gallery1Url, gallery2Url] = await Promise.all([
      photos.cover ? uploadPhoto(slug, "cover.jpg", photos.cover) : Promise.resolve(undefined),
      photos.gallery1 ? uploadPhoto(slug, "gallery-1.jpg", photos.gallery1) : Promise.resolve(undefined),
      photos.gallery2 ? uploadPhoto(slug, "gallery-2.jpg", photos.gallery2) : Promise.resolve(undefined),
    ]);

    const galleryFirst = gallery1Url ?? existing?.gallery?.[0];
    const gallerySecond = gallery2Url ?? existing?.gallery?.[1];

    const project: Project = {
      slug,
      name,
      location,
      type,
      description,
      longDescription,
      mood: existing?.mood ?? "interior",
      seed: slug,
      size,
      image: coverUrl ?? existing?.image,
      ...(galleryFirst || gallerySecond
        ? { gallery: [galleryFirst, gallerySecond] }
        : {}),
    };

    const nextProjects =
      payload.mode === "update"
        ? projects.map((p) => (p.slug === slug ? project : p))
        : [...projects, project];

    await writeFile(
      PROJECTS_PATH,
      textToBase64(JSON.stringify(nextProjects, null, 2) + "\n"),
      `${payload.mode === "update" ? "Update" : "Add"} portfolio project "${name}" via admin`,
      sha
    );

    return NextResponse.json({ ok: true, slug });
  } catch (err) {
    const { message, status } = friendlyError(err);
    return NextResponse.json({ error: message }, { status });
  }
}

export async function DELETE(request: Request) {
  if (!(await hasValidSession())) {
    return NextResponse.json({ error: "Please log in again." }, { status: 401 });
  }

  let slug = "";
  try {
    const body = (await request.json()) as { slug?: string };
    slug = body.slug?.trim() ?? "";
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 400 });
  }

  if (!slug) {
    return NextResponse.json({ error: "Missing project to delete." }, { status: 400 });
  }

  try {
    const { projects, sha } = await loadProjects();
    const nextProjects = projects.filter((p) => p.slug !== slug);
    if (nextProjects.length === projects.length) {
      return NextResponse.json({ error: "That project no longer exists." }, { status: 404 });
    }

    await writeFile(
      PROJECTS_PATH,
      textToBase64(JSON.stringify(nextProjects, null, 2) + "\n"),
      `Delete portfolio project "${slug}" via admin`,
      sha
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    const { message, status } = friendlyError(err);
    return NextResponse.json({ error: message }, { status });
  }
}
