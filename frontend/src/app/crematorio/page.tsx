import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ContactForm from "@/components/ContactForm";
import ImageSlider from "@/components/ImageSlider";
import { CrematorioData, WP_API_URL } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Crematorio",
  description:
    "Servicio de Cremación en Mendoza. Parque de Descanso ofrece cremaciones dignas con tecnología moderna, respeto y transparencia. Asesoramiento las 24hs.",
  alternates: {
    canonical: "https://www.parquededescanso.com/crematorio",
  },
};

const cremSlides = [
  { src: "/assets/crematorio-building.jpg", alt: "Edificio del Crematorio Parque de Descanso en Mendoza" },
  { src: "/assets/hero-monument.jpg", alt: "Monumento conmemorativo en Parque de Descanso" },
  { src: "/assets/park-entrance.jpg", alt: "Entrada del Cementerio Parque de Descanso" },
  { src: "/assets/park-1.jpg", alt: "Jardines del Parque de Descanso en Guaymallén" },
  { src: "/assets/park-3.jpg", alt: "Paisajismo natural en Parque de Descanso" },
  { src: "/assets/park-4.jpg", alt: "Espacios de reflexión en el cementerio parque" },
  { src: "/assets/park-5.jpg", alt: "Flores y naturaleza en Parque de Descanso" },
];

export const dynamic = "force-dynamic";

export default async function Crematorio() {
  let data: CrematorioData | null = null;
  let error: string | null = null;

  try {
    const res = await fetch(`${WP_API_URL}/crematorio`, {
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
            CREMATORIO
          </h1>
        </section>

        <ImageSlider slides={cremSlides} />

        <section className="mx-auto px-6" style={{ maxWidth: 1000, marginTop: "clamp(40px, 6vw, 56px)" }}>
          <div className="hidden md:flex items-center relative overflow-visible" style={{ background: "#2C4A34", borderRadius: 40, padding: "clamp(20px, 2.2vw, 26px) clamp(28px, 4vw, 40px)", minHeight: "clamp(190px, 19vw, 230px)" }}>
            <div style={{ flex: "0 1 54%", maxWidth: "54%", position: "relative", zIndex: 2 }}>
              <p className="font-bold" style={{ fontFamily: "'Alegreya', serif", color: "#EAE2D2", fontSize: "clamp(14px, 1.8vw, 17px)", letterSpacing: 2, margin: "0 0 14px" }}>
                {"CREMACIONES"}
              </p>
              {error ? (
                <p style={{ color: "#EAE2D2", fontSize: 13, margin: 0 }}>No se pudo cargar el contenido.</p>
              ) : data?.texto_crematorio ? (
                <div
                  className="flex flex-col"
                  style={{ color: "#EAE2D2", fontSize: "clamp(13px, 1.4vw, 15px)", lineHeight: 1.7, gap: 10 }}
                  dangerouslySetInnerHTML={{ __html: data.texto_crematorio }}
                />
              ) : (
                <div className="flex flex-col" style={{ color: "#EAE2D2", fontSize: "clamp(13px, 1.4vw, 15px)", lineHeight: 1.7, gap: 10 }}>
                  <p style={{ margin: 0 }}>Ahora, contamos con servicio de Cremación, innovamos en tecnología para mejorar nuestras prestaciones, una opción digna que permitirá la decisión correcta para una emotiva despedida.</p>
                  <p style={{ margin: 0 }}>Respeto y transparencia en la atención de nuestros servicios. Estamos para asesorar, ayudar y acompañar.</p>
                </div>
              )}
            </div>
            <img src={"/assets/pastilla-cremaciones.png"} alt="" className="block" style={{ position: "absolute", right: "clamp(12px, 3vw, 32px)", top: "50%", transform: "translateY(-50%)", height: "clamp(340px, 40vw, 460px)", width: "auto", maxWidth: "44%", objectFit: "contain", zIndex: 1 }} />
          </div>
          <div className="flex md:hidden flex-col items-center text-center" style={{ background: "#2C4A34", borderRadius: 32, padding: "28px 24px 32px", gap: 14, overflow: "hidden" }}>
            <p className="font-bold" style={{ fontFamily: "'Alegreya', serif", color: "#EAE2D2", fontSize: 16, letterSpacing: 2, margin: 0 }}>{"CREMACIONES"}</p>
            {error ? (
              <p style={{ color: "#EAE2D2", fontSize: 14, margin: 0 }}>No se pudo cargar el contenido.</p>
            ) : data?.texto_crematorio ? (
              <div
                className="flex flex-col"
                style={{ color: "#EAE2D2", fontSize: 14, lineHeight: 1.7, gap: 10 }}
                dangerouslySetInnerHTML={{ __html: data.texto_crematorio }}
              />
            ) : (
              <div className="flex flex-col" style={{ color: "#EAE2D2", fontSize: 14, lineHeight: 1.7, gap: 10 }}>
                <p style={{ margin: 0 }}>Ahora, contamos con servicio de Cremación, innovamos en tecnología para mejorar nuestras prestaciones, una opción digna que permitirá la decisión correcta para una emotiva despedida.</p>
                <p style={{ margin: 0 }}>Respeto y transparencia en la atención de nuestros servicios. Estamos para asesorar, ayudar y acompañar.</p>
              </div>
            )}
            <img src={"/assets/pastilla-cremaciones.png"} alt="" className="block" style={{ width: "100%", maxWidth: 260, height: "auto", objectFit: "contain", marginTop: 6 }} />
          </div>
        </section>

        <ContactSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
