import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ContactForm from "@/components/ContactForm";

const FAQ = [
  { q: "¿Qué hacer en caso de fallecimiento de un familiar?", a: "En caso de fallecimiento de un familiar comunicarse al teléfono de urgencias 154700700 y un asesor lo orientará en los pasos a seguir." },
  { q: "¿Porqué adquirir una parcela con prevención?", a: "En la prevención usted podrá elegir con total objetividad y contar, además, con un descuento adicional para que, en momentos difíciles, pueda tener la tranquilidad que se necesita y la seguridad de haber tomado la decisión correcta." },
  { q: "¿Cómo realizar un traslado de un cementerio municipal a Parque de Descanso?", a: "Para realizar un traslado de otro cementerio, tiene que gestionar el traslado en el cementerio de origen, tener acta de defunción y orden de traslado. Una vez pactado el turno se debe comunicar con nuestros asesores para coordinar. El titular o los autorizados son los únicos habilitados para hacer este trámite." },
  { q: "¿Cuál es la capacidad de las parcelas?", a: "La capacidad de una parcela es de tres féretros o seis urnas o nueve restos cremados." },
  { q: "¿Cuándo se paga el Mantenimiento Anual?", a: "El mantenimiento y conservación es una tasa municipal anual con vencimiento el 31 de enero de cada año. También se puede abonar en forma semestral con vencimientos el 31 de enero y el 31 de julio de cada año." },
  { q: "¿Qué pasa si no pago el Mantenimiento Anual?", a: "Como indica la ordenanza Municipal, la falta de pago de tres derechos anuales por mantenimiento y conservación consecutivos o cinco alternados por parte del titular de concesión de parcela, hará que se opere automáticamente la rescisión de la misma por parte de este. De encontrarse realizadas el máximo de las inhumaciones permitidas, los derechos anuales vencidos serán cobrados por el Municipio por vía de apremio." },
  { q: "¿Pueden retirarse los restos de la parcela?", a: "Los restos de la parcela se pueden retirar por orden judicial o administrativa municipal una vez transcurridos cinco años de la última inhumación. Para este trámite deberán asesorarse en nuestras oficinas o por teléfono." },
  { q: "¿Se puede colocar placa recordatoria?", a: "Prohíbese colocar sobre las parcelas cualquier tipo de ornamento. Solo se permitirá la colocación de las lápidas con características uniformes que contemplan las ordenanzas." },
  { q: "¿Puedo vender o transferir la parcela?", a: "Salvo resolución judicial, las concesiones de sepultura a perpetuidad, sólo podrán cederse o transferirse a terceros, previa autorización expresa de la Municipalidad." },
  { q: "¿Puedo retirar los restos para cremarlos?", a: "Los restos pueden ser exhumados según consta en la ordenanza municipal, con orden judicial o administrativa municipal. Los restos pueden ser cremados pero no está permitido volver a inhumarlos en este cementerio." },
  { q: "¿Tienen cobrador a domicilio?", a: "Contamos con cobradores a domicilio así como también está habilitada la página www.parquededescanso.com para pagar online." },
  { q: "En caso del fallecimiento del Titular, ¿a nombre de quién queda la parcela?", a: "En caso de fallecimiento del titular, se deberán presentar los descendientes con certificados que demuestren el vínculo, para tomar la titularidad; todos los derechos y obligaciones se transmiten a ellos." },
  { q: "¿Quién puede autorizar las inhumaciones?", a: "Las inhumaciones podrán ser efectuadas por los titulares, cotitulares o autorizados presentando su DNI." },
  { q: "¿Cómo hacer una transferencia?", a: "Para realizar transferencias de titularidad consulte con nuestros asesores al teléfono 4412900, por WhatsApp al 261 5561461 o bien acercarse por las oficinas de calle Colón 593 o del Cementerio." },
];

