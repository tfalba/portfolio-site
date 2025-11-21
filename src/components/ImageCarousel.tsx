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
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  imagesPhone = [],
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
          src={current?.src}
          alt={current?.alt}
          className="h-64 w-full object-contain md:h-[25rem]"
        />

        {currentPhone?.src && (
          <div className="pointer-events-none absolute bottom-6 right-6 w-24 translate-y-2 rotate-2 drop-shadow-[0_18px_35px_rgba(0,0,0,0.7)] md:w-28 lg:w-32">
            <div className="relative rounded-[1.75rem] border border-brand-light/20 bg-brand-black/80 p-2 shadow-[0_15px_35px_rgba(0,0,0,0.75)] ring-1 ring-black/30">
              <div className="aspect-[9/19] w-full overflow-hidden rounded-[1.25rem] bg-brand-black">
                <img
                  src={currentPhone.src}
                  alt={currentPhone.alt ?? "Mobile view"}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="absolute left-1/2 top-3 h-1 w-8 -translate-x-1/2 rounded-full bg-brand-light/15" />
              <span className="absolute left-1/2 bottom-3 h-1.5 w-14 -translate-x-1/2 rounded-full bg-brand-light/10" />
            </div>
          </div>
        )}

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
