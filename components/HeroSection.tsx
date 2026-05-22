import { GraduationCap } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedInIcon, TwitterIcon, ZhihuIcon } from "./SocialIcons";

export function HeroSection() {
  const { socials } = profile;

  return (
    <section className="flex flex-col items-start gap-6 sm:flex-row sm:gap-8">
      <div className="h-28 w-28 shrink-0 overflow-hidden rounded-full sm:h-32 sm:w-32">
        <img
          src="/images/profile.jpg"
          alt={profile.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex-1">
        <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
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
              <GithubIcon className="h-[15px] w-[15px]" />
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
              <LinkedInIcon className="h-[15px] w-[15px]" />
              LinkedIn
            </a>
          )}
          {socials.twitter && (
            <a
              href={socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-accent"
            >
              <TwitterIcon className="h-[15px] w-[15px]" />
              Twitter
            </a>
          )}
          {socials.zhihu && (
            <a
              href={socials.zhihu}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-accent"
            >
              <ZhihuIcon className="h-[15px] w-[15px]" />
              知乎
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
