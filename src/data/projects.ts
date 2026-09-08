import projectsJson from "../../content/projects.json";

export type Project = {
  slug: string;
  name: string;
  location: string;
  type: string;
  description: string;
  longDescription: string;
  mood: "interior" | "detail" | "exterior";
  seed: string;
  size: "hero" | "wide" | "standard";
  /**
   * Path to the real cover photo, once one exists — e.g.
   * "/portfolio/andover-colonial/cover.jpg" for a file saved at
   * `public/portfolio/andover-colonial/cover.jpg`. Leave unset and the
   * project keeps its generative placeholder plate automatically; nothing
   * else needs to change.
   */
  image?: string;
  /**
   * Up to two additional photos shown on the project's detail page (a
   * detail shot and a secondary view). Same rule: paths under `/public`,
   * omit to keep the placeholder art for that slot.
   */
  gallery?: [string?, string?];
};

/**
 * Every portfolio project on the site. The data itself lives in
 * `content/projects.json` (plain JSON, no code) so it can be edited two
 * ways:
 *
 * 1. Through the `/admin` page on the live site — the easiest way, see
 *    ADMIN.md for one-time setup.
 * 2. By hand, editing `content/projects.json` directly — see CONTENT.md.
 */
export const PROJECTS: Project[] = projectsJson as Project[];
