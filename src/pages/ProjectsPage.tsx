import { useRef, useState } from "react";
import { ProjectSection, ROW_GRADIENTS, type Project } from "../components/ProjectSection";
import type { CarouselImage } from "../components/ImageCarousel";
import { projects } from "../data/projectData";

interface ProjectProps {
  openProjects: Record<string, boolean>;
  handleToggle: (openId: string) => void;
  handleOpenProject: (openId: string) => void;
}

type HeroSlide = CarouselImage & {
  projectId: string;
  projectName: string;
  thumbnails: CarouselImage[];
  accentClass: string;
};

const HERO_PREVIEW_ENABLED = false;

export const ProjectsPage: React.FC<ProjectProps> = ({
  openProjects,
  handleToggle,
  handleOpenProject,
}) => {
  const [liveProject, setLiveProject] = useState<Project | null>(null);
  const [imagePreview, setImagePreview] = useState<{
    projectName: string;
    desktop?: CarouselImage;
    phone?: CarouselImage;
  } | null>(null);
  const [projectMenuOpen, setProjectMenuOpen] = useState(false);

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

  return (
    <>
      <section className="max-w-[90rem] space-y-2 rounded-3xl p-2 text-text">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-3xl font-heading text-text uppercase">
            Selected Projects
          </h2>
         <div className="relative">
            <button
              type="button"
              onClick={() => setProjectMenuOpen((prev) => !prev)}
              aria-haspopup="true"
              aria-expanded={projectMenuOpen}
              className="inline-flex items-center gap-2 rounded-full border border-brand-charcoal/40 bg-white/90 px-4 py-2 text-sm font-medium text-brand-charcoal shadow-sm transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-charcoal"
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
              className={`absolute right-0 z-10 mt-3 w-60 origin-top-right rounded-2xl border border-border bg-white/95 shadow-2xl ring-1 ring-border/40 transition ${
                projectMenuOpen
                  ? "scale-100 opacity-100"
                  : "pointer-events-none scale-95 opacity-0"
              }`}
            >
              <nav className="py-2 text-sm font-body text-brand-charcoal">
                {projects.map((project) => (
                  <a
                    key={project.id}
                    href={`#${project.id}`}
                    onClick={() => {
                      handleToggle(project.id);
                      setProjectMenuOpen(false);
                    }}
                    className="flex items-center justify-between px-4 py-2 text-brand-charcoal/70 transition hover:bg-brand-light/20 hover:text-brand-charcoal"
                  >
                    {project.name}
                    <span className="text-xs text-brand-charcoal/60">↘</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <p className="font-body text-text-muted">
          A snapshot of the products and experiments I’ve built. Click any
          project to expand the full story, see screenshots, and jump directly
          into the live experience or source code.
        </p>
         
      </section>
      <HeroBanner images={heroSlides} onSelect={handleOpenProject} />
     

      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectSection
            key={project.id}
            project={project}
            isOpen={!!openProjects[project.id]}
            onToggle={() => handleToggle(project.id)}
            onOpenLive={handleOpenLive}
            onExpandImage={handleImagePreview}
            variant={index}
          />
        ))}
      </div>

      {liveProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-surface-muted/95 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Preview of ${liveProject.name}`}
          onClick={handleCloseLive}
        >
          <div
            className="relative flex h-full w-full max-w-[90rem] flex-col gap-4 rounded-3xl border border-border bg-surface-card/95 p-5 text-text shadow-[0_35px_120px_rgba(0,0,0,0.25)]"
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
            className="relative flex h-full w-full max-w-[90rem] flex-col gap-4 rounded-3xl border border-border bg-surface-card/95 p-5 text-text shadow-[0_35px_120px_rgba(0,0,0,0.25)]"
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
}> = ({ images, onSelect }) => {
  const [preview, setPreview] = useState<{
    slide: HeroSlide;
    left: number;
    top: number;
  } | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  if (images.length === 0) return null;

  const previewEnabled = HERO_PREVIEW_ENABLED;

  const openPreview = (slide: HeroSlide, target: HTMLElement | null) => {
    if (
      !previewEnabled ||
      !target ||
      !heroRef.current ||
      slide.thumbnails.length === 0
    ) {
      setPreview(null);
      return;
    }

    const tileRect = target.getBoundingClientRect();
    const containerRect = heroRef.current.getBoundingClientRect();
    const left = tileRect.left - containerRect.left + tileRect.width / 2;
    const top = tileRect.bottom - containerRect.top;

    setPreview({
      slide,
      left,
      top,
    });
  };

  const closePreview = () => setPreview(null);

  return (
    <section
      ref={heroRef}
      className="relative mb-6 border border-border bg-surface-card/80 shadow-[0_45px_95px_rgba(0,0,0,0.15)]"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {images.map((image, index) => (
            <div
                            onClick={() => onSelect(image.projectId)}

              style={{ animationDelay: `${index * 0.45}s` }}
              className={`flex flex-col items-center p-3 opacity-0 animate-hero-slide transition hover:-translate-y-2 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-light ${image.accentClass}`}
              key={`${image.projectId}-container`}
            >
               <span className="pointer-events-none rounded-2xl bg-white/15 p-1 text-xs uppercase tracking-[0.15em] text-brand-charcoal truncate transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  {image.projectName}
                </span>
              <button
                type="button"
                onMouseEnter={(event) =>
                  previewEnabled ? openPreview(image, event.currentTarget) : null
                }
                onFocus={(event) =>
                  previewEnabled ? openPreview(image, event.currentTarget) : null
                }
                onMouseLeave={closePreview}
                onBlur={closePreview}
                disabled={!previewEnabled}
                className="group relative w-full overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat aspect-[8/5]"
                style={{
                  backgroundImage: `url(${image.src})`,
                }}
                aria-label={image.alt ?? `View ${image.projectId}`}
              >
               
                <span className="sr-only">
                  {image.alt ?? `View ${image.projectId}`}
                </span>
              </button>
            </div>
        ))}
      </div>
      {previewEnabled && preview && (
        <div className="pointer-events-none absolute left-0 top-0 z-20 w-full px-4">
          <div
            className={`absolute w-fit max-w-md -translate-x-1/2 rounded-3xl border border-border p-3 text-text shadow-[0_35px_90px_rgba(0,0,0,0.25)] animate-hero-popover ${preview.slide.accentClass} bg-opacity-95`}
            style={{
              left: preview.left,
              top: preview.top + 12,
            }}
          >
            <div className="mx-auto flex max-w-sm flex-col items-center gap-3">
              {preview.slide.thumbnails.map((thumb, thumbIndex) => (
                <div
                  key={`${preview.slide.projectId}-${thumb.src}-${thumbIndex}`}
                  className="h-32 w-48 overflow-hidden rounded-2xl border border-border bg-surface-card"
                >
                  <img
                    src={thumb.src}
                    alt={thumb.alt ?? `${preview.slide.projectName} detail`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
