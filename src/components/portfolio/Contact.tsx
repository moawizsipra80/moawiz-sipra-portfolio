import { Section } from "./Section";
import { Mail, Phone, Linkedin, Github, Briefcase, Send } from "lucide-react";
import { useState } from "react";

const contacts = [
  { icon: Mail, label: "Email", value: "mmoawizsipra@gmail.com", href: "mailto:mmoawizsipra@gmail.com" },
  { icon: Phone, label: "Phone", value: "+92 314 0692389", href: "tel:+923140692389" },
  { icon: Linkedin, label: "LinkedIn", value: "muhammad-moawiz-sipra", href: "https://www.linkedin.com/in/muhammad-moawiz-sipra-a12342222/" },
  { icon: Github, label: "GitHub", value: "moawizsipra80", href: "https://github.com/moawizsipra80" },
  { icon: Briefcase, label: "Upwork", value: "View profile", href: "https://www.upwork.com/freelancers/~01ddc77465b2abfe0e" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's build <span className="text-gradient">something great</span></>}
      subtitle="Open to freelance projects, collaborations and full-time roles."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 space-y-3">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 glass rounded-2xl p-4 hover:border-primary/50 transition"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">{c.label}</div>
                <div className="text-sm font-medium truncate group-hover:text-neon-blue transition">
                  {c.value}
                </div>
              </div>
            </a>
          ))}
        </div>

        <form
          className="lg:col-span-3 glass rounded-3xl p-7"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 3000);
          }}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Name</label>
              <input
                required
                className="w-full rounded-xl bg-input/60 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Email</label>
              <input
                required
                type="email"
                className="w-full rounded-xl bg-input/60 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-xs text-muted-foreground mb-1.5 block">Message</label>
            <textarea
              required
              rows={6}
              className="w-full rounded-xl bg-input/60 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="mt-5 group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-medium text-primary-foreground glow hover:opacity-90 transition"
          >
            {sent ? "Message sent ✓" : (
              <>
                Send Message
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>
      </div>
    </Section>
  );
}
