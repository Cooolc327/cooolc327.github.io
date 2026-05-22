import { HeroSection } from "@/components/HeroSection";
import { PublicationCard } from "@/components/PublicationCard";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-3xl space-y-14 px-6 py-10">
      <HeroSection />

      {/* News */}
      <section>
        <h2 className="mb-4 text-lg font-bold">News</h2>
        <ul className="space-y-2">
          {profile.news.map((item, i) => (
            <li key={i} className="flex gap-2 text-sm">
              <span className="shrink-0 font-medium text-accent">[{item.date}]</span>
              <span className="text-muted">
                {item.text}
                {item.link && (
                  <a href={item.link} className="ml-1 text-accent hover:underline">
                    [link]
                  </a>
                )}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Publications */}
      <section>
        <h2 className="mb-5 text-lg font-bold">Publications & Projects</h2>
        <div className="space-y-6">
          {projects.map((project) => (
            <PublicationCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="mb-4 text-lg font-bold">Education</h2>
        <div className="space-y-4">
          {profile.education.map((edu, i) => (
            <div key={i} className="flex items-center gap-3 text-sm">
              {edu.logo && (
                <img src={edu.logo} alt={edu.school} className="h-9 w-9 shrink-0 rounded" />
              )}
              <div className="flex flex-1 justify-between">
                <div>
                  <span className="font-semibold">{edu.school}</span>
                  <span className="ml-2 text-muted">{edu.degree}</span>
                </div>
                <span className="shrink-0 text-muted">{edu.period}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Honors & Awards */}
      <section>
        <h2 className="mb-4 text-lg font-bold">Honors & Awards</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-muted">
          {profile.honors.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Miscellanea */}
      <section>
        <h2 className="mb-4 text-lg font-bold">Miscellanea</h2>
        <div className="space-y-3 text-sm text-muted">
          {profile.miscellanea.map((cat, i) => (
            <p key={i}>
              <span className="mr-1">{cat.icon}</span>
              <span className="font-medium text-foreground">{cat.category}:</span>{" "}
              {cat.items.join(", ")}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}
