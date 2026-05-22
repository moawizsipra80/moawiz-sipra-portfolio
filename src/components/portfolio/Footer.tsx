export function Footer() {
  return (
    <footer className="border-t border-border py-10 mt-10">
      <div className="container mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Muhammad Moawiz Sipra. All rights reserved.</div>
        <div className="font-mono text-xs">
          Built with <span className="text-gradient">React · TanStack · Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
