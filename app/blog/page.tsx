import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog posts",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <p className="text-lg text-muted italic">Waiting to Be Filled</p>
    </div>
  );
}
