"use client";

import { useEffect, useRef } from "react";

interface Slide {
  src: string;
  alt?: string;
}

interface ImageSliderProps {
  slides: Slide[];
}

export default function ImageSlider({ slides }: ImageSliderProps) {
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      const radios = Array.from(
        document.querySelectorAll<HTMLInputElement>('input[name="slider"]')
      );
      if (radios.length === 0) return;
      const current = radios.findIndex((r) => r.checked);
      const next = (current + 1) % radios.length;
      radios[next].checked = true;
    }, 5500);
  };

  const handleNavClick = (targetId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const radio = document.getElementById(targetId) as HTMLInputElement | null;
    if (radio) radio.checked = true;
    startTimer();
  };

  // Auto-play nativo
  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides.length]);

  const cssRules = slides
    .map((_, i) => {
      const prev = (i - 1 + slides.length) % slides.length;
      const next = (i + 1) % slides.length;
      return `
        #slide-${i}:checked ~ .slider-nav .nav-prev-${i},
        #slide-${i}:checked ~ .slider-nav .nav-next-${i} { display: flex !important; }
      `;
    })
    .join("\n");

  return (
    <section
      className="mx-auto px-6"
      style={{ maxWidth: 1300, marginTop: "clamp(24px, 4vw, 40px)" }}
    >
      <div
        className="relative overflow-hidden bg-neutral-300"
        style={{ borderRadius: "clamp(20px, 2vw, 28px)", aspectRatio: "16/8" }}
      >
        <style>{`
          .slide-item {
            position: absolute;
            inset: 0;
            opacity: 0;
            transition: opacity 0.9s ease;
          }
          input[name="slider"]:checked + .slide-item { opacity: 1; }
          .slider-nav label {
            display: none;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            align-items: center;
            justify-content: center;
            background: rgba(0,0,0,0.25);
            color: #fff;
            border-radius: 50%;
            cursor: pointer;
            touch-action: manipulation;
            -webkit-tap-highlight-color: transparent;
            width: clamp(36px, 5vw, 40px);
            height: clamp(36px, 5vw, 40px);
            font-size: clamp(20px, 2.5vw, 22px);
          }
          ${cssRules}
        `}</style>

        {slides.flatMap((s, i) => [
          <input
            key={`radio-${i}`}
            type="radio"
            name="slider"
            id={`slide-${i}`}
            className="sr-only"
            defaultChecked={i === 0}
          />,
          <div key={`item-${i}`} className="slide-item">
            <img
              src={s.src}
              alt={s.alt || ""}
              className="w-full h-full"
              style={{ objectFit: "cover", display: "block" }}
            />
          </div>,
        ])}

        <div className="slider-nav">
          {slides.map((_, i) => {
            const prev = (i - 1 + slides.length) % slides.length;
            const next = (i + 1) % slides.length;
            return (
              <span key={i}>
                <label
                  htmlFor={`slide-${prev}`}
                  onClick={handleNavClick(`slide-${prev}`)}
                  className={`nav-prev-${i}`}
                  aria-label="Anterior"
                  style={{ left: 14 }}
                >
                  ‹
                </label>
                <label
                  htmlFor={`slide-${next}`}
                  onClick={handleNavClick(`slide-${next}`)}
                  className={`nav-next-${i}`}
                  aria-label="Siguiente"
                  style={{ right: 14 }}
                >
                  ›
                </label>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
