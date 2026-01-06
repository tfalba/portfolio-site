import React from "react";
import { PortfolioPage } from "./pages/PortfolioPage";

const navLinks = [
  { href: "#hero", label: "Overview" },
  { href: "#projects", label: "Projects" },
  { href: "#story", label: "Story" },
  // { href: "#contact", label: "Connect" },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-ink text-white">
      <header className="sticky top-0 z-20 border-b border-brand-ink/60 bg-brand-ink/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[100rem] flex-col items:end  gap-2 md:gap-4 px-2 sm:px-6 py-5 md:flex-row md:items-center md:justify-between">
          <div className="min-w-max">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">
              Portfolio
            </p>
            <h1 className="text-2xl font-heading text-white">
              Tracy Falba, Ph.D.
            </h1>
          </div>
          <nav className="flex flex-wrap justify-end gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full border border-transparent px-4 py-2 transition hover:border-brand-ocean hover:text-brand-ocean"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="cta-link border border-brand-ember bg-brand-ember/10 text-white hover:bg-brand-ember hover:text-brand-ink"
            >
              Say hello
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[100rem] space-y-20 px-2 sm:px-6 py-12">
        <PortfolioPage />
      </main>

      <footer className="mx-auto max-w-[100rem] px-2 sm:px-6 pb-12 text-xs uppercase tracking-[0.35em] text-white/40">
        Crafted with React, TypeScript, Vite & Tailwind. Fonts: Archivo + Open Sans.
      </footer>
    </div>
  );
};

export default App;
