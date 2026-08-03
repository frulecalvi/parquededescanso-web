export default function ContactSection() {
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
        CONTACTO:
      </h2>
      <div
        className="flex flex-wrap"
        style={{ gap: "clamp(24px, 4vw, 48px)" }}
      >
        <div style={{ flex: "1 1 320px" }}>
          <p
            className="italic"
            style={{ color: "#26261F", fontSize: 15, margin: "0 0 18px" }}
          >
            Teléfonos para consultas en horario de 09:00 a 18:00 hs.
          </p>
          <div
            className="flex flex-col"
            style={{ gap: 14, color: "#26261F", fontSize: 15 }}
          >
            <div className="flex items-center" style={{ gap: 10 }}>
              <span style={{ color: "#4B6B45" }}>☎</span> Of. Cementerio Parque{" "}
              <strong>(261) 491-0279 / 491-2865</strong>
            </div>
            <div className="flex items-center" style={{ gap: 10 }}>
              <span style={{ color: "#4B6B45" }}>☎</span> Of. Centro{" "}
              <strong>(261) 421-6922 / 421-6516</strong>
            </div>
            <div className="flex items-center" style={{ gap: 10 }}>
              <span style={{ color: "#4B6B45" }}>☏</span> Of. Centro WhatsApp{" "}
              <strong>2615561461</strong>
            </div>
            <div className="flex items-center" style={{ gap: 10 }}>
              <span style={{ color: "#4B6B45" }}>☎</span> URGENCIAS FÚNEBRES{" "}
              <strong>261 4 700 700</strong>
            </div>
          </div>
        </div>
        <div
          className="overflow-hidden"
          style={{ flex: "1 1 360px", minHeight: 220, borderRadius: 16 }}
        >
          <iframe
            title="Ubicación Parque de Descanso"
            src="https://www.google.com/maps?q=Chac%C3%B3n+s%2Fn+Rodeo+de+la+Cruz+Guaymall%C3%A9n+Mendoza&output=embed"
            className="block w-full border-0"
            style={{ height: "100%", minHeight: 220 }}
          />
        </div>
      </div>
    </section>
  );
}
