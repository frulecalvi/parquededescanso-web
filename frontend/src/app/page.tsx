import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ContactForm from "@/components/ContactForm";
import ImageSlider from "@/components/ImageSlider";

const homeSlides = [
  { src: "/assets/hero-monument.jpg", alt: "Parque de Descanso" },
  { src: "/assets/park-entrance.jpg", alt: "Parque de Descanso" },
  { src: "/assets/park-1.jpg", alt: "Parque de Descanso" },
  { src: "/assets/park-2.jpg", alt: "Parque de Descanso" },
  { src: "/assets/park-3.jpg", alt: "Parque de Descanso" },
  { src: "/assets/park-4.jpg", alt: "Parque de Descanso" },
  { src: "/assets/park-5.jpg", alt: "Parque de Descanso" },
];

export default function Home() {
  return (
    <div style={{ fontFamily: "'Alegreya', serif", background: "#EEE8DC", minHeight: "100vh" }}>
      <Header />
      <main>
        {/* Logo + urgencias */}
        <section
          className="mx-auto px-6 text-center"
          style={{ maxWidth: 900, paddingTop: "clamp(32px, 6vw, 64px)" }}
        >
          <img
            src="/assets/logo-full-green.svg"
            alt="Parque de Descanso"
            className="mx-auto block"
            style={{
              width: "clamp(180px, 24vw, 300px)",
              height: "auto",
              marginBottom: 22,
            }}
          />
          <a
            href="tel:+5492614700700"
            className="inline-flex items-center gap-2 rounded-full border-none cursor-pointer"
            style={{
              fontFamily: "'Alegreya', serif",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: 1,
              color: "#EAE2D2",
              background: "#2C4A34",
              padding: "12px 26px",
              textDecoration: "none",
            }}
          >
            <span aria-hidden="true">☎</span> LLAMAR A URGENCIAS FÚNEBRES
          </a>
        </section>

        <ImageSlider slides={homeSlides} />

        {/* Social icons */}
        <section
          className="mx-auto px-6"
          style={{ maxWidth: 900, paddingTop: "clamp(32px, 5vw, 48px)" }}
        >
          <div
            className="flex flex-wrap justify-center"
            style={{ gap: "clamp(24px, 4vw, 44px)" }}
          >
            <a href="#" aria-label="Facebook" style={{ color: "#2C4A34" }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.5 21v-8.2h2.75l.41-3.2h-3.16V7.5c0-.93.26-1.56 1.6-1.56h1.7V3.1C15.98 3.03 15.06 3 13.98 3c-2.55 0-4.3 1.55-4.3 4.4v2.2H6.9v3.2h2.78V21h3.82z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" style={{ color: "#2C4A34" }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4.2" />
                <circle cx="17.4" cy="6.6" r="1" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube" style={{ color: "#2C4A34" }}>
              <svg width="34" height="30" viewBox="0 0 34 24" fill="currentColor">
                <rect x="0" y="0" width="34" height="24" rx="6" />
                <path d="M13.5 7l9 5-9 5V7z" fill="#EEE8DC" />
              </svg>
            </a>
            <a href="#" aria-label="WhatsApp" style={{ color: "#2C4A34" }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M4 20l1.3-4.1A8 8 0 1 1 9 18.4L4 20z" />
                <path d="M8.5 8.6c0 3.3 2.7 6 6 6 .5 0 1-.6.9-1.1l-.2-1a.9.9 0 0 0-.9-.7l-1.4.2a5 5 0 0 1-2.9-2.9l.2-1.4a.9.9 0 0 0-.7-.9l-1-.2c-.5-.1-1.1.4-1.1.9v1.1z" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </section>

        {/* Phone buttons */}
        <section
          className="mx-auto px-6"
          style={{ maxWidth: 900, paddingTop: "clamp(24px, 4vw, 36px)" }}
        >
          <div className="flex flex-wrap justify-center" style={{ gap: 16 }}>
            <a
              href="tel:+5492614700700"
              className="inline-block rounded-full cursor-pointer"
              style={{
                fontFamily: "'Alegreya', serif",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: 1,
                color: "#4B6B45",
                background: "#EEE8DC",
                border: "1.5px solid #4B6B45",
                padding: "14px 22px",
                textDecoration: "none",
              }}
            >
              LLAMAR A URGENCIAS FÚNEBRES
            </a>
            <a
              href="tel:+5492614216922"
              className="inline-block rounded-full cursor-pointer"
              style={{
                fontFamily: "'Alegreya', serif",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: 1,
                color: "#4B6B45",
                background: "#EEE8DC",
                border: "1.5px solid #4B6B45",
                padding: "14px 22px",
                textDecoration: "none",
              }}
            >
              LLAMAR A OFICINAS DE CIUDAD
            </a>
            <a
              href="tel:+5492614910279"
              className="inline-block rounded-full cursor-pointer"
              style={{
                fontFamily: "'Alegreya', serif",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: 1,
                color: "#4B6B45",
                background: "#EEE8DC",
                border: "1.5px solid #4B6B45",
                padding: "14px 22px",
                textDecoration: "none",
              }}
            >
              LLAMAR A OFICINA DEL PARQUE
            </a>
            <a
              href="#"
              className="inline-block rounded-full border-none cursor-pointer"
              style={{
                fontFamily: "'Alegreya', serif",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: 1,
                color: "#EEE8DC",
                background: "#2C4A34",
                padding: "14px 26px",
                textDecoration: "none",
              }}
            >
              REALIZÁ TUS PAGOS AQUÍ
            </a>
          </div>
        </section>

        {/* Nosotros section */}
        <section
          className="mx-auto flex flex-wrap items-center px-6"
          style={{
            maxWidth: 1200,
            marginTop: "clamp(40px, 6vw, 64px)",
            gap: "clamp(32px, 5vw, 56px)",
          }}
        >
          <div
            className="mx-auto"
            style={{ flex: "1 1 300px", maxWidth: 340 }}
          >
            <img
              src="/assets/park-entrance.jpg"
              alt="Entrada Parque de Descanso"
              className="block w-full"
              style={{
                aspectRatio: "3/4",
                objectFit: "cover",
                borderRadius: "50%/38%",
                border: "2px solid #4B6B45",
              }}
            />
          </div>
          <div style={{ flex: "2 1 420px" }}>
            <h2
              className="font-normal"
              style={{
                fontFamily: "'Alegreya', serif",
                letterSpacing: 4,
                color: "#4B6B45",
                fontSize: "clamp(20px, 2.6vw, 26px)",
                margin: "0 0 20px",
              }}
            >
              NOSOTROS
            </h2>
            <div
              className="flex flex-col"
              style={{
                color: "#26261F",
                fontSize: "clamp(14px, 1.4vw, 16px)",
                lineHeight: 1.8,
                gap: 14,
              }}
            >
              <p style={{ margin: 0 }}>
                Nos ocupamos de sus necesidades e inquietudes con un grupo de
                asesores altamente capacitados, que lo van a acompañar en la
                toma de la decisión.
              </p>
              <p style={{ margin: 0 }}>
                Amplios prados verdes, grandes canteros de flores, lugares que
                favorecen la reflexión en contacto con la naturaleza, basándonos
                en el concepto de religar al hombre con sus tradiciones.
              </p>
              <p style={{ margin: 0 }}>
                El predio está dividido en 47 sectores distribuidos en el Parque
                Este y el Parque Oeste; han sido diseñados por ingenieros
                agrónomos y paisajistas que eligen las especies forestales y
                arbustos ornamentales más adecuados a nuestro clima.
              </p>
              <p style={{ margin: 0 }}>
                Los modernos sistemas de riego hacen posible el mantenimiento
                de estos, como así también del césped que se resiembra
                anualmente.
              </p>
              <p style={{ margin: 0 }}>
                Ahora, contamos con servicio de Cremación, innovamos en
                tecnología para mejorar nuestras prestaciones, una opción digna
                que permitirá la decisión correcta para una emotiva despedida.
              </p>
              <p style={{ margin: 0 }}>
                Respeto y transparencia en la atención de nuestros servicios.
              </p>
              <p style={{ margin: 0, fontStyle: "italic", color: "#4B6B45" }}>
                Estamos para asesorar, ayudar y acompañar.
              </p>
            </div>
          </div>
        </section>

        {/* Servicio empresas */}
        <section
          className="mx-auto px-6"
          style={{ maxWidth: 800, marginTop: "clamp(32px, 5vw, 48px)" }}
        >
          <div
            className="flex flex-col items-center text-center"
            style={{
              background: "#2C4A34",
              borderRadius: 40,
              padding: "clamp(28px, 4vw, 40px) clamp(20px, 4vw, 36px)",
              gap: 18,
            }}
          >
            <p
              className="font-bold"
              style={{
                fontFamily: "'Alegreya', serif",
                color: "#EAE2D2",
                fontSize: "clamp(15px, 2vw, 19px)",
                letterSpacing: 1,
                margin: 0,
              }}
            >
              SERVICIO EXCLUSIVO PARA EMPRESAS FÚNEBRES
            </p>
            <a
              href="#"
              className="inline-block rounded-full border-none cursor-pointer"
              style={{
                fontFamily: "'Alegreya', serif",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: 1,
                color: "#2C4A34",
                background: "#EEE8DC",
                padding: "11px 24px",
                textDecoration: "none",
              }}
            >
              CLICK AQUÍ
            </a>
          </div>
        </section>

        <ContactSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
