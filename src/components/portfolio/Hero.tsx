import { useEffect, useState } from "react";
import { Download, FolderGit2, Mail, Github, Linkedin, Sparkles } from "lucide-react";
import portrait from "@/assets/mitali-portrait.jpeg";

const roles = [
  "AI/ML Engineer",
  "Full-Stack Developer",
  "Open Source Contributor",
  "CSE Student",
];

function useTyping(words: string[], speed = 80, pause = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          const next = word.slice(0, text.length + 1);
          setText(next);
          if (next === word) setTimeout(() => setDel(true), pause);
        } else {
          const next = word.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDel(false);
            setI((v) => v + 1);
          }
        }
      },
      del ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTyping(roles);

  return (
    <section id="home" className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Animated blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-brand-purple/30 blur-3xl animate-blob" />
        <div className="absolute top-40 -right-10 h-80 w-80 rounded-full bg-brand-blue/30 blur-3xl animate-blob [animation-delay:-4s]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-brand-cyan/20 blur-3xl animate-blob [animation-delay:-8s]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-[1.2fr_1fr]">
        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
            <Sparkles size={14} className="text-brand-cyan" />
            Available for internships & collaborations
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I'm <span className="gradient-text">Mitali Jadhav</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            <span className="text-foreground/90">I'm a </span>
            <span className="cursor-blink font-mono text-brand-cyan">{typed}</span>
          </p>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
Building intelligent solutions for agriculture, sustainability, and real-world impact.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan px-5 py-3 text-sm font-semibold text-background transition-transform hover:scale-105 glow"
            >
              <FolderGit2 size={16} /> View Projects
            </a>
            <a
  href="https://drive.google.com/file/d/1qGd6DBTZPjy-cheSDKLhtQFEnXS8vuG5/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-xl glass-strong px-5 py-3 text-sm font-semibold"
>
  <Download size={16} />
  Download Resume
</a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground"
            >
              <Mail size={16} /> Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3 text-muted-foreground">
            <a
              aria-label="GitHub"
              href="https://github.com/itsmitalijadhav06-beep"
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-xl glass hover:text-brand-cyan hover-lift"
            >
              <Github size={18} />
            </a>
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/mitali-jadhav-04549a331"
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-xl glass hover:text-brand-cyan hover-lift"
            >
              <Linkedin size={18} />
            </a>
            <a
              aria-label="Email"
              href="mailto:its.mitalijadhav06@gmail.com"
              className="grid h-10 w-10 place-items-center rounded-xl glass hover:text-brand-cyan hover-lift"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-blue via-brand-purple to-brand-cyan opacity-40 blur-2xl" />
          <div className="relative glass-strong rounded-[2rem] p-3 animate-float">
            <img
              src={portrait}
              alt="Mitali Jadhav portrait"
              width={768}
              height={768}
              className="aspect-square w-full rounded-[1.5rem] object-cover"
            />
            <div className="absolute -bottom-4 -right-4 rounded-2xl glass-strong px-4 py-3 text-xs">
              <div className="font-mono text-cyan-950 font-bold">
  {"<dev/>"}
</div>
              <div className="font-semibold">Open to Work</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
