// src/components/ProjectSection.tsx
import React from "react";
import { ImageCarousel, type CarouselImage } from "./ImageCarousel";

export type Project = {
  id: string;
  name: string;
  role?: string;
  techStack?: string;
  summary: string;
  description: string;
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
    phone?: CarouselImage,
  ) => void;
  variant: number;
}

const ROW_GRADIENTS = [
  "bg-gradient-to-br from-lightMode-butter/80 via-lightMode-white to-lightMode-mist dark:from-brand-gold/80 dark:via-brand-gold/30 dark:to-brand-charcoal/85",
  "bg-gradient-to-br from-lightMode-mint/60 via-lightMode-white to-lightMode-lavender/60 dark:from-brand-blue/60 dark:via-brand-charcoal/70 dark:to-brand-black/80",
  "bg-gradient-to-br from-lightMode-blush/60 via-lightMode-mist to-lightMode-white dark:from-brand-coral/50 dark:via-brand-black/80 dark:to-brand-black/95",
  "bg-gradient-to-br from-lightMode-white via-lightMode-butter/60 to-lightMode-mint/50 dark:from-brand-green/40 dark:via-brand-black/80 dark:to-brand-charcoal/90",
];

export const ProjectSection: React.FC<ProjectSectionProps> = ({
  project,
  isOpen,
  onToggle,
  onOpenLive,
  onExpandImage,
  variant,
}) => {
  const backgroundClass =
    ROW_GRADIENTS[variant % ROW_GRADIENTS.length] ?? ROW_GRADIENTS[0];

  return (
    <section
      id={project.id}
      className={`rounded-3xl border border-border bg-surface-card/90 ${backgroundClass} p-5 text-text shadow-xl transition hover:border-accent-soft/70 hover:shadow-[0_20px_45px_rgba(0,0,0,0.18)] dark:bg-surface-card`}
    >
      {/* Header row */}
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 text-left"
      >
        <div>
          <h2 className="text-xl font-heading text-text">
            {project.name}
          </h2>
          {project.role && (
            <p className="mt-0.5 text-xs uppercase tracking-wide text-text-muted">
              {project.role}
            </p>
          )}
          <p className="mt-2 text-sm text-text-muted">{project.summary}</p>
          {project.techStack && (
            <p className="mt-1 text-xs text-text-muted">
              Tech: {project.techStack}
            </p>
          )}
        </div>
        <span
          className={`shrink-0 rounded-full border px-3 py-1 text-xs font-body transition ${
            isOpen
              ? "border-accent bg-accent/10 text-accent"
              : "border-border bg-surface-muted/60 text-text-muted"
          }`}
        >
          {isOpen ? "Hide details ▲" : "Show details ▼"}
        </span>
      </button>

      {/* Expandable content */}
      {isOpen && (
        <div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
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
            <p className="text-base leading-relaxed text-text">
              {project.description}
            </p>

            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              <button
                type="button"
                onClick={() => onOpenLive(project)}
                className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 font-body font-medium text-white transition hover:bg-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                View live site
              </button>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-border px-4 py-2 font-body font-medium text-text transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
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
