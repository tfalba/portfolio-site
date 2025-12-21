import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { Project } from "../components/ProjectSection";
import { ImageCarousel, type CarouselImage } from "../components/ImageCarousel";
import { projects } from "../data/projectData";

const headshotUrl = new URL("../assets/headshot.jpeg", import.meta.url).href;
const resumePdf = new URL(
  "../assets/Tracy Falba Resume Oct 2025.pdf",
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
  { label: "Disciplines bridged", value: "Economics • Health • Product" },
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
  const [spotlightIndex, setSpotlightIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setSpotlightIndex((prev) => (prev + 1) % heroProjects.length),
      6000,
    );
    return () => clearInterval(timer);
  }, []);

  const spotlightProject = heroProjects[spotlightIndex];

  return (
    <div className="space-y-24">
      <section id="hero" className="section-shell overflow-hidden scroll-mt-32">
        <div className="grid gap-8 md:gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-6">
            <span className="chip">Tracy Falba, Ph.D.</span>
            <div className="space-y-4">
              <h1 className="text-3xl font-heading text-white lg:text-[2.5rem] leading-snug">
                Economist turned product-focused software engineer.
              </h1>
              <p className="text-lg text-white/75">
                I design and ship thoughtful digital experiences that blend
                research rigor with frontend craft. From equitable health policy
                tools to modern SaaS products, I love building systems that feel
                warm, useful, and human.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="cta-link">
                Explore Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-brand-ember px-5 py-2 font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-brand-ember hover:text-brand-ink"
              >
                Connect
              </a>
              <a
                href={resumePdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white hover:text-white"
              >
                View Résumé
              </a>
              <a
                href={resumePdf}
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white hover:text-white"
              >
                Download Résumé
              </a>
            </div>
            <div className="flex flex-col gap-3 rounded-[2rem] border border-white/15 bg-white/5 p-4 shadow-[0_25px_80px_rgba(0,0,0,0.45)] sm:flex-row items-center">
              <div className="h-[12rem] w-[12rem] md:h-[7rem] md:w-[7rem] lg:h-[10rem] lg:w-[10rem] min-w-max overflow-hidden rounded-2xl border border-white/20">
                <img
                  src={headshotUrl}
                  alt="Tracy Falba headshot"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="text-sm lg:text-base text-white/80">
                “I care deeply about products that respect people’s time. I
                design with empathy, prototype quickly, and ship with polish.”
              </div>
            </div>
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm backdrop-blur shadow-lg shadow-black/40"
                >
                  <p className="text-2xl font-heading text-brand-gold">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-brand-ink/70 p-4 sm:p-6 shadow-[0_25px_90px_rgba(0,0,0,0.45)]">
            <p className="text-xs uppercase tracking-[0.25em] text-white/60">
              Spotlight
            </p>
            <div className="mt-4 overflow-hidden">
              <div className="transition-all duration-500">
                <a
                  key={spotlightProject.id}
                  href={`#project-${spotlightProject.id}`}
                  className="project-card block border-brand-ocean/60 scroll-mt-32 transition hover:-translate-y-1"
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
                    className="rounded-full border border-white/20 px-3 py-1 text-sm text-white transition hover:border-white"
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
                    className="rounded-full border border-white/20 px-3 py-1 text-sm text-white transition hover:border-white"
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
      </section>

      <section id="projects" className="space-y-10 section-shell bg-brand-ink/20 border-white/30 scroll-mt-32">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.35em] text-brand-gold">
            Selected Work
          </p>
          <h2 className="text-3xl font-heading text-white">
            Projects that span research + product craft
          </h2>
          <p className="max-w-3xl text-white/70">
            The same curiosity that drives my research career now fuels the
            interfaces I build. Here’s a curated set of experiments, production
            launches, and concept explorations—each anchored by the problem it
            solves.
          </p>
        </div>

        <div className="grid gap-5 sm:gap-10 lg:row-gap-12 lg:grid-cols-2">
          {heroProjects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.id} />
          ))}
        </div>
      </section>

      <section
        id="story"
        className="section-shell space-y-10 bg-brand-graphite/60 scroll-mt-32"
      >
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.35em] text-brand-gold">
            Story & craft
          </p>
          <h2 className="text-3xl font-heading text-white">
            Research roots, product instincts
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {aboutNarrative.map((paragraph) => (
            <p
              key={paragraph}
              className="text-base leading-relaxed text-white/75"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {focusPanels.map((panel) => (
            <div
              key={panel.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_25px_90px_rgba(0,0,0,0.4)] backdrop-blur"
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
        className="space-y-6 rounded-[2.75rem] border border-brand-ocean/40 bg-black/60 p-10 shadow-[0_40px_150px_rgba(0,0,0,0.6)] scroll-mt-32"
      >
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">
            Let’s build
          </p>
          <h2 className="text-3xl font-heading text-white">
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
              <p className="text-lg font-heading text-white">{contact.value}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

const ProjectCard: React.FC<{ project: ProjectHighlight; index: number }> = ({
  project,
  index,
}) => {
  const [activeTab, setActiveTab] = useState<"narrative" | "impact">(
    "narrative"
  );
  const [detailsOpen, setDetailsOpen] = useState(false);
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
  const additionalTags = techTags.slice(1, 4);
  const descriptionSteps = project.description?.steps ?? [];
  const keyFeatures = project.details?.keyFeatures ?? [];
  const howBuilt = project.details?.howBuilt ?? [];

  return (
    <article
      id={`project-${project.id}`}
      className="project-card overflow-hidden space-y-5 p-4 sm:p-6 scroll-mt-32
      border border-white/15 bg-white/5 p-4 shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
    >
      <header className="space-y-4 px-4 pb-4">
        <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.35em] text-white/50">
          <span>0{index + 1}</span>
          <span>{project.role ?? "Lead Engineer"}</span>
        </div>
        <h3 className="text-2xl font-heading text-white">{project.name}</h3>
        <p className="text-sm text-white/70">{project.summary}</p>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="pill-link bg-brand-ocean/80">{primaryTag}</span>
          {additionalTags.map((stack) => (
            <span
              key={`${project.id}-${stack}`}
              className="rounded-full border border-white/15 px-3 py-1 text-[0.7rem] uppercase tracking-[0.25em] text-white/60"
            >
              {stack}
            </span>
          ))}
        </div>
      </header>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-inner shadow-black/40">
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
      </div>

      <div className="space-y-4 px-4">
        <button
          type="button"
          onClick={() => setDetailsOpen((prev) => !prev)}
          className={`flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white/70 ${
            detailsOpen ? "hidden" : ""
          }`}
        >
          <span
            className={`text-brand-ocean/80 ${detailsOpen ? "hidden" : ""}`}
          >
            Project Details
          </span>
          <span className="text-base">{detailsOpen ? null : "+"}</span>
        </button>

        {detailsOpen && (
          <>
            <div className="flex gap-2">
              {[
                { id: "narrative", label: "Product Narrative" },
                { id: "impact", label: "Impact & Build" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as "narrative" | "impact")}
                  className={`rounded-full border px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] transition ${
                    activeTab === tab.id
                      ? "border-transparent text-brand-gold shadow-[0_5px_10px_rgba(244,179,36,0.45)] bg-white/10"
                      : "border-white/10 text-white/60 hover:border-white/40"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setDetailsOpen((prev) => !prev)}
                className="flex w-min items-center justify-end ml-auto rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70"
              >
                <span className="text-base">{"-"}</span>
              </button>
            </div>
            {activeTab === "narrative" ? (
              <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/40">
                <p className="text-sm text-white/80">
                  {project.description?.overview ?? project.details?.summary}
                </p>
                {descriptionSteps.length > 0 && (
                  <ol className="list-decimal space-y-1 pl-5 text-xs text-white/70">
                    {descriptionSteps.map((step) => (
                      <li key={`${project.id}-step-${step}`}>{step}</li>
                    ))}
                  </ol>
                )}
              </div>
            ) : (
              <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/40">
                {project.details?.summary && (
                  <p className="text-sm text-white/80">
                    {project.details.summary}
                  </p>
                )}
                {keyFeatures.length > 0 && (
                  <div>
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
                  <div>
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
          </>
        )}
      </div>

      <div className="flex flex-wrap gap-3 px-2 text-sm sm:px-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="cta-link"
          >
            View live
          </a>
        )}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2 font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-white hover:text-brand-ink"
        >
          GitHub
        </a>
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
}> = ({ desktopImages, phoneImages = [], initialDesktop, initialPhone, onClose }) => {
  const initialIndex = initialDesktop
    ? desktopImages.findIndex((img) => img?.src === initialDesktop.src)
    : 0;
  const [desktopIndex, setDesktopIndex] = useState(
    initialIndex >= 0 ? initialIndex : 0,
  );
  const [phoneIndex, setPhoneIndex] = useState(
    initialPhone
      ? phoneImages.findIndex((img) => img?.src === initialPhone.src)
      : 0,
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
    setDesktopIndex((prev) => (prev - 1 + desktopImages.length) % desktopImages.length);
    if (phoneImages.length > 0) {
      setPhoneIndex((prev) => (prev - 1 + phoneImages.length) % phoneImages.length);
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
