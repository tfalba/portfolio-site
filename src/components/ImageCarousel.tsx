// src/components/ImageCarousel.tsx
import React, { useState } from "react";

export type CarouselImage = {
  id: number;
  src: string | undefined;
  alt: string | undefined;
};

interface ImageCarouselProps {
  images: CarouselImage[];
  imagesPhone: CarouselImage[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  imagesPhone,
}) => {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="flex h-64 w-full items-center justify-center rounded-xl bg-brand-black/60 text-sm text-brand-light/70">
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
      <div className="relative overflow-hidden rounded-xl border border-brand-light/15 bg-brand-black/70">
        <img
          src={current.src}
          alt={current.alt}
          className="h-64 w-full object-contain md:h-[22rem]"
        />
{currentPhone?.src !== undefined && 
        <img
          src={currentPhone?.src}
          alt={currentPhone?.alt}
          className="h-32 w-full object-contain md:h-[22rem]"
        />
}

        {/* Controls */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-brand-white/10 px-3 py-1 text-sm text-brand-white transition hover:bg-brand-red active:bg-brand-coral"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-brand-white/10 px-3 py-1 text-sm text-brand-white transition hover:bg-brand-red active:bg-brand-coral"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 text-xs text-brand-light/60">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === index
                ? "bg-brand-coral"
                : "bg-brand-light/30 hover:bg-brand-coral/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
