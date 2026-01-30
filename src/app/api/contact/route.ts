import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      subject,
      message,
      company, // honeypot anti-spam
    } = body;

    // 🛡️ Anti-spam invisible (bots suelen completar este campo)
    if (company) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    }

    // ✅ Validación mínima
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Invalid request data",
        }),
        { status: 400 },
      );
    }

    // ✉️ Envío del mail
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["mastroianimarcelo04@gmail.com"],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <h2>Nuevo mensaje desde el portfolio</h2>

        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    // ✅ Respuesta clara para el frontend
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Internal server error",
      }),
      { status: 500 },
    );
  }
}
