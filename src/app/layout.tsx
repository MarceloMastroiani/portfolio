import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import Sidebar from "@/components/layout/SideBar/SideBar";
import FooterContact from "@/components/layout/FooterContact/FooterContact";
import { ReactLenis } from "lenis/react";

//Cambiar al terminar
export const metadata: Metadata = {
  title: "Marcelo Mastroiani - Portfolio",
  description:
    "Portfolio of Marcelo Mastroiani, a passionate Full Stack Developer.",
  keywords: "Full Stack Developer, Portfolio, React, Next.js, JavaScript",
  icons: {
    icon: "./favicon.png",
  },
  openGraph: {
    url: "https://marcelomastroiani-portfolio.vercel.app",
    title: "Marcelo Mastroiani - Portfolio",
    description: "Explore the work and projects of Marcelo Mastroiani.",
    images: [
      {
        url: "https://marcelomastroiani-portfolio.vercel.app/fondo-pantalla.webp",
        width: 800,
        height: 600,
        alt: "Marcelo Mastroiani Portfolio",
      },
    ],
    siteName: "Marcelo Mastroiani Portfolio",
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
        <Sidebar />
        <ReactLenis root>{children}</ReactLenis>
        <FooterContact />
      </body>
    </html>
  );
}
