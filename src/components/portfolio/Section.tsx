import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:py-28">
      <div className="mb-10 max-w-2xl">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-mono uppercase tracking-wider text-brand-cyan">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
          {eyebrow}
        </div>
        <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
        {description && (
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p>
        )}
      </div>
      {children}
    </section>
  );
}
