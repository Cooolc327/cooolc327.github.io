import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-xl border bg-card p-6 transition-shadow hover:shadow-md"
    >
      <time className="text-xs text-muted">{post.frontmatter.date}</time>
      <h3 className="mt-1 text-lg font-semibold group-hover:text-accent transition-colors">
        {post.frontmatter.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {post.frontmatter.excerpt}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {post.frontmatter.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-black/5 px-2 py-1 text-xs font-medium text-muted dark:bg-white/5"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
