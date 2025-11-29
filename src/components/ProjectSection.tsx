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
    phone?: CarouselImage,
  ) => void;
  variant: number;
}

const ROW_GRADIENTS = [
  "bg-gradient-to-br from-lightMode-butter via-lightMode-butter/50 to-lightMode-white dark:from-brand-gold dark:via-brand-coral/80 dark:to-brand-red/70",
  "bg-gradient-to-br from-lightMode-mint/30 via-lightMode-mint/20 to-lightMode-white dark:from-brand-blue dark:via-brand-green/80 dark:to-brand-gold/70",
  "bg-gradient-to-br from-lightMode-blush/30 via-lightMode-blush/20 to-lightMode-white dark:from-brand-coral dark:via-brand-red/80 dark:to-brand-gold/60",
  "bg-gradient-to-br from-lightMode-lavender/20 via-lightMode-mint/20 to-lightMode-butter/50 dark:from-brand-green dark:via-brand-blue/80 dark:to-brand-charcoal/70",
];

export const ProjectSection: React.FC<ProjectSectionProps> = ({
  project,
  isOpen,
  onToggle,
  onOpenLive,
  onExpandImage,
  variant,
}) => {
  const [activeTab, setActiveTab] = useState<"description" | "details">(
    "description",
  );
  const backgroundClass =
    ROW_GRADIENTS[variant % ROW_GRADIENTS.length] ?? ROW_GRADIENTS[0];

  useEffect(() => {
    if (!isOpen && activeTab !== "description") {
      setActiveTab("description");
    }
  }, [isOpen, activeTab]);

  return (
    <section
      id={project.id}
      className={`rounded-3xl border border-border bg-surface-card/90 ${backgroundClass} p-5 text-text shadow-xl transition hover:border-light-soft/70 hover:shadow-[0_20px_45px_rgba(0,0,0,0.18)] dark:bg-surface-card`}
    >
      {/* Header row */}
      <button
        type="button"
        onClick={onToggle}
        className="flex flex-col w-full items-start justify-between text-left"
      >
        <div className="flex justify-between w-full">
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
           {/* {project.role && (
            <p className="mt-0.5 text-xs uppercase tracking-wide text-text-muted">
              {project.role}
            </p>
          )} */}
          <p className="mt-0.5 text-sm text-text-muted tracking-wide">{project.summary}</p>
          {project.techStack && (
            <p className="mt-1 text-xs text-text-muted uppercase">
              Tech: {project.techStack}
            </p>
          )}
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
                    {project.techStack && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                          Frameworks & Tools
                        </p>
                        <p className="mt-1 text-base text-text">
                          {project.techStack}
                        </p>
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
                className="inline-flex items-center justify-center rounded-full bg-brand-lightMode-lavender dark:bg-brand-red px-4 py-2 font-body font-medium text-white transition hover:bg-brand-light-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light"
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
