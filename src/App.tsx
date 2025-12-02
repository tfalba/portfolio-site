// src/App.tsx
import React, { useEffect, useState } from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import { ProjectsPage } from "./pages/ProjectsPage";
import { AboutPage } from "./pages/AboutPage";
import { projects } from "./data/projectData";

type Theme = "light" | "dark";
const THEME_STORAGE_KEY = "portfolio-theme";

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
      ? "border-lightMode-lavender/80 dark:border-brand-red/70 bg-white dark:bg-brand-red/70 text-text shadow-lg shadow-lightMode-lavender/40 dark:shadow-brand-red/40"
      : "border-border text-text-muted hover:border-lightMode-lavender dark:hover:border-brand-red/70 hover:text-text",
  ].join(" ");

const App: React.FC = () => {
  const location = useLocation();
  const onProjectsRoute = location.pathname === "/";
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark";
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });
  const [openId, setOpenId] = useState<string | null>(projects[0]?.id ?? null);
  const [projectMenuOpen, setProjectMenuOpen] = useState(false);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    setProjectMenuOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="min-h-screen bg-surface text-text">
      <header className="border-b border-border bg-surface-muted/30 text-text shadow-sm bg-gradient-to-br from-lightMode-butter/80 via-lightsMode-butter/60 to-lightMode-white dark:bg-gradient-to-br dark:from-brand-blue/10 dark:via-brand-blue/80 dark:to-brand-blue/30">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 pb-8 pt-10 md:flex-row md:items-end md:justify-between mt-10">
          <div className="flex-[1.3]">
            <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
              Portfolio of
            </p>
            <h1 className="text-3xl font-heading tracking-tight text-text">
              Tracy Falba, Ph.D.
            </h1>
            <p className="text-sm font-body text-text-muted">
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
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </div>
        </div>
        {onProjectsRoute && (
          <div className="flex justify-end max-w-7xl px-4 mx-auto absolute top-[35px] right-0 py-4">
            <div className="relative inline-block text-left">
              <button
                type="button"
                onClick={() => setProjectMenuOpen((prev) => !prev)}
                aria-haspopup="true"
                aria-expanded={projectMenuOpen}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-card px-4 py-2 text-sm font-medium text-text transition hover:border-brand-light hover:text-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-light dark:bg-surface-muted"
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

      <main className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <Routes>
          <Route path="/" element={<ProjectsPage openId={openId} handleToggle={handleToggle}/>} />
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

const ThemeToggle: React.FC<{ theme: Theme; onToggle: () => void }> = ({
  theme,
  onToggle,
}) => {
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Activate ${isDark ? "light" : "dark"} mode`}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-card px-4 py-2 text-sm font-medium text-text shadow-sm transition hover:border-brand-light hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
      <span>{isDark ? "Light" : "Dark"} mode</span>
    </button>
  );
};

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="h-4 w-4 fill-current"
    aria-hidden="true"
  >
    <path d="M12 4.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 12 4.25Zm-4.03 1.28a.75.75 0 0 1 1.06 0l.36.36a.75.75 0 1 1-1.06 1.06l-.36-.36a.75.75 0 0 1 0-1.06Zm-2.97 6a.75.75 0 0 1 0-1.5h.5a.75.75 0 0 1 0 1.5h-.5Zm2.97 6.03a.75.75 0 0 1 1.06 0l.36.36a.75.75 0 1 1-1.06 1.06l-.36-.36a.75.75 0 0 1 0-1.06ZM12 18.25a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75Zm6.03-2.97a.75.75 0 0 1 0 1.06l-.36.36a.75.75 0 1 1-1.06-1.06l.36-.36a.75.75 0 0 1 1.06 0Zm-1.06-8.48.36-.36a.75.75 0 0 1 1.06 1.06l-.36.36a.75.75 0 1 1-1.06-1.06ZM18.25 12a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" />
  </svg>
);

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="h-4 w-4 fill-current"
    aria-hidden="true"
  >
    <path d="M20.53 14.25a.75.75 0 0 1-.97.9 7.25 7.25 0 0 1-6.71-12.6.75.75 0 0 1 1.12.84 5.75 5.75 0 1 0 7.04 7.04.75.75 0 0 1-.48.82Z" />
  </svg>
);

export default App;
