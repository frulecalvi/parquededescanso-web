import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ContactForm from "@/components/ContactForm";
import ImageSlider from "@/components/ImageSlider";
import { SalasVelatoriasData, WP_API_URL } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Salas Velatorias",
  description:
    "Salas Velatorias en Mendoza. Parque de Descanso ofrece espacios climatizados y confortables en el sector oeste del parque, rodeados de naturaleza para despedidas dignas.",
  alternates: {
    canonical: "https://www.parquededescanso.com/salas-velatorias",
  },
};

const svSlides = [
  { src: "/assets/velatorias-building.jpg", alt: "Edificio de las Salas Velatorias en Parque de Descanso" },
  { src: "/assets/hero-monument.jpg", alt: "Monumento en el Cementerio Parque de Descanso" },
  { src: "/assets/park-entrance.jpg", alt: "Entrada principal de Parque de Descanso" },
  { src: "/assets/park-2.jpg", alt: "Vista panorámica del cementerio parque" },
  { src: "/assets/park-3.jpg", alt: "Prados verdes en Parque de Descanso" },
  { src: "/assets/park-4.jpg", alt: "Espacios de serenidad en el parque" },
  { src: "/assets/park-5.jpg", alt: "Flores y paisajismo en Parque de Descanso" },
];

export default async function SalasVelatorias() {
  let data: SalasVelatoriasData | null = null;
  let error: string | null = null;

  try {
    const res = await fetch(`${WP_API_URL}/salas-velatorias?slug=ajustes-salas-velatorias`, {
      cache: "force-cache",
      next: { tags: ["salas-velatorias"] },
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
            SALAS VELATORIAS
          </h1>
        </section>

        <ImageSlider slides={svSlides} />

        <section className="mx-auto px-6" style={{ maxWidth: 1000, marginTop: "clamp(40px, 6vw, 56px)" }}>
          <div className="hidden md:flex items-center relative overflow-visible" style={{ background: "#2C4A34", borderRadius: 40, padding: "clamp(20px, 2.2vw, 26px) clamp(28px, 4vw, 40px)", minHeight: "clamp(190px, 19vw, 230px)" }}>
            <div style={{ flex: "0 1 54%", maxWidth: "54%", position: "relative", zIndex: 2 }}>
              <p className="font-bold" style={{ fontFamily: "'Alegreya', serif", color: "#EAE2D2", fontSize: "clamp(14px, 1.8vw, 17px)", letterSpacing: 2, margin: "0 0 14px" }}>
                {"SALAS VELATORIAS"}
              </p>
              {error ? (
                <p style={{ color: "#EAE2D2", fontSize: 13, margin: 0 }}>No se pudo cargar el contenido.</p>
              ) : data?.texto_salas_velatorias ? (
                <div
                  className="flex flex-col"
                  style={{ color: "#EAE2D2", fontSize: "clamp(13px, 1.4vw, 15px)", lineHeight: 1.7, gap: 10 }}
                  dangerouslySetInnerHTML={{ __html: data.texto_salas_velatorias }}
                />
              ) : (
                <div className="flex flex-col" style={{ color: "#EAE2D2", fontSize: "clamp(13px, 1.4vw, 15px)", lineHeight: 1.7, gap: 10 }}>
                  <p style={{ margin: 0 }}>Ubicadas dentro del sector oeste de nuestro Parque, brindando calidez, ambiente climatizado, modernos diseños, atención personalizada para acompañar a familiares</p>
                  <p style={{ margin: 0 }}>y visitas en un lugar confortable y rodeados de naturaleza.</p>
                </div>
              )}
            </div>
            <img src={"/assets/pastilla-velatorios.png"} alt="" className="block" style={{ position: "absolute", right: "clamp(12px, 3vw, 32px)", top: "50%", transform: "translateY(-50%)", height: "clamp(340px, 40vw, 460px)", width: "auto", maxWidth: "44%", objectFit: "contain", zIndex: 1 }} />
          </div>
          <div className="flex md:hidden flex-col items-center text-center" style={{ background: "#2C4A34", borderRadius: 32, padding: "28px 24px 32px", gap: 14, overflow: "hidden" }}>
            <p className="font-bold" style={{ fontFamily: "'Alegreya', serif", color: "#EAE2D2", fontSize: 16, letterSpacing: 2, margin: 0 }}>{"SALAS VELATORIAS"}</p>
            {error ? (
              <p style={{ color: "#EAE2D2", fontSize: 14, margin: 0 }}>No se pudo cargar el contenido.</p>
            ) : data?.texto_salas_velatorias ? (
              <div
                className="flex flex-col"
                style={{ color: "#EAE2D2", fontSize: 14, lineHeight: 1.7, gap: 10 }}
                dangerouslySetInnerHTML={{ __html: data.texto_salas_velatorias }}
              />
            ) : (
              <div className="flex flex-col" style={{ color: "#EAE2D2", fontSize: 14, lineHeight: 1.7, gap: 10 }}>
                <p style={{ margin: 0 }}>Ubicadas dentro del sector oeste de nuestro Parque, brindando calidez, ambiente climatizado, modernos diseños, atención personalizada para acompañar a familiares</p>
                <p style={{ margin: 0 }}>y visitas en un lugar confortable y rodeados de naturaleza.</p>
              </div>
            )}
            <img src={"/assets/pastilla-velatorios.png"} alt="" className="block" style={{ width: "100%", maxWidth: 260, height: "auto", objectFit: "contain", marginTop: 6 }} />
          </div>
        </section>

        <ContactSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
