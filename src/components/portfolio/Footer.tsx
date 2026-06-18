import { useEffect, useState } from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-16 border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          Designed and Developed by{" "}
          <span className="gradient-text font-semibold">Mitali Jadhav</span>
        </p>
        <div className="flex items-center gap-2 text-muted-foreground">
          <a
            href="https://github.com/itsmitalijadhav06-beep"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-lg glass hover:text-brand-cyan"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/mitali-jadhav-04549a331"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-lg glass hover:text-brand-cyan"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:its.mitalijadhav06@gmail.com"
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-lg glass hover:text-brand-cyan"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-brand-blue via-brand-purple to-brand-cyan text-background shadow-lg glow animate-fade-in"
    >
      <ArrowUp size={18} />
    </button>
  );
}
