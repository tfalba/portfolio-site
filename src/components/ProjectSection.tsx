// src/components/ProjectSection.tsx
import React, { useEffect, useState } from "react";
import { ImageCarousel, type CarouselImage } from "./ImageCarousel";

type ProjectDescription = {
  overview: string;
  steps: string[];
};

type ProjectDetails = {
  summary: string;
  keyFeatures: string[];
  howBuilt: string[];
};

export type Project = {
  id: string;
  name: string;
  role?: string;
  techStack?: string;
  summary: string;
  description: ProjectDescription;
  details: ProjectDetails;
  liveUrl: string;
  githubUrl: string;
  images: CarouselImage[];
  imagesPhone: CarouselImage[];
};

interface ProjectSectionProps {
  project: Project;
  isOpen: boolean;
  onToggle: () => void;
  onOpenLive: (project: Project) => void;
  onExpandImage: (
    projectName: string,
    desktop?: CarouselImage,
    phone?: CarouselImage
  ) => void;
  variant: number;
  attached?: boolean;
}

export const ROW_GRADIENTS = [
  "bg-gradient-to-br from-lightMode-butter via-lightMode-butter/50 to-lightMode-butter/20",
  "bg-gradient-to-br from-project-teal/90 via-project-teal/40 to-project-teal/90",
  "bg-gradient-to-br from-project-green/80 via-project-green/40 to-project-green/90",
  "bg-gradient-to-br from-project-taupe/80 via-project-taupe/40 to-project-taupe/90",
  "bg-gradient-to-br from-project-orange/80 via-project-orange/40 to-project-orange/90",
  "bg-gradient-to-br from-project-pink/80 via-project-pink/40 to-project-pink/90",
];

type TechCategory =
  | "frontend"
  | "language"
  | "styling"
  | "state"
  | "infrastructure"
  | "integration"
  | "backend"
  | "realtime"
  | "default";

type TechTag = {
  label: string;
  category: TechCategory;
};

const TECH_CATEGORY_STYLES: Record<TechCategory, string> = {
  frontend: "border-project-teal/60 bg-project-teal/15 text-project-teal",
  language: "border-project-taupe/60 bg-project-taupe/20 text-project-taupe",
  styling: "border-project-pink/60 bg-project-pink/20 text-project-pink",
  state: "border-project-green/60 bg-project-green/20 text-project-green",
  infrastructure: "border-project-orange/60 bg-project-orange/20 text-project-orange",
  integration: "border-project-teal/50 bg-project-teal/10 text-project-teal",
  backend: "border-project-taupe/70 bg-project-taupe/15 text-project-taupe",
  realtime: "border-project-orange/70 bg-project-orange/15 text-project-orange",
   default: "border-project-green/60 bg-white/60 text-project-green",

  // default: "border-project-taupe/40 bg-surface-card/70 text-project-taupe",
};

const TECH_CATEGORY_MAP: Record<string, TechCategory> = {
  react: "frontend",
  "react 18": "frontend",
  typescript: "language",
  "tailwind css": "styling",
  zustand: "state",
  vercel: "infrastructure",
  "google calendar": "integration",
  "spotify api": "integration",
  "pixabay api": "integration",
  "node.js": "backend",
  "socket.io": "realtime",
};

const getTechTags = (techStack?: string): TechTag[] => {
  if (!techStack) {
    return [];
  }

  return techStack
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .map((label) => {
      const normalized = label.toLowerCase();
      const category =
        TECH_CATEGORY_MAP[normalized] ??
        (normalized.includes("api") ? "integration" : "default");
      return { label, category };
    });
};

const TechTagList: React.FC<{
  tags: TechTag[];
  className?: string;
}> = ({ tags, className = "" }) => {
  if (tags.length === 0) {
    return null;
  }

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag, index) => (
        <span
          key={`${tag.label}-${index}`}
          className={`rounded-full border px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide ${
            TECH_CATEGORY_STYLES[tag.category]
          }`}
        >
          {tag.label}
        </span>
      ))}
    </div>
  );
};

