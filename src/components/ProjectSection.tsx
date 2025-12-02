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
}

const ROW_GRADIENTS = [
  "bg-gradient-to-br from-lightMode-butter via-lightMode-butter/50 to-lightMode-butter/20 dark:from-brand-gold dark:via-brand-coral/80 dark:to-brand-red/70",
  "bg-gradient-to-br from-lightMode-mint/40 via-lightMode-mint/30 to-lightMode-mint/20 dark:from-brand-blue dark:via-brand-green/80 dark:to-brand-gold/70",
  "bg-gradient-to-br from-lightMode-blush/40 via-lightMode-blush/30 to-lightMode-blush/20 dark:from-brand-coral dark:via-brand-red/80 dark:to-brand-gold/60",
  "bg-gradient-to-br from-lightMode-lavender/40 via-lightMode-labender/30 to-lightMode-lavender/20 dark:from-brand-green dark:via-brand-blue/80 dark:to-brand-charcoal/70",
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
  frontend:
    "border-brand-charcoal/40 bg-brand-charcoal/15 text-brand-charcoal dark:border-brand-charcoal/60 dark:bg-brand-charcoal/25 dark:text-brand-light",
  language:
    "border-brand-blue/40 bg-brand-blue/15 text-brand-blue dark:border-brand-blue/60 dark:bg-brand-blue/25 dark:text-brand-light",
  styling:
    "border-lightMode-mint/80 bg-lightMode-mint/35 text-brand-charcoal dark:border-brand-green/60 dark:bg-brand-green/20 dark:text-brand-light",
  state:
    "border-lightMode-blush/80 bg-lightMode-blush/35 text-brand-charcoal dark:border-brand-coral/60 dark:bg-brand-coral/20 dark:text-brand-light",
  infrastructure:
    "border-brand-gold/60 bg-brand-gold/20 text-brand-charcoal dark:border-brand-gold/70 dark:bg-brand-gold/25 dark:text-brand-light",
  integration:
    "border-brand-green/60 bg-brand-green/25 text-brand-charcoal dark:border-brand-green/60 dark:bg-brand-green/25 dark:text-brand-light",
  backend:
    "border-brand-blue/50 bg-brand-blue/20 text-brand-charcoal dark:border-brand-blue/70 dark:bg-brand-blue/25 dark:text-brand-light",
  realtime:
    "border-brand-coral/60 bg-brand-coral/25 text-brand-charcoal dark:border-brand-coral/60 dark:bg-brand-coral/25 dark:text-brand-light",
  default:
    "border-border/70 bg-surface-card/70 text-brand-charcoal dark:border-border/60 dark:bg-brand-black/40 dark:text-brand-light",
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

  return (
    <section
      id={project.id}
      className={`rounded-3xl border border-border bg-surface-card/90 ${backgroundClass} p-3 text-text shadow-xl transition hover:border-light-soft/70 hover:shadow-[0_20px_45px_rgba(0,0,0,0.18)] dark:bg-surface-card`}
    >
      {/* Header row */}
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full flex-col gap-2 rounded-2xl border border-border/70 bg-white/50 px-4 py-3 text-left backdrop-blur-sm transition dark:border-border/60 dark:bg-brand-black/40"
      >
        <div className="flex w-full items-start justify-between gap-4">
          <h2 className="text-xl font-heading text-text uppercase">
            {project.name}
          </h2>

          <span
            className={`shrink-0 rounded-full border px-3 py-1 text-xs font-body transition ${
              isOpen
                ? "border-lightMode-lavender bg-brand-lightMode-lavender/10 dark:border-light dark:bg-brand-light/10 text-lightMode-lavender dark:text-brand-light"
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
            <div className="rounded-2xl border border-border/60 bg-white p-4 shadow-sm dark:bg-surface/40">
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
                          ? "border-lightMode-lavender bg-brand-lightMode-lavender/10 text-lightMode-lavender dark:border-light dark:bg-brand-light/10 dark:text-brand-light"
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
                className="inline-flex items-center justify-center rounded-full border border-border/80 bg-brand-charcoal px-5 py-2 font-body font-semibold text-brand-light transition hover:border-brand-charcoal hover:bg-brand-black hover:text-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-charcoal dark:border-brand-black dark:bg-brand-black dark:text-brand-light"
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
