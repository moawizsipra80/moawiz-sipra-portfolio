import { Section } from "./Section";

const skills = [
  { name: "Python", level: 95 },
  { name: "MERN Stack", level: 90 },
  { name: "Django", level: 88 },
  { name: "AI / ML", level: 85 },
  { name: "Backend Development", level: 92 },
  { name: "API Development", level: 90 },
  { name: "App Development", level: 80 },
  { name: "Data Science", level: 82 },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>The <span className="text-gradient">tech stack</span> I work with</>}
      subtitle="Tools and technologies I use to build modern, intelligent systems."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {skills.map((s, i) => (
          <div
            key={s.name}
            className="glass rounded-2xl p-5 animate-fade-up"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium">{s.name}</span>
              <span className="text-xs font-mono text-neon-blue">{s.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-secondary overflow-hidden">
              <div
                className="h-full bg-gradient-primary rounded-full"
                style={{ width: `${s.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
