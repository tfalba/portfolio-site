// src/App.tsx
import React, { useEffect, useState } from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import { ProjectsPage } from "./pages/ProjectsPage";
import { AboutPage } from "./pages/AboutPage";
import { projects } from "./data/projectData";

const navButtonClass = ({
  isActive,
}: {
  isActive: boolean;
  isPending: boolean;
  isTransitioning?: boolean;
}) =>
  [
    "inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-body font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light",
    isActive
      ? "border-lightMode-lavender/80 bg-white text-text shadow-lg shadow-lightMode-lavender/40"
      : "border-border text-text-muted hover:border-lightMode-lavender hover:text-text",
  ].join(" ");

const App: React.FC = () => {
  const location = useLocation();
  const onProjectsRoute = location.pathname === "/";
  const [openProjects, setOpenProjects] = useState<Record<string, boolean>>({});
  const [projectMenuOpen, setProjectMenuOpen] = useState(false);

  const handleToggle = (id: string) => {
    setOpenProjects((prev) => {
      const isCurrentlyOpen = !!prev[id];
      const next = { ...prev, [id]: !isCurrentlyOpen };

      if (
        !isCurrentlyOpen &&
        typeof window !== "undefined" &&
        typeof document !== "undefined"
      ) {
        requestAnimationFrame(() => {
          const target = document.getElementById(id);
          if (!target) return;
          const { top } = target.getBoundingClientRect();
          const targetTop = window.scrollY + top - 24;
          window.scrollTo({
            top: targetTop > 0 ? targetTop : 0,
            behavior: "smooth",
          });
        });
      }

      return next;
    });
  };

  useEffect(() => {
    setProjectMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-surface/50 text-text">
      <header className="border-b border-border bg-surface-muted/30 text-text shadow-sm bg-gradient-to-br from-lightMode-butter/80 via-lightsMode-butter/60 to-lightMode-white">
        <div className="mx-auto flex max-w-[90rem] flex-col gap-4 px-4 pb-8 pt-10 md:flex-row md:items-end md:justify-between mt-10">
          <div className="flex-[1.3]">
            <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
              Portfolio of
            </p>
            <h1 className="text-3xl font-heading tracking-tight text-text">
              Tracy Falba, Ph.D.
            </h1>
            <p className="font-body text-text-muted">
              Software Engineer • Frontend / Full Stack
            </p>
          </div>

          <div className="flex flex-2 gap-3 md:flex-row items-center justify-end">
            <div className="flex flex-wrap gap-2">
              <NavLink to="/" className={navButtonClass}>
                Projects
              </NavLink>
              <NavLink to="/about" className={navButtonClass}>
                About me
              </NavLink>
            </div>
          </div>
        </div>
        {onProjectsRoute && (
          <div className="flex justify-end max-w-[90rem] px-4 mx-auto absolute top-[35px] right-0 py-4">
            <div className="relative inline-block text-left">
              <button
                type="button"
                onClick={() => setProjectMenuOpen((prev) => !prev)}
                aria-haspopup="true"
                aria-expanded={projectMenuOpen}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-text transition hover:border-brand-light hover:text-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-light"
              >
                Browse projects
                <span
                  className={`text-xs transition ${
                    projectMenuOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              <div
                className={`absolute right-0 mt-2 w-60 origin-top-right rounded-2xl border border-border bg-surface-card/95 shadow-2xl ring-1 ring-border/40 transition ${
                  projectMenuOpen
                    ? "scale-100 opacity-100"
                    : "pointer-events-none scale-95 opacity-0"
                }`}
              >
                <nav className="py-2 text-sm font-body text-text">
                  {projects.map((project) => (
                    <a
                      key={project.id}
                      href={`#${project.id}`}
                      onClick={() => {
                        handleToggle(project.id);
                        setProjectMenuOpen(false);
                      }}
                      className="flex items-center justify-between px-4 py-2 text-text-muted transition hover:bg-light/10 hover:text-text"
                    >
                      {project.name}
                      <span className="text-xs text-text-muted">↘</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-[90rem] space-y-6 px-5 py-6">
        <Routes>
          <Route
            path="/"
            element={
              <ProjectsPage
                openProjects={openProjects}
                handleToggle={handleToggle}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

        <footer className="mt-12 border-t border-border pt-6 text-sm font-body text-text-muted">
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
