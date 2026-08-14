import type { Project } from "@/data/projects";
import Link from "next/link";

export function PublicationCard({ project }: { project: Project }) {
  return (
    <div className="flex gap-4">
      {project.thumbnail ? (
        <img
          src={project.thumbnail}
          alt={project.title}
          className="mt-1 h-20 w-28 shrink-0 rounded border bg-white p-2 object-contain"
        />
      ) : (
        <div className="mt-1 flex h-20 w-24 shrink-0 items-center justify-center rounded border bg-card px-2 text-center text-xs font-semibold text-muted">
          {project.venueShort ?? "Project"}
        </div>
      )}

      <div className="min-w-0 flex-1">
        <h3 className="font-semibold leading-snug">
          <Link href={`/projects/${project.slug}`} className="transition-colors hover:text-accent">
            {project.title}
          </Link>
        </h3>
        <div className="mt-0.5 flex flex-col gap-0.5 text-sm text-muted sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <span>{project.authors}</span>
          {project.period && <span className="shrink-0">{project.period}</span>}
        </div>
        <p className="text-sm">
          <span className="font-medium text-foreground">{project.venue}</span>
        </p>
        {project.award && (
          <p className="mt-0.5 text-sm font-medium text-accent">{project.award}</p>
        )}
        {project.outcome && (
          <p className="mt-1 text-sm">
            <span className="font-medium text-foreground">{project.outcome}</span>
          </p>
        )}
        {project.links.length > 0 && (
          <p className="mt-1 text-sm">
            {project.links.map((link, i) => (
              <span key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent hover:underline"
                >
                  [{link.label}]
                </a>
                {i < project.links.length - 1 && " / "}
              </span>
            ))}
          </p>
        )}
      </div>
    </div>
  );
}
