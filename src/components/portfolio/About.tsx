import { Section } from "./Section";
import { Brain, Code2, Briefcase, Video } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Backend Development", text: "Scalable APIs & system architecture" },
  { icon: Brain, title: "AI Automation", text: "Intelligent agents & ML pipelines" },
  { icon: Briefcase, title: "Freelance Experience", text: "Production apps on Upwork" },
  { icon: Video, title: "Content Creator", text: "Tech videos as a hobby" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title={<>Engineering <span className="text-gradient">intelligent systems</span></>}
      subtitle="Web app developer and Data Science student at Punjab University with strong experience in MERN, Django and AI systems."
    >
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 glass rounded-3xl p-8">
          <p className="text-muted-foreground leading-relaxed mb-4">
            I'm Muhammad Moawiz Sipra, a passionate developer focused on building scalable backend systems and intelligent AI solutions. I work across the full stack — from MERN and Django web apps to ML-powered automation tools.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Currently I work as a Software Engineer at Giant Eye Tech, deliver freelance projects on Upwork, and study Data Science at Punjab University (PUCIT). I love turning complex problems into clean, performant systems.
          </p>

          {/* Timeline */}
          <div className="mt-8 border-l border-border pl-6 space-y-6">
            {[
              { y: "Now", t: "Software Engineer @ Giant Eye Tech" },
              { y: "Now", t: "Freelance Developer on Upwork" },
              { y: "Hobby", t: "Tech video creation" },
            ].map((i) => (
              <div key={i.t} className="relative">
                <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-gradient-primary glow" />
                <div className="text-xs font-mono text-neon-blue">{i.y}</div>
                <div className="font-medium">{i.t}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
          {highlights.map((h) => (
            <div key={h.title} className="glass rounded-2xl p-5 hover:border-primary/40 transition">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground mb-3">
                <h.icon className="h-5 w-5" />
              </div>
              <div className="font-semibold mb-1">{h.title}</div>
              <div className="text-xs text-muted-foreground">{h.text}</div>
            </div>
          ))}
          <div className="sm:col-span-2 glass rounded-2xl p-6">
            <div className="text-xs font-mono text-neon-blue mb-1">Education</div>
            <div className="font-display text-xl font-semibold">Data Science</div>
            <div className="text-sm text-muted-foreground">
              Punjab University (PUCIT) · 3 years
            </div>
            <div className="text-xs text-muted-foreground/70 mt-2">
              One of Pakistan's oldest and top-ranked universities.
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
