import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group rounded-xl border bg-card p-6 transition-shadow hover:shadow-md">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-black/5 px-2 py-1 text-xs font-medium text-muted bg-black/5"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-4">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent"
        >
          Details
          <ArrowUpRight size={14} />
        </Link>
        {project.sourceUrl && (
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
          >
            <GithubIcon className="h-[14px] w-[14px]" />
            Source
          </a>
        )}
      </div>
    </div>
  );
}
