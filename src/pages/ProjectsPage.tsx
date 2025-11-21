import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ProjectSection, type Project } from "../components/ProjectSection";
import type { CarouselImage } from "../components/ImageCarousel";
import { projects } from "../data/projectData";

interface ProjectProps {
  openId: string | null;
  handleToggle: (openId: string) => void;
}

export const ProjectsPage: React.FC<ProjectProps> = ({openId, handleToggle}) => {
  const location = useLocation();
  const onProjectsRoute = location.pathname === "/";

//   const [openId, setOpenId] = useState<string | null>(projects[0]?.id ?? null);
  const [liveProject, setLiveProject] = useState<Project | null>(null);
  const [imagePreview, setImagePreview] = useState<{
    projectName: string;
    desktop?: CarouselImage;
    phone?: CarouselImage;
  } | null>(null);

//   const handleToggle = (id: string) => {
//     setOpenId((prev) => (prev === id ? null : id));
//   };

  const handleOpenLive = (project: Project) => {
    setLiveProject(project);
  };

  const handleCloseLive = () => {
    setLiveProject(null);
  };

  const handleImagePreview = (
    projectName: string,
    desktop?: CarouselImage,
    phone?: CarouselImage,
  ) => {
    if (!desktop && !phone) return;
    setImagePreview({ projectName, desktop, phone });
  };

  const handleCloseImagePreview = () => setImagePreview(null);

  return (
    <>
      <section className="mb-4 max-w-6xl space-y-4 rounded-3xl bg-surface-card/70 p-4 text-text shadow-lg ring-1 ring-border/60 dark:bg-transparent dark:shadow-none dark:ring-0">
        {/* {onProjectsRoute && (
          <nav className="mb-2 flex flex-wrap justify-end gap-3 text-sm font-body text-text-muted md:mb-1">
            {projects.map((project) => (
              <a
                key={project.id}
                href={`#${project.id}`}
                onClick={() => handleToggle(project.id)}
                className="rounded-full px-3 py-1 transition hover:bg-accent/10 hover:text-text"
              >
                {project.name}
              </a>
            ))}
          </nav>
        )} */}
        <h2 className="text-3xl font-heading text-text">
          Selected Projects
        </h2>
        <p className="text-sm font-body text-text-muted">
          A snapshot of the products and experiments I’ve built. Click any
          project to expand the full story, see screenshots, and jump directly
          into the live experience or source code.
        </p>
      </section>

      <div className="space-y-6 pt-4">
        {projects.map((project, index) => (
          <ProjectSection
            key={project.id}
            project={project}
            isOpen={openId === project.id}
            onToggle={() => handleToggle(project.id)}
            onOpenLive={handleOpenLive}
            onExpandImage={handleImagePreview}
            variant={index}
          />
        ))}
      </div>

      {liveProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-surface-muted/95 px-4 py-6 backdrop-blur-sm dark:bg-black/80"
          role="dialog"
          aria-modal="true"
          aria-label={`Preview of ${liveProject.name}`}
          onClick={handleCloseLive}
        >
          <div
            className="relative flex h-full w-full max-w-6xl flex-col gap-4 rounded-3xl border border-border bg-surface-card/95 p-5 text-text shadow-[0_35px_120px_rgba(0,0,0,0.25)] dark:border-border/60 dark:bg-brand-black/80 dark:text-brand-light"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase text-text-muted">Live preview</p>
                <h3 className="text-xl font-heading text-text">{liveProject.name}</h3>
              </div>
              <div className="flex items-center gap-3 text-sm">
                {liveProject.liveUrl && (
                  <a
                    href={liveProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-border px-4 py-2 text-text transition hover:border-accent hover:text-accent"
                  >
                    Open in new tab
                  </a>
                )}
                <button
                  type="button"
                  onClick={handleCloseLive}
                  className="rounded-full border border-border px-3 py-2 text-xs uppercase tracking-wide text-text-muted transition hover:border-accent hover:text-accent"
                >
                  Close
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-hidden rounded-xl border border-border bg-surface-elevated/40 dark:bg-black/60">
              <iframe
                title={`${liveProject.name} live preview`}
                src={liveProject.liveUrl}
                className="h-full w-full"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {imagePreview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-surface-muted/95 px-4 py-6 backdrop-blur-sm dark:bg-black/90"
          role="dialog"
          aria-modal="true"
          aria-label={`Screenshot preview of ${imagePreview.projectName}`}
          onClick={handleCloseImagePreview}
        >
          <div
            className="relative flex h-full w-full max-w-6xl flex-col gap-4 rounded-3xl border border-border bg-surface-card/95 p-5 text-text shadow-[0_35px_120px_rgba(0,0,0,0.25)] dark:border-border/60 dark:bg-brand-black/85 dark:text-brand-light"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-text-muted">
                  Screenshot preview
                </p>
                <h3 className="text-xl font-heading text-text">
                  {imagePreview.projectName}
                </h3>
              </div>
              <button
                type="button"
                onClick={handleCloseImagePreview}
                className="rounded-full border border-border px-4 py-2 text-xs uppercase tracking-wide text-text-muted transition hover:border-accent hover:text-accent"
              >
                Close
              </button>
            </div>

            <div className="flex flex-1 flex-col gap-6 overflow-y-auto md:flex-row">
              {imagePreview.desktop && (
                <div className="flex-1 overflow-hidden rounded-xl border border-border bg-surface-elevated/40 dark:bg-black/60">
                  <img
                    src={imagePreview.desktop.src}
                    alt={imagePreview.desktop.alt ?? "Desktop screenshot"}
                    className="h-full w-full object-contain"
                  />
                </div>
              )}
              {imagePreview.phone && (
                <div className="w-full max-w-sm self-center rounded-3xl border border-border bg-surface-elevated/40 p-4 md:self-start dark:bg-black/60">
                  <div className="rounded-2xl bg-white/80 p-2 dark:bg-black">
                    <img
                      src={imagePreview.phone.src}
                      alt={imagePreview.phone.alt ?? "Mobile screenshot"}
                      className="w-full rounded-xl object-contain"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
