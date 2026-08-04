export default function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/5492615561461"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110"
      style={{
        width: 56,
        height: 56,
        backgroundColor: "#4dd67f",
      }}
    >
      <img
        src="/assets/contacto-whatsapp.svg"
        alt="WhatsApp"
        style={{ width: 42, height: 42, filter: "brightness(0) invert(1)" }}
      />
    </a>
  );
}
