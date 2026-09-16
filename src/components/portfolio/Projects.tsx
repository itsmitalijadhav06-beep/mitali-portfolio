import { useState } from "react";
import { Section } from "./Section";
import { ExternalLink, Github, Sparkles } from "lucide-react";

type Project = {
  title: string;
  description: string;
  features?: string[];
  tech: string[];
  category: "AI/ML" | "Web" | "Systems";
  accent: string;
  github: string;
  demo?: string;
  status?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "PestGuard AI",
    description:
      "An AI-powered rice pest detection and monitoring platform that uses deep learning to identify pests from crop images, assess risk levels, provide recommendations, and visualize analytics through interactive dashboards.",
    features: [
      "Rice pest image classification",
      "Risk assessment (Low / Medium / High)",
      "Real-time monitoring dashboard",
      "Analytics and trend visualization",
      "Image upload and prediction",
      "Farmer-friendly recommendations",
    ],
    tech: ["TensorFlow", "FastAPI", "React", "TypeScript", "MongoDB", "Tailwind CSS"],
    category: "AI/ML",
    accent: "from-emerald-400/30 to-brand-cyan/30",
    github: "https://github.com/itsmitalijadhav06-beep/pest-detection",
    demo: "https://pest-detection-liard.vercel.app/",
    status: "Deployed",
    featured: true,
  },
  {
    title: "Voice-Enabled RAG Pipeline",
    description:
      "High-performance voice-to-answer Retrieval-Augmented Generation system, built for the Hacker House Goa 2026 shortlisting task. Pluggable speech-to-text, four chunking strategies over the AI4Bharat MS MARCO-XI dataset, FAISS retrieval, and groundedness guardrails.",
    features: [
      "Pluggable STT (Sarvam AI / ElevenLabs)",
      "Fixed, sentence-aware, semantic & metadata-aware chunking",
      "FAISS vector retrieval",
      "Measured latency: P50 5.85ms / P70 6.07ms / P100 12.75ms",
      "Groundedness & safety guardrails",
    ],
    tech: ["Python", "FastAPI", "FAISS", "Sentence Transformers"],
    category: "AI/ML",
    accent: "from-brand-cyan/30 to-brand-blue/30",
    github: "https://github.com/itsmitalijadhav06-beep/rag-voice-pipeline",
    demo: "https://rag-voice-pipeline-one.vercel.app",
    status: "Deployed",
  },
  {
    title: "AI Resume Ranker",
    description:
      "Semantic candidate-to-job matching system built for the Redrob India Runs Data & AI Challenge. Combines rule-based scoring, Sentence-Transformer semantic similarity, and behavioral signals to produce explainable, ranked candidate shortlists.",
    tech: ["Python", "Sentence Transformers", "NumPy"],
    category: "AI/ML",
    accent: "from-brand-purple/30 to-emerald-400/30",
    github: "https://github.com/itsmitalijadhav06-beep/redrob-ai-resume-ranker",
  },
  {
    title: "Smart Energy Monitoring System",
    description:
      "Collaborative team project for monitoring and analyzing energy consumption to improve efficiency and reduce wastage across homes and facilities, using HashMap and Max Heap-based tracking.",
    tech: ["Java", "Data Structures"],
    category: "Systems",
    accent: "from-amber-400/30 to-brand-purple/30",
    github: "https://github.com/itsmitalijadhav06-beep/Smart-Energy-Monitoring-System",
  },
  {
    title: "Farmer Transport System",
    description:
      "Agricultural logistics platform connecting farmers with transportation resources for efficient crop movement and supply-chain coordination.",
    tech: ["Python"],
    category: "Systems",
    accent: "from-brand-cyan/30 to-brand-blue/30",
    github: "https://github.com/itsmitalijadhav06-beep/Farmer-Transport-System",
  },
  {
    title: "MindEase — Stress Management",
    description:
      "Stress assessment and wellness platform that provides personalized recommendations, journaling, and stress-relief activities for students.",
    tech: ["Java", "JDBC", "SQL", "HTML", "CSS"],
    category: "Web",
    accent: "from-brand-purple/30 to-pink-400/30",
    github: "https://github.com/itsmitalijadhav06-beep/StressManagement",
  },
  {
    title: "EcoBright — E-Waste Management",
    description:
      "Smart e-waste management platform promoting responsible recycling and helping users locate nearby disposal facilities.",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Web",
    accent: "from-brand-blue/30 to-emerald-400/30",
    github: "https://github.com/itsmitalijadhav06-beep/E-WasteManagement",
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
            className={`rounded-full px-4 py-1.5 text-sm transition-all ${active === f
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
            className={`group relative overflow-hidden rounded-3xl glass-strong p-6 hover-lift ${p.featured ? "md:col-span-2" : ""
              }`}
          >
            <div
              className={`absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-60 transition-opacity group-hover:opacity-100`}
            />
            <div className="relative">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  {p.featured && <Sparkles size={16} className="text-brand-cyan" />}
                  <h3 className="font-display text-xl font-bold sm:text-2xl">{p.title}</h3>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-wider text-brand-cyan">
                    {p.category}
                  </span>
                  {p.status && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {p.status}
                    </span>
                  )}
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">{p.description}</p>

              {p.features && (
                <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-foreground/80 sm:text-sm">
                      <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-brand-cyan" />
                      {f}
                    </li>
                  ))}
                </ul>
              )}

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
              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg glass px-3 py-2 text-xs font-medium hover:text-brand-cyan"
                >
                  <Github size={14} /> Code
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-blue to-brand-purple px-3 py-2 text-xs font-medium text-background"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
