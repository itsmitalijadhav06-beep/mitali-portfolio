import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(t);
  }, []);
  if (done) return null;
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-2 border-white/10" />
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-brand-cyan border-r-brand-purple" />
          <div className="absolute inset-2 grid place-items-center rounded-full bg-gradient-to-br from-brand-blue via-brand-purple to-brand-cyan text-background font-display font-bold">
            MJ
          </div>
        </div>
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Loading portfolio
        </div>
      </div>
    </div>
  );
}
