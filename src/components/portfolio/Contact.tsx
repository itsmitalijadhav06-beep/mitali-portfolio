import { useState } from "react";
import { Section } from "./Section";
import { Mail, Github, Linkedin, Send, Check } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(80),
  email: z.string().trim().email("Invalid email").max(160),
  message: z.string().trim().min(5, "Too short").max(1000),
});

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    const body = encodeURIComponent(
      `From: ${parsed.data.name} <${parsed.data.email}>\n\n${parsed.data.message}`,
    );
    window.location.href = `mailto:mitalijadhav@example.com?subject=${encodeURIComponent(
      "Portfolio contact from " + parsed.data.name,
    )}&body=${body}`;
    setSent(true);
    toast.success("Opening your email client...");
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={
        <>
          Let's <span className="gradient-text">build</span> together
        </>
      }
      description="Open to internships, collaborations, and meaningful conversations."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-3">
          <ContactCard
            icon={Mail}
            label="Email"
            value="its.mitalijadhav06@gmail.com"
            href="mailto:its.mitalijadhav06@gmail.com"
          />
          <ContactCard
            icon={Linkedin}
            label="LinkedIn"
            value="linkedin.com/in/mitalijadhav"
            href="https://www.linkedin.com/in/mitali-jadhav-04549a331"
          />
          <ContactCard
            icon={Github}
            label="GitHub"
            value="github.com/mitalijadhav"
            href="https://github.com/itsmitalijadhav06-beep"
          />
        </div>

        <form
          onSubmit={onSubmit}
          className="glass-strong rounded-3xl p-6 sm:p-8 space-y-4"
          noValidate
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field name="name" label="Your name" placeholder="Jane Doe" />
            <Field name="email" type="email" label="Email" placeholder="jane@company.com" />
          </div>
          <div>
            <label className="mb-1 block text-xs uppercase tracking-wider text-muted-foreground">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              maxLength={1000}
              placeholder="Tell me about your project, role, or idea..."
              className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-brand-cyan/60 focus:ring-2 focus:ring-brand-cyan/30"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan px-5 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.01] sm:w-auto"
          >
            {sent ? <Check size={16} /> : <Send size={16} />}
            {sent ? "Sent" : "Send Message"}
          </button>
        </form>
      </div>
    </Section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="glass flex items-center gap-4 rounded-2xl p-5 hover-lift"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple text-background">
        <Icon size={18} />
      </span>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="truncate text-sm font-medium">{value}</div>
      </div>
    </a>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1 block text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required
        maxLength={160}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-brand-cyan/60 focus:ring-2 focus:ring-brand-cyan/30"
      />
    </div>
  );
}
