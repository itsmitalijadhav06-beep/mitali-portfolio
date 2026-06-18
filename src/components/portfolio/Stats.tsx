import { useEffect, useRef, useState } from "react";
import { Award, Code2, Github, Rocket } from "lucide-react";

const stats = [
  { icon: Code2, label: "Projects Built", value: 5, suffix: "+" },
  { icon: Github, label: "Open Source", value: 20, suffix: "+" },
  { icon: Award, label: "Hackathons", value: 8, suffix: "+" },
  { icon: Rocket, label: "CGPA", value: 8.3, suffix: "" },
];

function useCount(target: number, run: boolean, duration = 1400) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const isFloat = !Number.isInteger(target);
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(isFloat ? +(target * eased).toFixed(1) : Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return n;
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setRun(true),
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-4 py-10">
      <div className="glass-strong grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/5 md:grid-cols-4">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} run={run} />
        ))}
      </div>
    </section>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  suffix,
  run,
}: {
  icon: typeof Code2;
  label: string;
  value: number;
  suffix: string;
  run: boolean;
}) {
  const n = useCount(value, run);
  return (
    <div className="flex flex-col items-center gap-2 bg-background/40 p-6 text-center">
      <Icon size={22} className="text-brand-cyan" />
      <div className="font-display text-3xl font-bold gradient-text sm:text-4xl">
        {n}
        {suffix}
      </div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}
