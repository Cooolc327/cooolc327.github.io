import type { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import { getAllPosts, getAllTags } from "@/lib/blog";

export const metadata: Metadata = {
  title: "博客",
  description: "技术文章和项目复盘",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold">博客</h1>
      <p className="mt-4 text-muted">技术文章和项目复盘</p>

      {tags.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <a
              key={tag}
              href={`/blog?tag=${encodeURIComponent(tag)}`}
              className="rounded-lg border px-3 py-1 text-xs font-medium text-muted transition-colors hover:border-accent hover:text-accent"
            >
              {tag}
            </a>
          ))}
        </div>
      )}

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {posts.length === 0 && (
        <p className="mt-10 text-center text-muted">还没有文章。</p>
      )}
    </div>
  );
}
