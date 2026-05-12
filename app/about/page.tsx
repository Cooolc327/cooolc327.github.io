import type { Metadata } from "next";
import { Timeline } from "@/components/Timeline";
import { SkillTag } from "@/components/SkillTag";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "关于我",
  description: "了解更多关于我的背景、技能和经历",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold">关于我</h1>

      <div className="mt-8 space-y-4">
        {profile.bio.map((paragraph, i) => (
          <p key={i} className="leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold">经历</h2>
        <div className="mt-8">
          <Timeline items={profile.experience} />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold">技能</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {profile.skills.map((skill) => (
            <SkillTag key={skill} name={skill} />
          ))}
        </div>
      </section>
    </div>
  );
}
