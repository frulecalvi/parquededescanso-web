"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    turnstile: {
      render: (container: string | HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetIdOrContainer?: string | HTMLElement) => void;
      remove: (widgetId: string) => void;
    };
  }
}

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const turnstileToken = useRef("");
  const turnstileRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);
  const turnstileLoaded = useRef(false);

  const resetTurnstile = useCallback(() => {
    if (window.turnstile && turnstileWidgetId.current) {
      window.turnstile.reset(turnstileWidgetId.current);
    }
    turnstileToken.current = "";
  }, []);

  const handleTurnstileLoad = useCallback(() => {
    if (turnstileRef.current && window.turnstile && !turnstileLoaded.current) {
      turnstileLoaded.current = true;
      turnstileWidgetId.current = window.turnstile.render(turnstileRef.current, {
        sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "",
        action: "turnstile-spin-v2",
        theme: "light",
        callback: (token: string) => {
          turnstileToken.current = token;
        },
        "error-callback": () => {
          turnstileToken.current = "";
        },
        "expired-callback": () => {
          turnstileToken.current = "";
        },
      });
    }
  }, []);

  useEffect(() => {
    return () => {
      if (window.turnstile && turnstileWidgetId.current) {
        try {
          window.turnstile.remove(turnstileWidgetId.current);
        } catch {
          // widget ya limpio
        }
        turnstileWidgetId.current = null;
        turnstileLoaded.current = false;
      }
    };
  }, []);

  if (sent) {
    return (
      <section
        className="mx-auto px-6"
        style={{ maxWidth: 1100, marginTop: "clamp(48px, 7vw, 72px)" }}
      >
        <h2
          className="font-bold underline"
          style={{
            fontFamily: "'Alegreya', serif",
            color: "#2C4A34",
            fontSize: "clamp(20px, 2.4vw, 26px)",
            letterSpacing: 1,
            textUnderlineOffset: 8,
            margin: "0 0 24px",
          }}
        >
          CONSULTAS:
        </h2>
        <p style={{ color: "#2C4A34", fontSize: 16 }}>
          ¡Gracias! Recibimos tu consulta y te contactaremos a la brevedad.
        </p>
      </section>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!turnstileToken.current) {
      setError("Por favor, completá la verificación de seguridad.");
      return;
    }
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          "cf-turnstile-response": turnstileToken.current,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Error al enviar la consulta");
      }

      setSent(true);
    } catch (err: any) {
      setError(err.message || "Error al enviar la consulta");
      resetTurnstile();
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="mx-auto px-6"
      style={{ maxWidth: 1100, marginTop: "clamp(48px, 7vw, 72px)" }}
    >
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="lazyOnload"
        onLoad={handleTurnstileLoad}
      />
      <h2
        className="font-bold underline"
        style={{
          fontFamily: "'Alegreya', serif",
          color: "#2C4A34",
          fontSize: "clamp(20px, 2.4vw, 26px)",
          letterSpacing: 1,
          textUnderlineOffset: 8,
          margin: "0 0 24px",
        }}
      >
        CONSULTAS:
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col"
        style={{ gap: 16 }}
      >
        <div className="flex flex-wrap" style={{ gap: 16 }}>
          <input
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            placeholder="Nombre"
            className="border-none"
            required
            style={{
              flex: "1 1 260px",
              background: "#e6ded0",
              borderRadius: 8,
              padding: "14px 16px",
              fontFamily: "'Alegreya', serif",
              fontSize: 15,
              color: "#26261F",
            }}
          />
          <input
            value={form.apellido}
            onChange={(e) => setForm({ ...form, apellido: e.target.value })}
            placeholder="Apellido"
            className="border-none"
            required
            style={{
              flex: "1 1 260px",
              background: "#e6ded0",
              borderRadius: 8,
              padding: "14px 16px",
              fontFamily: "'Alegreya', serif",
              fontSize: 15,
              color: "#26261F",
            }}
          />
        </div>
        <div className="flex flex-wrap" style={{ gap: 16 }}>
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Email"
            type="email"
            className="border-none"
            required
            style={{
              flex: "1 1 260px",
              background: "#e6ded0",
              borderRadius: 8,
              padding: "14px 16px",
              fontFamily: "'Alegreya', serif",
              fontSize: 15,
              color: "#26261F",
            }}
          />
          <input
            value={form.telefono}
            onChange={(e) => setForm({ ...form, telefono: e.target.value })}
            placeholder="Teléfono"
            className="border-none"
            style={{
              flex: "1 1 260px",
              background: "#e6ded0",
              borderRadius: 8,
              padding: "14px 16px",
              fontFamily: "'Alegreya', serif",
              fontSize: 15,
              color: "#26261F",
            }}
          />
        </div>
        <textarea
          value={form.mensaje}
          onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
          placeholder="Mensaje"
          rows={5}
          className="border-none"
          required
          style={{
            background: "#e6ded0",
            borderRadius: 8,
            padding: "14px 16px",
            fontFamily: "'Alegreya', serif",
            fontSize: 15,
            color: "#26261F",
            resize: "vertical",
          }}
        />
        <div
          className="flex flex-wrap"
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
          }}
        >
          <button
            type="submit"
            disabled={loading}
            className="border-none cursor-pointer"
            style={{
              fontFamily: "'Alegreya', serif",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: 1,
              color: "#EEE8DC",
              background: loading ? "#5a7a64" : "#2C4A34",
              borderRadius: 9999,
              padding: "13px 32px",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "ENVIANDO..." : "ENVIAR"}
          </button>
          {error && (
            <p style={{ color: "#a94442", fontSize: 16, margin: 0 }}>
              {error}
            </p>
          )}
          <div
            ref={turnstileRef}
            data-action="turnstile-spin-v2"
            data-theme="light"
            style={{ minHeight: 65 }}
          />
        </div>
      </form>
    </section>
  );
}
