import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b bg-white">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          Edward Chen
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-sm text-muted hover:text-foreground">
            Home
          </Link>
          <Link href="/blog" className="text-sm text-muted hover:text-foreground">
            Blog
          </Link>
        </div>
      </nav>
    </header>
  );
}
