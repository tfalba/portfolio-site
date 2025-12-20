// src/App.tsx
import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { ProjectsPage } from "./pages/ProjectsPage";
import { AboutPage } from "./pages/AboutPage";

const HEADER_GRADIENT =
  "linear-gradient(105deg,#ffeb3b 0%,#2abbab 17%,#92d858 36%,#d1c8b4 53%,#f97216 71%,#d48e8e 88%)";
const HEADER_HEIGHT = "70vh";

const navButtonClass = ({
  isActive,
}: {
  isActive: boolean;
  isPending: boolean;
  isTransitioning?: boolean;
}) =>
  [
    "relative inline-flex items-center justify-center rounded-full px-5 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white btn-3d",
    isActive ? "btn-3d-active" : "btn-3d-ghost",
  ].join(" ");

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface/50 text-text">
      <header
        className="sticky top-0 z-0 border-b border-border text-brand-black shadow-sm"
        style={{ background: HEADER_GRADIENT, height: HEADER_HEIGHT }}
      >
            <div className="p-6 pt-10 flex flex-wrap gap-2 justify-end md:flex-nowrap max-w-[100rem] mx-auto">
              <NavLink to="/" className={navButtonClass}>
                Projects
              </NavLink>
              <NavLink to="/about" className={navButtonClass}>
                About me
              </NavLink>
            </div>
        <div className="mx-auto flex h-full max-w-[100rem] flex-col justify-start gap-2 px-6 pb-8 pt-4 items-start">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-black/80">
              Portfolio of
            </p>
            <h1 className="text-3xl font-heading tracking-tight text-brand-black">
              Tracy Falba, Ph.D.
            </h1>
            <p className="font-body text-brand-black/80">
              Software Engineer • Frontend / Full Stack
            </p>     
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-[100rem] space-y-6 px-5 py-6">
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
