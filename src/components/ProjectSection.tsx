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
  variant: number;
}

const ROW_GRADIENTS = [
  "bg-gradient-to-br from-brand-black/90 via-brand-charcoal/60 to-brand-black/90",
  "bg-gradient-to-br from-brand-charcoal/10 via-brand-blue/60 to-brand-black/80",
  "bg-gradient-to-br from-brand-green/10 via-brand-green/80 to-brand-green/80",
  "bg-gradient-to-br from-brand-black/85 via-brand-coral/60 to-brand-red/30",
];

export const ProjectSection: React.FC<ProjectSectionProps> = ({
  project,
  isOpen,
  onToggle,
  onOpenLive,
  variant,
}) => {
  const backgroundClass =
    ROW_GRADIENTS[variant % ROW_GRADIENTS.length] ?? ROW_GRADIENTS[0];

  return (
    <section
      id={project.id}
      className={`rounded-2xl border border-brand-light/10 ${backgroundClass} p-5 shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition hover:border-brand-coral/60 hover:shadow-[0_15px_40px_rgba(0,0,0,0.55)]`}
    >
      {/* Header row */}
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 text-left"
      >
        <div>
          <h2 className="text-xl font-heading text-brand-white">
            {project.name}
          </h2>
          {project.role && (
            <p className="mt-0.5 text-xs uppercase tracking-wide text-brand-light/60">
              {project.role}
            </p>
          )}
          <p className="mt-2 text-sm text-brand-light/80">{project.summary}</p>
          {project.techStack && (
            <p className="mt-1 text-xs text-brand-light/60">
              Tech: {project.techStack}
            </p>
          )}
        </div>
        <span
          className={`shrink-0 rounded-full border px-3 py-1 text-xs font-body transition ${
            isOpen
              ? "border-brand-coral/60 bg-brand-coral/10 text-brand-coral"
              : "border-brand-light/20 bg-brand-black/60 text-brand-light/70"
          }`}
        >
          {isOpen ? "Hide details ▲" : "Show details ▼"}
        </span>
      </button>

      {/* Expandable content */}
      {isOpen && (
        <div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          {/* Carousel */}
          <ImageCarousel images={project.images} imagesPhone={project.imagesPhone} />

          {/* Description + links */}
          <div className="flex flex-col justify-between gap-4">
            <p className="text-md leading-relaxed text-brand-light/90">
              {project.description}
            </p>

            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              <button
                type="button"
                onClick={() => onOpenLive(project)}
                className="inline-flex items-center justify-center rounded-full bg-brand-red px-4 py-2 font-body font-medium text-brand-white transition hover:bg-brand-coral active:bg-brand-white/20"
              >
                View live site
              </button>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-brand-light/30 px-4 py-2 font-body font-medium text-brand-light transition hover:border-brand-coral hover:text-brand-coral active:border-brand-red active:text-brand-red"
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
