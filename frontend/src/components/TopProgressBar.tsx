"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function TopProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    setProgress(0);

    // Progreso rápido al inicio
    const raf1 = requestAnimationFrame(() => {
      setProgress(30);
    });

    // Avance lento para dar sensación de carga
    const timer = setTimeout(() => {
      setProgress(70);
    }, 200);

    // Completar cuando la navegación termina
    const finish = setTimeout(() => {
      setProgress(100);
    }, 400);

    // Ocultar después de completar
    const hide = setTimeout(() => {
      setVisible(false);
    }, 700);

    return () => {
      cancelAnimationFrame(raf1);
      clearTimeout(timer);
      clearTimeout(finish);
      clearTimeout(hide);
    };
  }, [pathname, searchParams]);

  return (
    <div
      className="fixed top-0 left-0 z-[100] h-[2px]"
      style={{
        width: `${progress}%`,
        backgroundColor: "#7a9c74",
        opacity: visible ? 1 : 0,
        transition:
          progress === 100
            ? "width 0.3s ease-out, opacity 0.4s ease-out 0.3s"
            : "width 0.4s ease-out, opacity 0.2s ease-in",
        pointerEvents: "none",
      }}
    />
  );
}
