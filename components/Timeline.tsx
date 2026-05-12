export function Timeline({
  items,
}: {
  items: {
    title: string;
    company: string;
    period: string;
    description: string;
  }[];
}) {
  return (
    <div className="relative border-l-2 border-border pl-6">
      {items.map((item, i) => (
        <div key={i} className="relative pb-10 last:pb-0">
          <div className="absolute -left-[25px] h-3 w-3 rounded-full border-2 border-border bg-background" />
          <span className="text-xs font-medium text-accent">{item.period}</span>
          <h3 className="mt-1 font-semibold">{item.title}</h3>
          <p className="text-sm text-muted">{item.company}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
