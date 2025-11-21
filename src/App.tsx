// src/App.tsx
import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { ProjectsPage } from "./pages/ProjectsPage.tsx";
import { AboutPage } from "./pages/AboutPage.tsx";

const navButtonClass = ({
  isActive,
}: {
  isActive: boolean;
  isPending: boolean;
}) =>
  [
    "inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-body transition",
    isActive
      ? "border-brand-gold bg-brand-gold/90 text-brand-white"
      : "border-brand-light/25 text-brand-light/70 hover:border-brand-gold hover:text-brand-white",
  ].join(" ");

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-black via-brand-charcoal to-brand-black text-brand-light">
      <header className="border-b border-brand-light/10 bg-gradient-to-br from-brand-green/10 via-brand-green/80 to-brand-green/80 text-brand-white backdrop-blur place-center min-h-[max(15vh,100px)]">
        <div className="mx-auto flex max-w-6xl gap-1 px-3 py-5 justify-between md:flex-row contents-end items-end md:items-center md:justify-between">
          <div className="flex-1">
            <h1 className="text-2xl font-heading tracking-tight text-brand-white">
              Tracy Falba, Ph.D.
            </h1>
            <p className="text-sm font-body text-brand-light/70">
              Software Engineer • Frontend / Full Stack
            </p>
          </div>

          <div className="flex-1 flex flex-col gap-4 items-end md:justify-end">
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

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-4 lg:py-10">
        <Routes>
          <Route path="/" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

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
