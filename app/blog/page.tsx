import type { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import { getAllPosts, getAllTags } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical articles and project retrospectives",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="mt-4 text-muted">Technical articles and project retrospectives</p>

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
        <p className="mt-10 text-center text-muted">No posts yet.</p>
      )}
    </div>
  );
}
