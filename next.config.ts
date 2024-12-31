import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Evitar que el navegador adivine el tipo de contenido
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Prevenir que el contenido de tu sitio se muestre en un iframe
          { key: "X-Frame-Options", value: "DENY" },
          // Activar HTTP Strict Transport Security (HSTS)
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          // Políticas de referencias
          { key: "Referrer-Policy", value: "no-referrer-when-downgrade" },
          // Controlar qué características pueden acceder a las APIs del navegador
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
