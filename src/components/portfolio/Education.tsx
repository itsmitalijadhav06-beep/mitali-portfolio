import { Section } from "./Section";
import { GraduationCap, Github, Star, GitFork } from "lucide-react";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title={
        <>
          Academic <span className="gradient-text">background</span>
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="glass-strong rounded-3xl p-6 sm:p-8 hover-lift">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple text-background">
              <GraduationCap />
            </span>
            <div className="min-w-0">
              <h3 className="font-display text-xl font-bold">Bachelor of Technology</h3>
              <p className="text-sm text-muted-foreground">Computer Science Engineering</p>
            </div>
          </div>
          <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="glass rounded-2xl p-4">
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Expected</dt>
              <dd className="mt-1 font-display text-2xl font-bold gradient-text">2028</dd>
            </div>
            <div className="glass rounded-2xl p-4">
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">CGPA</dt>
              <dd className="mt-1 font-display text-2xl font-bold gradient-text">8.3</dd>
            </div>
          </dl>
          <p className="mt-5 text-sm text-muted-foreground">
            Focus areas: Artificial Intelligence, Machine Learning, Data Structures,
            Algorithms, and Full-Stack Web Development.
          </p>
        </div>

        <div className="glass-strong rounded-3xl p-6 sm:p-8 hover-lift">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-purple to-brand-cyan text-background">
              <Github />
            </span>
            <div className="min-w-0">
              <h3 className="font-display text-xl font-bold">GitHub</h3>
              <a
                href="https://github.com/mitalijadhav"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted-foreground hover:text-brand-cyan"
              >
                @mitalijadhav
              </a>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3 text-sm">
            <div className="glass rounded-2xl p-4 text-center">
              <Star size={16} className="mx-auto text-brand-cyan" />
              <div className="mt-1 font-display text-xl font-bold">50+</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Stars</div>
            </div>
            <div className="glass rounded-2xl p-4 text-center">
              <GitFork size={16} className="mx-auto text-brand-cyan" />
              <div className="mt-1 font-display text-xl font-bold">15+</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Forks</div>
            </div>
            <div className="glass rounded-2xl p-4 text-center">
              <Github size={16} className="mx-auto text-brand-cyan" />
              <div className="mt-1 font-display text-xl font-bold">20+</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Repos</div>
            </div>
          </div>
          <a
            href="https://github.com/mitalijadhav"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple px-4 py-2 text-sm font-medium text-background"
          >
            <Github size={16} /> View GitHub Profile
          </a>
        </div>
      </div>
    </Section>
  );
}
