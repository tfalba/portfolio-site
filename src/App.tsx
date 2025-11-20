// src/App.tsx
import React from "react";
import { ProjectSection, type Project } from "./components/ProjectSection";
import {projects} from "./data/projectData.ts";

// const projects: Project[] = [/* ...your four project objects... */];

const App: React.FC = () => {
  return (
    <div className="bg-brand-light text-brand-charcoal">
      <header className="border-b border-brand-charcoal/20 bg-brand-black text-brand-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5">
          <div>
            <h1 className="text-2xl font-heading tracking-tight">
              Your Name
            </h1>
            <p className="text-sm font-body text-brand-light/80">
              Software Engineer • Frontend / Full Stack
            </p>
          </div>

          <nav className="hidden gap-4 text-sm font-body md:flex">
            {projects.map((project) => (
              <a
                key={project.id}
                href={`#${project.id}`}
                className="transition text-brand-light/80 hover:text-brand-coral active:text-brand-red"
              >
                {project.name}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-6 px-4 py-10">
        <section className="mb-4 max-w-3xl space-y-2">
          <h2 className="text-3xl font-heading text-brand-black">
            Selected Projects
          </h2>
          <p className="text-sm font-body text-brand-charcoal">
            A snapshot of the products and experiments I’ve built. Click any
            project to expand the full story, see screenshots, and jump directly
            into the live experience or source code.
          </p>
        </section>

        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectSection key={project.id} project={project} />
          ))}
        </div>

        <footer className="mt-10 border-t border-brand-charcoal/20 pt-6 text-sm font-body text-brand-charcoal/70">
          <p>
            Built with React, TypeScript, Vite, and Tailwind CSS. Styled with
            Cardo &amp; Didact Gothic.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;
