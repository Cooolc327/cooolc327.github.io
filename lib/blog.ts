import fs from "node:fs";
import path from "node:path";

export interface BlogFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  draft?: boolean;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  rawContent: string;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function parseFrontmatter(raw: string): {
  frontmatter: BlogFrontmatter;
  content: string;
} {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    throw new Error("Invalid frontmatter format");
  }

  const lines = match[1].split("\n");
  const meta: Record<string, string> = {};
  let currentKey = "";

  for (const line of lines) {
    const keyMatch = line.match(/^(\w+):\s*(.*)/);
    if (keyMatch) {
      currentKey = keyMatch[1];
      meta[currentKey] = keyMatch[2].trim();
    } else if (currentKey) {
      meta[currentKey] += "\n" + line.trim();
    }
  }

  return {
    frontmatter: {
      title: meta.title || "Untitled",
      date: meta.date || new Date().toISOString().split("T")[0],
      excerpt: meta.excerpt || "",
      tags: meta.tags
        ? meta.tags
            .replace(/[\[\]]/g, "")
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean)
        : [],
      draft: meta.draft === "true",
    },
    content: match[2].trim(),
  };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files
    .map((file) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
      const { frontmatter, content } = parseFrontmatter(raw);
      return {
        slug: file.replace(/\.mdx$/, ""),
        frontmatter,
        rawContent: content,
      };
    })
    .filter((p) => !p.frontmatter.draft)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { frontmatter, content } = parseFrontmatter(raw);
  return { slug, frontmatter, rawContent: content };
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagSet = new Set<string>();
  for (const post of posts) {
    for (const tag of post.frontmatter.tags) {
      tagSet.add(tag);
    }
  }
  return Array.from(tagSet).sort();
}
