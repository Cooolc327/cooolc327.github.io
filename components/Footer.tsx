import { profile } from "@/data/profile";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "./SocialIcons";

export function Footer() {
  const { socials } = profile;

  return (
    <footer className="border-t py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Edward. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {socials.github && (
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <GithubIcon className="h-[18px] w-[18px]" />
            </a>
          )}
          {socials.linkedin && (
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-[18px] w-[18px]" />
            </a>
          )}
          {socials.twitter && (
            <a
              href={socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
              aria-label="Twitter"
            >
              <TwitterIcon className="h-[18px] w-[18px]" />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
