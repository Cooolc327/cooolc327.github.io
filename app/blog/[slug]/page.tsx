import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { markdownToHtml } from "@/lib/mdx";
import { MdxContent } from "@/components/MdxContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "文章未找到" };
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const html = await markdownToHtml(post.rawContent);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft size={14} />
        返回博客
      </Link>

      <article className="mt-8">
        <time className="text-sm text-muted">{post.frontmatter.date}</time>
        <h1 className="mt-2 text-3xl font-bold">{post.frontmatter.title}</h1>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-black/5 px-2 py-1 text-xs font-medium text-muted dark:bg-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-10 leading-relaxed">
          <MdxContent html={html} />
        </div>
      </article>
    </div>
  );
}
