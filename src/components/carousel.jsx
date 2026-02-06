"use client";
import { useState } from "react";

function Carousel() {
  const slides = [
    "/carouselpic/y1.webp",
    "/carouselpic/y2.jpeg",
    "/carouselpic/y3.jpg",
  ];

  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + slides.length) % slides.length);

  const next = () => setIndex((index + 1) % slides.length);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg">
      <div
        className="flex transform-gpu transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide}
            alt="carousel"
            className="w-full h-[400px] object-cover flex-shrink-0"
          />
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-2 rounded-full"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-2 rounded-full"
      >
        ›
      </button>
    </div>
  );
}

export default Carousel;
