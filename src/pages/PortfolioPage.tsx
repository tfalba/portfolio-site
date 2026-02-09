import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ImageCarousel, type CarouselImage } from "../components/ImageCarousel";
import bioQuotes from "../data/bioQuotes";
import fullHeadshot from "@/assets/headshots/headshot-full.png";
import { projects, type Project } from "../data/projectData";
const resumePdf = new URL(
  "../assets/Tracy Falba Resume Feb 2026.pdf",
  import.meta.url
).href;

type ProjectHighlight = Project & {
  previewSrc?: string;
  previewAlt?: string;
};

const aboutNarrative: string[] = [
  "Before entering software, I spent more than a decade as a Visiting Assistant Professor and Research Scholar in Economics at Duke University, teaching health economics, public finance, and social insurance while guiding undergraduate research.",
  "I also served as an Associate Research Scientist at Yale University, co-investigating more than $10M in funded health policy research and publishing across economics, medicine, and public policy journals—work that sharpened my data fluency and stakeholder collaboration.",
  "Driven to build tools that make complex decisions clearer, I transitioned into software engineering and product development where I now blend systems thinking with design sensitivity.",
  "Most recently, I worked as a Software Developer at Levitate, shipping customer-facing features and reusable UI in React, TypeScript, Node, and REST APIs in close partnership with designers and PMs.",
  "Today I focus on frontend-forward, full-stack work that demands craft, clarity, and measurable impact—especially within finance, health, and education products.",
];

const focusPanels = [
  {
    title: "Current focus",
    items: [
      "Product-focused web applications (React + TypeScript)",
      "Design systems & accessible UI",
      "API and data modeling for full-stack features",
      "Growth loops & thoughtful onboarding",
    ],
  },
  {
    title: "Background snapshot",
    items: [
      "Software Developer – Levitate",
      "Economics Faculty – Duke University",
      "Health Policy Research – Yale University",
      "Ph.D. Economics – Stanford University",
    ],
  },
  {
    title: "Tech & tools",
    items: [
      "React",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "Tailwind",
      "Python",
      "Git/GitHub",
    ],
  },
];

const contactLinks = [
  { label: "GitHub", href: "https://github.com/tfalba", value: "@tfalba" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tracy-falba",
    value: "/in/tracy-falba",
  },
  { label: "Email", href: "mailto:tfalba@mac.com", value: "tfalba@mac.com" },
];

const heroStats = [
  { label: "Years crafting research & products", value: "10+" },
  { label: "Full-stack launches", value: "35" },
  {
    label: "Disciplines & industries bridged",
    value: "Economics • Health • Tech",
  },
];

const heroProjects: ProjectHighlight[] = projects.map((project) => {
  const preview = project.images?.find((img) => img?.src);
  return {
    ...project,
    previewSrc: preview?.src,
    previewAlt: preview?.alt ?? `${project.name} preview`,
  };
});