export const ProjectSection: React.FC<ProjectSectionProps> = ({
  project,
  isOpen,
  onToggle,
  onOpenLive,
  onExpandImage,
  variant,
  attached = false,
}) => {
  const [activeTab, setActiveTab] = useState<"description" | "details">(
    "description"
  );
  const backgroundClass =
    ROW_GRADIENTS[variant % ROW_GRADIENTS.length] ?? ROW_GRADIENTS[0];
  const techTags = getTechTags(project.techStack);

  useEffect(() => {
    if (!isOpen && activeTab !== "description") {
      setActiveTab("description");
    }
  }, [isOpen, activeTab]);

  const containerClass = attached
    ? `${backgroundClass} rounded-b-[2.75rem] border-0 bg-transparent p-6 text-text`
    : `rounded-3xl border border-border bg-surface-card/90 ${backgroundClass} p-5 text-text shadow-xl transition hover:-translate-y-1 hover:border-light-soft/70 hover:shadow-[0_20px_45px_rgba(0,0,0,0.18)]`;

  return (
    <section id={project.id} className={containerClass}>
      {/* Header row */}
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full flex-col gap-2 rounded-2xl border border-border/70 bg-white/20 px-4 py-3 text-left backdrop-blur-sm transition"
      >
        <div className="flex w-full items-start justify-between gap-4">
          <h2 className="text-xl font-heading text-text uppercase">
            {project.name}
          </h2>

          <span
            className={`shrink-0 rounded-full border px-3 py-1 text-xs font-body transition ${
              isOpen
                ? "border-lightMode-lavender bg-brand-lightMode-lavender/10 text-lightMode-lavender"
                : "border-border bg-surface-muted/60 text-text-muted"
            }`}
          >
            {isOpen ? "Hide details ▲" : "Show details ▼"}
          </span>
        </div>

        <p className="mt-0.5 text-sm text-text tracking-wide">
          {project.summary}
        </p>
        <TechTagList tags={techTags} className="mt-3" />
      </button>

      {/* Expandable content */}
      {isOpen && (
        <div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          {/* Carousel */}
          <ImageCarousel
            images={project.images}
            imagesPhone={project.imagesPhone}
            onExpand={(desktop, phone) =>
              onExpandImage(project.name, desktop, phone)
            }
          />

          {/* Description + links */}
          <div className="flex flex-col justify-between gap-4">
            <div className="rounded-2xl border border-border/60 bg-white p-4 shadow-sm">
              <div
                role="tablist"
                aria-label={`${project.name} content tabs`}
                className="flex gap-2"
              >
                {[
                  { id: "description", label: "Description" },
                  { id: "details", label: "Details & Frameworks" },
                ].map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() =>
                        setActiveTab(tab.id as "description" | "details")
                      }
                      className={`flex-1 rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition ${
                        isActive
                          ? "border-lightMode-lavender bg-brand-lightMode-lavender/10 text-lightMode-lavender"
                          : "border-transparent bg-transparent text-text-muted hover:border-border hover:bg-surface-muted/40"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
              <div className="mt-4 text-base leading-relaxed text-text">
                {activeTab === "description" ? (
                  <div className="space-y-3">
                    <p>{project.description.overview}</p>
                    {project.description.steps.length > 0 && (
                      <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-text">
                        {project.description.steps.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ol>
                    )}
                  </div>
                ) : (
                  <div className="space-y-4 text-sm leading-relaxed text-text">
                    <p>{project.details.summary}</p>
                    {project.details.keyFeatures.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                          Key Features
                        </p>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-base">
                          {project.details.keyFeatures.map((feature) => (
                            <li key={feature}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {project.details.howBuilt.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                          How It Was Built
                        </p>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-base">
                          {project.details.howBuilt.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {techTags.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                          Frameworks & Tools
                        </p>
                        <TechTagList tags={techTags} className="mt-2" />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              <button
                type="button"
                onClick={() => onOpenLive(project)}
                className="inline-flex items-center justify-center rounded-full border border-border/80 bg-brand-charcoal px-5 py-2 font-body font-semibold text-brand-light transition hover:border-brand-charcoal hover:bg-brand-black hover:text-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-charcoal"
              >
                View live site
              </button>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-border px-4 py-2 font-body font-medium text-text transition hover:border-light hover:text-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
