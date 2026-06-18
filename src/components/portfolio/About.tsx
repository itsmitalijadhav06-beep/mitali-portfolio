import { Section } from "./Section";
import { Brain, Code, Sparkles, Users } from "lucide-react";

const highlights = [
  { icon: Brain, title: "AI & Machine Learning", text: "Deep learning, CV and applied ML." },
  { icon: Code, title: "Full-Stack Development", text: "React, FastAPI and modern stacks." },
  { icon: Sparkles, title: "Open Source", text: "Active contributor in GSSoC and more." },
  { icon: Users, title: "Social Impact", text: "Tech that solves real-world problems." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title={
        <>
          Engineering <span className="gradient-text">Solutions</span> with AI, Data, and Modern Web Technologies.
        </>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="glass-strong rounded-3xl p-6 sm:p-8">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            I am a Computer Science Engineering student passionate about Artificial
            Intelligence, Machine Learning, Full-Stack Development, and Open Source. I enjoy
            building real-world solutions that create social impact and solve practical
            problems through technology.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            From training computer vision models that help farmers, to building wellness
            apps and smart energy systems — I love shipping projects that matter.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {highlights.map((h) => (
            <div key={h.title} className="glass rounded-2xl p-4 hover-lift">
              <h.icon size={20} className="text-brand-cyan" />
              <div className="mt-3 text-sm font-semibold">{h.title}</div>
              <p className="mt-1 text-xs text-muted-foreground">{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
