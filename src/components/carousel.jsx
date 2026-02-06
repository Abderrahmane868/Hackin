"use client";
import { useState } from "react";

 function Carousel() {
  const slides = [
    "https://picsum.photos/id/1015/800/400",
    "https://picsum.photos/id/1016/800/400",
    "https://picsum.photos/id/1018/800/400",
  ];

  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((index - 1 + slides.length) % slides.length);

  const next = () =>
    setIndex((index + 1) % slides.length);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg">

      {/* Slides */}
      <img
        src={slides[index]}
        alt="carousel"
        className="w-full h-[400px] object-cover transition-all duration-500"
      />

      {/* Buttons */}
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