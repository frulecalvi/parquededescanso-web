import FormData from "form-data";
import Mailgun from "mailgun.js";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      nombre,
      apellido,
      email,
      telefono,
      mensaje,
      "cf-turnstile-response": token,
    } = body;

    if (!token) {
      return Response.json(
        { error: "Verificación de seguridad requerida" },
        { status: 400 }
      );
    }

    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip")?.trim() ||
      "unknown";

    let siteverifyResult;
    try {
      const r = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            secret: process.env.TURNSTILE_SECRET || "",
            response: token,
            remoteip: clientIp,
          }),
        }
      );
      if (!r.ok) throw new Error(`siteverify ${r.status}`);
      siteverifyResult = await r.json();
    } catch (err) {
      console.error("Turnstile siteverify error:", err);
      return Response.json({ error: "forbidden" }, { status: 403 });
    }

    if (!siteverifyResult.success) {
      console.error(
        "Turnstile validation failed:",
        siteverifyResult["error-codes"]
      );
      return Response.json({ error: "forbidden" }, { status: 403 });
    }

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
