import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ContactForm from "@/components/ContactForm";
import ImageSlider from "@/components/ImageSlider";

const svSlides = [
  { src: "/assets/velatorias-building.jpg", alt: "Salas Velatorias" },
  { src: "/assets/hero-monument.jpg", alt: "Salas Velatorias" },
  { src: "/assets/park-entrance.jpg", alt: "Salas Velatorias" },
  { src: "/assets/park-2.jpg", alt: "Salas Velatorias" },
  { src: "/assets/park-3.jpg", alt: "Salas Velatorias" },
  { src: "/assets/park-4.jpg", alt: "Salas Velatorias" },
  { src: "/assets/park-5.jpg", alt: "Salas Velatorias" },
];

export default function SalasVelatorias() {
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
                SALAS VELATORIAS
              </p>
              <div className="flex flex-col" style={{ color: "#EAE2D2", fontSize: "clamp(13px, 1.4vw, 15px)", lineHeight: 1.7, gap: 10 }}>
                <p style={{ margin: 0 }}>Ubicadas dentro del sector oeste de nuestro Parque, brindando calidez, ambiente climatizado, modernos diseños, atención personalizada para acompañar a familiares</p>
                <p style={{ margin: 0 }}>y visitas en un lugar confortable y rodeados de naturaleza.</p>
              </div>
            </div>
            <img src="/assets/pastilla-velatorios.png" alt="" className="block" style={{ position: "absolute", right: "clamp(12px, 3vw, 32px)", top: "50%", transform: "translateY(-50%)", height: "clamp(340px, 40vw, 460px)", width: "auto", maxWidth: "44%", objectFit: "contain", zIndex: 1 }} />
          </div>
          <div className="flex md:hidden flex-col items-center text-center" style={{ background: "#2C4A34", borderRadius: 32, padding: "28px 24px 32px", gap: 14, overflow: "hidden" }}>
            <p className="font-bold" style={{ fontFamily: "'Alegreya', serif", color: "#EAE2D2", fontSize: 16, letterSpacing: 2, margin: 0 }}>SALAS VELATORIAS</p>
            <div className="flex flex-col" style={{ color: "#EAE2D2", fontSize: 14, lineHeight: 1.7, gap: 10 }}>
              <p style={{ margin: 0 }}>Ubicadas dentro del sector oeste de nuestro Parque, brindando calidez, ambiente climatizado, modernos diseños, atención personalizada para acompañar a familiares</p>
              <p style={{ margin: 0 }}>y visitas en un lugar confortable y rodeados de naturaleza.</p>
            </div>
            <img src="/assets/pastilla-velatorios.png" alt="" className="block" style={{ width: "100%", maxWidth: 260, height: "auto", objectFit: "contain", marginTop: 6 }} />
          </div>
        </section>

        <ContactSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
