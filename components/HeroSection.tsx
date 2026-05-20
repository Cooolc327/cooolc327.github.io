import { GraduationCap, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";

export function HeroSection() {
  const { socials } = profile;

  return (
    <section className="flex flex-col items-start gap-6 sm:flex-row sm:gap-8">
      <div className="h-28 w-28 shrink-0 overflow-hidden rounded-full bg-zinc-200 sm:h-32 sm:w-32">
        <img
          src={profile.photo}
          alt={profile.name}
          className="h-full w-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>

      <div className="flex-1">
        <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
        <p className="mt-1 text-sm text-muted">{profile.affiliation}</p>
        <p className="mt-1 text-sm text-muted">{profile.emailObfuscated}</p>

        <div className="mt-3 flex items-center gap-4 text-sm text-muted">
          {socials.scholar && (
            <a
              href={socials.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-accent"
            >
              <GraduationCap size={15} />
              Scholar
            </a>
          )}
          {socials.github && (
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-accent"
            >
              <Github size={15} />
              GitHub
            </a>
          )}
          {socials.linkedin && (
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-accent"
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
