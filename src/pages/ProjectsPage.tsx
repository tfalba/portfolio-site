import { useEffect, useRef, useState } from "react";
import {
  ProjectSection,
  ROW_GRADIENTS,
  type Project,
} from "../components/ProjectSection";
import type { CarouselImage } from "../components/ImageCarousel";
import { projects } from "../data/projectData";

type HeroSlide = CarouselImage & {
  projectId: string;
  projectName: string;
  thumbnails: CarouselImage[];
  accentClass: string;
};

const HERO_REVEAL_DELAY_MS = 3200;
const PANE_TRANSITION_MS = 250;

export const ProjectsPage: React.FC = () => {
  const initialProjectId = projects[0]?.id ?? "";
  const [liveProject, setLiveProject] = useState<Project | null>(null);
  const [imagePreview, setImagePreview] = useState<{
    projectName: string;
    desktop?: CarouselImage;
    phone?: CarouselImage;
  } | null>(null);
  const [projectMenuOpen, setProjectMenuOpen] = useState(false);
  const [targetProjectId, setTargetProjectId] = useState(initialProjectId);
  const [currentProjectId, setCurrentProjectId] = useState<string | null>(null);
  const [contentReady, setContentReady] = useState(false);
  const [paneState, setPaneState] = useState<
    "hidden" | "entering" | "exiting" | "idle"
  >("hidden");

  const handleOpenLive = (project: Project) => {
    setLiveProject(project);
  };

  const handleCloseLive = () => {
    setLiveProject(null);
  };

  const handleImagePreview = (
    projectName: string,
    desktop?: CarouselImage,
    phone?: CarouselImage
  ) => {
    if (!desktop && !phone) return;
    setImagePreview({ projectName, desktop, phone });
  };

  const handleCloseImagePreview = () => setImagePreview(null);

  useEffect(() => {
    if (contentReady || currentProjectId) return;

    const timer = setTimeout(() => {
      setCurrentProjectId(targetProjectId);
      setPaneState("entering");
      setContentReady(true);
    }, HERO_REVEAL_DELAY_MS);

    return () => clearTimeout(timer);
  }, [contentReady, currentProjectId, targetProjectId]);

  useEffect(() => {
    if (!contentReady) return;

    let timer: ReturnType<typeof setTimeout> | undefined;

    if (paneState === "exiting") {
      timer = setTimeout(() => {
        setCurrentProjectId(targetProjectId);
        setPaneState("entering");
      }, PANE_TRANSITION_MS);
    } else if (paneState === "entering") {
      timer = setTimeout(() => {
        setPaneState("idle");
      }, PANE_TRANSITION_MS);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [paneState, contentReady, targetProjectId]);

  useEffect(() => {
    if (!contentReady) return;
    if (!currentProjectId) return;
    if (targetProjectId === currentProjectId) return;
    if (paneState === "exiting" || paneState === "entering") return;
    setPaneState("exiting");
  }, [targetProjectId, currentProjectId, contentReady, paneState]);

  const heroSlides = projects.reduce<HeroSlide[]>((acc, project) => {
    if (acc.length >= 6) return acc;

    const [primaryImage, ...rest] = project.images ?? [];
    const thumbnails = rest
      .filter((image): image is CarouselImage => Boolean(image?.src))
      .slice(0, 3)
      .map((thumb, index) => ({
        ...thumb,
        alt: thumb.alt ?? `${project.name} detail ${index + 1}`,
      }));

    if (primaryImage?.src) {
      const accentClass =
        ROW_GRADIENTS[acc.length % ROW_GRADIENTS.length] ?? ROW_GRADIENTS[0];
      acc.push({
        ...primaryImage,
        alt: primaryImage.alt ?? `${project.name} preview`,
        projectId: project.id,
        projectName: project.name,
        thumbnails,
        accentClass,
      });
    }
    return acc;
  }, []);

  const handleProjectChange = (id: string) => {
    if (!id || id === targetProjectId) return;
    setTargetProjectId(id);
    if (!contentReady) return;
    if (!currentProjectId) return;
    if (paneState === "idle") {
      setPaneState("exiting");
    }
  };

  const activeProject = projects.find(
    (project) => project.id === (currentProjectId ?? targetProjectId)
  );

  return (
    <>
      <section className="mx-auto max-w-[95rem] overflow-hidden rounded-[2.75rem] border border-border bg-surface-card/95 text-text shadow-[0_35px_120px_rgba(0,0,0,0.12)]">
        <div className="space-y-2 border-b border-border/50 p-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-3xl font-heading uppercase">
              Selected Projects
            </h2>
            <div className="relative">
              <button
                type="button"
                onClick={() => setProjectMenuOpen((prev) => !prev)}
                aria-haspopup="true"
                aria-expanded={projectMenuOpen}
                className="btn-3d btn-3d-ghost relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.35em]"
              >
                Browse projects
                <span
                  className={`text-xs transition ${
                    projectMenuOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`absolute right-0 z-20 mt-3 w-60 origin-top-right rounded-2xl border border-border bg-white/95 shadow-2xl ring-1 ring-border/40 transition ${
                  projectMenuOpen
                    ? "scale-100 opacity-100"
                    : "pointer-events-none scale-95 opacity-0"
                }`}
              >
                <nav className="py-2 text-sm font-body text-brand-black/70">
                  {projects.map((project) => (
                    <button
                      key={project.id}
                      type="button"
                      onClick={() => {
                        handleProjectChange(project.id);
                        setProjectMenuOpen(false);
                      }}
                      className="flex w-full items-center justify-between px-4 py-2 text-left text-brand-black/70 transition hover:bg-surface-muted/70 hover:text-brand-black"
                    >
                      {project.name}
                      <span className="text-xs text-brand-black/60">↘</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
          <p className="font-body text-text-muted">
            A snapshot of the products and experiments I’ve built. Click or
            hover over any project tile to load its story, screenshots, and live
            preview below.
          </p>
        </div>

        <HeroBanner
          images={heroSlides}
          onSelect={handleProjectChange}
          activeId={targetProjectId}
        />

        <div className="bg-white/95 p-4 pt-0 min-h-[100px]">
          <div
            className={`transition-all duration-300 ease-out ${
              !contentReady || paneState === "hidden"
                ? "translate-y-[-120px] opacity-0 pointer-events-none"
                : paneState === "entering"
                  ? "translate-y-[-120px] opacity-0"
                  : paneState === "exiting"
                    ? "opacity-0 pointer-events-none"
                    : "translate-y-0 opacity-100"
            }`}
          >
            {activeProject && (
              <ProjectSection
                key={activeProject.id}
                project={activeProject}
                attached
                onOpenLive={handleOpenLive}
                onExpandImage={handleImagePreview}
                variant={projects.findIndex(({ id }) => id === activeProject.id)}
              />
            )}
          </div>
        </div>
      </section>

      {liveProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-surface-muted/95 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Preview of ${liveProject.name}`}
          onClick={handleCloseLive}
        >
          <div
            className="relative flex h-full w-full max-w-[95rem] flex-col gap-4 rounded-3xl border border-border bg-surface-card/95 p-5 text-text shadow-[0_35px_120px_rgba(0,0,0,0.25)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase text-text-muted">
                  Live preview
                </p>
                <h3 className="text-xl font-heading text-text">
                  {liveProject.name}
                </h3>
              </div>
              <div className="flex items-center gap-3 text-sm">
                {liveProject.liveUrl && (
                  <a
                    href={liveProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-border px-4 py-2 text-text transition hover:border-light hover:text-light"
                  >
                    Open in new tab
                  </a>
                )}
                <button
                  type="button"
                  onClick={handleCloseLive}
                  className="rounded-full border border-border px-3 py-2 text-xs uppercase tracking-wide text-text-muted transition hover:border-light hover:text-light"
                >
                  Close
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-hidden rounded-xl border border-border bg-surface-elevated/40">
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-surface-muted/95 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Screenshot preview of ${imagePreview.projectName}`}
          onClick={handleCloseImagePreview}
        >
          <div
            className="relative flex h-full w-full max-w-[95rem] flex-col gap-4 rounded-3xl border border-border bg-surface-card/95 p-5 text-text shadow-[0_35px_120px_rgba(0,0,0,0.25)]"
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
                className="rounded-full border border-border px-4 py-2 text-xs uppercase tracking-wide text-text-muted transition hover:border-light hover:text-light"
              >
                Close
              </button>
            </div>

            <div className="flex flex-1 flex-col gap-6 overflow-y-auto md:flex-row">
              {imagePreview.desktop && (
                <div className="flex-1 overflow-hidden rounded-xl border border-border bg-surface-elevated/40">
                  <img
                    src={imagePreview.desktop.src}
                    alt={imagePreview.desktop.alt ?? "Desktop screenshot"}
                    className="h-full w-full object-contain"
                  />
                </div>
              )}
              {imagePreview.phone && (
                <div className="w-full max-w-sm self-center rounded-3xl border border-border bg-surface-elevated/40 p-4 md:self-start">
                  <div className="rounded-2xl bg-white/80 p-2">
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

const HeroBanner: React.FC<{
  images: HeroSlide[];
  onSelect: (id: string) => void;
  activeId: string;
}> = ({ images, onSelect, activeId }) => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  if (images.length === 0) return null;

  return (
    <div ref={heroRef} className="relative bg-white/60 px-4 pt-10 pb-0">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {images.map((image, index) => {
          const isActive = image.projectId === activeId;
          return (
            <div
              style={{ animationDelay: `${index * 0.45}s` }}
                              onClick={() => onSelect(image.projectId)}

              className={`flex flex-col items-center opacity-0 animate-hero-slide transition rounded-t-[1.5rem] ${image.accentClass} ${
                isActive
                  ? "mt-[-1.75rem] gap-5 p-3 pt-6 shadow"
                  : "p-3 gap-2 max-h-min hover:mt-[-0.5rem] hover:shadow-md"
              }`}
              key={`${image.projectId}-container`}
            >
              <button
                type="button"
                // onClick={() => onSelect(image.projectId)}
                   className={`group relative w-full overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat aspect-[8/5] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-white`}
                // className={`group relative w-full overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat aspect-[8/5] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-white ${
                //   isActive
                //     ? " ring-4 ring-white/80 shadow-lg scale-[1.01]"
                //     : " hover:-translate-y-1 hover:shadow-xl"
                // }`}
                style={{
                  backgroundImage: `url(${image.src})`,
                }}
                aria-label={image.alt ?? `View ${image.projectId}`}
                aria-pressed={isActive}
              />
              <span
                className="tab-pill tab-pill--hero"
                data-active={isActive}
                title={image.projectName}
              >
                {image.projectName}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
