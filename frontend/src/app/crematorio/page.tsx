import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ContactForm from "@/components/ContactForm";
import ImageSlider from "@/components/ImageSlider";

const cremSlides = [
  { src: "/assets/crematorio-building.jpg", alt: "Crematorio" },
  { src: "/assets/hero-monument.jpg", alt: "Crematorio" },
  { src: "/assets/park-entrance.jpg", alt: "Crematorio" },
  { src: "/assets/park-1.jpg", alt: "Crematorio" },
  { src: "/assets/park-3.jpg", alt: "Crematorio" },
  { src: "/assets/park-4.jpg", alt: "Crematorio" },
  { src: "/assets/park-5.jpg", alt: "Crematorio" },
];

export default function Crematorio() {
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
            <div style={{ flex: "0 1 54%", maxWidth: "54%", paddingRight: "clamp(140px, 20vw, 220px)", position: "relative", zIndex: 2 }}>
              <p className="font-bold" style={{ fontFamily: "'Alegreya', serif", color: "#EAE2D2", fontSize: "clamp(14px, 1.8vw, 17px)", letterSpacing: 2, margin: "0 0 14px" }}>
                CREMACIONES
              </p>
              <div className="flex flex-col" style={{ color: "#EAE2D2", fontSize: "clamp(13px, 1.4vw, 15px)", lineHeight: 1.7, gap: 10 }}>
                <p style={{ margin: 0 }}>Ahora, contamos con servicio de Cremación, innovamos en tecnología para mejorar nuestras prestaciones, una opción digna que permitirá la decisión correcta para una emotiva despedida.</p>
                <p style={{ margin: 0 }}>Respeto y transparencia en la atención de nuestros servicios. Estamos para asesorar, ayudar y acompañar.</p>
              </div>
            </div>
            <img src="/assets/pastilla-cremaciones.png" alt="" className="block" style={{ position: "absolute", right: "clamp(12px, 3vw, 32px)", top: "50%", transform: "translateY(-50%)", height: "clamp(340px, 40vw, 460px)", width: "auto", maxWidth: "44%", objectFit: "contain", zIndex: 1 }} />
          </div>
          <div className="flex md:hidden flex-col items-center text-center" style={{ background: "#2C4A34", borderRadius: 32, padding: "28px 24px 32px", gap: 14, overflow: "hidden" }}>
            <p className="font-bold" style={{ fontFamily: "'Alegreya', serif", color: "#EAE2D2", fontSize: 16, letterSpacing: 2, margin: 0 }}>CREMACIONES</p>
            <div className="flex flex-col" style={{ color: "#EAE2D2", fontSize: 14, lineHeight: 1.7, gap: 10 }}>
              <p style={{ margin: 0 }}>Ahora, contamos con servicio de Cremación, innovamos en tecnología para mejorar nuestras prestaciones, una opción digna que permitirá la decisión correcta para una emotiva despedida.</p>
              <p style={{ margin: 0 }}>Respeto y transparencia en la atención de nuestros servicios. Estamos para asesorar, ayudar y acompañar.</p>
            </div>
            <img src="/assets/pastilla-cremaciones.png" alt="" className="block" style={{ width: "100%", maxWidth: 260, height: "auto", objectFit: "contain", marginTop: 6 }} />
          </div>
        </section>

        <ContactSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
