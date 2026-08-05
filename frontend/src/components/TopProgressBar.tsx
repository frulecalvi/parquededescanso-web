"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function TopProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const navigating = useRef(false);
  const timers = useRef<number[]>([]);

  const clearAllTimers = () => {
    timers.current.forEach((id) => clearTimeout(id));
    timers.current = [];
  };

  const startLoading = () => {
    if (navigating.current) return;
    navigating.current = true;
    clearAllTimers();

    setVisible(true);
    setProgress(0);

    // Nada de delay: 0 -> 20% en el siguiente frame
    const t1 = window.setTimeout(() => setProgress(20), 0);
    timers.current.push(t1);

    // Avance lento hasta 70%
    const t2 = window.setTimeout(() => setProgress(70), 250);
    timers.current.push(t2);
  };

  const finishLoading = () => {
    if (!navigating.current) return;
    clearAllTimers();

    // Salta al 100% y se desvanece
    setProgress(100);
    const t1 = window.setTimeout(() => setVisible(false), 400);
    timers.current.push(t1);

    const t2 = window.setTimeout(() => {
      setProgress(0);
      navigating.current = false;
    }, 800);
    timers.current.push(t2);
  };

  useEffect(() => {
    // Click en cualquier link interno dispara el loading inmediatamente
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Ignorar links externos, mailto, tel, anchors, y target="_blank"
      if (
        anchor.target === "_blank" ||
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#")
      ) {
        return;
      }

      startLoading();
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    // Cuando la ruta realmente cambia, finalizamos
    finishLoading();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

  return (
    <div
      className="fixed top-0 left-0 z-[100] h-[2px]"
      style={{
        width: `${progress}%`,
        backgroundColor: "#4B6B45",
        opacity: visible ? 1 : 0,
        transition:
          progress === 100
            ? "width 0.2s ease-out, opacity 0.4s ease-out 0.2s"
            : "width 0.3s ease-out, opacity 0.15s ease-in",
        pointerEvents: "none",
      }}
    />
  );
}
