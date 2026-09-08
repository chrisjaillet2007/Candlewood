"use client";

import { useMemo, useState } from "react";
import { PROJECTS } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import FadeIn from "@/components/ui/FadeIn";

export default function PortfolioGrid() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(PROJECTS.map((p) => p.type)))],
    []
  );
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? PROJECTS : PROJECTS.filter((p) => p.type === active);

  return (
    <div>
      <div className="mb-14 flex flex-wrap gap-x-8 gap-y-3 border-b border-ink/10 pb-8">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`text-[13px] tracking-[0.08em] uppercase transition-colors duration-300 ${
              active === category ? "text-ink" : "text-stone hover:text-ink-soft"
            }`}
            aria-pressed={active === category}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <FadeIn key={project.slug}>
            <ProjectCard project={project} aspect="aspect-[4/5]" />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
