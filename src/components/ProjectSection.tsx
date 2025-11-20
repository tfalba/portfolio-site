// src/components/ProjectSection.tsx
import React, { useState } from "react";
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
};

interface ProjectSectionProps {
  project: Project;
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id={project.id}
      className="rounded-2xl border border-brand-charcoal/25 bg-brand-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition hover:border-brand-red hover:shadow-[0_12px_30px_rgba(0,0,0,0.14)]"
    >
      {/* Header row */}
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="flex w-full items-start justify-between gap-4 text-left"
      >
        <div>
          <h2 className="text-xl font-heading text-brand-black">
            {project.name}
          </h2>
          {project.role && (
            <p className="mt-0.5 text-xs uppercase tracking-wide text-brand-charcoal/70">
              {project.role}
            </p>
          )}
          <p className="mt-2 text-sm text-brand-charcoal">{project.summary}</p>
          {project.techStack && (
            <p className="mt-1 text-xs text-brand-charcoal/70">
              Tech: {project.techStack}
            </p>
          )}
        </div>
        <span
          className={`shrink-0 rounded-full border px-3 py-1 text-xs font-body transition ${
            expanded
              ? "border-brand-red bg-brand-red/10 text-brand-red"
              : "border-brand-charcoal/40 bg-brand-light text-brand-charcoal"
          }`}
        >
          {expanded ? "Hide details ▲" : "Show details ▼"}
        </span>
      </button>

      {/* Expandable content */}
      {expanded && (
        <div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          {/* Carousel */}
          <ImageCarousel images={project.images} />

          {/* Description + links */}
          <div className="flex flex-col justify-between gap-4">
            <p className="text-sm leading-relaxed text-brand-charcoal">
              {project.description}
            </p>

            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-brand-red px-4 py-2 font-body font-medium text-brand-white transition hover:bg-brand-coral active:bg-brand-black"
              >
                View live site
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-brand-charcoal/50 px-4 py-2 font-body font-medium text-brand-charcoal transition hover:border-brand-red hover:text-brand-red active:border-brand-coral active:text-brand-coral"
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
