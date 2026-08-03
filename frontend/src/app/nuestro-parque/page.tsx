import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ContactForm from "@/components/ContactForm";
import ImageSlider from "@/components/ImageSlider";
import { NuestroParqueData, WP_API_URL } from "@/lib/wordpress";

const npSlides = [
  { src: "/assets/park-2.jpg", alt: "Nuestro Parque" },
  { src: "/assets/park-entrance.jpg", alt: "Nuestro Parque" },
  { src: "/assets/hero-monument.jpg", alt: "Nuestro Parque" },
  { src: "/assets/park-1.jpg", alt: "Nuestro Parque" },
  { src: "/assets/park-3.jpg", alt: "Nuestro Parque" },
  { src: "/assets/park-4.jpg", alt: "Nuestro Parque" },
  { src: "/assets/park-5.jpg", alt: "Nuestro Parque" },
];

export default async function NuestroParque() {
  let data: NuestroParqueData | null = null;
  let error: string | null = null;

  try {
    const res = await fetch(`${WP_API_URL}/nuestro-parque?slug=ajustes-nuestro-parque`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`Error ${res.status}`);
    data = (await res.json())[0];
  } catch (err) {
    error = err instanceof Error ? err.message : "Error desconocido";
  }

  return (
    <div style={{ fontFamily: "'Alegreya', serif", background: "#EEE8DC", minHeight: "100vh" }}>
      <Header />
      <main>
        <section className="mx-auto px-6 text-center" style={{ maxWidth: 900, paddingTop: "clamp(32px, 6vw, 64px)" }}>
          <h1 className="font-bold" style={{ fontFamily: "'Alegreya', serif", letterSpacing: 2, color: "#2C4A34", fontSize: "clamp(26px, 4vw, 42px)", margin: 0 }}>
            NUESTRO PARQUE
          </h1>
        </section>

        <ImageSlider slides={npSlides} />

        <section className="mx-auto px-6" style={{ maxWidth: 1000, marginTop: "clamp(40px, 6vw, 56px)" }}>
          <div className="hidden md:flex items-center relative overflow-visible" style={{ background: "#2C4A34", borderRadius: 40, padding: "clamp(20px, 2.2vw, 26px) clamp(28px, 4vw, 40px)", minHeight: "clamp(190px, 19vw, 230px)" }}>
            <div style={{ flex: "0 1 54%", maxWidth: "54%", position: "relative", zIndex: 2 }}>
              <p className="font-bold" style={{ fontFamily: "'Alegreya', serif", color: "#EAE2D2", fontSize: "clamp(14px, 1.8vw, 17px)", letterSpacing: 2, margin: "0 0 14px" }}>
                {"NUESTRO PARQUE"}
              </p>
              {error ? (
                <p style={{ color: "#EAE2D2", fontSize: 13, margin: 0 }}>No se pudo cargar el contenido.</p>
              ) : data?.texto_nuestro_parque ? (
                <div
                  className="flex flex-col"
                  style={{ color: "#EAE2D2", fontSize: "clamp(13px, 1.4vw, 15px)", lineHeight: 1.7, gap: 10 }}
                  dangerouslySetInnerHTML={{ __html: data.texto_nuestro_parque }}
                />
              ) : (
                <div className="flex flex-col" style={{ color: "#EAE2D2", fontSize: "clamp(13px, 1.4vw, 15px)", lineHeight: 1.7, gap: 10 }}>
                  <p style={{ margin: 0 }}>Rodeados por una Naturaleza en su máximo esplendor, despedir, recordar y sentir en un entorno de belleza, paz y armonía.</p>
                  <p style={{ margin: 0 }}>Amplios prados verdes, grandes canteros de flores, lugares que favorecen la reflexión en contacto con la naturaleza, basándonos en el concepto de religar al hombre con sus tradiciones.</p>
                </div>
              )}
            </div>
            <img src={"/assets/pastilla-nuestro-parque.png"} alt="" className="block" style={{ position: "absolute", right: "clamp(12px, 3vw, 32px)", top: "50%", transform: "translateY(-50%)", height: "clamp(340px, 40vw, 460px)", width: "auto", maxWidth: "44%", objectFit: "contain", zIndex: 1 }} />
          </div>
          <div className="flex md:hidden flex-col items-center text-center" style={{ background: "#2C4A34", borderRadius: 32, padding: "28px 24px 32px", gap: 14, overflow: "hidden" }}>
            <p className="font-bold" style={{ fontFamily: "'Alegreya', serif", color: "#EAE2D2", fontSize: 16, letterSpacing: 2, margin: 0 }}>{"NUESTRO PARQUE"}</p>
            {error ? (
              <p style={{ color: "#EAE2D2", fontSize: 14, margin: 0 }}>No se pudo cargar el contenido.</p>
            ) : data?.texto_nuestro_parque ? (
              <div
                className="flex flex-col"
                style={{ color: "#EAE2D2", fontSize: 14, lineHeight: 1.7, gap: 10 }}
                dangerouslySetInnerHTML={{ __html: data.texto_nuestro_parque }}
              />
            ) : (
              <div className="flex flex-col" style={{ color: "#EAE2D2", fontSize: 14, lineHeight: 1.7, gap: 10 }}>
                <p style={{ margin: 0 }}>Rodeados por una Naturaleza en su máximo esplendor, despedir, recordar y sentir en un entorno de belleza, paz y armonía.</p>
                <p style={{ margin: 0 }}>Amplios prados verdes, grandes canteros de flores, lugares que favorecen la reflexión en contacto con la naturaleza, basándonos en el concepto de religar al hombre con sus tradiciones.</p>
              </div>
            )}
            <img src={"/assets/pastilla-nuestro-parque.png"} alt="" className="block" style={{ width: "100%", maxWidth: 260, height: "auto", objectFit: "contain", marginTop: 6 }} />
          </div>
        </section>

        <section className="mx-auto px-6" style={{ maxWidth: 1100, marginTop: "clamp(48px, 7vw, 72px)" }}>
          <div className="flex flex-col md:flex-row items-center justify-center" style={{ gap: "clamp(28px, 4vw, 48px)" }}>
            <div style={{ flex: "0 1 auto", maxWidth: 420, width: "100%" }}>
              <img src="/assets/mapa-final.png" alt="Mapa de sectores" className="block w-full h-auto" />
            </div>
            <div className="flex flex-col" style={{ flex: "0 1 auto", gap: 16, fontFamily: "'Alegreya', serif", color: "#2C4A34", fontSize: "clamp(13px, 1.4vw, 15px)", letterSpacing: 1, maxWidth: "100%" }}>
              <div className="flex items-baseline" style={{ gap: 10 }}>
                <span className="inline-flex items-center justify-center flex-shrink-0" style={{ border: "1px solid #4B6B45", borderRadius: "50%", width: 32, height: 32, fontSize: 18 }}>1</span> INGRESO POR ACCESO ESTE.
              </div>
              <div className="flex items-baseline" style={{ gap: 10 }}>
                <span className="inline-flex items-center justify-center flex-shrink-0" style={{ border: "1px solid #4B6B45", borderRadius: "50%", width: 32, height: 32, fontSize: 18 }}>2 3</span> ACCESOS AL PARQUE.
              </div>
              <div className="flex items-baseline" style={{ gap: 10 }}>
                <span className="inline-flex items-center justify-center flex-shrink-0" style={{ border: "1px solid #4B6B45", borderRadius: "50%", width: 32, height: 32, fontSize: 18 }}>4</span> OFICINAS ADMINISTRATIVAS.
              </div>
              <div className="flex items-baseline" style={{ gap: 10 }}>
                <span className="inline-flex items-center justify-center flex-shrink-0" style={{ border: "1px solid #4B6B45", borderRadius: "50%", width: 32, height: 32, fontSize: 18 }}>5</span> CAPILLA DEL PARQUE.
              </div>
              <div className="flex items-baseline" style={{ gap: 10 }}>
                <span className="inline-flex items-center justify-center flex-shrink-0" style={{ border: "1px solid #4B6B45", borderRadius: "50%", width: 32, height: 32, fontSize: 18 }}>6</span> SALAS VELATORIAS.
              </div>
              <div className="flex items-baseline" style={{ gap: 10 }}>
                <span className="inline-flex items-center justify-center flex-shrink-0" style={{ border: "1px solid #4B6B45", borderRadius: "50%", width: 32, height: 32, fontSize: 18 }}>7</span> CREMATORIO.
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
