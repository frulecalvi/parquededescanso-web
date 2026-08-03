"use client";

import { useEffect, useState } from "react";

interface Slide {
  src: string;
  alt?: string;
}

interface ImageSliderProps {
  slides: Slide[];
}

export default function ImageSlider({ slides }: ImageSliderProps) {
  const [slide, setSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 860px)");
    const updateMq = () => setIsMobile(mq.matches);
    updateMq();
    mq.addEventListener("change", updateMq);

    const timer = setInterval(() => {
      setSlide((s) => (s + 1) % slides.length);
    }, 5500);

    return () => {
      mq.removeEventListener("change", updateMq);
      clearInterval(timer);
    };
  }, [slides.length]);

  const goNext = () => setSlide((s) => (s + 1) % slides.length);
  const goPrev = () =>
    setSlide((s) => (s - 1 + slides.length) % slides.length);

  return (
    <section
      className="mx-auto px-6"
      style={{
        maxWidth: 1300,
        marginTop: "clamp(24px, 4vw, 40px)",
      }}
    >
      <div
        className="relative overflow-hidden bg-neutral-300"
        style={{
          borderRadius: isMobile ? 20 : 28,
          aspectRatio: "16/8",
        }}
      >
        {slides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt || ""}
            className="absolute inset-0 w-full h-full"
            style={{
              objectFit: "cover",
              opacity: i === slide ? 1 : 0,
              transition: "opacity 0.9s ease",
            }}
          />
        ))}
        <button
          onClick={goPrev}
          aria-label="Anterior"
          className="absolute top-1/2 flex items-center justify-center border-none cursor-pointer"
          style={{
            left: 14,
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.25)",
            color: "#fff",
            width: isMobile ? 36 : 40,
            height: isMobile ? 36 : 40,
            borderRadius: "50%",
            fontSize: isMobile ? 20 : 22,
          }}
        >
          ‹
        </button>
        <button
          onClick={goNext}
          aria-label="Siguiente"
          className="absolute top-1/2 flex items-center justify-center border-none cursor-pointer"
          style={{
            right: 14,
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.25)",
            color: "#fff",
            width: isMobile ? 36 : 40,
            height: isMobile ? 36 : 40,
            borderRadius: "50%",
            fontSize: isMobile ? 20 : 22,
          }}
        >
          ›
        </button>
      </div>
    </section>
  );
}
