import { Resend } from "resend";

// "undefined"/vacío no cuentan como valor real: caen al fallback.
const env = (key: string, fallback: string): string => {
  const value = process.env[key];
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (trimmed !== "" && trimmed !== "undefined") {
      return trimmed;
    }
  }
  return fallback;
};

const resend = new Resend(env("RESEND_API_KEY", ""));
const FROM_EMAIL = env("RESEND_FROM_EMAIL", "onboarding@resend.dev");
const TO_EMAIL = env("CONTACT_TO_EMAIL", "mastroianimarcelo04@gmail.com");

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return Response.json(
      { success: false, error: "Método no permitido" },
      { status: 405 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json(
      { success: false, error: "JSON inválido" },
      { status: 400 },
    );
  }

  const { name, email, subject, message, company } = body ?? {};

  // Honeypot: si se completa, se descarta silenciosamente (spam).
  if (company) {
    return Response.json({ success: true });
  }

  const clean = (value: unknown) =>
    typeof value === "string" ? value.trim() : "";

  const cleanName = clean(name);
  const cleanEmail = clean(email);
  const cleanSubject = clean(subject);
  const cleanMessage = clean(message);

  if (!cleanName || !cleanEmail || !cleanSubject || !cleanMessage) {
    return Response.json(
      { success: false, error: "Todos los campos son obligatorios" },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
    return Response.json(
      { success: false, error: "Email inválido" },
      { status: 400 },
    );
  }

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: cleanEmail,
      subject: `[Portafolio] ${cleanSubject}`,
      text: `Nombre: ${cleanName}\nEmail: ${cleanEmail}\n\n${cleanMessage}`,
    });
  } catch (error) {
    console.error("Error enviando email:", error);
    return Response.json(
      { success: false, error: "Error al enviar el mensaje" },
      { status: 500 },
    );
  }

  return Response.json({ success: true });
}

export const config = {
  runtime: "nodejs",
};
