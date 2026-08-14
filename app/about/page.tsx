import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { SkillsGrid } from "@/components/SkillsGrid";
import { Timeline } from "@/components/Timeline";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about my background and education",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="text-2xl font-bold">About Me</h1>
      <p className="mt-4 leading-relaxed text-muted">
        I&apos;m a Computer Science undergraduate at Nanyang Technological University
        interested in computer vision, robot learning, AI safety, and software engineering.
        My current research focuses on using SAM 2 to segment human hands and arms in robot
        demonstration videos. I enjoy turning machine-learning ideas into practical software
        through research, coursework, and hackathons.
      </p>

      <section className="mt-12">
        <h2 className="text-lg font-bold">Education</h2>
        <div className="mt-4 space-y-4">
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
              <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4">
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

      <section className="mt-12">
        <h2 className="text-lg font-bold">Research Experience</h2>
        <div className="mt-5">
          <Timeline items={profile.research} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-bold">Skills</h2>
        <div className="mt-4">
          <SkillsGrid groups={profile.skills} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-bold">Honors & Awards</h2>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted">
          {profile.honors.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-bold">Interests</h2>
        <div className="mt-4 space-y-2 text-sm text-muted">
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
