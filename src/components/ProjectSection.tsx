// src/components/ProjectSection.tsx
import React, { useState } from "react";
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
  "bg-gradient-to-br from-project-gold/90 via-project-gold/40 to-project-gold/70",
  "bg-gradient-to-br from-project-teal/90 via-project-teal/60 to-project-teal/80",
  "bg-gradient-to-br from-project-green/80 via-project-green/50 to-project-green/80",
  "bg-gradient-to-br from-project-taupe/90 via-project-taupe/60 to-project-taupe/50",
  "bg-gradient-to-br from-project-orange/90 via-project-orange/50 to-project-orange/90",
  "bg-gradient-to-br from-project-pink/80 via-project-pink/40 to-project-pink/70",
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
  frontend: "border-brand-black/20 bg-project-teal/70 text-brand-black/70",
  language: "border-brand-black/20 bg-project-taupe/70 text-brand-black/70",
  styling: "border-brand-black/20 bg-project-pink/70 text-brand-black/70",
  state: "border-brand-black/20 bg-project-green/70 text-brand-black/70",
  infrastructure:
    "border-brand-black/20 bg-project-orange/70 text-brand-black/70",
  integration: "border-brand-black/20 bg-project-teal/60 text-brand-black/70",
  backend: "border-brand-black/20 bg-project-taupe/55 text-brand-black/70",
  realtime: "border-brand-black/20 bg-project-orange/55 text-brand-black/70",
  default: "border-brand-black/20 bg-white/25 text-brand-black/70",
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

  const containerClass = attached
    ? `${backgroundClass} rounded-b-[2.75rem] border-0 bg-transparent p-6 text-text`
    : `rounded-3xl border border-border bg-surface-card/90 ${backgroundClass} p-5 text-text shadow-xl transition hover:-translate-y-1 hover:border-light-soft/70 hover:shadow-[0_20px_45px_rgba(0,0,0,0.18)]`;

  return (
    <section id={project.id} className={containerClass}>
      {/* Header row */}
      <div className="flex w-full flex-col gap-2 rounded-2xl border border-border/70 bg-white/30 px-4 py-3 text-left backdrop-blur-sm">
        <div className="flex w-full items-start justify-between gap-4">
          <h2 className="text-xl font-heading text-text uppercase">
            {project.name}
          </h2>
        </div>

        <p className="mt-0.5 text-sm text-text tracking-wide">
          {project.summary}
        </p>
        <TechTagList tags={techTags} className="mt-3" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
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
                    className="flex-1 tab-pill"
                    style={{
                      backgroundImage: isActive
                        ? `linear-gradient(135deg, rgba(var(--color-accent) / 0.95), rgba(var(--color-accent-strong) / 0.85))`
                        : undefined,
                      color: isActive ? "rgb(var(--color-surface))" : undefined,
                    }}
                    data-active={isActive}
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
              className="btn-3d relative inline-flex items-center justify-center overflow-hidden rounded-full px-5 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em]"
            >
              View live site
            </button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-3d btn-3d-ghost relative inline-flex items-center justify-center overflow-hidden rounded-full px-5 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em]"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
