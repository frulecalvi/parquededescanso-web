import Header from "@/components/Header";
import Footer from "@/components/Footer";

const registros = [
  { nombre: "Zakalik Juana", fecha: "25/07/2026", hora: "14:00", ubicacion: "SECTOR 15 FRACCION 04 PARCELA 20", cocheria: "FLORES" },
  { nombre: "Bajinay Florencia Esther", fecha: "25/07/2026", hora: "17:00", ubicacion: "SECTOR 40 FRACCION 02 PARCELA 33", cocheria: "BOSCHIN" },
  { nombre: "Garcia Alvarez Maria Celia", fecha: "25/07/2026", hora: "12:30", ubicacion: "SECTOR 13 FRACCION 11 PARCELA 51", cocheria: "FLORES" },
  { nombre: "Barroso Antonia Ramona", fecha: "25/07/2026", hora: "10:00", ubicacion: "SECTOR 19 FRACCION 02 PARCELA 15", cocheria: "BOSCHIN" },
];

export default function Obituarios() {
  return (
    <div style={{ fontFamily: "'Alegreya', serif", background: "#EEE8DC", minHeight: "100vh" }}>
      <Header />
      <main>
        <section className="mx-auto px-6 text-center" style={{ maxWidth: 900, paddingTop: "clamp(32px, 6vw, 64px)" }}>
          <h1 className="font-bold" style={{ fontFamily: "'Alegreya', serif", letterSpacing: 2, color: "#2C4A34", fontSize: "clamp(26px, 4vw, 42px)", margin: 0 }}>
            OBITUARIOS
          </h1>
        </section>

        <section className="mx-auto px-6" style={{ maxWidth: 1000, marginTop: "clamp(56px, 8vw, 88px)", paddingBottom: "clamp(56px, 8vw, 88px)" }}>
          <div className="grid justify-center" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(380px, 0.5fr))", gap: "clamp(80px, 12vw, 100px) clamp(70px, 14vw, 120px)" }}>
            {registros.map((o, i) => (
              <div key={i} className="relative w-full">
                <img src="/assets/floritura-2.svg" alt="" className="block w-full h-auto opacity-70" />
                <div className="inset-0 flex flex-col items-center justify-center text-center py-6" style={{ gap: 2 }}>
                  <p className="font-bold italic uppercase" style={{ fontFamily: "'Alegreya', serif", color: "#2C4A34", fontSize: 16, letterSpacing: 0.5, margin: "0 0 6px" }}>
                    {o.nombre}
                  </p>
                  <p style={{ color: "#26261F", fontSize: 14, margin: 0 }}>INHUMACION: {o.fecha} A LAS {o.hora} HS</p>
                  <p style={{ color: "#26261F", fontSize: 14, margin: 0 }}>UBICACION : {o.ubicacion}</p>
                  <p style={{ color: "#26261F", fontSize: 14, margin: 0 }}>Cochería: {o.cocheria}</p>
                </div>
                <img src="/assets/floritura-3.svg" alt="" className="block w-full h-auto opacity-70" />
              </div>
            ))}
          </div>
          <img src="/assets/floritura-1.svg" alt="" className="block mx-auto" style={{ width: 240, height: "auto", marginTop: "clamp(90px, 12vw, 110px)" }} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
