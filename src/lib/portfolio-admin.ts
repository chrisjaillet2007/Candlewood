import { readTextFile } from "./github-content";
import type { Project } from "@/data/projects";

const DEFAULT_TYPES = [
  "Full-Service Interior Design",
  "Whole-Home Design",
  "Room Design",
  "Kitchen & Bath Design",
  "New Construction",
];

/** Reads the live portfolio content directly from GitHub — not the bundled
 * build — so the admin pages always reflect the latest published state. */
export async function loadProjectsForAdmin(): Promise<Project[]> {
  const file = await readTextFile("content/projects.json");
  return file ? (JSON.parse(file.text) as Project[]) : [];
}

export function extractTypes(projects: Project[]): string[] {
  const types = Array.from(new Set(projects.map((p) => p.type)));
  return types.length ? types : DEFAULT_TYPES;
}
