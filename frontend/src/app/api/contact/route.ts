import FormData from "form-data";
import Mailgun from "mailgun.js";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, apellido, email, telefono, mensaje } = body;

    if (!nombre || !apellido || !email || !mensaje) {
      return Response.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({
      username: "api",
      key: process.env.MAILGUN_API_KEY || "API_KEY",
    });

    const data = await mg.messages.create("frulecalvi.ar", {
      from: "Formulario de Contacto <postmaster@frulecalvi.ar>",
      to: ["Franco <frulecalvi@gmail.com>"],
      subject: `Nueva consulta de ${nombre} ${apellido}`,
      text: `Nombre: ${nombre} ${apellido}\nEmail: ${email}\nTeléfono: ${telefono || "No proporcionado"}\n\nMensaje:\n${mensaje}`,
      html: `<p><strong>Nombre:</strong> ${nombre} ${apellido}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Teléfono:</strong> ${telefono || "No proporcionado"}</p>
             <p><strong>Mensaje:</strong></p>
             <p>${mensaje.replace(/\n/g, "<br>")}</p>`,
    });

    return Response.json({ success: true, id: data.id });
  } catch (error) {
    console.error("Error enviando email:", error);
    return Response.json(
      { error: "Error al enviar el mensaje" + error },
      { status: 500 }
    );
  }
}
