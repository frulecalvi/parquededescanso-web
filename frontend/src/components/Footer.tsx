export default function Footer() {
  return (
    <footer
      className="px-6"
      style={{
        marginTop: "clamp(56px, 8vw, 80px)",
        background: "#2C4A34",
        color: "#EEE8DC",
        paddingTop: "clamp(36px, 5vw, 52px)",
        paddingBottom: 28,
      }}
    >
      <div
        className="mx-auto flex flex-wrap"
        style={{
          maxWidth: 1100,
          gap: "clamp(28px, 4vw, 48px)",
          fontSize: 14,
          lineHeight: 1.7,
        }}
      >
        <div style={{ flex: "1 1 300px" }}>
          <p
            className="font-bold tracking-wide"
            style={{
              fontFamily: "'Alegreya', serif",
              fontSize: 15,
              margin: "0 0 10px",
            }}
          >
            PARQUE
          </p>
          <p style={{ margin: "0 0 10px" }}>
            Chacón s/n – Rodeo de la Cruz – Guaymallén, Mendoza.
          </p>
          <p style={{ margin: "0 0 2px" }}>Horarios para visitas:</p>
          <p style={{ margin: "0 0 10px" }}>
            Lunes a Domingos de 09:00 a 18:00 hs.
            <br />
            Los portones del Parque se cierran a las 17.30hs.
          </p>
          <p style={{ margin: "0 0 2px" }}>
            Horarios para visitas 24/12, 25/12, 31/12 y 01/01:
          </p>
          <p style={{ margin: "0 0 10px" }}>
            De 09:00 a 17:00 hs. Los portones se cierran a las 16.30hs.
          </p>
          <p style={{ margin: "0 0 2px" }}>
            Horarios de Oficinas de Administración en Parque:
          </p>
          <p style={{ margin: 0 }}>
            Lunes a Viernes de 9:00 a 18:00 hs. Sábados, Domingos y Feriados de
            09:00 a 19:00hs.
          </p>
        </div>
        <div style={{ flex: "1 1 300px" }}>
          <p
            className="font-bold tracking-wide"
            style={{
              fontFamily: "'Alegreya', serif",
              fontSize: 15,
              margin: "0 0 10px",
            }}
          >
            OFICINA DE ATENCIÓN EN CALLE COLÓN
          </p>
          <p style={{ margin: "0 0 10px" }}>
            Atención al clientes y ventas
            <br />
            Colón 593, esq. 25 de Mayo (C.P 5500) Ciudad, Mendoza.
          </p>
          <p style={{ margin: "0 0 2px" }}>Horarios de atención:</p>
          <p style={{ margin: "0 0 18px" }}>
            Lunes a viernes de 8:30 a 18:00 hs.
            <br />
            31 de diciembre de 8:30 a 13:00 hs.
            <br />
            25 de diciembre y 1 de enero CERRADO.
          </p>
          <p
            className="font-bold tracking-wide"
            style={{
              fontFamily: "'Alegreya', serif",
              fontSize: 15,
              margin: "0 0 6px",
            }}
          >
            URGENCIAS FÚNEBRES
          </p>
          <p style={{ margin: 0 }}>+54 9 261 470 0700</p>
        </div>
      </div>
      <div
        className="mx-auto text-center"
        style={{
          maxWidth: 1100,
          marginTop: 32,
          borderTop: "1px solid rgba(238,232,220,0.3)",
          paddingTop: 18,
          fontSize: 12.5,
          color: "#cdd6c8",
        }}
      >
        © 2022 Todos los derechos reservados Parque de Descanso Av Colón 593
        Ciudad Mendoza
      </div>
    </footer>
  );
}
