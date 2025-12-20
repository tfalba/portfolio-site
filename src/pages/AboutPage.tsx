import { useState } from "react";

const resumePdf = new URL(
  "../assets/Tracy Falba Resume Oct 2025.pdf",
  import.meta.url
).href;

export const AboutPage: React.FC = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <>
      <section
        className="relative z-10 mx-auto max-w-[100rem] overflow-hidden rounded-[2.75rem] border border-border bg-surface-card/95 text-text shadow-[0_35px_120px_rgba(0,0,0,0.12)]"
        style={{ marginTop: "calc(var(--section-overlap, 130px) * -1)" }}
      >
        {/* HERO / HEADSHOT ROW */}
        <div className="relative grid gap-6 border-b border-border/60 bg-gradient-to-br from-project-gold/40 via-white/70 to-project-teal/35 px-6 py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:px-10 lg:py-14">
          <div className="pointer-events-none absolute inset-0 opacity-70 blur-3xl">
            <div className="absolute -left-10 top-12 h-48 w-48 rounded-full bg-project-pink/50" />
            <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-project-teal/40" />
          </div>

          {/* HERO HEADSHOT */}
          <div className="relative flex items-center justify-center">
            {/* soft glow behind headshot */}
            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-project-gold/40 via-project-green/35 to-project-teal/35 opacity-90 blur-2xl" />
            <div className="relative h-64 w-64 overflow-hidden rounded-[2.5rem] border-4 border-white/80 bg-white/95 p-1 shadow-[0_25px_80px_rgba(0,0,0,0.2)] md:h-[24rem] md:w-[24rem]">
              <img
                src="/src/assets/headshot.jpeg"
                alt="Tracy Falba headshot"
                className="h-full w-full rounded-[1.8rem] object-cover object-top"
              />
            </div>
          </div>
          <header className="relative z-10 space-y-5 self-center rounded-3xl border border-white/60 bg-white/85 p-6 shadow-2xl shadow-project-pink/20">
            <p className="text-xs uppercase tracking-[0.35em] text-project-orange">
              About me
            </p>
            <h2 className="text-3xl font-heading text-project-teal md:text-4xl">
              Economist turned full-stack product builder
            </h2>
            <p className="text-base text-text md:text-lg">
              I pair a decade of academic research and teaching with modern
              product engineering skills to craft thoughtful, human-centered
              experiences—most recently with React, TypeScript, and Node across
              complex SaaS products.
            </p>
          </header>
        </div>

        {/* MAIN CONTENT ROWS */}
        <div className="grid gap-8 px-6 py-8 md:grid-cols-[minmax(0,2.0fr)_minmax(0,1.1fr)] lg:px-10 lg:pb-10 lg:pt-8">
          {/* Narrative */}
          <article className="space-y-4 text-base leading-relaxed text-text">
            <p>
              Before entering software, I spent more than a decade as a{" "}
              <span className="font-semibold">
                Visiting Assistant Professor and Research Scholar in Economics
                at Duke University
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
              Those projects strengthened my data fluency, writing, and
              stakeholder collaboration.
            </p>

            <p>
              Driven to build tools that make complex decisions clearer, I
              transitioned into software engineering and product development,
              where I now blend systems thinking with design sensitivity.
            </p>

            <p>
              Most recently, I worked as a{" "}
              <span className="font-semibold">
                Software Developer at Levitate
              </span>
              , shipping customer-facing features and reusable UI in{" "}
              <span className="font-semibold">
                React, TypeScript, Node, and REST APIs
              </span>
              . I collaborated closely with designers and PMs, iterating on
              flows, surfacing insights from data, and delivering polished
              experiences in an Agile environment.
            </p>

            <p>
              Today I focus on frontend-forward, full-stack work that demands
              craft, clarity, and measurable impact—especially within finance,
              health, and education products.
            </p>
          </article>

          {/* Sidebar info blocks */}
          <aside className="space-y-6 rounded-3xl border border-border bg-gradient-to-br from-surface-muted/95 via-white/85 to-project-teal/10 p-5 shadow-xl shadow-project-teal/20">
            <InfoBlock
              title="Current focus"
              items={[
                "Frontend-first full-stack apps (React + TypeScript)",
                "Accessible, polished UI with Tailwind CSS",
                "Product & UX-led roadmaps",
                "Data and API modeling",
              ]}
              variant={0}
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
              variant={1}
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
                    className="rounded-full border border-project-teal/40 bg-project-teal/10 px-3 py-1 text-project-teal"
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

        {/* Resume button row */}
        <div className="flex justify-end border-t border-border/60 bg-surface/80 px-6 py-4 lg:px-10">
          <button
            type="button"
            onClick={() => setShowResume(true)}
            className="btn-3d relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-2 text-[0.75rem] font-semibold uppercase tracking-[0.3em]"
          >
            <span className="text-base">📄</span>
            View résumé (full screen)
          </button>
        </div>
      </section>

      {showResume && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-surface-muted/95 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Tracy Falba résumé"
          onClick={() => setShowResume(false)}
        >
          <div
            className="relative flex h-full w-full max-w-5xl flex-col gap-4 rounded-3xl border border-border bg-surface-card/95 p-5 text-text shadow-[0_35px_120px_rgba(0,0,0,0.25)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 text-sm">
              <h3 className="text-lg font-heading text-text">
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
            <div className="flex-1 overflow-hidden rounded-2xl border border-border bg-white/90">
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

const INFO_ACCENTS = [
  "border-project-gold/40 bg-gradient-to-br from-project-gold/25 via-white/90 to-project-orange/20 shadow-project-gold/30",
  "border-project-teal/40 bg-gradient-to-br from-project-teal/25 via-white/85 to-project-green/20 shadow-project-teal/30",
  "border-project-pink/40 bg-gradient-to-br from-project-pink/25 via-white/90 to-project-gold/15 shadow-project-pink/30",
];

const InfoBlock = ({
  title,
  items,
  variant = 0,
}: {
  title: string;
  items: string[];
  variant?: number;
}) => {
  const accent =
    INFO_ACCENTS[variant % INFO_ACCENTS.length] ?? INFO_ACCENTS[0];

  return (
    <div className={`rounded-3xl border px-5 py-4 shadow-lg ${accent}`}>
      <h4 className="text-xs font-heading uppercase tracking-[0.3em] text-project-orange">
        {title}
      </h4>
      <ul className="mt-3 space-y-1 text-sm text-text">
        {items.map((item) => (
          <li
            key={item}
            className="pl-4 text-text before:-ml-4 before:inline-block before:w-4 before:text-project-teal before:content-['•']"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
