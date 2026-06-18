import { Section } from "./Section";
import { Trophy, GitBranch, Cloud, Code2, Sparkles } from "lucide-react";

const items = [
  {
    icon: Trophy,
    title: "Top 30 Winner",
    org: "Innovation Marathon 2.0",
    year: "2025",
  },
  {
    icon: GitBranch,
    title: "Open Source Contributor",
    org: "GSSoC'26",
    year: "2026",
  },
  {
    icon: Cloud,
    title: "Technical Team Member",
    org: "AWS Student Builder Program",
    year: "2025",
  },
  {
    icon: Code2,
    title: "Hackathon Participant",
    org: "SIH & Multiple National Hackathons",
    year: "2024 – 2025",
  },
  {
    icon: Sparkles,
    title: "Selected for AI & Tech Programs",
    org: "Various national initiatives",
    year: "Ongoing",
  },
];

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title={
        <>
          Milestones & <span className="gradient-text">recognition</span>
        </>
      }
    >
      <ol className="relative space-y-6 border-l border-white/10 pl-6 sm:pl-10">
        {items.map((it, idx) => (
          <li key={it.title} className="relative animate-fade-in" style={{ animationDelay: `${idx * 80}ms` }}>
            <span className="absolute -left-[34px] sm:-left-[46px] grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-blue via-brand-purple to-brand-cyan text-background shadow-lg">
              <it.icon size={16} />
            </span>
            <div className="glass rounded-2xl p-5 hover-lift">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-lg font-bold">{it.title}</h3>
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-muted-foreground">
                  {it.year}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{it.org}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
