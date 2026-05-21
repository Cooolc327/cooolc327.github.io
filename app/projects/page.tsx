import type { Metadata } from "next";
import { PublicationCard } from "@/components/PublicationCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "My publications and projects",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="text-2xl font-bold">Publications & Projects</h1>
      <div className="mt-8 space-y-6">
        {projects.map((project) => (
          <PublicationCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
