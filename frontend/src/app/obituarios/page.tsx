import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WP_API_URL, type Obituario } from "@/lib/wordpress";

function formatFecha(fecha: string): string {
  const [y, m, d] = fecha.split("-");
  return `${d}/${m}/${y}`;
}

function formatHora(hora: string): string {
  return hora.slice(0, 5);
}

function tipoServicio(valor: string): string {
  return valor === "1" ? "INHUMACIÓN" : "CREMACIÓN";
}

export const dynamic = "force-dynamic";

export default async function Obituarios() {
  let registros: Obituario[] = [];
  let error: string | null = null;

  try {
    const res = await fetch(`${WP_API_URL}/obituarios?per_page=30`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`Error ${res.status}`);
    registros = await res.json();
  } catch (err) {
    error = err instanceof Error ? err.message : "Error desconocido";
  }

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
          {error && (
            <div className="text-center" style={{ padding: "40px 20px", color: "#2C4A34" }}>
              <p style={{ fontSize: 14, margin: 0 }}>No se pudieron cargar los obituarios en este momento.</p>
              <p style={{ fontSize: 12, margin: "8px 0 0", opacity: 0.6 }}>{error}</p>
            </div>
          )}

          {!error && registros.length === 0 && (
            <div className="text-center" style={{ padding: "40px 20px", color: "#2C4A34" }}>
              <p style={{ fontSize: 14, margin: 0 }}>No hay obituarios registrados.</p>
            </div>
          )}

          {registros.length > 0 && (
            <>
              <div className="grid justify-center" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(380px, 0.5fr))", gap: "clamp(80px, 12vw, 100px) clamp(70px, 14vw, 120px)" }}>
                {[...registros].sort((a, b) => {
                  const dateA = new Date(`${a.fecha}T${a.hora}`).getTime();
                  const dateB = new Date(`${b.fecha}T${b.hora}`).getTime();
                  return dateB - dateA;
                }).map((o, i) => (
                  <div key={o.id ?? i} className="relative w-full">
                    <img src="/assets/floritura-2.svg" alt="" className="block w-full h-auto opacity-70" />
                    <div className="inset-0 flex flex-col items-center justify-center text-center py-6" style={{ gap: 2 }}>
                      <p className="font-bold italic uppercase" style={{ fontFamily: "'Alegreya', serif", color: "#2C4A34", fontSize: 16, letterSpacing: 0.5, margin: "0 0 6px" }}>
                        {o.nombre}
                      </p>
                      <p style={{ color: "#26261F", fontSize: 14, margin: 0 }}>
                        {tipoServicio(o.inhumacion_cremacion)}: {formatFecha(o.fecha)} A LAS {formatHora(o.hora)} HS
                      </p>
                      <p style={{ color: "#26261F", fontSize: 14, margin: 0 }}>
                        UBICACION: SECTOR <strong>{o.sector}</strong> FRACCION <strong>{o.fraccion}</strong> PARCELA <strong>{o.parcela}</strong>
                      </p>
                      <p style={{ color: "#26261F", fontSize: 14, margin: 0 }}>Cochería: {o.cocheria.toUpperCase()}</p>
                    </div>
                    <img src="/assets/floritura-3.svg" alt="" className="block w-full h-auto opacity-70" />
                  </div>
                ))}
              </div>
              <img src="/assets/floritura-1.svg" alt="" className="block mx-auto" style={{ width: 240, height: "auto", marginTop: "clamp(90px, 12vw, 110px)" }} />
            </>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
