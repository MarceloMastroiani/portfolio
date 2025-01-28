import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/SideBar/SideBar";

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
    title: "Marcelo Mastroiani - Portfolio",
    description: "Explore the work and projects of Marcelo Mastroiani.",
    url: "https://portfolio-sepia-mu-62.vercel.app",
    images: [
      {
        url: "/fondo-pantalla.webp",
        width: 1200,
        height: 630,
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
        {children}
      </body>
    </html>
  );
}
