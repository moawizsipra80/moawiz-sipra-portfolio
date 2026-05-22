import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-neon-purple/30 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-neon-blue/30 blur-3xl animate-pulse-glow" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs mb-6">
              <span className="h-2 w-2 rounded-full bg-neon-blue animate-pulse" />
              Available for new projects
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
              Muhammad <br />
              <span className="text-gradient">Moawiz Sipra</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-3 max-w-xl">
              Building intelligent systems with AI, Data Science & Full-Stack Development.
            </p>
            <p className="text-sm text-neon-blue/90 font-mono mb-8">
              Developer · AI Automation Engineer · Data Science Student
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-medium text-primary-foreground glow hover:opacity-90 transition"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-medium hover:border-primary/50 transition"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative mx-auto aspect-square max-w-md">
              <div className="absolute inset-0 rounded-full bg-gradient-primary blur-3xl opacity-40 animate-pulse-glow" />
              <div className="relative h-full w-full rounded-full glass grid place-items-center animate-float">
                <div className="absolute inset-4 rounded-full border border-neon-purple/30" />
                <div className="absolute inset-10 rounded-full border border-neon-blue/30" />
                <div className="text-center">
                  <div className="text-7xl font-display font-bold text-gradient">MS</div>
                  <div className="mt-2 font-mono text-xs text-muted-foreground">
                    {"<developer />"}
                  </div>
                </div>
                {/* Orbiting dots */}
                <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-neon-blue glow-blue" />
                </div>
                <div className="absolute inset-0 animate-[spin_30s_linear_infinite_reverse]">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-neon-purple glow" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { v: "15+", l: "Projects Delivered" },
            { v: "3+", l: "Years Coding" },
            { v: "10+", l: "Happy Clients" },
            { v: "AI/ML", l: "Specialization" },
          ].map((s) => (
            <div key={s.l} className="glass rounded-2xl p-5 text-center">
              <div className="text-3xl font-bold text-gradient">{s.v}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
