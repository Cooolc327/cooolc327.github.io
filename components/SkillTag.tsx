export function SkillTag({ name }: { name: string }) {
  return (
    <span className="rounded-lg border bg-card px-3 py-1.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent">
      {name}
    </span>
  );
}
