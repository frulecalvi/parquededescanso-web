"use client";

import { useState, useRef, useEffect } from "react";

const opciones = [
  {
    label: "Mercado Pago / MODO",
    href: "https://pagos.parquededescanso.com:8091/login/dni",
  },
  {
    label: "Rapipago",
    href: "https://pagar.rapipago.com.ar/rapipagoWeb/pagos/",
  },
  {
    label: "Asesor comercial",
    href: "https://wa.me/5492615561461?text=Hola%2C%20soy%20cliente%20de%20Parque%20de%20Descanso%20y%20quiero%20hablar%20con%20un%20asesor%20comercial%20sobre%20pagos.",
  },
  {
    label: "Pago y estado de cuentas",
    href: "https://autogestion.parquededescanso.com:8000/",
  },
];

export default function DropdownPagos() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative inline-block">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="inline-block rounded-full border-none cursor-pointer"
        style={{
          fontFamily: "'Alegreya', serif",
          fontWeight: 700,
          fontSize: 13,
          letterSpacing: 1,
          color: "#EEE8DC",
          background: "#2C4A34",
          padding: "14px 26px",
          textDecoration: "none",
        }}
      >
        REALIZÁ TUS PAGOS AQUÍ
      </button>

      {open && (
        <div
          className="absolute flex flex-col overflow-hidden shadow-lg"
          style={{
            top: "calc(100% + 8px)",
            left: "50%",
            transform: "translateX(-50%)",
            minWidth: 260,
            background: "#EEE8DC",
            borderRadius: 12,
            border: "1.5px solid #4B6B45",
            zIndex: 50,
          }}
        >
          {opciones.map((op, i) => (
            <a
              key={i}
              href={op.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center"
              style={{
                fontFamily: "'Alegreya', serif",
                fontWeight: 600,
                fontSize: 14,
                color: "#2C4A34",
                padding: "12px 18px",
                textDecoration: "none",
                borderBottom:
                  i < opciones.length - 1 ? "1px solid rgba(75,107,69,0.25)" : "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#E6DED0")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              {op.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
