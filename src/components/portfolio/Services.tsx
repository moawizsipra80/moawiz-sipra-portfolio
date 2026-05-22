import { Section } from "./Section";
import { Globe, Bot, Briefcase, Smartphone } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Full-stack websites and dashboards using MERN Stack and Django with clean architecture.",
  },
  {
    icon: Bot,
    title: "AI Automation Systems",
    desc: "Intelligent chatbots, prediction models, RAG pipelines and automation tools that save real hours.",
  },
  {
    icon: Briefcase,
    title: "Freelancing Services",
    desc: "Production-ready solutions for clients on Upwork — from MVP to launch and beyond.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Scalable mobile and web applications with robust backends and modern UIs.",
  },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title={<>What I can <span className="text-gradient">build for you</span></>}
      subtitle="From web apps to AI agents — end-to-end solutions tailored to your goals."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {services.map((s) => (
          <div
            key={s.title}
            className="group glass rounded-3xl p-7 hover:border-primary/50 transition relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 blur-3xl transition" />
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground mb-4 glow">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
