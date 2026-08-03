"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "INICIO", href: "/" },
  { label: "NUESTRO PARQUE", href: "/nuestro-parque" },
  { label: "SALAS VELATORIAS", href: "/salas-velatorias" },
  { label: "CREMATORIO", href: "/crematorio" },
  { label: "OBITUARIOS", href: "/obituarios" },
  { label: "SERVICIOS", href: "/servicios" },
];

export default function Header() {
  const menuRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const [showEmergency, setShowEmergency] = useState(false);

  // Detectar cuando el botón de urgencias de la home sale de vista
  useEffect(() => {
    if (pathname !== "/") {
      setShowEmergency(false);
      return;
    }

    const check = () => {
      const btn = document.getElementById("urgencias-home-btn");
      if (!btn) {
        setShowEmergency(false);
        return;
      }
      const rect = btn.getBoundingClientRect();
      setShowEmergency(rect.bottom < 0);
    };

    window.addEventListener("scroll", check, { passive: true });
    check();

    return () => window.removeEventListener("scroll", check);
  }, [pathname]);

  // Cerrar al navegar
  useEffect(() => {
    if (menuRef.current) menuRef.current.checked = false;
  }, [pathname]);

  // Cerrar al teclar Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuRef.current) menuRef.current.checked = false;
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* CSS puro: cuando el checkbox está marcado, muestra el overlay y bloquea scroll */}
      <style>{`
        body:has(#menu-toggle:checked) {
          overflow: hidden;
        }
        body:has(#menu-toggle:checked) .mobile-menu-overlay {
          display: flex !important;
        }
      `}</style>

      {/* Checkbox siempre en top:0 para que focus no cause scroll hacia arriba */}
      <input
        type="checkbox"
        id="menu-toggle"
        ref={menuRef}
        aria-label="Abrir o cerrar menú"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          opacity: 0,
          width: 1,
          height: 1,
          border: "none",
          padding: 0,
          margin: 0,
          pointerEvents: "none",
        }}
      />

      {/* ═══ MOBILE HEADER ═══ */}
      <header
        className="sticky top-0 z-40 xl:hidden"
        style={{ background: "#2C4A34" }}
      >
        <div
          className="flex items-center justify-between"
          style={{ padding: "14px 20px" }}
        >
          <Link href="/" className="flex items-center">
            <img
              src="/assets/logo-icon-light.png"
              alt="Parque de Descanso"
              style={{ height: 32, width: "auto", display: "block" }}
            />
          </Link>
            {showEmergency && (
              <a
                href="tel:+5492614700700"
                className="inline-flex items-center gap-1.5 rounded-full border-none"
                style={{
                  fontFamily: "'Alegreya', serif",
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: 0.5,
                  color: "#2C4A34",
                  background: "#EEE8DC",
                  padding: "8px 14px",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                <img
                  src="/assets/contacto-telefono.svg"
                  alt=""
                  style={{ height: 14, width: "auto", display: "block" }}
                />
                URGENCIAS
              </a>
            )}
          <div className="flex items-center" style={{ gap: 12 }}>
            <label
              htmlFor="menu-toggle"
              className="inline-flex items-center gap-2.5"
              style={{
                color: "#EEE8DC",
                fontFamily: "'Alegreya', serif",
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: 2,
                cursor: "pointer",
                WebkitTapHighlightColor: "transparent",
                touchAction: "manipulation",
                minHeight: 44,
                minWidth: 44,
                userSelect: "none",
              }}
            >
            MENÚ
            <svg
              width="26"
              height="18"
              viewBox="0 0 26 18"
              style={{ flexShrink: 0, display: "block" }}
            >
              <rect width="26" height="3" fill="#EEE8DC" />
              <rect y="7.5" width="26" height="3" fill="#EEE8DC" />
              <rect y="15" width="26" height="3" fill="#EEE8DC" />
            </svg>
          </label>
          </div>
        </div>
      </header>

      {/* ═══ DESKTOP HEADER ═══ */}
      <header
        className="sticky top-0 z-40 hidden xl:block px-10"
        style={{ background: "#2C4A34", height: 78 }}
      >
        <div
          className="mx-auto flex flex-wrap items-center justify-between h-full"
          style={{ maxWidth: 1300 }}
        >
          <Link href="/" className="flex items-center">
            <img
              src="/assets/logo-icon-light.png"
              alt="Parque de Descanso"
              style={{ height: 32, width: "auto", display: "block" }}
            />
          </Link>
          {showEmergency && (
            <a
              href="tel:+5492614700700"
              className="inline-flex items-center gap-2 rounded-full border-none"
              style={{
                fontFamily: "'Alegreya', serif",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: 1,
                color: "#2C4A34",
                background: "#EEE8DC",
                padding: "8px 16px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              <img
                src="/assets/contacto-telefono.svg"
                alt=""
                style={{ height: 16, width: "auto", display: "block" }}
              />
              URGENCIAS
            </a>
          )}
          <div className="flex items-center" style={{ gap: "clamp(16px,2vw,32px)" }}>
            <nav
              className="flex flex-wrap items-center"
              style={{ gap: "clamp(16px,2vw,32px)" }}
            >
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{
                      fontFamily: "'Alegreya', serif",
                      fontWeight: active ? 700 : 500,
                      fontSize: 13,
                      letterSpacing: 1.5,
                      color: active ? "#EEE8DC" : "#cdd6c8",
                      borderBottom: active ? "2px solid #EEE8DC" : "none",
                      paddingBottom: active ? 4 : 0,
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* ═══ MOBILE MENU OVERLAY ═══ */}
      <div
        className="mobile-menu-overlay fixed top-0 left-0 z-50 flex-col"
        style={{
          background: "#2C4A34",
          width: "100%",
          height: "100%",
          display: "none",
        }}
      >
        <div className="flex justify-end" style={{ padding: "18px 20px" }}>
          <label
            htmlFor="menu-toggle"
            style={{
              color: "#EEE8DC",
              fontSize: 34,
              lineHeight: 1,
              cursor: "pointer",
              WebkitTapHighlightColor: "transparent",
              touchAction: "manipulation",
              minHeight: 44,
              minWidth: 44,
              userSelect: "none",
            }}
            aria-label="Cerrar menú"
          >
            ×
          </label>
        </div>
        <nav
          className="flex flex-1 flex-col items-center justify-center"
          style={{ gap: 30 }}
        >
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontFamily: "'Alegreya', serif",
                  fontWeight: active ? 700 : 400,
                  fontSize: 24,
                  color: "#EEE8DC",
                  letterSpacing: 1,
                  borderBottom: active ? "2px solid #EEE8DC" : "none",
                  paddingBottom: active ? 4 : 0,
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