export const PortfolioPage: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="space-y-12 lg:space-y-16">
      <HeroSection setIsResumeOpen={setIsResumeOpen} />

      <section
        id="projects"
        className="space-y-10 section-shell bg-brand-ink/20 border-white/30 scroll-mt-48 md:scroll-mt-24"
      >
        <div className="flex flex-col gap-3 mt-2">
          <p className="text-xs uppercase tracking-[0.35em] text-brand-gold">
            Selected Work
          </p>
          <h2 className="text-3xl font-heading text-white/80">
            Projects that span research + product craft
          </h2>
          <p className="max-w-3xl text-white/70">
            The same curiosity that drives my research career now fuels the
            interfaces I build. Here’s a curated set of experiments, production
            launches, and concept explorations—each anchored by the problem it
            solves.
          </p>
        </div>

        <div className="grid gap-5 sm:gap-10 md:gap-12 xl:gap-16 lg:row-gap-12 lg:grid-cols-2">
          {heroProjects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </section>

      <section
        id="story"
        className="section-shell space-y-10 bg-brand-graphite/50 border-white/30 scroll-mt-48 md:scroll-mt-24"
      >
        <div className="flex flex-col gap-3 mt-2">
          <p className="text-xs uppercase tracking-[0.35em] text-brand-gold">
            Story & craft
          </p>
          <div className="flex gap-6 items-center">
            <h2 className="text-3xl flex-1 font-heading text-white/80">
              Research roots, product instincts
            </h2>
            <button
              type="button"
              onClick={() => setIsResumeOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 p-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white hover:text-white/90"
            >
              View Résumé
            </button>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 md:grid-cols-[minmax(0,1.5fr)_minmax(0,0.8fr)]">
          <div className="grid gap-5">
            {aboutNarrative.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed text-white/75"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <img src={fullHeadshot} alt="About narrative illustration" className="opacity-90 max-h-[380px] rounded-2xl col-span-2 md:col-span-1 mx-auto" />
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {focusPanels.map((panel) => (
            <div
              key={panel.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[5px_25px_90px_rgba(0,0,0,0.8)]"
            >
              <h3 className="text-sm font-heading uppercase tracking-[0.25em] text-brand-gold/80">
                {panel.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {panel.items.map((item) => (
                  <li key={`${panel.title}-${item}`} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-ocean/80" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="space-y-6 rounded-[2.75rem] border border-brand-ocean/40 bg-black/60 p-10 shadow-[0_40px_150px_rgba(0,0,0,0.6)] scroll-mt-48 md:scroll-mt-24"
      >
        <div className="flex flex-col gap-3 mt-2">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">
            Let’s build
          </p>
          <h2 className="text-3xl font-heading text-white/80">
            Ready for thoughtful collaborations
          </h2>
          <p className="text-white/75">
            I partner best with teams who care about clarity, inclusive
            experiences, and measurable outcomes. If that sounds like you, let’s
            talk.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {contactLinks.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              className="rounded-2xl border border-white/20 bg-white/5 px-5 py-4 backdrop-blur transition hover:border-white/70"
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                {contact.label}
              </p>
              <p className="text-lg font-heading text-white/80">{contact.value}</p>
            </a>
          ))}
        </div>
      </section>
      {isResumeOpen && (
        <ResumeModal
          resumeUrl={resumePdf}
          onClose={() => setIsResumeOpen(false)}
        />
      )}
    </div>
  );
};

export const HeroSection: React.FC<{
  setIsResumeOpen: (isOpen: boolean) => void;
}> = ({ setIsResumeOpen }) => {
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const [spotlightGridPage, setSpotlightGridPage] = useState(0);
  const [spotlightGridTouchStartX, setSpotlightGridTouchStartX] = useState<
    number | null
  >(null);
  const [bioQuoteIndex, setBioQuoteIndex] = useState(0);
  const [spotlightTouchStartX, setSpotlightTouchStartX] = useState<
    number | null
  >(null);

  useEffect(() => {
    const timer = setInterval(
      () => setSpotlightIndex((prev) => (prev + 1) % heroProjects.length),
      9000
    );
    return () => clearInterval(timer);
  }, []);

  const totalSpotlightPages = Math.max(1, Math.ceil(heroProjects.length / 4));

  useEffect(() => {
    const timer = setInterval(
      () => setSpotlightGridPage((prev) => (prev + 1) % totalSpotlightPages),
      10000
    );
    return () => clearInterval(timer);
  }, [totalSpotlightPages]);

  useEffect(() => {
    const timer = setInterval(
      () => setBioQuoteIndex((prev) => (prev + 1) % bioQuotes.length),
      15000
    );
    return () => clearInterval(timer);
  }, []);

  const spotlightProject = heroProjects[spotlightIndex];
  const spotlightPages = Array.from(
    { length: totalSpotlightPages },
    (_, pageIndex) => heroProjects.slice(pageIndex * 4, pageIndex * 4 + 4)
  );
  const bioQuote = bioQuotes[bioQuoteIndex];

  const handleSpotlightTouchStart = (
    event: React.TouchEvent<HTMLDivElement>
  ) => {
    setSpotlightTouchStartX(event.touches[0]?.clientX ?? null);
  };

  const handleSpotlightTouchEnd = (
    event: React.TouchEvent<HTMLDivElement>
  ) => {
    if (spotlightTouchStartX === null) return;
    const endX = event.changedTouches[0]?.clientX ?? spotlightTouchStartX;
    const deltaX = endX - spotlightTouchStartX;
    setSpotlightTouchStartX(null);
    if (Math.abs(deltaX) < 40) return;
    if (deltaX < 0) {
      setSpotlightIndex((prev) => (prev + 1) % heroProjects.length);
    } else {
      setSpotlightIndex(
        (prev) => (prev - 1 + heroProjects.length) % heroProjects.length
      );
    }
  };

  const handleSpotlightGridTouchStart = (
    event: React.TouchEvent<HTMLDivElement>
  ) => {
    setSpotlightGridTouchStartX(event.touches[0]?.clientX ?? null);
  };

  const handleSpotlightGridTouchEnd = (
    event: React.TouchEvent<HTMLDivElement>
  ) => {
    if (spotlightGridTouchStartX === null) return;
    const endX = event.changedTouches[0]?.clientX ?? spotlightGridTouchStartX;
    const deltaX = endX - spotlightGridTouchStartX;
    setSpotlightGridTouchStartX(null);
    if (Math.abs(deltaX) < 40) return;
    if (deltaX < 0) {
      setSpotlightGridPage((prev) => (prev + 1) % totalSpotlightPages);
    } else {
      setSpotlightGridPage(
        (prev) => (prev - 1 + totalSpotlightPages) % totalSpotlightPages
      );
    }
  };

  const bioSection = (
    <div className="flex flex-col sm:flex-row md:flex-row xl:flex-row gap-3 space-between">
      <div
        className="flex-1 flex flex-col gap-3 rounded-[2rem] border border-white/10 bg-black/10 p-4 shadow-[-5px_5px_10px_rgba(255,255,255,0.25)] sm:flex-row items-center mb-4"
      >
        <div className="min-h-[10rem] min-w-[10rem] max-h-[10rem] max-w-[10rem] md:min-h-[7rem] md:min-w-[7rem] md:max-h-[7rem] md:max-w-[7rem] lg:min-h-[8rem] lg:max-h-[8rem] lg:max-w-[8rem] lg:min-w-[8rem] overflow-hidden rounded-2xl border border-white/10">
          <img
            src={bioQuotes[1].image}
            alt={"Tracy Falba headshot"}
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div
          key={bioQuote.id}
          className="text-sm xl:text-base text-white/80 animate-slide-in-right"
        >
          “{bioQuote.quote}”
        </div>
      </div>
      <div className="flex flex-[.72] flex-wrap items-center justify-end gap-3 my-auto">
        <a
          href="#projects"
          className="cta-link border-brand-ocean bg-brand-ocean/20 hover:bg-brand-ocean hover:text-brand-ink"
        >
          Explore Projects
        </a>
        <a
          href="#story"
          className="cta-link bg-brand-gold/5 border-brand-gold hover:bg-brand-gold hover:text-brand-ink"
        >
          My Story
        </a>
        <a
          href="#contact"
          className="cta-link bg-ember/5 border border-brand-ember hover:bg-brand-ember "
        >
          Connect
        </a>
        <button
          type="button"
          onClick={() => setIsResumeOpen(true)}
          className="cta-link border-white/30 bg-white/5 text-white/80 hover:border-white hover:bg-white/80"
        >
          View Résumé
        </button>
      </div>
    </div>
  );

  const statSection = (
    <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 md:grid-cols-3">
      {heroStats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm backdrop-blur shadow-lg shadow-black/40"
        >
          <p className="text-2xl font-heading text-brand-gold">{stat.value}</p>
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <section
      id="hero"
      className="section-shell overflow-hidden scroll-mt-48 md:scroll-mt-24"
    >
      <div className="grid gap-8 md:gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="space-y-8">
          <span className="chip">Tracy Falba, Ph.D.</span>
          <div className="space-y-4">
            <h1 className="text-3xl font-heading text-white/80 lg:text-[2.5rem] leading-snug">
              Economist turned product-focused software engineer.
            </h1>
            <p className="text-lg text-white/75">
              I design and ship thoughtful digital experiences that blend
              research rigor with frontend craft. From equitable health policy
              tools to modern SaaS products, I love building systems that feel
              warm, useful, and human.
            </p>
          </div>

          {bioSection}
          {statSection}
        </div>

        <div className="rounded-[2.5rem] border border-white/10 bg-brand-ink/70 p-4 sm:p-6 shadow-[0_25px_90px_rgba(155,155,155,0.3)]">
          <p className="text-xs uppercase tracking-[0.25em] text-white/60">
            Spotlight
          </p>
          <div className="mt-4 overflow-hidden">
            <div
              className="lg:hidden"
              onTouchStart={handleSpotlightGridTouchStart}
              onTouchEnd={handleSpotlightGridTouchEnd}
            >
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${spotlightGridPage * 100}%)`,
                  }}
                >
                  {spotlightPages.map((page, pageIndex) => (
                    <div
                      key={`spotlight-page-${pageIndex}`}
                      className="min-w-full grid grid-cols-2 gap-3"
                    >
                      {page.map((project) => (
                        <a
                          key={`spotlight-grid-${project.id}`}
                          href={`#project-${project.id}`}
                          className="rounded-2xl border border-white/15 bg-white/5 p-3 text-white/80 shadow-[0_15px_45px_rgba(0,0,0,0.4)] transition hover:-translate-y-1 hover:border-white/40"
                        >
                          <div
                            className="rounded-xl bg-cover bg-center aspect-[16/9] height-fit"
                            style={{
                              backgroundImage: project.previewSrc
                                ? `url(${project.previewSrc})`
                                : undefined,
                            }}
                          />
                          <p className="mt-1 text-sm font-semibold text-white/80">
                            {project.name}
                          </p>
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setSpotlightGridPage(
                        (prev) =>
                          (prev - 1 + totalSpotlightPages) % totalSpotlightPages
                      )
                    }
                    className="rounded-full border border-white/20 px-3 py-1 text-sm text-white/90 transition hover:border-white"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setSpotlightGridPage(
                        (prev) => (prev + 1) % totalSpotlightPages
                      )
                    }
                    className="rounded-full border border-white/20 px-3 py-1 text-sm text-white/90 transition hover:border-white"
                  >
                    ›
                  </button>
                </div>
                <div className="flex gap-2">
                  {spotlightPages.map((_, index) => (
                    <button
                      key={`spotlight-page-dot-${index}`}
                      onClick={() => setSpotlightGridPage(index)}
                      className={`h-2.5 w-2.5 rounded-full transition ${
                        index === spotlightGridPage
                          ? "bg-brand-ember/80"
                          : "bg-white/30 hover:bg-white/60"
                      }`}
                      aria-label={`Show spotlight page ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden lg:block pt-2">
            <div
              className="transition-all duration-500"
              onTouchStart={handleSpotlightTouchStart}
              onTouchEnd={handleSpotlightTouchEnd}
            >
                <a
                  key={spotlightProject.id}
                  href={`#project-${spotlightProject.id}`}
                  className="project-card block border-brand-ocean/60 scroll-mt-48 md:scroll-mt-24 transition hover:-translate-y-1"
                >
                  <div
                    className="project-card__media m-6"
                    style={{
                      backgroundImage: `url(${spotlightProject.previewSrc})`,
                    }}
                  />
                  <div className="flex flex-col space-y-2 px-5 py-4">
                    <p className="pill-link ml-auto inline-flex bg-white/15">
                      {spotlightProject.role ?? "Lead Engineer"}
                    </p>
                    <h3 className="project-card__title">
                      {spotlightProject.name}
                    </h3>
                    <p className="text-sm text-white/70">
                      {spotlightProject.summary}
                    </p>
                  </div>
                </a>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setSpotlightIndex(
                        (spotlightIndex - 1 + heroProjects.length) %
                          heroProjects.length
                      )
                    }
                    className="rounded-full border border-white/20 px-3 py-1 text-sm text-white/90 transition hover:border-white"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setSpotlightIndex(
                        (spotlightIndex + 1) % heroProjects.length
                      )
                    }
                    className="rounded-full border border-white/20 px-3 py-1 text-sm text-white/90 transition hover:border-white"
                  >
                    ›
                  </button>
                </div>
                <div className="flex gap-2">
                  {heroProjects.map((project, index) => (
                    <button
                      key={`${project.id}-spotlight-dot`}
                      onClick={() => setSpotlightIndex(index)}
                      className={`h-2.5 w-2.5 rounded-full transition ${
                        index === spotlightIndex
                          ? "bg-brand-ember/80"
                          : "bg-white/30 hover:bg-white/60"
                      }`}
                      aria-label={`Show ${project.name}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ResumeModal: React.FC<{ resumeUrl: string; onClose: () => void }> = ({
  resumeUrl,
  onClose,
}) => {
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/85 px-4 py-6"
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-5xl flex-col gap-4 rounded-3xl border border-white/20 bg-brand-ink/95 p-6 text-white/80 shadow-[0_45px_140px_rgba(0,0,0,0.6)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">
            Resume
          </p>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/40 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/70 transition hover:border-white/90 hover:text-white/90"
          >
            Close
          </button>
        </div>
        <div className="h-[75vh] overflow-hidden rounded-2xl border border-white/15 bg-black/30">
          <iframe
            title="Resume PDF"
            src={resumeUrl}
            className="h-full w-full"
          />
        </div>
      </div>
    </div>,
    document.body
  );
};

const ProjectDetails: React.FC<{ project: ProjectHighlight }> = ({
  project,
}) => {
  const [activeTab, setActiveTab] = useState<"narrative" | "impact">(
    "narrative"
  );
  const [detailsOpen, setDetailsOpen] = useState(false);
  const descriptionSteps = project.description?.steps ?? [];
  const keyFeatures = project.details?.keyFeatures ?? [];
  const howBuilt = project.details?.howBuilt ?? [];

  return (
    <div className="group">
      <button
        id={`details-button-${project.id}`}
        type="button"
        onClick={() => setDetailsOpen((prev) => !prev)}
        className={`flex w-full items-center justify-between border border-white/10 bg-white/5 shadow-lg shadow-black/80 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white/70  ${
          detailsOpen
            ? "shadow-lg shadow-black/40 rounded-t-2xl"
            : "rounded-2xl transition group-hover:animate-wink"
        }`}
      >
        <span className={`text-white/80`}>Project Details</span>
        <span className="text-lg">{detailsOpen ? "-" : "+"}</span>
      </button>

      {detailsOpen && (
        <div className="rounded-b-2xl border border-white/10 bg-white/[.04] pt-4 p-1 shadow-lg shadow-black/80">
          <div className="flex gap-2 ml-6">
            {[
              { id: "narrative", label: "Product Narrative" },
              { id: "impact", label: "Impact & Build" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as "narrative" | "impact")}
                className={`px-2 py-2 text-[0.85rem] rounded-t-xl mt-2 font-semibold lowercase tracking-[0.3em] transition ${
                  activeTab === tab.id
                    ? " text-brand-gold/70 shadow-[-2px_-2px_2px_rgba(115,115,115,0.35)] bg-black/10"
                    : "text-white/60 hover:text-white/80 bg-transparent hover:bg-black/20 z-[0]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {activeTab === "narrative" ? (
            <div className="rounded-xl p-4 shadow shadow-[-6px_4px_10px_rgba(var(--ink)/0.35)]">
              <p className="text-sm text-white/80">
                {project.description?.overview ?? project.details?.summary}
              </p>
              {descriptionSteps.length > 0 && (
                <ol className="mt-2 pl-4 pr-8 list-decimal space-y-2 text-xs text-white/70">
                  {descriptionSteps.map((step) => (
                    <li key={`${project.id}-step-${step}`}>{step}</li>
                  ))}
                </ol>
              )}
            </div>
          ) : (
            <div className="rounded-xl p-4 shadow shadow-[6px_4px_10px_rgba(var(--ink)/0.35)]">
              {project.details?.summary && (
                <p className="text-sm text-white/80">
                  {project.details.summary}
                </p>
              )}
              {keyFeatures.length > 0 && (
                <div className="mt-4">
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-white/60">
                    Key features
                  </p>
                  <ul className="mt-2 space-y-1 text-xs text-white/75">
                    {keyFeatures.map((feature) => (
                      <li
                        key={`${project.id}-feature-${feature}`}
                        className="flex gap-2"
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-ember/80" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {howBuilt.length > 0 && (
                <div className="mt-4">
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-white/60">
                    How it was built
                  </p>
                  <ul className="mt-2 space-y-1 text-xs text-white/75">
                    {howBuilt.map((item) => (
                      <li
                        key={`${project.id}-how-${item}`}
                        className="flex gap-2"
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-ocean/80" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const ProjectCard: React.FC<{ project: ProjectHighlight }> = ({ project }) => {
  const [isPreviewOpen, setPreviewOpen] = useState(false);
  const [previewDesktop, setPreviewDesktop] = useState<
    CarouselImage | undefined
  >(undefined);
  const [previewPhone, setPreviewPhone] = useState<CarouselImage | undefined>(
    undefined
  );
  const techTags =
    project.techStack
      ?.split(",")
      .map((item) => item.trim())
      .filter(Boolean) ?? [];
  const primaryTag = techTags[0] ?? "Full stack";
  const additionalTags = techTags.slice(1, 5);

  return (
    <article
      id={`project-${project.id}`}
      className="project-card flex h-full flex-col border border-white/15 bg-white/2 p-4 sm:p-6 shadow-[0_15px_60px_rgba(165,165,165,0.35)] scroll-mt-32"
    >
      <div className="flex flex-1 flex-col gap-8">
        <header className="space-y-4 px-4 pb-2">
          <h3 className="text-2xl font-heading text-white/80">{project.name}</h3>
          <p className="text-sm text-white/70">{project.summary}</p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="pill-link bg-brand-ocean/80">{primaryTag}</span>
            {additionalTags.map((stack) => (
              <span
                key={`${project.id}-${stack}`}
                className="rounded-full border border-white/15 px-3 py-1 text-[0.7rem] uppercase tracking-[0.25em] text-white/70"
              >
                {stack}
              </span>
            ))}
          </div>
        </header>
          <ImageCarousel
            images={project.images}
            imagesPhone={project.imagesPhone}
            onExpand={(desktop, phone) => {
              if (!desktop && !phone) return;
              setPreviewDesktop(desktop);
              setPreviewPhone(phone);
              setPreviewOpen(true);
            }}
          />

          <ProjectDetails project={project} />
          <div className="mt-auto flex flex-wrap items-center justify-end gap-3 px-4 py-4 text-sm sm:px-6">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="cta-link bg-brand-ocean/20 hover:bg-brand-ocean/60 hover:text-white/90 border-brand-ocean/80"
              >
                View live
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-2 sm:px-3 py-2 font-semibold uppercase tracking-[0.15em] text-xs text-white/90 transition hover:bg-white/80 hover:text-brand-ink"
            >
              GitHub
            </a>
          </div>
      </div>

      {isPreviewOpen && (
        <ScreenshotModal
          desktopImages={project.images}
          phoneImages={project.imagesPhone}
          initialDesktop={previewDesktop}
          initialPhone={previewPhone}
          onClose={() => setPreviewOpen(false)}
        />
      )}
    </article>
  );
};

const ScreenshotModal: React.FC<{
  desktopImages: CarouselImage[];
  phoneImages?: CarouselImage[];
  initialDesktop?: CarouselImage;
  initialPhone?: CarouselImage;
  onClose: () => void;
}> = ({
  desktopImages,
  phoneImages = [],
  initialDesktop,
  initialPhone,
  onClose,
}) => {
  const initialIndex = initialDesktop
    ? desktopImages.findIndex((img) => img?.src === initialDesktop.src)
    : 0;
  const [desktopIndex, setDesktopIndex] = useState(
    initialIndex >= 0 ? initialIndex : 0
  );
  const [phoneIndex, setPhoneIndex] = useState(
    initialPhone
      ? phoneImages.findIndex((img) => img?.src === initialPhone.src)
      : 0
  );

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  const currentDesktop = desktopImages[desktopIndex];
  const currentPhone =
    phoneImages.length > 0 ? phoneImages[phoneIndex] : undefined;

  const handlePrev = () => {
    setDesktopIndex(
      (prev) => (prev - 1 + desktopImages.length) % desktopImages.length
    );
    if (phoneImages.length > 0) {
      setPhoneIndex(
        (prev) => (prev - 1 + phoneImages.length) % phoneImages.length
      );
    }
  };

  const handleNext = () => {
    setDesktopIndex((prev) => (prev + 1) % desktopImages.length);
    if (phoneImages.length > 0) {
      setPhoneIndex((prev) => (prev + 1) % phoneImages.length);
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-start overflow-y-scroll justify-center bg-black/85 px-4 py-6"
      onClick={onClose}
    >
      <div
        className="relative flex h-auto w-full flex-col gap-6 rounded-3xl border border-white/20 bg-brand-ink/95 p-6 text-white shadow-[0_45px_140px_rgba(0,0,0,0.6)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border border-white/40 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/70 transition hover:border-white hover:text-white"
        >
          Close
        </button>
        <div className="flex flex-1 flex-col gap-6 overflow-y-auto pt-10 pr-2 lg:flex-row">
          {currentDesktop?.src && (
            <div className="relative flex-1 rounded-2xl border border-white/20 bg-black/30 p-4">
              <img
                src={currentDesktop.src}
                alt={currentDesktop.alt ?? "Desktop screenshot"}
                className="h-full w-full rounded-xl object-contain"
              />
            </div>
          )}
          {currentPhone?.src && (
            <div className="mx-auto w-full h-min max-w-[calc(max(20vw,20rem))] rounded-2xl border border-white/20 bg-black/30 p-4">
              <img
                src={currentPhone.src}
                alt={currentPhone.alt ?? "Mobile screenshot"}
                className="h-full w-full rounded-xl object-contain"
              />
            </div>
          )}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-1 text-sm text-white transition hover:bg-white/40"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-1 text-sm text-white transition hover:bg-white/40"
          >
            ›
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 text-xs text-white/60">
          {desktopImages.map((_, i) => (
            <button
              key={`desktop-dot-${i}`}
              onClick={() => setDesktopIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === desktopIndex
                  ? "bg-brand-ember/70 hover:bg-brand-ember/90"
                  : "bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Desktop slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
};
