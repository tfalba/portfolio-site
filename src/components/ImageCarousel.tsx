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
      <div className="flex h-64 w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm text-white/60 shadow-inner shadow-black/40">
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
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-brand-ink/60 shadow-[0_25px_90px_rgba(0,0,0,0.45)]">
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
            className="absolute bottom-6 right-6 w-24 translate-y-2 rotate-2 drop-shadow-[0_25px_45px_rgba(0,0,0,0.45)] transition hover:scale-105 md:w-28 lg:w-32"
            aria-label="Expand mobile screenshot"
          >
            <div className="relative rounded-[1.25rem] border border-white/20 bg-brand-ink/80 p-1 shadow-[0_20px_40px_rgba(0,0,0,0.45)]">
              <div className="aspect-[9/19] w-full overflow-hidden rounded-[1.25rem] bg-black/40">
                <img
                  src={currentPhone.src}
                  alt={currentPhone.alt ?? "Mobile view"}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="absolute left-1/2 top-3 h-1 w-8 -translate-x-1/2 rounded-full bg-white/15" />
              <span className="absolute left-1/2 bottom-3 h-1.5 w-14 -translate-x-1/2 rounded-full bg-white/10" />
            </div>
          </button>
        )}

        {/* Controls */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/20 text-text px-2 text-white transition hover:bg-white/30"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/20 px-2 text-white transition hover:bg-white/30"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 text-xs text-white/60">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === index
                ? "bg-brand-ember/70 hover:bg-brand-ember/90"
                : "bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
