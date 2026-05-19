import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with me",
};

export default function ContactPage() {
  const { socials } = profile;

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">Contact Me</h1>
      <p className="mt-4 text-muted">Let's connect — open to collaboration and tech discussions</p>

      <div className="mt-12 space-y-8">
        <div className="flex items-center gap-4">
          <Mail className="h-5 w-5 text-muted" />
          <a
            href={`mailto:${profile.email}`}
            className="text-sm font-medium transition-colors hover:text-accent"
          >
            {profile.email}
          </a>
        </div>

        <div className="flex items-center gap-4">
          <MapPin className="h-5 w-5 text-muted" />
          <span className="text-sm font-medium text-muted">
            {profile.location}
          </span>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold">Social Media</h2>
        <div className="mt-6 flex items-center gap-6">
          {socials.github && (
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              <GithubIcon className="h-[18px] w-[18px]" />
              GitHub
            </a>
          )}
          {socials.linkedin && (
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              <LinkedInIcon className="h-[18px] w-[18px]" />
              LinkedIn
            </a>
          )}
          {socials.twitter && (
            <a
              href={socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              <TwitterIcon className="h-[18px] w-[18px]" />
              Twitter
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
