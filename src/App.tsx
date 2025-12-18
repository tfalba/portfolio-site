// src/App.tsx
import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { ProjectsPage } from "./pages/ProjectsPage";
import { AboutPage } from "./pages/AboutPage";

const HEADER_GRADIENT =
  "linear-gradient(120deg,#FDF4C3 0%,#2abbab 18%,#92d858 36%,#d1c8b4 54%,#f97216 72%,#d48e8e 100%)";

const navButtonClass = ({
  isActive,
}: {
  isActive: boolean;
  isPending: boolean;
  isTransitioning?: boolean;
}) =>
  [
    "inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-body font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
    isActive
      ? "border-white/80 bg-white/90 text-brand-charcoal shadow-lg shadow-white/40"
      : "border-white/60 text-white/90 hover:bg-white/10 hover:text-white",
  ].join(" ");

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface/50 text-text">
      <header
        className="border-b border-border text-brand-charcoal shadow-sm"
        style={{ background: HEADER_GRADIENT }}
      >
        <div className="mx-auto flex max-w-[90rem] flex-col gap-4 px-4 pb-8 pt-10 md:flex-row md:items-end md:justify-between">
          <div className="flex-[1.3]">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-charcoal/80">
              Portfolio of
            </p>
            <h1 className="text-3xl font-heading tracking-tight text-brand-charcoal">
              Tracy Falba, Ph.D.
            </h1>
            <p className="font-body text-brand-charcoal/80">
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
      </header>

      <main className="mx-auto max-w-[90rem] space-y-6 px-5 py-6">
        <Routes>
          <Route
            path="/"
            element={<ProjectsPage />}
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
