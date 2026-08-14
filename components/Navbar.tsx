import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b bg-white">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          YIN LICHEN
        </Link>
        <div className="flex items-center gap-3 sm:gap-4">
          <Link href="/about" className="text-xs text-muted hover:text-foreground sm:text-sm">
            About
          </Link>
          <Link href="/projects" className="text-xs text-muted hover:text-foreground sm:text-sm">
            Projects
          </Link>
          <Link href="/contact" className="text-xs text-muted hover:text-foreground sm:text-sm">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
