import { Section } from "./Section";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Django E-commerce",
    desc: "Well-structured online store with cart, payments, admin panel and order management.",
    tech: ["Django", "Python", "PostgreSQL"],
    accent: "from-neon-purple to-neon-blue",
  },
  {
    title: "MERN Bookstore App",
    desc: "Full-stack CRUD application with authentication, REST APIs and a polished React UI.",
    tech: ["MongoDB", "Express", "React", "Node"],
    accent: "from-neon-blue to-neon-purple",
  },
  {
    title: "RAG Chatbot",
    desc: "PDF Q&A system with retrieval-augmented generation, vector search and streaming responses.",
    tech: ["Python", "LangChain", "OpenAI", "FAISS"],
    accent: "from-neon-purple to-neon-blue",
  },
  {
    title: "AI Healthcare System",
    desc: "Diagnosis assistant that combines ML models with a friendly conversational interface.",
    tech: ["Python", "Scikit-learn", "Flask"],
    accent: "from-neon-blue to-neon-purple",
  },
  {
    title: "Bitcoin Price Prediction",
    desc: "ML-based forecasting pipeline with time-series modeling and live dashboards.",
    tech: ["Python", "Pandas", "TensorFlow"],
    accent: "from-neon-purple to-neon-blue",
  },
  {
    title: "Limiter App (Upwork)",
    desc: "Deployed production app delivered as part of a client engagement on Upwork.",
    tech: ["React", "Node", "MongoDB"],
    accent: "from-neon-blue to-neon-purple",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Portfolio"
      title={<>Selected <span className="text-gradient">projects</span></>}
      subtitle="A handful of systems I've built across web, AI and data science."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group glass rounded-3xl overflow-hidden hover:border-primary/50 transition flex flex-col"
          >
            <div className={`relative h-40 bg-gradient-to-br ${p.accent} overflow-hidden`}>
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="font-display text-4xl font-bold text-primary-foreground/90">
                  {p.title.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </div>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-secondary/70 px-2.5 py-0.5 text-xs font-mono text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 text-sm">
                <a href="#" className="inline-flex items-center gap-1.5 text-neon-blue hover:text-foreground transition">
                  <ExternalLink className="h-3.5 w-3.5" /> Demo
                </a>
                <a href="#" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition">
                  <Github className="h-3.5 w-3.5" /> Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
