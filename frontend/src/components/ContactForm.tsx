"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className="flex flex-col"
        style={{ gap: 16 }}
      >
        <div className="flex flex-wrap" style={{ gap: 16 }}>
          <input
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            placeholder="Nombre"
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
          <input
            value={form.apellido}
            onChange={(e) => setForm({ ...form, apellido: e.target.value })}
            placeholder="Apellido"
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
        <div className="flex flex-wrap" style={{ gap: 16 }}>
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Email"
            type="email"
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
        <button
          type="submit"
          className="border-none cursor-pointer"
          style={{
            alignSelf: "flex-start",
            fontFamily: "'Alegreya', serif",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: 1,
            color: "#EEE8DC",
            background: "#2C4A34",
            borderRadius: 9999,
            padding: "13px 32px",
          }}
        >
          ENVIAR
        </button>
      </form>
    </section>
  );
}
