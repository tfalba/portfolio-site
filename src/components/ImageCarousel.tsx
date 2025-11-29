// src/components/ImageCarousel.tsx
import React, { useState } from "react";

export type CarouselImage = {
  id?: number | string;
  src?: string;
  alt?: string;
};

interface ImageCarouselProps {
  images: CarouselImage[];
  imagesPhone?: CarouselImage[];
  onExpand?: (desktop?: CarouselImage, phone?: CarouselImage) => void;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  imagesPhone = [],
  onExpand,
}) => {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="flex h-64 w-full items-center justify-center rounded-xl bg-surface-muted text-sm text-text-muted">
        No screenshots yet
      </div>
    );
  }

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const current = images[index];
  const currentPhone = imagesPhone[index];

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="relative overflow-hidden rounded-xl border border-border bg-surface-elevated/60 shadow-lg dark:border-border/70 dark:bg-brand-black/70">
        <button
          type="button"
          onClick={() => onExpand?.(current, currentPhone)}
          aria-label="Expand screenshot"
          className="block h-64 w-full cursor-zoom-in bg-transparent p-0 md:h-[25rem]"
        >
          <img
            src={current?.src}
            alt={current?.alt}
            className="h-full w-full object-contain"
          />
        </button>

        {currentPhone?.src && (
          <button
            type="button"
            onClick={() => onExpand?.(current, currentPhone)}
            className="absolute bottom-6 right-6 w-24 translate-y-2 rotate-2 drop-shadow-[0_18px_35px_rgba(0,0,0,0.35)] transition hover:scale-105 md:w-28 lg:w-32"
            aria-label="Expand mobile screenshot"
          >
            <div className="relative rounded-[1.75rem] border border-border bg-surface-card/90 p-2 shadow-[0_15px_35px_rgba(0,0,0,0.35)] ring-1 ring-border/70 dark:bg-brand-black/80">
              <div className="aspect-[9/19] w-full overflow-hidden rounded-[1.25rem] bg-surface-muted dark:bg-brand-black">
                <img
                  src={currentPhone.src}
                  alt={currentPhone.alt ?? "Mobile view"}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="absolute left-1/2 top-3 h-1 w-8 -translate-x-1/2 rounded-full bg-text-muted/20" />
              <span className="absolute left-1/2 bottom-3 h-1.5 w-14 -translate-x-1/2 rounded-full bg-text-muted/10" />
            </div>
          </button>
        )}

        {/* Controls */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-surface-card/80 px-3 py-1 text-sm text-text shadow hover:bg-brand-brand-light/80 hover:text-white dark:bg-brand-black/80 dark:text-brand-light"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-surface-card/80 px-3 py-1 text-sm text-text shadow hover:bg-brand-brand-light/80 hover:text-white dark:bg-brand-black/80 dark:text-brand-light"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 text-xs text-text-muted">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === index
                ? "bg-brand-light"
                : "bg-brand-brand-light/50 hover:bg-brand-brand-light/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
