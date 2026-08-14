import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft size={14} />
        Back
      </Link>

      <article className="mt-8">
        <h1 className="text-2xl font-bold">{project.title}</h1>
        <div className="mt-3 flex flex-col gap-1 text-sm text-muted sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <span>{project.authors}</span>
          {project.period && <span className="shrink-0">{project.period}</span>}
        </div>
        <p className="mt-1 text-sm">
          <span className="font-medium text-foreground">{project.venue}</span>
        </p>

        {project.award && (
          <p className="mt-2 text-sm font-medium text-accent">{project.award}</p>
        )}
        {project.outcome && (
          <p className="mt-2 text-sm">
            <span className="font-medium text-foreground">{project.outcome}</span>
          </p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-black/5 px-2 py-1 text-xs font-medium text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border px-4 py-1.5 text-sm font-medium text-accent transition-colors hover:bg-accent/5"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </article>
    </div>
  );
}
