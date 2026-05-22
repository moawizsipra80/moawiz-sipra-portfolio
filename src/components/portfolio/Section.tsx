import { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-14">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-mono text-neon-blue mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-neon-blue" />
              {eyebrow}
            </div>
          )}
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-muted-foreground text-lg">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
