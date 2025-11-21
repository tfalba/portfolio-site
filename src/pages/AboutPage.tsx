export const AboutPage: React.FC = () => (
  <section className="space-y-6 rounded-2xl border border-brand-light/10 bg-brand-charcoal/60 p-6 text-brand-light shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
    

    <div className="grid gap-6 md:grid-cols-[2fr,1.2fr]">
       
      {/* Main Narrative */}
      <div className="space-y-4 text-sm md:text-base font-body text-brand-light/85">
       <header className="space-y-2">
      <p className="text-sm uppercase tracking-wide text-brand-light/60">
        About Me
      </p>
      <h2 className="text-3xl md:text-4xl font-heading text-brand-white">
        Economist turned software developer
      </h2>
      <p className="text-sm font-body text-brand-light/80 max-w-3xl">
        I’m a former economics professor and health policy researcher who
        transitioned into full-stack software development. I love taking
        complex ideas—whether they’re about incentives, risk, or user
        journeys—and turning them into clear, intuitive digital experiences.
      </p>
    </header>
        <p>
          Before shifting into software, I spent more than a decade as a{" "}
          <span className="font-semibold">
            Visiting Assistant Professor and Research Scholar in Economics at
            Duke University
          </span>
          . I taught health economics, public finance, and social insurance,
          advised students, and helped lead the undergraduate program.
        </p>

        <p>
          I also worked as an{" "}
          <span className="font-semibold">
            Associate Research Scientist at Yale University
          </span>
          , co-investigating grants totaling over $10M and publishing research
          across economics, health policy, and clinical journals. Those projects
          strengthened my data analysis, writing, and collaborative skills.
        </p>

        <p>
          After years of teaching and research, I transitioned into software
          engineering—motivated by a desire to build tools that make complex
          decisions clearer and deliver real impact through thoughtful product
          design.
        </p>

        {/* Levitate Experience */}
        <p>
          Most recently, I worked as a{" "}
          <span className="font-semibold">Software Developer at Levitate</span>,
          a SaaS platform focused on relationship-based sales and marketing. I
          built user-facing features and reusable components using{" "}
          <span className="font-semibold">React, TypeScript, Node, and REST APIs</span>,
          improved user flows, collaborated with designers and PMs, and shipped
          iterative enhancements in an Agile sprint environment.
        </p>

        <p>
          Today, I’m combining my analytical background with strong front-end
          engineering skills to create elegant, intuitive interfaces—especially
          in domains like finance, health, and education.
        </p>
      </div>

      {/* Sidebar with Headshot */}
      <aside className="space-y-6 rounded-2xl border border-brand-light/15 bg-brand-black/50 p-4 md:p-5">
        
        {/* 👉 Headshot module */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="h-40 w-40 rounded-full overflow-hidden border border-brand-light/20 shadow-[0_0_25px_rgba(0,0,0,0.45)] bg-brand-charcoal/80">
            
              <img src="/src/assets/headshot.jpeg" alt="Tracy Falba headshot" className="h-full w-full object-cover" />
           
            <div className="flex h-full w-full items-center justify-center text-brand-light/50 text-xs font-body">
              Headshot
            </div>
          </div>
          <p className="font-heading text-lg text-brand-white">
            Tracy Falba, Ph.D.
          </p>
          <p className="text-sm text-brand-light/70 font-body">
            Software Engineer • Frontend / Full Stack
          </p>
        </div>

        {/* Snapshot */}
        <div>
          <h3 className="text-sm font-heading uppercase tracking-wide text-brand-gold">
            Current focus
          </h3>
          <ul className="mt-2 space-y-1 text-sm font-body text-brand-light/80 list-disc list-inside">
            <li>Frontend-first full-stack apps (React + TypeScript)</li>
            <li>Clean, accessible UI with Tailwind CSS</li>
            <li>Product and UX-driven development</li>
            <li>Data & API modeling</li>
          </ul>
        </div>

        {/* Background */}
        <div>
          <h3 className="text-sm font-heading uppercase tracking-wide text-brand-gold">
            Background snapshot
          </h3>
          <ul className="mt-2 space-y-1 text-sm font-body text-brand-light/80">
            <li>Software Developer – <span className="font-semibold">Levitate</span></li>
            <li>Economics Faculty – Duke University</li>
            <li>Health Policy Research – Yale University</li>
            <li>Ph.D. in Economics – Stanford University</li>
            <li>B.A. Economics – UC San Diego (summa cum laude)</li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="text-sm font-heading uppercase tracking-wide text-brand-gold">
            Tech & tools
          </h3>
          <ul className="mt-2 flex flex-wrap gap-2 text-xs font-body text-brand-light/80">
            {[
              "React",
              "TypeScript",
              "JavaScript",
              "Node.js",
              "REST APIs",
              "Tailwind CSS",
              "Python",
              "Git / GitHub",
            ].map((t) => (
              <li
                key={t}
                className="rounded-full border border-brand-light/20 bg-brand-charcoal/80 px-3 py-1"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-heading uppercase tracking-wide text-brand-gold">
            Connect
          </h3>
          <ul className="mt-2 space-y-1 text-sm font-body text-brand-light/80">
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/tfalba"
                target="_blank"
                rel="noreferrer"
                className="text-brand-coral hover:text-brand-red"
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
                className="text-brand-coral hover:text-brand-red"
              >
                /in/tracy-falba
              </a>
            </li>
            <li>
              Email:{" "}
              <a
                href="mailto:tfalba@mac.com"
                className="text-brand-coral hover:text-brand-red"
              >
                tfalba@mac.com
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </section>
);
