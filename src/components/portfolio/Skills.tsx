import { Section } from "./Section";
import { Code2, Database, Globe, Wrench, Brain, Cloud } from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Languages",
    items: [
      "Java",
      "Python",
      "C++",
      "SQL",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    items: [
      "React",
      "FastAPI",
      "Node.js",
      "Express.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    icon: Database,
    title: "Database",
    items: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "JDBC",
    ],
  },
  {
    icon: Brain,
    title: "AI / ML",
    items: [
      "TensorFlow",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Transfer Learning",
      "CNNs",
      "Image Classification",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    items: [
      "Vercel",
      "Render",
      "Hugging Face",
      "GitHub",
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Jupyter Notebook",
      "Maven",
    ],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={
        <>
          My <span className="gradient-text">technical</span> toolkit
        </>
      }
      description="A blend of AI, full-stack, and developer tooling I use to ship production-grade work."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <div key={g.title} className="glass rounded-3xl p-6 hover-lift">
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple text-background">
                <g.icon size={18} />
              </span>
              <h3 className="font-display text-lg font-bold">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span
                  key={i}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground/90 transition-colors hover:border-brand-cyan/50 hover:text-brand-cyan"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
