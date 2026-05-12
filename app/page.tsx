import { HeroSection } from "@/components/HeroSection";
import { ProjectCard } from "@/components/ProjectCard";
import { BlogCard } from "@/components/BlogCard";
import { SkillTag } from "@/components/SkillTag";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <div className="mx-auto max-w-4xl px-6">
      <HeroSection />

      <section className="pb-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">精选项目</h2>
          <Link
            href="/projects"
            className="text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            查看全部 &rarr;
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section className="pb-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">最新文章</h2>
          <Link
            href="/blog"
            className="text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            查看全部 &rarr;
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="pb-20">
        <h2 className="mb-8 text-2xl font-bold">技能栈</h2>
        <div className="flex flex-wrap gap-3">
          {profile.skills.map((skill) => (
            <SkillTag key={skill} name={skill} />
          ))}
        </div>
      </section>
    </div>
  );
}