export default function Servicios() {
  return (
    <div style={{ fontFamily: "'Alegreya', serif", background: "#EEE8DC", minHeight: "100vh" }}>
      <Header />
      <main>
        <section className="mx-auto px-6 text-center" style={{ maxWidth: 900, paddingTop: "clamp(32px, 6vw, 64px)" }}>
          <h1 className="font-bold" style={{ fontFamily: "'Alegreya', serif", letterSpacing: 2, color: "#2C4A34", fontSize: "clamp(26px, 4vw, 42px)", margin: 0 }}>
            NUESTROS SERVICIOS
          </h1>
        </section>

        <section className="mx-auto px-6" style={{ maxWidth: 1000, marginTop: "clamp(32px, 5vw, 48px)" }}>
          <div className="hidden md:flex items-center relative overflow-visible" style={{ background: "#2C4A34", borderRadius: 40, padding: "clamp(20px, 2.2vw, 26px) clamp(28px, 4vw, 40px)", minHeight: "clamp(190px, 19vw, 230px)" }}>
            <div style={{ flex: "0 1 54%", maxWidth: "54%", position: "relative", zIndex: 2 }}>
              <p className="italic font-semibold" style={{ fontFamily: "'Alegreya', serif", color: "#EAE2D2", fontSize: "clamp(15px, 1.8vw, 18px)", lineHeight: 1.4, margin: "0 0 14px" }}>
                Asesoramiento las 24hs para adquisición de Parcelas, Cremaciones y Servicios de Sepelio.
              </p>
              <p style={{ color: "#EAE2D2", fontSize: "clamp(13px, 1.4vw, 15px)", lineHeight: 1.7, margin: 0 }}>
                Nuestra empresa brinda un sistema integral de servicios fúnebres, ceremonial y protocolo, que le permitirán tomar una decisión inteligente en tan difícil momento, y por eso estamos para ayudar.
              </p>
            </div>
            <img src="/assets/pastilla-servicios.png" alt="" className="block" style={{ position: "absolute", right: "clamp(12px, 3vw, 32px)", top: "50%", transform: "translateY(-50%)", height: "clamp(340px, 40vw, 460px)", width: "auto", maxWidth: "44%", objectFit: "contain", zIndex: 1 }} />
          </div>
          <div className="flex md:hidden flex-col items-center text-center" style={{ background: "#2C4A34", borderRadius: 32, padding: "28px 24px 32px", gap: 14, overflow: "hidden" }}>
            <p className="italic font-semibold" style={{ fontFamily: "'Alegreya', serif", color: "#EAE2D2", fontSize: 16, lineHeight: 1.4, margin: 0 }}>
              Asesoramiento las 24hs para adquisición de Parcelas, Cremaciones y Servicios de Sepelio.
            </p>
            <p style={{ color: "#EAE2D2", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
              Nuestra empresa brinda un sistema integral de servicios fúnebres, ceremonial y protocolo, que le permitirán tomar una decisión inteligente en tan difícil momento, y por eso estamos para ayudar.
            </p>
            <img src="/assets/pastilla-servicios.png" alt="" className="block" style={{ width: "100%", maxWidth: 260, height: "auto", objectFit: "contain", marginTop: 6 }} />
          </div>
        </section>

        <section className="mx-auto px-6" style={{ maxWidth: 900, marginTop: "clamp(28px, 4vw, 40px)" }}>
          <div className="flex flex-col items-center text-center" style={{ background: "#e6ded0", borderRadius: 40, padding: "clamp(28px, 4vw, 40px) clamp(24px, 4vw, 44px)", gap: 12 }}>
            <h3 className="font-bold" style={{ fontFamily: "'Alegreya', serif", color: "#2C4A34", letterSpacing: 2, fontSize: "clamp(18px, 2.2vw, 24px)", margin: 0 }}>
              ESTAMOS PARA AYUDARLO
            </h3>
            <p className="italic font-semibold" style={{ fontFamily: "'Alegreya', serif", color: "#4B6B45", letterSpacing: 1, fontSize: 14, margin: 0 }}>
              COMUNÍQUESE CON UN ASESOR
            </p>
            <p style={{ color: "#26261F", fontSize: 14, lineHeight: 1.6, maxWidth: 520, margin: 0 }}>
              Nuestro equipo de asesores está capacitado para asistirlo en cada consulta que Ud necesite, acompañarlo y guiarlo para que su decisión sea la correcta.
            </p>
            <a href="#" className="inline-block rounded-full border-none cursor-pointer" style={{ fontFamily: "'Alegreya', serif", fontWeight: 700, fontSize: 12, letterSpacing: 1, color: "#EAE2D2", background: "#2C4A34", padding: "12px 28px", marginTop: 8, textDecoration: "none" }}>
              CLICK AQUÍ
            </a>
          </div>
        </section>

        <section className="mx-auto px-6 text-center" style={{ maxWidth: 900, marginTop: "clamp(28px, 4vw, 40px)" }}>
          <a href="#" className="inline-block rounded-full border-none cursor-pointer" style={{ fontFamily: "'Alegreya', serif", fontWeight: 700, fontSize: "clamp(14px, 1.8vw, 17px)", letterSpacing: 1, color: "#EAE2D2", background: "#2C4A34", padding: "16px 36px", textDecoration: "none" }}>
            REALIZÁ TUS PAGOS AQUÍ
          </a>
        </section>

        <section className="mx-auto px-6" style={{ maxWidth: 900, marginTop: "clamp(40px, 6vw, 60px)" }}>
          <h2 className="font-bold underline" style={{ fontFamily: "'Alegreya', serif", color: "#2C4A34", fontSize: "clamp(20px, 2.4vw, 26px)", letterSpacing: 1, textUnderlineOffset: 8, margin: "0 0 24px" }}>
            PREGUNTAS FRECUENTES
          </h2>

          <style>{`
            .faq-answer { display: none; }
            .faq-toggle::after { content: "+"; }
            .faq-item input:checked ~ .faq-answer { display: block; margin-top: 10px; }
            .faq-item input:checked ~ .faq-question .faq-toggle::after { content: "−"; }
          `}</style>

          <div className="flex flex-col">
            {FAQ.map((item, i) => (
              <div key={i} className="faq-item" style={{ borderBottom: "1px solid rgba(75,107,69,0.25)", padding: "14px 0" }}>
                <input type="checkbox" id={`faq-${i}`} className="sr-only" />
                <label
                  htmlFor={`faq-${i}`}
                  className="faq-question"
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    gap: 12,
                    fontFamily: "'Alegreya', serif",
                    fontWeight: 700,
                    color: "#2C4A34",
                    fontSize: "clamp(14px, 1.6vw, 16px)",
                    cursor: "pointer",
                    touchAction: "manipulation",
                    WebkitTapHighlightColor: "transparent",
                  }}
                >
                  <span>{i + 1}. {item.q}</span>
                  <span
                    className="faq-toggle flex-shrink-0"
                    style={{ color: "#4B6B45", fontSize: 18 }}
                  />
                </label>
                <p
                  className="faq-answer italic"
                  style={{
                    color: "#4B6B45",
                    fontSize: "clamp(13px, 1.5vw, 15px)",
                    lineHeight: 1.7,
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        <ContactSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
