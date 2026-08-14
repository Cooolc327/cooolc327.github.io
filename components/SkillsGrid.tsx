import { SkillTag } from "./SkillTag";

export function SkillsGrid({
  groups,
}: {
  groups: { category: string; items: string[] }[];
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {groups.map((group) => (
        <div key={group.category}>
          <h3 className="text-sm font-semibold">{group.category}</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <SkillTag key={item} name={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
