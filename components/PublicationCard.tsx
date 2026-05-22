import type { Project } from "@/data/projects";

export function PublicationCard({ project }: { project: Project }) {
  return (
    <div className="flex gap-4">
      {project.thumbnail ? (
        <img
          src={project.thumbnail}
          alt={project.title}
          className="mt-1 h-20 w-auto max-w-[140px] shrink-0 rounded border object-contain"
        />
      ) : (
        <div className="mt-1 h-20 w-20 shrink-0 rounded border bg-zinc-100" />
      )}

      <div className="min-w-0 flex-1">
        <h3 className="font-semibold leading-snug">{project.title}</h3>
        <p className="mt-0.5 text-sm text-muted">{project.authors}</p>
        <p className="text-sm">
          <span className="font-medium text-foreground">{project.venue}</span>
        </p>
        {project.award && (
          <p className="mt-0.5 text-sm font-medium text-accent">{project.award}</p>
        )}
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
      </div>
    </div>
  );
}
