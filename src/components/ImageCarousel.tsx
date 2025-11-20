// src/components/ImageCarousel.tsx
import React, { useState } from "react";

export type CarouselImage = {
  src: string;
  alt: string;
};

interface ImageCarouselProps {
  images: CarouselImage[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="flex h-64 w-full items-center justify-center rounded-xl bg-brand-light text-sm text-brand-charcoal/70">
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

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="relative overflow-hidden rounded-xl border border-brand-charcoal/30 bg-brand-white">
        <img
          src={current.src}
          alt={current.alt}
          className="h-64 w-full object-cover md:h-80"
        />

        {/* Controls */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-brand-black/80 px-3 py-1 text-sm text-brand-white transition hover:bg-brand-red active:bg-brand-coral"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-brand-black/80 px-3 py-1 text-sm text-brand-white transition hover:bg-brand-red active:bg-brand-coral"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 text-xs text-brand-charcoal/70">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === index
                ? "bg-brand-red"
                : "bg-brand-charcoal/40 hover:bg-brand-coral"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
