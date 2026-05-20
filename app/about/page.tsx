import type { Metadata } from "next";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about my background and education",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="text-2xl font-bold">About Me</h1>
      <p className="mt-4 leading-relaxed text-muted">
        I&apos;m a developer passionate about building valuable software products.
        Currently exploring the intersection of deep learning and software engineering.
        Outside of work, I enjoy hackathons, technical writing, and open-source.
      </p>

      <section className="mt-12">
        <h2 className="text-lg font-bold">Education</h2>
        <div className="mt-4 space-y-4">
          {profile.education.map((edu, i) => (
            <div key={i} className="flex justify-between text-sm">
              <div>
                <span className="font-semibold">{edu.school}</span>
                <span className="ml-2 text-muted">{edu.degree}</span>
              </div>
              <span className="shrink-0 text-muted">{edu.period}</span>
            </div>
          ))}
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
