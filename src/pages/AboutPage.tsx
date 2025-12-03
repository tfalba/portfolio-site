// src/pages/AboutPage.tsx
import { useState } from "react";

const resumePdf = new URL(
  "../assets/Tracy Falba Resume Oct 2025.pdf",
  import.meta.url,
).href;

export const AboutPage: React.FC = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <>
  <section className="space-y-8 rounded-3xl border border-border bg-surface/95 p-6 text-text shadow-xl dark:bg-surface-card">
    <header className="space-y-3">
      <p className="text-xs uppercase tracking-[0.3em] text-text-muted">
        About me
      </p>
      <h2 className="text-4xl font-heading">
        Economist turned full-stack product builder
      </h2>
      <p className="text-base text-text-muted md:text-lg">
        I pair a decade of academic research and teaching with modern product
        engineering skills to craft thoughtful, human-centered experiences—most
        recently with React, TypeScript, and Node across complex SaaS products.
      </p>
    </header>

    <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
      <article className="space-y-4 text-base leading-relaxed text-text">
        <p>
          Before entering software, I spent more than a decade as a{" "}
          <span className="font-semibold">
            Visiting Assistant Professor and Research Scholar in Economics at
            Duke University
          </span>
          , teaching health economics, public finance, and social insurance
          while advising undergraduates and helping guide the major.
        </p>

        <p>
          I also served as an{" "}
          <span className="font-semibold">
            Associate Research Scientist at Yale University
          </span>
          , co-investigating over $10M in funded health policy research and
          publishing across economics, medicine, and public policy journals.
          Those projects strengthened my data fluency, writing, and stakeholder
          collaboration.
        </p>

        <p>
          Driven to build tools that make complex decisions clearer, I
          transitioned into software engineering and product development, where
          I now blend systems thinking with design sensitivity.
        </p>

        <p>
          Most recently, I worked as a{" "}
          <span className="font-semibold">Software Developer at Levitate</span>,
          shipping customer-facing features and reusable UI in{" "}
          <span className="font-semibold">
            React, TypeScript, Node, and REST APIs
          </span>
          . I collaborated closely with designers and PMs, iterating on flows,
          surfacing insights from data, and delivering polished experiences in
          an Agile environment.
        </p>

        <p>
          Today I focus on frontend-forward, full-stack work that demands craft,
          clarity, and measurable impact—especially within finance, health, and
          education products.
        </p>
      </article>

      <aside className="space-y-6 rounded-3xl border border-border bg-surface-muted/80 p-5 shadow-lg shadow-black/5 dark:bg-brand-black/60">
        <div className="flex flex-col items-center text-center">
          <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-surface-card shadow-md shadow-black/10 dark:border-brand-charcoal">
            <img
              src="/src/assets/headshot.jpeg"
              alt="Tracy Falba headshot"
              className="h-full w-full object-cover"
            />
          </div>
          <h3 className="mt-4 font-heading text-xl">Tracy Falba, Ph.D.</h3>
          <p className="text-sm text-text-muted">
            Software Engineer • Frontend / Full Stack
          </p>
        </div>

        <InfoBlock
          title="Current focus"
          items={[
            "Frontend-first full-stack apps (React + TypeScript)",
            "Accessible, polished UI with Tailwind CSS",
            "Product & UX-led roadmaps",
            "Data and API modeling",
          ]}
        />

        <InfoBlock
          title="Background snapshot"
          items={[
            "Software Developer – Levitate",
            "Economics Faculty – Duke University",
            "Health Policy Research – Yale University",
            "Ph.D. Economics – Stanford University",
            "B.A. Economics – UC San Diego (summa cum laude)",
          ]}
        />

        <div>
          <h4 className="text-xs font-heading uppercase tracking-[0.3em] text-text-muted">
            Tech & tools
          </h4>
          <ul className="mt-3 flex flex-wrap gap-2 text-xs font-body text-text">
            {[
              "React",
              "TypeScript",
              "Node.js",
              "REST APIs",
              "Tailwind CSS",
              "Python",
              "Git / GitHub",
            ].map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-border px-3 py-1 text-text-muted"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-heading uppercase tracking-[0.3em] text-text-muted">
            Connect
          </h4>
          <ul className="mt-3 space-y-1 text-sm text-text">
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/tfalba"
                target="_blank"
                rel="noreferrer"
                className="text-light hover:text-light-soft"
              >
                @tfalba
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/tracy-falba"
                target="_blank"
                rel="noreferrer"
                className="text-light hover:text-light-soft"
              >
                /in/tracy-falba
              </a>
            </li>
            <li>
              Email:{" "}
              <a
                href="mailto:tfalba@mac.com"
                className="text-light hover:text-light-soft"
              >
                tfalba@mac.com
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>

    <div className="flex justify-end">
      <button
        type="button"
        onClick={() => setShowResume(true)}
        className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-medium text-text transition hover:border-light hover:text-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light"
      >
        <span className="text-base">📄</span>
        View résumé (full screen)
      </button>
    </div>
  </section>

  {showResume && (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-surface-muted/95 px-4 py-6 backdrop-blur-sm dark:bg-black/80"
      role="dialog"
      aria-modal="true"
      aria-label="Tracy Falba résumé"
      onClick={() => setShowResume(false)}
    >
      <div
        className="relative flex h-full w-full max-w-5xl flex-col gap-4 rounded-3xl border border-border bg-surface-card/95 p-5 text-text shadow-[0_35px_120px_rgba(0,0,0,0.25)] dark:border-border/60 dark:bg-brand-black/80 dark:text-brand-light"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 text-sm">
          <h3 className="text-lg font-heading text-text dark:text-brand-light">
            Tracy Falba Résumé
          </h3>
          <div className="flex items-center gap-2">
            <a
              href={resumePdf}
              download
              className="rounded-full border border-border px-4 py-2 text-text transition hover:border-light hover:text-light"
            >
              Download PDF
            </a>
            <button
              type="button"
              onClick={() => setShowResume(false)}
              className="rounded-full border border-border px-3 py-2 text-xs uppercase tracking-wide text-text-muted transition hover:border-light hover:text-light"
            >
              Close
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-hidden rounded-2xl border border-border bg-white/90 dark:bg-black">
          <iframe
            title="Tracy Falba Résumé PDF"
            src={resumePdf}
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  )}
    </>
  );
};

const InfoBlock = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h4 className="text-xs font-heading uppercase tracking-[0.3em] text-text-muted">
      {title}
    </h4>
    <ul className="mt-3 space-y-1 text-sm text-text">
      {items.map((item) => (
        <li key={item} className="pl-4 text-text-muted before:-ml-4 before:inline-block before:w-4 before:text-light before:content-['•']">
          {item}
        </li>
      ))}
    </ul>
  </div>
);
