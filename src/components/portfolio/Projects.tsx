import { useState } from "react";
import { Section } from "./Section";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  category: "AI/ML" | "Web" | "Systems";
  accent: string;
};

const projects: Project[] = [
  {
    title: "PestGuard AI",
    description:
      "AI-powered rice pest detection using deep learning. Detects pests from images with risk analysis, monitoring dashboards, and recommendations for farmers.",
    tech: ["TensorFlow", "FastAPI", "React", "MongoDB", "TypeScript"],
    category: "AI/ML",
    accent: "from-emerald-400/30 to-brand-cyan/30",
  },
  {
    title: "MindEase",
    description:
      "Stress management web app that evaluates stress through assessments and provides personalized recommendations and wellness activities.",
    tech: ["Java", "JDBC", "SQL", "HTML", "CSS"],
    category: "Web",
    accent: "from-brand-purple/30 to-pink-400/30",
  },
  {
    title: "EcoBright",
    description:
      "Smart e-waste management platform promoting responsible recycling and helping users locate disposal centers.",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Web",
    accent: "from-brand-blue/30 to-emerald-400/30",
  },
  {
    title: "EnerVision",
    description:
      "Smart energy monitoring system that tracks power consumption and provides insights to optimize energy usage.",
    tech: ["Java", "Data Structures"],
    category: "Systems",
    accent: "from-amber-400/30 to-brand-purple/30",
  },
  {
    title: "AgriMove",
    description:
      "Farmer transport management system designed to streamline agricultural logistics and transportation services.",
    tech: ["Python"],
    category: "Systems",
    accent: "from-brand-cyan/30 to-brand-blue/30",
  },
];

const filters = ["All", "AI/ML", "Web", "Systems"] as const;

export function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={
        <>
          Selected <span className="gradient-text">work</span>
        </>
      }
      description="A mix of AI research, full-stack products and systems engineering."
    >
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full px-4 py-1.5 text-sm transition-all ${
              active === f
                ? "bg-gradient-to-r from-brand-blue to-brand-purple text-background"
                : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {visible.map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-3xl glass-strong p-6 hover-lift"
          >
            <div
              className={`absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-60 transition-opacity group-hover:opacity-100`}
            />
            <div className="relative">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-bold sm:text-2xl">{p.title}</h3>
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-wider text-brand-cyan">
                  {p.category}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-2">
                <a
                  href="https://github.com/mitalijadhav"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg glass px-3 py-2 text-xs font-medium hover:text-brand-cyan"
                >
                  <Github size={14} /> Code
                </a>
                <a
                  href="https://github.com/mitalijadhav"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-blue to-brand-purple px-3 py-2 text-xs font-medium text-background"
                >
                  <ExternalLink size={14} /> Live
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
