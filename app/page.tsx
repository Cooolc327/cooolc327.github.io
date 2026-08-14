import { HeroSection } from "@/components/HeroSection";
import { PublicationCard } from "@/components/PublicationCard";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { SkillsGrid } from "@/components/SkillsGrid";
import { Timeline } from "@/components/Timeline";

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

      {/* Education */}
      <section>
        <h2 className="mb-4 text-lg font-bold">Education</h2>
        <div className="space-y-4">
          {profile.education.map((edu, i) => (
            <div key={i} className="flex items-start gap-4 text-sm">
              {edu.logo && (
                <div className="flex h-10 w-28 shrink-0 items-center justify-center">
                  <img
                    src={edu.logo}
                    alt={`${edu.school} logo`}
                    className="max-h-10 w-full object-contain"
                  />
                </div>
              )}
              <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <div className="min-w-0">
                  <p>
                    <span className="font-semibold">{edu.school}</span>
                    <span className="ml-2 text-muted">{edu.degree}</span>
                  </p>
                  {edu.details?.map((detail) => (
                    <p key={detail} className="mt-1 text-xs text-muted">
                      {detail}
                    </p>
                  ))}
                </div>
                <span className="shrink-0 text-muted">{edu.period}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Research */}
      <section>
        <h2 className="mb-5 text-lg font-bold">Research Experience</h2>
        <Timeline items={profile.research} />
      </section>

      {/* Projects */}
      <section>
        <h2 className="mb-5 text-lg font-bold">Selected Projects</h2>
        <div className="space-y-6">
          {projects.map((project) => (
            <PublicationCard key={project.slug} project={project} />
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

      {/* Skills */}
      <section>
        <h2 className="mb-4 text-lg font-bold">Skills</h2>
        <SkillsGrid groups={profile.skills} />
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
