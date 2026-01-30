import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { ReactLenis } from "lenis/react";
import { Toaster } from "react-hot-toast";

//Cambiar al terminar
export const metadata: Metadata = {
  title: "Marcelo Mastroiani | Desarrollador Full-Stack",
  description:
    "Portafolio de Marcelo Mastroiani - Desarrollador Full-Stack especializado en NestJS, Node.js, React, Next.js, TypeScript. Creando aplicaciones web modernas con diseño atractivo y funcionalidad eficiente.",
  keywords: [
    "desarrollador",
    "full-stack",
    "back-end",
    "nestjs",
    "nodejs",
    "react",
    "typescript",
    "argentina",
  ],
  authors: [{ name: "Marcelo Mastroiani" }],
  icons: {
    icon: "./favicon.png",
  },
  openGraph: {
    title: "Marcelo Mastroiani | Desarrollador Full-Stack",
    url: "https://marcelomastroiani-portfolio.vercel.app",
    description: "Portafolio profesional de desarrollo web",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactLenis root>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "#171717",
                color: "#fff",
                border: "1px solid #262626",
              },
            }}
          />
        </ReactLenis>
      </body>
    </html>
  );
}
