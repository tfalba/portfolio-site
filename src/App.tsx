// src/App.tsx
import React, { useState } from "react";
import { ProjectSection } from "./components/ProjectSection";
import { projects } from "./data/projectData.ts";

const App: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-black via-brand-charcoal to-brand-black text-brand-light">
      <header
        className="border-b border-brand-light/10 bg-gradient-to-br from-brand-green/10 via-brand-green/80 to-brand-green/80
 text-brand-white backdrop-blur"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
          <div>
            <h1 className="text-2xl font-heading tracking-tight text-brand-white">
              Your Name
            </h1>
            <p className="text-sm font-body text-brand-light/70">
              Software Engineer • Frontend / Full Stack
            </p>
          </div>

          <nav className="hidden gap-4 text-sm font-body md:flex">
            {projects.map((project) => (
              <a
                key={project.id}
                href={`#${project.id}`}
                className="transition text-brand-light/60 hover:text-brand-white active:text-brand-coral"
              >
                {project.name}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-10">
        <section className="mb-4 max-w-4xl space-y-2">
          <h2 className="text-3xl font-heading text-brand-white">
            Selected Projects
          </h2>
          <p className="text-sm font-body text-brand-light/80">
            A snapshot of the products and experiments I’ve built. Click any
            project to expand the full story, see screenshots, and jump directly
            into the live experience or source code.
          </p>
        </section>

        <div className="space-y-6 pt-4">
          {projects.map((project, index) => (
            <ProjectSection
              key={project.id}
              project={project}
              isOpen={openId === project.id}
              onToggle={() => handleToggle(project.id)}
              variant={index}
            />
          ))}
        </div>

        <footer className="mt-10 border-t border-brand-light/10 pt-6 text-sm font-body text-brand-light/70">
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
