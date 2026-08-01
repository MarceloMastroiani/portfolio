import { setDefaultResultOrder } from "node:dns";

// api.resend.com (Cloudflare) puede resolver a IPv6 sin ruta disponible en el
// entorno, lo que cuelga la conexión. Forzar IPv4 evita el hang.
setDefaultResultOrder("ipv4first");

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

const RESEND_API_KEY = env("RESEND_API_KEY", "");
const FROM_EMAIL = env("RESEND_FROM_EMAIL", "onboarding@resend.dev");
const TO_EMAIL = env("CONTACT_TO_EMAIL", "mastroianimarcelo04@gmail.com");

const EMAIL_TIMEOUT_MS = 8_000;

export async function POST(req: Request): Promise<Response> {
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

  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY no configurada");
    return Response.json(
      { success: false, error: "Configuración de email incompleta" },
      { status: 500 },
    );
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), EMAIL_TIMEOUT_MS);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: cleanEmail,
        subject: `[Portafolio] ${cleanSubject}`,
        text: `Nombre: ${cleanName}\nEmail: ${cleanEmail}\n\n${cleanMessage}`,
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("Resend error:", response.status, detail);
      return Response.json(
        { success: false, error: "Error al enviar el mensaje" },
        { status: 500 },
      );
    }
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      console.error("Email timeout tras 8s");
    } else {
      console.error("Error enviando email:", error);
    }
    return Response.json(
      { success: false, error: "Error al enviar el mensaje" },
      { status: 500 },
    );
  } finally {
    clearTimeout(timeoutId);
  }

  return Response.json({ success: true });
}

export const config = {
  runtime: "nodejs",
  maxDuration: 60,
};
