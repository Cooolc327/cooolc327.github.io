import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="py-20 text-center sm:py-32">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-4 text-xl text-muted">{profile.tagline}</p>
      <div className="mt-8 flex items-center justify-center gap-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          查看项目
          <ArrowRight size={16} />
        </Link>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 rounded-lg border px-6 py-3 text-sm font-medium transition-colors hover:bg-black/5 dark:hover:bg-white/5"
        >
          了解更多
        </Link>
      </div>
    </section>
  );
}
