import { Section } from "./Section";

const items = [
  {
    role: "Software Engineer",
    company: "Giant Eye Tech",
    period: "Present",
    points: [
      "Backend system development and architecture",
      "Bug fixing, system improvements and performance work",
      "Cross-team collaboration on production features",
    ],
  },
  {
    role: "Freelance Developer",
    company: "Upwork",
    period: "Ongoing",
    points: [
      "Delivered production-level apps including the Limiter project",
      "Client-facing scoping, delivery and post-launch support",
    ],
  },
  {
    role: "Content Creator",
    company: "Hobby",
    period: "Side project",
    points: [
      "Creating tech content and developer videos",
    ],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>Where I've <span className="text-gradient">shipped work</span></>}
    >
      <div className="space-y-5">
        {items.map((i) => (
          <div key={i.role} className="glass rounded-3xl p-7 hover:border-primary/40 transition">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <h3 className="text-xl font-semibold">{i.role}</h3>
                <div className="text-sm text-neon-blue font-mono">{i.company}</div>
              </div>
              <span className="rounded-full glass px-3 py-1 text-xs">{i.period}</span>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {i.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-primary shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
