import type { MetadataRoute } from "next";
import { PROJECTS } from "@/data/projects";
import { JOURNAL_POSTS } from "@/data/journal";

const siteUrl = "https://www.candlewoodinteriors.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/portfolio",
    "/services",
    "/about",
    "/process",
    "/journal",
    "/contact",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes = PROJECTS.map((project) => ({
    url: `${siteUrl}/portfolio/${project.slug}`,
    lastModified: new Date(),
  }));

  const journalRoutes = JOURNAL_POSTS.map((post) => ({
    url: `${siteUrl}/journal/${post.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes, ...journalRoutes];
}
