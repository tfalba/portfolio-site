import React from "react";
import { PortfolioPage } from "./pages/PortfolioPage";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-ink text-white">
      <header className="sticky top-0 z-20 border-b border-brand-ink/60 bg-brand-ink/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[100rem] flex-col items:end  gap-2 md:gap-4 px-2 sm:px-6 py-2 md:py-5 md:flex-row md:items-center md:justify-between">
          <div className="min-w-max">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">
              Portfolio
            </p>
            <h1 className="text-2xl font-heading text-white">
              Tracy Falba, Ph.D.
            </h1>
          </div>
          <nav className="flex flex-wrap ml-auto max-w-[78vw] md:max-w-full justify-end gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            <a
              href="#hero"
              className="cta-link text-sm border-white/40 bg-white/5 hover:border-white hover:bg-white/80"
            >
              Overview
            </a>
            <a
              href="#projects"
              className="cta-link border-brand-ocean bg-brand-ocean/20 hover:bg-brand-ocean hover:text-brand-ink"
            >
              Projects
            </a>
            <a
              href="#story"
              className="cta-link bg-brand-gold/5 border-brand-gold hover:bg-brand-gold hover:text-brand-ink"
            >
              My Story
            </a>
            <a
              href="#contact"
              className="cta-link bg-ember/5 border border-brand-ember hover:bg-brand-ember "
            >
              Connect
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[100rem] space-y-20 px-4 sm:px-6 py-4 md:py-8 lg:py-12">
        <PortfolioPage />
      </main>

      <footer className="mx-auto max-w-[100rem] px-2 sm:px-6 pb-12 text-xs uppercase tracking-[0.35em] text-white/40">
        Crafted with React, TypeScript, Vite & Tailwind. Fonts: Archivo + Open
        Sans.
      </footer>
    </div>
  );
};

export default App;
