import { Section } from "./Section";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Quotation Maker Software",
    desc: "My own product — a full quotation management tool for businesses to create, manage and export quotes.",
    tech: ["React", "Node", "MongoDB"],
    accent: "from-neon-purple to-neon-blue",
    repo: "https://github.com/moawizsipra80/Quotation-Software.git",
  },
  {
    title: "RAG-Based Chatbot",
    desc: "Retrieval-augmented chatbot with vector search over custom documents and streaming LLM responses.",
    tech: ["Python", "LangChain", "OpenAI", "FAISS"],
    accent: "from-neon-blue to-neon-purple",
    repo: "https://github.com/moawizsipra80/RAG_Based-Chatbot.git",
  },
  {
    title: "Bitcoin Prediction System",
    desc: "Machine learning pipeline for forecasting Bitcoin prices using time-series modeling.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    accent: "from-neon-purple to-neon-blue",
    repo: "https://github.com/moawizsipra80/Bitcoin-Prediction-System-Machine-Learning.git",
  },
  {
    title: "Customer Chatbot",
    desc: "Conversational AI assistant for customer support automation and FAQ handling.",
    tech: ["Python", "NLP", "AI"],
    accent: "from-neon-blue to-neon-purple",
    repo: "https://github.com/moawizsipra80/Customer-chatbot.git",
  },
  {
    title: "Liver Transplant Project",
    desc: "Python-based medical analysis project for liver transplant data processing and insights.",
    tech: ["Python", "Data Science", "ML"],
    accent: "from-neon-purple to-neon-blue",
    repo: "https://github.com/moawizsipra80/Liver-transplant-project-in-python.git",
  },
  {
    title: "Django E-commerce",
    desc: "Well-structured online store with cart, payments, admin panel and order management.",
    tech: ["Django", "Python", "PostgreSQL"],
    accent: "from-neon-blue to-neon-purple",
    repo: "https://github.com/moawizsipra80",
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
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-neon-blue hover:text-foreground transition"
                >
                  <Github className="h-3.5 w-3.5" /> View on GitHub
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
